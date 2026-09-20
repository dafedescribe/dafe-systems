import React, { useState } from 'react';
import { Link } from '../router/Router';
import { SeoHead } from '../components/SeoHead';
import { Breadcrumbs } from '../components/Breadcrumbs';
import { ARTICLES, Article } from '../data/articlesData';
import { ArrowUpRight } from 'lucide-react';

export const NotesPage: React.FC = () => {
  const [activeCluster, setActiveCluster] = useState<string>('All');

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Blog',
    name: 'Notes on Automation, AI & Industrial Workflows | DafeDeScribe',
    url: 'https://www.dafe.name.ng/notes',
    description: 'First-hand technical notes from building, teaching, and researching automation, industrial workflows, APIs, and data systems.'
  };

  const clusters = [
    'All',
    'Industrial / RFQ',
    'Tender Monitoring',
    'Automation Architecture',
    'Data & Python',
    'Teaching & Systems Literacy'
  ];

  const filteredArticles = activeCluster === 'All'
    ? ARTICLES
    : ARTICLES.filter((a) => a.cluster === activeCluster);

  return (
    <div className="min-h-screen">
      <SeoHead
        title="Notes on Automation, AI & Industrial Workflows | DafeDeScribe"
        description="First-hand notes from building, teaching, testing and researching automation, industrial workflows, APIs, data and AI."
        canonicalPath="/notes"
        jsonLd={jsonLd}
      />

      <main className="max-w-[1440px] mx-auto px-6 sm:px-12 lg:px-16 py-12 sm:py-20 space-y-12">
        <Breadcrumbs items={[{ label: 'NOTES', path: '/notes' }]} />

        {/* ─── HEADER / TECHNICAL BULLETINS ───────────────────── */}
        <section className="space-y-4 max-w-4xl">
          <div className="font-mono-tech text-xs tracking-[0.1em] uppercase text-amber-700 font-semibold">
            Engineering Bulletins & Notes
          </div>

          <h1 className="text-4xl sm:text-6xl font-bold tracking-tight text-slate-900 font-display">
            Notes from the field.
          </h1>

          <p className="text-base sm:text-lg text-slate-600 font-body leading-relaxed max-w-2xl">
            First-hand engineering analyses from building production automation pipelines, deploying document extraction workflows, and training technical teams.
          </p>
        </section>

        {/* ─── CLUSTER FILTERS ─────────────────────────────────── */}
        <section className="border-y border-slate-200 py-3.5 flex flex-wrap items-center gap-2">
          <span className="font-mono-tech text-xs text-slate-500 uppercase mr-2">
            Topic:
          </span>
          {clusters.map((c) => (
            <button
              key={c}
              onClick={() => setActiveCluster(c)}
              className={`px-3 py-1 text-xs font-mono-tech uppercase tracking-[0.08em] rounded transition-colors ${
                activeCluster === c
                  ? 'bg-slate-900 text-white font-semibold'
                  : 'bg-white text-slate-600 border border-slate-200 hover:border-slate-400 hover:text-slate-900'
              }`}
            >
              {c}
            </button>
          ))}
        </section>

        {/* ─── TECHNICAL BULLETINS LIST ────────────────────────── */}
        <section className="space-y-6 max-w-4xl">
          {filteredArticles.map((art, idx) => {
            const noteNumber = idx + 1 < 10 ? `00${idx + 1}` : `0${idx + 1}`;
            return (
              <article
                key={art.slug}
                className="catalogue-sheet overflow-hidden hover:border-slate-400 transition-colors group"
              >
                <Link to={`/notes/${art.slug}`} aria-label={art.title}>
                  <div className="aspect-video overflow-hidden bg-slate-900">
                    <img
                      src={art.cover}
                      alt={art.coverAlt}
                      loading="lazy"
                      decoding="async"
                      className="w-full h-full object-cover group-hover:scale-[1.02] transition-transform"
                    />
                  </div>
                </Link>
                <div className="p-6 sm:p-8">
                <div className="flex flex-wrap items-center justify-between gap-2 border-b border-slate-200 pb-3 mb-4">
                  <div className="flex items-center gap-2 font-mono-tech text-xs">
                    <span className="text-amber-700 font-semibold">
                      Technical Note {noteNumber}
                    </span>
                    <span className="text-slate-300">|</span>
                    <span className="text-slate-500 uppercase">{art.cluster}</span>
                  </div>
                  <span className="font-mono-tech text-xs text-slate-500">
                    {art.readTime.toUpperCase()} · {art.date}
                  </span>
                </div>

                <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 font-display mb-3 group-hover:text-amber-700 transition-colors">
                  <Link to={`/notes/${art.slug}`}>
                    {art.title}
                  </Link>
                </h2>

                <p className="text-sm sm:text-base text-slate-600 leading-relaxed mb-6 font-body">
                  {art.summary}
                </p>

                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pt-4 border-t border-slate-200 font-mono-tech text-xs">
                  <Link
                    to={art.targetServiceUrl}
                    className="text-slate-500 hover:text-slate-900 transition-colors"
                  >
                    Related Solution: {art.targetServiceLabel.toUpperCase()} →
                  </Link>

                  <Link
                    to={`/notes/${art.slug}`}
                    className="inline-flex items-center gap-1.5 uppercase tracking-[0.08em] text-slate-900 font-semibold hover:text-amber-700 transition-colors"
                  >
                    <span>Read Article</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
                </div>
              </article>
            );
          })}
        </section>

      </main>
    </div>
  );
};
