import React from 'react';
import { Link } from '../router/Router';
import { SeoHead } from '../components/SeoHead';
import { Breadcrumbs } from '../components/Breadcrumbs';
import { ArrowRight, BookOpen, Layers, Terminal, CheckCircle2 } from 'lucide-react';

export const TeachingPage: React.FC = () => {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'EducationalOccupationalProgram',
    name: 'Practical AI, Automation & API Training',
    provider: {
      '@type': 'Person',
      name: 'Odafe Amalega',
      url: 'https://dafe.name.ng/about'
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
      title: 'The Anatomy of an API Request',
      format: 'Interactive Workshop Deck · 45 Slides',
      focus: 'Explaining endpoints, methods, headers, and payloads using physical analogies without code fatigue.'
    },
    {
      title: 'n8n Production Sandbox Lab',
      format: 'Hands-on Technical Workbook',
      focus: 'Students build 3 end-to-end automations: webhook intake, table updates, and notification routing.'
    },
    {
      title: 'Practical AI Literacy for Educators',
      format: 'Curriculum & Assessment Framework',
      focus: 'Distinguishing pattern prediction from reasoning; detecting hallucination; responsible assignment design.'
    },
    {
      title: 'Vibe Coding & Rapid Prototyping Guide',
      format: 'Developer Reference & Prompt Patterns',
      focus: 'Teaching non-programmers how to guide AI models into building functional web interfaces cleanly.'
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

      <main className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-20 space-y-16 sm:space-y-24">
        
        <Breadcrumbs items={[{ label: 'TEACHING', path: '/teaching' }]} />

        {/* ─── HERO ────────────────────────────────────────────── */}
        <section className="space-y-6 max-w-4xl">
          <div className="font-mono-tech text-xs tracking-widest uppercase text-[#96742c]">
            [SYSTEMS EDUCATION]
          </div>

          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-[#141416] leading-[1.15]">
            Learn what is happening underneath the button.
          </h1>

          <div className="space-y-3 text-base sm:text-lg text-[#4a4946] leading-relaxed max-w-3xl">
            <p>
              I teach AI and digital systems in a way that helps people understand what they are using, not just memorise where to click.
            </p>
            <p>
              Sessions can be adapted for nontechnical teams, teachers, young learners and people beginning to build with AI.
            </p>
          </div>

          <div className="pt-4">
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-6 py-3.5 text-xs font-mono-tech uppercase tracking-wider bg-[#141416] text-[#faf8f5] border border-[#141416] hover:bg-[#2b2b30] transition-colors"
            >
              <span>Discuss Training</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </section>

        {/* ─── THREE LEARNING AREAS ────────────────────────────── */}
        <section className="space-y-6">
          <div className="font-mono-tech text-xs tracking-wider uppercase text-[#7a7770]">
            [CURRICULUM PILLARS]
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {learningAreas.map((area) => (
              <div
                key={area.code}
                className="border border-[#ded9cf] bg-[#ffffff] p-6 sm:p-8 flex flex-col justify-between"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="font-mono-tech text-xs text-[#96742c] uppercase font-semibold">
                      [{area.code}]
                    </span>
                    <span className="font-mono-tech text-xs px-2 py-0.5 bg-[#f3efe6] text-[#141416]">
                      PILLAR
                    </span>
                  </div>

                  <h2 className="text-2xl font-bold text-[#141416]">
                    {area.label}
                  </h2>

                  <p className="text-xs text-[#7a7770]">
                    {area.desc}
                  </p>

                  <ul className="space-y-2 pt-2 border-t border-[#ded9cf]">
                    {area.items.map((item, idx) => (
                      <li key={idx} className="flex items-center gap-2 text-xs sm:text-sm text-[#575653]">
                        <span className="w-1.5 h-1.5 bg-[#96742c]" />
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
        <section className="border border-[#ded9cf] bg-[#ffffff] p-6 sm:p-10 space-y-8">
          <div className="space-y-2">
            <div className="font-mono-tech text-xs tracking-wider uppercase text-[#96742c]">
              [TOPIC INDEX]
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-[#141416]">
              Current teaching topics
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3.5">
            {currentTopics.map((topic, idx) => (
              <div
                key={idx}
                className="p-4 border border-[#ded9cf] bg-[#faf8f5] flex flex-col justify-between"
              >
                <span className="font-mono-tech text-xs text-[#96742c] mb-2 font-semibold">
                  0{idx + 1}.
                </span>
                <span className="text-sm font-semibold text-[#141416]">
                  {topic}
                </span>
              </div>
            ))}
          </div>
        </section>

        {/* ─── AUDIENCES ───────────────────────────────────────── */}
        <section className="space-y-6">
          <div className="font-mono-tech text-xs tracking-wider uppercase text-[#7a7770]">
            [LEARNER PROFILES]
          </div>

          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-[#141416]">
            Audiences
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {audiences.map((aud, idx) => (
              <div
                key={idx}
                className="p-5 border border-[#ded9cf] bg-[#ffffff]"
              >
                <div className="font-bold text-base text-[#141416] mb-1">
                  {aud.title}
                </div>
                <div className="text-xs sm:text-sm text-[#575653] leading-relaxed">
                  {aud.desc}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ─── TRAINING PROOF & COURSE OUTLINES ────────────────── */}
        <section className="border border-[#ded9cf] bg-[#ffffff] p-6 sm:p-10 space-y-8">
          <div className="space-y-2">
            <div className="font-mono-tech text-xs tracking-wider uppercase text-[#96742c]">
              [VERIFIABLE CURRICULUM ARTIFACTS]
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-[#141416]">
              Real workshop materials and course structures.
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {curriculumArtifacts.map((art, idx) => (
              <div
                key={idx}
                className="p-5 border border-[#ded9cf] bg-[#faf8f5] space-y-2"
              >
                <div className="font-mono-tech text-xs text-[#96742c]">
                  {art.format}
                </div>
                <div className="text-base font-bold text-[#141416]">
                  {art.title}
                </div>
                <p className="text-xs sm:text-sm text-[#575653] leading-relaxed">
                  {art.focus}
                </p>
              </div>
            ))}
          </div>

          <div className="pt-4 border-t border-[#ded9cf] font-mono-tech text-xs text-[#7a7770]">
            Instruction delivered at AppClick and independent corporate workshops.
          </div>
        </section>

        {/* ─── FINAL CTA ───────────────────────────────────────── */}
        <section className="border border-[#141416] bg-[#f3efe6] p-8 sm:p-12 space-y-6">
          <div className="font-mono-tech text-xs tracking-wider uppercase text-[#96742c]">
            [TRAINING CONSULTATION]
          </div>

          <h2 className="text-2xl sm:text-4xl font-bold tracking-tight text-[#141416]">
            Discuss a Training Session
          </h2>

          <p className="text-sm sm:text-base text-[#575653] max-w-2xl leading-relaxed">
            Tell me about your team, your current challenges with AI or automation, and what you want participants to be able to build or evaluate after the session.
          </p>

          <div className="pt-2">
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-6 py-3.5 text-xs font-mono-tech uppercase tracking-wider bg-[#141416] text-[#faf8f5] border border-[#141416] hover:bg-[#2b2b30] transition-colors"
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
