import React from 'react';
import { Link } from '../router/Router';
import { SeoHead } from '../components/SeoHead';
import { Breadcrumbs } from '../components/Breadcrumbs';
import { ArrowRight, CheckCircle2 } from 'lucide-react';

export const TeachingPage: React.FC = () => {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'EducationalOccupationalProgram',
    name: 'Practical AI, Automation & API Training',
    provider: {
      '@type': 'Person',
      name: 'Odafe Amalega',
      url: 'https://www.dafe.name.ng/about'
    },
    description: 'Practical training in AI, automation, APIs, digital productivity and vibe coding for teams, educators, young learners, and nontechnical professionals.'
  };

  const learningAreas = [
    {
      label: 'Understand',
      code: 'MOD-01',
      desc: 'First-principles mental models of computational systems.',
      items: [
        'AI models & token mechanics',
        'APIs & HTTP methods',
        'Data structures & schemas',
        'Software systems fundamentals',
        'Security & credential hygiene'
      ]
    },
    {
      label: 'Use',
      code: 'MOD-02',
      desc: 'Direct practical application in everyday digital operations.',
      items: [
        'AI productivity & synthesis',
        'Targeted web & market research',
        'Structured content workflows',
        'Automation tools & triggers',
        'Responsible verification habits'
      ]
    },
    {
      label: 'Build',
      code: 'MOD-03',
      desc: 'Creating tangible workflows, prototypes, and functional software.',
      items: [
        'API endpoint chaining',
        'Visual automation in n8n',
        'Workflow automation logic',
        'Vibe coding & AI-assisted development',
        'Web prototypes & data views'
      ]
    }
  ];

  const currentTopics = [
    'AI foundations and literacy',
    'Workflow automation',
    'APIs in plain English',
    'Vibe coding',
    'Digital productivity',
    'AI image and video workflows',
    'Building websites and app prototypes with AI',
    'Automation thinking for nontechnical learners'
  ];

  const audiences = [
    { title: 'Teams', desc: 'Operational, commercial, and executive teams modernising daily workflows.' },
    { title: 'Teachers', desc: 'Educators needing clear literacy on generative tools and classroom ethics.' },
    { title: 'Young learners', desc: 'Next-generation builders discovering programming and systems thinking.' },
    { title: 'Professionals', desc: 'Analysts, operations leads, and consultants removing clerical friction.' },
    { title: 'Training organisations', desc: 'Institutional partners delivering structured digital bootcamps.' },
    { title: 'Business owners', desc: 'Founders evaluating what automation can realistically achieve.' }
  ];

  const curriculumArtifacts = [
    {
      ref: 'TRAINING REF. EDU-014',
      title: 'API Fundamentals & Webhook Systems',
      audience: 'Nontechnical Teams & Operational Managers',
      duration: 'Half-Day Intensive (4 Hours)',
      learningGoal: 'Inspect raw HTTP requests, map JSON payloads, and connect spreadsheets to databases via webhook automation without code fatigue.'
    },
    {
      ref: 'TRAINING REF. EDU-022',
      title: 'n8n Workflow Construction Sandbox',
      audience: 'Builders, Analysts & Administrative Leads',
      duration: 'Full-Day Hands-on Lab (7 Hours)',
      learningGoal: 'Build 3 production-grade automations: customer qualification bot, automated PDF extraction, and scheduled reporting digest.'
    },
    {
      ref: 'TRAINING REF. EDU-031',
      title: 'Practical AI Literacy for Educators & Teachers',
      audience: 'Secondary & Higher Ed Faculty',
      duration: '3-Hour Interactive Seminar',
      learningGoal: 'Understand token mechanics, detect hallucination patterns, and establish responsible student generative AI guidelines.'
    },
    {
      ref: 'TRAINING REF. EDU-045',
      title: 'Vibe Coding & Systems Thinking for Builders',
      audience: 'Aspiring Creators & Young Professionals',
      duration: 'Weekend Workshop (2 x 4 Hours)',
      learningGoal: 'Leverage modern AI models to build, debug, and deploy functional web prototypes cleanly from first principles.'
    }
  ];

  return (
    <div className="min-h-screen">
      <SeoHead
        title="Practical AI, Automation & API Training | Odafe Amalega"
        description="Practical AI, automation, API, digital productivity and vibe-coding training for teams, teachers, young learners and nontechnical professionals."
        canonicalPath="/teaching"
        jsonLd={jsonLd}
      />

      <main className="max-w-[1440px] mx-auto px-6 sm:px-12 lg:px-16 py-12 sm:py-20 space-y-16 sm:space-y-24">
        
        <Breadcrumbs items={[{ label: 'TEACHING', path: '/teaching' }]} />

        {/* ─── HERO ────────────────────────────────────────────── */}
        <section className="space-y-6 max-w-4xl">
          <div className="font-mono-tech text-xs tracking-[0.1em] uppercase text-[#B58A2A] font-semibold">
            04 / SYSTEMS EDUCATION & TRAINING
          </div>

          <h1 className="text-4xl sm:text-6xl font-bold tracking-tight text-[#181816] font-display leading-[1.12]">
            Learn what is happening underneath the button.
          </h1>

          <div className="space-y-3 text-base sm:text-lg text-[#33312C] font-body leading-relaxed max-w-3xl">
            <p>
              I teach AI and digital systems in a way that helps people understand what they are using, not just memorise where to click.
            </p>
            <p className="text-[#77736A]">
              Sessions can be adapted for nontechnical teams, teachers, young learners and people beginning to build with AI.
            </p>
          </div>

          <div className="pt-4">
            <Link
              to="/contact"
              className="btn-primary px-6 py-3.5"
            >
              <span>Discuss Training</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </section>

        {/* ─── THREE LEARNING AREAS ────────────────────────────── */}
        <section className="space-y-6">
          <div className="flex items-center justify-between border-b border-[#D9D4C8] pb-3">
            <div className="font-mono-tech text-xs tracking-[0.1em] uppercase text-[#B58A2A] font-semibold">
              [CURRICULUM ARCHITECTURE]
            </div>
            <div className="font-mono-tech text-xs text-[#77736A]">
              THREE PILLARS
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {learningAreas.map((area) => (
              <div
                key={area.code}
                className="catalogue-sheet p-6 sm:p-8 flex flex-col justify-between"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between border-b border-[#D9D4C8] pb-2">
                    <span className="font-mono-tech text-xs text-[#B58A2A] uppercase font-semibold">
                      [{area.code}]
                    </span>
                    <span className="font-mono-tech text-[10px] px-2 py-0.5 bg-[#F5F1E7] text-[#33312C] font-semibold">
                      PILLAR
                    </span>
                  </div>

                  <h2 className="text-2xl sm:text-3xl font-bold text-[#181816] font-display">
                    {area.label}
                  </h2>

                  <p className="text-xs text-[#77736A] font-body leading-relaxed">
                    {area.desc}
                  </p>

                  <ul className="space-y-2 pt-3 border-t border-[#D9D4C8]">
                    {area.items.map((item, idx) => (
                      <li key={idx} className="flex items-center gap-2 text-xs sm:text-sm text-[#33312C] font-body">
                        <span className="w-1.5 h-1.5 bg-[#B58A2A] flex-shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ─── CURRENT TEACHING TOPICS ─────────────────────────── */}
        <section className="catalogue-sheet p-6 sm:p-10 space-y-8">
          <div className="space-y-2">
            <div className="font-mono-tech text-xs tracking-[0.1em] uppercase text-[#B58A2A] font-semibold">
              [TOPIC REGISTER]
            </div>
            <h2 className="text-3xl font-bold tracking-tight text-[#181816] font-display">
              Current teaching topics
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3.5">
            {currentTopics.map((topic, idx) => (
              <div
                key={idx}
                className="p-4 border border-[#D9D4C8] bg-[#FCFBF7] flex flex-col justify-between"
              >
                <span className="font-mono-tech text-xs text-[#B58A2A] mb-2 font-semibold">
                  0{idx + 1}.
                </span>
                <span className="text-sm font-bold text-[#181816] font-body">
                  {topic}
                </span>
              </div>
            ))}
          </div>
        </section>

        {/* ─── AUDIENCES ───────────────────────────────────────── */}
        <section className="space-y-6">
          <div className="font-mono-tech text-xs tracking-[0.1em] uppercase text-[#B58A2A] font-semibold">
            [LEARNER PROFILES]
          </div>

          <h2 className="text-3xl font-bold tracking-tight text-[#181816] font-display">
            Audiences
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {audiences.map((aud, idx) => (
              <div
                key={idx}
                className="catalogue-sheet p-5"
              >
                <div className="font-bold text-base text-[#181816] mb-1 font-body">
                  {aud.title}
                </div>
                <div className="text-xs sm:text-sm text-[#77736A] font-body leading-relaxed">
                  {aud.desc}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ─── CATALOGUE SPECIMENS / WORKSHOP MATERIALS ────────── */}
        <section className="catalogue-sheet p-6 sm:p-10 space-y-8">
          <div className="space-y-2">
            <div className="font-mono-tech text-xs tracking-[0.1em] uppercase text-[#B58A2A] font-semibold">
              [CURRICULUM SPECIMENS & WORKSHOP MODULES]
            </div>
            <h2 className="text-3xl font-bold tracking-tight text-[#181816] font-display">
              Documented course materials and modules.
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {curriculumArtifacts.map((art, idx) => (
              <div
                key={idx}
                className="p-6 border border-[#D9D4C8] bg-[#FCFBF7] space-y-3"
              >
                <div className="flex items-center justify-between border-b border-[#D9D4C8] pb-2 font-mono-tech text-xs">
                  <span className="text-[#B58A2A] font-semibold">
                    {art.ref}
                  </span>
                  <span className="text-[#77736A]">
                    {art.duration}
                  </span>
                </div>

                <div className="text-xl font-bold text-[#181816] font-display">
                  {art.title}
                </div>

                <div className="text-xs font-mono-tech text-[#77736A]">
                  AUDIENCE: {art.audience.toUpperCase()}
                </div>

                <p className="text-xs sm:text-sm text-[#33312C] font-body leading-relaxed pt-1">
                  <strong className="text-[#181816]">Objective: </strong>
                  {art.learningGoal}
                </p>
              </div>
            ))}
          </div>

          <div className="pt-4 border-t border-[#D9D4C8] font-mono-tech text-xs text-[#77736A]">
            Technical instruction delivered through AppClick and independent corporate workshops.
          </div>
        </section>

        {/* ─── FINAL CTA ───────────────────────────────────────── */}
        <section className="catalogue-sheet p-8 sm:p-12 space-y-6 border border-[#D9D4C8] border-t-2 border-t-[#B58A2A]">
          <div className="font-mono-tech text-xs tracking-[0.1em] uppercase text-[#B58A2A]">
            TRAINING INTAKE
          </div>

          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-[#181816] font-display">
            Discuss a Training Session
          </h2>

          <p className="text-sm sm:text-base text-[#77736A] font-body max-w-2xl leading-relaxed">
            Tell me about your team, your current challenges with AI or automation, and what you want participants to be able to build or evaluate after the session.
          </p>

          <div className="pt-2">
            <Link
              to="/contact"
              className="btn-primary px-6 py-3.5"
            >
              <span>Discuss Training</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </section>

      </main>
    </div>
  );
};
