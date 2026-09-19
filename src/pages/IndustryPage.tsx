import React from 'react';
import { Link } from '../router/Router';
import { SeoHead } from '../components/SeoHead';
import { Breadcrumbs } from '../components/Breadcrumbs';
import { ProcessDiagram } from '../components/ProcessDiagram';
import { ArrowRight, ArrowUpRight } from 'lucide-react';

export const IndustryPage: React.FC = () => {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: 'Industrial Sales Workflow Automation',
    provider: {
      '@type': 'Organization',
      name: 'DafeDeScribe',
      url: 'https://www.dafe.name.ng/'
    },
    serviceType: 'Commercial Workflow Systems',
    description: 'Workflow systems for manufacturers, industrial suppliers and contractors covering RFQs, tenders, quotations, opportunity monitoring, follow-up and commercial reporting.'
  };

  const sectors = [
    'Manufacturers',
    'Industrial distributors',
    'Engineering businesses',
    'Equipment suppliers',
    'Export-oriented businesses',
    'Specialist contractors',
    'Institutional suppliers',
    'Construction and infrastructure suppliers'
  ];

  return (
    <div className="min-h-screen">
      <SeoHead
        title="Industrial Sales Workflow Automation | DafeDeScribe"
        description="Workflow systems for manufacturers, industrial suppliers and contractors covering RFQs, tenders, quotations, opportunity monitoring, follow-up and commercial reporting."
        canonicalPath="/industry"
        jsonLd={jsonLd}
      />

      <main className="max-w-[1440px] mx-auto px-6 sm:px-12 lg:px-16 py-12 sm:py-20 space-y-16 sm:space-y-24">
        
        <Breadcrumbs items={[{ label: 'INDUSTRY', path: '/industry' }]} />

        {/* ─── HERO ────────────────────────────────────────────── */}
        <section className="space-y-6 max-w-4xl">
          <div className="font-mono-tech text-xs tracking-[0.1em] uppercase text-amber-700 font-semibold">
            Commercial Workflow Systems
          </div>

          <h1 className="text-4xl sm:text-6xl font-bold tracking-tight text-slate-900 font-display leading-[1.12]">
            Less administration between the opportunity and the order.
          </h1>

          <div className="space-y-4 text-base sm:text-lg text-slate-700 font-body leading-relaxed max-w-3xl">
            <p>
              Industrial sales rarely moves through a single, unified platform. Opportunities emerge across procurement portals and customer inboxes, specifications arrive embedded in engineering drawings or dense PDFs, and pricing models remain scattered across legacy spreadsheets.
            </p>
            <p>
              By the time proposals are compiled, tracked, and reported, experienced estimators and sales managers have spent hours on repetitive administrative coordination instead of evaluating risk and winning contracts.
            </p>
            <p className="font-semibold text-slate-900 pt-1">
              I build targeted automation pipelines around these critical handoffs—connecting your inputs, records, and people with deterministic precision.
            </p>
          </div>

          <div className="pt-4">
            <Link
              to="/contact"
              className="btn-primary px-6 py-3.5"
            >
              <span>Show Me Your Commercial Workflow</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </section>

        {/* ─── PROCESS VISUAL ──────────────────────────────────── */}
        <section className="space-y-4">
          <ProcessDiagram type="commercial" />
        </section>

        {/* ─── FOUR CORE AREAS ─────────────────────────────────── */}
        <section className="space-y-8">
          <div className="flex items-center justify-between border-b border-slate-200 pb-3">
            <div className="font-mono-tech text-xs tracking-[0.1em] uppercase text-amber-700 font-semibold">
              Specialised Commercial Workflows
            </div>
            <div className="font-mono-tech text-xs text-slate-500">
              AREAS 01–04
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            
            {/* 1. RFQ Intake */}
            <div className="catalogue-sheet p-6 sm:p-8 flex flex-col justify-between hover:border-slate-400 transition-colors">
              <div className="space-y-3">
                <div className="font-mono-tech text-xs text-amber-700 uppercase font-semibold">
                  AREA 01 / SPECIFICATION INTAKE
                </div>
                <h2 className="text-2xl font-bold text-slate-900 font-display">
                  RFQ Intake & Extraction
                </h2>
                <p className="text-sm text-slate-600 leading-relaxed font-body">
                  Turn incoming emails, drawings, and messy PDFs into structured quote requests before your estimators and technical teams begin their bill of materials.
                </p>
              </div>
              <div className="pt-6">
                <Link
                  to="/industry/rfq-automation"
                  className="inline-flex items-center gap-2 text-xs font-mono-tech uppercase tracking-[0.08em] text-slate-900 font-semibold hover:text-amber-700 transition-colors"
                >
                  <span>RFQ automation</span>
                  <span>→</span>
                </Link>
              </div>
            </div>

            {/* 2. Tender Monitoring */}
            <div className="catalogue-sheet p-6 sm:p-8 flex flex-col justify-between hover:border-slate-400 transition-colors">
              <div className="space-y-3">
                <div className="font-mono-tech text-xs text-amber-700 uppercase font-semibold">
                  AREA 02 / OPPORTUNITY MONITORING
                </div>
                <h2 className="text-2xl font-bold text-slate-900 font-display">
                  Tender Monitoring
                </h2>
                <p className="text-sm text-slate-600 leading-relaxed font-body">
                  Monitor defined procurement portals, extract key qualification criteria, and deliver qualified briefs directly to your review queue every morning.
                </p>
              </div>
              <div className="pt-6">
                <Link
                  to="/industry/tender-monitoring"
                  className="inline-flex items-center gap-2 text-xs font-mono-tech uppercase tracking-[0.08em] text-slate-900 font-semibold hover:text-amber-700 transition-colors"
                >
                  <span>Tender monitoring</span>
                  <span>→</span>
                </Link>
              </div>
            </div>

            {/* 3. Quotation Workflow */}
            <div className="catalogue-sheet p-6 sm:p-8 flex flex-col justify-between hover:border-slate-400 transition-colors">
              <div className="space-y-3">
                <div className="font-mono-tech text-xs text-amber-700 uppercase font-semibold">
                  AREA 03 / COORDINATION & PIPELINE
                </div>
                <h2 className="text-2xl font-bold text-slate-900 font-display">
                  Quotation Workflow
                </h2>
                <p className="text-sm text-slate-600 leading-relaxed font-body">
                  Eliminate repeated searching, document generation, internal sign-off delays, and customer follow-up friction across active quotations.
                </p>
              </div>
              <div className="pt-6">
                <Link
                  to="/industry/quotation-workflows"
                  className="inline-flex items-center gap-2 text-xs font-mono-tech uppercase tracking-[0.08em] text-slate-900 font-semibold hover:text-amber-700 transition-colors"
                >
                  <span>Quotation workflows</span>
                  <span>→</span>
                </Link>
              </div>
            </div>

            {/* 4. Commercial Reporting */}
            <div className="catalogue-sheet p-6 sm:p-8 flex flex-col justify-between hover:border-slate-400 transition-colors">
              <div className="space-y-3">
                <div className="font-mono-tech text-xs text-amber-700 uppercase font-semibold">
                  AREA 04 / DATA & REPORTING
                </div>
                <h2 className="text-2xl font-bold text-slate-900 font-display">
                  Commercial Reporting
                </h2>
                <p className="text-sm text-slate-600 leading-relaxed font-body">
                  Automate data preparation, multi-sheet reconciliation, and executive metrics assembled from repetitive operational exports.
                </p>
              </div>
              <div className="pt-6">
                <Link
                  to="/industry/commercial-reporting"
                  className="inline-flex items-center gap-2 text-xs font-mono-tech uppercase tracking-[0.08em] text-slate-900 font-semibold hover:text-amber-700 transition-colors"
                >
                  <span>Commercial reporting</span>
                  <span>→</span>
                </Link>
              </div>
            </div>

          </div>
        </section>

        {/* ─── INDUSTRY FIT SECTION ────────────────────────────── */}
        <section className="catalogue-sheet p-6 sm:p-10 space-y-8">
          <div className="space-y-2">
            <div className="font-mono-tech text-xs tracking-[0.1em] uppercase text-amber-700 font-semibold">
              Target Sectors & Applicability
            </div>
            <h2 className="text-3xl font-bold tracking-tight text-slate-900 font-display">
              Where these systems deliver the highest return.
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3.5 text-sm font-medium text-slate-900">
            {sectors.map((sector) => (
              <div
                key={sector}
                className="p-4 border border-slate-200 bg-white rounded-lg shadow-sm flex items-center gap-3 font-body"
              >
                <span className="w-2 h-2 rounded-full bg-amber-600 flex-shrink-0" />
                <span>{sector}</span>
              </div>
            ))}
          </div>

          <div className="border-t border-slate-200 pt-6 space-y-3 text-sm sm:text-base text-slate-600 font-body max-w-3xl leading-relaxed">
            <p>
              The specific industry vertical matters less than the shape of your commercial workflow.
            </p>
            <p>
              If incoming inquiries are high-value, specifications require technical validation, and your staff repeatedly move data between emails, spreadsheets, and ERP records, there is high-leverage work to automate.
            </p>
          </div>
        </section>

        {/* ─── INDUSTRY CTA ────────────────────────────────────── */}
        <section className="catalogue-sheet p-8 sm:p-12 space-y-6 border-t-2 border-t-amber-600">
          <div className="font-mono-tech text-xs tracking-[0.1em] uppercase text-amber-700 font-semibold">
            Commercial Evaluation
          </div>

          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900 font-display">
            Start with one workflow.
          </h2>

          <p className="text-base sm:text-lg text-slate-600 font-body max-w-2xl leading-relaxed">
            Walk me through one repeated process in your commercial operations. We will analyze where information bottlenecks, identify deterministic steps, and outline a reliable pipeline.
          </p>

          <div className="pt-2">
            <Link
              to="/contact"
              className="btn-primary px-6 py-3.5"
            >
              <span>Show Me the Process</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </section>

      </main>
    </div>
  );
};
