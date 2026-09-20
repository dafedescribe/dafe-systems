/**
 * Regenerates public/sitemap.xml from the static route list + notes manifest.
 * Run: node scripts/generate-sitemap.mjs  (also wired into `build`)
 */
import { readFileSync, writeFileSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const SITE = 'https://www.dafe.name.ng';
const here = dirname(fileURLToPath(import.meta.url));
const repoRoot = join(here, '..');

const STATIC_ROUTES = [
  { loc: '/', lastmod: '2026-03-30', changefreq: 'weekly', priority: '1.0' },
  { loc: '/industry', lastmod: '2026-03-30', changefreq: 'weekly', priority: '0.9' },
  { loc: '/industry/rfq-automation', lastmod: '2026-03-30', changefreq: 'monthly', priority: '0.9' },
  { loc: '/industry/tender-monitoring', lastmod: '2026-03-30', changefreq: 'monthly', priority: '0.9' },
  { loc: '/industry/quotation-workflows', lastmod: '2026-03-30', changefreq: 'monthly', priority: '0.9' },
  { loc: '/industry/commercial-reporting', lastmod: '2026-03-30', changefreq: 'monthly', priority: '0.9' },
  { loc: '/automation', lastmod: '2026-03-30', changefreq: 'weekly', priority: '0.9' },
  { loc: '/teaching', lastmod: '2026-03-30', changefreq: 'monthly', priority: '0.8' },
  { loc: '/work', lastmod: '2026-03-30', changefreq: 'weekly', priority: '0.8' },
  { loc: '/about', lastmod: '2026-03-30', changefreq: 'monthly', priority: '0.8' },
  { loc: '/contact', lastmod: '2026-03-30', changefreq: 'monthly', priority: '0.8' },
  { loc: '/work/million-row-pipeline', lastmod: '2026-03-30', changefreq: 'monthly', priority: '0.8' },
  { loc: '/work/video-processing-pipeline', lastmod: '2026-03-30', changefreq: 'monthly', priority: '0.8' },
  { loc: '/work/industrial-rfq-intake', lastmod: '2026-03-30', changefreq: 'monthly', priority: '0.8' },
  { loc: '/work/tender-monitoring-engine', lastmod: '2026-03-30', changefreq: 'monthly', priority: '0.7' },
  { loc: '/work/commercial-quotation-tracker', lastmod: '2026-03-30', changefreq: 'monthly', priority: '0.7' },
  { loc: '/work/appclick-training-curriculum', lastmod: '2026-03-30', changefreq: 'monthly', priority: '0.7' },
  { loc: '/notes', lastmod: '2026-03-30', changefreq: 'weekly', priority: '0.8' },
];

const manifest = JSON.parse(
  readFileSync(join(repoRoot, 'src', 'content', 'notes-manifest.json'), 'utf8')
);

const noteRoutes = manifest.map((n) => ({
  loc: `/notes/${n.slug}`,
  lastmod: new Date(n.date).toISOString().slice(0, 10),
  changefreq: 'monthly',
  priority: '0.8',
}));

const urls = [...STATIC_ROUTES, ...noteRoutes]
  .map(
    (u) =>
      `  <url>\n    <loc>${SITE}${u.loc}</loc>\n    <lastmod>${u.lastmod}</lastmod>\n    <changefreq>${u.changefreq}</changefreq>\n    <priority>${u.priority}</priority>\n  </url>`
  )
  .join('\n');

const xml = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls}\n</urlset>\n`;

const isMain = process.argv[1] === fileURLToPath(import.meta.url);
if (isMain) {
  writeFileSync(join(repoRoot, 'public', 'sitemap.xml'), xml);
  console.log(`sitemap: ${STATIC_ROUTES.length + noteRoutes.length} urls`);
}

export function sitemapXml() {
  return xml;
}
