import React from 'react';
import { ArrowRight, ArrowUpRight } from 'lucide-react';
import { CompactCta } from '../components/CompactCta';
import { EditorialPageHeader } from '../components/EditorialPageHeader';
import { EditorialSection } from '../components/EditorialSection';
import { SeoHead } from '../components/SeoHead';
import { Link } from '../router/Router';

const lifecycle = [
  ['01', 'Opportunity', 'Portals and inbound demand'],
  ['02', 'Enquiry / RFQ', 'Documents and requirements'],
  ['03', 'Specification', 'Technical validation'],
  ['04', 'Quotation', 'Pricing and sign-off'],
  ['05', 'Follow-up', 'Status and cadence'],
  ['06', 'Reporting', 'Commercial visibility'],
] as const;

const capabilities = [
  ['01', 'RFQ intake & extraction', 'Turn incoming emails, drawings, and messy PDFs into structured quote requests before estimation begins.', '/industry/rfq-automation'],
  ['02', 'Tender monitoring', 'Monitor defined procurement portals and deliver qualification-ready briefs to a review queue.', '/industry/tender-monitoring'],
  ['03', 'Quotation workflow', 'Coordinate document generation, internal sign-off, quotation status, and customer follow-up.', '/industry/quotation-workflows'],
  ['04', 'Commercial reporting', 'Prepare, reconcile, and report recurring operational exports without rebuilding the same workbook.', '/industry/commercial-reporting'],
] as const;

const fitSignals = [
  'High-value enquiries arrive through email, portals, or messaging.',
  'Specifications require experienced technical review.',
  'Staff repeatedly move the same details between documents and systems.',
  'Commercial status is difficult to see without asking several people.',
] as const;

export const IndustryPage: React.FC = () => {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: 'Industrial Sales Workflow Automation',
    provider: { '@type': 'Organization', name: 'DafeDeScribe', url: 'https://www.dafe.name.ng/' },
    serviceType: 'Commercial Workflow Systems',
    description: 'Workflow systems for manufacturers, industrial suppliers and contractors covering RFQs, tenders, quotations, opportunity monitoring, follow-up and commercial reporting.',
  };

  return (
    <div className="min-h-screen">
      <SeoHead title="Industrial Sales Workflow Automation | DafeDeScribe" description={jsonLd.description} canonicalPath="/industry" jsonLd={jsonLd} />
      <main className="mx-auto max-w-[1440px] px-6 pb-16 pt-10 sm:px-12 sm:pb-20 sm:pt-14 lg:px-16">
        <EditorialPageHeader
          indexLabel="INDUSTRY"
          eyebrow="Commercial workflow systems"
          title="Less administration between the opportunity and the order."
          summary={<>Industrial sales work crosses inboxes, portals, drawings, PDFs, spreadsheets, and ERP records. I build the connective workflow around those handoffs while experienced people retain commercial control.</>}
        >
          <Link to="/contact" className="btn-primary px-6 py-3.5">Show me your workflow <ArrowRight className="h-4 w-4" aria-hidden="true" /></Link>
        </EditorialPageHeader>

        <EditorialSection label="Commercial lifecycle" title="One operational surface, with human control at the decisions.">
          <ol className="grid border-y border-stone-300 sm:grid-cols-2 lg:grid-cols-6">
            {lifecycle.map(([number, title, copy], index) => (
              <li key={number} className={`py-5 sm:px-4 lg:min-h-36 ${index > 0 ? 'border-t border-stone-300 sm:border-l sm:border-t-0' : ''} ${index === 2 || index === 4 ? 'sm:border-l-0 lg:border-l' : ''}`}>
                <div className="font-mono-tech text-xs font-bold text-amber-800">{number}</div>
                <h2 className="mt-5 font-display text-xl leading-tight text-slate-950">{title}</h2>
                <p className="mt-2 text-xs leading-relaxed text-slate-600">{copy}</p>
              </li>
            ))}
          </ol>
        </EditorialSection>

        <EditorialSection label="Specialist workflows" title="Four places commercial administration accumulates." intro="Each route explains the inputs, review points, and realistic scope in more detail.">
          <div className="divide-y divide-stone-300 border-y border-stone-300">
            {capabilities.map(([number, title, copy, to]) => (
              <article key={number} className="grid gap-4 py-6 sm:grid-cols-[64px_260px_minmax(0,1fr)_auto] sm:items-center">
                <div className="font-mono-tech text-xs font-bold text-amber-800">{number}</div>
                <h2 className="font-display text-2xl text-slate-950">{title}</h2>
                <p className="max-w-2xl text-sm leading-relaxed text-slate-600">{copy}</p>
                <Link to={to} className="inline-flex min-h-11 items-center gap-2 text-sm font-semibold text-slate-950 hover:text-amber-800">Details <ArrowUpRight className="h-4 w-4" aria-hidden="true" /></Link>
              </article>
            ))}
          </div>
        </EditorialSection>

        <EditorialSection title="The workflow shape matters more than the industry label." intro="Manufacturers, distributors, engineering businesses, equipment suppliers, contractors, and institutional suppliers often share the same operational signals.">
          <ul className="grid border-y border-stone-300 sm:grid-cols-2">
            {fitSignals.map((signal, index) => <li key={signal} className={`py-5 text-sm leading-relaxed text-slate-700 sm:px-5 ${index > 0 ? 'border-t border-stone-300' : ''} ${index % 2 === 1 ? 'sm:border-l' : ''} ${index === 1 ? 'sm:border-t-0' : ''}`}>{signal}</li>)}
          </ul>
        </EditorialSection>

        <div className="pt-12 sm:pt-16">
          <CompactCta title="Start with one commercial workflow." copy="Walk me through one repeated process. I will identify the information bottlenecks, deterministic steps, and smallest reliable pipeline." actionLabel="Show me the process" actionTo="/contact" secondaryLabel="How I automate" secondaryTo="/automation" />
        </div>
      </main>
    </div>
  );
};
