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
        url: 'https://dafe.name.ng/'
      },
      description: 'Quotation coordination and preparation workflows reducing administrative overhead before and after quote issuance.'
    },
    {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://dafe.name.ng/' },
        { '@type': 'ListItem', position: 2, name: 'Industry', item: 'https://dafe.name.ng/industry' },
        { '@type': 'ListItem', position: 3, name: 'Quotation Workflows', item: 'https://dafe.name.ng/industry/quotation-workflows' }
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

      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-20 space-y-16">
        <Breadcrumbs
          items={[
            { label: 'INDUSTRY', path: '/industry' },
            { label: 'QUOTATION WORKFLOWS', path: '/industry/quotation-workflows' },
          ]}
        />

        {/* ─── HERO ────────────────────────────────────────────── */}
        <section className="space-y-6">
          <div className="font-mono-tech text-xs tracking-widest uppercase text-[#96742c]">
            [INDUSTRY / COMMERCIAL COORDINATION]
          </div>

          <h1 className="text-3xl sm:text-5xl font-bold tracking-tight text-[#141416] leading-[1.15]">
            The quotation is one document. The work around it is usually bigger.
          </h1>

          <div className="space-y-4 text-base sm:text-lg text-[#4a4946] leading-relaxed">
            <p>
              Preparing a quote may require customer information, product specifications, pricing, previous records, supplier information and inputs from several people.
            </p>
            <p>
              Then the quote has to be tracked.
            </p>
            <p className="font-medium text-[#141416]">
              The useful automation opportunity is often the preparation and coordination surrounding that decision.
            </p>
          </div>
        </section>

        {/* ─── BEFORE VS AFTER QUOTATION ───────────────────────── */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Before */}
          <div className="border border-[#ded9cf] bg-[#ffffff] p-6 sm:p-8 space-y-4">
            <div className="font-mono-tech text-xs text-[#96742c] uppercase tracking-wider">
              [STAGE 01 · PREPARATION]
            </div>
            <h2 className="text-xl font-bold text-[#141416]">
              Before quotation
            </h2>
            <ul className="space-y-2.5 text-xs sm:text-sm text-[#575653]">
              {beforeTasks.map((task, i) => (
                <li key={i} className="flex items-start gap-2.5">
                  <span className="font-mono-tech text-[#96742c] text-xs font-semibold">
                    0{i + 1}.
                  </span>
                  <span>{task}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* After */}
          <div className="border border-[#ded9cf] bg-[#ffffff] p-6 sm:p-8 space-y-4">
            <div className="font-mono-tech text-xs text-[#96742c] uppercase tracking-wider">
              [STAGE 02 · COORDINATION]
            </div>
            <h2 className="text-xl font-bold text-[#141416]">
              After quotation
            </h2>
            <ul className="space-y-2.5 text-xs sm:text-sm text-[#575653]">
              {afterTasks.map((task, i) => (
                <li key={i} className="flex items-start gap-2.5">
                  <span className="font-mono-tech text-[#96742c] text-xs font-semibold">
                    0{i + 1}.
                  </span>
                  <span>{task}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* ─── CORE PRINCIPLE ──────────────────────────────────── */}
        <section className="border border-[#ded9cf] bg-[#ffffff] p-6 sm:p-8 space-y-4">
          <div className="font-mono-tech text-xs tracking-wider uppercase text-[#7a7770]">
            [COMMERCIAL SOVEREIGNTY]
          </div>

          <h2 className="text-2xl sm:text-3xl font-bold text-[#141416]">
            Keep the decisions human.
          </h2>

          <p className="text-base text-[#575653] leading-relaxed">
            Pricing, negotiation, exceptions and customer commitments stay with your team.
          </p>

          <p className="text-sm text-[#7a7770] leading-relaxed">
            Automation exists to ensure your sales engineers never spend an hour assembling boilerplates or lose a high-margin order because follow-up was forgotten in a busy week.
          </p>
        </section>

        {/* ─── CTA ─────────────────────────────────────────────── */}
        <section className="border border-[#141416] bg-[#f3efe6] p-8 space-y-5">
          <div className="font-mono-tech text-xs tracking-wider uppercase text-[#96742c]">
            [WORKFLOW INSPECTION]
          </div>
          <h2 className="text-2xl font-bold text-[#141416]">
            Show Me Your Quote Process
          </h2>
          <p className="text-sm sm:text-base text-[#575653] leading-relaxed">
            Tell me what happens between a customer asking for pricing and the final quotation leaving your office.
          </p>
          <div className="pt-2">
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-6 py-3.5 text-xs font-mono-tech uppercase tracking-wider bg-[#141416] text-[#faf8f5] border border-[#141416] hover:bg-[#2b2b30] transition-colors"
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
