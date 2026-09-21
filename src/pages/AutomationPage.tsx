import React from 'react';
import { ArrowRight, ArrowUpRight } from 'lucide-react';
import { CompactCta } from '../components/CompactCta';
import { EditorialPageHeader } from '../components/EditorialPageHeader';
import { EditorialSection } from '../components/EditorialSection';
import { SeoHead } from '../components/SeoHead';
import { Link } from '../router/Router';

const architecture = [
  ['01', 'Human', 'Customer intake', 'WhatsApp, web, email, or portal'],
  ['02', 'System', 'Capture', 'Record files, context, and identifiers'],
  ['03', 'System', 'Structure', 'Extract and normalize required fields'],
  ['04', 'System', 'Route', 'Apply deterministic rules and exceptions'],
  ['05', 'Human', 'Review', 'Technical or commercial sign-off'],
] as const;

const fitSignals = [
  'The same details are copied from messages into spreadsheets.',
  'Documents must be checked and renamed before work can begin.',
  'Someone manually checks the same portals or inboxes every day.',
  'Reports are rebuilt from recurring exports.',
  'High-value enquiries disappear when follow-up depends on memory.',
  'Several tools are useful individually but do not share context.',
] as const;

const technologies = ['Python', 'REST & webhook APIs', 'n8n', 'Browser automation', 'SQL & Parquet', 'Google Workspace', 'Deterministic AI parsing'] as const;

export const AutomationPage: React.FC = () => {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: 'Workflow Automation for Operational Businesses',
    provider: { '@type': 'Organization', name: 'DafeDeScribe', url: 'https://www.dafe.name.ng/' },
    serviceType: 'Workflow Automation & Systems Integration',
    description: 'Custom workflow automation for businesses handling repetitive enquiries, documents, quotations, follow-up, reporting and cross-system data work.',
  };

  return (
    <div className="min-h-screen">
      <SeoHead title="Workflow Automation for Operational Businesses | DafeDeScribe" description={jsonLd.description} canonicalPath="/automation" jsonLd={jsonLd} />
      <main className="mx-auto max-w-[1440px] px-6 pb-16 pt-10 sm:px-12 sm:pb-20 sm:pt-14 lg:px-16">
        <EditorialPageHeader
          indexLabel="AUTOMATION"
          eyebrow="Automation approach"
          title="Automate preparation. Keep judgement human."
          summary={<>I connect the documents, inboxes, spreadsheets, and software your team already uses. Deterministic rules handle repeatable work; experienced people retain technical and commercial sign-off.</>}
        >
          <Link to="/contact" className="btn-primary px-6 py-3.5">Discuss your process <ArrowRight className="h-4 w-4" aria-hidden="true" /></Link>
        </EditorialPageHeader>

        <EditorialSection label="Representative architecture" title="The process dictates the system, not a predetermined vendor.">
          <ol className="divide-y divide-stone-300 border-y border-stone-300 lg:grid lg:grid-cols-5 lg:divide-x lg:divide-y-0">
            {architecture.map(([number, owner, title, copy]) => (
              <li key={number} className="p-5">
                <div className="flex items-center justify-between gap-3 font-mono-tech text-xs uppercase tracking-wider"><span className="font-bold text-amber-800">{number}</span><span className="text-slate-500">{owner}</span></div>
                <h2 className="mt-7 font-display text-xl text-slate-950">{title}</h2>
                <p className="mt-2 text-xs leading-relaxed text-slate-600">{copy}</p>
              </li>
            ))}
          </ol>
          <div className="mt-5 flex flex-wrap gap-x-5 gap-y-2 font-mono-tech text-xs text-slate-500">{technologies.map((technology) => <span key={technology}>{technology}</span>)}</div>
        </EditorialSection>

        <EditorialSection title="Signals that a workflow is ready for automation." intro="The strongest candidates are repetitive, rule-shaped, and expensive to leave dependent on memory or transcription.">
          <ul className="divide-y divide-stone-300 border-y border-stone-300 sm:grid sm:grid-cols-2 sm:divide-y-0">
            {fitSignals.map((signal, index) => <li key={signal} className={`py-5 text-sm leading-relaxed text-slate-700 sm:px-5 ${index > 1 ? 'sm:border-t sm:border-stone-300' : ''} ${index % 2 === 1 ? 'sm:border-l sm:border-stone-300' : ''}`}>{signal}</li>)}
          </ul>
        </EditorialSection>

        <EditorialSection title="Start with the commercial problem." intro="Industry pages explain the specific RFQ, tender, quotation, and reporting workflows. The work catalogue shows systems at different scopes.">
          <div className="flex flex-wrap gap-3">
            <Link to="/industry" className="btn-secondary px-5 py-3 text-sm">Explore industry systems <ArrowUpRight className="h-4 w-4" aria-hidden="true" /></Link>
            <Link to="/work" className="btn-secondary px-5 py-3 text-sm">Review documented work <ArrowUpRight className="h-4 w-4" aria-hidden="true" /></Link>
          </div>
        </EditorialSection>

        <div className="pt-12 sm:pt-16">
          <CompactCta title="Have a specialised or non-standard workflow?" copy="Describe the unusual scripts, transformations, and manual checkpoints your team relies on. We will find the smallest maintainable intervention." actionLabel="Describe your workflow" actionTo="/contact" />
        </div>
      </main>
    </div>
  );
};
