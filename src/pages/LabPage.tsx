import React from 'react';
import { Link } from '../router/Router';
import { SeoHead } from '../components/SeoHead';
import { Breadcrumbs } from '../components/Breadcrumbs';
import { LAB_ITEMS } from '../data/labData';
import { FlaskConical } from 'lucide-react';

export const LabPage: React.FC = () => {
  return (
    <div className="min-h-screen">
      <SeoHead
        title="Lab & Experiments | DafeDeScribe"
        description="Experiments, prototypes, and research builds in automation, video processing, web scraping, and generative media."
        canonicalPath="/lab"
        noIndex={true}
      />

      <main className="max-w-[1440px] mx-auto px-6 sm:px-12 lg:px-16 py-12 sm:py-20 space-y-12">
        <Breadcrumbs items={[{ label: 'LAB', path: '/lab' }]} />

        {/* ─── HEADER ──────────────────────────────────────────── */}
        <section className="space-y-4 max-w-4xl">
          <div className="flex items-center gap-2 font-mono-tech text-xs tracking-[0.1em] uppercase text-amber-700 font-semibold">
            <FlaskConical className="w-4 h-4 text-amber-700" />
            <span>Experimental Sandbox & Prototypes</span>
          </div>

          <h1 className="text-4xl sm:text-6xl font-bold tracking-tight text-slate-900 font-display">
            Experiments, prototypes and exploratory builds.
          </h1>

          <p className="text-base sm:text-lg text-slate-600 font-body leading-relaxed max-w-2xl">
            Where I test emerging technical patterns, prototype data parsers, and explore media automation workflows before deploying them into production environments.
          </p>
          
          <div className="font-mono-tech text-xs text-slate-400">
            SANDBOX BUILDS · NON-INDEXED EXPLORATIONS
          </div>
        </section>

        {/* ─── LAB ITEMS GRID ──────────────────────────────────── */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {LAB_ITEMS.map((item) => (
            <div
              key={item.id}
              className="catalogue-sheet p-6 sm:p-8 space-y-4 flex flex-col justify-between"
            >
              <div className="space-y-3">
                <div className="flex flex-wrap items-center justify-between gap-2 border-b border-slate-200 pb-2 font-mono-tech text-xs">
                  <span className="text-amber-700 font-semibold uppercase">
                    {item.id.toUpperCase()} · {item.type}
                  </span>
                  <span className="text-slate-500">
                    {item.date}
                  </span>
                </div>

                <h2 className="text-xl font-bold text-slate-900 font-display">
                  {item.title}
                </h2>

                <p className="text-sm text-slate-600 font-body leading-relaxed">
                  {item.summary}
                </p>

                <div className="p-3 bg-slate-50 border border-slate-200 rounded text-xs text-slate-600 font-body">
                  <strong className="font-mono-tech text-slate-900">Technical Note: </strong>
                  {item.notes}
                </div>
              </div>

              <div className="flex flex-wrap gap-2 pt-3 border-t border-slate-200">
                {item.tech.map((t) => (
                  <span
                    key={t}
                    className="px-2 py-0.5 border border-slate-200 bg-white rounded font-mono-tech text-[11px] text-slate-600"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </section>

        {/* ─── FOOTER CTA ──────────────────────────────────────── */}
        <section className="catalogue-sheet p-8 space-y-4 border-t-2 border-t-amber-600">
          <div className="font-mono-tech text-xs tracking-[0.1em] uppercase text-amber-700 font-semibold">
            Production Systems
          </div>
          <h2 className="text-2xl font-bold text-slate-900 font-display">
            Looking for tested, production-grade systems?
          </h2>
          <p className="text-sm text-slate-600 font-body">
            Explore our verified case studies or submit a commercial workflow for review.
          </p>
          <div className="pt-2 flex flex-wrap gap-4">
            <Link
              to="/work"
              className="btn-primary px-5 py-3"
            >
              <span>View Verified Work</span>
            </Link>
            <Link
              to="/contact"
              className="btn-secondary px-5 py-3"
            >
              <span>Show Me the Workflow</span>
            </Link>
          </div>
        </section>

      </main>
    </div>
  );
};
