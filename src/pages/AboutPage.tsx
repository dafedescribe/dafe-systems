import React from 'react';
import { Link } from '../router/Router';
import { SeoHead } from '../components/SeoHead';
import { Breadcrumbs } from '../components/Breadcrumbs';
import { ArrowRight, Printer, CheckCircle2 } from 'lucide-react';

export const AboutPage: React.FC = () => {
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
    url: 'https://dafe.name.ng/about',
    description: 'AI Workflow Engineer, Systems Builder, and Educator currently at AppClick, specializing in industrial sales workflows and operational automation.'
  };

  const capabilities = [
    'Workflow architecture',
    'Python scripting',
    'API integration',
    'n8n',
    'browser automation',
    'data processing',
    'Google integrations',
    'AI workflows',
    'web applications',
    'AI-assisted media systems',
    'technical education'
  ];

  const handlePrint = () => {
    if (typeof window !== 'undefined') {
      window.print();
    }
  };

  return (
    <div className="min-h-screen">
      <SeoHead
        title="Odafe Amalega | AI Workflow Engineer & Educator"
        description="Odafe Amalega: AI Workflow Engineer, Systems Builder, and Educator currently at AppClick. Industrial commercial workflows, data processing, and practical technical instruction."
        canonicalPath="/about"
        jsonLd={jsonLd}
      />

      <main className="max-w-4xl mx-auto px-6 sm:px-12 py-12 sm:py-20 space-y-12">
        <Breadcrumbs items={[{ label: 'ABOUT', path: '/about' }]} />

        {/* ─── ACTION BAR FOR DOSSIER ──────────────────────────── */}
        <div className="flex items-center justify-between border-b border-[#D9D4C8] pb-4 font-mono-tech text-xs text-[#77736A]">
          <div className="flex items-center gap-2">
            <span className="text-[#B58A2A] font-semibold">PERSONNEL FILE / ODAFE AMALEGA</span>
            <span className="text-[#D9D4C8]">|</span>
            <span>REF. DA-2026</span>
          </div>
          <div className="flex items-center gap-4">
            <button
              onClick={handlePrint}
              className="inline-flex items-center gap-1.5 text-[#181816] hover:text-[#B58A2A] transition-colors"
            >
              <Printer className="w-3.5 h-3.5" />
              <span>Print Dossier</span>
            </button>
            <Link
              to="/contact"
              className="text-[#181816] font-semibold hover:text-[#B58A2A] transition-colors"
            >
              Direct Enquiry →
            </Link>
          </div>
        </div>

        {/* ─── PHYSICAL PAPER DOSSIER SHEET ────────────────────── */}
        <article className="catalogue-sheet p-8 sm:p-14 space-y-12 bg-[#FFFFFF]">
          
          {/* Header Block */}
          <div className="border-b border-[#D9D4C8] pb-8 space-y-3">
            <div className="flex flex-wrap items-center justify-between gap-2 font-mono-tech text-xs">
              <span className="text-[#B58A2A] font-semibold tracking-wider">
                TECHNICAL DOSSIER · RECORD OF COMPETENCE
              </span>
              <span className="px-2 py-0.5 bg-[#F5F1E7] text-[#33312C] border border-[#D9D4C8] font-semibold">
                ACTIVE STATUS
              </span>
            </div>

            <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-[#181816] font-display">
              Odafe Amalega
            </h1>

            <div className="text-base sm:text-lg font-mono-tech text-[#181816]">
              AI Workflow Engineer · Systems Builder · Educator
            </div>

            <div className="text-sm font-mono-tech text-[#77736A]">
              Currently at <strong className="text-[#181816] font-semibold">AppClick</strong>
            </div>
          </div>

          {/* Dossier Body Copy */}
          <section className="space-y-4 text-base sm:text-lg text-[#33312C] font-body leading-relaxed">
            <p>
              I work across workflow automation, APIs, Python, AI, data and lightweight software.
            </p>
            <p>
              My work usually begins with understanding how information moves through a process and identifying the steps a computer can handle reliably.
            </p>
            <p>
              My current commercial focus is industrial and operational businesses, particularly the work surrounding enquiries, RFQs, tenders, quotations, documents and reporting.
            </p>
            <p>
              I also teach AI and automation, which has made explaining complex systems in plain language a central part of how I work.
            </p>
          </section>

          {/* Capabilities Grid */}
          <section className="border-t border-[#D9D4C8] pt-8 space-y-4">
            <div className="font-mono-tech text-xs uppercase tracking-[0.1em] text-[#B58A2A] font-semibold">
              [CAPABILITIES]
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5">
              {capabilities.map((cap) => (
                <div
                  key={cap}
                  className="p-3 border border-[#D9D4C8] bg-[#FCFBF7] font-mono-tech text-xs text-[#181816] flex items-center gap-2"
                >
                  <span className="w-1.5 h-1.5 bg-[#B58A2A] flex-shrink-0" />
                  <span>{cap}</span>
                </div>
              ))}
            </div>
          </section>

          {/* Selected Proof Matrix */}
          <section className="border-t border-[#D9D4C8] pt-8 space-y-4">
            <div className="font-mono-tech text-xs uppercase tracking-[0.1em] text-[#B58A2A] font-semibold">
              [SELECTED PROOF]
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="p-4 border border-[#D9D4C8] bg-[#FCFBF7] space-y-1">
                <div className="font-bold text-base text-[#181816] font-body">
                  1M+ rows
                </div>
                <p className="text-xs sm:text-sm text-[#77736A] font-body">
                  Processed programmatically in under ten minutes without spreadsheet failures.
                </p>
              </div>

              <div className="p-4 border border-[#D9D4C8] bg-[#FCFBF7] space-y-1">
                <div className="font-bold text-base text-[#181816] font-body">
                  End-to-end media pipeline
                </div>
                <p className="text-xs sm:text-sm text-[#77736A] font-body">
                  Transcription through processed video output orchestrated via Python and FFmpeg.
                </p>
              </div>

              <div className="p-4 border border-[#D9D4C8] bg-[#FCFBF7] space-y-1">
                <div className="font-bold text-base text-[#181816] font-body">
                  Business systems
                </div>
                <p className="text-xs sm:text-sm text-[#77736A] font-body">
                  Automation, websites, integrations and data workflows for operational teams.
                </p>
              </div>

              <div className="p-4 border border-[#D9D4C8] bg-[#FCFBF7] space-y-1">
                <div className="font-bold text-base text-[#181816] font-body">
                  Teaching
                </div>
                <p className="text-xs sm:text-sm text-[#77736A] font-body">
                  AI, automation, APIs and digital-product topics de-jargonized for nontechnical learners.
                </p>
              </div>
            </div>
          </section>

          {/* Education & Credentials */}
          <section className="border-t border-[#D9D4C8] pt-8 space-y-4">
            <div className="font-mono-tech text-xs uppercase tracking-[0.1em] text-[#B58A2A] font-semibold">
              [EDUCATION & FORMAL TRAINING]
            </div>

            <div className="space-y-4 text-sm text-[#181816]">
              <div className="flex flex-col sm:flex-row sm:items-baseline justify-between border-b border-[#D9D4C8] pb-3">
                <div>
                  <div className="font-bold text-base font-body">Bachelor of Engineering (B.Eng)</div>
                  <div className="text-xs text-[#77736A] font-mono-tech">Federal University Oye-Ekiti</div>
                </div>
                <div className="font-mono-tech text-xs text-[#77736A] mt-1 sm:mt-0">
                  Engineering Foundations
                </div>
              </div>

              <div className="flex flex-col sm:flex-row sm:items-baseline justify-between border-b border-[#D9D4C8] pb-3">
                <div>
                  <div className="font-bold text-base font-body">ALX Training</div>
                  <div className="text-xs text-[#77736A] font-mono-tech">Virtual Assistance & Operations</div>
                </div>
                <div className="font-mono-tech text-xs text-[#77736A] mt-1 sm:mt-0">
                  Professional Programme
                </div>
              </div>
            </div>
          </section>

          {/* Dossier Footer Actions */}
          <div className="border-t border-[#D9D4C8] pt-8 flex flex-wrap items-center justify-between gap-4">
            <Link
              to="/work"
              className="btn-primary px-6 py-3.5"
            >
              <span>View Work</span>
              <ArrowRight className="w-4 h-4" />
            </Link>

            <Link
              to="/contact"
              className="btn-secondary px-6 py-3.5"
            >
              <span>Send Workflow</span>
            </Link>
          </div>

        </article>

      </main>
    </div>
  );
};
