import React, { useState } from 'react';
import { SeoHead } from '../components/SeoHead';
import { EditorialPageHeader } from '../components/EditorialPageHeader';
import { CheckCircle2, ArrowUpRight, Copy, Check } from 'lucide-react';
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
  const [productRange, setProductRange] = useState('');
  const [targetMarkets, setTargetMarkets] = useState('');
  const [refId, setRefId] = useState('');
  const [copied, setCopied] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState('');

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'ContactPage',
    name: 'Show Me the Workflow | DafeDeScribe',
    url: 'https://www.dafe.name.ng/contact',
    description: 'Submit an operational process or commercial workflow for evaluation by Anthony Amalega.'
  };

  const getWhatsAppMessage = () => {
    const refLine = refId ? `\nRef: ${refId}` : '';
    if (inquiryType === 'teaching') {
      return `Hi Anthony, I would like to discuss training.\n\nGoal: ${teachingGoal || 'Not specified'}\nName: ${name}\nOrg: ${organization}\nContact: ${contactInfo}\nTools: ${currentTools}${refLine}`;
    }
    return `Hi Anthony, I want to show you a workflow.\n\nRepeated Process:\n${workflowText || 'Not specified'}\n\nName: ${name}\nCompany: ${organization}\nContact: ${contactInfo}\nCurrent Tools: ${currentTools}\nProducts: ${productRange || 'Not specified'}\nMarkets: ${targetMarkets || 'Not specified'}\nNote: ${optionalNote}${refLine}`;
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
      productRange,
      targetMarkets,
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

      setRefId(`BRIEF / DS-${Math.floor(100000 + Math.random() * 900000)}`);
      setCopied(false);
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
        description="Do not write a technical brief. Describe what happens today. Workflow evaluation and practical technical training consultation with Anthony Amalega."
        canonicalPath="/contact"
        jsonLd={jsonLd}
      />

      <main className="mx-auto max-w-4xl px-6 pb-14 pt-10 sm:px-10 sm:pb-16 sm:pt-14">
        <EditorialPageHeader
          indexLabel="CONTACT"
          eyebrow="Direct engineering consultation"
          title="Show me the workflow."
          summary={<><strong className="text-slate-950">No polished brief or RFP needed.</strong> Describe what happens manually today, where the handoffs bottleneck, and what software your team currently touches.</>}
        />

        {/* ─── INQUIRY TYPE SWITCHER ───────────────────────────── */}
        <div className="mt-10 grid border-y border-stone-300 text-xs font-mono-tech uppercase sm:grid-cols-2">
          <button
            type="button"
            onClick={() => {
              setInquiryType('workflow');
              setSubmitted(false);
            }}
              className={`min-h-[48px] px-4 py-3 transition-colors ${
              inquiryType === 'workflow'
                ? 'bg-slate-900 text-white font-semibold'
                : 'text-slate-600 hover:bg-stone-100 hover:text-slate-900'
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
              className={`min-h-[48px] border-t border-stone-300 px-4 py-3 transition-colors sm:border-l sm:border-t-0 ${
              inquiryType === 'teaching'
                ? 'bg-slate-900 text-white font-semibold'
                : 'text-slate-600 hover:bg-stone-100 hover:text-slate-900'
            }`}
          >
            Technical Training & Workshops
          </button>
        </div>

        {/* ─── SUBMISSION STATE: DOSSIER ───────────────────────── */}
        {submitted ? (
          <div className="mt-10 space-y-6">
            <div className="dossier-plate p-6 sm:p-8" role="status">
              <div className="flex items-center gap-2 font-mono-tech text-xs font-bold uppercase tracking-[0.1em] text-amber-700">
                <CheckCircle2 className="w-4 h-4" />
                <span>{t('contact.transmission')}</span>
              </div>

              <h2 className="mt-3 text-2xl sm:text-3xl font-bold text-slate-900 font-display">
                {t('contact.briefRegistered')}
              </h2>

              <dl className="mt-6 space-y-0 font-mono-tech text-xs">
                <div className="dossier-row py-2">
                  <dt className="uppercase text-slate-500">{t('contact.refLabel')}</dt>
                  <dd className="font-bold text-slate-900 text-right">{refId}</dd>
                </div>
                <div className="dossier-row py-2">
                  <dt className="uppercase text-slate-500">Name</dt>
                  <dd className="font-bold text-slate-900 text-right">{name}</dd>
                </div>
                {organization && (
                  <div className="dossier-row py-2">
                    <dt className="uppercase text-slate-500">Company</dt>
                    <dd className="font-bold text-slate-900 text-right">{organization}</dd>
                  </div>
                )}
                {inquiryType === 'workflow' && productRange && (
                  <div className="dossier-row py-2">
                    <dt className="uppercase text-slate-500">Products</dt>
                    <dd className="text-slate-900 text-right max-w-[60%] truncate">{productRange}</dd>
                  </div>
                )}
                {inquiryType === 'workflow' && targetMarkets && (
                  <div className="dossier-row py-2">
                    <dt className="uppercase text-slate-500">Markets</dt>
                    <dd className="text-slate-900 text-right max-w-[60%] truncate">{targetMarkets}</dd>
                  </div>
                )}
              </dl>

              <p className="mt-6 text-sm sm:text-base text-slate-700 font-body leading-relaxed">
                Thank you, {name || 'there'}. I personally review incoming workflows and respond within 24 hours with concrete technical notes on feasibility, potential bottlenecks, and appropriate tools.
              </p>

              <div className="mt-6 pt-4 border-t border-slate-900/15 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <span className="font-mono-tech text-[11px] uppercase tracking-[0.08em] text-slate-500">
                  {t('contact.directRouting')}
                </span>
                <div className="flex flex-wrap items-center gap-3">
                  <button
                    type="button"
                    onClick={() => {
                      const summary = `DOSSIER BRIEF\nReference: ${refId}\nName: ${name}\nCompany: ${organization}\nContact: ${contactInfo}\nProducts: ${productRange}\nMarkets: ${targetMarkets}`;
                      navigator.clipboard.writeText(summary).then(
                        () => setCopied(true),
                        () => setCopied(false)
                      );
                      setTimeout(() => setCopied(false), 2000);
                    }}
                    className="inline-flex items-center gap-1.5 px-3 py-2 font-mono-tech text-xs border border-slate-900 bg-white hover:bg-stone-100 transition-colors"
                  >
                    {copied ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Copy className="w-3.5 h-3.5" />}
                    <span>{copied ? t('contact.copied') : t('contact.copyBrief')}</span>
                  </button>
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
            </div>
          </div>
        ) : (
          /* ─── INTAKE FORM ────────────────────────────────────── */
          <form onSubmit={handleSubmit} className="mt-10 space-y-6 border-y border-stone-300 py-8 sm:px-8 sm:py-10">

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
                  className="w-full rounded-md border border-slate-300 bg-white p-4 text-sm font-body leading-relaxed text-slate-900 placeholder:text-slate-400 focus:border-amber-600 focus:outline-none focus:ring-2 focus:ring-amber-500/20"
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
                  className="w-full rounded-md border border-slate-300 bg-white p-4 text-sm font-body leading-relaxed text-slate-900 placeholder:text-slate-400 focus:border-amber-600 focus:outline-none focus:ring-2 focus:ring-amber-500/20"
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
                className="w-full rounded-md border border-slate-300 bg-white p-3 text-sm font-body text-slate-900 focus:border-amber-600 focus:outline-none focus:ring-2 focus:ring-amber-500/20"
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
                className="w-full rounded-md border border-slate-300 bg-white p-3 text-sm font-body text-slate-900 focus:border-amber-600 focus:outline-none focus:ring-2 focus:ring-amber-500/20"
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
                className="w-full rounded-md border border-slate-300 bg-white p-3 text-sm font-body text-slate-900 focus:border-amber-600 focus:outline-none focus:ring-2 focus:ring-amber-500/20"
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
                className="w-full rounded-md border border-slate-300 bg-white p-3 text-sm font-body text-slate-900 focus:border-amber-600 focus:outline-none focus:ring-2 focus:ring-amber-500/20"
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
                className="w-full rounded-md border border-slate-300 bg-white p-3 text-sm font-body text-slate-900 focus:border-amber-600 focus:outline-none focus:ring-2 focus:ring-amber-500/20"
              />
            </div>

            {inquiryType === 'workflow' && (
              <>
                {/* What do you sell? */}
                <div className="space-y-2">
                  <label htmlFor="product-range" className="block font-mono-tech text-xs uppercase tracking-[0.08em] text-slate-600">
                    {t('contact.products')}
                  </label>
                  <input
                    id="product-range"
                    name="productRange"
                    autoComplete="off"
                    type="text"
                    value={productRange}
                    onChange={(e) => setProductRange(e.target.value)}
                    placeholder="e.g. Commercial cold rooms, condensing units & spare parts"
                    className="w-full rounded-md border border-slate-300 bg-white p-3 text-sm font-body text-slate-900 focus:border-amber-600 focus:outline-none focus:ring-2 focus:ring-amber-500/20"
                  />
                </div>

                {/* Target markets */}
                <div className="space-y-2">
                  <label htmlFor="target-markets" className="block font-mono-tech text-xs uppercase tracking-[0.08em] text-slate-600">
                    {t('contact.markets')}
                  </label>
                  <input
                    id="target-markets"
                    name="targetMarkets"
                    autoComplete="off"
                    type="text"
                    value={targetMarkets}
                    onChange={(e) => setTargetMarkets(e.target.value)}
                    placeholder="e.g. North Africa, Middle East, Sub-Saharan Africa"
                    className="w-full rounded-md border border-slate-300 bg-white p-3 text-sm font-body text-slate-900 focus:border-amber-600 focus:outline-none focus:ring-2 focus:ring-amber-500/20"
                  />
                </div>
              </>
            )}

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
        <div className="mt-8 grid gap-3 border-t border-slate-200 pt-6 text-xs leading-relaxed text-slate-500 sm:grid-cols-2">
          <p className="font-mono-tech">I reply personally after reviewing the workflow. If email delivery is inconvenient, WhatsApp remains available as a direct fallback.</p>
          <p className="font-mono-tech">Confidentiality: Business processes, workflows, and sample records are reviewed exclusively by Anthony Amalega under professional discretion.</p>
        </div>

      </main>
    </div>
  );
};
