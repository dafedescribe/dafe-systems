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
  targetServiceUrl: z.string().regex(/^\/(industry|automation|work|teaching|contact)/),
  targetServiceLabel: z.string().min(5).max(80),
  draft: z.boolean().default(false),
});

export type NoteMeta = z.infer<typeof NoteMetaSchema> & { slug: string };

export interface NoteHeading {
  text: string;
  id: string;
}

export interface NoteEntry extends NoteMeta {
  wordCount: number;
  headings: NoteHeading[];
}
