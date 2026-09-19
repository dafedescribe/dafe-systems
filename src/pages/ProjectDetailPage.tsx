import React from 'react';
import { Link } from '../router/Router';
import { SeoHead } from '../components/SeoHead';
import { Breadcrumbs } from '../components/Breadcrumbs';
import { PROJECTS } from '../data/projectsData';
import { ArrowRight, ArrowUpRight, CheckCircle2 } from 'lucide-react';

export const ProjectDetailPage: React.FC<{ slug: string }> = ({ slug }) => {
  const project = PROJECTS.find((p) => p.slug === slug);

  if (!project) {
    return (
      <div className="max-w-4xl mx-auto px-6 py-20 text-center space-y-4">
        <h1 className="text-3xl font-bold text-[#181816] font-display">Case Study Not Found</h1>
        <p className="text-[#77736A] font-body">The requested project dossier does not exist in the catalogue.</p>
        <Link to="/work" className="btn-secondary px-4 py-2">
          Back to Work Catalogue
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
        { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://dafe.name.ng/' },
        { '@type': 'ListItem', position: 2, name: 'Work', item: 'https://dafe.name.ng/work' },
        { '@type': 'ListItem', position: 3, name: project.title, item: `https://dafe.name.ng/work/${project.slug}` }
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

      <main className="max-w-4xl mx-auto px-6 sm:px-10 py-12 sm:py-20 space-y-14">
        <Breadcrumbs
          items={[
            { label: 'WORK', path: '/work' },
            { label: project.refId, path: `/work/${project.slug}` },
          ]}
        />

        {/* ─── HEADER / SPECIFICATION IDENTIFIER ───────────────── */}
        <section className="catalogue-sheet p-6 sm:p-8 space-y-4">
          <div className="flex flex-wrap items-center justify-between gap-2 border-b border-[#D9D4C8] pb-3 font-mono-tech text-xs">
            <div className="flex items-center gap-2">
              <span className="text-[#B58A2A] font-semibold">{project.refId}</span>
              <span className="text-[#D9D4C8]">|</span>
              <span className="text-[#77736A] uppercase">{project.tag}</span>
            </div>
            <span className="px-2 py-0.5 bg-[#F5F1E7] text-[#33312C] border border-[#D9D4C8] font-semibold">
              {project.label}
            </span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-bold tracking-tight text-[#181816] font-display leading-[1.15]">
            {project.title}
          </h1>

          <p className="text-lg sm:text-xl text-[#33312C] font-body leading-relaxed">
            {project.oneLiner}
          </p>

          <div className="pt-2 border-t border-[#D9D4C8] font-mono-tech text-xs text-[#77736A]">
            CATEGORY: {project.category.toUpperCase()} · YEAR: {project.year}
          </div>
        </section>

        {/* ─── SITUATION & CONSTRAINT (4 / 8 SPLIT SPREAD) ─────── */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="catalogue-sheet p-6 sm:p-7 space-y-3">
            <div className="font-mono-tech text-xs uppercase tracking-[0.1em] text-[#B58A2A] font-semibold">
              SITUATION
            </div>
            <div className="text-lg font-bold text-[#181816] font-display">
              What was happening?
            </div>
            <p className="text-sm text-[#77736A] font-body leading-relaxed">
              {project.situation}
            </p>
          </div>

          <div className="catalogue-sheet p-6 sm:p-7 space-y-3">
            <div className="font-mono-tech text-xs uppercase tracking-[0.1em] text-[#B58A2A] font-semibold">
              CONSTRAINT
            </div>
            <div className="text-lg font-bold text-[#181816] font-display">
              What made it difficult?
            </div>
            <p className="text-sm text-[#77736A] font-body leading-relaxed">
              {project.constraint}
            </p>
          </div>
        </section>

        {/* ─── BUILD ───────────────────────────────────────────── */}
        <section className="catalogue-sheet p-6 sm:p-8 space-y-3">
          <div className="font-mono-tech text-xs uppercase tracking-[0.1em] text-[#B58A2A] font-semibold">
            BUILD
          </div>
          <div className="text-2xl font-bold text-[#181816] font-display">
            What was actually built?
          </div>
          <p className="text-base text-[#33312C] font-body leading-relaxed">
            {project.build}
          </p>
        </section>

        {/* ─── WORKFLOW SCHEMATIC ──────────────────────────────── */}
        <section className="catalogue-sheet p-6 sm:p-8 space-y-6">
          <div className="flex items-center justify-between border-b border-[#D9D4C8] pb-3">
            <div className="font-mono-tech text-xs uppercase tracking-[0.1em] text-[#B58A2A] font-semibold">
              WORKFLOW TRACE
            </div>
            <span className="font-mono-tech text-xs text-[#77736A]">
              INPUT → PROCESSING → OUTPUT
            </span>
          </div>

          <div className="space-y-4 font-mono-tech text-xs">
            {/* Input */}
            <div className="p-4 border border-[#D9D4C8] bg-[#FCFBF7]">
              <div className="text-[#77736A] uppercase mb-1">
                01 / RAW INPUT
              </div>
              <div className="font-medium text-[#181816] font-body text-sm">
                {project.workflow.input}
              </div>
            </div>

            {/* Processing Steps */}
            <div className="border-l-3 border-[#B58A2A] pl-4 py-1 space-y-2">
              <div className="text-[#B58A2A] uppercase font-semibold">
                02 / PIPELINE TRANSFORMATIONS
              </div>
              {project.workflow.processing.map((step, idx) => (
                <div key={idx} className="flex items-start gap-2 text-xs text-[#33312C] font-body">
                  <span className="font-mono-tech text-xs text-[#B58A2A] font-semibold">
                    {idx + 1}.
                  </span>
                  <span>{step}</span>
                </div>
              ))}
            </div>

            {/* Output */}
            <div className="p-4 border border-[#B58A2A] bg-[#F6F0DC]">
              <div className="text-[#795B18] uppercase mb-1 font-semibold">
                03 / VERIFIED OUTPUT
              </div>
              <div className="font-medium text-[#181816] font-body text-sm">
                {project.workflow.output}
              </div>
            </div>
          </div>
        </section>

        {/* ─── RESULT ──────────────────────────────────────────── */}
        <section className="catalogue-sheet p-6 sm:p-8 space-y-3 border-l-4 border-l-[#B58A2A]">
          <div className="font-mono-tech text-xs uppercase tracking-[0.1em] text-[#B58A2A] font-semibold">
            RESULT
          </div>
          <div className="text-xl font-bold text-[#181816] font-display">
            Only verified outcomes.
          </div>
          <p className="text-base sm:text-lg text-[#181816] font-body leading-relaxed font-medium">
            {project.result}
          </p>
        </section>

        {/* ─── TECHNICAL NOTES & CODE EXTRACT ─────────────────── */}
        <section className="space-y-4">
          <div className="font-mono-tech text-xs uppercase tracking-[0.1em] text-[#B58A2A] font-semibold">
            TECHNICAL NOTES
          </div>
          <div className="text-2xl font-bold text-[#181816] font-display">
            Architecture and tools for technical readers
          </div>
          
          <div className="flex flex-wrap gap-2 pt-1 pb-2">
            {project.technicalNotes.stack.map((tool) => (
              <span key={tool} className="px-2.5 py-1 border border-[#D9D4C8] bg-[#FFFFFF] font-mono-tech text-xs text-[#181816]">
                {tool}
              </span>
            ))}
          </div>

          <p className="text-sm text-[#77736A] font-body leading-relaxed">
            {project.technicalNotes.architecture}
          </p>

          {project.technicalNotes.codeSnippet && (
            <div className="mt-4 border border-[#181816] bg-[#181816] text-[#FCFBF7] p-5 font-mono-tech text-xs overflow-x-auto">
              <div className="text-[#AAA397] pb-2 border-b border-[#33312C] mb-3 flex items-center justify-between">
                <span>[SYSTEM CODE EXTRACT]</span>
                <span className="text-[#B58A2A]">DETERMINISTIC IMPLEMENTATION</span>
              </div>
              <pre className="leading-relaxed">
                <code>{project.technicalNotes.codeSnippet}</code>
              </pre>
            </div>
          )}
        </section>

        {/* ─── WHAT THIS PROVES ────────────────────────────────── */}
        <section className="catalogue-sheet p-6 sm:p-8 space-y-4">
          <div className="font-mono-tech text-xs uppercase tracking-[0.1em] text-[#77736A]">
            CAPABILITY PROOF
          </div>
          <ul className="space-y-2 text-sm text-[#181816] font-medium font-body">
            {project.whatThisProves.map((proof, idx) => (
              <li key={idx} className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-[#B58A2A] mt-0.5 flex-shrink-0" />
                <span>{proof}</span>
              </li>
            ))}
          </ul>
        </section>

        {/* ─── RELATED WORK ────────────────────────────────────── */}
        {relatedProjects.length > 0 && (
          <section className="border-t border-[#D9D4C8] pt-8 space-y-4">
            <div className="font-mono-tech text-xs uppercase tracking-[0.1em] text-[#77736A]">
              RELATED CATALOGUE SPECIMENS
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {relatedProjects.map((rel) => (
                <Link
                  key={rel.slug}
                  to={`/work/${rel.slug}`}
                  className="catalogue-plate p-5 group"
                >
                  <div className="font-mono-tech text-[10px] text-[#B58A2A] mb-1 font-semibold">
                    {rel.refId} · {rel.label}
                  </div>
                  <div className="text-base font-bold text-[#181816] font-display group-hover:text-[#B58A2A] transition-colors mb-1">
                    {rel.title}
                  </div>
                  <div className="text-xs text-[#77736A] font-body">
                    {rel.oneLiner}
                  </div>
                </Link>
              ))}
            </div>
          </section>
        )}

        {/* ─── CTA ─────────────────────────────────────────────── */}
        <section className="catalogue-sheet p-8 space-y-5 border-l-4 border-l-[#B58A2A]">
          <div className="font-mono-tech text-xs tracking-[0.1em] uppercase text-[#B58A2A]">
            [OPERATIONAL INQUIRY]
          </div>
          <h2 className="text-2xl font-bold text-[#181816] font-display">
            Have a similar workflow? Show it to me.
          </h2>
          <p className="text-sm sm:text-base text-[#77736A] font-body leading-relaxed">
            Describe the input files, current bottlenecks, and what output your team needs.
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
