import React, { useState } from 'react';
import { Link } from '../router/Router';
import { SeoHead } from '../components/SeoHead';
import { Breadcrumbs } from '../components/Breadcrumbs';
import { PROJECTS, Project } from '../data/projectsData';
import { ArrowUpRight } from 'lucide-react';

export const WorkPage: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState<string>('All');

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

      <main className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-20 space-y-12">
        <Breadcrumbs items={[{ label: 'WORK', path: '/work' }]} />

        {/* ─── HEADER ──────────────────────────────────────────── */}
        <section className="space-y-6 max-w-4xl">
          <div className="font-mono-tech text-xs tracking-widest uppercase text-[#96742c]">
            [ENGINEERED SYSTEMS INDEX]
          </div>

          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-[#141416] leading-[1.15]">
            Things I have actually built.
          </h1>

          <div className="space-y-2 text-base sm:text-lg text-[#575653] leading-relaxed">
            <p>
              Client work, internal systems, experiments and teaching projects.
            </p>
            <p className="font-medium text-[#141416]">
              Every item is labelled so you know what kind of work you are looking at.
            </p>
          </div>
        </section>

        {/* ─── CATEGORY FILTERS ────────────────────────────────── */}
        <section className="border-y border-[#ded9cf] py-4 flex flex-wrap gap-2">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveFilter(cat)}
              className={`px-3 py-1.5 text-xs font-mono-tech uppercase tracking-wider transition-colors border ${
                activeFilter === cat
                  ? 'bg-[#141416] text-[#faf8f5] border-[#141416]'
                  : 'bg-[#faf8f5] text-[#575653] border-[#ded9cf] hover:border-[#141416] hover:text-[#141416]'
              }`}
            >
              {cat}
            </button>
          ))}
        </section>

        {/* ─── PROJECT GRID ────────────────────────────────────── */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {filteredProjects.map((proj) => (
            <div
              key={proj.slug}
              className="border border-[#ded9cf] bg-[#ffffff] p-6 sm:p-8 flex flex-col justify-between hover:border-[#141416] transition-colors"
            >
              <div className="space-y-4">
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <span className="font-mono-tech text-xs text-[#96742c] font-semibold">
                    {proj.tag}
                  </span>
                  <span className="font-mono-tech text-[10px] px-2 py-0.5 bg-[#f3efe6] text-[#141416] border border-[#ded9cf] font-semibold">
                    {proj.label}
                  </span>
                </div>

                <h2 className="text-xl sm:text-2xl font-bold text-[#141416]">
                  {proj.title}
                </h2>

                <p className="text-sm text-[#575653] leading-relaxed">
                  {proj.oneLiner}
                </p>

                <div className="pt-2">
                  <div className="font-mono-tech text-xs text-[#7a7770]">
                    Verified result:
                  </div>
                  <div className="text-xs sm:text-sm text-[#141416] font-medium mt-0.5">
                    {proj.result}
                  </div>
                </div>
              </div>

              <div className="pt-6 border-t border-[#ded9cf] mt-6 flex items-center justify-between">
                <span className="font-mono-tech text-xs text-[#7a7770]">
                  {proj.category}
                </span>
                <Link
                  to={`/work/${proj.slug}`}
                  className="inline-flex items-center gap-1.5 text-xs font-mono-tech uppercase tracking-wider text-[#141416] font-semibold hover:text-[#96742c] transition-colors"
                >
                  <span>Read case study</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          ))}
        </section>

      </main>
    </div>
  );
};
