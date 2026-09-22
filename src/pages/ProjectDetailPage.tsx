import React from 'react';
import { Link } from '../router/Router';
import { SeoHead } from '../components/SeoHead';
import { Breadcrumbs } from '../components/Breadcrumbs';
import { PROJECTS } from '../data/projectsData';
import { ArrowRight, ArrowUpRight, CheckCircle2, Code2, Terminal } from 'lucide-react';
import { WorkflowEvidence, WorkflowEvidenceHeading } from '../components/WorkflowEvidence';

export const ProjectDetailPage: React.FC<{ slug: string }> = ({ slug }) => {
  const project = PROJECTS.find((p) => p.slug === slug);

  if (!project) {
    return (
      <div className="max-w-4xl mx-auto px-6 py-20 text-center space-y-4">
        <h1 className="text-3xl font-bold text-slate-900 font-display">Case Study Not Found</h1>
        <p className="text-slate-600 font-body">The requested project does not exist in the directory.</p>
        <Link to="/work" className="btn-secondary px-4 py-2">
          Back to Work
        </Link>
      </div>
    );
  }

  const jsonLd = [
    {
      '@context': 'https://schema.org',
      '@type': 'Article',
      headline: project.title,
      description: project.oneLiner,
      author: {
        '@type': 'Person',
        name: 'Odafe Amalega'
      },
      publisher: {
        '@type': 'Organization',
        name: 'DafeDeScribe'
      }
    },
    {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.dafe.name.ng/' },
        { '@type': 'ListItem', position: 2, name: 'Work', item: 'https://www.dafe.name.ng/work' },
        { '@type': 'ListItem', position: 3, name: project.title, item: `https://www.dafe.name.ng/work/${project.slug}` }
      ]
    }
  ];

  const relatedProjects = PROJECTS.filter((p) => project.relatedSlugs.includes(p.slug));

  return (
    <div className="min-h-screen">
      <SeoHead
        title={`${project.title} | DafeDeScribe`}
        description={project.oneLiner}
        canonicalPath={`/work/${project.slug}`}
        jsonLd={jsonLd}
      />

      <main className="max-w-4xl mx-auto px-6 sm:px-10 py-12 sm:py-20 space-y-12">
        <Breadcrumbs
          items={[
            { label: 'WORK', path: '/work' },
            { label: project.refId, path: `/work/${project.slug}` },
          ]}
        />

        {/* ─── HEADER / SUMMARY CARD ────────────────────────────── */}
        <section className="bg-white border border-slate-200 rounded-md p-6 sm:p-10 space-y-4 ">
          <div className="flex flex-wrap items-center justify-between gap-2 border-b border-slate-100 pb-3 font-mono-tech text-xs">
            <div className="flex items-center gap-2">
              <span className="text-amber-700 font-semibold">{project.refId}</span>
              <span className="text-slate-300">|</span>
              <span className="text-slate-500 uppercase">{project.tag}</span>
            </div>
            <span className="px-2.5 py-0.5 bg-slate-100 text-slate-700 rounded-full font-medium">
              {project.label}
            </span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-bold tracking-tight text-slate-900 font-display leading-[1.15]">
            {project.title}
          </h1>

          <p className="text-lg sm:text-xl text-slate-700 font-body leading-relaxed">
            {project.oneLiner}
          </p>

          <div className="pt-3 border-t border-slate-100 font-mono-tech text-xs text-slate-500">
            Category: {project.category.toUpperCase()} · Completed: {project.year}
          </div>
        </section>

        {/* ─── SITUATION & CONSTRAINT ──────────────────────────── */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-white border border-slate-200 rounded-md p-6 sm:p-7 space-y-2.5 shadow-2xs">
            <div className="text-xs font-mono-tech uppercase tracking-wider text-amber-700 font-semibold">
              Operational Context
            </div>
            <div className="text-lg font-bold text-slate-900 font-display">
              What was happening?
            </div>
            <p className="text-sm text-slate-600 font-body leading-relaxed">
              {project.situation}
            </p>
          </div>

          <div className="bg-white border border-slate-200 rounded-md p-6 sm:p-7 space-y-2.5 shadow-2xs">
            <div className="text-xs font-mono-tech uppercase tracking-wider text-amber-700 font-semibold">
              Technical Constraints
            </div>
            <div className="text-lg font-bold text-slate-900 font-display">
              What made it challenging?
            </div>
            <p className="text-sm text-slate-600 font-body leading-relaxed">
              {project.constraint}
            </p>
          </div>
        </section>

        {/* ─── BUILD OVERVIEW ──────────────────────────────────── */}
        <section className="bg-white border border-slate-200 rounded-md p-6 sm:p-8 space-y-3 shadow-2xs">
          <div className="text-xs font-mono-tech uppercase tracking-wider text-amber-700 font-semibold">
            Engineering Solution
          </div>
          <div className="text-2xl font-bold text-slate-900 font-display">
            What was built?
          </div>
          <p className="text-base text-slate-700 font-body leading-relaxed">
            {project.build}
          </p>
        </section>

        {/* ─── WORKFLOW EVIDENCE ──────────────────────────────── */}
        <section className="bg-white border border-slate-200 rounded-md p-6 sm:p-8 space-y-6 ">
          <WorkflowEvidenceHeading />
          <WorkflowEvidence project={project} />
        </section>

        {/* ─── TECHNICAL NOTES & CODE EXTRACT ─────────────────── */}
        <section className="space-y-4">
          <div className="text-xs font-mono-tech uppercase tracking-wider text-amber-700 font-semibold">
            Technical Implementation
          </div>
          <div className="text-2xl font-bold text-slate-900 font-display">
            Architecture and tooling notes
          </div>
          
          <div className="flex flex-wrap gap-2 pt-1 pb-2">
            {project.technicalNotes.stack.map((tool) => (
              <span key={tool} className="px-2.5 py-1 rounded-md border border-slate-200 bg-white font-mono-tech text-xs text-slate-800 shadow-2xs font-medium">
                {tool}
              </span>
            ))}
          </div>

          <p className="text-sm text-slate-600 font-body leading-relaxed">
            {project.technicalNotes.architecture}
          </p>

          {project.technicalNotes.codeSnippet && (
            <div className="mt-4 rounded-md border border-slate-800 bg-slate-950 text-slate-100 p-5 font-mono-tech text-xs overflow-x-auto shadow-md">
              <div className="text-slate-400 pb-2 border-b border-slate-800 mb-3 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Terminal className="w-3.5 h-3.5 text-amber-400" />
                  <span>Pipeline Code Extract</span>
                </div>
                <span className="text-amber-400 text-[11px]">Implementation Extract</span>
              </div>
              <pre className="leading-relaxed">
                <code>{project.technicalNotes.codeSnippet}</code>
              </pre>
            </div>
          )}
        </section>

        {/* ─── CAPABILITY PROOF ────────────────────────────────── */}
        <section className="bg-white border border-slate-200 rounded-md p-6 sm:p-8 space-y-4 ">
          <div className="text-xs font-mono-tech uppercase tracking-wider text-slate-500 font-semibold">
            Demonstrated Capabilities
          </div>
          <ul className="space-y-2.5 text-sm text-slate-800 font-body">
            {project.whatThisProves.map((proof, idx) => (
              <li key={idx} className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-amber-600 mt-0.5 flex-shrink-0" />
                <span>{proof}</span>
              </li>
            ))}
          </ul>
        </section>

        {/* ─── RELATED WORK ────────────────────────────────────── */}
        {relatedProjects.length > 0 && (
          <section className="border-t border-slate-200 pt-8 space-y-4">
            <div className="text-xs font-mono-tech uppercase tracking-wider text-slate-500 font-semibold">
              Related Case Studies
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {relatedProjects.map((rel) => (
                <Link
                  key={rel.slug}
                  to={`/work/${rel.slug}`}
                  className="bg-white border border-slate-200 rounded-md p-5 hover:border-slate-400 hover:shadow-md transition-all group"
                >
                  <div className="font-mono-tech text-[10px] text-amber-700 mb-1 font-semibold">
                    {rel.refId} · {rel.label}
                  </div>
                  <div className="text-base font-bold text-slate-900 font-display group-hover:text-amber-700 transition-colors mb-1">
                    {rel.title}
                  </div>
                  <div className="text-xs text-slate-600 font-body">
                    {rel.oneLiner}
                  </div>
                </Link>
              ))}
            </div>
          </section>
        )}

        {/* ─── CTA ─────────────────────────────────────────────── */}
        <section className="bg-white border border-slate-200 rounded-md p-8 space-y-5 ">
          <div className="text-xs font-mono-tech tracking-wider uppercase text-amber-700 font-semibold">
            Have a Similar Operational Challenge?
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 font-display">
            Let's evaluate your workflow.
          </h2>
          <p className="text-sm sm:text-base text-slate-600 font-body leading-relaxed max-w-2xl">
            Share an overview of your current manual workflow. We will examine where the data is getting delayed and outline practical automation options.
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
