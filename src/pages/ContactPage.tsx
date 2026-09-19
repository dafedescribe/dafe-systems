import React, { useState } from 'react';
import { SeoHead } from '../components/SeoHead';
import { Breadcrumbs } from '../components/Breadcrumbs';
import { ArrowRight, Send, CheckCircle2, ArrowUpRight } from 'lucide-react';

export const ContactPage: React.FC = () => {
  const [inquiryType, setInquiryType] = useState<'workflow' | 'teaching'>('workflow');
  const [workflowText, setWorkflowText] = useState('');
  const [teachingGoal, setTeachingGoal] = useState('');
  const [name, setName] = useState('');
  const [organization, setOrganization] = useState('');
  const [contactInfo, setContactInfo] = useState('');
  const [currentTools, setCurrentTools] = useState('');
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
      return `Hi Odafe, I would like to discuss training.\n\nGoal: ${teachingGoal || 'Not specified'}\nName: ${name}\nOrg: ${organization}\nContact: ${contactInfo}\nTools: ${currentTools}`;
    }
    return `Hi Odafe, I want to show you a workflow.\n\nRepeated Process:\n${workflowText || 'Not specified'}\n\nName: ${name}\nCompany: ${organization}\nContact: ${contactInfo}\nCurrent Tools: ${currentTools}\nNote: ${optionalNote}`;
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

      <main className="max-w-3xl mx-auto px-6 sm:px-10 py-12 sm:py-20 space-y-12">
        <Breadcrumbs items={[{ label: 'CONTACT', path: '/contact' }]} />

        {/* ─── HEADER ──────────────────────────────────────────── */}
        <section className="space-y-4">
          <div className="flex items-center gap-2 font-mono-tech text-xs tracking-[0.1em] uppercase text-[#B58A2A]">
            <span className="font-semibold">WORKFLOW ENQUIRY / REF. NEW</span>
            <span className="text-[#D9D4C8]">|</span>
            <span className="text-[#77736A]">SPECIFICATION SHEET</span>
          </div>

          <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-[#181816] font-display leading-[1.15]">
            Show me the workflow.
          </h1>

          <div className="space-y-1 text-base sm:text-lg text-[#77736A] font-body">
            <p className="font-semibold text-[#181816]">
              Do not write a technical brief.
            </p>
            <p>
              Describe what happens today.
            </p>
          </div>
        </section>

        {/* ─── INQUIRY TYPE SWITCHER ───────────────────────────── */}
        <div className="flex border border-[#D9D4C8] bg-[#F5F1E7] p-1 text-xs font-mono-tech uppercase">
          <button
            type="button"
            onClick={() => {
              setInquiryType('workflow');
              setSubmitted(false);
            }}
            className={`flex-1 py-2.5 px-4 transition-colors ${
              inquiryType === 'workflow'
                ? 'bg-[#181816] text-[#FCFBF7] font-semibold'
                : 'text-[#77736A] hover:text-[#181816]'
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
                ? 'bg-[#181816] text-[#FCFBF7] font-semibold'
                : 'text-[#77736A] hover:text-[#181816]'
            }`}
          >
            [02] Training & Workshops
          </button>
        </div>

        {/* ─── SUBMISSION STATE ────────────────────────────────── */}
        {submitted ? (
          <div className="catalogue-sheet p-8 sm:p-10 space-y-6 border-l-4 border-l-[#B58A2A]">
            <div className="flex items-center gap-3">
              <CheckCircle2 className="w-6 h-6 text-[#B58A2A]" />
              <h2 className="text-2xl font-bold text-[#181816] font-display">
                Workflow Specification Logged.
              </h2>
            </div>
            <p className="text-sm sm:text-base text-[#33312C] font-body leading-relaxed">
              Thank you, {name || 'there'}. I personally review incoming workflows and respond with specific technical notes on feasibility, potential bottlenecks, and appropriate tools.
            </p>
            <div className="pt-3 border-t border-[#D9D4C8] flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <span className="font-mono-tech text-xs text-[#77736A]">
                Need immediate discussion?
              </span>
              <a
                href={whatsAppUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary px-5 py-2.5"
              >
                <span>Send to WhatsApp Now</span>
                <ArrowUpRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        ) : (
          /* ─── INTAKE FORM (SPECIFICATION SHEET STYLE) ────────── */
          <form onSubmit={handleSubmit} className="catalogue-sheet p-6 sm:p-10 space-y-6">
            
            {/* Primary Question */}
            {inquiryType === 'workflow' ? (
              <div className="space-y-2">
                <label htmlFor="workflow-input" className="block font-mono-tech text-xs uppercase tracking-[0.08em] font-semibold text-[#181816]">
                  WHAT KEEPS GETTING REPEATED?
                </label>
                <textarea
                  id="workflow-input"
                  required
                  rows={5}
                  value={workflowText}
                  onChange={(e) => setWorkflowText(e.target.value)}
                  placeholder="Example: A customer messages us on WhatsApp, we ask for their site details, send the information to an engineer and then prepare a quote manually."
                  className="catalogue-input w-full p-4 text-sm font-body text-[#181816] placeholder:text-[#AAA397] leading-relaxed"
                />
              </div>
            ) : (
              <div className="space-y-2">
                <label htmlFor="teaching-goal" className="block font-mono-tech text-xs uppercase tracking-[0.08em] font-semibold text-[#181816]">
                  WHAT DO YOU WANT PEOPLE TO BE ABLE TO DO AFTER THE SESSION?
                </label>
                <textarea
                  id="teaching-goal"
                  required
                  rows={5}
                  value={teachingGoal}
                  onChange={(e) => setTeachingGoal(e.target.value)}
                  placeholder="Example: I want our 12 operational managers to understand how APIs connect spreadsheets to our CRM, and build their first automated triage workflow in n8n without writing code."
                  className="catalogue-input w-full p-4 text-sm font-body text-[#181816] placeholder:text-[#AAA397] leading-relaxed"
                />
              </div>
            )}

            {/* Name */}
            <div className="space-y-2">
              <label htmlFor="user-name" className="block font-mono-tech text-xs uppercase tracking-[0.08em] text-[#77736A]">
                NAME
              </label>
              <input
                id="user-name"
                type="text"
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Jane Smith"
                className="catalogue-input w-full p-3 text-sm font-body text-[#181816]"
              />
            </div>

            {/* Company / Website */}
            <div className="space-y-2">
              <label htmlFor="user-company" className="block font-mono-tech text-xs uppercase tracking-[0.08em] text-[#77736A]">
                {inquiryType === 'workflow' ? 'COMPANY / WEBSITE' : 'ORGANISATION / SCHOOL / BUSINESS'}
              </label>
              <input
                id="user-company"
                type="text"
                required
                value={organization}
                onChange={(e) => setOrganization(e.target.value)}
                placeholder={inquiryType === 'workflow' ? 'Apex Industrial Supplies (apexsupplies.com)' : 'St. Jude Educational Institute'}
                className="catalogue-input w-full p-3 text-sm font-body text-[#181816]"
              />
            </div>

            {/* Email or WhatsApp */}
            <div className="space-y-2">
              <label htmlFor="user-contact" className="block font-mono-tech text-xs uppercase tracking-[0.08em] text-[#77736A]">
                EMAIL OR WHATSAPP
              </label>
              <input
                id="user-contact"
                type="text"
                required
                value={contactInfo}
                onChange={(e) => setContactInfo(e.target.value)}
                placeholder="jane@company.com or +234..."
                className="catalogue-input w-full p-3 text-sm font-body text-[#181816]"
              />
            </div>

            {/* Current Tools */}
            <div className="space-y-2">
              <label htmlFor="current-tools" className="block font-mono-tech text-xs uppercase tracking-[0.08em] text-[#77736A]">
                CURRENT TOOLS (SOFTWARE / SPREADSHEETS)
              </label>
              <input
                id="current-tools"
                type="text"
                value={currentTools}
                onChange={(e) => setCurrentTools(e.target.value)}
                placeholder="Excel, Gmail, QuickBooks, WhatsApp, custom ERP, etc."
                className="catalogue-input w-full p-3 text-sm font-body text-[#181816]"
              />
            </div>

            {/* Optional: Example Link / Notes */}
            <div className="space-y-2">
              <label htmlFor="optional-notes" className="block font-mono-tech text-xs uppercase tracking-[0.08em] text-[#77736A]">
                {inquiryType === 'workflow' ? 'OPTIONAL: SAMPLE DOCUMENT LINK OR CONTEXT' : 'OPTIONAL: AUDIENCE BACKGROUND & COHORT SIZE'}
              </label>
              <input
                id="optional-notes"
                type="text"
                value={optionalNote}
                onChange={(e) => setOptionalNote(e.target.value)}
                placeholder={inquiryType === 'workflow' ? 'Google Drive / Dropbox link, or extra details' : 'e.g. 15 participants, nontechnical operations team'}
                className="catalogue-input w-full p-3 text-sm font-body text-[#181816]"
              />
            </div>

            {/* Submit Button & WhatsApp Alternative */}
            <div className="pt-4 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <button
                type="submit"
                className="btn-primary px-7 py-3.5"
              >
                <span>{inquiryType === 'workflow' ? 'SEND WORKFLOW →' : 'DISCUSS TRAINING →'}</span>
              </button>

              <a
                href={whatsAppUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 font-mono-tech text-xs text-[#77736A] hover:text-[#181816] transition-colors"
              >
                <span>Or message directly on WhatsApp (+2348148794458)</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
            </div>

          </form>
        )}

        {/* ─── CONFIDENTIALITY NOTE ────────────────────────────── */}
        <div className="border-t border-[#D9D4C8] pt-6 font-mono-tech text-xs text-[#77736A] leading-relaxed">
          CONFIDENTIALITY: All workflows, business processes, and shared sample documents are handled directly by Odafe Amalega under strict professional discretion.
        </div>

      </main>
    </div>
  );
};
