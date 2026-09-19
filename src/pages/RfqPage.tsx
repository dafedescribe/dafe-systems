import React from 'react';
import { Link } from '../router/Router';
import { SeoHead } from '../components/SeoHead';
import { Breadcrumbs } from '../components/Breadcrumbs';
import { ProcessDiagram } from '../components/ProcessDiagram';
import { ArrowRight, FileText, CheckCircle2 } from 'lucide-react';

export const RfqPage: React.FC = () => {
  const jsonLd = [
    {
      '@context': 'https://schema.org',
      '@type': 'Service',
      name: 'RFQ Automation for Manufacturers & Industrial Suppliers',
      provider: {
        '@type': 'Organization',
        name: 'DafeDeScribe',
        url: 'https://dafe.name.ng/'
      },
      description: 'Automated RFQ extraction and preparation systems turning incoming emails, PDF drawings, and spreadsheets into structured quotation requests.'
    },
    {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://dafe.name.ng/' },
        { '@type': 'ListItem', position: 2, name: 'Industry', item: 'https://dafe.name.ng/industry' },
        { '@type': 'ListItem', position: 3, name: 'RFQ Automation', item: 'https://dafe.name.ng/industry/rfq-automation' }
      ]
    }
  ];

  return (
    <div className="min-h-screen">
      <SeoHead
        title="RFQ Automation for Manufacturers & Industrial Suppliers | DafeDeScribe"
        description="Organise incoming RFQs from email, PDF, and spreadsheets before quoting begins. Free technical estimators from administrative re-keying."
        canonicalPath="/industry/rfq-automation"
        jsonLd={jsonLd}
      />

      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-20 space-y-16">
        <Breadcrumbs
          items={[
            { label: 'INDUSTRY', path: '/industry' },
            { label: 'RFQ AUTOMATION', path: '/industry/rfq-automation' },
          ]}
        />

        {/* ─── HERO ────────────────────────────────────────────── */}
        <section className="space-y-6">
          <div className="font-mono-tech text-xs tracking-widest uppercase text-[#96742c]">
            [INDUSTRY / RFQ INTAKE]
          </div>

          <h1 className="text-3xl sm:text-5xl font-bold tracking-tight text-[#141416] leading-[1.15]">
            Organise the RFQ before your team starts quoting.
          </h1>

          <div className="space-y-4 text-base sm:text-lg text-[#4a4946] leading-relaxed">
            <p>
              Industrial RFQs rarely arrive as clean structured data.
            </p>
            <p>
              They arrive as email text, PDFs, spreadsheets, drawings and attachments.
            </p>
            <p>
              Before a salesperson or engineer can make a useful decision, somebody often has to organise that information first.
            </p>
            <p className="font-medium text-[#141416]">
              That administrative layer is where automation can help.
            </p>
          </div>
        </section>

        {/* ─── VISUAL PROCESS BREAKDOWN ────────────────────────── */}
        <section className="space-y-4">
          <ProcessDiagram type="rfq" />
        </section>

        {/* ─── CORE VALUE PRINCIPLE ────────────────────────────── */}
        <section className="border border-[#ded9cf] bg-[#ffffff] p-6 sm:p-8 space-y-4">
          <div className="font-mono-tech text-xs tracking-wider uppercase text-[#7a7770]">
            [CORE PRINCIPLE]
          </div>

          <h2 className="text-2xl sm:text-3xl font-bold text-[#141416]">
            Automate preparation, not judgement.
          </h2>

          <div className="space-y-3 text-sm sm:text-base text-[#575653] leading-relaxed">
            <p>
              The objective is not to let software make commercial or engineering commitments unsupervised.
            </p>
            <p>
              It is to stop skilled people spending unnecessary time finding files, copying line items, re-entering customer information and rebuilding the same RFQ structure.
            </p>
          </div>

          <div className="pt-4 border-t border-[#ded9cf] grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs font-mono-tech text-[#141416]">
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-[#96742c]" />
              <span>Multi-page table extraction from PDFs</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-[#96742c]" />
              <span>Customer part numbers mapped to ERP SKUs</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-[#96742c]" />
              <span>Incomplete specs flagged before engineering review</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-[#96742c]" />
              <span>Zero unattended price commitments</span>
            </div>
          </div>
        </section>

        {/* ─── RELEVANT TECHNICAL NOTES ────────────────────────── */}
        <section className="border-t border-[#ded9cf] pt-8 space-y-4">
          <div className="font-mono-tech text-xs uppercase tracking-wider text-[#7a7770]">
            [RELATED NOTES & ARCHITECTURE]
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <Link
              to="/notes/rfq-automation-for-manufacturers"
              className="p-4 border border-[#ded9cf] bg-[#faf8f5] hover:border-[#141416] transition-colors group"
            >
              <div className="font-mono-tech text-[10px] text-[#96742c] uppercase mb-1">
                ARTICLE
              </div>
              <div className="text-sm font-semibold text-[#141416] group-hover:text-[#96742c] transition-colors mb-2">
                RFQ Automation for Manufacturers: What Should Actually Be Automated?
              </div>
              <div className="text-xs text-[#575653]">
                Why unsupervised pricing engines fail in real industrial sales.
              </div>
            </Link>

            <Link
              to="/notes/how-to-process-rfqs-email-pdf-excel"
              className="p-4 border border-[#ded9cf] bg-[#faf8f5] hover:border-[#141416] transition-colors group"
            >
              <div className="font-mono-tech text-[10px] text-[#96742c] uppercase mb-1">
                TECHNICAL GUIDE
              </div>
              <div className="text-sm font-semibold text-[#141416] group-hover:text-[#96742c] transition-colors mb-2">
                How to Process RFQs From Email, PDF and Excel
              </div>
              <div className="text-xs text-[#575653]">
                Pipeline architecture for parsing non-standard attachments.
              </div>
            </Link>
          </div>
        </section>

        {/* ─── CTA ─────────────────────────────────────────────── */}
        <section className="border border-[#141416] bg-[#f3efe6] p-8 space-y-5">
          <div className="font-mono-tech text-xs tracking-wider uppercase text-[#96742c]">
            [DISCUSS YOUR PROCESS]
          </div>
          <h2 className="text-2xl font-bold text-[#141416]">
            Discuss Your RFQ Process
          </h2>
          <p className="text-sm sm:text-base text-[#575653] leading-relaxed">
            Send an example of a typical incoming RFQ and how your team currently prepares the quotation. We will map the extraction bottlenecks.
          </p>
          <div className="pt-2">
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-6 py-3.5 text-xs font-mono-tech uppercase tracking-wider bg-[#141416] text-[#faf8f5] border border-[#141416] hover:bg-[#2b2b30] transition-colors"
            >
              <span>Discuss Your RFQ Process</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </section>

      </main>
    </div>
  );
};
