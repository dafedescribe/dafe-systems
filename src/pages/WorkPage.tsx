import React, { useState } from 'react';
import { Link, useRouter } from '../router/Router';
import { SeoHead } from '../components/SeoHead';
import { Breadcrumbs } from '../components/Breadcrumbs';
import { PROJECTS, Project } from '../data/projectsData';
import { ArrowUpRight } from 'lucide-react';

export const WorkPage: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState<string>('All');
  const { navigate } = useRouter();

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'CollectionPage',
    name: 'Automation, Data, AI & Web Projects | Odafe Amalega',
    url: 'https://dafe.name.ng/work',
    description: 'Client work, internal systems, prototypes and teaching projects by Odafe Amalega.'
  };

  const categories = [
    'All',
    'Industry',
    'Automation & Data',
    'Web',
    'AI & Media',
    'Teaching',
    'Experiments'
  ];

  const filteredProjects = activeFilter === 'All'
    ? PROJECTS
    : PROJECTS.filter((p) => p.category === activeFilter);

  return (
    <div className="min-h-screen">
      <SeoHead
        title="Automation, Data, AI & Web Projects | Odafe Amalega"
        description="Client work, internal systems, experiments and teaching projects. Every item is labelled so you know what kind of work you are looking at."
        canonicalPath="/work"
        jsonLd={jsonLd}
      />

      <main className="max-w-[1440px] mx-auto px-6 sm:px-12 lg:px-16 py-12 sm:py-20 space-y-16">
        <Breadcrumbs items={[{ label: 'WORK', path: '/work' }]} />

        {/* ─── HEADER / MASTER CATALOGUE ───────────────────────── */}
        <section className="space-y-4 max-w-4xl">
          <div className="font-mono-tech text-xs tracking-[0.1em] uppercase text-[#B58A2A] font-semibold">
            03 / MASTER SYSTEMS CATALOGUE
          </div>

          <h1 className="text-4xl sm:text-6xl font-bold tracking-tight text-[#181816] font-display">
            Selected Work
          </h1>

          <div className="space-y-2 text-base sm:text-lg text-[#77736A] font-body leading-relaxed max-w-3xl">
            <p>
              Client work, internal systems, experiments and teaching projects.
            </p>
            <p className="font-medium text-[#181816]">
              Every item is documented with verifiable constraints, architecture, and verified outcomes.
            </p>
          </div>
        </section>

        {/* ─── CATEGORY FILTERS ────────────────────────────────── */}
        <section className="border-y border-[#D9D4C8] py-3.5 flex flex-wrap items-center gap-2">
          <span className="font-mono-tech text-xs text-[#77736A] uppercase mr-2">
            FILTER:
          </span>
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveFilter(cat)}
              className={`px-3 py-1 text-xs font-mono-tech uppercase tracking-[0.08em] transition-colors border ${
                activeFilter === cat
                  ? 'bg-[#181816] text-[#FCFBF7] border-[#181816]'
                  : 'bg-[#FCFBF7] text-[#77736A] border-[#D9D4C8] hover:border-[#181816] hover:text-[#181816]'
              }`}
            >
              {cat}
            </button>
          ))}
        </section>

        {/* ─── 1. TECHNICAL CATALOGUE INDEX TABLE ──────────────── */}
        <section className="catalogue-sheet overflow-hidden">
          <div className="p-4 sm:p-5 border-b border-[#D9D4C8] bg-[#F5F1E7] flex items-center justify-between">
            <span className="font-mono-tech text-xs text-[#181816] font-semibold uppercase tracking-[0.08em]">
              TECHNICAL REGISTER / {filteredProjects.length} ENTRIES
            </span>
            <span className="font-mono-tech text-[11px] text-[#77736A]">
              CLICK ANY ROW TO OPEN PROJECT DOSSIER
            </span>
          </div>

          <div className="overflow-x-auto">
            <table className="catalogue-table">
              <thead>
                <tr>
                  <th style={{ width: '130px' }}>REF</th>
                  <th>PROJECT TITLE</th>
                  <th style={{ width: '180px' }}>FIELD</th>
                  <th style={{ width: '160px' }}>STATUS / TYPE</th>
                  <th style={{ width: '90px' }}>YEAR</th>
                </tr>
              </thead>
              <tbody>
                {filteredProjects.map((p) => (
                  <tr
                    key={p.slug}
                    onClick={() => navigate(`/work/${p.slug}`)}
                    className="cursor-pointer transition-colors"
                  >
                    <td className="font-mono-tech text-xs text-[#B58A2A] font-semibold whitespace-nowrap">
                      {p.refId}
                    </td>
                    <td className="font-medium text-[#181816] font-body">
                      <div className="flex items-center justify-between gap-2">
                        <span>{p.title}</span>
                        <ArrowUpRight className="w-3.5 h-3.5 text-[#AAA397] opacity-0 group-hover:opacity-100" />
                      </div>
                    </td>
                    <td className="text-xs text-[#77736A] font-mono-tech">
                      {p.category.toUpperCase()}
                    </td>
                    <td>
                      <span className="font-mono-tech text-[10px] px-2 py-0.5 bg-[#F5F1E7] text-[#33312C] border border-[#D9D4C8] font-semibold whitespace-nowrap">
                        {p.label}
                      </span>
                    </td>
                    <td className="font-mono-tech text-xs text-[#77736A]">
                      {p.year}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* ─── 2. VISUAL PROJECT PLATES & SPREADS ───────────────── */}
        <section className="space-y-6 pt-6">
          <div className="flex items-center justify-between border-b border-[#D9D4C8] pb-3">
            <div className="font-mono-tech text-xs tracking-[0.1em] uppercase text-[#77736A]">
              [CATALOGUE PLATES & SPECIFICATION SPREADS]
            </div>
            <div className="font-mono-tech text-xs text-[#B58A2A]">
              PLATES 01–0{filteredProjects.length}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {filteredProjects.map((proj) => (
              <article
                key={proj.slug}
                className="catalogue-sheet p-6 sm:p-8 flex flex-col justify-between hover:border-[#181816] transition-colors"
              >
                <div className="space-y-4">
                  <div className="flex flex-wrap items-center justify-between gap-2 border-b border-[#D9D4C8] pb-3">
                    <span className="font-mono-tech text-xs text-[#B58A2A] font-semibold">
                      {proj.refId} · {proj.tag}
                    </span>
                    <span className="font-mono-tech text-[10px] px-2 py-0.5 bg-[#F5F1E7] text-[#33312C] border border-[#D9D4C8] font-semibold">
                      {proj.label}
                    </span>
                  </div>

                  <h2 className="text-2xl font-bold text-[#181816] font-display">
                    {proj.title}
                  </h2>

                  <p className="text-sm text-[#77736A] leading-relaxed font-body">
                    {proj.oneLiner}
                  </p>

                  <div className="p-3.5 bg-[#FCFBF7] border border-[#D9D4C8] space-y-1">
                    <span className="font-mono-tech text-[10px] text-[#B58A2A] uppercase tracking-wider block">
                      VERIFIED RESULT
                    </span>
                    <p className="text-xs sm:text-sm font-medium text-[#181816]">
                      {proj.result}
                    </p>
                  </div>
                </div>

                <div className="pt-6 border-t border-[#D9D4C8] mt-6 flex items-center justify-between font-mono-tech text-xs">
                  <span className="text-[#77736A]">
                    {proj.category} · {proj.year}
                  </span>
                  <Link
                    to={`/work/${proj.slug}`}
                    className="inline-flex items-center gap-1.5 uppercase tracking-[0.08em] text-[#181816] font-semibold hover:text-[#B58A2A] transition-colors"
                  >
                    <span>OPEN PROJECT</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </section>

      </main>
    </div>
  );
};
