import React from 'react';
import { Link, useRouter } from '../router/Router';
import { SeoHead } from '../components/SeoHead';
import { Breadcrumbs } from '../components/Breadcrumbs';
import { PROJECTS } from '../data/projectsData';
import { ArrowRight, ArrowUpRight, Terminal, CheckCircle2 } from 'lucide-react';

export const ProjectDetailPage: React.FC<{ slug: string }> = ({ slug }) => {
  const project = PROJECTS.find((p) => p.slug === slug);

  if (!project) {
    return (
      <div className="max-w-4xl mx-auto px-4 py-20 text-center space-y-4">
        <h1 className="text-3xl font-bold text-[#141416]">Case Study Not Found</h1>
        <p className="text-[#575653]">The requested project does not exist.</p>
        <Link to="/work" className="inline-block px-4 py-2 bg-[#141416] text-[#faf8f5] text-xs font-mono-tech uppercase">
          Back to Work Index
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

      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-20 space-y-16">
        <Breadcrumbs
          items={[
            { label: 'WORK', path: '/work' },
            { label: project.title.toUpperCase(), path: `/work/${project.slug}` },
          ]}
        />

        {/* ─── HEADER / TYPE / ONE-LINER ───────────────────────── */}
        <section className="space-y-6">
          <div className="flex flex-wrap items-center gap-3">
            <span className="font-mono-tech text-xs px-2.5 py-1 bg-[#141416] text-[#faf8f5] font-semibold">
              {project.label}
            </span>
            <span className="font-mono-tech text-xs text-[#96742c] font-semibold">
              {project.tag}
            </span>
            <span className="font-mono-tech text-xs text-[#7a7770]">
              CATEGORY: {project.category.toUpperCase()}
            </span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-bold tracking-tight text-[#141416] leading-[1.15]">
            {project.title}
          </h1>

          <p className="text-lg sm:text-xl text-[#4a4946] font-medium leading-relaxed">
            {project.oneLiner}
          </p>
        </section>

        {/* ─── SITUATION & CONSTRAINT ──────────────────────────── */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-8 border-y border-[#ded9cf] py-10">
          <div className="space-y-3">
            <h2 className="font-mono-tech text-xs uppercase tracking-wider text-[#96742c] font-semibold">
              Situation
            </h2>
            <div className="text-base font-bold text-[#141416]">
              What was happening?
            </div>
            <p className="text-sm text-[#575653] leading-relaxed">
              {project.situation}
            </p>
          </div>

          <div className="space-y-3">
            <h2 className="font-mono-tech text-xs uppercase tracking-wider text-[#96742c] font-semibold">
              Constraint
            </h2>
            <div className="text-base font-bold text-[#141416]">
              What made it difficult?
            </div>
            <p className="text-sm text-[#575653] leading-relaxed">
              {project.constraint}
            </p>
          </div>
        </section>

        {/* ─── BUILD ───────────────────────────────────────────── */}
        <section className="space-y-4">
          <h2 className="font-mono-tech text-xs uppercase tracking-wider text-[#96742c] font-semibold">
            Build
          </h2>
          <div className="text-2xl font-bold text-[#141416]">
            What was actually built?
          </div>
          <p className="text-base text-[#4a4946] leading-relaxed">
            {project.build}
          </p>
        </section>

        {/* ─── WORKFLOW ARCHITECTURE ───────────────────────────── */}
        <section className="border border-[#ded9cf] bg-[#ffffff] p-6 sm:p-8 space-y-6">
          <div className="flex items-center justify-between">
            <h2 className="font-mono-tech text-xs uppercase tracking-wider text-[#96742c] font-semibold">
              Workflow
            </h2>
            <span className="font-mono-tech text-xs text-[#7a7770]">
              Input → Processing → Output
            </span>
          </div>

          <div className="space-y-4 text-sm">
            {/* Input */}
            <div className="p-4 border border-[#ded9cf] bg-[#faf8f5]">
              <div className="font-mono-tech text-xs text-[#7a7770] uppercase mb-1">
                Raw Input
              </div>
              <div className="font-medium text-[#141416]">
                {project.workflow.input}
              </div>
            </div>

            {/* Processing Steps */}
            <div className="border-l-2 border-[#96742c] pl-4 py-1 space-y-2">
              <div className="font-mono-tech text-xs text-[#96742c] uppercase font-semibold">
                Execution Pipeline
              </div>
              {project.workflow.processing.map((step, idx) => (
                <div key={idx} className="flex items-start gap-2 text-xs sm:text-sm text-[#4a4946]">
                  <span className="font-mono-tech text-xs text-[#96742c] font-medium">
                    {idx + 1}.
                  </span>
                  <span>{step}</span>
                </div>
              ))}
            </div>

            {/* Output */}
            <div className="p-4 border border-[#141416] bg-[#f4f1eb]">
              <div className="font-mono-tech text-xs text-[#141416] uppercase mb-1 font-semibold">
                Verified Output
              </div>
              <div className="font-medium text-[#141416]">
                {project.workflow.output}
              </div>
            </div>
          </div>
        </section>

        {/* ─── RESULT ──────────────────────────────────────────── */}
        <section className="border border-[#141416] bg-[#f3efe6] p-6 sm:p-8 space-y-3">
          <h2 className="font-mono-tech text-xs uppercase tracking-wider text-[#96742c] font-semibold">
            Result
          </h2>
          <div className="text-xl font-bold text-[#141416]">
            Only verified outcomes.
          </div>
          <p className="text-base sm:text-lg text-[#141416] leading-relaxed font-medium">
            {project.result}
          </p>
        </section>

        {/* ─── TECHNICAL NOTES ─────────────────────────────────── */}
        <section className="space-y-4">
          <h2 className="font-mono-tech text-xs uppercase tracking-wider text-[#96742c] font-semibold">
            Technical notes
          </h2>
          <div className="text-xl font-bold text-[#141416]">
            Architecture and tools for technical readers
          </div>
          
          <div className="flex flex-wrap gap-2 pt-1 pb-3">
            {project.technicalNotes.stack.map((tool) => (
              <span key={tool} className="px-2.5 py-1 border border-[#ded9cf] bg-[#ffffff] font-mono-tech text-xs text-[#141416]">
                {tool}
              </span>
            ))}
          </div>

          <p className="text-sm text-[#575653] leading-relaxed">
            {project.technicalNotes.architecture}
          </p>

          {project.technicalNotes.codeSnippet && (
            <div className="mt-4 border border-[#ded9cf] bg-[#141416] text-[#faf8f5] p-5 font-mono-tech text-xs overflow-x-auto">
              <div className="text-[#8c8880] pb-2 border-b border-[#2b2b30] mb-3 flex items-center justify-between">
                <span>[IMPLEMENTATION EXTRACT]</span>
                <span>Python 3.11</span>
              </div>
              <pre className="leading-relaxed">
                <code>{project.technicalNotes.codeSnippet}</code>
              </pre>
            </div>
          )}
        </section>

        {/* ─── WHAT THIS PROVES ────────────────────────────────── */}
        <section className="border border-[#ded9cf] bg-[#ffffff] p-6 sm:p-8 space-y-4">
          <h2 className="font-mono-tech text-xs uppercase tracking-wider text-[#7a7770]">
            What this proves
          </h2>
          <ul className="space-y-2 text-sm text-[#141416] font-medium">
            {project.whatThisProves.map((proof, idx) => (
              <li key={idx} className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-[#96742c] mt-0.5 flex-shrink-0" />
                <span>{proof}</span>
              </li>
            ))}
          </ul>
        </section>

        {/* ─── RELATED WORK ────────────────────────────────────── */}
        {relatedProjects.length > 0 && (
          <section className="border-t border-[#ded9cf] pt-8 space-y-4">
            <h2 className="font-mono-tech text-xs uppercase tracking-wider text-[#7a7770]">
              Related work
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {relatedProjects.map((rel) => (
                <Link
                  key={rel.slug}
                  to={`/work/${rel.slug}`}
                  className="p-4 border border-[#ded9cf] bg-[#faf8f5] hover:border-[#141416] transition-colors group"
                >
                  <div className="font-mono-tech text-[10px] text-[#96742c] mb-1">
                    {rel.label}
                  </div>
                  <div className="text-sm font-semibold text-[#141416] group-hover:text-[#96742c] transition-colors mb-1">
                    {rel.title}
                  </div>
                  <div className="text-xs text-[#575653]">
                    {rel.oneLiner}
                  </div>
                </Link>
              ))}
            </div>
          </section>
        )}

        {/* ─── CTA ─────────────────────────────────────────────── */}
        <section className="border border-[#141416] bg-[#f3efe6] p-8 space-y-5">
          <div className="font-mono-tech text-xs tracking-wider uppercase text-[#96742c]">
            [SIMILAR WORKFLOW]
          </div>
          <h2 className="text-2xl font-bold text-[#141416]">
            Have a similar workflow? Show it to me.
          </h2>
          <p className="text-sm sm:text-base text-[#575653] leading-relaxed">
            Describe the input files, current bottlenecks, and what output your team needs.
          </p>
          <div className="pt-2">
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-6 py-3.5 text-xs font-mono-tech uppercase tracking-wider bg-[#141416] text-[#faf8f5] border border-[#141416] hover:bg-[#2b2b30] transition-colors"
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
