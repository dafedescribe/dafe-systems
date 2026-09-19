import React from 'react';
import { Link } from '../router/Router';
import { SeoHead } from '../components/SeoHead';
import { Breadcrumbs } from '../components/Breadcrumbs';
import { ArrowRight, ArrowUpRight, CheckCircle2 } from 'lucide-react';

export const CommercialReportingPage: React.FC = () => {
  const jsonLd = [
    {
      '@context': 'https://schema.org',
      '@type': 'Service',
      name: 'Commercial Reporting & Spreadsheet Automation',
      provider: {
        '@type': 'Organization',
        name: 'DafeDeScribe',
        url: 'https://dafe.name.ng/'
      },
      description: 'Automated data preparation, multi-sheet consolidation, and programmatic reporting replacing repetitive manual spreadsheet wrangling.'
    },
    {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://dafe.name.ng/' },
        { '@type': 'ListItem', position: 2, name: 'Industry', item: 'https://dafe.name.ng/industry' },
        { '@type': 'ListItem', position: 3, name: 'Commercial Reporting', item: 'https://dafe.name.ng/industry/commercial-reporting' }
      ]
    }
  ];

  const examples = [
    'Multiple Excel exports combined manually',
    'PDF tables copied into spreadsheets',
    'Weekly sales reports rebuilt from scratch',
    'Large datasets processed by hand',
    'Records reconciled between systems',
    'Repeated file preparation'
  ];

  return (
    <div className="min-h-screen">
      <SeoHead
        title="Commercial Reporting & Spreadsheet Automation | DafeDeScribe"
        description="If the report is rebuilt the same way every month, inspect the process. Automated data pipelines and spreadsheet reconciliation for operational businesses."
        canonicalPath="/industry/commercial-reporting"
        jsonLd={jsonLd}
      />

      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-20 space-y-16">
        <Breadcrumbs
          items={[
            { label: 'INDUSTRY', path: '/industry' },
            { label: 'COMMERCIAL REPORTING', path: '/industry/commercial-reporting' },
          ]}
        />

        {/* ─── HERO ────────────────────────────────────────────── */}
        <section className="space-y-6">
          <div className="font-mono-tech text-xs tracking-widest uppercase text-[#96742c]">
            [INDUSTRY / COMMERCIAL INTELLIGENCE]
          </div>

          <h1 className="text-3xl sm:text-5xl font-bold tracking-tight text-[#141416] leading-[1.15]">
            If the report is rebuilt the same way every month, inspect the process.
          </h1>

          <div className="space-y-4 text-base sm:text-lg text-[#4a4946] leading-relaxed">
            <p>
              Spreadsheets are often perfectly good tools.
            </p>
            <p>
              The waste appears when people repeatedly clean, combine, copy and restructure the same information just to produce the next report.
            </p>
          </div>
        </section>

        {/* ─── EXAMPLES OF SPREADSHEET WASTE ───────────────────── */}
        <section className="border border-[#ded9cf] bg-[#ffffff] p-6 sm:p-8 space-y-6">
          <div className="font-mono-tech text-xs tracking-wider uppercase text-[#7a7770]">
            [RECURRING WASTE PATTERNS]
          </div>

          <h2 className="text-xl sm:text-2xl font-bold text-[#141416]">
            Familiar friction in operational reporting:
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
            {examples.map((item, idx) => (
              <div
                key={idx}
                className="p-3.5 border border-[#ded9cf] bg-[#faf8f5] flex items-start gap-3 text-sm text-[#141416]"
              >
                <span className="font-mono-tech text-xs text-[#96742c] font-semibold">
                  0{idx + 1}.
                </span>
                <span>{item}</span>
              </div>
            ))}
          </div>
        </section>

        {/* ─── PROOF BLOCK ─────────────────────────────────────── */}
        <section className="border border-[#141416] bg-[#f4f1eb] p-6 sm:p-8 space-y-4">
          <div className="flex flex-wrap items-center justify-between gap-2">
            <span className="font-mono-tech text-xs text-[#96742c] font-semibold uppercase">
              [VERIFIED CASE PROOF]
            </span>
            <span className="font-mono-tech text-xs px-2 py-0.5 bg-[#141416] text-[#faf8f5]">
              INTERNAL BUILD
            </span>
          </div>

          <h3 className="text-2xl font-bold text-[#141416]">
            1,000,000+ rows processed in under 10 minutes.
          </h3>

          <p className="text-sm sm:text-base text-[#575653] leading-relaxed">
            A chunked Python workflow replaced a complex multi-file reconciliation job that crashed standard spreadsheet software, delivering cleaned Parquet partitions and an executive digest in 8.7 minutes.
          </p>

          <div className="pt-2">
            <Link
              to="/work/million-row-pipeline"
              className="inline-flex items-center gap-2 text-xs font-mono-tech uppercase tracking-wider text-[#141416] font-semibold hover:text-[#96742c] transition-colors"
            >
              <span>See the technical project breakdown</span>
              <ArrowUpRight className="w-4 h-4" />
            </Link>
          </div>
        </section>

        {/* ─── CTA ─────────────────────────────────────────────── */}
        <section className="border border-[#141416] bg-[#f3efe6] p-8 space-y-5">
          <div className="font-mono-tech text-xs tracking-wider uppercase text-[#96742c]">
            [DATA PROCESS AUDIT]
          </div>
          <h2 className="text-2xl font-bold text-[#141416]">
            Show Me the Data Workflow
          </h2>
          <p className="text-sm sm:text-base text-[#575653] leading-relaxed">
            Send an outline of the exports, tables, and steps your team combines to build your recurring reports.
          </p>
          <div className="pt-2">
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-6 py-3.5 text-xs font-mono-tech uppercase tracking-wider bg-[#141416] text-[#faf8f5] border border-[#141416] hover:bg-[#2b2b30] transition-colors"
            >
              <span>Show Me the Data Workflow</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </section>

      </main>
    </div>
  );
};
