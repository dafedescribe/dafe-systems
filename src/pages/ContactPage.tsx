import React, { useState } from 'react';
import { SeoHead } from '../components/SeoHead';
import { Breadcrumbs } from '../components/Breadcrumbs';
import { CheckCircle2, ArrowUpRight } from 'lucide-react';
import { useI18n } from '../i18n/I18nProvider';

export const ContactPage: React.FC = () => {
  const { t } = useI18n();
  const [inquiryType, setInquiryType] = useState<'workflow' | 'teaching'>('workflow');
  const [workflowText, setWorkflowText] = useState('');
  const [teachingGoal, setTeachingGoal] = useState('');
  const [name, setName] = useState('');
  const [organization, setOrganization] = useState('');
  const [contactInfo, setContactInfo] = useState('');
  const [currentTools, setCurrentTools] = useState('');
  const [optionalNote, setOptionalNote] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState('');

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'ContactPage',
    name: 'Show Me the Workflow | DafeDeScribe',
    url: 'https://www.dafe.name.ng/contact',
    description: 'Submit an operational process or commercial workflow for evaluation by Odafe Amalega.'
  };

  const getWhatsAppMessage = () => {
    if (inquiryType === 'teaching') {
      return `Hi Odafe, I would like to discuss training.\n\nGoal: ${teachingGoal || 'Not specified'}\nName: ${name}\nOrg: ${organization}\nContact: ${contactInfo}\nTools: ${currentTools}`;
    }
    return `Hi Odafe, I want to show you a workflow.\n\nRepeated Process:\n${workflowText || 'Not specified'}\n\nName: ${name}\nCompany: ${organization}\nContact: ${contactInfo}\nCurrent Tools: ${currentTools}\nNote: ${optionalNote}`;
  };

  const whatsAppUrl = `https://wa.me/2349132480302?text=${encodeURIComponent(getWhatsAppMessage())}`;

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitError('');

    const formData = new FormData(e.currentTarget);
    const payload = {
      inquiryType,
      description: inquiryType === 'workflow' ? workflowText : teachingGoal,
      name,
      organization,
      contactInfo,
      currentTools,
      optionalNote,
      website: String(formData.get('website') || ''),
    };

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });
      const result = await response.json().catch(() => ({}));

      if (!response.ok) {
        throw new Error(result.error || 'Message delivery failed. Please use WhatsApp instead.');
      }

      setSubmitted(true);
    } catch (error) {
      setSubmitError(error instanceof Error ? error.message : 'Message delivery failed. Please use WhatsApp instead.');
    } finally {
      setIsSubmitting(false);
    }
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
          <div className="flex items-center gap-2 font-mono-tech text-xs tracking-[0.1em] uppercase text-amber-700 font-semibold">
            <span>Direct Engineering Consultation</span>
          </div>

          <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-slate-900 font-display leading-[1.15]">
            Show me the workflow.
          </h1>

          <div className="space-y-1.5 text-base sm:text-lg text-slate-600 font-body">
            <p className="font-semibold text-slate-900">
              No polished brief or RFP needed.
            </p>
            <p>
              Simply describe what happens manually today, where the handoffs bottleneck, and what software your team currently touches.
            </p>
          </div>
        </section>

        {/* ─── INQUIRY TYPE SWITCHER ───────────────────────────── */}
        <div className="flex border border-slate-200 bg-slate-100 p-1 rounded-lg text-xs font-mono-tech uppercase">
          <button
            type="button"
            onClick={() => {
              setInquiryType('workflow');
              setSubmitted(false);
            }}
              className={`flex-1 min-h-[44px] py-3 px-4 rounded-md flex items-center justify-center transition-colors ${
              inquiryType === 'workflow'
                ? 'bg-slate-900 text-white font-semibold shadow-sm'
                : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            Commercial & Operational Workflows
          </button>
          <button
            type="button"
            onClick={() => {
              setInquiryType('teaching');
              setSubmitted(false);
            }}
              className={`flex-1 min-h-[44px] py-3 px-4 rounded-md flex items-center justify-center transition-colors ${
              inquiryType === 'teaching'
                ? 'bg-slate-900 text-white font-semibold shadow-sm'
                : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            Technical Training & Workshops
          </button>
        </div>

        {/* ─── SUBMISSION STATE ────────────────────────────────── */}
        {submitted ? (
          <div className="catalogue-sheet p-8 sm:p-10 space-y-6 border-t-2 border-t-amber-600">
            <div className="flex items-center gap-3">
              <CheckCircle2 className="w-6 h-6 text-emerald-600" />
              <h2 className="text-2xl font-bold text-slate-900 font-display">
                {t('contact.received')}
              </h2>
            </div>
            <p className="text-sm sm:text-base text-slate-700 font-body leading-relaxed">
              Thank you, {name || 'there'}. I personally review incoming workflows and respond within 24 hours with concrete technical notes on feasibility, potential bottlenecks, and appropriate tools.
            </p>
            <div className="pt-3 border-t border-slate-200 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <span className="font-mono-tech text-xs text-slate-500">
                Need an immediate conversation?
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
          /* ─── INTAKE FORM ────────────────────────────────────── */
          <form onSubmit={handleSubmit} className="catalogue-sheet p-6 sm:p-10 space-y-6">

            <div className="absolute -left-[9999px]" aria-hidden="true">
              <label htmlFor="website">Website</label>
              <input id="website" name="website" type="text" tabIndex={-1} autoComplete="off" />
            </div>
            
            {/* Primary Question */}
            {inquiryType === 'workflow' ? (
              <div className="space-y-2">
                <label htmlFor="workflow-input" className="block font-mono-tech text-xs uppercase tracking-[0.08em] font-semibold text-slate-900">
                  What keeps getting repeated?
                </label>
                <textarea
                  id="workflow-input"
                  name="description"
                  autoComplete="off"
                  required
                  rows={5}
                  value={workflowText}
                  onChange={(e) => setWorkflowText(e.target.value)}
                  placeholder="Example: A customer messages us on WhatsApp or email, we extract site details, send the spec to an engineer, and then assemble a quote manually across three spreadsheets."
                  className="w-full p-4 text-sm font-body text-slate-900 placeholder:text-slate-400 bg-white border border-slate-200 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-amber-500/20 focus:border-amber-600 leading-relaxed"
                />
              </div>
            ) : (
              <div className="space-y-2">
                <label htmlFor="teaching-goal" className="block font-mono-tech text-xs uppercase tracking-[0.08em] font-semibold text-slate-900">
                  What should your team be able to build after the session?
                </label>
                <textarea
                  id="teaching-goal"
                  name="description"
                  autoComplete="off"
                  required
                  rows={5}
                  value={teachingGoal}
                  onChange={(e) => setTeachingGoal(e.target.value)}
                  placeholder="Example: I want our 12 operational managers to understand how APIs connect spreadsheets to our database, and build their first automated triage workflow without code."
                  className="w-full p-4 text-sm font-body text-slate-900 placeholder:text-slate-400 bg-white border border-slate-200 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-amber-500/20 focus:border-amber-600 leading-relaxed"
                />
              </div>
            )}

            {/* Name */}
            <div className="space-y-2">
              <label htmlFor="user-name" className="block font-mono-tech text-xs uppercase tracking-[0.08em] text-slate-600">
                Your Name
              </label>
              <input
                id="user-name"
                name="name"
                autoComplete="name"
                type="text"
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Jane Smith"
                className="w-full p-3 text-sm font-body text-slate-900 bg-white border border-slate-200 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-amber-500/20 focus:border-amber-600"
              />
            </div>

            <details className="group border-t border-slate-200 pt-5">
              <summary className="cursor-pointer list-none font-mono-tech text-xs uppercase tracking-[0.08em] text-slate-600">
                Add context <span className="text-slate-400">(optional)</span>
              </summary>

            {/* Company / Website */}
            <div className="space-y-2 pt-5">
              <label htmlFor="user-company" className="block font-mono-tech text-xs uppercase tracking-[0.08em] text-slate-600">
                {inquiryType === 'workflow' ? 'Company / Website' : 'Organisation / School / Business'}
              </label>
              <input
                id="user-company"
                name="organization"
                autoComplete="organization"
                type="text"
                value={organization}
                onChange={(e) => setOrganization(e.target.value)}
                placeholder={inquiryType === 'workflow' ? 'Apex Industrial Supplies (apexsupplies.com)' : 'St. Jude Educational Institute'}
                className="w-full p-3 text-sm font-body text-slate-900 bg-white border border-slate-200 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-amber-500/20 focus:border-amber-600"
              />
            </div>

            {/* Email or WhatsApp */}
            <div className="space-y-2">
              <label htmlFor="user-contact" className="block font-mono-tech text-xs uppercase tracking-[0.08em] text-slate-600">
                Email or WhatsApp Number
              </label>
              <input
                id="user-contact"
                name="contactInfo"
                autoComplete="off"
                type="text"
                required
                value={contactInfo}
                onChange={(e) => setContactInfo(e.target.value)}
                placeholder="jane@company.com or +234..."
                className="w-full p-3 text-sm font-body text-slate-900 bg-white border border-slate-200 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-amber-500/20 focus:border-amber-600"
              />
            </div>

            {/* Current Tools */}
            <div className="space-y-2">
              <label htmlFor="current-tools" className="block font-mono-tech text-xs uppercase tracking-[0.08em] text-slate-600">
                Current Tools (Software / Spreadsheets / ERP)
              </label>
              <input
                id="current-tools"
                name="currentTools"
                autoComplete="off"
                type="text"
                value={currentTools}
                onChange={(e) => setCurrentTools(e.target.value)}
                placeholder="Excel, Gmail, QuickBooks, WhatsApp, custom ERP, etc."
                className="w-full p-3 text-sm font-body text-slate-900 bg-white border border-slate-200 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-amber-500/20 focus:border-amber-600"
              />
            </div>

            {/* Optional: Example Link / Notes */}
            <div className="space-y-2">
              <label htmlFor="optional-notes" className="block font-mono-tech text-xs uppercase tracking-[0.08em] text-slate-600">
                {inquiryType === 'workflow' ? 'Sample Document Link or Additional Notes (Optional)' : 'Audience Background & Cohort Size (Optional)'}
              </label>
              <input
                id="optional-notes"
                name="optionalNote"
                autoComplete="off"
                type="text"
                value={optionalNote}
                onChange={(e) => setOptionalNote(e.target.value)}
                placeholder={inquiryType === 'workflow' ? 'Google Drive / Dropbox link, or extra context' : 'e.g. 15 participants, operations & finance team'}
                className="w-full p-3 text-sm font-body text-slate-900 bg-white border border-slate-200 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-amber-500/20 focus:border-amber-600"
              />
            </div>

            </details>

            {/* Submit Button & WhatsApp Alternative */}
            <div className="pt-4 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <button
                type="submit"
                disabled={isSubmitting}
                className="btn-primary px-7 py-3.5"
              >
                <span>{isSubmitting ? t('contact.sending') : inquiryType === 'workflow' ? t('contact.submit') : t('contact.trainingSubmit')}</span>
              </button>

              <a
                href={whatsAppUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 font-mono-tech text-xs text-slate-600 hover:text-slate-900 transition-colors"
              >
                <span>{t('contact.whatsapp')}</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
            </div>

            <p aria-live="polite" className="text-sm text-red-700" role="alert">
              {submitError}
            </p>

          </form>
        )}

        {/* ─── CONFIDENTIALITY NOTE ────────────────────────────── */}
        <div className="border-t border-slate-200 pt-6 font-mono-tech text-xs text-slate-500 leading-relaxed">
          Confidentiality: All business processes, workflows, and sample records are reviewed exclusively by Odafe Amalega under strict professional discretion.
        </div>

      </main>
    </div>
  );
};
