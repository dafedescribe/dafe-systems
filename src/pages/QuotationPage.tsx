import React from 'react';
import { Link } from '../router/Router';
import { SeoHead } from '../components/SeoHead';
import { Breadcrumbs } from '../components/Breadcrumbs';
import { ArrowRight, CheckCircle2 } from 'lucide-react';

export const QuotationPage: React.FC = () => {
  const jsonLd = [
    {
      '@context': 'https://schema.org',
      '@type': 'Service',
      name: 'Quotation Workflow Automation for Industrial Businesses',
      provider: {
        '@type': 'Organization',
        name: 'DafeDeScribe',
        url: 'https://www.dafe.name.ng/'
      },
      description: 'Quotation coordination and preparation workflows reducing administrative overhead before and after quote issuance.'
    },
    {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.dafe.name.ng/' },
        { '@type': 'ListItem', position: 2, name: 'Industry', item: 'https://www.dafe.name.ng/industry' },
        { '@type': 'ListItem', position: 3, name: 'Quotation Workflows', item: 'https://www.dafe.name.ng/industry/quotation-workflows' }
      ]
    }
  ];

  const beforeTasks = [
    'Retrieve previous customer records & part pricing history',
    'Organise multi-source inputs (engineering specs, supplier costs)',
    'Identify missing commercial or technical data early',
    'Prepare repeatable document sections & terms automatically',
    'Route draft proposal for internal technical sign-off'
  ];

  const afterTasks = [
    'Record quote status & delivery timestamp in internal pipeline',
    'Schedule automated follow-up prompts at defined intervals',
    'Flag stalled customer inactivity to commercial manager',
    'Update rolling revenue & margin pipeline forecasts',
    'Feed commercial reporting without manual duplicate entry'
  ];

  return (
    <div className="min-h-screen">
      <SeoHead
        title="Quotation Workflow Automation for Industrial Businesses | DafeDeScribe"
        description="The quotation is one document. The work around it is usually bigger. Automation around preparation, coordination, and follow-up."
        canonicalPath="/industry/quotation-workflows"
        jsonLd={jsonLd}
      />

      <main className="max-w-4xl mx-auto px-6 sm:px-10 py-12 sm:py-20 space-y-16">
        <Breadcrumbs
          items={[
            { label: 'INDUSTRY', path: '/industry' },
            { label: 'QUOTATION WORKFLOWS', path: '/industry/quotation-workflows' },
          ]}
        />

        {/* ─── HERO ────────────────────────────────────────────── */}
        <section className="space-y-6">
          <div className="font-mono-tech text-xs tracking-[0.1em] uppercase text-[#B58A2A] font-semibold">
            [COMMERCIAL COORDINATION / QUOTATION PIPELINE]
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-[#181816] font-display leading-[1.12]">
            The quotation is one document. The work around it is usually bigger.
          </h1>

          <div className="space-y-4 text-base sm:text-lg text-[#33312C] font-body leading-relaxed">
            <p>
              Preparing a quote may require customer information, product specifications, pricing, previous records, supplier information and inputs from several people.
            </p>
            <p>
              Then the quote has to be tracked.
            </p>
            <p className="font-semibold text-[#181816]">
              The useful automation opportunity is often the preparation and coordination surrounding that decision.
            </p>
          </div>
        </section>

        {/* ─── BEFORE VS AFTER QUOTATION ───────────────────────── */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Before */}
          <div className="catalogue-sheet p-6 sm:p-8 space-y-4">
            <div className="font-mono-tech text-xs text-[#B58A2A] uppercase font-semibold">
              [STAGE 01 · PREPARATION]
            </div>
            <h2 className="text-2xl font-bold text-[#181816] font-display">
              Before quotation
            </h2>
            <ul className="space-y-2.5 text-xs sm:text-sm text-[#77736A] font-body">
              {beforeTasks.map((task, i) => (
                <li key={i} className="flex items-start gap-2.5">
                  <span className="font-mono-tech text-[#B58A2A] text-xs font-semibold">
                    0{i + 1}.
                  </span>
                  <span>{task}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* After */}
          <div className="catalogue-sheet p-6 sm:p-8 space-y-4">
            <div className="font-mono-tech text-xs text-[#B58A2A] uppercase font-semibold">
              [STAGE 02 · COORDINATION]
            </div>
            <h2 className="text-2xl font-bold text-[#181816] font-display">
              After quotation
            </h2>
            <ul className="space-y-2.5 text-xs sm:text-sm text-[#77736A] font-body">
              {afterTasks.map((task, i) => (
                <li key={i} className="flex items-start gap-2.5">
                  <span className="font-mono-tech text-[#B58A2A] text-xs font-semibold">
                    0{i + 1}.
                  </span>
                  <span>{task}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* ─── CORE PRINCIPLE ──────────────────────────────────── */}
        <section className="catalogue-sheet p-6 sm:p-8 space-y-4">
          <div className="font-mono-tech text-xs tracking-[0.1em] uppercase text-[#B58A2A] font-semibold">
            [COMMERCIAL INTEGRITY]
          </div>

          <h2 className="text-2xl sm:text-3xl font-bold text-[#181816] font-display">
            Keep the decisions human.
          </h2>

          <p className="text-base text-[#33312C] font-body leading-relaxed">
            Pricing, negotiation, exceptions and customer commitments stay with your team.
          </p>

          <p className="text-sm text-[#77736A] font-body leading-relaxed">
            Automation exists to ensure your sales engineers never spend an hour assembling boilerplates or lose a high-margin order because follow-up was forgotten in a busy week.
          </p>
        </section>

        {/* ─── CTA ─────────────────────────────────────────────── */}
        <section className="catalogue-sheet p-8 space-y-5 border border-[#D9D4C8] border-t-2 border-t-[#B58A2A]">
          <div className="font-mono-tech text-xs tracking-[0.1em] uppercase text-[#B58A2A]">
            [PROCESS REVIEW]
          </div>
          <h2 className="text-2xl font-bold text-[#181816] font-display">
            Show Me Your Quote Process
          </h2>
          <p className="text-sm sm:text-base text-[#77736A] font-body leading-relaxed">
            Tell me what happens between a customer asking for pricing and the final quotation leaving your office.
          </p>
          <div className="pt-2">
            <Link
              to="/contact"
              className="btn-primary px-6 py-3.5"
            >
              <span>Show Me Your Quote Process</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </section>

      </main>
    </div>
  );
};
