import { getAllNotes, readTimeOf } from '../content/notes';
import type { Article } from './articleTypes';

export type { Article } from './articleTypes';

function displayDate(d: Date): string {
  return d.toLocaleDateString('en-GB', { month: 'long', year: 'numeric' });
}

/** Compatibility shim over the MDX content loader. Same slugs, same fields. */
export const ARTICLES: Article[] = getAllNotes().map((n) => ({
  slug: n.slug,
  title: n.title,
  cluster: n.cluster,
  date: displayDate(n.date),
  readTime: readTimeOf(n),
  summary: n.summary,
  targetServiceUrl: n.targetServiceUrl,
  targetServiceLabel: n.targetServiceLabel,
  content: [],
}));
