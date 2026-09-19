import React from 'react';
import { Link } from '../router/Router';
import { SeoHead } from '../components/SeoHead';
import { Breadcrumbs } from '../components/Breadcrumbs';
import { ProcessDiagram } from '../components/ProcessDiagram';
import { ArrowRight, CheckCircle2 } from 'lucide-react';

export const TenderPage: React.FC = () => {
  const jsonLd = [
    {
      '@context': 'https://schema.org',
      '@type': 'Service',
      name: 'Tender Monitoring Automation for Industrial Suppliers',
      provider: {
        '@type': 'Organization',
        name: 'DafeDeScribe',
        url: 'https://www.dafe.name.ng/'
      },
      description: 'Scheduled multi-source tender detection and filtering pipelines delivering qualified opportunity briefs.'
    },
    {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.dafe.name.ng/' },
        { '@type': 'ListItem', position: 2, name: 'Industry', item: 'https://www.dafe.name.ng/industry' },
        { '@type': 'ListItem', position: 3, name: 'Tender Monitoring', item: 'https://www.dafe.name.ng/industry/tender-monitoring' }
      ]
    }
  ];

  return (
    <div className="min-h-screen">
      <SeoHead
        title="Tender Monitoring Automation for Industrial Suppliers | DafeDeScribe"
        description="Stop checking the same tender sources every morning. Automated procurement detection, document extraction, and structured opportunity triage."
        canonicalPath="/industry/tender-monitoring"
        jsonLd={jsonLd}
      />

      <main className="max-w-4xl mx-auto px-6 sm:px-10 py-12 sm:py-20 space-y-16">
        <Breadcrumbs
          items={[
            { label: 'INDUSTRY', path: '/industry' },
            { label: 'TENDER MONITORING', path: '/industry/tender-monitoring' },
          ]}
        />

        {/* ─── HERO ────────────────────────────────────────────── */}
        <section className="space-y-6">
          <div className="font-mono-tech text-xs tracking-[0.1em] uppercase text-amber-700 font-semibold">
            Procurement Monitoring & Opportunity Triage
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-slate-900 font-display leading-[1.12]">
            Stop checking the same tender sources every morning.
          </h1>

          <div className="space-y-4 text-base sm:text-lg text-slate-700 font-body leading-relaxed">
            <p>
              When a commercial team already knows which portals, utility websites, and institutional boards matter, repeatedly checking them every morning is an information extraction problem.
            </p>
            <p>
              Automated monitoring pipelines harvest newly published notices, parse attached bid criteria, and surface a prioritized triage queue before your working day begins.
            </p>
          </div>
        </section>

        {/* ─── PROCESS VISUAL ──────────────────────────────────── */}
        <section className="space-y-4">
          <ProcessDiagram type="tender" />
        </section>

        {/* ─── CORE PRINCIPLE ──────────────────────────────────── */}
        <section className="catalogue-sheet p-6 sm:p-8 space-y-4">
          <div className="font-mono-tech text-xs tracking-[0.1em] uppercase text-amber-700 font-semibold">
            Operational Governance
          </div>

          <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 font-display">
            Automate discovery and summarization. Keep bidding decisions human.
          </h2>

          <div className="space-y-3 text-sm sm:text-base text-slate-600 font-body leading-relaxed">
            <p>
              Software should never attempt to evaluate complex technical specifications or commit bonding capacity unsupervised. Estimating margin, assessing manufacturing capability, and weighing operational risk require seasoned human judgment.
            </p>
            <p>
              Our monitoring systems focus exclusively on eliminating the manual research layer—scanning fragmented procurement portals, extracting mandatory qualification terms, filtering out noise, and delivering a clean triage digest directly to your bidding team.
            </p>
          </div>

          <div className="pt-4 border-t border-slate-200 grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs font-mono-tech text-slate-800">
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-amber-600" />
              <span>Multi-portal headless crawlers</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-amber-600" />
              <span>Scope & mandatory bond extraction</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-amber-600" />
              <span>Negative keyword exclusion</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-amber-600" />
              <span>Unified commercial review digest</span>
            </div>
          </div>
        </section>

        {/* ─── RELEVANT NOTES ──────────────────────────────────── */}
        <section className="border-t border-slate-200 pt-8 space-y-4">
          <div className="font-mono-tech text-xs uppercase tracking-[0.1em] text-slate-500">
            Related Technical Articles
          </div>
          <Link
            to="/notes/automate-tender-monitoring"
            className="catalogue-plate p-5 block group"
          >
            <div className="font-mono-tech text-[10px] text-amber-700 uppercase mb-1 font-semibold">
              Technical Note 03
            </div>
            <div className="text-xl font-bold text-slate-900 font-display group-hover:text-amber-700 transition-colors mb-2">
              How to Automate Tender Monitoring Across Multiple Procurement Portals
            </div>
            <div className="text-xs text-slate-600 font-body">
              Why keyword-based alerts create noise and how multi-stage filtering provides actionable opportunity queues.
            </div>
          </Link>
        </section>

        {/* ─── CTA ─────────────────────────────────────────────── */}
        <section className="catalogue-sheet p-8 space-y-5 border-t-2 border-t-amber-600">
          <div className="font-mono-tech text-xs tracking-[0.1em] uppercase text-amber-700 font-semibold">
            Opportunity Pipeline Audit
          </div>
          <h2 className="text-2xl font-bold text-slate-900 font-display">
            Show Me Your Tender Sources
          </h2>
          <p className="text-sm sm:text-base text-slate-600 font-body leading-relaxed">
            List the procurement boards, utility sites, or buyer portals your commercial team monitors. We will assess the extraction architecture and draft a unified triage queue.
          </p>
          <div className="pt-2">
            <Link
              to="/contact"
              className="btn-primary px-6 py-3.5"
            >
              <span>Show Me Your Tender Sources</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </section>

      </main>
    </div>
  );
};
