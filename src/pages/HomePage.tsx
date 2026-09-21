import React from 'react';
import { ArrowRight, ArrowUpRight, CheckCircle2 } from 'lucide-react';
import { Link } from '../router/Router';
import { SeoHead } from '../components/SeoHead';
import { ProcessDiagram } from '../components/ProcessDiagram';
import { FounderPortrait } from '../components/FounderPortrait';
import { TrustRail } from '../components/TrustRail';
import { PROJECTS } from '../data/projectsData';
import { useI18n } from '../i18n/I18nProvider';

const focusAreas = [
  ['01', 'Industrial systems', 'Move RFQs, tenders, and quotations without losing commercial control.', 'Structured preparation for businesses that make, supply, install, or maintain technical equipment.', '/industry', 'Explore industrial systems'],
  ['02', 'Operational automation', 'Connect the spreadsheets, documents, inboxes, and software your team already uses.', 'Targeted workflows built around the actual handoffs, exceptions, and approvals in your operation.', '/automation', 'Explore automation'],
  ['03', 'Applied training', 'Teach teams how automation works underneath the interface.', 'Practical instruction in APIs, workflow logic, data handling, and responsible AI-assisted systems.', '/teaching', 'Explore training'],
] as const;

const workSteps = [
  ['01', 'Show me the workflow', 'Bring the process as it exists. No polished brief or RFP is required.'],
  ['02', 'Map the bottleneck', 'We identify inputs, handoffs, rules, exceptions, and the output your team needs.'],
  ['03', 'Build the smallest useful system', 'The simplest maintainable path wins, with human review where judgement matters.'],
] as const;

const evidenceOverrides: Record<string, { output: string; outcome: string; outcomeLabel: string }> = {
  'industrial-rfq-intake': {
    output: 'Normalized RFQ draft for an ERP or review queue, ready for estimator verification.',
    outcome: 'Target: reduce estimator preparation from 25 minutes to under 3 minutes of focused verification.',
    outcomeLabel: 'Target outcome',
  },
  'tender-monitoring-engine': {
    output: 'Consolidated opportunity brief and synchronized pipeline table for review.',
    outcome: 'Target: replace 10+ hours of weekly portal checking with a scheduled, filtered review queue.',
    outcomeLabel: 'Target outcome',
  },
  'commercial-quotation-tracker': {
    output: 'A lightweight record of quotation status, engagement, and scheduled follow-up prompts.',
    outcome: 'Build goal: keep approved quotations visible and prompt timely follow-up without adding sales-rep administration.',
    outcomeLabel: 'Build goal',
  },
};

export const HomePage: React.FC = () => {
  const { t } = useI18n();
  const industrialEvidence = PROJECTS.filter((project) => [
    'industrial-rfq-intake',
    'tender-monitoring-engine',
    'commercial-quotation-tracker',
  ].includes(project.slug));

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: 'Odafe Amalega',
    jobTitle: 'Workflow Automation & Systems Engineer',
    url: 'https://www.dafe.name.ng/',
    description: 'Odafe Amalega builds workflow automation, data, and AI-assisted systems for industrial and operational businesses.',
    brand: { '@type': 'Brand', name: 'DafeDeScribe' },
  };

  return (
    <div className="min-h-screen overflow-x-hidden">
      <SeoHead
        title="DafeDeScribe | Workflow Automation & Industrial Systems"
        description="Odafe Amalega builds workflow automation, data, and AI-assisted systems for industrial and operational businesses, and delivers practical technical training."
        canonicalPath="/"
        jsonLd={jsonLd}
      />

      <main className="editorial-home mx-auto max-w-[1440px] px-6 pb-20 pt-10 sm:px-12 sm:pb-28 sm:pt-16 lg:px-16">
        <section className="editorial-hero relative border-b border-stone-300 pb-14 sm:pb-20">
          <div className="grid items-start gap-12 lg:grid-cols-12 lg:gap-16">
            <div className="hero-reveal space-y-7 lg:col-span-7">
              <h1 className="hero-display max-w-[13ch] font-display font-medium leading-[0.94] tracking-[-0.04em] text-slate-950">I build systems for work that has outgrown manual handling.</h1>
              <p className="max-w-2xl text-lg leading-relaxed text-slate-700 sm:text-xl">I turn document-heavy, repetitive operations into clear workflows—especially RFQ intake, tender discovery, quotation coordination, and high-volume data processing.</p>
              <div className="flex flex-wrap items-center gap-3">
                <Link to="/contact" className="btn-primary px-6 py-3.5 text-sm">Discuss a workflow <ArrowRight className="h-4 w-4" aria-hidden="true" /></Link>
                <Link to="/work" className="btn-secondary px-6 py-3.5 text-sm">Explore documented work <ArrowUpRight className="h-4 w-4" aria-hidden="true" /></Link>
              </div>
              <div className="grid max-w-2xl grid-cols-1 gap-3 border-t border-stone-300 pt-5 text-xs text-slate-600 sm:grid-cols-3">
                <div><span className="block font-mono-tech text-[9px] uppercase tracking-wider text-slate-400">Focus</span>Industrial commercial operations</div>
                <div><span className="block font-mono-tech text-[9px] uppercase tracking-wider text-slate-400">Method</span>Automate preparation, retain judgement</div>
                <div><span className="block font-mono-tech text-[9px] uppercase tracking-wider text-slate-400">Delivery</span>{t('home.location')}</div>
              </div>
            </div>
            <div className="hero-reveal-delay lg:col-span-5"><TrustRail /></div>
          </div>
          <div className="mt-9 flex justify-end"><FounderPortrait /></div>
        </section>

        <section className="grid gap-10 border-b border-stone-300 py-16 sm:py-20 lg:grid-cols-12 lg:gap-14">
          <div className="lg:col-span-5">
            <div className="space-y-5 lg:sticky lg:top-28">
              <h2 className="max-w-md font-display text-4xl leading-[1.02] tracking-[-0.035em] text-slate-950 sm:text-5xl">The software follows the work—not the other way around.</h2>
              <p className="max-w-md text-base leading-relaxed text-slate-600">The useful system is the one your team can understand, review, and maintain after handover. Automation prepares the decision; experienced people keep control of it.</p>
            </div>
          </div>
          <div className="lg:col-span-7"><ProcessDiagram type="hero-schematic" /></div>
        </section>

        <section className="border-b border-stone-300 py-16 sm:py-20">
          <div className="mb-10 flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
            <h2 className="max-w-2xl font-display text-4xl leading-tight tracking-[-0.03em] text-slate-950 sm:text-5xl">Start with the operational problem.</h2>
            <p className="max-w-sm text-sm leading-relaxed text-slate-500">No software shopping list required. The workflow determines the architecture.</p>
          </div>
          <div className="divide-y divide-stone-300 border-y border-stone-300 md:grid md:grid-cols-3 md:divide-x md:divide-y-0">
            {focusAreas.map(([index, label, title, copy, to, cta]) => (
              <article key={index} className="group flex min-h-[330px] flex-col px-1 py-7 md:px-7 md:first:pl-0 md:last:pr-0">
                <div className="flex items-center justify-between font-mono-tech text-[10px] font-semibold uppercase tracking-[0.12em] text-slate-500"><span>{index}</span><span>{label}</span></div>
                <h3 className="mt-10 font-display text-2xl leading-tight text-slate-950">{title}</h3>
                <p className="mt-4 text-sm leading-relaxed text-slate-600">{copy}</p>
                <Link to={to} className="mt-auto inline-flex items-center gap-2 pt-8 font-mono-tech text-[10px] font-bold uppercase tracking-[0.12em] text-slate-900 transition-colors hover:text-amber-800">{cta} <ArrowRight className="h-3.5 w-3.5" aria-hidden="true" /></Link>
              </article>
            ))}
          </div>
        </section>

        <section className="border-b border-stone-300 py-16 sm:py-20">
          <div className="grid gap-8 lg:grid-cols-12">
            <div className="lg:col-span-4">
              <h2 className="max-w-md font-display text-4xl leading-tight tracking-[-0.035em] text-slate-950 sm:text-5xl">Systems for the work behind the sale.</h2>
              <p className="mt-5 max-w-sm text-sm leading-relaxed text-slate-600">Each record states its scope. Prototype means prototype; internal build means internal build.</p>
            </div>
            <div className="divide-y divide-stone-300 border-t border-stone-300 lg:col-span-8">
              {industrialEvidence.map((project) => {
                const evidence = evidenceOverrides[project.slug];
                return <article key={project.slug} className="group py-8 first:pt-6">
                  <div className="grid gap-5 sm:grid-cols-[100px_minmax(0,1fr)]">
                    <div className="font-mono-tech text-[10px] uppercase tracking-wider text-slate-500"><div className="font-bold text-amber-800">{project.refId}</div><div className="mt-2">{project.label}</div></div>
                    <div>
                      <h3 className="font-display text-2xl leading-tight text-slate-950 sm:text-3xl">{project.title}</h3>
                      <p className="mt-3 max-w-3xl text-sm leading-relaxed text-slate-600">{project.oneLiner}</p>
                      <dl className="mt-6 grid gap-4 border-y border-stone-200 py-4 text-xs sm:grid-cols-3">
                        <div><dt className="font-mono-tech text-[9px] uppercase tracking-wider text-slate-400">Input</dt><dd className="mt-1.5 leading-relaxed text-slate-700">{project.workflow.input}</dd></div>
                        <div><dt className="font-mono-tech text-[9px] uppercase tracking-wider text-slate-400">Output</dt><dd className="mt-1.5 leading-relaxed text-slate-700">{evidence.output}</dd></div>
                        <div><dt className="font-mono-tech text-[9px] uppercase tracking-wider text-slate-400">{evidence.outcomeLabel}</dt><dd className="mt-1.5 leading-relaxed text-slate-700">{evidence.outcome}</dd></div>
                      </dl>
                      <Link to={`/work/${project.slug}`} className="mt-5 inline-flex items-center gap-2 font-mono-tech text-[10px] font-bold uppercase tracking-[0.12em] text-slate-900 hover:text-amber-800">Read the workflow breakdown <ArrowUpRight className="h-3.5 w-3.5" aria-hidden="true" /></Link>
                    </div>
                  </div>
                </article>;
              })}
            </div>
          </div>
        </section>

        <section className="grid gap-12 border-b border-stone-300 py-16 sm:py-20 lg:grid-cols-12">
          <div className="lg:col-span-4"><h2 className="max-w-sm font-display text-4xl leading-tight tracking-[-0.035em] text-slate-950">From friction to a maintainable build.</h2></div>
          <ol className="divide-y divide-stone-300 border-y border-stone-300 lg:col-span-8">
            {workSteps.map(([number, title, copy]) => <li key={number} className="grid gap-3 py-6 sm:grid-cols-[64px_220px_minmax(0,1fr)] sm:items-baseline"><span className="font-mono-tech text-xs font-bold text-amber-800">{number}</span><h3 className="font-display text-xl text-slate-950">{title}</h3><p className="text-sm leading-relaxed text-slate-600">{copy}</p></li>)}
          </ol>
        </section>

        <section className="grid gap-8 border-b border-stone-300 py-16 sm:py-20 lg:grid-cols-12">
          <div className="lg:col-span-5"><h2 className="max-w-3xl font-display text-4xl leading-tight tracking-[-0.035em] text-slate-950 sm:text-5xl">Teams learn the workflow, not just the tool.</h2><p className="mt-5 max-w-2xl text-base leading-relaxed text-slate-600">Through AppClick Technology, I teach practical automation, APIs, data handling, and AI-assisted engineering to professionals who need systems literacy they can apply.</p><Link to="/teaching" className="btn-secondary mt-7 px-5 py-3 text-sm">Explore applied training <ArrowUpRight className="h-4 w-4" aria-hidden="true" /></Link></div>
          <dl className="divide-y divide-stone-300 border-y border-stone-300 lg:col-span-7">
            <div className="grid gap-2 py-5 sm:grid-cols-[120px_minmax(0,1fr)]"><dt className="font-mono-tech text-xs font-semibold uppercase tracking-wider text-amber-800">Context</dt><dd className="text-sm leading-relaxed text-slate-700">Current applied AI and automation instruction through AppClick Technology.</dd></div>
            <div className="grid gap-2 py-5 sm:grid-cols-[120px_minmax(0,1fr)]"><dt className="font-mono-tech text-xs font-semibold uppercase tracking-wider text-amber-800">Curriculum</dt><dd className="text-sm leading-relaxed text-slate-700">Workflow mental models, API anatomy, webhooks, structured outputs, validation, and responsible error handling.</dd></div>
            <div className="grid gap-2 py-5 sm:grid-cols-[120px_minmax(0,1fr)]"><dt className="font-mono-tech text-xs font-semibold uppercase tracking-wider text-amber-800">Delivery</dt><dd className="text-sm leading-relaxed text-slate-700">Project-based instruction for professionals with varied technical backgrounds.</dd></div>
          </dl>
        </section>

        <section className="relative my-16 overflow-hidden bg-slate-950 px-7 py-10 text-white sm:my-20 sm:px-12 sm:py-14">
          <div className="absolute right-0 top-0 h-64 w-64 translate-x-1/3 -translate-y-1/3 rounded-full border border-amber-400/30" aria-hidden="true" />
          <div className="relative grid gap-8 lg:grid-cols-12 lg:items-end">
            <div className="lg:col-span-8"><h2 className="max-w-3xl font-display text-4xl leading-tight tracking-[-0.035em] sm:text-5xl">What keeps getting copied, checked, searched, or re-entered?</h2><p className="mt-5 max-w-2xl text-sm leading-relaxed text-slate-300">Describe what happens today. I will help identify where automation is useful, where human control must stay, and the smallest sensible path forward.</p></div>
            <div className="space-y-4 lg:col-span-4 lg:text-right"><Link to="/contact" className="inline-flex min-h-12 items-center justify-center gap-2 bg-amber-600 px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-amber-700">Show me the workflow <ArrowRight className="h-4 w-4" aria-hidden="true" /></Link><div className="flex items-center gap-2 text-xs text-slate-400 lg:justify-end"><CheckCircle2 className="h-4 w-4 text-amber-400" aria-hidden="true" /> No polished brief required</div></div>
          </div>
        </section>
      </main>
    </div>
  );
};
