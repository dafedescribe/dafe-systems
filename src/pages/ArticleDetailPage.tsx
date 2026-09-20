import React from 'react';
import { Link } from '../router/Router';
import { SeoHead } from '../components/SeoHead';
import { Breadcrumbs } from '../components/Breadcrumbs';
import { ReadingProgress, ShareRow, TableOfContents } from '../components/article-chrome';
import { getAllNotes, getNoteComponent, getNoteEntry, readTimeOf } from '../content/notes';
import { mdxComponents } from '../content/mdx-components';
import { ArrowRight, ArrowUpRight } from 'lucide-react';

function displayDate(d: Date): string {
  return d.toLocaleDateString('en-GB', { month: 'long', year: 'numeric' });
}

export const ArticleDetailPage: React.FC<{ slug: string }> = ({ slug }) => {
  let article;
  let NoteBody;
  try {
    article = getNoteEntry(slug);
    NoteBody = getNoteComponent(slug);
  } catch {
    return (
      <div className="max-w-4xl mx-auto px-6 py-20 text-center space-y-4">
        <h1 className="text-3xl font-bold text-[#181816] font-display">Technical Note Not Found</h1>
        <p className="text-[#77736A] font-body">The requested technical bulletin does not exist in the catalogue.</p>
        <Link to="/notes" className="btn-secondary px-4 py-2">
          Back to Notes Directory
        </Link>
      </div>
    );
  }

  const readTime = readTimeOf(article);
  const dateDisplay = displayDate(article.date);
  const canonicalPath = `/notes/${article.slug}`;

  const related = [
    ...getAllNotes().filter((n) => n.slug !== article.slug && n.cluster === article.cluster),
    ...getAllNotes().filter((n) => n.slug !== article.slug && n.cluster !== article.cluster),
  ].slice(0, 3);

  const jsonLd = [
    {
      '@context': 'https://schema.org',
      '@type': 'Article',
      headline: article.title,
      description: article.summary,
      author: {
        '@type': 'Person',
        name: 'Odafe Amalega',
        url: 'https://www.dafe.name.ng/about'
      },
      publisher: {
        '@type': 'Organization',
        name: 'DafeDeScribe',
        url: 'https://www.dafe.name.ng/'
      },
      datePublished: article.date.toISOString(),
      mainEntityOfPage: `https://www.dafe.name.ng/notes/${article.slug}`
    },
    {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.dafe.name.ng/' },
        { '@type': 'ListItem', position: 2, name: 'Notes', item: 'https://www.dafe.name.ng/notes' },
        { '@type': 'ListItem', position: 3, name: article.title, item: `https://www.dafe.name.ng/notes/${article.slug}` }
      ]
    }
  ];

  return (
    <div className="min-h-screen">
      <ReadingProgress />
      <SeoHead
        title={`${article.title} | DafeDeScribe`}
        description={article.summary}
        canonicalPath={canonicalPath}
        ogType="article"
        ogImage={`https://www.dafe.name.ng${article.cover}`}
        jsonLd={jsonLd}
      />

      <main className="max-w-3xl mx-auto px-6 sm:px-10 py-12 sm:py-20 space-y-12">
        <Breadcrumbs
          items={[
            { label: 'NOTES', path: '/notes' },
            { label: article.cluster.toUpperCase(), path: '/notes' },
          ]}
        />

        {/* ─── COVER HERO ──────────────────────────────────────── */}
        <div className="overflow-hidden rounded-2xl border border-slate-200 aspect-video bg-slate-900">
          <img
            src={article.cover}
            alt={article.coverAlt}
            fetchPriority="high"
            className="w-full h-full object-cover"
          />
        </div>

        {/* ─── BULLETIN HEADER ─────────────────────────────────── */}
        <header className="catalogue-sheet p-6 sm:p-8 space-y-4">
          <div className="flex flex-wrap items-center justify-between gap-2 border-b border-slate-200 pb-3 font-mono-tech text-xs">
            <span className="text-amber-700 font-semibold uppercase">
              Technical Note · {article.cluster}
            </span>
            <span className="text-slate-500">
              {readTime.toUpperCase()} · {dateDisplay}
            </span>
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-slate-900 font-display leading-[1.15]">
            {article.title}
          </h1>

          <p className="text-base sm:text-lg text-slate-700 font-body leading-relaxed">
            {article.summary}
          </p>

          <div className="pt-3 border-t border-slate-200">
            <Link
              to={article.targetServiceUrl}
              className="inline-flex items-center gap-1.5 font-mono-tech text-xs text-slate-900 font-semibold hover:text-amber-700 transition-colors"
            >
              <span>Operational Context: {article.targetServiceLabel.toUpperCase()}</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </header>

        {/* ─── BULLETIN BODY + TOC ─────────────────────────────── */}
        <div className="lg:grid lg:grid-cols-[1fr_220px] lg:gap-10 items-start">
          <div className="catalogue-sheet p-6 sm:p-10 space-y-6 text-base sm:text-lg text-slate-700 font-body leading-[1.8] min-w-0">
            <React.Suspense fallback={<p className="text-slate-500">Loading note…</p>}>
              <NoteBody components={mdxComponents} />
            </React.Suspense>
            <ShareRow title={article.title} path={canonicalPath} />
          </div>
          {article.headings.length > 0 && (
            <aside className="hidden lg:block sticky top-24">
              <TableOfContents headings={article.headings} />
            </aside>
          )}
        </div>

        {/* ─── AUTHOR SPECIFICATION ────────────────────────────── */}
        <section className="catalogue-sheet p-6 sm:p-8 space-y-2 font-mono-tech text-xs">
          <div className="text-slate-500 uppercase">
            WRITTEN & TESTED BY
          </div>
          <div className="font-bold text-lg text-slate-900 font-body">
            Odafe Amalega
          </div>
          <p className="text-slate-600 font-body text-sm leading-relaxed">
            AI Workflow Engineer and Educator currently instructing at AppClick. Builds systems around high-value commercial processes and repetitive operational bottlenecks.
          </p>
          <div className="pt-2">
            <Link to="/about" className="text-slate-900 font-semibold hover:text-amber-700 transition-colors">
              View engineering background & credentials →
            </Link>
          </div>
        </section>

        {/* ─── RELATED NOTES ───────────────────────────────────── */}
        <section className="space-y-4">
          <div className="font-mono-tech text-xs tracking-[0.1em] uppercase text-amber-700 font-semibold">
            Related Notes
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {related.map((rel) => (
              <Link
                key={rel.slug}
                to={`/notes/${rel.slug}`}
                className="catalogue-sheet overflow-hidden group hover:border-slate-400 transition-colors"
              >
                <div className="aspect-video overflow-hidden bg-slate-900">
                  <img
                    src={rel.cover}
                    alt={rel.coverAlt}
                    loading="lazy"
                    decoding="async"
                    className="w-full h-full object-cover group-hover:scale-[1.02] transition-transform"
                  />
                </div>
                <div className="p-4">
                  <div className="font-mono-tech text-[10px] uppercase tracking-widest text-amber-700 font-semibold mb-1">
                    {rel.cluster}
                  </div>
                  <div className="font-display font-bold text-slate-900 leading-snug group-hover:text-amber-700 transition-colors">
                    {rel.title}
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </section>

        {/* ─── NEXT STEP CTA ───────────────────────────────────── */}
        <section className="catalogue-sheet p-8 space-y-4 border-t-2 border-t-amber-600">
          <div className="font-mono-tech text-xs tracking-[0.1em] uppercase text-amber-700 font-semibold">
            Actionable Next Step
          </div>
          <h2 className="text-2xl font-bold text-slate-900 font-display">
            Have a similar workflow in your business?
          </h2>
          <p className="text-sm text-slate-600 font-body leading-relaxed">
            Send me the workflow. We will identify which steps can be handled deterministically.
          </p>
          <div className="pt-2">
            <Link
              to="/contact"
              className="btn-primary px-6 py-3.5"
            >
              <span>Show Me the Workflow</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </section>

      </main>
    </div>
  );
};
