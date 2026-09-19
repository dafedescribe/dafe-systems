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

      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-20 space-y-12">
        <Breadcrumbs items={[{ label: 'NOTES', path: '/notes' }]} />

        {/* ─── HEADER ──────────────────────────────────────────── */}
        <section className="space-y-6">
          <div className="font-mono-tech text-xs tracking-widest uppercase text-[#96742c]">
            [ENGINEERING LOGS & FIELD NOTES]
          </div>

          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-[#141416] leading-[1.15]">
            Things worth writing down.
          </h1>

          <p className="text-base sm:text-lg text-[#575653] leading-relaxed max-w-2xl">
            First-hand notes from building, teaching, testing and researching automation, industrial workflows, APIs, data and AI.
          </p>
        </section>

        {/* ─── CLUSTER FILTERS ─────────────────────────────────── */}
        <section className="border-y border-[#ded9cf] py-4 flex flex-wrap gap-2">
          {clusters.map((c) => (
            <button
              key={c}
              onClick={() => setActiveCluster(c)}
              className={`px-3 py-1.5 text-xs font-mono-tech uppercase tracking-wider transition-colors border ${
                activeCluster === c
                  ? 'bg-[#141416] text-[#faf8f5] border-[#141416]'
                  : 'bg-[#faf8f5] text-[#575653] border-[#ded9cf] hover:border-[#141416] hover:text-[#141416]'
              }`}
            >
              {c}
            </button>
          ))}
        </section>

        {/* ─── ARTICLE LISTING ─────────────────────────────────── */}
        <section className="space-y-6">
          {filteredArticles.map((art) => (
            <article
              key={art.slug}
              className="border border-[#ded9cf] bg-[#ffffff] p-6 sm:p-8 hover:border-[#141416] transition-colors group"
            >
              <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
                <span className="font-mono-tech text-xs text-[#96742c] font-semibold uppercase">
                  {art.cluster}
                </span>
                <span className="font-mono-tech text-xs text-[#7a7770]">
                  {art.date} · {art.readTime}
                </span>
              </div>

              <h2 className="text-xl sm:text-2xl font-bold text-[#141416] mb-3 group-hover:text-[#96742c] transition-colors">
                <Link to={`/notes/${art.slug}`}>
                  {art.title}
                </Link>
              </h2>

              <p className="text-sm text-[#575653] leading-relaxed mb-6">
                {art.summary}
              </p>

              <div className="flex items-center justify-between pt-4 border-t border-[#ded9cf]">
                <Link
                  to={art.targetServiceUrl}
                  className="font-mono-tech text-xs text-[#7a7770] hover:text-[#141416] transition-colors"
                >
                  Context: {art.targetServiceLabel} →
                </Link>

                <Link
                  to={`/notes/${art.slug}`}
                  className="inline-flex items-center gap-1.5 text-xs font-mono-tech uppercase tracking-wider text-[#141416] font-semibold"
                >
                  <span>Read Note</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </article>
          ))}
        </section>

      </main>
    </div>
  );
};
