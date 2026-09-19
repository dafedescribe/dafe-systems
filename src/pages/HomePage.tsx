import React from 'react';
import { Link } from '../router/Router';
import { SeoHead } from '../components/SeoHead';
import { ProcessDiagram } from '../components/ProcessDiagram';
import { ArrowRight, ArrowUpRight } from 'lucide-react';
import { PROJECTS } from '../data/projectsData';

export const HomePage: React.FC = () => {
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

  const proofItems = PROJECTS.filter((p) => p.featuredOnHome).slice(0, 3);

  return (
    <div className="min-h-screen">
      <SeoHead
        title="DafeDeScribe | Workflow Automation, Industrial Systems & AI Training"
        description="Odafe Amalega builds workflow automation, data and AI systems for industrial and operational businesses, and delivers practical AI and automation training."
        canonicalPath="/"
        jsonLd={jsonLd}
      />

      <main className="max-w-[1440px] mx-auto px-6 sm:px-12 lg:px-16 py-12 sm:py-20 space-y-24 sm:space-y-32">
        
        {/* ─── SECTION 1: HERO (7 / 5 CATALOGUE SPREAD) ────────── */}
        <section className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start pt-2 sm:pt-6">
          
          {/* Left: 7 Columns Headline & Copy */}
          <div className="lg:col-span-7 space-y-6">
            <div className="font-mono-tech text-xs tracking-[0.12em] uppercase text-[#B58A2A] flex items-center gap-2">
              <span className="w-1.5 h-1.5 bg-[#B58A2A]" />
              <span>DAFEDESCRIBE / ODAFE AMALEGA</span>
            </div>

            <h1 className="text-4xl sm:text-6xl lg:text-[68px] font-bold tracking-tight text-[#181816] font-display leading-[1.08]">
              I build systems for work that has outgrown manual handling.
            </h1>

            <div className="space-y-3 text-base sm:text-lg text-[#33312C] font-body leading-relaxed max-w-2xl">
              <p>
                I design automation, data and AI workflows around business processes that still depend too heavily on people copying, checking, searching, following up and rebuilding information.
              </p>
              <p className="text-[#77736A]">
                My deepest current focus is the commercial side of industrial and operational businesses. I also teach teams how these systems actually work.
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-3 pt-2">
              <Link
                to="/contact"
                className="btn-primary px-6 py-3.5"
              >
                <span>Show Me the Workflow</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>

              <Link
                to="/work"
                className="btn-secondary px-6 py-3.5"
              >
                <span>See What I've Built</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </Link>
            </div>

            <div className="pt-4 border-t border-[#D9D4C8] font-mono-tech text-xs text-[#77736A] tracking-[0.06em]">
              AI Workflow Engineer · Systems Builder · Educator
            </div>
          </div>

          {/* Right: 5 Columns Schematic Companion */}
          <div className="lg:col-span-5 lg:sticky lg:top-28">
            <ProcessDiagram type="hero-schematic" />
          </div>
        </section>

        {/* ─── SECTION 2: THREE COMMERCIAL ENTRY POINTS ────────── */}
        <section className="space-y-6">
          <div className="flex items-center justify-between border-b border-[#D9D4C8] pb-3">
            <div className="font-mono-tech text-xs tracking-[0.1em] uppercase text-[#77736A]">
              [COMMERCIAL ENTRY POINTS]
            </div>
            <div className="font-mono-tech text-xs text-[#B58A2A]">
              CATALOGUE SECTION 01–03
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            
            {/* Entry 1: Industry */}
            <div className="catalogue-sheet p-6 sm:p-8 flex flex-col justify-between group hover:border-[#181816] transition-colors">
              <div className="space-y-4">
                <div className="font-mono-tech text-xs text-[#B58A2A] uppercase font-semibold">
                  01 / INDUSTRY
                </div>
                <h2 className="text-2xl sm:text-3xl font-bold text-[#181816] font-display leading-tight">
                  Commercial systems for businesses that make, supply and install things.
                </h2>
                <p className="text-sm text-[#77736A] leading-relaxed font-body">
                  RFQs, tenders, quotations, opportunity monitoring, follow-up and commercial reporting.
                </p>
              </div>
              <div className="pt-8">
                <Link
                  to="/industry"
                  className="inline-flex items-center gap-2 text-xs font-mono-tech uppercase tracking-[0.08em] text-[#181816] font-semibold group-hover:text-[#B58A2A] transition-colors"
                >
                  <span>Explore Industry Systems</span>
                  <span>→</span>
                </Link>
              </div>
            </div>

            {/* Entry 2: Automation */}
            <div className="catalogue-sheet p-6 sm:p-8 flex flex-col justify-between group hover:border-[#181816] transition-colors">
              <div className="space-y-4">
                <div className="font-mono-tech text-xs text-[#B58A2A] uppercase font-semibold">
                  02 / AUTOMATION
                </div>
                <h2 className="text-2xl sm:text-3xl font-bold text-[#181816] font-display leading-tight">
                  Repetitive process? Strange workflow? Systems that refuse to talk?
                </h2>
                <p className="text-sm text-[#77736A] leading-relaxed font-body">
                  I build targeted workflows using automation, APIs, code, data and AI where useful.
                </p>
              </div>
              <div className="pt-8">
                <Link
                  to="/automation"
                  className="inline-flex items-center gap-2 text-xs font-mono-tech uppercase tracking-[0.08em] text-[#181816] font-semibold group-hover:text-[#B58A2A] transition-colors"
                >
                  <span>Explore Automation</span>
                  <span>→</span>
                </Link>
              </div>
            </div>

            {/* Entry 3: Teaching */}
            <div className="catalogue-sheet p-6 sm:p-8 flex flex-col justify-between group hover:border-[#181816] transition-colors">
              <div className="space-y-4">
                <div className="font-mono-tech text-xs text-[#B58A2A] uppercase font-semibold">
                  03 / TEACHING
                </div>
                <h2 className="text-2xl sm:text-3xl font-bold text-[#181816] font-display leading-tight">
                  Learn what is actually happening underneath the AI button.
                </h2>
                <p className="text-sm text-[#77736A] leading-relaxed font-body">
                  Practical training in AI, automation, APIs, digital productivity and AI-assisted building.
                </p>
              </div>
              <div className="pt-8">
                <Link
                  to="/teaching"
                  className="inline-flex items-center gap-2 text-xs font-mono-tech uppercase tracking-[0.08em] text-[#181816] font-semibold group-hover:text-[#B58A2A] transition-colors"
                >
                  <span>Explore Teaching</span>
                  <span>→</span>
                </Link>
              </div>
            </div>

          </div>
        </section>

        {/* ─── SECTION 3: CREDIBILITY BAND ─────────────────────── */}
        <section className="catalogue-inset p-6 sm:p-8 space-y-4">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-[#D9D4C8] pb-3">
            <h2 className="font-mono-tech text-xs uppercase tracking-[0.1em] text-[#181816] font-semibold">
              WORK & EXPERIENCE
            </h2>
            <span className="font-mono-tech text-xs text-[#77736A]">
              Work, employment and project experience includes
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 pt-2">
            {/* AppClick */}
            <div className="p-4 bg-[#FFFFFF] border border-[#D9D4C8]">
              <div className="flex items-center justify-between mb-2">
                <span className="font-mono-tech text-xs text-[#B58A2A] font-semibold">
                  [ACTIVE ROLE]
                </span>
                <span className="font-mono-tech text-[10px] px-2 py-0.5 bg-[#181816] text-[#FCFBF7]">
                  EMPLOYMENT
                </span>
              </div>
              <div className="text-base font-bold text-[#181816] font-body">
                AppClick
              </div>
              <div className="text-xs text-[#77736A] mt-1 font-mono-tech">
                Currently at AppClick
              </div>
              <p className="text-xs text-[#77736A] mt-2 font-body">
                Technical instruction, practical workflow curriculum, and systems literacy.
              </p>
            </div>

            {/* University */}
            <div className="p-4 bg-[#FFFFFF] border border-[#D9D4C8]">
              <div className="font-mono-tech text-xs text-[#77736A] font-semibold mb-2">
                [EDUCATION]
              </div>
              <div className="text-base font-bold text-[#181816] font-body">
                Federal University Oye-Ekiti
              </div>
              <div className="text-xs text-[#77736A] mt-1 font-mono-tech">
                Bachelor of Engineering (B.Eng)
              </div>
              <p className="text-xs text-[#77736A] mt-2 font-body">
                Engineering foundations, analytical modelling, and physical systems analysis.
              </p>
            </div>

            {/* ALX */}
            <div className="p-4 bg-[#FFFFFF] border border-[#D9D4C8]">
              <div className="font-mono-tech text-xs text-[#77736A] font-semibold mb-2">
                [PROFESSIONAL]
              </div>
              <div className="text-base font-bold text-[#181816] font-body">
                ALX Training
              </div>
              <div className="text-xs text-[#77736A] mt-1 font-mono-tech">
                Virtual Assistance & Operations
              </div>
              <p className="text-xs text-[#77736A] mt-2 font-body">
                Distributed workflows, asynchronous digital coordination, and systems execution.
              </p>
            </div>
          </div>
        </section>

        {/* ─── SECTION 4: HOMEPAGE PROOF (CATALOGUE PLATES) ────── */}
        <section className="space-y-6">
          <div className="flex items-center justify-between border-b border-[#D9D4C8] pb-3">
            <div className="font-mono-tech text-xs tracking-[0.1em] uppercase text-[#B58A2A] font-semibold">
              04 / VERIFIED EVIDENCE
            </div>
            <div className="font-mono-tech text-xs text-[#77736A]">
              SPECIFICATION PLATES
            </div>
          </div>

          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-[#181816] font-display">
            Work I can show you.
          </h2>

          <div className="space-y-6">
            {/* Proof item 1: 1M rows */}
            <div className="catalogue-sheet p-6 sm:p-8 hover:border-[#181816] transition-colors">
              <div className="flex flex-wrap items-center justify-between gap-3 mb-4">
                <div className="flex items-center gap-2 font-mono-tech text-xs">
                  <span className="text-[#B58A2A] font-semibold">REF. DS-001</span>
                  <span className="text-[#D9D4C8]">|</span>
                  <span className="text-[#77736A]">DATA / PYTHON / AUTOMATION</span>
                </div>
                <span className="font-mono-tech text-[10px] px-2 py-0.5 bg-[#F5F1E7] text-[#33312C] border border-[#D9D4C8] font-semibold">
                  INTERNAL BUILD
                </span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-bold text-[#181816] font-display mb-3">
                1,000,000+ rows processed in under 10 minutes.
              </h3>

              <p className="text-sm sm:text-base text-[#77736A] leading-relaxed max-w-3xl mb-6 font-body">
                A Python workflow replaced a data-processing job that would otherwise have represented a substantial amount of manual work.
              </p>

              <Link
                to="/work/million-row-pipeline"
                className="inline-flex items-center gap-2 text-xs font-mono-tech uppercase tracking-[0.08em] text-[#181816] font-semibold hover:text-[#B58A2A] transition-colors"
              >
                <span>See the project</span>
                <span>→</span>
              </Link>
            </div>

            {/* Proof item 2: Video pipeline */}
            <div className="catalogue-sheet p-6 sm:p-8 hover:border-[#181816] transition-colors">
              <div className="flex flex-wrap items-center justify-between gap-3 mb-4">
                <div className="flex items-center gap-2 font-mono-tech text-xs">
                  <span className="text-[#B58A2A] font-semibold">REF. DS-002</span>
                  <span className="text-[#D9D4C8]">|</span>
                  <span className="text-[#77736A]">AI / PYTHON / MEDIA AUTOMATION</span>
                </div>
                <span className="font-mono-tech text-[10px] px-2 py-0.5 bg-[#F5F1E7] text-[#33312C] border border-[#D9D4C8] font-semibold">
                  INTERNAL BUILD
                </span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-bold text-[#181816] font-display mb-3">
                Long-form video turned into a processing pipeline.
              </h3>

              <p className="text-sm sm:text-base text-[#77736A] leading-relaxed max-w-3xl mb-6 font-body">
                An end-to-end system covering transcription, timestamps, content selection and video processing using Python, transcription models and FFmpeg.
              </p>

              <Link
                to="/work/video-processing-pipeline"
                className="inline-flex items-center gap-2 text-xs font-mono-tech uppercase tracking-[0.08em] text-[#181816] font-semibold hover:text-[#B58A2A] transition-colors"
              >
                <span>See the build</span>
                <span>→</span>
              </Link>
            </div>

            {/* Proof item 3: RFQ Intake Prototype */}
            <div className="catalogue-sheet p-6 sm:p-8 hover:border-[#181816] transition-colors">
              <div className="flex flex-wrap items-center justify-between gap-3 mb-4">
                <div className="flex items-center gap-2 font-mono-tech text-xs">
                  <span className="text-[#B58A2A] font-semibold">REF. DS-003</span>
                  <span className="text-[#D9D4C8]">|</span>
                  <span className="text-[#77736A]">INDUSTRY / RFQ / EXTRACTION</span>
                </div>
                <span className="font-mono-tech text-[10px] px-2 py-0.5 bg-[#F5F1E7] text-[#33312C] border border-[#D9D4C8] font-semibold">
                  PROTOTYPE
                </span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-bold text-[#181816] font-display mb-3">
                Industrial RFQ Intake & Specification Preparation Engine
              </h3>

              <p className="text-sm sm:text-base text-[#77736A] leading-relaxed max-w-3xl mb-6 font-body">
                Automated extraction of customer line items, part specifications, and delivery terms from messy email bodies and PDF attachments into an organised review queue.
              </p>

              <Link
                to="/work/industrial-rfq-intake"
                className="inline-flex items-center gap-2 text-xs font-mono-tech uppercase tracking-[0.08em] text-[#181816] font-semibold hover:text-[#B58A2A] transition-colors"
              >
                <span>See the build</span>
                <span>→</span>
              </Link>
            </div>
          </div>
        </section>

        {/* ─── SECTION 5: HOMEPAGE ABOUT ───────────────────────── */}
        <section className="border-t border-[#D9D4C8] pt-12 space-y-6 max-w-3xl">
          <div className="font-mono-tech text-xs tracking-[0.1em] uppercase text-[#B58A2A]">
            05 / SYSTEMS BUILDER
          </div>

          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-[#181816] font-display">
            Odafe Amalega
          </h2>

          <div className="space-y-4 text-base text-[#33312C] font-body leading-relaxed">
            <p>
              I work across automation, APIs, Python, AI, data and lightweight software.
            </p>
            <p>
              What interests me most is the point where a useful process has become too repetitive, fragmented or large to keep handling manually.
            </p>
            <p>
              My current commercial focus is bringing that thinking into industrial and operational businesses.
            </p>
            <p>
              I teach as well, which has made explaining technical systems clearly an important part of how I work.
            </p>
          </div>

          <div className="pt-2">
            <Link
              to="/about"
              className="inline-flex items-center gap-2 text-xs font-mono-tech uppercase tracking-[0.08em] text-[#181816] font-semibold hover:text-[#B58A2A] transition-colors"
            >
              <span>View my profile & digital CV</span>
              <span>→</span>
            </Link>
          </div>
        </section>

        {/* ─── SECTION 6: HOMEPAGE FINAL CTA ───────────────────── */}
        <section className="catalogue-sheet p-8 sm:p-14 space-y-6 border border-[#D9D4C8] border-t-2 border-t-[#B58A2A]">
          <div className="font-mono-tech text-xs tracking-[0.1em] uppercase text-[#B58A2A]">
            06 / NEXT STEP
          </div>

          <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-[#181816] font-display">
            What does your team keep doing the same way?
          </h2>

          <div className="space-y-3 text-base sm:text-lg text-[#77736A] font-body max-w-2xl leading-relaxed">
            <p>
              Send me one repeated process.
            </p>
            <p>
              Tell me what comes in, what somebody does with it and what needs to happen next.
            </p>
            <p>
              You do not need to know whether the solution is AI, automation, code or something else.
            </p>
          </div>

          <div className="pt-4">
            <Link
              to="/contact"
              className="btn-primary px-7 py-4"
            >
              <span>Show Me the Workflow</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </section>

      </main>
    </div>
  );
};
