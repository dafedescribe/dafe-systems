import matter from 'gray-matter';
import { z } from 'zod';

export const CLUSTERS = [
  'Industrial / RFQ',
  'Tender Monitoring',
  'Automation Architecture',
  'Data & Python',
  'Teaching & Systems Literacy',
] as const;

export const NoteMetaSchema = z.object({
  title: z.string().min(10).max(120),
  cluster: z.enum(CLUSTERS),
  date: z.coerce.date(),
  summary: z.string().min(40).max(300),
  cover: z.string().regex(/^\/uploads\/[a-z0-9\-/]+\.(webp|jpg|jpeg|png)$/),
  coverAlt: z.string().min(10).max(200),
  tags: z.array(z.string().regex(/^[a-z0-9-]+$/)).max(6).default([]),
  targetServiceUrl: z.string().regex(/^\/(industry|automation|work|contact)/),
  targetServiceLabel: z.string().min(5).max(80),
  draft: z.boolean().default(false),
});

export type NoteMeta = z.infer<typeof NoteMetaSchema> & { slug: string };

const rawFiles = import.meta.glob('../../content/notes/*.mdx', {
  query: '?raw',
  import: 'default',
  eager: true,
}) as Record<string, string>;

function slugOf(path: string): string {
  return path.split('/').pop()!.replace(/\.mdx$/, '');
}

function rawOf(slug: string): string | undefined {
  const key = Object.keys(rawFiles).find((p) => slugOf(p) === slug);
  return key ? rawFiles[key] : undefined;
}

export function getNoteRaw(slug: string): string {
  const raw = rawOf(slug);
  if (!raw) throw new Error(`unknown note: ${slug}`);
  return raw;
}

export function getAllNotes(): NoteMeta[] {
  return Object.entries(rawFiles)
    .filter(([p]) => !p.split('/').pop()!.startsWith('_') && !p.split('/').pop()!.startsWith('.'))
    .map(([path, raw]) => {
      const { data } = matter(raw);
      return { ...NoteMetaSchema.parse(data), slug: slugOf(path) };
    })
    .filter((n) => !n.draft)
    .sort((a, b) => b.date.getTime() - a.date.getTime());
}

export function getNote(slug: string): NoteMeta | undefined {
  return getAllNotes().find((n) => n.slug === slug);
}

export function readTimeOf(raw: string): string {
  const words = raw
    .replace(/^---[\s\S]*?---/, '')
    .split(/\s+/)
    .filter(Boolean).length;
  return `${Math.max(1, Math.round(words / 200))} min read`;
}

export function headingsOf(raw: string): { text: string }[] {
  return raw
    .split('\n')
    .filter((l) => l.startsWith('## '))
    .map((l) => ({ text: l.slice(3).trim() }));
}
