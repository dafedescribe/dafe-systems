import React, { useState } from 'react';
import { Link, useRouter } from '../router/Router';
import { SeoHead } from '../components/SeoHead';
import { Breadcrumbs } from '../components/Breadcrumbs';
import { ArrowRight, ArrowUpRight } from 'lucide-react';
import { PROJECTS, ProjectCategory } from '../data/projectsData';

export const WorkPage: React.FC = () => {
  const { navigate } = useRouter();
  const [activeFilter, setActiveFilter] = useState<string>('ALL');

  const categories: string[] = ['ALL', 'INDUSTRY', 'DATA', 'AI', 'MEDIA', 'EDUCATION'];

  const filteredProjects = activeFilter === 'ALL'
    ? PROJECTS
    : PROJECTS.filter((p) => p.category.toUpperCase() === activeFilter);

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'CollectionPage',
    name: 'Verified Systems & Engineering Case Studies | Odafe Amalega',
    url: 'https://www.dafe.name.ng/work',
    description: 'Verified engineering case studies, data pipelines, and workflow automation systems built by Odafe Amalega.'
  };

  return (
    <div className="min-h-screen">
      <SeoHead
        title="Verified Systems & Case Studies | DafeDeScribe"
        description="Verified engineering case studies, data pipelines, and workflow automation systems built by Odafe Amalega. Documented constraints, architectures, and verified outcomes."
        canonicalPath="/work"
        jsonLd={jsonLd}
      />

      <main className="max-w-[1440px] mx-auto px-6 sm:px-12 lg:px-16 py-12 sm:py-20 space-y-16">
        <Breadcrumbs items={[{ label: 'WORK', path: '/work' }]} />

        {/* ─── HEADER ──────────────────────────────────────────── */}
        <section className="space-y-4 max-w-4xl">
          <div className="text-xs font-mono-tech tracking-wider uppercase text-amber-700 font-semibold">
            Selected Systems & Projects
          </div>

          <h1 className="text-4xl sm:text-6xl font-bold tracking-tight text-slate-900 font-display">
            Selected Work
          </h1>

          <div className="space-y-2 text-base sm:text-lg text-slate-600 font-body leading-relaxed max-w-3xl">
            <p>
              Production systems, data pipelines, commercial prototypes, and training curricula.
            </p>
            <p className="font-medium text-slate-900">
              Each project is documented with real operational constraints, software architecture, and verified outcomes.
            </p>
          </div>
        </section>

        {/* ─── CATEGORY FILTERS ────────────────────────────────── */}
        <section className="border-y border-slate-200 py-3.5 flex flex-wrap items-center gap-2">
          <span className="text-xs font-mono-tech text-slate-500 uppercase mr-2 font-medium">
            Filter:
          </span>
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveFilter(cat)}
              className={`px-3 py-1.5 text-xs font-mono-tech uppercase tracking-wider transition-colors rounded-md border ${
                activeFilter === cat
                  ? 'bg-slate-900 text-white border-slate-900 font-semibold'
                  : 'bg-white text-slate-600 border-slate-200 hover:border-slate-400 hover:text-slate-900'
              }`}
            >
              {cat}
            </button>
          ))}
        </section>

        {/* ─── 1. MASTER PROJECT INDEX TABLE ───────────────────── */}
        <section className="bg-white border border-slate-200 rounded-xl overflow-hidden shadow-sm">
          <div className="p-4 sm:p-5 border-b border-slate-100 bg-slate-50/50 flex flex-col sm:flex-row sm:items-center justify-between gap-2">
            <span className="text-xs font-mono-tech text-slate-900 font-semibold uppercase tracking-wider">
              Project Directory · {filteredProjects.length} Verified Builds
            </span>
            <span className="text-xs text-slate-500 font-body">
              Click any row to read the complete technical breakdown
            </span>
          </div>

          <div className="overflow-x-auto">
            <table className="catalogue-table">
              <thead>
                <tr>
                  <th style={{ width: '130px' }}>Reference</th>
                  <th>Project Title</th>
                  <th style={{ width: '180px' }}>Field</th>
                  <th style={{ width: '160px' }}>Status / Scope</th>
                  <th style={{ width: '90px' }}>Year</th>
                </tr>
              </thead>
              <tbody>
                {filteredProjects.map((p) => (
                  <tr
                    key={p.slug}
                    onClick={() => navigate(`/work/${p.slug}`)}
                    onKeyDown={(e) => {
                      if (e.key === 'Enter' || e.key === ' ') {
                        e.preventDefault();
                        navigate(`/work/${p.slug}`);
                      }
                    }}
                    tabIndex={0}
                    role="link"
                    aria-label={`View case study: ${p.title}`}
                    className="cursor-pointer transition-colors hover:bg-slate-50 focus:bg-amber-50 focus:outline-none"
                  >
                    <td className="font-mono-tech text-xs text-amber-700 font-semibold whitespace-nowrap">
                      {p.refId}
                    </td>
                    <td className="font-medium text-slate-900 font-body">
                      <div className="flex items-center justify-between gap-2">
                        <Link
                          to={`/work/${p.slug}`}
                          className="hover:text-amber-700 transition-colors"
                          onClick={(e) => e.stopPropagation()}
                        >
                          {p.title}
                        </Link>
                        <ArrowUpRight className="w-3.5 h-3.5 text-amber-700 opacity-0 group-hover:opacity-100" />
                      </div>
                    </td>
                    <td className="text-xs text-slate-500 font-mono-tech">
                      {p.category.toUpperCase()}
                    </td>
                    <td>
                      <span className="text-xs px-2 py-0.5 bg-slate-100 text-slate-700 rounded font-medium whitespace-nowrap">
                        {p.label}
                      </span>
                    </td>
                    <td className="text-xs text-slate-500 font-mono-tech">
                      {p.year}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* ─── 2. FEATURED PROJECT CARDS ───────────────────────── */}
        <section className="space-y-6 pt-6">
          <div className="flex items-center justify-between border-b border-slate-200 pb-3">
            <div className="text-xs font-mono-tech tracking-wider uppercase text-amber-700 font-semibold">
              Detailed Case Studies
            </div>
            <div className="text-xs text-slate-500 font-mono-tech">
              Architecture & Outcomes
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {filteredProjects.map((proj) => (
              <article
                key={proj.slug}
                className="bg-white border border-slate-200 rounded-xl p-6 sm:p-8 flex flex-col justify-between hover:border-slate-400 hover:shadow-md transition-all"
              >
                <div className="space-y-4">
                  <div className="flex flex-wrap items-center justify-between gap-2 border-b border-slate-100 pb-3">
                    <span className="font-mono-tech text-xs text-amber-700 font-semibold">
                      {proj.refId} · {proj.tag}
                    </span>
                    <span className="text-xs px-2 py-0.5 bg-slate-100 text-slate-700 rounded font-medium">
                      {proj.label}
                    </span>
                  </div>

                  <h2 className="text-2xl font-bold text-slate-900 font-display">
                    {proj.title}
                  </h2>

                  <p className="text-sm text-slate-600 font-body leading-relaxed">
                    {proj.oneLiner}
                  </p>

                  <div className="space-y-2 text-xs text-slate-600 border-t border-slate-100 pt-3">
                    <div>
                      <strong className="text-slate-900">Constraint: </strong>
                      {proj.constraints}
                    </div>
                    <div>
                      <strong className="text-slate-900">Outcome: </strong>
                      {proj.result}
                    </div>
                  </div>
                </div>

                <div className="pt-6 mt-4 border-t border-slate-100 flex items-center justify-between">
                  <Link
                    to={`/work/${proj.slug}`}
                    className="inline-flex items-center gap-1.5 text-xs font-mono-tech uppercase tracking-wider text-slate-900 font-semibold hover:text-amber-700 transition-colors"
                  >
                    <span>Read case study breakdown</span>
                    <span>→</span>
                  </Link>
                  <span className="text-xs text-slate-400 font-mono-tech">
                    {proj.year}
                  </span>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* ─── FINAL CTA ───────────────────────────────────────── */}
        <section className="bg-white border border-slate-200 rounded-xl p-8 sm:p-12 space-y-6 shadow-sm">
          <div className="text-xs font-mono-tech tracking-wider uppercase text-amber-700 font-semibold">
            Have a Similar Operational Challenge?
          </div>

          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900 font-display">
            Let's evaluate your operational process.
          </h2>

          <p className="text-sm sm:text-base text-slate-600 font-body max-w-2xl leading-relaxed">
            Send me an outline of your current manual workflow. We'll assess where the data is getting held up and provide practical architecture recommendations.
          </p>

          <div className="pt-2">
            <Link
              to="/contact"
              className="btn-primary px-6 py-3.5 text-sm"
            >
              <span>Discuss Your Workflow</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </section>

      </main>
    </div>
  );
};
