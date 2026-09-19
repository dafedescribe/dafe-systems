import React from 'react';
import { Link } from '../router/Router';
import { SeoHead } from '../components/SeoHead';
import { Breadcrumbs } from '../components/Breadcrumbs';
import { ArrowRight, Download, Printer, CheckCircle2, FileText } from 'lucide-react';

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

      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-20 space-y-12">
        <Breadcrumbs items={[{ label: 'ABOUT', path: '/about' }]} />

        {/* ─── ACTION BAR FOR DOSSIER ──────────────────────────── */}
        <div className="flex items-center justify-between border-b border-[#ded9cf] pb-4 font-mono-tech text-xs text-[#7a7770]">
          <div>
            DOCUMENT: OA-DOSSIER-2026
          </div>
          <div className="flex items-center gap-4">
            <button
              onClick={handlePrint}
              className="inline-flex items-center gap-1.5 text-[#141416] hover:text-[#96742c] transition-colors"
            >
              <Printer className="w-3.5 h-3.5" />
              <span>Print Dossier</span>
            </button>
            <Link
              to="/contact"
              className="text-[#141416] font-medium hover:text-[#96742c] transition-colors"
            >
              Direct Enquiry →
            </Link>
          </div>
        </div>

        {/* ─── PHYSICAL PAPER / DOSSIER CONTAINER ──────────────── */}
        <article className="dossier-paper p-8 sm:p-14 space-y-12 bg-[#fdfbf7] border border-[#dcd5c7]">
          
          {/* Dossier Header Stamp */}
          <div className="border-b border-[#ded9cf] pb-8 space-y-4">
            <div className="flex flex-wrap items-center justify-between gap-3 font-mono-tech text-xs">
              <span className="text-[#96742c] font-semibold tracking-wider">
                [PERSONNEL DOSSIER / TECHNICAL RECORD]
              </span>
              <span className="px-2 py-0.5 bg-[#141416] text-[#faf8f5] font-semibold">
                ACTIVE STATUS
              </span>
            </div>

            <h1 className="text-3xl sm:text-5xl font-bold tracking-tight text-[#141416]">
              Odafe Amalega
            </h1>

            <div className="text-base sm:text-lg font-mono-tech text-[#141416]">
              AI Workflow Engineer · Systems Builder · Educator
            </div>

            <div className="text-sm font-mono-tech text-[#575653]">
              Currently at <strong className="text-[#141416] font-semibold">AppClick</strong>
            </div>
          </div>

          {/* Dossier Bio */}
          <section className="space-y-4 text-base sm:text-lg text-[#3a3936] leading-relaxed">
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
          <section className="border-t border-[#ded9cf] pt-8 space-y-4">
            <div className="font-mono-tech text-xs uppercase tracking-wider text-[#7a7770]">
              [VERIFIED CAPABILITIES]
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
              {capabilities.map((cap) => (
                <div
                  key={cap}
                  className="p-2.5 border border-[#dcd5c7] bg-[#f8f5ee] font-mono-tech text-xs text-[#141416] flex items-center gap-2"
                >
                  <span className="w-1.5 h-1.5 bg-[#96742c] flex-shrink-0" />
                  <span>{cap}</span>
                </div>
              ))}
            </div>
          </section>

          {/* Selected Proof Matrix */}
          <section className="border-t border-[#ded9cf] pt-8 space-y-4">
            <div className="font-mono-tech text-xs uppercase tracking-wider text-[#7a7770]">
              [SELECTED PROOF]
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="p-4 border border-[#dcd5c7] bg-[#ffffff] space-y-1">
                <div className="font-bold text-base text-[#141416]">
                  1M+ rows
                </div>
                <p className="text-xs sm:text-sm text-[#575653]">
                  Processed programmatically in under ten minutes without spreadsheet failures.
                </p>
              </div>

              <div className="p-4 border border-[#dcd5c7] bg-[#ffffff] space-y-1">
                <div className="font-bold text-base text-[#141416]">
                  End-to-end media pipeline
                </div>
                <p className="text-xs sm:text-sm text-[#575653]">
                  Transcription through processed video output orchestrated via Python and FFmpeg.
                </p>
              </div>

              <div className="p-4 border border-[#dcd5c7] bg-[#ffffff] space-y-1">
                <div className="font-bold text-base text-[#141416]">
                  Business systems
                </div>
                <p className="text-xs sm:text-sm text-[#575653]">
                  Automation, websites, integrations and data workflows for operational teams.
                </p>
              </div>

              <div className="p-4 border border-[#dcd5c7] bg-[#ffffff] space-y-1">
                <div className="font-bold text-base text-[#141416]">
                  Teaching
                </div>
                <p className="text-xs sm:text-sm text-[#575653]">
                  AI, automation, APIs and digital-product topics de-jargonized for nontechnical learners.
                </p>
              </div>
            </div>
          </section>

          {/* Education & Credentials */}
          <section className="border-t border-[#ded9cf] pt-8 space-y-4">
            <div className="font-mono-tech text-xs uppercase tracking-wider text-[#7a7770]">
              [EDUCATION & CREDENTIALS]
            </div>

            <div className="space-y-4 text-sm text-[#141416]">
              <div className="flex flex-col sm:flex-row sm:items-baseline justify-between border-b border-[#eae5da] pb-3">
                <div>
                  <div className="font-bold text-base">Bachelor of Engineering (B.Eng)</div>
                  <div className="text-xs text-[#575653]">Federal University Oye-Ekiti</div>
                </div>
                <div className="font-mono-tech text-xs text-[#7a7770] mt-1 sm:mt-0">
                  Engineering Foundations
                </div>
              </div>

              <div className="flex flex-col sm:flex-row sm:items-baseline justify-between border-b border-[#eae5da] pb-3">
                <div>
                  <div className="font-bold text-base">ALX Training</div>
                  <div className="text-xs text-[#575653]">Virtual Assistance & Digital Workspace Operations</div>
                </div>
                <div className="font-mono-tech text-xs text-[#7a7770] mt-1 sm:mt-0">
                  Professional Programme
                </div>
              </div>
            </div>
          </section>

          {/* Dossier Footer Call to Action */}
          <div className="border-t border-[#ded9cf] pt-8 flex flex-wrap items-center justify-between gap-4">
            <Link
              to="/work"
              className="inline-flex items-center gap-2 px-6 py-3 text-xs font-mono-tech uppercase tracking-wider bg-[#141416] text-[#faf8f5] hover:bg-[#2b2b30] transition-colors"
            >
              <span>View Work</span>
              <ArrowRight className="w-4 h-4" />
            </Link>

            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-6 py-3 text-xs font-mono-tech uppercase tracking-wider bg-[#faf8f5] text-[#141416] border border-[#dcd5c7] hover:border-[#141416] transition-colors"
            >
              <span>Send Workflow</span>
            </Link>
          </div>

        </article>

      </main>
    </div>
  );
};
