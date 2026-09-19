import React from 'react';
import { Link } from '../router/Router';
import { SeoHead } from '../components/SeoHead';
import { Breadcrumbs } from '../components/Breadcrumbs';
import { ArrowRight, ArrowUpRight } from 'lucide-react';

export const AutomationPage: React.FC = () => {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: 'Workflow Automation for Operational Businesses',
    provider: {
      '@type': 'Organization',
      name: 'DafeDeScribe',
      url: 'https://dafe.name.ng/'
    },
    serviceType: 'Workflow Automation & Systems Integration',
    description: 'Custom workflow automation for businesses handling repetitive enquiries, documents, quotations, follow-up, reporting and cross-system data work.'
  };

  const problemStatements = [
    '“We ask every customer the same five questions.”',
    '“Someone has to copy this into Excel.”',
    '“We prepare every quote from an old Word document.”',
    '“The website doesn’t connect to our system.”',
    '“Someone checks this portal every morning.”',
    '“If nobody follows up, the enquiry disappears.”',
    '“We rebuild this report every Friday.”'
  ];

  const technologies = [
    'APIs',
    'n8n',
    'Python',
    'browser automation',
    'spreadsheets',
    'databases',
    'Google Workspace',
    'AI models',
    'custom scripts',
    'lightweight applications'
  ];

  const candidateWorkflows = [
    'Enquiry qualification',
    'WhatsApp-compatible intake workflows',
    'Document processing',
    'Quotation preparation',
    'Lead routing',
    'Follow-up',
    'File processing',
    'Spreadsheet automation',
    'Data cleaning',
    'Recurring reporting',
    'Cross-system updates',
    'Web research and monitoring',
    'Browser-based repetitive tasks'
  ];

  return (
    <div className="min-h-screen">
      <SeoHead
        title="Workflow Automation for Operational Businesses | DafeDeScribe"
        description="Custom workflow automation for businesses handling repetitive enquiries, documents, quotations, follow-up, reporting and cross-system data work."
        canonicalPath="/automation"
        jsonLd={jsonLd}
      />

      <main className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-20 space-y-16 sm:space-y-24">
        
        <Breadcrumbs items={[{ label: 'AUTOMATION', path: '/automation' }]} />

        {/* ─── HERO ────────────────────────────────────────────── */}
        <section className="space-y-6 max-w-4xl">
          <div className="font-mono-tech text-xs tracking-widest uppercase text-[#96742c]">
            [OPERATIONAL AUTOMATION]
          </div>

          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-[#141416] leading-[1.15]">
            When every new enquiry starts another mini administrative project.
          </h1>

          <div className="space-y-3 text-base sm:text-lg text-[#4a4946] leading-relaxed max-w-3xl">
            <p>
              Some businesses do not sell standard products with a Buy Now button.
            </p>
            <p>
              Every job needs questions answered, information collected, a scope prepared, a quotation sent and somebody to follow up.
            </p>
            <p className="font-medium text-[#141416] pt-1">
              I build workflows around that kind of work.
            </p>
          </div>

          <div className="pt-4">
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-6 py-3.5 text-xs font-mono-tech uppercase tracking-wider bg-[#141416] text-[#faf8f5] border border-[#141416] hover:bg-[#2b2b30] transition-colors"
            >
              <span>Show Me the Process</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </section>

        {/* ─── PROBLEMS SECTION: 7 STATEMENTS ──────────────────── */}
        <section className="border border-[#ded9cf] bg-[#ffffff] p-6 sm:p-10 space-y-8">
          <div className="space-y-2">
            <div className="font-mono-tech text-xs tracking-wider uppercase text-[#7a7770]">
              [DIAGNOSTIC SIGNS]
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-[#141416]">
              Good automation often starts with a sentence like this.
            </h2>
          </div>

          <div className="space-y-3 max-w-3xl">
            {problemStatements.map((stmt, idx) => (
              <div
                key={idx}
                className="p-4 border-l-2 border-[#96742c] bg-[#faf8f5] text-base sm:text-lg font-medium text-[#141416]"
              >
                {stmt}
              </div>
            ))}
          </div>
        </section>

        {/* ─── WHAT SITS UNDERNEATH ────────────────────────────── */}
        <section className="space-y-6">
          <div className="font-mono-tech text-xs tracking-wider uppercase text-[#96742c]">
            [IMPLEMENTATION PRAGMATISM]
          </div>

          <h2 className="text-2xl sm:text-3xl font-bold text-[#141416]">
            The implementation depends on the process.
          </h2>

          <div className="space-y-4 text-base text-[#575653] leading-relaxed max-w-3xl">
            <p>
              I do not sell a predetermined stack.
            </p>
            <p>
              The process determines the implementation.
            </p>
          </div>

          {/* Technology chips */}
          <div className="flex flex-wrap gap-2 pt-2">
            {technologies.map((tech) => (
              <span
                key={tech}
                className="px-3 py-1.5 border border-[#ded9cf] bg-[#ffffff] font-mono-tech text-xs text-[#141416]"
              >
                {tech}
              </span>
            ))}
          </div>
        </section>

        {/* ─── COMMON WORKFLOWS ────────────────────────────────── */}
        <section className="border border-[#ded9cf] bg-[#ffffff] p-6 sm:p-10 space-y-8">
          <div className="space-y-2">
            <div className="font-mono-tech text-xs tracking-wider uppercase text-[#7a7770]">
              [OPPORTUNITY CATALOGUE]
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold text-[#141416]">
              Examples of work worth examining
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 text-sm text-[#141416]">
            {candidateWorkflows.map((item, idx) => (
              <div
                key={idx}
                className="p-3.5 border border-[#ded9cf] bg-[#faf8f5] flex items-center gap-2.5"
              >
                <span className="font-mono-tech text-xs text-[#96742c] font-semibold">
                  {idx < 9 ? `0${idx + 1}` : idx + 1}.
                </span>
                <span>{item}</span>
              </div>
            ))}
          </div>
        </section>

        {/* ─── FINAL CTA ───────────────────────────────────────── */}
        <section className="border border-[#141416] bg-[#f3efe6] p-8 sm:p-12 space-y-6">
          <div className="font-mono-tech text-xs tracking-wider uppercase text-[#96742c]">
            [EDGE CASES & IRREGULAR FLOWS]
          </div>

          <h2 className="text-2xl sm:text-4xl font-bold tracking-tight text-[#141416]">
            Have something stranger?
          </h2>

          <p className="text-xl text-[#141416] font-medium">
            Good.
          </p>

          <p className="text-sm sm:text-base text-[#575653] max-w-2xl leading-relaxed">
            The most valuable automations are often processes that standard software vendors dismiss as too bespoke or messy.
          </p>

          <div className="pt-2">
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-6 py-3.5 text-xs font-mono-tech uppercase tracking-wider bg-[#141416] text-[#faf8f5] border border-[#141416] hover:bg-[#2b2b30] transition-colors"
            >
              <span>Describe the workflow</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </section>

      </main>
    </div>
  );
};
