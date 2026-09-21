import React from 'react';
import { Link } from '../router/Router';
import { SeoHead } from '../components/SeoHead';
import { Breadcrumbs } from '../components/Breadcrumbs';
import { ArrowRight, CheckCircle2, GraduationCap, Briefcase, Code2, Wrench, FileText, ArrowUpRight, Download } from 'lucide-react';
import { useI18n } from '../i18n/I18nProvider';

export const AboutPage: React.FC = () => {
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
    alumniOf: [
      {
        '@type': 'CollegeOrUniversity',
        name: 'Federal University Oye-Ekiti'
      },
      {
        '@type': 'EducationalOrganization',
        name: 'ALX'
      }
    ],
    url: 'https://www.dafe.name.ng/about',
    description: 'Odafe Amalega: Systems Builder, AI Workflow Engineer, and Technical Educator at AppClick, specializing in industrial sales workflows and operational automation.'
  };

  const capabilities = [
    'Workflow Architecture',
    'Python Development',
    'REST & Webhook APIs',
    'n8n Workflow Automation',
    'Browser & Web Automation',
    'Data Cleaning & Parquet Pipelines',
    'Google Workspace & Cloud Sync',
    'Deterministic AI Orchestration',
    'Lightweight Web Applications',
    'Corporate Technical Instruction'
  ];

  return (
    <div className="min-h-screen">
      <SeoHead
        title="About Odafe Amalega | AI Workflow Engineer & Educator"
        description="Odafe Amalega: AI Workflow Engineer, Systems Builder, and Educator currently at AppClick. Industrial commercial workflows, data processing, and practical technical instruction."
        canonicalPath="/about"
        jsonLd={jsonLd}
      />

      <main className="max-w-4xl mx-auto px-6 sm:px-12 py-12 sm:py-20 space-y-12">
        <Breadcrumbs items={[{ label: 'ABOUT', path: '/about' }]} />

        {/* ─── MAIN PROFILE CARD ─────────────────────────────────── */}
        <article className="bg-white border border-slate-200 rounded-xl p-8 sm:p-14 shadow-sm space-y-12">
          
          {/* Header Block */}
          <div className="border-b border-slate-100 pb-8 space-y-4">
            <div className="flex flex-wrap items-center justify-between gap-2">
              <span className="text-xs font-mono-tech uppercase tracking-wider text-amber-700 font-semibold">
                {t('about.eyebrow')}
              </span>
              <span className="text-xs font-mono-tech px-2.5 py-1 bg-slate-100 text-slate-700 rounded-full font-medium">
                {t('about.active')}
              </span>
            </div>

            <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-slate-900 font-display">
              Odafe Amalega
            </h1>

            <div className="text-base sm:text-lg text-slate-700 font-body">
              AI Workflow Engineer · Systems Builder · Technical Educator
            </div>

            <div className="text-sm text-slate-500 font-body flex items-center gap-2">
              <Briefcase className="w-4 h-4 text-slate-400" />
              <span>Technical Instructor at <strong className="text-slate-900 font-semibold">AppClick Technology</strong></span>
            </div>

            <div className="pt-2 flex flex-wrap items-center gap-3">
              <a
                href="/cv.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary px-4 py-2 text-xs flex items-center gap-2"
                download="Odafe-Amalega-CV.pdf"
              >
                <Download className="w-3.5 h-3.5" />
                <span>{t('about.cv')}</span>
              </a>
              <a
                href="https://wa.me/2348148794458"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary px-4 py-2 text-xs flex items-center gap-2"
              >
                <span>WhatsApp Direct</span>
                <ArrowUpRight className="w-3.5 h-3.5 text-slate-400" />
              </a>
            </div>
          </div>

          {/* Narrative Overview */}
          <section className="space-y-5 text-base sm:text-lg text-slate-700 font-body leading-relaxed">
            <p>
              I design and build workflow automation, custom data pipelines, and practical AI systems for businesses whose operations have outgrown manual handling.
            </p>
            <p>
              My work focuses on the commercial workflows of industrial and operational businesses: managing inbound RFQs, tracking tenders across public and private procurement boards, assembling complex quotations, and generating recurring operational reports.
            </p>
            <p>
              My background is in engineering (B.Eng from Federal University Oye-Ekiti). That engineering training fundamentally shapes how I approach software: I look at how information physically moves through a business, isolate the specific bottlenecks causing delay or error, and build reliable, deterministic systems that keep experienced people in control of key decisions.
            </p>
            <p>
              Alongside engineering systems, I teach applied AI, APIs, and automation at AppClick Technology. Teaching forces clarity — if you cannot explain how a workflow functions in plain terms without relying on buzzwords, you probably should not be building it for production.
            </p>
          </section>

          {/* Core Competencies */}
          <section className="border-t border-slate-100 pt-8 space-y-4">
            <div className="flex items-center gap-2 text-xs font-mono-tech uppercase tracking-wider text-slate-900 font-semibold">
              <Code2 className="w-4 h-4 text-amber-600" />
              <span>{t('about.capabilities')}</span>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5">
              {capabilities.map((cap) => (
                <div
                  key={cap}
                  className="p-3 rounded-lg border border-slate-200 bg-slate-50/60 text-xs font-medium text-slate-800 flex items-center gap-2 font-body"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-amber-600 flex-shrink-0" />
                  <span>{cap}</span>
                </div>
              ))}
            </div>
          </section>

          {/* Selected Work Highlights */}
          <section className="border-t border-slate-100 pt-8 space-y-4">
            <div className="flex items-center gap-2 text-xs font-mono-tech uppercase tracking-wider text-slate-900 font-semibold">
              <Wrench className="w-4 h-4 text-amber-600" />
              <span>{t('about.proof')}</span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="p-4 rounded-lg border border-slate-200 bg-slate-50/50 space-y-1.5">
                <div className="font-bold text-base text-slate-900 font-body">
                  1,000,000+ Rows Pipeline
                </div>
                <p className="text-xs sm:text-sm text-slate-600 font-body leading-relaxed">
                  Chunked Python pipeline processing reconciliation datasets in under 10 minutes without spreadsheet crashes.
                </p>
              </div>

              <div className="p-4 rounded-lg border border-slate-200 bg-slate-50/50 space-y-1.5">
                <div className="font-bold text-base text-slate-900 font-body">
                  End-to-End Media Assembly
                </div>
                <p className="text-xs sm:text-sm text-slate-600 font-body leading-relaxed">
                  Automated audio transcription, semantic chunking, and programmatic video compilation orchestrated via Python and FFmpeg.
                </p>
              </div>

              <div className="p-4 rounded-lg border border-slate-200 bg-slate-50/50 space-y-1.5">
                <div className="font-bold text-base text-slate-900 font-body">
                  Industrial Commercial Systems
                </div>
                <p className="text-xs sm:text-sm text-slate-600 font-body leading-relaxed">
                  Quotation management, RFQ extraction, and tender discovery pipelines built for engineering and supply businesses.
                </p>
              </div>

              <div className="p-4 rounded-lg border border-slate-200 bg-slate-50/50 space-y-1.5">
                <div className="font-bold text-base text-slate-900 font-body">
                  Practical Technical Training
                </div>
                <p className="text-xs sm:text-sm text-slate-600 font-body leading-relaxed">
                  Hands-on curriculum on APIs, automation logic, and applied AI tools designed specifically for non-technical teams.
                </p>
              </div>
            </div>
          </section>

          {/* Education & Credentials */}
          <section className="border-t border-slate-100 pt-8 space-y-4">
            <div className="flex items-center gap-2 text-xs font-mono-tech uppercase tracking-wider text-slate-900 font-semibold">
              <GraduationCap className="w-4 h-4 text-amber-600" />
              <span>{t('about.credentials')}</span>
            </div>

            <div className="space-y-4 text-sm text-slate-800 font-body">
              <div className="flex flex-col sm:flex-row sm:items-baseline justify-between border-b border-slate-100 pb-3">
                <div>
                  <div className="font-bold text-base text-slate-900">Bachelor of Engineering (B.Eng)</div>
                  <div className="text-xs text-slate-500 font-mono-tech">Federal University Oye-Ekiti</div>
                </div>
                <div className="text-xs text-slate-500 mt-1 sm:mt-0">
                  Engineering Foundations & Analytical Modelling
                </div>
              </div>

              <div className="flex flex-col sm:flex-row sm:items-baseline justify-between border-b border-slate-100 pb-3">
                <div>
                  <div className="font-bold text-base text-slate-900">ALX Professional Programmes</div>
                  <div className="text-xs text-slate-500 font-mono-tech">AI Career Essentials & Data Analytics</div>
                </div>
                <div className="text-xs text-slate-500 mt-1 sm:mt-0">
                  Certified Professional Track
                </div>
              </div>
            </div>
          </section>

          {/* Footer Actions */}
          <div className="border-t border-slate-100 pt-8 flex flex-wrap items-center justify-between gap-4">
            <div className="flex flex-wrap items-center gap-3">
              <Link
                to="/work"
                className="btn-primary px-6 py-3"
              >
                <span>Explore Verified Work</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
              <a
                href="/cv.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary px-5 py-3 flex items-center gap-2"
                download="Odafe-Amalega-CV.pdf"
              >
                <Download className="w-4 h-4 text-slate-500" />
                <span>Download CV (PDF)</span>
              </a>
            </div>

            <Link
              to="/contact"
              className="btn-secondary px-6 py-3"
            >
              <span>Discuss a Workflow</span>
            </Link>
          </div>

        </article>

      </main>
    </div>
  );
};
