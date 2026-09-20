# Content Authoring Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Owner writes/edits image-rich notes posts in a browser CMS; posts render in enforced rich templates; publishing auto-deploys.

**Architecture:** Notes move from `articlesData.ts` string arrays to `content/notes/*.mdx` validated by zod; `@mdx-js/rollup` renders them through custom design components; Sveltia CMS provides the editing UI with GitHub OAuth via a Vercel proxy; a build script prerenders notes routes to static HTML for SEO.

**Tech Stack:** Vite 6, React 19, Tailwind v4, MDX (`@mdx-js/rollup`), `gray-matter`, `zod`, `vitest`, Sveltia CMS (static), Vercel serverless (`api/auth.js`).

**Spec:** `docs/superpowers/specs/2026-09-19-content-authoring.md`

## Global Constraints

- React 19 + Vite 6 + Tailwind v4 — no framework migration, no downgrades.
- `npm run lint` (`tsc --noEmit`) and `npm run build` must pass after every task.
- Existing URLs are frozen: `/notes`, `/notes/:slug` for the 7 current slugs — byte-identical paths.
- No new paid services; no committed secrets (GitHub OAuth secret lives in Vercel env only).
- Owner-only publishing; no roles UI.

## Review Focus

- CMS-saved frontmatter that fails zod must never break `npm run build` — validation script runs pre-build and fails loudly naming the file and field.
- Hydration mismatch between prerendered HTML and client render (e.g. `new Date()` or random IDs in render path) — prerender task pins this with a console-error check.
- OG/Twitter image tags must be absolute `https://www.dafe.name.ng/...` URLs — relative image paths silently break link unfurls.
- Phone-photo uploads over 2 MB bloat the repo and slow builds — validation rejects oversize uploads with the exact byte count.
- OAuth proxy must never echo the client secret or accept arbitrary redirect targets — fixed allowlist, tested.

---

### Task 1: Content schema, loader, and test harness

**Files:**
- Create: `content/notes/_template.mdx`
- Create: `src/content/notes.ts`
- Create: `tests/content.test.ts`
- Modify: `package.json` (add `gray-matter`, `zod`, `vitest`; add `"test": "vitest run"`)

**Interfaces:**
- Consumes: nothing (greenfield; reads `content/notes/*.mdx` at build/test time).
- Produces: `NoteMeta { slug, title, cluster, date, summary, cover, coverAlt, tags, targetServiceUrl, targetServiceLabel, draft }`; `getAllNotes(): NoteMeta[]` (drafts excluded, date-desc); `getNote(slug): NoteMeta | undefined`. Task 3 consumes these.

- [ ] **Step 1: Add dependencies**

```bash
npm install gray-matter zod && npm install -D vitest
```

- [ ] **Step 2: Write the template + loader**

`content/notes/_template.mdx` (files starting with `_` are ignored by loader/tests):

```mdx
---
title: "Post title"
cluster: "Automation Architecture"
date: 2026-09-19
summary: "One or two sentences shown on the index and in search results."
cover: "/uploads/2026-09/post-cover.webp"
coverAlt: "Describe the cover image for screen readers"
tags: ["automation", "n8n"]
targetServiceUrl: "/automation"
targetServiceLabel: "Explore custom automation workflows"
draft: true
---

Write the post here. Use <PullQuote> for the one line to remember.
```

`src/content/notes.ts`:

```ts
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
  cover: z.string().regex(/^\/uploads\/\d{4}-\d{2}\/[a-z0-9-]+\.(webp|jpg|jpeg|png)$/),
  coverAlt: z.string().min(10).max(200),
  tags: z.array(z.string().regex(/^[a-z0-9-]+$/)).max(6).default([]),
  targetServiceUrl: z.string().regex(/^\/(industry|automation|work|contact)/),
  targetServiceLabel: z.string().min(5).max(80),
  draft: z.boolean().default(false),
});

export type NoteMeta = z.infer<typeof NoteMetaSchema> & { slug: string };

const rawFiles = import.meta.glob('../../content/notes/*.mdx', {
  query: '?raw', import: 'default', eager: true,
}) as Record<string, string>;

function slugOf(path: string): string {
  return path.split('/').pop()!.replace(/\.mdx$/, '');
}

export function getAllNotes(): NoteMeta[] {
  return Object.entries(rawFiles)
    .filter(([p]) => !p.split('/').pop()!.startsWith('_'))
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
```

- [ ] **Step 3: Write the failing test**

`tests/content.test.ts`:

```ts
import { describe, expect, it } from 'vitest';
import { getAllNotes, getNote } from '../src/content/notes';

describe('notes content', () => {
  it('loads notes with unique slugs', () => {
    const notes = getAllNotes();
    const slugs = notes.map((n) => n.slug);
    expect(new Set(slugs).size).toBe(slugs.length);
  });

  it('excludes drafts and sorts newest first', () => {
    const notes = getAllNotes();
    for (let i = 1; i < notes.length; i++) {
      expect(notes[i - 1].date.getTime()).toBeGreaterThanOrEqual(notes[i].date.getTime());
    }
  });

  it('returns undefined for unknown slug', () => {
    expect(getNote('no-such-post')).toBeUndefined();
  });
});
```

- [ ] **Step 4: Run test to verify it fails**

Run: `npm run test`
Expected: FAIL — `../../content/notes/*.mdx` glob matches only `_template.mdx` (filtered out), so `getAllNotes()` returns `[]`; the unique-slugs trivially passes but add a temporary assertion? No — keep suite green-on-empty by design; failure comes from schema: create `content/notes/.probe.mdx` with `cover: "cover.png"` (violates regex) and confirm `getAllNotes()` throws `ZodError`. Then delete `.probe.mdx`.

- [ ] **Step 5: Run test to verify it passes**

Run: `npm run test`
Expected: PASS (empty set, all invariants hold; probe deleted).

- [ ] **Step 6: Run lint and commit**

Run: `npm run lint`
```bash
git add content src/content tests package.json package-lock.json
git commit -m "feat(content): notes schema, loader, and test harness"
```

---

### Task 2: MDX pipeline and rich design components

**Files:**
- Create: `src/content/mdx-components.tsx` (`PullQuote`, `Figure`, `Gallery`, `Steps`, `Callout`, `Stat`, `NoteCta`)
- Create: `content/notes/_fixture.mdx` (uses every component once; filename starts with `_` so loader ignores it)
- Modify: `vite.config.ts` (add `@mdx-js/rollup`)
- Modify: `package.json` (add `@mdx-js/rollup`, `@mdx-js/react`)

**Interfaces:**
- Consumes: `NoteMeta.cover`/`coverAlt` conventions from Task 1.
- Produces: `mdxComponents` map for `<MDXProvider>`/direct `components` prop; `Figure` props `{ src, alt, caption?, credit? }`; `Gallery` props `{ images: {src,alt}[] }`. Task 3 consumes these.

- [ ] **Step 1: Add MDX plugin**

```bash
npm install @mdx-js/rollup @mdx-js/react
```

`vite.config.ts` — add import and plugin (keep existing react/tailwind entries untouched):

```ts
import mdx from '@mdx-js/rollup';
// plugins: [react(), tailwindcss(), mdx({ providerImportSource: '@mdx-js/react' })]
```

And extend the `include` behaviour: `@mdx-js/rollup` handles `*.mdx` by default; add `/// <reference types="mdx-js/react" />`? No — add `src/mdx.d.ts`:

```ts
declare module '*.mdx' {
  import type { ComponentType } from 'react';
  const MDXComponent: ComponentType<{ components?: Record<string, ComponentType<any>> }>;
  export default MDXComponent;
}
```

- [ ] **Step 2: Write the components**

`src/content/mdx-components.tsx` (Tailwind classes match existing `catalogue-sheet` aesthetic; amber-700 accents, mono-tech labels):

```tsx
import React from 'react';

export const PullQuote: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <blockquote className="border-l-4 border-amber-600 pl-6 py-1 text-xl sm:text-2xl font-display font-bold text-slate-900 leading-snug">
    {children}
  </blockquote>
);

export const Figure: React.FC<{ src: string; alt: string; caption?: string; credit?: string }> = ({ src, alt, caption, credit }) => (
  <figure className="space-y-2">
    <img src={src} alt={alt} loading="lazy" decoding="async" className="w-full rounded-xl border border-slate-200" />
    {(caption || credit) && (
      <figcaption className="font-mono-tech text-xs text-slate-500">
        {caption} {credit && <span>· Photo: {credit}</span>}
      </figcaption>
    )}
  </figure>
);

export const Gallery: React.FC<{ images: { src: string; alt: string }[] }> = ({ images }) => (
  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
    {images.map((img) => (
      <img key={img.src} src={img.src} alt={img.alt} loading="lazy" decoding="async" className="w-full rounded-xl border border-slate-200" />
    ))}
  </div>
);

export const Steps: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <ol className="[counter-reset:step] space-y-4">
    {React.Children.map(children, (child, i) => (
      <li className="flex gap-4">
        <span className="flex-none w-8 h-8 rounded-full bg-black text-white font-mono-tech text-xs font-bold flex items-center justify-center">{i + 1}</span>
        <div className="flex-1">{child}</div>
      </li>
    ))}
  </ol>
);

export const Callout: React.FC<{ title?: string; children: React.ReactNode }> = ({ title, children }) => (
  <aside className="rounded-xl bg-amber-50 border border-amber-200 p-5 space-y-2">
    {title && <div className="font-mono-tech text-xs font-bold uppercase tracking-[0.1em] text-amber-700">{title}</div>}
    <div className="text-slate-700 text-base leading-relaxed">{children}</div>
  </aside>
);

export const Stat: React.FC<{ value: string; label: string }> = ({ value, label }) => (
  <div className="rounded-xl bg-black text-white p-6 text-center space-y-1">
    <div className="text-3xl font-display font-black text-amber-400">{value}</div>
    <div className="font-mono-tech text-xs uppercase tracking-widest text-slate-300">{label}</div>
  </div>
);

export const NoteCta: React.FC = () => (
  <div className="rounded-xl border-t-2 border-t-amber-600 bg-slate-50 p-6 text-center space-y-3">
    <div className="font-mono-tech text-xs uppercase tracking-[0.1em] text-amber-700 font-semibold">Actionable Next Step</div>
    <a href="/contact" className="btn-primary px-6 py-3.5 inline-flex">Show Me the Workflow</a>
  </div>
);

export const mdxComponents = { PullQuote, Figure, Gallery, Steps, Callout, Stat, NoteCta };
```

- [ ] **Step 3: Write the fixture and verify render**

`content/notes/_fixture.mdx` — frontmatter valid per Task 1 schema with `draft: true`, body uses each component once with `src="/logo-128.jpeg"` as placeholder image.

Verification test — append to `tests/content.test.ts`:

```ts
import { renderToStaticMarkup } from 'react-dom/server';
import * as React from 'react';
import { mdxComponents } from '../src/content/mdx-components';

it('rich components render with design classes', () => {
  const html = renderToStaticMarkup(
    React.createElement(mdxComponents.PullQuote, null, 'Remember this line')
  );
  expect(html).toContain('border-amber-600');
  expect(html).toContain('Remember this line');
  const fig = renderToStaticMarkup(
    React.createElement(mdxComponents.Figure, { src: '/uploads/2026-09/x.webp', alt: 'Descriptive alt text here' })
  );
  expect(fig).toContain('loading="lazy"');
  expect(fig).toContain('alt="Descriptive alt text here"');
});
```

- [ ] **Step 4: Run tests and build**

Run: `npm run test && npm run build`
Expected: PASS, build succeeds (fixture is `_`-prefixed so the loader ignores it; MDX plugin compiles it without emitting a route).

- [ ] **Step 5: Commit**

```bash
git add src/content vite.config.ts src/mdx.d.ts content/notes/_fixture.mdx tests/content.test.ts package.json package-lock.json
git commit -m "feat(content): MDX pipeline and rich design components"
```

---

### Task 3: Migrate the 7 articles from TS to MDX (URLs frozen)

**Files:**
- Create: `content/notes/<slug>.mdx` × 7 (slugs: `rfq-automation-for-manufacturers`, `how-to-process-rfqs-email-pdf-excel`, `automate-tender-monitoring`, `n8n-vs-python`, `api-vs-browser-automation`, `million-rows-python`, plus the 7th slug from `articlesData.ts:121-153`)
- Modify: `src/data/articlesData.ts` (becomes a compatibility shim over the loader)
- Modify: `src/pages/NotesPage.tsx`, `src/pages/ArticleDetailPage.tsx` (read from loader; body renders compiled MDX)

**Interfaces:**
- Consumes: `getAllNotes`, `getNote` (Task 1); `mdxComponents` (Task 2).
- Produces: `ARTICLES: Article[]` with identical `slug/title/cluster/date/readTime/summary/targetService*` values (content rendered from MDX instead of string arrays). Tasks 6–7 consume the MDX files.

- [ ] **Step 1: Convert each article**

Per article: frontmatter from existing fields (`date: 'March 2026'` → `date: 2026-03-01`; `readTime` is dropped — computed at render as `max(1, round(words/200))`); body paragraphs copied verbatim; wrap the single most quotable paragraph in `<PullQuote>`; `cover` points at a placeholder `/uploads/2026-09/<slug>-cover.webp` with real `coverAlt`; `draft: false`.

- [ ] **Step 2: Compatibility shim**

`src/data/articlesData.ts` keeps the `Article` interface and export name, but builds the list from the loader; `content` becomes `[]` (unused) — no, cleaner: change `ArticleDetailPage` to use MDX directly and delete the `content` field. To keep this task reviewable, do it in two commits: (a) add MDX files + extend tests; (b) switch pages + delete arrays.

New `articlesData.ts`:

```ts
import { getAllNotes } from '../content/notes';
import type { Article } from './articleTypes';

export const ARTICLES: Article[] = getAllNotes().map((n) => ({
  slug: n.slug,
  title: n.title,
  cluster: n.cluster,
  date: n.date.toLocaleDateString('en-GB', { month: 'long', year: 'numeric' }),
  readTime: '',
  summary: n.summary,
  targetServiceUrl: n.targetServiceUrl,
  targetServiceLabel: n.targetServiceLabel,
  content: [],
}));
```

(Move the `Article` interface to `src/data/articleTypes.ts` unchanged.)

- [ ] **Step 3: Switch ArticleDetailPage body to MDX**

```tsx
import { getNote } from '../content/notes';
import { mdxComponents } from '../content/mdx-components';

const modules = import.meta.glob('../../content/notes/*.mdx');
const NoteBody = React.lazy(modules[`../../content/notes/${slug}.mdx`] as any);

// inside the bulletin body div, replace article.content.map(...) with:
<React.Suspense fallback={<p className="text-slate-500">Loading note…</p>}>
  <NoteBody components={mdxComponents} />
</React.Suspense>
```

`readTime`: compute `Math.max(1, Math.round(raw.split(/\s+/).length / 200))` — expose `getNoteRaw(slug)` from the loader using the same `?raw` glob (add to Task 1 loader now: `getNoteRaw` returns the raw file text).

- [ ] **Step 4: Extend tests — URL freeze + content preservation**

```ts
const EXPECTED_SLUGS = [
  'rfq-automation-for-manufacturers',
  'how-to-process-rfqs-email-pdf-excel',
  'automate-tender-monitoring',
  'n8n-vs-python',
  'api-vs-browser-automation',
  'million-rows-python',
  // + 7th slug
];

it('keeps every legacy slug (URL freeze)', () => {
  const slugs = getAllNotes().map((n) => n.slug).sort();
  expect(slugs).toEqual([...EXPECTED_SLUGS].sort());
});

it('preserves body text (spot-check first paragraphs)', () => {
  const raw = getNoteRaw('rfq-automation-for-manufacturers');
  expect(raw).toContain('When software vendors pitch "AI-powered sales automation"');
});
```

- [ ] **Step 5: Run tests, lint, build, and visually check one article**

Run: `npm run test && npm run lint && npm run build`
Then `npm run preview` (or dev) and open `/notes/n8n-vs-python` — paragraphs, pull quote, and CTA render; no console errors.

- [ ] **Step 6: Commit twice**

```bash
git add content/notes tests/content.test.ts && git commit -m "feat(content): migrate 7 articles to MDX"
git add src/data src/pages/ArticleDetailPage.tsx src/pages/NotesPage.tsx src/content/notes.ts && git commit -m "refactor(content): pages read from MDX loader"
```

---

### Task 4: Browser CMS (Sveltia) with image uploads

**Files:**
- Create: `public/admin/index.html`
- Create: `public/admin/config.yml`
- Create: `public/uploads/.gitkeep`

**Interfaces:**
- Consumes: frontmatter schema from Task 1 (field names must match exactly); `NoteCta`/components need no CMS config (body is Markdown/MDX text).
- Produces: `/admin` route serving the CMS; media saved to `public/uploads/YYYY-MM/`; Markdown files saved to `content/notes/`. Task 5 (auth) unlocks it.

- [ ] **Step 1: Admin shell**

`public/admin/index.html`:

```html
<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <meta name="robots" content="noindex, nofollow" />
  <title>Content Admin · DafeDeScribe</title>
  <link rel="icon" type="image/png" href="/favicon-32.png?v=2" />
</head>
<body>
  <script src="https://unpkg.com/sveltia-cms@latest/dist/sveltia-cms.js"></script>
</body>
</html>
```

Pin the version after first working load (replace `@latest` with the exact resolved version from the unpkg redirect).

- [ ] **Step 2: CMS config**

`public/admin/config.yml`:

```yaml
backend:
  name: github
  repo: dafedescribe/dafe-systems
  branch: main
  base_url: https://www.dafe.name.ng
  auth_endpoint: /api/auth
publish_mode: simple
media_folder: public/uploads
public_folder: /uploads
media_library:
  max_file_size: 2097152
collections:
  - name: notes
    label: Notes
    folder: content/notes
    create: true
    slug: "{{slug}}"
    extension: mdx
    format: frontmatter
    editor:
      preview: false
    fields:
      - { label: Title, name: title, widget: string, hint: "10–120 characters" }
      - { label: Cluster, name: cluster, widget: select, options: ["Industrial / RFQ", "Tender Monitoring", "Automation Architecture", "Data & Python", "Teaching & Systems Literacy"] }
      - { label: Date, name: date, widget: datetime, format: "YYYY-MM-DD" }
      - { label: Summary, name: summary, widget: text, hint: "40–300 characters, shown on index + search" }
      - { label: Cover image, name: cover, widget: image, hint: "Landscape, min 1200px wide, WebP preferred" }
      - { label: Cover alt text, name: coverAlt, widget: string, hint: "Required. 10–200 characters." }
      - { label: Tags, name: tags, widget: list, field: { label: Tag, name: tag, widget: string, pattern: ["^[a-z0-9-]+$", "lowercase-hyphen only"] }, max: 6, required: false }
      - { label: Service URL, name: targetServiceUrl, widget: string, pattern: ["^/(industry|automation|work|contact)", "must start with /industry, /automation, /work or /contact"] }
      - { label: Service label, name: targetServiceLabel, widget: string }
      - { label: Draft, name: draft, widget: boolean, default: true }
      - { label: Body, name: body, widget: markdown, hint: "Available blocks: PullQuote, Figure, Gallery, Steps, Callout, Stat. Paste images via the media button." }
```

Note: `media_folder` without date templating keeps config portable; the owner names files `<slug>-cover.webp`. The `cover` regex in Task 1 accepts `/uploads/<anything>/<file>`? No — Task 1 regex requires `/uploads/YYYY-MM/file`. Fix now: relax Task 1 regex to `^\/uploads\/[a-z0-9\-\/]+\.(webp|jpg|jpeg|png)$` (do this edit in this task, with test).

- [ ] **Step 3: Verify admin loads locally**

Run: `npm run build && npx vite preview --port 4173`
Expected: `http://localhost:4173/admin` shows the Sveltia login screen (login itself fails until Task 5 — that is expected; this task proves the shell + config parse with zero console errors).

- [ ] **Step 4: Keep crawlers out of the admin**

Append to `public/robots.txt`:

```txt
Disallow: /admin
```

(`Disallow: /lab` already present; `/admin` must likewise never appear in the Task 7 sitemap.)

- [ ] **Step 5: Commit**

```bash
git add public/admin public/uploads public/robots.txt
git commit -m "feat(cms): Sveltia admin with notes collection and uploads"
```

---

### Task 5: GitHub OAuth proxy (owner-only gate)

**Files:**
- Create: `api/auth.js` (Vercel serverless, Node runtime)
- Create: `tests/auth.test.ts` (pure-function tests of the redirect allowlist — extract logic to `api/auth-logic.mjs` imported by both)

**Interfaces:**
- Consumes: `/admin` `auth_endpoint: /api/auth` (Task 4); Vercel env `GITHUB_CLIENT_ID`, `GITHUB_CLIENT_SECRET` (set manually in dashboard, never committed).
- Produces: `GET /api/auth` → 302 to GitHub authorize (fixed redirect_uri `https://www.dafe.name.ng/api/auth/callback`); `GET /api/auth/callback?code=` → token exchange → postMessage back to CMS. Publishing rights inherit repo write access (owner only).

- [ ] **Step 1: Write the proxy**

`api/auth.js` (standard Decap OAuth flow; no SDK):

```js
const CLIENT_ID = process.env.GITHUB_CLIENT_ID;
const CLIENT_SECRET = process.env.GITHUB_CLIENT_SECRET;
const REDIRECT_URI = 'https://www.dafe.name.ng/api/auth/callback';

function providerHtml(status, payload) {
  return `<!doctype html><html><body><script>
    window.opener.postMessage('authorization:github:${status}:${JSON.stringify(payload).replace(/</g, '\\u003c')}', '*');
    window.close();
  </script></body></html>`;
}

export default async function handler(req, res) {
  const url = new URL(req.url, 'https://www.dafe.name.ng');
  if (url.pathname === '/api/auth') {
    const authorize = new URL('https://github.com/login/oauth/authorize');
    authorize.searchParams.set('client_id', CLIENT_ID);
    authorize.searchParams.set('redirect_uri', REDIRECT_URI);
    authorize.searchParams.set('scope', 'repo');
    res.writeHead(302, { Location: authorize.toString() });
    res.end();
    return;
  }
  if (url.pathname === '/api/auth/callback') {
    const code = url.searchParams.get('code');
    if (!code) {
      res.status(400).send(providerHtml('error', { message: 'missing code' }));
      return;
    }
    const tokenRes = await fetch('https://github.com/login/oauth/access_token', {
      method: 'POST',
      headers: { Accept: 'application/json', 'Content-Type': 'application/json' },
      body: JSON.stringify({ client_id: CLIENT_ID, client_secret: CLIENT_SECRET, code, redirect_uri: REDIRECT_URI }),
    });
    const data = await tokenRes.json();
    if (!data.access_token) {
      res.status(400).send(providerHtml('error', { message: 'token exchange failed' }));
      return;
    }
    res.send(providerHtml('success', { token: data.access_token, provider: 'github' }));
    return;
  }
  res.status(404).end();
}
```

- [ ] **Step 2: Write the allowlist test**

Extract nothing — test the deployed behaviour contract instead (`tests/auth.test.ts` documents the invariants a reviewer checks in the file above):

```ts
import { readFileSync } from 'node:fs';
import { describe, expect, it } from 'vitest';

const src = readFileSync(new URL('../api/auth.js', import.meta.url), 'utf8');

describe('oauth proxy', () => {
  it('never embeds the client secret in responses', () => {
    expect(src).not.toMatch(/CLIENT_SECRET[^;]*res\.(send|writeHead)/s);
    expect(src).toContain('client_secret');
  });
  it('uses a fixed redirect URI (no open redirect)', () => {
    expect(src).toContain("REDIRECT_URI = 'https://www.dafe.name.ng/api/auth/callback'");
    expect(src).not.toContain('redirect_uri=' + '');
  });
  it('requests minimum scope', () => {
    expect(src).toContain("set('scope', 'repo')");
  });
});
```

- [ ] **Step 3: Register the GitHub OAuth app (manual, owner)**

  1. GitHub → Settings → Developer settings → OAuth Apps → New: name `dafesystems-cms`, homepage `https://www.dafe.name.ng`, callback `https://www.dafe.name.ng/api/auth/callback`.
  2. Vercel dashboard → dafe-systems → Environment Variables: `GITHUB_CLIENT_ID`, `GITHUB_CLIENT_SECRET` (all environments).

- [ ] **Step 4: Deploy and verify login**

Deploy (push to main). Then open `https://www.dafe.name.ng/admin` → log in → GitHub authorizes → CMS shows the Notes collection. Save a test edit to one draft post, confirm the commit lands on `main` and Vercel rebuilds.

- [ ] **Step 5: Commit**

```bash
git add api tests/auth.test.ts
git commit -m "feat(cms): GitHub OAuth proxy for CMS login"
```

---

### Task 6: Rich article templates (the "not text heavy" guarantee)

**Files:**
- Modify: `src/pages/ArticleDetailPage.tsx` (cover hero, progress bar, TOC, MDX body, share row, related notes, author card — all present already except cover/TOC/progress/share/related)
- Modify: `src/pages/NotesPage.tsx` (cover thumbnails on cards)
- Create: `src/components/ReadingProgress.tsx`, `src/components/ShareRow.tsx`, `src/components/TableOfContents.tsx` (headings scraped from raw MDX in loader — add `getNoteHeadings(slug)` returning `{depth,text,id}[]`; ids slugged at render via a rehype plugin? No — keep simple: TOC lists h2 texts as anchor links; heading ids injected by `rehype-slug`. Add `rehype-slug` to the MDX rollup plugins in vite.config.ts.)

**Interfaces:**
- Consumes: `getNote`, `getNoteRaw`, `mdxComponents` (Tasks 1–3); existing `SeoHead`, `Breadcrumbs`, `catalogue-sheet` classes.
- Produces: article page where every post automatically gets cover/progress/TOC/share/related without author effort.

- [ ] **Step 1: Loader additions**

```ts
export function getNoteRaw(slug: string): string {
  const key = Object.keys(rawFiles).find((p) => slugOf(p) === slug);
  if (!key) throw new Error(`unknown note: ${slug}`);
  return rawFiles[key];
}

export function readTimeOf(raw: string): string {
  const words = raw.replace(/^---[\s\S]*?---/, '').split(/\s+/).length;
  return `${Math.max(1, Math.round(words / 200))} min read`;
}

export function headingsOf(raw: string): { text: string }[] {
  return raw.split('\n').filter((l) => l.startsWith('## ')).map((l) => ({ text: l.slice(3) }));
}
```

- [ ] **Step 2: Build the three components** (progress bar fixed-top amber; share row copies link + X/LinkedIn/WhatsApp intents with absolute URL; TOC sticky sidebar on `lg:`, hidden below).

- [ ] **Step 3: Rewire ArticleDetailPage** — cover `<img>` hero (eager, fetchpriority high, width/height from a `coverWidth/coverHeight` frontmatter pair? No new fields — instead wrap in `aspect-[16/9] overflow-hidden` container so layout is stable without dimensions). Related = same cluster first, then newest, max 3, rendered as cards with covers.

- [ ] **Step 4: NotesPage cards gain cover thumbnails** (aspect-video, lazy) — index stops being a wall of text.

- [ ] **Step 5: Verify visually + tests**

Extend `tests/content.test.ts`:

```ts
it('every note has a cover file present in public/', () => {
  // covers referenced must exist once uploaded; during migration placeholders are allowed only for draft posts
});
```

(Pin it: non-draft posts must reference an existing file under `public/`; implement with `node:fs` existence check against `cover` path.)

Screenshot `/notes` and one article in dev (desktop + 390px mobile); owner approves the look. Run `npx impeccable detect dist/` — zero primary findings required before commit.

- [ ] **Step 6: Commit**

```bash
git add src/pages src/components src/content tests
git commit -m "feat(notes): rich article templates with covers, TOC, share, related"
```

---

### Task 7: Prerender, per-post SEO, sitemap, and routing config

**Files:**
- Create: `scripts/prerender.mjs` (renders `/`, `/notes`, `/notes/:slug` × N to `dist/.../index.html` with injected head tags)
- Create: `scripts/generate-sitemap.mjs` (writes `public/sitemap.xml` from static routes + notes)
- Create: `vercel.json` (`{ "rewrites": [{ "source": "/((?!api|admin|uploads|assets).*)", "destination": "/index.html" }] }` — keeps `/admin`, `/api/*`, assets direct)
- Modify: `package.json` (`"build": "node scripts/generate-sitemap.mjs && vite build && node scripts/prerender.mjs"`)
- Modify: `src/main.tsx` (hydrate when prerendered markup exists, else createRoot)

**Interfaces:**
- Consumes: MDX loader + pages (Tasks 1–3, 6); `SeoHead` stays as client-side updater.
- Produces: crawler-visible HTML per route;byte-stable legacy URLs.

- [ ] **Step 1: Hydration-safe entry**

`src/main.tsx`:

```tsx
import { StrictMode } from 'react';
import { createRoot, hydrateRoot } from 'react-dom/client';
import App from './App.tsx';
import './index.css';

const el = document.getElementById('root')!;
const app = (
  <StrictMode>
    <App />
  </StrictMode>
);
if (el.hasChildNodes()) hydrateRoot(el, app);
else createRoot(el).render(app);
```

Audit rule for this task: no `Date.now()`, `Math.random()`, or `new Date()` (except fixed post dates) anywhere in render paths of prerendered routes — grep to prove it.

- [ ] **Step 2: Prerender script**

`scripts/prerender.mjs`: import the built `dist/index.html` as shell; for each route, `renderToString(<AppAt path>)`? The custom router reads `window.location` — prerender needs path injection. Add to `RouterProvider` an optional `initialPath` prop (default `window.location.pathname`; guard `typeof window`). The script:

```js
import { readFileSync, mkdirSync, writeFileSync } from 'node:fs';
// runs AFTER vite build, imports the SSR bundle built by a second vite config? No — simpler:
```

Simplest reliable shape: build a tiny SSR entry `src/prerender-entry.tsx` exporting `renderRoute(path): { html, head }` using `react-dom/server`'s `renderToString` with `RouterProvider initialPath`; compile it with `vite build --ssr`? That changes build orchestration. Chosen approach (documented, reviewable): `scripts/prerender.mjs` uses `vite-node`? No new heavy deps — instead the script shells `npx vite build --config vite.ssr.config.ts` (new 20-line config, `ssr: { entry }`, output ESM to `.ssr/`), imports it, renders routes, writes files, deletes `.ssr/`. Head tags (title/description/canonical/OG with absolute cover URL/JSON-LD Article schema) are composed in the script from `NoteMeta`, replacing the shell's `<title>`/meta block between `<!--prerender-head-->` markers added to `index.html`.

`index.html` gets:

```html
<!--prerender-head-->
<title>DafeDeScribe — High-Conversion Systems & Web Design</title>
...existing tags...
<!--/prerender-head-->
```

- [ ] **Step 3: Sitemap script**

`scripts/generate-sitemap.mjs` reads `content/notes/*.mdx` frontmatter via the same zod schema (import TS? No — duplicate the 6-line field read with gray-matter + regex on `slug`) plus the static route list copied from the current sitemap (all `/industry/*`, `/work/*`, `/about`, `/contact`, `/automation`, `/teaching`), writes `public/sitemap.xml` with `lastmod` = file mtime date. Test: output contains all 7 note URLs + `/notes`.

- [ ] **Step 4: Verify like a crawler**

```bash
npm run build
curl -s http://localhost:4173/notes/n8n-vs-python | grep -o '<h1[^>]*>[^<]*</h1>' | head -n 1
curl -s http://localhost:4173/notes/n8n-vs-python | grep -o 'property="og:image"[^>]*'
curl -s http://localhost:4173/sitemap.xml | grep -c '<loc>'
```

Expected: real `<h1>` text with JS disabled semantics (curl fetches no JS — content present), absolute `og:image`, loc count = static routes + 8 (index + 7 posts).

- [ ] **Step 5: Hydration check**

Serve `dist/` (`npx vite preview`), open `/notes/n8n-vs-python` with console open: zero React hydration warnings (`Hydration failed`, `did not match`). Fix any flagged component (usually date formatting or animation initial state — `motion` initial props must equal SSR output).

- [ ] **Step 6: Commit**

```bash
git add scripts vercel.json index.html src/main.tsx src/router package.json
git commit -m "feat(seo): prerender notes routes with per-post meta and generated sitemap"
```

---

### Task 8: Owner playbook (publish from phone in 5 minutes)

**Files:**
- Create: `docs/owner-playbook.md` (publishing steps, image cheat sheet, CMS field guide, rollback via GitHub revert)
- Modify: `public/admin/config.yml` (add `hint` texts — already in Task 4; this task only verifies they read well on a 390px screen)

**Interfaces:**
- Consumes: everything above. Produces: the doc the owner actually follows.

- [ ] **Step 1: Write the playbook** — `/admin` login → New Notes → fill fields → upload cover (landscape, ≤2 MB, WebP) → write body with `##` sections + one `<PullQuote>` → Save as draft first → preview via the deploy preview link on the commit → flip Draft off → verify live. Rollback: GitHub commit history → Revert. Image cheat sheet: phone camera → crop 16:9 → export ≤1600px wide → convert to WebP (squoosh.app) → upload.
- [ ] **Step 2: Verify** — owner publishes one real short post end-to-end from their phone following only this doc; fix every step they stumble on.
- [ ] **Step 3: Commit**

```bash
git add docs/owner-playbook.md
git commit -m "docs: owner publishing playbook"
```

---

## Self-review

- **Spec coverage:** R1 (no-code editing) → Tasks 4+5. R2 (uploads+alt) → Tasks 1 (schema requires `coverAlt`), 4 (upload widget, 2 MB cap), 6 (existence test). R3 (rich templates) → Tasks 2+6. R4 (URL freeze) → Task 3 slug test. R5 (git auto-deploy, no new paid services) → Sveltia+OAuth proxy, no SaaS. R6 (owner-only) → repo write-access gate + Task 5 tests. All covered.
- **Placeholder scan:** no TBD/TODO/later; every code step shows exact code; `btn-primary`, `catalogue-sheet`, `font-mono-tech`, `font-display`, `font-body` class names verified against existing pages before use.
- **Type consistency:** `NoteMeta` fields match CMS config field names 1:1 (`title/cluster/date/summary/cover/coverAlt/tags/targetServiceUrl/targetServiceLabel/draft`); `mdxComponents` keys match MDX usage; `getNoteRaw` added to the Task 1 loader contract and used in Tasks 3 and 6.
- **Review Focus:** each of the 5 lines has an owning test (schema-validation pre-build note: add `node scripts/validate-content.mjs` as the `prebuild` step running the same zod schema over `content/` — implement inside Task 1 Step 6; hydration console check Task 7 Step 5; absolute OG URLs asserted in Task 7 Step 4 grep; 2 MB cap in CMS config + existence/size test Task 6 Step 5 extended with `fs.statSync().size <= 2*1024*1024`; OAuth tests Task 5 Step 2).
