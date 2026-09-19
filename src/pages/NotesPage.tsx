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
    url: 'https://dafe.name.ng/notes',
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
          <div className="font-mono-tech text-xs tracking-[0.1em] uppercase text-[#B58A2A] font-semibold">
            05 / TECHNICAL BULLETINS & WRITING
          </div>

          <h1 className="text-4xl sm:text-6xl font-bold tracking-tight text-[#181816] font-display">
            Things worth writing down.
          </h1>

          <p className="text-base sm:text-lg text-[#77736A] font-body leading-relaxed max-w-2xl">
            First-hand notes from building, teaching, testing and researching automation, industrial workflows, APIs, data and AI.
          </p>
        </section>

        {/* ─── CLUSTER FILTERS ─────────────────────────────────── */}
        <section className="border-y border-[#D9D4C8] py-3.5 flex flex-wrap items-center gap-2">
          <span className="font-mono-tech text-xs text-[#77736A] uppercase mr-2">
            TOPIC:
          </span>
          {clusters.map((c) => (
            <button
              key={c}
              onClick={() => setActiveCluster(c)}
              className={`px-3 py-1 text-xs font-mono-tech uppercase tracking-[0.08em] transition-colors border ${
                activeCluster === c
                  ? 'bg-[#181816] text-[#FCFBF7] border-[#181816]'
                  : 'bg-[#FCFBF7] text-[#77736A] border-[#D9D4C8] hover:border-[#181816] hover:text-[#181816]'
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
                className="catalogue-sheet p-6 sm:p-8 hover:border-[#181816] transition-colors group"
              >
                <div className="flex flex-wrap items-center justify-between gap-2 border-b border-[#D9D4C8] pb-3 mb-4">
                  <div className="flex items-center gap-2 font-mono-tech text-xs">
                    <span className="text-[#B58A2A] font-semibold">
                      TECHNICAL NOTE / {noteNumber}
                    </span>
                    <span className="text-[#D9D4C8]">|</span>
                    <span className="text-[#77736A] uppercase">{art.cluster}</span>
                  </div>
                  <span className="font-mono-tech text-xs text-[#77736A]">
                    {art.readTime.toUpperCase()} · {art.date}
                  </span>
                </div>

                <h2 className="text-2xl sm:text-3xl font-bold text-[#181816] font-display mb-3 group-hover:text-[#B58A2A] transition-colors">
                  <Link to={`/notes/${art.slug}`}>
                    {art.title}
                  </Link>
                </h2>

                <p className="text-sm sm:text-base text-[#77736A] leading-relaxed mb-6 font-body">
                  {art.summary}
                </p>

                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pt-4 border-t border-[#D9D4C8] font-mono-tech text-xs">
                  <Link
                    to={art.targetServiceUrl}
                    className="text-[#77736A] hover:text-[#181816] transition-colors"
                  >
                    RELATED SYSTEM: {art.targetServiceLabel.toUpperCase()} →
                  </Link>

                  <Link
                    to={`/notes/${art.slug}`}
                    className="inline-flex items-center gap-1.5 uppercase tracking-[0.08em] text-[#181816] font-semibold hover:text-[#B58A2A] transition-colors"
                  >
                    <span>OPEN NOTE</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </article>
            );
          })}
        </section>

      </main>
    </div>
  );
};
