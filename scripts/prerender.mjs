/**
 * Prerender notes routes to static HTML for crawlers.
 * Pure helpers (listRoutes, composeHead) are unit-tested in
 * tests/prerender.test.ts. The main flow shells out to vite + node.
 */
import { execFileSync } from 'node:child_process';
import { existsSync, mkdirSync, readFileSync, rmSync, writeFileSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath, pathToFileURL } from 'node:url';

const SITE = 'https://www.dafe.name.ng';
const here = dirname(fileURLToPath(import.meta.url));
const repoRoot = join(here, '..');

function readManifest() {
  return JSON.parse(readFileSync(join(repoRoot, 'src', 'content', 'notes-manifest.json'), 'utf8'));
}

export function listRoutes() {
  return ['/notes', ...readManifest().map((n) => `/notes/${n.slug}`)];
}

export function escapeHead(s) {
  return String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
}

export function composeHead({ title, description, path, image, published }) {
  const url = `${SITE}${path}`;
  const t = escapeHead(title);
  const d = escapeHead(description);
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: title,
    description,
    author: { '@type': 'Person', name: 'Odafe Amalega', url: `${SITE}/about` },
    publisher: { '@type': 'Organization', name: 'DafeDeScribe', url: `${SITE}/` },
    datePublished: published,
    mainEntityOfPage: url,
  };
  return [
    `<title>${t}</title>`,
    `<meta name="description" content="${d}" />`,
    `<link rel="canonical" href="${url}" />`,
    `<meta property="og:type" content="article" />`,
    `<meta property="og:title" content="${t}" />`,
    `<meta property="og:description" content="${d}" />`,
    `<meta property="og:url" content="${url}" />`,
    `<meta property="og:image" content="${SITE}${image}" />`,
    `<meta name="twitter:card" content="summary_large_image" />`,
    `<meta name="twitter:title" content="${t}" />`,
    `<meta name="twitter:description" content="${d}" />`,
    `<meta name="twitter:image" content="${SITE}${image}" />`,
    `<script type="application/ld+json">${JSON.stringify(jsonLd)}</script>`,
  ].join('\n  ');
}

function headFor(route, manifest) {
  if (route === '/notes') {
    return composeHead({
      title: 'Notes on Automation, AI & Industrial Workflows | DafeDeScribe',
      description:
        'First-hand notes from building, teaching, testing and researching automation, industrial workflows, APIs, data and AI.',
      path: '/notes',
      image: '/og-image.png',
      published: '2026-03-30',
    });
  }
  const note = manifest.find((n) => `/notes/${n.slug}` === route);
  if (!note) throw new Error(`no head data for route: ${route}`);
  return composeHead({
    title: `${note.title} | DafeDeScribe`,
    description: note.summary,
    path: `/notes/${note.slug}`,
    image: note.cover,
    published: new Date(note.date).toISOString().slice(0, 10),
  });
}

const isMain = process.argv[1] === fileURLToPath(import.meta.url);
if (isMain) {
  execFileSync('npx', ['vite', 'build', '--config', 'vite.ssr.config.ts'], {
    cwd: repoRoot,
    stdio: 'inherit',
  });
  const { renderRoute } = await import(pathToFileURL(join(repoRoot, '.ssr', 'entry.mjs')).href);
  const shell = readFileSync(join(repoRoot, 'dist', 'index.html'), 'utf8');
  const manifest = readManifest();
  for (const route of listRoutes()) {
    const body = renderRoute(route);
    let html = shell.replace(/<div id="root"><\/div>/, `<div id="root">${body}</div>`);
    html = html.replace(/<!--prerender-head-->[\s\S]*?<!--\/prerender-head-->/, `<!--prerender-head-->\n  ${headFor(route, manifest)}\n  <!--/prerender-head-->`);
    const outDir = join(repoRoot, 'dist', ...route.split('/').filter(Boolean));
    mkdirSync(outDir, { recursive: true });
    writeFileSync(join(outDir, 'index.html'), html);
    console.log(`prerendered ${route}`);
  }
  if (existsSync(join(repoRoot, '.ssr'))) rmSync(join(repoRoot, '.ssr'), { recursive: true });
}
