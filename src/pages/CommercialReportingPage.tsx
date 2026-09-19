import React from 'react';
import { Link } from '../router/Router';
import { SeoHead } from '../components/SeoHead';
import { Breadcrumbs } from '../components/Breadcrumbs';
import { ArrowRight, ArrowUpRight } from 'lucide-react';

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

      <main className="max-w-4xl mx-auto px-6 sm:px-10 py-12 sm:py-20 space-y-16">
        <Breadcrumbs
          items={[
            { label: 'INDUSTRY', path: '/industry' },
            { label: 'COMMERCIAL REPORTING', path: '/industry/commercial-reporting' },
          ]}
        />

        {/* ─── HERO ────────────────────────────────────────────── */}
        <section className="space-y-6">
          <div className="font-mono-tech text-xs tracking-[0.1em] uppercase text-[#B58A2A] font-semibold">
            [DATA PIPELINES / COMMERCIAL INTELLIGENCE]
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-[#181816] font-display leading-[1.12]">
            If the report is rebuilt the same way every month, inspect the process.
          </h1>

          <div className="space-y-4 text-base sm:text-lg text-[#33312C] font-body leading-relaxed">
            <p>
              Spreadsheets are often perfectly good tools.
            </p>
            <p>
              The waste appears when people repeatedly clean, combine, copy and restructure the same information just to produce the next report.
            </p>
          </div>
        </section>

        {/* ─── EXAMPLES OF SPREADSHEET WASTE ───────────────────── */}
        <section className="catalogue-sheet p-6 sm:p-8 space-y-6">
          <div className="font-mono-tech text-xs tracking-[0.1em] uppercase text-[#B58A2A] font-semibold">
            [RECURRING WASTE PATTERNS]
          </div>

          <h2 className="text-2xl font-bold text-[#181816] font-display">
            Familiar friction in operational reporting:
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
            {examples.map((item, idx) => (
              <div
                key={idx}
                className="p-3.5 border border-[#D9D4C8] bg-[#FCFBF7] flex items-start gap-3 text-sm text-[#181816] font-body"
              >
                <span className="font-mono-tech text-xs text-[#B58A2A] font-semibold">
                  0{idx + 1}.
                </span>
                <span>{item}</span>
              </div>
            ))}
          </div>
        </section>

        {/* ─── PROOF BLOCK ─────────────────────────────────────── */}
        <section className="catalogue-sheet p-6 sm:p-8 space-y-4 border-l-4 border-l-[#B58A2A]">
          <div className="flex flex-wrap items-center justify-between gap-2">
            <span className="font-mono-tech text-xs text-[#B58A2A] font-semibold uppercase">
              REF. DS-001 · VERIFIED PROOF
            </span>
            <span className="font-mono-tech text-[10px] px-2 py-0.5 bg-[#F5F1E7] text-[#33312C] border border-[#D9D4C8] font-semibold">
              INTERNAL BUILD
            </span>
          </div>

          <h3 className="text-2xl sm:text-3xl font-bold text-[#181816] font-display">
            1,000,000+ rows processed in under 10 minutes.
          </h3>

          <p className="text-sm sm:text-base text-[#77736A] font-body leading-relaxed">
            A chunked Python workflow replaced a complex multi-file reconciliation job that crashed standard spreadsheet software, delivering cleaned Parquet partitions and an executive digest in 8.7 minutes.
          </p>

          <div className="pt-2">
            <Link
              to="/work/million-row-pipeline"
              className="inline-flex items-center gap-1.5 font-mono-tech text-xs uppercase tracking-[0.08em] text-[#181816] font-semibold hover:text-[#B58A2A] transition-colors"
            >
              <span>See the technical project breakdown</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </section>

        {/* ─── CTA ─────────────────────────────────────────────── */}
        <section className="catalogue-sheet p-8 space-y-5 border-l-4 border-l-[#B58A2A]">
          <div className="font-mono-tech text-xs tracking-[0.1em] uppercase text-[#B58A2A]">
            [DATA AUDIT]
          </div>
          <h2 className="text-2xl font-bold text-[#181816] font-display">
            Show Me the Data Workflow
          </h2>
          <p className="text-sm sm:text-base text-[#77736A] font-body leading-relaxed">
            Send an outline of the exports, tables, and steps your team combines to build your recurring reports.
          </p>
          <div className="pt-2">
            <Link
              to="/contact"
              className="btn-primary px-6 py-3.5"
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
