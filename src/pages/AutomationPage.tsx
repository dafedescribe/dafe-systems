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
      url: 'https://www.dafe.name.ng/'
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

  const automationDiagramSteps = [
    { label: 'CUSTOMER', type: 'human', desc: 'Inbound enquiry via WhatsApp or web' },
    { label: 'WHATSAPP', type: 'system', desc: 'Incoming webhook & session trigger' },
    { label: 'INTAKE', type: 'system', desc: 'Automated qualification & question sequence' },
    { label: 'DATA / DOCUMENTS', type: 'system', desc: 'File parsing & attachment validation' },
    { label: 'RULES + AUTOMATION', type: 'system', desc: 'Routing logic, schema check & dispatch' },
    { label: 'TEAM', type: 'human', desc: 'Operations engineer takes pre-prepared job' },
  ];

  return (
    <div className="min-h-screen">
      <SeoHead
        title="Workflow Automation for Operational Businesses | DafeDeScribe"
        description="Custom workflow automation for businesses handling repetitive enquiries, documents, quotations, follow-up, reporting and cross-system data work."
        canonicalPath="/automation"
        jsonLd={jsonLd}
      />

      <main className="max-w-[1440px] mx-auto px-6 sm:px-12 lg:px-16 py-12 sm:py-20 space-y-16 sm:space-y-24">
        
        <Breadcrumbs items={[{ label: 'AUTOMATION', path: '/automation' }]} />

        {/* ─── HERO ────────────────────────────────────────────── */}
        <section className="space-y-6 max-w-4xl">
          <div className="font-mono-tech text-xs tracking-[0.1em] uppercase text-[#B58A2A] font-semibold">
            02 / OPERATIONAL AUTOMATION
          </div>

          <h1 className="text-4xl sm:text-6xl font-bold tracking-tight text-[#181816] font-display leading-[1.12]">
            When every new enquiry starts another mini administrative project.
          </h1>

          <div className="space-y-3 text-base sm:text-lg text-[#33312C] font-body leading-relaxed max-w-3xl">
            <p>
              Some businesses do not sell standard products with a Buy Now button.
            </p>
            <p>
              Every job needs questions answered, information collected, a scope prepared, a quotation sent and somebody to follow up.
            </p>
            <p className="font-semibold text-[#181816] pt-1">
              I build workflows around that kind of work.
            </p>
          </div>

          <div className="pt-4">
            <Link
              to="/contact"
              className="btn-primary px-6 py-3.5"
            >
              <span>Show Me the Process</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </section>

        {/* ─── ENGINEERING MANUAL SCHEMATIC DIAGRAM ────────────── */}
        <section className="catalogue-sheet p-6 sm:p-8 space-y-6">
          <div className="flex flex-wrap items-center justify-between gap-2 border-b border-[#D9D4C8] pb-3">
            <span className="font-mono-tech text-xs tracking-[0.1em] uppercase text-[#B58A2A] font-semibold">
              [SCHEMATIC / AUTO-FLOW-01: COMPONENT TRACE]
            </span>
            <div className="flex items-center gap-4 font-mono-tech text-[11px]">
              <span className="flex items-center gap-1.5">
                <span className="w-2.5 h-2.5 bg-[#B58A2A]" />
                <span className="text-[#33312C]">Gold: Automated Step</span>
              </span>
              <span className="flex items-center gap-1.5">
                <span className="w-2.5 h-2.5 bg-[#181816]" />
                <span className="text-[#33312C]">Graphite: Human Step</span>
              </span>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-3 font-mono-tech">
            {automationDiagramSteps.map((step, idx) => {
              const isAuto = step.type === 'system';
              return (
                <div
                  key={idx}
                  className={`p-4 border ${
                    isAuto
                      ? 'border-[#B58A2A] bg-[#F6F0DC]'
                      : 'border-[#181816] bg-[#FFFFFF]'
                  }`}
                >
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-[10px] text-[#77736A]">
                      0{idx + 1}.
                    </span>
                    <span
                      className={`text-[9px] px-1 py-0.2 font-semibold uppercase ${
                        isAuto
                          ? 'bg-[#B58A2A] text-[#FFFFFF]'
                          : 'bg-[#181816] text-[#FCFBF7]'
                      }`}
                    >
                      {isAuto ? 'AUTO' : 'HUMAN'}
                    </span>
                  </div>
                  <div className="font-bold text-xs sm:text-sm text-[#181816] mb-1">
                    {step.label}
                  </div>
                  <div className="text-[11px] text-[#77736A] font-body leading-tight">
                    {step.desc}
                  </div>
                </div>
              );
            })}
          </div>

          <div className="pt-3 border-t border-[#D9D4C8] text-xs font-mono-tech text-[#77736A]">
            Labelled component trace from engineering workflow manual.
          </div>
        </section>

        {/* ─── PROBLEMS SECTION: 7 STATEMENTS ──────────────────── */}
        <section className="catalogue-sheet p-6 sm:p-10 space-y-8">
          <div className="space-y-2">
            <div className="font-mono-tech text-xs tracking-[0.1em] uppercase text-[#B58A2A] font-semibold">
              [DIAGNOSTIC CRITERIA]
            </div>
            <h2 className="text-3xl font-bold tracking-tight text-[#181816] font-display">
              Good automation often starts with a sentence like this.
            </h2>
          </div>

          <div className="space-y-3 max-w-3xl">
            {problemStatements.map((stmt, idx) => (
              <div
                key={idx}
                className="p-4 border-l-3 border-[#B58A2A] bg-[#FCFBF7] text-base sm:text-lg font-medium text-[#181816] font-body"
              >
                {stmt}
              </div>
            ))}
          </div>
        </section>

        {/* ─── WHAT SITS UNDERNEATH ────────────────────────────── */}
        <section className="space-y-6">
          <div className="font-mono-tech text-xs tracking-[0.1em] uppercase text-[#B58A2A] font-semibold">
            [IMPLEMENTATION PRAGMATISM]
          </div>

          <h2 className="text-3xl font-bold text-[#181816] font-display">
            The implementation depends on the process.
          </h2>

          <div className="space-y-3 text-base text-[#77736A] font-body leading-relaxed max-w-3xl">
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
                className="px-3 py-1.5 border border-[#D9D4C8] bg-[#FFFFFF] font-mono-tech text-xs text-[#181816]"
              >
                {tech}
              </span>
            ))}
          </div>
        </section>

        {/* ─── COMMON WORKFLOWS ────────────────────────────────── */}
        <section className="catalogue-sheet p-6 sm:p-10 space-y-8">
          <div className="space-y-2">
            <div className="font-mono-tech text-xs tracking-[0.1em] uppercase text-[#B58A2A] font-semibold">
              [PROCESS CATALOGUE]
            </div>
            <h2 className="text-3xl font-bold text-[#181816] font-display">
              Examples of work worth examining
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 text-sm text-[#181816] font-body">
            {candidateWorkflows.map((item, idx) => (
              <div
                key={idx}
                className="p-3.5 border border-[#D9D4C8] bg-[#FCFBF7] flex items-center gap-2.5"
              >
                <span className="font-mono-tech text-xs text-[#B58A2A] font-semibold">
                  {idx < 9 ? `0${idx + 1}` : idx + 1}.
                </span>
                <span>{item}</span>
              </div>
            ))}
          </div>
        </section>

        {/* ─── FINAL CTA ───────────────────────────────────────── */}
        <section className="catalogue-sheet p-8 sm:p-12 space-y-6 border border-[#D9D4C8] border-t-2 border-t-[#B58A2A]">
          <div className="font-mono-tech text-xs tracking-[0.1em] uppercase text-[#B58A2A]">
            IRREGULAR WORKFLOWS
          </div>

          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-[#181816] font-display">
            Have something stranger?
          </h2>

          <p className="text-xl text-[#181816] font-semibold font-body">
            Good.
          </p>

          <p className="text-sm sm:text-base text-[#77736A] font-body max-w-2xl leading-relaxed">
            The most valuable automations are often processes that standard software vendors dismiss as too bespoke or messy.
          </p>

          <div className="pt-2">
            <Link
              to="/contact"
              className="btn-primary px-6 py-3.5"
            >
              <span>Describe the workflow →</span>
            </Link>
          </div>
        </section>

      </main>
    </div>
  );
};
