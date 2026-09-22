import React from 'react';
import { ArrowRight, ArrowUpRight } from 'lucide-react';
import { CompactCta } from '../components/CompactCta';
import { EditorialSection } from '../components/EditorialSection';
import { FounderPortrait } from '../components/FounderPortrait';
import { SeoHead } from '../components/SeoHead';
import { TrustRail } from '../components/TrustRail';
import { PROJECTS } from '../data/projectsData';
import { useI18n } from '../i18n/I18nProvider';
import { Link } from '../router/Router';

const workSteps = [
  ['01', 'Show the workflow', 'Bring the process as it exists. No polished brief or RFP is required.'],
  ['02', 'Map the bottleneck', 'We identify inputs, handoffs, rules, exceptions, and the output your team needs.'],
  ['03', 'Build the smallest useful system', 'The maintainable path wins, with human review wherever judgement matters.'],
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
  const featuredSystems = PROJECTS.filter((project) => [
    'industrial-rfq-intake',
    'tender-monitoring-engine',
    'commercial-quotation-tracker',
  ].includes(project.slug));

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: 'Anthony Amalega',
    jobTitle: 'Workflow Automation & Systems Engineer',
    url: 'https://www.dafe.name.ng/',
    description: 'Anthony Amalega builds workflow automation, data, and AI-assisted systems for industrial and operational businesses.',
    brand: { '@type': 'Brand', name: 'DafeDeScribe' },
  };

  return (
    <div className="min-h-screen overflow-x-hidden">
      <SeoHead
        title="DafeDeScribe | Workflow Automation & Industrial Systems"
        description="Anthony Amalega builds workflow automation, data, and AI-assisted systems for industrial and operational businesses, and delivers practical technical training."
        canonicalPath="/"
        jsonLd={jsonLd}
      />

      <main className="editorial-home mx-auto max-w-[1440px] px-6 pb-16 pt-10 sm:px-12 sm:pb-20 sm:pt-14 lg:px-16">
        <section className="editorial-hero border-b border-stone-300 pb-12 sm:pb-14">
          <div className="grid items-start gap-10 lg:grid-cols-12 lg:gap-14">
            <div className="hero-reveal space-y-6 lg:col-span-7">
              <h1 className="hero-display max-w-[13ch] font-display font-medium leading-[0.94] tracking-[-0.04em] text-slate-950">I build systems for work that has outgrown manual handling.</h1>
              <p className="max-w-2xl text-lg leading-relaxed text-slate-700 sm:text-xl">I turn document-heavy, repetitive operations into clear workflows—especially RFQ intake, tender discovery, quotation coordination, and high-volume data processing.</p>
              <div className="flex flex-wrap items-center gap-3">
                <Link to="/contact" className="btn-primary px-6 py-3.5 text-sm">Discuss a workflow <ArrowRight className="h-4 w-4" aria-hidden="true" /></Link>
                <Link to="/work" className="btn-secondary px-6 py-3.5 text-sm">Explore documented work <ArrowUpRight className="h-4 w-4" aria-hidden="true" /></Link>
              </div>
              <dl className="grid max-w-2xl gap-3 border-t border-stone-300 pt-5 text-xs text-slate-600 sm:grid-cols-3">
                <div><dt className="font-mono-tech text-xs uppercase tracking-wider text-slate-500">Focus</dt><dd className="mt-1">Industrial commercial operations</dd></div>
                <div><dt className="font-mono-tech text-xs uppercase tracking-wider text-slate-500">Method</dt><dd className="mt-1">Automate preparation, retain judgement</dd></div>
                <div><dt className="font-mono-tech text-xs uppercase tracking-wider text-slate-500">Delivery</dt><dd className="mt-1">{t('home.location')}</dd></div>
              </dl>
            </div>
            <div className="hero-reveal-delay lg:col-span-5"><TrustRail /></div>
          </div>
          <div className="mt-8 flex justify-end"><FounderPortrait /></div>
        </section>

        <EditorialSection
          id="home-selected-work"
          label="Selected systems"
          title="Evidence from the work behind the sale."
          intro="Three documented systems show the input, useful output, and honest scope. Detailed architecture stays on each project page."
        >
          <div className="divide-y divide-stone-300 border-y border-stone-300">
            {featuredSystems.map((project) => {
              const evidence = evidenceOverrides[project.slug];
              return (
                <article key={project.slug} data-featured-system="true" className="grid gap-5 py-7 lg:grid-cols-[150px_minmax(0,1fr)_minmax(220px,0.55fr)] lg:items-start">
                  <div className="font-mono-tech text-xs uppercase tracking-wider text-slate-500">
                    <div className="font-bold text-amber-800">{project.refId}</div>
                    <div className="mt-2">{project.label}</div>
                  </div>
                  <div>
                    <h3 className="font-display text-2xl leading-tight text-slate-950 sm:text-3xl">{project.title}</h3>
                    <p className="mt-3 max-w-2xl text-sm leading-relaxed text-slate-600">{project.oneLiner}</p>
                    <Link to={`/work/${project.slug}`} className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-slate-950 hover:text-amber-800">Read the workflow breakdown <ArrowUpRight className="h-4 w-4" aria-hidden="true" /></Link>
                  </div>
                  <dl className="space-y-4 border-t border-stone-200 pt-4 text-xs lg:border-l lg:border-t-0 lg:pl-6 lg:pt-0">
                    <div><dt className="font-mono-tech uppercase tracking-wider text-slate-500">Output</dt><dd className="mt-1.5 leading-relaxed text-slate-700">{evidence.output}</dd></div>
                    <div><dt className="font-mono-tech uppercase tracking-wider text-slate-500">{evidence.outcomeLabel}</dt><dd className="mt-1.5 leading-relaxed text-slate-700">{evidence.outcome}</dd></div>
                  </dl>
                </article>
              );
            })}
          </div>
        </EditorialSection>

        <EditorialSection id="home-method" title="From friction to a maintainable build." intro="The engagement starts with the real process, not a predetermined software stack.">
          <ol className="divide-y divide-stone-300 border-y border-stone-300">
            {workSteps.map(([number, title, copy]) => (
              <li key={number} className="grid gap-3 py-5 sm:grid-cols-[64px_240px_minmax(0,1fr)] sm:items-baseline">
                <span className="font-mono-tech text-xs font-bold text-amber-800">{number}</span>
                <h3 className="font-display text-xl text-slate-950">{title}</h3>
                <p className="text-sm leading-relaxed text-slate-600">{copy}</p>
              </li>
            ))}
          </ol>
        </EditorialSection>

        <EditorialSection id="home-training" label="Applied teaching" title="Teams learn the workflow, not just the tool.">
          <div className="grid gap-6 lg:grid-cols-12 lg:items-center">
            <p className="max-w-2xl text-base leading-relaxed text-slate-700 lg:col-span-8">Through AppClick Technology, I teach practical automation, APIs, data handling, and AI-assisted engineering to professionals who need systems literacy they can apply.</p>
            <div className="lg:col-span-4 lg:text-right"><Link to="/teaching" className="btn-secondary px-5 py-3 text-sm">Explore applied training <ArrowUpRight className="h-4 w-4" aria-hidden="true" /></Link></div>
          </div>
        </EditorialSection>

        <div id="home-contact" className="pt-12 sm:pt-16">
          <CompactCta
            title="What keeps getting copied, checked, searched, or re-entered?"
            copy="Describe what happens today. I will identify where automation is useful, where human control must stay, and the smallest sensible path forward."
            actionLabel="Show me the workflow"
            actionTo="/contact"
            secondaryLabel="Review documented work"
            secondaryTo="/work"
          />
        </div>
      </main>
    </div>
  );
};
