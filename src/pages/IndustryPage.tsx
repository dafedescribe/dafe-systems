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
      url: 'https://dafe.name.ng/'
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

      <main className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-20 space-y-16 sm:space-y-24">
        
        {/* Breadcrumb Navigation */}
        <Breadcrumbs items={[{ label: 'INDUSTRY', path: '/industry' }]} />

        {/* ─── HERO ────────────────────────────────────────────── */}
        <section className="space-y-6 max-w-4xl">
          <div className="font-mono-tech text-xs tracking-widest uppercase text-[#96742c]">
            [INDUSTRY COMMERCIAL SYSTEMS]
          </div>

          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-[#141416] leading-[1.15]">
            Less administration between the opportunity and the order.
          </h1>

          <div className="space-y-3 text-base sm:text-lg text-[#4a4946] leading-relaxed max-w-3xl">
            <p>Industrial sales rarely happens inside one clean system.</p>
            <p>An opportunity appears somewhere.</p>
            <p>An enquiry arrives somewhere else.</p>
            <p>Specifications come as attachments.</p>
            <p>Pricing lives in another file.</p>
            <p>A quotation has to be prepared.</p>
            <p>Someone follows up.</p>
            <p>Someone else eventually builds the report.</p>
            <p className="font-medium text-[#141416] pt-2">
              I build targeted systems around the repetitive work in that chain.
            </p>
          </div>

          <div className="pt-4">
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-6 py-3.5 text-xs font-mono-tech uppercase tracking-wider bg-[#141416] text-[#faf8f5] border border-[#141416] hover:bg-[#2b2b30] transition-colors"
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
          <div className="space-y-2">
            <div className="font-mono-tech text-xs tracking-wider uppercase text-[#96742c]">
              [SPECIALISED SYSTEMS]
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-[#141416]">
              Four areas where commercial friction accumulates.
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            
            {/* 1. RFQ Intake */}
            <div className="border border-[#ded9cf] bg-[#ffffff] p-6 sm:p-8 flex flex-col justify-between hover:border-[#141416] transition-colors">
              <div className="space-y-3">
                <div className="font-mono-tech text-xs text-[#96742c] uppercase tracking-wider">
                  [AREA 01]
                </div>
                <h3 className="text-xl font-bold text-[#141416]">
                  RFQ Intake
                </h3>
                <p className="text-sm text-[#575653] leading-relaxed">
                  Turn incoming emails, PDFs and spreadsheets into an organised request before your technical or commercial team begins its real work.
                </p>
              </div>
              <div className="pt-6">
                <Link
                  to="/industry/rfq-automation"
                  className="inline-flex items-center gap-2 text-xs font-mono-tech uppercase tracking-wider text-[#141416] font-semibold hover:text-[#96742c] transition-colors"
                >
                  <span>RFQ automation</span>
                  <span>→</span>
                </Link>
              </div>
            </div>

            {/* 2. Tender Monitoring */}
            <div className="border border-[#ded9cf] bg-[#ffffff] p-6 sm:p-8 flex flex-col justify-between hover:border-[#141416] transition-colors">
              <div className="space-y-3">
                <div className="font-mono-tech text-xs text-[#96742c] uppercase tracking-wider">
                  [AREA 02]
                </div>
                <h3 className="text-xl font-bold text-[#141416]">
                  Tender Monitoring
                </h3>
                <p className="text-sm text-[#575653] leading-relaxed">
                  Monitor defined opportunity sources and bring new notices into one review process instead of repeatedly checking portals manually.
                </p>
              </div>
              <div className="pt-6">
                <Link
                  to="/industry/tender-monitoring"
                  className="inline-flex items-center gap-2 text-xs font-mono-tech uppercase tracking-wider text-[#141416] font-semibold hover:text-[#96742c] transition-colors"
                >
                  <span>Tender monitoring</span>
                  <span>→</span>
                </Link>
              </div>
            </div>

            {/* 3. Quotation Workflow */}
            <div className="border border-[#ded9cf] bg-[#ffffff] p-6 sm:p-8 flex flex-col justify-between hover:border-[#141416] transition-colors">
              <div className="space-y-3">
                <div className="font-mono-tech text-xs text-[#96742c] uppercase tracking-wider">
                  [AREA 03]
                </div>
                <h3 className="text-xl font-bold text-[#141416]">
                  Quotation Workflow
                </h3>
                <p className="text-sm text-[#575653] leading-relaxed">
                  Reduce repeated searching, copying, document preparation, status updating and follow-up around quotations.
                </p>
              </div>
              <div className="pt-6">
                <Link
                  to="/industry/quotation-workflows"
                  className="inline-flex items-center gap-2 text-xs font-mono-tech uppercase tracking-wider text-[#141416] font-semibold hover:text-[#96742c] transition-colors"
                >
                  <span>Quotation workflows</span>
                  <span>→</span>
                </Link>
              </div>
            </div>

            {/* 4. Commercial Reporting */}
            <div className="border border-[#ded9cf] bg-[#ffffff] p-6 sm:p-8 flex flex-col justify-between hover:border-[#141416] transition-colors">
              <div className="space-y-3">
                <div className="font-mono-tech text-xs text-[#96742c] uppercase tracking-wider">
                  [AREA 04]
                </div>
                <h3 className="text-xl font-bold text-[#141416]">
                  Commercial Reporting
                </h3>
                <p className="text-sm text-[#575653] leading-relaxed">
                  Automate recurring data preparation, spreadsheet processing and reports assembled from the same sources repeatedly.
                </p>
              </div>
              <div className="pt-6">
                <Link
                  to="/industry/commercial-reporting"
                  className="inline-flex items-center gap-2 text-xs font-mono-tech uppercase tracking-wider text-[#141416] font-semibold hover:text-[#96742c] transition-colors"
                >
                  <span>Commercial reporting</span>
                  <span>→</span>
                </Link>
              </div>
            </div>

          </div>
        </section>

        {/* ─── INDUSTRY FIT SECTION ────────────────────────────── */}
        <section className="border border-[#ded9cf] bg-[#ffffff] p-6 sm:p-10 space-y-8">
          <div className="space-y-2">
            <div className="font-mono-tech text-xs tracking-wider uppercase text-[#7a7770]">
              [SECTOR FIT]
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-[#141416]">
              Where this tends to fit.
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 text-sm font-medium text-[#141416]">
            {sectors.map((sector) => (
              <div
                key={sector}
                className="p-3.5 border border-[#ded9cf] bg-[#faf8f5] flex items-center gap-2.5"
              >
                <span className="w-1.5 h-1.5 bg-[#96742c]" />
                <span>{sector}</span>
              </div>
            ))}
          </div>

          <div className="border-t border-[#ded9cf] pt-6 space-y-3 text-sm sm:text-base text-[#575653] max-w-3xl leading-relaxed">
            <p>
              The exact sector matters less than the commercial process.
            </p>
            <p>
              If enquiries are high-value, specifications matter and staff repeatedly move information between people, documents and systems, there may be useful work to automate.
            </p>
          </div>
        </section>

        {/* ─── INDUSTRY CTA ────────────────────────────────────── */}
        <section className="border border-[#141416] bg-[#f3efe6] p-8 sm:p-12 space-y-6">
          <div className="font-mono-tech text-xs tracking-wider uppercase text-[#96742c]">
            [COMMERCIAL ENGAGEMENT]
          </div>

          <h2 className="text-2xl sm:text-4xl font-bold tracking-tight text-[#141416]">
            Start with one workflow.
          </h2>

          <p className="text-base sm:text-lg text-[#575653] max-w-2xl leading-relaxed">
            Send me one repeated process from your commercial operations. We will map what comes in, where it bottlenecks, and how to structure it reliably.
          </p>

          <div className="pt-2">
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-6 py-3.5 text-xs font-mono-tech uppercase tracking-wider bg-[#141416] text-[#faf8f5] border border-[#141416] hover:bg-[#2b2b30] transition-colors"
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
