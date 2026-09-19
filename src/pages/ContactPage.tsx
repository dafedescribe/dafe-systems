import React, { useState } from 'react';
import { SeoHead } from '../components/SeoHead';
import { Breadcrumbs } from '../components/Breadcrumbs';
import { ArrowRight, Send, CheckCircle2, MessageSquare, ArrowUpRight } from 'lucide-react';

export const ContactPage: React.FC = () => {
  const [inquiryType, setInquiryType] = useState<'workflow' | 'teaching'>('workflow');
  const [workflowText, setWorkflowText] = useState('');
  const [teachingGoal, setTeachingGoal] = useState('');
  const [name, setName] = useState('');
  const [organization, setOrganization] = useState('');
  const [contactInfo, setContactInfo] = useState('');
  const [optionalNote, setOptionalNote] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'ContactPage',
    name: 'Show Me the Workflow | DafeDeScribe',
    url: 'https://dafe.name.ng/contact',
    description: 'Submit an operational process or commercial workflow for evaluation by Odafe Amalega.'
  };

  const getWhatsAppMessage = () => {
    if (inquiryType === 'teaching') {
      return `Hi Odafe, I would like to discuss training.\n\nGoal: ${teachingGoal || 'Not specified'}\nName: ${name}\nOrg: ${organization}\nContact: ${contactInfo}`;
    }
    return `Hi Odafe, I want to show you a workflow.\n\nRepeated Process:\n${workflowText || 'Not specified'}\n\nName: ${name}\nCompany: ${organization}\nContact: ${contactInfo}\nNote: ${optionalNote}`;
  };

  const whatsAppUrl = `https://wa.me/2348148794458?text=${encodeURIComponent(getWhatsAppMessage())}`;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="min-h-screen">
      <SeoHead
        title="Show Me the Workflow | DafeDeScribe"
        description="Do not write a technical brief. Describe what happens today. Workflow evaluation and practical technical training consultation with Odafe Amalega."
        canonicalPath="/contact"
        jsonLd={jsonLd}
      />

      <main className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-20 space-y-12">
        <Breadcrumbs items={[{ label: 'CONTACT', path: '/contact' }]} />

        {/* ─── HEADER ──────────────────────────────────────────── */}
        <section className="space-y-4">
          <div className="font-mono-tech text-xs tracking-widest uppercase text-[#96742c]">
            [OPERATIONAL CONSULTATION & INTAKE]
          </div>

          <h1 className="text-3xl sm:text-5xl font-bold tracking-tight text-[#141416] leading-[1.15]">
            Show me the workflow.
          </h1>

          <div className="space-y-2 text-base sm:text-lg text-[#575653]">
            <p className="font-medium text-[#141416]">
              Do not write a technical brief.
            </p>
            <p>
              Describe what happens today.
            </p>
          </div>
        </section>

        {/* ─── INQUIRY TYPE SWITCHER ───────────────────────────── */}
        <div className="flex border border-[#ded9cf] bg-[#faf8f5] p-1 text-xs font-mono-tech uppercase">
          <button
            type="button"
            onClick={() => {
              setInquiryType('workflow');
              setSubmitted(false);
            }}
            className={`flex-1 py-2.5 px-4 transition-colors ${
              inquiryType === 'workflow'
                ? 'bg-[#141416] text-[#faf8f5] font-semibold'
                : 'text-[#575653] hover:text-[#141416]'
            }`}
          >
            [01] Commercial & Operational Workflow
          </button>
          <button
            type="button"
            onClick={() => {
              setInquiryType('teaching');
              setSubmitted(false);
            }}
            className={`flex-1 py-2.5 px-4 transition-colors ${
              inquiryType === 'teaching'
                ? 'bg-[#141416] text-[#faf8f5] font-semibold'
                : 'text-[#575653] hover:text-[#141416]'
            }`}
          >
            [02] Training & Workshops
          </button>
        </div>

        {/* ─── SUBMISSION STATE ────────────────────────────────── */}
        {submitted ? (
          <div className="border border-[#141416] bg-[#f4f1eb] p-8 sm:p-10 space-y-6">
            <div className="flex items-center gap-3">
              <CheckCircle2 className="w-6 h-6 text-[#96742c]" />
              <h2 className="text-2xl font-bold text-[#141416]">
                Workflow Received.
              </h2>
            </div>
            <p className="text-sm sm:text-base text-[#4a4946] leading-relaxed">
              Thank you, {name || 'there'}. I personally review incoming workflows and respond with specific technical notes on feasibility, potential bottlenecks, and appropriate tools.
            </p>
            <div className="pt-2 border-t border-[#ded9cf] flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <span className="font-mono-tech text-xs text-[#7a7770]">
                Need immediate discussion?
              </span>
              <a
                href={whatsAppUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 text-xs font-mono-tech uppercase tracking-wider bg-[#141416] text-[#faf8f5] hover:bg-[#2b2b30] transition-colors"
              >
                <span>Send to WhatsApp Now</span>
                <ArrowUpRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        ) : (
          /* ─── INTAKE FORM ───────────────────────────────────── */
          <form onSubmit={handleSubmit} className="border border-[#ded9cf] bg-[#ffffff] p-6 sm:p-10 space-y-6">
            
            {/* Primary Question */}
            {inquiryType === 'workflow' ? (
              <div className="space-y-2">
                <label htmlFor="workflow-input" className="block text-sm font-bold text-[#141416]">
                  What keeps getting repeated?
                </label>
                <textarea
                  id="workflow-input"
                  required
                  rows={5}
                  value={workflowText}
                  onChange={(e) => setWorkflowText(e.target.value)}
                  placeholder="Example: A customer messages us on WhatsApp, we ask for their site details, send the information to an engineer and then prepare a quote manually."
                  className="w-full p-4 border border-[#ded9cf] bg-[#faf8f5] text-sm text-[#141416] focus:outline-none focus:border-[#141416] transition-colors placeholder:text-[#8c8880] leading-relaxed"
                />
              </div>
            ) : (
              <div className="space-y-2">
                <label htmlFor="teaching-goal" className="block text-sm font-bold text-[#141416]">
                  What do you want people to be able to do after the session?
                </label>
                <textarea
                  id="teaching-goal"
                  required
                  rows={5}
                  value={teachingGoal}
                  onChange={(e) => setTeachingGoal(e.target.value)}
                  placeholder="Example: I want our 12 operational managers to understand how APIs connect spreadsheets to our CRM, and build their first automated triage workflow in n8n without writing code."
                  className="w-full p-4 border border-[#ded9cf] bg-[#faf8f5] text-sm text-[#141416] focus:outline-none focus:border-[#141416] transition-colors placeholder:text-[#8c8880] leading-relaxed"
                />
              </div>
            )}

            {/* Name */}
            <div className="space-y-2">
              <label htmlFor="user-name" className="block text-xs font-mono-tech uppercase text-[#7a7770]">
                Name
              </label>
              <input
                id="user-name"
                type="text"
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Jane Smith"
                className="w-full p-3 border border-[#ded9cf] bg-[#faf8f5] text-sm text-[#141416] focus:outline-none focus:border-[#141416] transition-colors"
              />
            </div>

            {/* Company / Website */}
            <div className="space-y-2">
              <label htmlFor="user-company" className="block text-xs font-mono-tech uppercase text-[#7a7770]">
                {inquiryType === 'workflow' ? 'Company / website' : 'Organisation / school / business'}
              </label>
              <input
                id="user-company"
                type="text"
                required
                value={organization}
                onChange={(e) => setOrganization(e.target.value)}
                placeholder={inquiryType === 'workflow' ? 'Apex Industrial Supplies (apexsupplies.com)' : 'St. Jude Educational Institute'}
                className="w-full p-3 border border-[#ded9cf] bg-[#faf8f5] text-sm text-[#141416] focus:outline-none focus:border-[#141416] transition-colors"
              />
            </div>

            {/* Email or WhatsApp */}
            <div className="space-y-2">
              <label htmlFor="user-contact" className="block text-xs font-mono-tech uppercase text-[#7a7770]">
                Email or WhatsApp
              </label>
              <input
                id="user-contact"
                type="text"
                required
                value={contactInfo}
                onChange={(e) => setContactInfo(e.target.value)}
                placeholder="jane@company.com or +234..."
                className="w-full p-3 border border-[#ded9cf] bg-[#faf8f5] text-sm text-[#141416] focus:outline-none focus:border-[#141416] transition-colors"
              />
            </div>

            {/* Optional: Attach an example / workflow notes */}
            <div className="space-y-2">
              <label htmlFor="optional-notes" className="block text-xs font-mono-tech uppercase text-[#7a7770]">
                {inquiryType === 'workflow' ? 'Optional: Link to sample document or additional context' : 'Optional: Audience background & cohort size'}
              </label>
              <input
                id="optional-notes"
                type="text"
                value={optionalNote}
                onChange={(e) => setOptionalNote(e.target.value)}
                placeholder={inquiryType === 'workflow' ? 'Google Drive / Dropbox link, or extra details' : 'e.g. 15 participants, nontechnical operations team'}
                className="w-full p-3 border border-[#ded9cf] bg-[#faf8f5] text-sm text-[#141416] focus:outline-none focus:border-[#141416] transition-colors"
              />
            </div>

            {/* Form Submit & Alternative Link */}
            <div className="pt-4 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <button
                type="submit"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 text-xs font-mono-tech uppercase tracking-wider bg-[#141416] text-[#faf8f5] hover:bg-[#2b2b30] transition-colors"
              >
                <span>{inquiryType === 'workflow' ? 'Send Workflow' : 'Discuss Training'}</span>
                <Send className="w-3.5 h-3.5" />
              </button>

              <a
                href={whatsAppUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-xs font-mono-tech text-[#575653] hover:text-[#141416] transition-colors"
              >
                <span>Or message directly on WhatsApp (+2348148794458)</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
            </div>

          </form>
        )}

        {/* ─── CONFIDENTIALITY NOTE ────────────────────────────── */}
        <div className="border-t border-[#ded9cf] pt-6 font-mono-tech text-xs text-[#7a7770] leading-relaxed">
          CONFIDENTIALITY: All workflows, business processes, and shared sample documents are handled directly by Odafe Amalega under strict professional discretion.
        </div>

      </main>
    </div>
  );
};
