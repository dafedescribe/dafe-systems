import React from 'react';
import { Link } from '../router/Router';
import { SeoHead } from '../components/SeoHead';
import { Breadcrumbs } from '../components/Breadcrumbs';
import { ArrowRight, CheckCircle2, MessageSquare, FileText, Database, ArrowDown, Workflow } from 'lucide-react';

export const AutomationPage: React.FC = () => {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: 'Workflow Automation for Operational Businesses',
    provider: {
      '@type': 'Organization',
      name: 'DafeDeScribe',
      url: 'https://www.dafe.name.ng/'
    },
    serviceType: 'Workflow Automation & Systems Integration',
    description: 'Custom workflow automation for businesses handling repetitive enquiries, documents, quotations, follow-up, reporting and cross-system data work.'
  };

  const problemStatements = [
    '“We ask every customer the same five questions manually.”',
    '“Someone has to copy this information from emails into Excel.”',
    '“We assemble every quote from an old Word document and hope pricing is current.”',
    '“Our web inquiries don’t connect to our ERP or sales system.”',
    '“Someone has to check multiple public portals every morning for new tenders.”',
    '“If nobody manually follows up, high-value inquiries slip away.”',
    '“We spend half of Friday rebuilding the same weekly report.”'
  ];

  const technologies = [
    'Python',
    'REST & Webhook APIs',
    'n8n Automation',
    'Headless Browser Automation',
    'SQL & Parquet Pipelines',
    'Google Workspace & Cloud Sync',
    'Deterministic AI Parsing',
    'Custom CLI Scripts',
    'Lightweight Web Applications'
  ];

  const candidateWorkflows = [
    'Inbound Inquiry Qualification',
    'WhatsApp Business Intake Pipelines',
    'PDF Specification & Drawing Extraction',
    'Commercial Quotation Assembly',
    'Lead Routing & Escalation',
    'Customer Follow-Up Sequencing',
    'Vendor Price Catalog Normalization',
    'Multi-Source Spreadsheet Automation',
    'Dataset Cleaning & Deduplication',
    'Recurring Executive Reporting',
    'Cross-System ERP / CRM Sync',
    'Procurement Portal Web Monitoring'
  ];

  const automationDiagramSteps = [
    { label: 'Customer Influx', type: 'human', desc: 'Inbound enquiry via WhatsApp, web, or email' },
    { label: 'Webhook Receiver', type: 'system', desc: 'Immediate event capture and session initialization' },
    { label: 'Qualification', type: 'system', desc: 'Automated scoping & required specification prompts' },
    { label: 'Document Parsing', type: 'system', desc: 'Attachment extraction & schema normalization' },
    { label: 'Routing & Dispatch', type: 'system', desc: 'Rules-based assignment to engineering queue' },
    { label: 'Operations Desk', type: 'human', desc: 'Sales engineer receives organized, verified dossier' },
  ];

  return (
    <div className="min-h-screen">
      <SeoHead
        title="Workflow Automation for Operational Businesses | DafeDeScribe"
        description="Custom workflow automation for businesses handling repetitive enquiries, documents, quotations, follow-up, reporting and cross-system data work."
        canonicalPath="/automation"
        jsonLd={jsonLd}
      />

      <main className="max-w-[1440px] mx-auto px-6 sm:px-12 lg:px-16 py-12 sm:py-20 space-y-16 sm:space-y-24">
        
        <Breadcrumbs items={[{ label: 'AUTOMATION', path: '/automation' }]} />

        {/* ─── HERO ────────────────────────────────────────────── */}
        <section className="space-y-6 max-w-4xl">
          <div className="text-xs font-mono-tech uppercase tracking-wider text-amber-700 font-semibold">
            Operational Automation
          </div>

          <h1 className="text-4xl sm:text-6xl font-bold tracking-tight text-slate-900 font-display leading-[1.12]">
            When every new enquiry triggers another administrative project.
          </h1>

          <div className="space-y-4 text-base sm:text-lg text-slate-700 font-body leading-relaxed max-w-3xl">
            <p>
              In operational and industrial businesses, customers rarely buy off a standard digital storefront. Every new request requires gathering technical requirements, validating specifications, calculating pricing, and tracking follow-ups across email and spreadsheets.
            </p>
            <p className="text-slate-500">
              I build custom automation systems around those exact procedures — eliminating manual transcription while keeping experienced people in charge of technical and commercial sign-offs.
            </p>
          </div>

          <div className="pt-2">
            <Link
              to="/contact"
              className="btn-primary px-6 py-3.5 text-sm"
            >
              <span>Discuss Your Process</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </section>

        {/* ─── WORKFLOW PIPELINE COMPONENT ─────────────────────── */}
        <section className="bg-white border border-slate-200 rounded-xl p-6 sm:p-8 space-y-6 shadow-sm">
          <div className="flex flex-wrap items-center justify-between gap-2 border-b border-slate-100 pb-4">
            <div className="flex items-center gap-2">
              <Workflow className="w-4 h-4 text-amber-600" />
              <span className="text-xs font-mono-tech uppercase tracking-wider text-slate-900 font-semibold">
                Sample Commercial Intake Architecture
              </span>
            </div>
            <div className="flex items-center gap-4 text-xs font-body">
              <span className="flex items-center gap-1.5">
                <span className="w-2.5 h-2.5 rounded-full bg-amber-600" />
                <span className="text-slate-700 font-medium">Automated Pipeline</span>
              </span>
              <span className="flex items-center gap-1.5">
                <span className="w-2.5 h-2.5 rounded-full bg-slate-800" />
                <span className="text-slate-700 font-medium">Human Checkpoint</span>
              </span>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-3">
            {automationDiagramSteps.map((step, idx) => {
              const isAuto = step.type === 'system';
              return (
                <div
                  key={idx}
                  className={`p-4 rounded-lg border ${
                    isAuto
                      ? 'border-amber-300 bg-amber-50/40 text-slate-900'
                      : 'border-slate-800 bg-slate-900 text-white'
                  }`}
                >
                  <div className="flex items-center justify-between mb-2">
                    <span className={`text-xs font-mono-tech font-semibold ${isAuto ? 'text-amber-700' : 'text-amber-400'}`}>
                      0{idx + 1}.
                    </span>
                    <span
                      className={`text-[10px] px-2 py-0.5 rounded font-medium ${
                        isAuto
                          ? 'bg-amber-100 text-amber-800'
                          : 'bg-slate-800 text-slate-200'
                      }`}
                    >
                      {isAuto ? 'System' : 'Human'}
                    </span>
                  </div>
                  <div className="font-bold text-sm mb-1 font-body">
                    {step.label}
                  </div>
                  <div className={`text-xs font-body leading-relaxed ${isAuto ? 'text-slate-600' : 'text-slate-300'}`}>
                    {step.desc}
                  </div>
                </div>
              );
            })}
          </div>

          <div className="pt-3 border-t border-slate-100 text-xs text-slate-500 font-body">
            Automating the routine stages of data capture and document assembly, leaving commercial decisions with your team.
          </div>
        </section>

        {/* ─── COMMON OPERATIONAL SYMPTOMS ─────────────────────── */}
        <section className="bg-white border border-slate-200 rounded-xl p-6 sm:p-10 space-y-8 shadow-sm">
          <div className="space-y-2">
            <div className="text-xs font-mono-tech tracking-wider uppercase text-amber-700 font-semibold">
              Operational Symptoms
            </div>
            <h2 className="text-3xl font-bold tracking-tight text-slate-900 font-display">
              Where high-value automation starts.
            </h2>
            <p className="text-sm text-slate-600 font-body max-w-2xl">
              If any of these sound familiar, your team is likely losing productive hours to manual transcription and disjointed tooling:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-3 max-w-4xl">
            {problemStatements.map((stmt, idx) => (
              <div
                key={idx}
                className="p-4 rounded-lg border border-slate-200 bg-slate-50/50 text-sm font-medium text-slate-800 font-body flex items-start gap-3"
              >
                <span className="w-1.5 h-1.5 rounded-full bg-amber-600 mt-2 flex-shrink-0" />
                <span className="leading-relaxed">{stmt}</span>
              </div>
            ))}
          </div>
        </section>

        {/* ─── PRAGMATIC TECHNOLOGY APPROACH ───────────────────── */}
        <section className="space-y-6">
          <div className="text-xs font-mono-tech tracking-wider uppercase text-amber-700 font-semibold">
            Technology Approach
          </div>

          <h2 className="text-3xl font-bold text-slate-900 font-display">
            The process dictates the architecture, not a predetermined vendor.
          </h2>

          <div className="space-y-3 text-base text-slate-600 font-body leading-relaxed max-w-3xl">
            <p>
              I do not sell an inflexible proprietary platform or push unnecessary tools. We start with how your team operates today, identify where information is lost or delayed, and deploy the most maintainable technology for the job.
            </p>
            <p>
              Depending on scale and security requirements, that might mean a lightweight Python script, an automated n8n pipeline, a headless browser monitor, or structured database synchronization.
            </p>
          </div>

          {/* Technology chips */}
          <div className="flex flex-wrap gap-2 pt-2">
            {technologies.map((tech) => (
              <span
                key={tech}
                className="px-3 py-1.5 rounded-md border border-slate-200 bg-white font-mono-tech text-xs text-slate-800 shadow-2xs font-medium"
              >
                {tech}
              </span>
            ))}
          </div>
        </section>

        {/* ─── COMMON WORKFLOWS ────────────────────────────────── */}
        <section className="bg-white border border-slate-200 rounded-xl p-6 sm:p-10 space-y-8 shadow-sm">
          <div className="space-y-2">
            <div className="text-xs font-mono-tech tracking-wider uppercase text-amber-700 font-semibold">
              Candidate Workflows
            </div>
            <h2 className="text-3xl font-bold text-slate-900 font-display">
              Candidate processes for automation
            </h2>
            <p className="text-sm text-slate-600 font-body max-w-2xl">
              Typical workflows where structured automation delivers measurable operational savings:
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 text-sm text-slate-800 font-body">
            {candidateWorkflows.map((item, idx) => (
              <div
                key={idx}
                className="p-3.5 rounded-lg border border-slate-200 bg-slate-50/50 flex items-center gap-3"
              >
                <CheckCircle2 className="w-4 h-4 text-amber-600 flex-shrink-0" />
                <span className="font-medium">{item}</span>
              </div>
            ))}
          </div>
        </section>

        {/* ─── FINAL CTA ───────────────────────────────────────── */}
        <section className="bg-white border border-slate-200 rounded-xl p-8 sm:p-12 space-y-6 shadow-sm">
          <div className="text-xs font-mono-tech tracking-wider uppercase text-amber-700 font-semibold">
            Bespoke Operational Pipelines
          </div>

          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900 font-display">
            Have a specialized or non-standard workflow?
          </h2>

          <p className="text-base text-slate-600 font-body max-w-2xl leading-relaxed">
            The most valuable automations are often the processes off-the-shelf software vendors dismiss as too bespoke or messy. If your team relies on an unusual sequence of scripts, file transformations, or manual checkpoints, let's explore how to make it robust and maintainable.
          </p>

          <div className="pt-2">
            <Link
              to="/contact"
              className="btn-primary px-6 py-3.5 text-sm"
            >
              <span>Describe Your Workflow</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </section>

      </main>
    </div>
  );
};
