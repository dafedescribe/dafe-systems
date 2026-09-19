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

      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-20 space-y-16">
        <Breadcrumbs
          items={[
            { label: 'INDUSTRY', path: '/industry' },
            { label: 'TENDER MONITORING', path: '/industry/tender-monitoring' },
          ]}
        />

        {/* ─── HERO ────────────────────────────────────────────── */}
        <section className="space-y-6">
          <div className="font-mono-tech text-xs tracking-widest uppercase text-[#96742c]">
            [INDUSTRY / PROCUREMENT SURVEILLANCE]
          </div>

          <h1 className="text-3xl sm:text-5xl font-bold tracking-tight text-[#141416] leading-[1.15]">
            Stop checking the same tender sources every morning.
          </h1>

          <div className="space-y-4 text-base sm:text-lg text-[#4a4946] leading-relaxed">
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
        <section className="border border-[#ded9cf] bg-[#ffffff] p-6 sm:p-8 space-y-4">
          <div className="font-mono-tech text-xs tracking-wider uppercase text-[#7a7770]">
            [OPERATIONAL MANDATE]
          </div>

          <h2 className="text-2xl sm:text-3xl font-bold text-[#141416]">
            The system finds. Your team decides.
          </h2>

          <div className="space-y-3 text-sm sm:text-base text-[#575653] leading-relaxed">
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

          <div className="pt-4 border-t border-[#ded9cf] grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs font-mono-tech text-[#141416]">
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-[#96742c]" />
              <span>Multi-portal headless crawlers</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-[#96742c]" />
              <span>Scope & mandatory bond extraction</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-[#96742c]" />
              <span>Negative keyword exclusion</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-[#96742c]" />
              <span>Unified commercial review digest</span>
            </div>
          </div>
        </section>

        {/* ─── RELEVANT NOTES ──────────────────────────────────── */}
        <section className="border-t border-[#ded9cf] pt-8 space-y-4">
          <div className="font-mono-tech text-xs uppercase tracking-wider text-[#7a7770]">
            [TECHNICAL GUIDE]
          </div>
          <Link
            to="/notes/automate-tender-monitoring"
            className="block p-5 border border-[#ded9cf] bg-[#faf8f5] hover:border-[#141416] transition-colors group"
          >
            <div className="font-mono-tech text-[10px] text-[#96742c] uppercase mb-1">
              IN-DEPTH ANALYSIS
            </div>
            <div className="text-base font-semibold text-[#141416] group-hover:text-[#96742c] transition-colors mb-2">
              How to Automate Tender Monitoring Across Multiple Procurement Portals
            </div>
            <div className="text-xs text-[#575653]">
              Why keyword-based alerts create noise and how multi-stage filtering provides actionable opportunity queues.
            </div>
          </Link>
        </section>

        {/* ─── CTA ─────────────────────────────────────────────── */}
        <section className="border border-[#141416] bg-[#f3efe6] p-8 space-y-5">
          <div className="font-mono-tech text-xs tracking-wider uppercase text-[#96742c]">
            [OPPORTUNITY AUDIT]
          </div>
          <h2 className="text-2xl font-bold text-[#141416]">
            Show Me Your Tender Sources
          </h2>
          <p className="text-sm sm:text-base text-[#575653] leading-relaxed">
            List the procurement boards, utility sites, or buyer portals your commercial team monitors. We will assess the extraction architecture.
          </p>
          <div className="pt-2">
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-6 py-3.5 text-xs font-mono-tech uppercase tracking-wider bg-[#141416] text-[#faf8f5] border border-[#141416] hover:bg-[#2b2b30] transition-colors"
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
