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
        url: 'https://dafe.name.ng/'
      },
      description: 'Scheduled multi-source tender detection and filtering pipelines delivering qualified opportunity briefs.'
    },
    {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://dafe.name.ng/' },
        { '@type': 'ListItem', position: 2, name: 'Industry', item: 'https://dafe.name.ng/industry' },
        { '@type': 'ListItem', position: 3, name: 'Tender Monitoring', item: 'https://dafe.name.ng/industry/tender-monitoring' }
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
          <div className="font-mono-tech text-xs tracking-[0.1em] uppercase text-[#B58A2A] font-semibold">
            [PROCUREMENT SURVEILLANCE / ARCHITECTURE]
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-[#181816] font-display leading-[1.12]">
            Stop checking the same tender sources every morning.
          </h1>

          <div className="space-y-4 text-base sm:text-lg text-[#33312C] font-body leading-relaxed">
            <p>
              When a team already knows which procurement portals, websites and buyer sources matter, repeatedly checking them is an information-handling problem.
            </p>
            <p>
              A monitoring workflow can collect newly published opportunities, structure useful details and present a smaller review queue.
            </p>
          </div>
        </section>

        {/* ─── PROCESS VISUAL ──────────────────────────────────── */}
        <section className="space-y-4">
          <ProcessDiagram type="tender" />
        </section>

        {/* ─── CORE PRINCIPLE ──────────────────────────────────── */}
        <section className="catalogue-sheet p-6 sm:p-8 space-y-4">
          <div className="font-mono-tech text-xs tracking-[0.1em] uppercase text-[#B58A2A] font-semibold">
            [OPERATIONAL MANDATE]
          </div>

          <h2 className="text-2xl sm:text-3xl font-bold text-[#181816] font-display">
            The system finds. Your team decides.
          </h2>

          <div className="space-y-3 text-sm sm:text-base text-[#77736A] font-body leading-relaxed">
            <p>
              It should not pretend to know whether your company can fulfil a complex tender.
            </p>
            <p>
              Commercial and technical judgement remains with your team.
            </p>
            <p>
              The goal is to reduce the work required to discover and organise opportunities worth evaluating.
            </p>
          </div>

          <div className="pt-4 border-t border-[#D9D4C8] grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs font-mono-tech text-[#181816]">
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-[#B58A2A]" />
              <span>Multi-portal headless crawlers</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-[#B58A2A]" />
              <span>Scope & mandatory bond extraction</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-[#B58A2A]" />
              <span>Negative keyword exclusion</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-[#B58A2A]" />
              <span>Unified commercial review digest</span>
            </div>
          </div>
        </section>

        {/* ─── RELEVANT NOTES ──────────────────────────────────── */}
        <section className="border-t border-[#D9D4C8] pt-8 space-y-4">
          <div className="font-mono-tech text-xs uppercase tracking-[0.1em] text-[#77736A]">
            [RELATED TECHNICAL BULLETIN]
          </div>
          <Link
            to="/notes/automate-tender-monitoring"
            className="catalogue-plate p-5 block group"
          >
            <div className="font-mono-tech text-[10px] text-[#B58A2A] uppercase mb-1 font-semibold">
              TECHNICAL NOTE / 003
            </div>
            <div className="text-xl font-bold text-[#181816] font-display group-hover:text-[#B58A2A] transition-colors mb-2">
              How to Automate Tender Monitoring Across Multiple Procurement Portals
            </div>
            <div className="text-xs text-[#77736A] font-body">
              Why keyword-based alerts create noise and how multi-stage filtering provides actionable opportunity queues.
            </div>
          </Link>
        </section>

        {/* ─── CTA ─────────────────────────────────────────────── */}
        <section className="catalogue-sheet p-8 space-y-5 border-l-4 border-l-[#B58A2A]">
          <div className="font-mono-tech text-xs tracking-[0.1em] uppercase text-[#B58A2A]">
            [TENDER INTAKE AUDIT]
          </div>
          <h2 className="text-2xl font-bold text-[#181816] font-display">
            Show Me Your Tender Sources
          </h2>
          <p className="text-sm sm:text-base text-[#77736A] font-body leading-relaxed">
            List the procurement boards, utility sites, or buyer portals your commercial team monitors. We will assess the extraction architecture.
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
