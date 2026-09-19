import React from 'react';
import { Link } from '../router/Router';
import { SeoHead } from '../components/SeoHead';
import { ArrowRight, ArrowUpRight, CheckCircle2, Terminal } from 'lucide-react';
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
    url: 'https://dafe.name.ng/',
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

      <main className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-20 space-y-24 sm:space-y-32">
        
        {/* ─── SECTION 1: HERO ─────────────────────────────────── */}
        <section className="space-y-8 max-w-4xl">
          <div className="font-mono-tech text-xs tracking-widest uppercase text-[#96742c] flex items-center gap-2">
            <span className="w-2 h-2 bg-[#96742c]" />
            <span>DAFEDESCRIBE / ODAFE AMALEGA</span>
          </div>

          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-[#141416] leading-[1.15]">
            I build systems for work that has outgrown manual handling.
          </h1>

          <p className="text-lg sm:text-xl text-[#4a4946] leading-relaxed max-w-3xl">
            I design automation, data and AI workflows around business processes that still depend too heavily on people copying, checking, searching, following up and rebuilding information.
          </p>

          <p className="text-base sm:text-lg text-[#575653] leading-relaxed max-w-3xl">
            My deepest current focus is the commercial side of industrial and operational businesses. I also teach teams how these systems actually work.
          </p>

          <div className="flex flex-wrap items-center gap-4 pt-2">
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-6 py-3.5 text-xs font-mono-tech uppercase tracking-wider bg-[#141416] text-[#faf8f5] border border-[#141416] hover:bg-[#2b2b30] transition-colors"
            >
              <span>Show Me the Workflow</span>
              <ArrowRight className="w-4 h-4" />
            </Link>

            <Link
              to="/work"
              className="inline-flex items-center gap-2 px-6 py-3.5 text-xs font-mono-tech uppercase tracking-wider bg-[#faf8f5] text-[#141416] border border-[#ded9cf] hover:border-[#141416] transition-colors"
            >
              <span>See What I've Built</span>
              <ArrowUpRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="pt-4 border-t border-[#ded9cf] font-mono-tech text-xs sm:text-sm text-[#7a7770]">
            AI Workflow Engineer · Systems Builder · Educator
          </div>
        </section>

        {/* ─── SECTION 2: THREE COMMERCIAL ENTRY POINTS ────────── */}
        <section className="space-y-6">
          <div className="font-mono-tech text-xs tracking-wider uppercase text-[#7a7770]">
            [COMMERCIAL ENTRY POINTS]
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            
            {/* Entry 1: Industry */}
            <div className="border border-[#ded9cf] bg-[#ffffff] p-6 sm:p-8 flex flex-col justify-between hover:border-[#141416] transition-colors group">
              <div className="space-y-4">
                <div className="font-mono-tech text-xs text-[#96742c] uppercase tracking-wider">
                  [01] INDUSTRY
                </div>
                <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-[#141416]">
                  Commercial systems for businesses that make, supply and install things.
                </h2>
                <p className="text-sm text-[#575653] leading-relaxed">
                  RFQs, tenders, quotations, opportunity monitoring, follow-up and commercial reporting.
                </p>
              </div>
              <div className="pt-8">
                <Link
                  to="/industry"
                  className="inline-flex items-center gap-2 text-xs font-mono-tech uppercase tracking-wider text-[#141416] font-semibold group-hover:text-[#96742c] transition-colors"
                >
                  <span>Explore Industry Systems</span>
                  <span>→</span>
                </Link>
              </div>
            </div>

            {/* Entry 2: Automation */}
            <div className="border border-[#ded9cf] bg-[#ffffff] p-6 sm:p-8 flex flex-col justify-between hover:border-[#141416] transition-colors group">
              <div className="space-y-4">
                <div className="font-mono-tech text-xs text-[#96742c] uppercase tracking-wider">
                  [02] AUTOMATION
                </div>
                <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-[#141416]">
                  Repetitive process? Strange workflow? Systems that refuse to talk?
                </h2>
                <p className="text-sm text-[#575653] leading-relaxed">
                  I build targeted workflows using automation, APIs, code, data and AI where useful.
                </p>
              </div>
              <div className="pt-8">
                <Link
                  to="/automation"
                  className="inline-flex items-center gap-2 text-xs font-mono-tech uppercase tracking-wider text-[#141416] font-semibold group-hover:text-[#96742c] transition-colors"
                >
                  <span>Explore Automation</span>
                  <span>→</span>
                </Link>
              </div>
            </div>

            {/* Entry 3: Teaching */}
            <div className="border border-[#ded9cf] bg-[#ffffff] p-6 sm:p-8 flex flex-col justify-between hover:border-[#141416] transition-colors group">
              <div className="space-y-4">
                <div className="font-mono-tech text-xs text-[#96742c] uppercase tracking-wider">
                  [03] TEACHING
                </div>
                <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-[#141416]">
                  Learn what is actually happening underneath the AI button.
                </h2>
                <p className="text-sm text-[#575653] leading-relaxed">
                  Practical training in AI, automation, APIs, digital productivity and AI-assisted building.
                </p>
              </div>
              <div className="pt-8">
                <Link
                  to="/teaching"
                  className="inline-flex items-center gap-2 text-xs font-mono-tech uppercase tracking-wider text-[#141416] font-semibold group-hover:text-[#96742c] transition-colors"
                >
                  <span>Explore Teaching</span>
                  <span>→</span>
                </Link>
              </div>
            </div>

          </div>
        </section>

        {/* ─── SECTION 3: CREDIBILITY BAND ─────────────────────── */}
        <section className="border border-[#ded9cf] bg-[#f3efe6] p-6 sm:p-8 space-y-4">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-[#ded9cf] pb-4">
            <h2 className="font-mono-tech text-xs uppercase tracking-wider text-[#141416] font-semibold">
              WORK & EXPERIENCE
            </h2>
            <span className="font-mono-tech text-xs text-[#7a7770]">
              Work, employment and project experience includes
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-2">
            {/* AppClick */}
            <div className="p-4 bg-[#ffffff] border border-[#ded9cf]">
              <div className="flex items-center justify-between mb-2">
                <span className="font-mono-tech text-xs text-[#96742c] font-semibold">
                  [EMPLOYMENT]
                </span>
                <span className="font-mono-tech text-[10px] px-2 py-0.5 bg-[#141416] text-[#faf8f5]">
                  Active Role
                </span>
              </div>
              <div className="text-base font-bold text-[#141416]">
                AppClick
              </div>
              <div className="text-xs text-[#575653] mt-1 font-mono-tech">
                Currently at AppClick
              </div>
              <p className="text-xs text-[#7a7770] mt-2">
                Technical instruction, curriculum execution, automation systems, and systems literacy.
              </p>
            </div>

            {/* University */}
            <div className="p-4 bg-[#ffffff] border border-[#ded9cf]">
              <div className="font-mono-tech text-xs text-[#7a7770] font-semibold mb-2">
                [EDUCATION]
              </div>
              <div className="text-base font-bold text-[#141416]">
                Federal University Oye-Ekiti
              </div>
              <div className="text-xs text-[#575653] mt-1 font-mono-tech">
                Bachelor of Engineering (B.Eng)
              </div>
              <p className="text-xs text-[#7a7770] mt-2">
                Rigorous engineering foundations, physical systems principles, and analytical problem-solving.
              </p>
            </div>

            {/* ALX / Professional */}
            <div className="p-4 bg-[#ffffff] border border-[#ded9cf]">
              <div className="font-mono-tech text-xs text-[#7a7770] font-semibold mb-2">
                [PROFESSIONAL TRAINING]
              </div>
              <div className="text-base font-bold text-[#141416]">
                ALX Training
              </div>
              <div className="text-xs text-[#575653] mt-1 font-mono-tech">
                Virtual Assistance & Technical Operations
              </div>
              <p className="text-xs text-[#7a7770] mt-2">
                Digital workspace coordination, asynchronous operations, and remote systems workflows.
              </p>
            </div>
          </div>
        </section>

        {/* ─── SECTION 4: HOMEPAGE PROOF ───────────────────────── */}
        <section className="space-y-8">
          <div className="space-y-2">
            <div className="font-mono-tech text-xs tracking-wider uppercase text-[#96742c]">
              [VERIFIABLE EVIDENCE]
            </div>
            <h2 className="text-2xl sm:text-4xl font-bold tracking-tight text-[#141416]">
              Work I can show you.
            </h2>
          </div>

          <div className="space-y-6">
            {/* Proof item 1: 1M rows */}
            <div className="border border-[#ded9cf] bg-[#ffffff] p-6 sm:p-8 hover:border-[#141416] transition-colors">
              <div className="flex flex-wrap items-center justify-between gap-3 mb-4">
                <span className="font-mono-tech text-xs text-[#96742c] font-semibold">
                  DATA / PYTHON / AUTOMATION
                </span>
                <span className="font-mono-tech text-xs px-2 py-0.5 bg-[#f3efe6] text-[#141416] border border-[#ded9cf]">
                  INTERNAL BUILD
                </span>
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-[#141416] mb-3">
                1,000,000+ rows processed in under 10 minutes.
              </h3>
              <p className="text-sm sm:text-base text-[#575653] leading-relaxed max-w-3xl mb-6">
                A Python workflow replaced a data-processing job that would otherwise have represented a substantial amount of manual work.
              </p>
              <Link
                to="/work/million-row-pipeline"
                className="inline-flex items-center gap-2 text-xs font-mono-tech uppercase tracking-wider text-[#141416] font-semibold hover:text-[#96742c] transition-colors"
              >
                <span>See the project</span>
                <span>→</span>
              </Link>
            </div>

            {/* Proof item 2: Video pipeline */}
            <div className="border border-[#ded9cf] bg-[#ffffff] p-6 sm:p-8 hover:border-[#141416] transition-colors">
              <div className="flex flex-wrap items-center justify-between gap-3 mb-4">
                <span className="font-mono-tech text-xs text-[#96742c] font-semibold">
                  AI / PYTHON / MEDIA AUTOMATION
                </span>
                <span className="font-mono-tech text-xs px-2 py-0.5 bg-[#f3efe6] text-[#141416] border border-[#ded9cf]">
                  INTERNAL BUILD
                </span>
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-[#141416] mb-3">
                Long-form video turned into a processing pipeline.
              </h3>
              <p className="text-sm sm:text-base text-[#575653] leading-relaxed max-w-3xl mb-6">
                An end-to-end system covering transcription, timestamps, content selection and video processing using Python, transcription models and FFmpeg.
              </p>
              <Link
                to="/work/video-processing-pipeline"
                className="inline-flex items-center gap-2 text-xs font-mono-tech uppercase tracking-wider text-[#141416] font-semibold hover:text-[#96742c] transition-colors"
              >
                <span>See the build</span>
                <span>→</span>
              </Link>
            </div>

            {/* Proof item 3: Industrial RFQ Prototype */}
            <div className="border border-[#ded9cf] bg-[#ffffff] p-6 sm:p-8 hover:border-[#141416] transition-colors">
              <div className="flex flex-wrap items-center justify-between gap-3 mb-4">
                <span className="font-mono-tech text-xs text-[#96742c] font-semibold">
                  INDUSTRY / RFQ / EXTRACTION
                </span>
                <span className="font-mono-tech text-xs px-2 py-0.5 bg-[#f3efe6] text-[#141416] border border-[#ded9cf]">
                  PROTOTYPE
                </span>
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-[#141416] mb-3">
                Industrial RFQ Intake & Specification Preparation Engine
              </h3>
              <p className="text-sm sm:text-base text-[#575653] leading-relaxed max-w-3xl mb-6">
                Automated extraction of customer line items, part specifications, and delivery terms from messy email bodies and PDF attachments into an organised review queue.
              </p>
              <Link
                to="/work/industrial-rfq-intake"
                className="inline-flex items-center gap-2 text-xs font-mono-tech uppercase tracking-wider text-[#141416] font-semibold hover:text-[#96742c] transition-colors"
              >
                <span>See the build</span>
                <span>→</span>
              </Link>
            </div>
          </div>
        </section>

        {/* ─── SECTION 5: HOMEPAGE ABOUT ───────────────────────── */}
        <section className="border-t border-[#ded9cf] pt-12 space-y-6 max-w-3xl">
          <div className="font-mono-tech text-xs tracking-wider uppercase text-[#7a7770]">
            [SYSTEMS BUILDER]
          </div>

          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-[#141416]">
            Odafe Amalega
          </h2>

          <div className="space-y-4 text-base text-[#4a4946] leading-relaxed">
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
              className="inline-flex items-center gap-2 text-xs font-mono-tech uppercase tracking-wider text-[#141416] font-semibold hover:text-[#96742c] transition-colors"
            >
              <span>View my profile & digital CV</span>
              <span>→</span>
            </Link>
          </div>
        </section>

        {/* ─── SECTION 6: HOMEPAGE FINAL CTA ───────────────────── */}
        <section className="border border-[#141416] bg-[#ffffff] p-8 sm:p-12 space-y-6">
          <div className="font-mono-tech text-xs tracking-wider uppercase text-[#96742c]">
            [NEXT STEP]
          </div>

          <h2 className="text-2xl sm:text-4xl font-bold tracking-tight text-[#141416]">
            What does your team keep doing the same way?
          </h2>

          <div className="space-y-4 text-base sm:text-lg text-[#575653] max-w-2xl leading-relaxed">
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
              className="inline-flex items-center gap-2 px-6 py-3.5 text-xs font-mono-tech uppercase tracking-wider bg-[#141416] text-[#faf8f5] border border-[#141416] hover:bg-[#2b2b30] transition-colors"
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
