import { describe, expect, it } from 'vitest';
import { readFileSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';
import { composeHead, listRoutes } from '../scripts/prerender.mjs';
import { sitemapXml } from '../scripts/generate-sitemap.mjs';

const REPO_ROOT = join(dirname(fileURLToPath(import.meta.url)), '..');

describe('prerender', () => {
  it('lists the notes index and every published post', () => {
    const routes = listRoutes();
    expect(routes).toContain('/notes');
    expect(routes.filter((r) => r.startsWith('/notes/'))).toHaveLength(7);
    expect(routes).toContain('/notes/n8n-vs-python');
  });

  it('composes absolute crawler head tags', () => {
    const head = composeHead({
      title: 'Test Post | DafeDeScribe',
      description: 'A description of the test post for crawlers.',
      path: '/notes/test-post',
      image: '/uploads/2026-09/test-post-cover.webp',
      published: '2026-09-19',
    });
    expect(head).toContain('<title>Test Post | DafeDeScribe</title>');
    expect(head).toContain('property="og:image" content="https://www.dafe.name.ng/uploads/2026-09/test-post-cover.webp"');
    expect(head).toContain('rel="canonical" href="https://www.dafe.name.ng/notes/test-post"');
    expect(head).toContain('"@type":"Article"');
    expect(head).not.toContain('content="/uploads');
  });

  it('escapes CMS text in head tags', () => {
    const head = composeHead({
      title: 'Say "hi" <boss> & co | DafeDeScribe',
      description: 'A "quoted" <tag> & more.',
      path: '/notes/x',
      image: '/og-image.png',
      published: '2026-09-19',
    });
    expect(head).not.toContain('"hi"');
    expect(head).toContain('&quot;hi&quot;');
    expect(head).toContain('&lt;boss&gt;');
    expect(head).toContain('&amp;');
  });

  it('sitemap covers notes and excludes private routes', () => {
    const xml = sitemapXml();
    expect(xml).toContain('<loc>https://www.dafe.name.ng/notes</loc>');
    expect(xml).toContain('<loc>https://www.dafe.name.ng/notes/n8n-vs-python</loc>');
    expect(xml).toContain('<loc>https://www.dafe.name.ng/work</loc>');
    expect(xml).not.toContain('/admin');
    expect(xml).not.toContain('/lab');
  });

  it('prerender markers wrap only replaceable meta (favicons/fonts stay static)', () => {
    const html = readFileSync(join(REPO_ROOT, 'index.html'), 'utf8');
    const block = html.split('<!--prerender-head-->')[1].split('<!--/prerender-head-->')[0];
    expect(block).toContain('<title>');
    expect(block).toContain('og:image');
    expect(block).not.toContain('favicon');
    expect(block).not.toContain('fonts.googleapis');
    expect(block).not.toContain('theme-color');
  });

  it('vercel rewrite serves the SPA shell but leaves content routes alone', () => {
    const cfg = JSON.parse(
      readFileSync(join(REPO_ROOT, 'vercel.json'), 'utf8')
    );
    const re = new RegExp(`^${cfg.rewrites[0].source}$`);
    expect('/work/million-row-pipeline'.match(re)).toBeTruthy();
    expect('/about'.match(re)).toBeTruthy();
    expect('/notes/n8n-vs-python'.match(re)).toBeNull();
    expect('/api/auth'.match(re)).toBeNull();
    expect('/admin/'.match(re)).toBeNull();
    expect('/uploads/2026-09/x.webp'.match(re)).toBeNull();
  });
});
