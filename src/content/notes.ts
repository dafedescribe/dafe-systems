import type { ComponentType } from 'react';
import type { NoteEntry } from './note-schema';
import manifest from './notes-manifest.json';

type ManifestEntry = Omit<NoteEntry, 'date'> & { date: string };

function revive(e: ManifestEntry): NoteEntry {
  return { ...e, date: new Date(e.date) };
}

const componentModules = import.meta.glob(
  ['../../content/notes/*.mdx', '!../../content/notes/_*', '!../../content/notes/.*'],
  { eager: true }
) as Record<string, { default: ComponentType<{ components?: Record<string, ComponentType<any>> }> }>;

function moduleFor(slug: string) {
  const key = Object.keys(componentModules).find((p) => p.split('/').pop() === `${slug}.mdx`);
  if (!key) throw new Error(`unknown note module: ${slug}`);
  return componentModules[key].default;
}

export function getAllNotes(): NoteEntry[] {
  return (manifest as ManifestEntry[]).map(revive);
}

export function getNote(slug: string): NoteEntry | undefined {
  return getAllNotes().find((n) => n.slug === slug);
}

export function getNoteEntry(slug: string): NoteEntry {
  const found = getAllNotes().find((n) => n.slug === slug);
  if (!found) throw new Error(`unknown note: ${slug}`);
  return found;
}

export function getNoteComponent(slug: string): ComponentType<{ components?: Record<string, ComponentType<any>> }> {
  return moduleFor(slug);
}

export function readTimeOf(entry: Pick<NoteEntry, 'wordCount'>): string {
  return `${Math.max(1, Math.round(entry.wordCount / 200))} min read`;
}
