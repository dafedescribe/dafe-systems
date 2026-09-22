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
        url: 'https://www.dafe.name.ng/'
      },
      description: 'Automated data preparation, multi-sheet consolidation, and programmatic reporting replacing repetitive manual spreadsheet wrangling.'
    },
    {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.dafe.name.ng/' },
        { '@type': 'ListItem', position: 2, name: 'Industry', item: 'https://www.dafe.name.ng/industry' },
        { '@type': 'ListItem', position: 3, name: 'Commercial Reporting', item: 'https://www.dafe.name.ng/industry/commercial-reporting' }
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
          <div className="font-mono-tech text-xs tracking-[0.1em] uppercase text-amber-700 font-semibold">
            Data Pipelines & Commercial Intelligence
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-slate-900 font-display leading-[1.12]">
            If the report is rebuilt the same way every month, inspect the process.
          </h1>

          <div className="space-y-4 text-base sm:text-lg text-slate-700 font-body leading-relaxed">
            <p>
              Spreadsheets are exceptional tools for ad-hoc analysis. The friction arises when operational teams spend hours every week manually exporting CSVs, copying columns across workbooks, and patching broken formulas just to generate management reporting.
            </p>
            <p>
              I build deterministic data pipelines that extract raw transactional records, reconcile anomalies, and compile production-grade executive digests automatically.
            </p>
          </div>
        </section>

        {/* ─── EXAMPLES OF SPREADSHEET WASTE ───────────────────── */}
        <section className="catalogue-sheet p-6 sm:p-8 space-y-6">
          <div className="font-mono-tech text-xs tracking-[0.1em] uppercase text-amber-700 font-semibold">
            Common Friction Points
          </div>

          <h2 className="text-2xl font-bold text-slate-900 font-display">
            Familiar bottlenecks in operational reporting:
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
            {examples.map((item, idx) => (
              <div
                key={idx}
                className="p-4 border border-slate-200 bg-white rounded-lg  flex items-start gap-3 text-sm text-slate-800 font-body"
              >
                <span className="font-mono-tech text-xs text-amber-700 font-semibold">
                  0{idx + 1}.
                </span>
                <span>{item}</span>
              </div>
            ))}
          </div>
        </section>

        {/* ─── PROOF BLOCK ─────────────────────────────────────── */}
        <section className="catalogue-sheet p-6 sm:p-8 space-y-4 border-t-2 border-t-amber-600">
          <div className="flex flex-wrap items-center justify-between gap-2">
            <span className="font-mono-tech text-xs text-amber-700 font-semibold uppercase">
              Proven Case Study · Internal Build
            </span>
            <span className="font-mono-tech text-[10px] px-2 py-0.5 bg-slate-100 text-slate-700 rounded font-semibold">
              PYTHON & DUCKDB
            </span>
          </div>

          <h3 className="text-2xl sm:text-3xl font-bold text-slate-900 font-display">
            1,000,000+ rows processed in under 10 minutes.
          </h3>

          <p className="text-sm sm:text-base text-slate-600 font-body leading-relaxed">
            A chunked data pipeline replaced a multi-file Excel workflow that crashed memory limits, completing data transformation and generating an executive summary in 8.7 minutes with full audit logs.
          </p>

          <div className="pt-2">
            <Link
              to="/work/million-row-pipeline"
              className="inline-flex items-center gap-1.5 font-mono-tech text-xs uppercase tracking-[0.08em] text-slate-900 font-semibold hover:text-amber-700 transition-colors"
            >
              <span>See the technical project breakdown</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </section>

        {/* ─── CTA ─────────────────────────────────────────────── */}
        <section className="catalogue-sheet p-8 space-y-5 border-t-2 border-t-amber-600">
          <div className="font-mono-tech text-xs tracking-[0.1em] uppercase text-amber-700 font-semibold">
            Data Workflow Audit
          </div>
          <h2 className="text-2xl font-bold text-slate-900 font-display">
            Show Me the Data Workflow
          </h2>
          <p className="text-sm sm:text-base text-slate-600 font-body leading-relaxed">
            Send an outline of the exports, tables, and steps your team combines to build recurring reports. We will assess pipeline feasibility.
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
