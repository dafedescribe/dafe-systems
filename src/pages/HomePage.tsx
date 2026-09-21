import React from 'react';
import { Link } from '../router/Router';
import { SeoHead } from '../components/SeoHead';
import { ProcessDiagram } from '../components/ProcessDiagram';
import { ArrowRight, ArrowUpRight, CheckCircle2, ShieldCheck, Award } from 'lucide-react';
import { PROJECTS } from '../data/projectsData';
import { useI18n } from '../i18n/I18nProvider';
import { WorkflowEvidence, WorkflowEvidenceHeading } from '../components/WorkflowEvidence';

export const HomePage: React.FC = () => {
  const { t } = useI18n();
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: 'Odafe Amalega',
    jobTitle: 'AI Workflow Engineer · Systems Builder · Educator',
    worksFor: {
      '@type': 'Organization',
      name: 'AppClick'
    },
    url: 'https://www.dafe.name.ng/',
    description: 'Odafe Amalega builds workflow automation, data and AI systems for industrial and operational businesses, and delivers practical AI and automation training.',
    brand: {
      '@type': 'Brand',
      name: 'DafeDeScribe'
    }
  };

  const industrialEvidence = PROJECTS.filter((p) => ['industrial-rfq-intake', 'tender-monitoring-engine', 'commercial-quotation-tracker'].includes(p.slug));

  return (
    <div className="min-h-screen">
      <SeoHead
        title="DafeDeScribe | Workflow Automation, Industrial Systems & AI Training"
        description="Odafe Amalega builds workflow automation, data and AI systems for industrial and operational businesses, and delivers practical AI and automation training."
        canonicalPath="/"
        jsonLd={jsonLd}
      />

      <main className="max-w-[1440px] mx-auto px-6 sm:px-12 lg:px-16 py-12 sm:py-20 space-y-20 sm:space-y-28">
        
        {/* ─── SECTION 1: HERO (7 / 5 SPREAD) ──────────────────── */}
        <section className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start pt-2 sm:pt-6">
          
          {/* Left: 7 Columns Headline & Copy */}
          <div className="lg:col-span-7 space-y-6">
            <div className="text-xs font-mono-tech uppercase tracking-wider text-amber-700 font-semibold flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-amber-600" />
              <span>{t('home.eyebrow')}</span>
            </div>

            <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-xs font-mono-tech uppercase tracking-[0.08em] text-slate-500">
              <span>{t('home.location')}</span>
              <span className="hidden sm:inline text-slate-300">/</span>
              <span>Remote-ready · Global delivery</span>
            </div>

            <h1 className="text-4xl sm:text-6xl lg:text-[64px] font-bold tracking-tight text-slate-900 font-display leading-[1.08]">
              {t('home.title')}
            </h1>

            <div className="space-y-4 text-base sm:text-lg text-slate-700 font-body leading-relaxed max-w-2xl">
              <p>
                I design workflow automation, data pipelines, and AI systems around operational processes that still depend heavily on staff copying, checking, searching, and re-entering data across spreadsheets and documents.
              </p>
              <p className="text-slate-500">
                My primary focus is the commercial side of industrial, engineering, and supply businesses. Alongside client builds, I instruct teams at AppClick Technology on how these systems operate in practice.
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-3 pt-2">
              <Link
                to="/contact"
                className="btn-primary px-6 py-3.5 text-sm"
              >
                <span>{t('home.primaryCta')}</span>
                <ArrowRight className="w-4 h-4" />
              </Link>

              <Link
                to="/work"
                className="btn-secondary px-6 py-3.5 text-sm"
              >
                <span>{t('home.secondaryCta')}</span>
                <ArrowUpRight className="w-4 h-4 text-slate-500" />
              </Link>
            </div>

            <div className="pt-4 border-t border-slate-200 text-xs text-slate-500 font-body">
              Specialized in Industrial Commercial Operations, Data Pipelines & Technical Education
            </div>
          </div>

          {/* Right: 5 Columns Architecture Companion */}
          <div className="lg:col-span-5 lg:sticky lg:top-28">
            <ProcessDiagram type="hero-schematic" />
          </div>
        </section>

        {/* ─── SECTION 2: THREE COMMERCIAL ENTRY POINTS ────────── */}
        <section className="space-y-6">
          <div className="flex items-center justify-between border-b border-slate-200 pb-3">
            <div className="text-xs font-mono-tech tracking-wider uppercase text-slate-500 font-semibold">
              Commercial Focus Areas
            </div>
            <div className="text-xs text-amber-700 font-medium font-mono-tech">
              Core Capabilities
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            
            {/* Entry 1: Industry */}
            <div className="bg-white border border-slate-200 rounded-xl p-6 sm:p-8 flex flex-col justify-between hover:border-slate-400 hover:shadow-md transition-all">
              <div className="space-y-3">
                <span className="text-xs font-mono-tech text-amber-700 uppercase font-semibold">
                  Industrial Systems
                </span>
                <h2 className="text-2xl font-bold text-slate-900 font-display leading-tight">
                  Commercial workflows for businesses that make, supply, and install equipment.
                </h2>
                <p className="text-sm text-slate-600 leading-relaxed font-body">
                  Automating RFQ extraction, tender monitoring, structured quotation generation, and follow-up tracking.
                </p>
              </div>
              <div className="pt-6">
                <Link
                  to="/industry"
                  className="inline-flex items-center gap-2 text-xs font-mono-tech uppercase tracking-wider text-slate-900 font-semibold hover:text-amber-700 transition-colors"
                >
                  <span>Explore Industry Systems</span>
                  <span>→</span>
                </Link>
              </div>
            </div>

            {/* Entry 2: Automation */}
            <div className="bg-white border border-slate-200 rounded-xl p-6 sm:p-8 flex flex-col justify-between hover:border-slate-400 hover:shadow-md transition-all">
              <div className="space-y-3">
                <span className="text-xs font-mono-tech text-amber-700 uppercase font-semibold">
                  Operational Automation
                </span>
                <h2 className="text-2xl font-bold text-slate-900 font-display leading-tight">
                  Repetitive processes, fragmented data, and systems that refuse to talk.
                </h2>
                <p className="text-sm text-slate-600 leading-relaxed font-body">
                  Targeted workflows built with Python, APIs, n8n, webhooks, and deterministic AI parsing for operational operations.
                </p>
              </div>
              <div className="pt-6">
                <Link
                  to="/automation"
                  className="inline-flex items-center gap-2 text-xs font-mono-tech uppercase tracking-wider text-slate-900 font-semibold hover:text-amber-700 transition-colors"
                >
                  <span>Explore Automation</span>
                  <span>→</span>
                </Link>
              </div>
            </div>

            {/* Entry 3: Teaching */}
            <div className="bg-white border border-slate-200 rounded-xl p-6 sm:p-8 flex flex-col justify-between hover:border-slate-400 hover:shadow-md transition-all">
              <div className="space-y-3">
                <span className="text-xs font-mono-tech text-amber-700 uppercase font-semibold">
                  Applied Training
                </span>
                <h2 className="text-2xl font-bold text-slate-900 font-display leading-tight">
                  Understanding what actually happens underneath the AI button.
                </h2>
                <p className="text-sm text-slate-600 leading-relaxed font-body">
                  Practical corporate training covering APIs, automation logic, data handling, and AI-assisted engineering for teams.
                </p>
              </div>
              <div className="pt-6">
                <Link
                  to="/teaching"
                  className="inline-flex items-center gap-2 text-xs font-mono-tech uppercase tracking-wider text-slate-900 font-semibold hover:text-amber-700 transition-colors"
                >
                  <span>Explore Training</span>
                  <span>→</span>
                </Link>
              </div>
            </div>

          </div>
        </section>

        {/* ─── SECTION 3: CREDIBILITY BAND ─────────────────────── */}
        <section className="bg-slate-50 border border-slate-200 rounded-xl p-6 sm:p-8 space-y-4">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-slate-200 pb-3">
            <h2 className="text-xs font-mono-tech uppercase tracking-wider text-slate-900 font-semibold">
              Background & Credentials
            </h2>
            <span className="text-xs text-slate-500 font-body">
              Professional roles, engineering degree & accredited programmes
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 pt-2">
            {/* AppClick */}
            <div className="p-5 bg-white border border-slate-200 rounded-lg shadow-2xs space-y-2">
              <div className="flex items-center justify-between">
                <span className="text-xs font-mono-tech text-amber-700 font-semibold">
                  Current Role
                </span>
                <span className="text-[10px] px-2 py-0.5 bg-slate-900 text-white rounded font-medium">
                  Instruction
                </span>
              </div>
              <div className="text-base font-bold text-slate-900 font-body">
                AppClick Technology
              </div>
              <div className="text-xs text-slate-500 font-body">
                Technical instruction, practical workflow curriculum, and applied AI literacy for professionals.
              </div>
            </div>

            {/* University */}
            <div className="p-5 bg-white border border-slate-200 rounded-lg shadow-2xs space-y-2">
              <div className="text-xs font-mono-tech text-slate-500 font-semibold">
                Academic Degree
              </div>
              <div className="text-base font-bold text-slate-900 font-body">
                Federal University Oye-Ekiti
              </div>
              <div className="text-xs text-slate-500 font-body">
                Bachelor of Engineering (B.Eng). Analytical systems modelling and mechanical engineering foundations.
              </div>
            </div>

            {/* ALX */}
            <div className="p-5 bg-white border border-slate-200 rounded-lg shadow-2xs space-y-2">
              <div className="text-xs font-mono-tech text-slate-500 font-semibold">
                Professional Certification
              </div>
              <div className="text-base font-bold text-slate-900 font-body">
                ALX Programmes
              </div>
              <div className="text-xs text-slate-500 font-body">
                Accredited tracks in AI Career Essentials, Data Analytics, and distributed digital workflow execution.
              </div>
            </div>
          </div>
        </section>

        {/* ─── SECTION 4: INDUSTRIAL WORKFLOW EVIDENCE ─────────── */}
        <section className="space-y-6">
          <div className="flex items-center justify-between border-b border-slate-200 pb-3">
            <div className="text-xs font-mono-tech tracking-wider uppercase text-amber-700 font-semibold">
              Workflow Evidence
            </div>
            <div className="text-xs text-slate-500 font-mono-tech">
              Industrial commercial operations
            </div>
          </div>

          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900 font-display">
            Systems for the work behind the sale.
          </h2>
          <p className="max-w-3xl text-base text-slate-600 font-body leading-relaxed">
            These documented builds show how messy inputs become reviewable outputs across RFQ intake, tender discovery, and quotation coordination. The status on each card tells you what is a prototype, internal build, or training asset.
          </p>

          <div className="space-y-5">
            {industrialEvidence.map((project) => (
              <article key={project.slug} className="bg-white border border-slate-200 rounded-xl p-6 sm:p-8 hover:border-slate-400 hover:shadow-md transition-all space-y-5">
                <div className="flex flex-wrap items-center justify-between gap-3">
                  <div className="flex items-center gap-2 font-mono-tech text-xs"><span className="text-amber-700 font-semibold">{project.refId}</span><span className="text-slate-300">|</span><span className="text-slate-500">{project.tag}</span></div>
                  <span className="text-xs px-2.5 py-0.5 bg-slate-100 text-slate-700 rounded-full font-medium">{project.label}</span>
                </div>
                <div><h3 className="text-2xl sm:text-3xl font-bold text-slate-900 font-display mb-2">{project.title}</h3><p className="text-sm sm:text-base text-slate-600 leading-relaxed max-w-3xl font-body">{project.oneLiner}</p></div>
                <WorkflowEvidence project={project} compact />
                <Link to={`/work/${project.slug}`} className="inline-flex items-center gap-2 text-xs font-mono-tech uppercase tracking-wider text-slate-900 font-semibold hover:text-amber-700 transition-colors"><span>Read the workflow breakdown</span><span>→</span></Link>
              </article>
            ))}
          </div>
        </section>

        {/* ─── SECTION 5: HOW I WORK ──────────────────────────── */}
        <section className="space-y-6">
          <WorkflowEvidenceHeading />
          <div className="flex items-center justify-between"><div className="text-xs font-mono-tech tracking-wider uppercase text-amber-700 font-semibold">How I work</div><Link to="/contact" className="text-xs font-mono-tech uppercase tracking-wider text-slate-900 font-semibold hover:text-amber-700">Start with a conversation →</Link></div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900 font-display">A clear path from operational friction to a maintainable build.</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {[
              ['01', 'Show me the workflow', 'Bring the manual process as it exists. You do not need a polished brief or RFP.'],
              ['02', 'Map the bottleneck', 'We identify the inputs, handoffs, rules, exceptions, and the output your team actually needs.'],
              ['03', 'Build the smallest useful system', 'I recommend the simplest maintainable path, with human review where commercial judgement matters.']
            ].map(([number, title, copy]) => <div key={number} className="bg-white border border-slate-200 rounded-xl p-6 space-y-3"><div className="text-xs font-mono-tech text-amber-700 font-semibold">{number}</div><h3 className="text-xl font-bold text-slate-900 font-display">{title}</h3><p className="text-sm text-slate-600 font-body leading-relaxed">{copy}</p></div>)}
          </div>
        </section>

        {/* ─── SECTION 6: TRAINING PROOF ───────────────────────── */}
        <section className="bg-slate-50 border border-slate-200 rounded-xl p-6 sm:p-8 flex flex-col sm:flex-row sm:items-end sm:justify-between gap-5">
          <div className="space-y-2 max-w-2xl"><div className="text-xs font-mono-tech uppercase tracking-wider text-amber-700 font-semibold">Training that produces working systems</div><h2 className="text-2xl sm:text-3xl font-bold text-slate-900 font-display">Teams learn the workflow, not just the tool.</h2><p className="text-sm text-slate-600 font-body leading-relaxed">Through AppClick Technology, I teach practical automation, APIs, data handling, and AI-assisted engineering to professionals who need systems literacy they can apply.</p></div>
          <Link to="/teaching" className="btn-secondary px-5 py-3 text-sm flex-shrink-0">Explore applied training <ArrowUpRight className="w-4 h-4" /></Link>
        </section>

        {/* ─── SECTION 7: BUILDER PROFILE SUMMARY ──────────────── */}
        <section className="border-t border-slate-200 pt-12 space-y-6 max-w-3xl">
          <div className="text-xs font-mono-tech uppercase tracking-wider text-amber-700 font-semibold">
            About the Builder
          </div>

          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900 font-display">
            Odafe Amalega
          </h2>

          <div className="space-y-4 text-base text-slate-700 font-body leading-relaxed">
            <p>
              I work across workflow automation, APIs, Python, data pipelines, and AI systems for operational businesses.
            </p>
            <p>
              My focus is the intersection where a high-value commercial process has become too repetitive or fragmented to keep handling by hand, but where automated tools must operate reliably without risking commercial errors.
            </p>
            <p>
              Alongside engineering systems, I teach applied automation at AppClick Technology, grounding non-technical professionals and operational managers in practical systems literacy.
            </p>
          </div>

          <div className="pt-2">
            <Link
              to="/about"
              className="inline-flex items-center gap-2 text-xs font-mono-tech uppercase tracking-wider text-slate-900 font-semibold hover:text-amber-700 transition-colors"
            >
              <span>View full profile & credentials</span>
              <span>→</span>
            </Link>
          </div>
        </section>

        {/* ─── SECTION 8: FINAL CTA ────────────────────────────── */}
        <section className="bg-white border border-slate-200 rounded-xl p-8 sm:p-14 space-y-6 shadow-sm">
          <div className="text-xs font-mono-tech tracking-wider uppercase text-amber-700 font-semibold">
            Start a Conversation
          </div>

          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900 font-display">
            Have a workflow ready to automate?
          </h2>

          <div className="space-y-3 text-base sm:text-lg text-slate-600 font-body max-w-2xl leading-relaxed">
            <p>
              Describe a manual process currently slowing down your operations. Share what information comes in, where it bottlenecks, and what final output your team needs.
            </p>
            <p className="text-sm text-slate-500">
              You do not need to know whether the right answer is Python, an API integration, an n8n pipeline, or an AI model — we will evaluate the technical feasibility and suggest the most maintainable path.
            </p>
          </div>

          <div className="pt-2">
            <Link
              to="/contact"
              className="btn-primary px-7 py-4 text-sm"
            >
              <span>Discuss Your Workflow</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </section>

      </main>
    </div>
  );
};
