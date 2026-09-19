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
          <div className="font-mono-tech text-xs tracking-[0.1em] uppercase text-amber-700 font-semibold">
            Systems Education & Technical Training
          </div>

          <h1 className="text-4xl sm:text-6xl font-bold tracking-tight text-slate-900 font-display leading-[1.12]">
            Learn what is happening underneath the button.
          </h1>

          <div className="space-y-3 text-base sm:text-lg text-slate-700 font-body leading-relaxed max-w-3xl">
            <p>
              I teach AI engineering and workflow automation so participants understand the mechanics of the tools they deploy, rather than merely memorizing interfaces.
            </p>
            <p className="text-slate-600">
              Curricula are tailored for nontechnical operations teams, educators, engineering cohorts, and professionals integrating AI into business processes.
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
          <div className="flex items-center justify-between border-b border-slate-200 pb-3">
            <div className="font-mono-tech text-xs tracking-wider uppercase text-amber-700 font-semibold">
              Curriculum Architecture
            </div>
            <div className="text-xs text-slate-500 font-mono-tech">
              Three Learning Pillars
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {learningAreas.map((area) => (
              <div
                key={area.code}
                className="bg-white border border-slate-200 rounded-xl p-6 sm:p-8 flex flex-col justify-between shadow-2xs hover:shadow-md transition-shadow"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between border-b border-slate-100 pb-2">
                    <span className="font-mono-tech text-xs text-amber-700 uppercase font-semibold">
                      {area.code}
                    </span>
                    <span className="text-[11px] px-2 py-0.5 bg-slate-100 text-slate-700 rounded font-medium">
                      Pillar
                    </span>
                  </div>

                  <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 font-display">
                    {area.label}
                  </h2>

                  <p className="text-xs sm:text-sm text-slate-600 font-body leading-relaxed">
                    {area.desc}
                  </p>

                  <ul className="space-y-2 pt-3 border-t border-slate-100">
                    {area.items.map((item, idx) => (
                      <li key={idx} className="flex items-center gap-2 text-xs sm:text-sm text-slate-700 font-body">
                        <span className="w-1.5 h-1.5 rounded-full bg-amber-600 flex-shrink-0" />
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
        <section className="bg-white border border-slate-200 rounded-xl p-6 sm:p-10 space-y-8 shadow-sm">
          <div className="space-y-2">
            <div className="font-mono-tech text-xs tracking-wider uppercase text-amber-700 font-semibold">
              Core Topics
            </div>
            <h2 className="text-3xl font-bold tracking-tight text-slate-900 font-display">
              Technical subjects covered
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3.5">
            {currentTopics.map((topic, idx) => (
              <div
                key={idx}
                className="p-4 rounded-lg border border-slate-200 bg-slate-50/50 flex flex-col justify-between"
              >
                <span className="font-mono-tech text-xs text-amber-700 mb-2 font-semibold">
                  0{idx + 1}.
                </span>
                <span className="text-sm font-bold text-slate-900 font-body">
                  {topic}
                </span>
              </div>
            ))}
          </div>
        </section>

        {/* ─── AUDIENCES ───────────────────────────────────────── */}
        <section className="space-y-6">
          <div className="font-mono-tech text-xs tracking-wider uppercase text-amber-700 font-semibold">
            Target Audiences
          </div>

          <h2 className="text-3xl font-bold tracking-tight text-slate-900 font-display">
            Who these programmes are designed for
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {audiences.map((aud, idx) => (
              <div
                key={idx}
                className="bg-white border border-slate-200 rounded-xl p-5 shadow-2xs"
              >
                <div className="font-bold text-base text-slate-900 mb-1.5 font-body">
                  {aud.title}
                </div>
                <div className="text-xs sm:text-sm text-slate-600 font-body leading-relaxed">
                  {aud.desc}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ─── CATALOGUE SPECIMENS / WORKSHOP MATERIALS ────────── */}
        <section className="bg-white border border-slate-200 rounded-xl p-6 sm:p-10 space-y-8 shadow-sm">
          <div className="space-y-2">
            <div className="font-mono-tech text-xs tracking-wider uppercase text-amber-700 font-semibold">
              Course Modules & Hands-on Materials
            </div>
            <h2 className="text-3xl font-bold tracking-tight text-slate-900 font-display">
              Documented course syllabus and practical modules.
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {curriculumArtifacts.map((art, idx) => (
              <div
                key={idx}
                className="p-6 rounded-lg border border-slate-200 bg-slate-50/50 space-y-3"
              >
                <div className="flex items-center justify-between border-b border-slate-200 pb-2 font-mono-tech text-xs">
                  <span className="text-amber-700 font-semibold">
                    {art.ref}
                  </span>
                  <span className="text-slate-500">
                    {art.duration}
                  </span>
                </div>

                <div className="text-xl font-bold text-slate-900 font-display">
                  {art.title}
                </div>

                <div className="text-xs font-mono-tech text-slate-500">
                  Target Audience: {art.audience}
                </div>

                <p className="text-xs sm:text-sm text-slate-700 font-body leading-relaxed pt-1">
                  <strong className="text-slate-900">Learning Goal: </strong>
                  {art.learningGoal}
                </p>
              </div>
            ))}
          </div>

          <div className="pt-4 border-t border-slate-200 text-xs text-slate-500 font-body">
            Technical instruction delivered through AppClick Technology and independent corporate workshops.
          </div>
        </section>

        {/* ─── FINAL CTA ───────────────────────────────────────── */}
        <section className="bg-white border border-slate-200 rounded-xl p-8 sm:p-12 space-y-6 shadow-sm">
          <div className="font-mono-tech text-xs tracking-wider uppercase text-amber-700 font-semibold">
            Corporate Training Inquiries
          </div>

          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900 font-display">
            Discuss a Training Session
          </h2>

          <p className="text-sm sm:text-base text-slate-600 font-body max-w-2xl leading-relaxed">
            Tell me about your team, your current challenges with AI or automation, and what practical skills you want participants to take away from the session.
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
