/**
 * Build-time notes extraction.
 * Reads content/notes/*.mdx, validates frontmatter with the shared zod
 * schema, and writes src/content/notes-manifest.json consumed by the app.
 * Run: npx tsx scripts/extract-notes.ts  (also wired as `prebuild`)
 */
import { readdirSync, readFileSync, writeFileSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';
import matter from 'gray-matter';
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

function headingsOf(body: string): { text: string }[] {
  return body
    .split('\n')
    .filter((l) => l.startsWith('## '))
    .map((l) => ({ text: l.slice(3).trim() }));
}

export function extractNotes(contentDir = join(repoRoot, 'content', 'notes')): ManifestEntry[] {
  return readdirSync(contentDir)
    .filter((f) => f.endsWith('.mdx') && !f.startsWith('_') && !f.startsWith('.'))
    .map((file) => {
      const raw = readFileSync(join(contentDir, file), 'utf8');
      const { data, content: body } = matter(raw);
      const meta = NoteMetaSchema.parse(data);
      return {
        ...meta,
        date: meta.date.toISOString(),
        slug: slugOf(file),
        wordCount: wordsOf(body),
        headings: headingsOf(body),
      };
    })
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
