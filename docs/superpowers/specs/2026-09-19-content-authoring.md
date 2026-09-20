# Content Authoring for dafe-systems — Spec

**Date:** 2026-09-19
**Owner editor:** Dafe (sole editor, technical but wants phone-friendly publishing)
**Source:** Owner request — "everything is just text, I need to upload images, write and edit blog posts, everything shouldn't just be text heavy."

## Current state (verified in repo)

- Vite 6 + React 19 + Tailwind v4 SPA, custom history-API router in `src/router/Router.tsx`.
- 7 notes articles hardcoded as `content: string[]` paragraph arrays in `src/data/articlesData.ts:13-153`. No images anywhere in articles. Slugs drive `/notes/:slug` routes (`src/App.tsx:52-55`).
- `src/pages/ArticleDetailPage.tsx` renders paragraphs only — no cover, no pull quotes, no galleries, no share, no per-post OG image.
- `public/sitemap.xml` is hand-maintained and already advertises `/notes/*`.
- GitHub `dafedescribe/dafe-systems` + Vercel git auto-deploy already work (verified `dpl_6FV7...`, `dfla9v7p1`).

## Requirements

1. Owner can write and edit notes posts **without touching code**, from desktop or phone browser.
2. Owner can **upload images** (covers, in-body figures, galleries) with mandatory alt text.
3. Posts render **rich, non-text-heavy** layouts: cover hero, pull quotes, captioned figures, galleries, step blocks, stat callouts, related notes, share row — enforced by templates, not by author discipline.
4. **URLs never change** (`/notes`, `/notes/:slug` for the 7 existing slugs) — no SEO loss.
5. Publishing = git commit to `main` → existing Vercel auto-deploy rebuilds. No new paid services. No new backend to maintain.
6. Only the owner can publish (repo write access is the gate).

## Decisions (confirmed with owner 2026-09-19)

- **Site:** dafe-systems (not chimee/srconstruction).
- **Storage:** git-based CMS. Content lives as MDX files in the repo.
- **Editors:** owner only. No roles/invites UI needed.
- **CMS:** Sveltia CMS (actively maintained Decap-CMS fork) served as static `public/admin/`, GitHub backend, `publish_mode: simple` (direct to main).
- **Auth:** GitHub OAuth app + tiny Vercel serverless OAuth proxy in `api/auth.js` (client ID/secret in Vercel env, never committed).
- **Rendering:** MDX via `@mdx-js/rollup`; custom MDX components are the design-enforcement mechanism.
- **SEO:** keep client SPA, add build-time prerender of notes routes with per-post meta/OG/JSON-LD + generated sitemap.

## Non-goals

- Work case studies (`/work/*`, `projectsData.ts`) stay code-edited for now (follow-up plan).
- No comments, likes, newsletter backend, or multi-author workflows.
- No migration off Vite SPA (no Astro/Next rewrite).
- No DAM/lightroom features — phone photos accepted, with build-time size guardrails.
