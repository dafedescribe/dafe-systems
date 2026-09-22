import React, { useState } from 'react';
import { ArrowRight, ArrowUpRight } from 'lucide-react';
import { CompactCta } from '../components/CompactCta';
import { EditorialPageHeader } from '../components/EditorialPageHeader';
import { EditorialSection } from '../components/EditorialSection';
import { SeoHead } from '../components/SeoHead';
import { PROJECTS } from '../data/projectsData';
import { Link } from '../router/Router';

const categories = ['ALL', 'INDUSTRY', 'DATA', 'AI', 'MEDIA', 'EDUCATION'] as const;
const categoryMap: Record<(typeof categories)[number], string[]> = {
  ALL: [],
  INDUSTRY: ['Industry'],
  DATA: ['Automation & Data'],
  AI: ['AI & Media'],
  MEDIA: ['Web', 'AI & Media'],
  EDUCATION: ['Teaching'],
};
const featuredSlugs = ['million-row-pipeline', 'industrial-rfq-intake', 'tender-monitoring-engine'];

export const WorkPage: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState<(typeof categories)[number]>('ALL');
  const filteredProjects = activeFilter === 'ALL' ? PROJECTS : PROJECTS.filter((project) => categoryMap[activeFilter].includes(project.category));
  const featuredProjects = PROJECTS.filter((project) => featuredSlugs.includes(project.slug));

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'CollectionPage',
    name: 'Documented Systems & Engineering Case Studies | Anthony Amalega',
    url: 'https://www.dafe.name.ng/work',
    description: 'Documented engineering case studies, data pipelines, and workflow automation systems built by Anthony Amalega.',
  };

  return (
    <div className="min-h-screen">
      <SeoHead title="Documented Systems & Case Studies | DafeDeScribe" description="Documented engineering case studies, data pipelines, and workflow automation systems built by Anthony Amalega. See the constraints, workflow evidence, architecture, and stated results." canonicalPath="/work" jsonLd={jsonLd} />
      <main className="mx-auto max-w-[1440px] px-6 pb-16 pt-10 sm:px-12 sm:pb-20 sm:pt-14 lg:px-16">
        <EditorialPageHeader
          indexLabel="WORK"
          eyebrow="Documented systems"
          title="Selected work, with the scope stated plainly."
          summary={<>Production systems, internal builds, commercial prototypes, and training curricula. Every record names its constraint, workflow, and stated result.</>}
        >
          <Link to="/contact" className="btn-primary px-6 py-3.5">Discuss a similar workflow <ArrowRight className="h-4 w-4" aria-hidden="true" /></Link>
        </EditorialPageHeader>

        <EditorialSection label="Project directory" intro={<>{filteredProjects.length} Documented Builds. Use the filter, then open any row for the complete technical breakdown.</>}>
          <div className="mb-5 flex flex-wrap items-center gap-2 border-y border-stone-300 py-3">
            <span className="mr-2 font-mono-tech text-xs font-semibold uppercase tracking-wider text-slate-500">Filter</span>
            {categories.map((category) => (
              <button key={category} type="button" onClick={() => setActiveFilter(category)} aria-pressed={activeFilter === category} className={`min-h-11 border px-3 py-2 font-mono-tech text-xs uppercase tracking-wider transition-colors ${activeFilter === category ? 'border-slate-950 bg-slate-950 text-white' : 'border-stone-300 bg-white text-slate-600 hover:border-slate-500'}`}>
                {category}
              </button>
            ))}
          </div>
          <div className="divide-y divide-stone-300 border-y border-stone-300">
            {filteredProjects.map((project) => (
              <Link key={project.slug} to={`/work/${project.slug}`} data-project-directory-entry="true" className="grid min-h-16 gap-2 py-4 transition-colors hover:bg-stone-100 sm:grid-cols-[120px_minmax(0,1fr)_180px_120px_60px] sm:items-center sm:px-3">
                <span className="font-mono-tech text-xs font-bold text-amber-800">{project.refId}</span>
                <span className="font-semibold text-slate-950">{project.title}</span>
                <span className="font-mono-tech text-xs uppercase text-slate-500">{project.category}</span>
                <span className="text-xs text-slate-600">{project.label}</span>
                <span className="font-mono-tech text-xs text-slate-500">{project.year}</span>
              </Link>
            ))}
          </div>
        </EditorialSection>

        <EditorialSection label="Representative evidence" title="Three systems, three different operating constraints." intro="These examples show the range without making the index carry every technical detail.">
          <div className="divide-y divide-stone-300 border-y border-stone-300">
            {featuredProjects.map((project) => (
              <article key={project.slug} data-featured-project="true" className="grid gap-5 py-7 lg:grid-cols-[150px_minmax(0,1fr)_minmax(260px,0.65fr)]">
                <div className="font-mono-tech text-xs uppercase tracking-wider text-slate-500"><div className="font-bold text-amber-800">{project.refId}</div><div className="mt-2">{project.label}</div></div>
                <div>
                  <h2 className="font-display text-2xl leading-tight text-slate-950 sm:text-3xl">{project.title}</h2>
                  <p className="mt-3 text-sm leading-relaxed text-slate-600">{project.oneLiner}</p>
                  <p className="mt-4 text-xs leading-relaxed text-slate-600"><strong className="text-slate-900">Constraint:</strong> {project.constraint}</p>
                  <Link to={`/work/${project.slug}`} className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-slate-950 hover:text-amber-800">Read case study <ArrowUpRight className="h-4 w-4" aria-hidden="true" /></Link>
                </div>
                <dl className="grid gap-4 border-t border-stone-200 pt-4 text-xs lg:border-l lg:border-t-0 lg:pl-6 lg:pt-0">
                  <div><dt className="font-mono-tech uppercase tracking-wider text-slate-500">Input</dt><dd className="mt-1.5 leading-relaxed text-slate-700">{project.workflow.input}</dd></div>
                  <div><dt className="font-mono-tech uppercase tracking-wider text-slate-500">Output</dt><dd className="mt-1.5 leading-relaxed text-slate-700">{project.workflow.output}</dd></div>
                  <div><dt className="font-mono-tech uppercase tracking-wider text-slate-500">Result</dt><dd className="mt-1.5 leading-relaxed text-slate-700">{project.result}</dd></div>
                </dl>
              </article>
            ))}
          </div>
        </EditorialSection>

        <div className="pt-12 sm:pt-16">
          <CompactCta title="Have a similar operational challenge?" copy="Send a short outline of the current manual workflow. I will assess where information is getting held up and what a practical architecture could look like." actionLabel="Discuss your workflow" actionTo="/contact" />
        </div>
      </main>
    </div>
  );
};
