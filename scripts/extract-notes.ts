/**
 * Build-time notes extraction.
 * Reads content/notes/*.mdx, validates frontmatter with the shared zod
 * schema, and writes src/content/notes-manifest.json consumed by the app.
 * Run: npx tsx scripts/extract-notes.ts  (also wired as `prebuild`)
 */
import { readdirSync, readFileSync, statSync, writeFileSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';
import matter from 'gray-matter';
import GithubSlugger from 'github-slugger';
import { NoteMetaSchema, type NoteEntry } from '../src/content/note-schema.js';

const here = dirname(fileURLToPath(import.meta.url));
const repoRoot = join(here, '..');

export type ManifestEntry = Omit<NoteEntry, 'date'> & { date: string };

export function slugOf(filename: string): string {
  return filename.replace(/\.mdx$/, '');
}

function wordsOf(body: string): number {
  return body.split(/\s+/).filter(Boolean).length;
}

function headingsOf(body: string): { text: string; id: string }[] {
  const slugger = new GithubSlugger();
  return body
    .split('\n')
    .filter((l) => l.startsWith('## '))
    .map((l) => l.slice(3).trim())
    .map((text) => ({ text, id: slugger.slug(text) }));
}

const UPLOAD_BUDGET = 2 * 1024 * 1024;

function assertUploadBudget(publicDir: string, src: string, file: string): void {
  if (!src.startsWith('/')) return;
  const abs = join(publicDir, src.replace(/^\//, ''));
  let size: number;
  try {
    size = statSync(abs).size;
  } catch {
    throw new Error(`${file}: upload ${src} not found in public/`);
  }
  if (size > UPLOAD_BUDGET) {
    throw new Error(`${file}: upload ${src} is ${size} bytes (limit ${UPLOAD_BUDGET})`);
  }
}

function bodyUploads(body: string): string[] {
  const found = new Set<string>();
  for (const m of body.matchAll(/src="(\/[^"]+)"/g)) found.add(m[1]);
  return [...found];
}

export function extractNotes(
  contentDir = join(repoRoot, 'content', 'notes'),
  publicDir = join(repoRoot, 'public')
): ManifestEntry[] {
  const entries: ManifestEntry[] = [];
  for (const file of readdirSync(contentDir)) {
    if (!file.endsWith('.mdx') || file.startsWith('_') || file.startsWith('.')) continue;
    const raw = readFileSync(join(contentDir, file), 'utf8');
    const { data, content: body } = matter(raw);
    let meta;
    try {
      meta = NoteMetaSchema.parse(data);
    } catch (e) {
      if (data && (data as any).draft === true) {
        console.warn(`skip draft ${file}: ${e instanceof Error ? e.message.split('\n')[0] : e}`);
        continue;
      }
      throw new Error(`${file}: ${e instanceof Error ? e.message : e}`);
    }
    assertUploadBudget(publicDir, meta.cover, file);
    for (const src of bodyUploads(body)) assertUploadBudget(publicDir, src, file);
    entries.push({
      ...meta,
      date: meta.date.toISOString(),
      slug: slugOf(file),
      wordCount: wordsOf(body),
      headings: headingsOf(body),
    });
  }
  return entries
    .filter((n) => !n.draft)
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
}

const isMain = process.argv[1] === fileURLToPath(import.meta.url);
if (isMain) {
  const out = process.argv[2] ?? join(repoRoot, 'src', 'content', 'notes-manifest.json');
  const entries = extractNotes();
  writeFileSync(out, JSON.stringify(entries, null, 2) + '\n');
  console.log(`extracted ${entries.length} notes → ${out}`);
}
