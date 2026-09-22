import React from 'react';
import { ArrowRight, ArrowUpRight, Download } from 'lucide-react';
import { EditorialPageHeader } from '../components/EditorialPageHeader';
import { EditorialSection } from '../components/EditorialSection';
import { FounderPortrait } from '../components/FounderPortrait';
import { SeoHead } from '../components/SeoHead';
import { TrustRail } from '../components/TrustRail';
import { Link } from '../router/Router';

const capabilities = [
  'Workflow architecture',
  'Python development',
  'REST and webhook APIs',
  'n8n workflow automation',
  'Browser and web automation',
  'Data cleaning and Parquet pipelines',
  'Google Workspace and cloud sync',
  'Deterministic AI orchestration',
  'Corporate technical instruction',
] as const;

export const AboutPage: React.FC = () => (
  <div className="min-h-screen">
    <SeoHead title="About Odafe Amalega | Workflow Systems Builder & Educator" description="Odafe Amalega is an industrial engineering graduate, workflow systems builder, and technical educator based in Ibadan, Nigeria and working globally." canonicalPath="/about" />
    <main className="mx-auto max-w-[1200px] px-6 pb-16 pt-10 sm:px-12 sm:pb-20 sm:pt-14">
      <EditorialPageHeader
        indexLabel="ABOUT"
        eyebrow="Independent systems builder"
        title="Odafe Amalega"
        summary={<>Industrial engineering graduate, workflow automation builder, and technical educator based in Ibadan, Nigeria and working globally.</>}
      >
        <Link to="/work" className="btn-primary px-5 py-3">Explore documented work <ArrowRight className="h-4 w-4" aria-hidden="true" /></Link>
      </EditorialPageHeader>

      <EditorialSection id="about-identity">
        <div className="grid gap-10 lg:grid-cols-12 lg:items-start">
          <div className="space-y-5 text-base leading-relaxed text-slate-700 lg:col-span-8">
            <p>I design and build workflow automation, custom data pipelines, and practical AI systems for businesses whose operations have outgrown manual handling.</p>
            <p>My work focuses on commercial workflows in industrial and operational businesses: inbound RFQs, tender tracking, complex quotations, recurring reports, and the handoffs between people and software.</p>
            <p>My B.Eng in Industrial Engineering shapes how I approach software: understand how information physically moves through a business, isolate the bottleneck, and build a deterministic system that keeps experienced people in control.</p>
            <p>Alongside engineering systems, I teach applied AI, APIs, and automation. If a workflow cannot be explained clearly to the people using it, it is not ready for production.</p>
          </div>
          <div className="lg:col-span-4"><FounderPortrait /></div>
        </div>
      </EditorialSection>

      <EditorialSection label="Experience context">
        <TrustRail />
      </EditorialSection>

      <EditorialSection title="Capabilities used across the work." intro="The tool follows the operational requirement. These are recurring building blocks, not a prescribed stack.">
        <ul className="grid border-y border-stone-300 sm:grid-cols-2 lg:grid-cols-3">
          {capabilities.map((capability, index) => <li key={capability} className={`py-4 text-sm text-slate-700 sm:px-4 ${index > 2 ? 'lg:border-t lg:border-stone-300' : ''} ${index % 3 !== 0 ? 'lg:border-l lg:border-stone-300' : ''}`}>{capability}</li>)}
        </ul>
      </EditorialSection>

      <EditorialSection title="Engineering foundations and applied instruction.">
        <dl className="divide-y divide-stone-300 border-y border-stone-300">
          <div className="grid gap-2 py-5 sm:grid-cols-[minmax(0,1fr)_minmax(220px,0.5fr)]"><div><dt className="font-display text-xl text-slate-950">Bachelor of Engineering (B.Eng)</dt><dd className="mt-1 font-mono-tech text-xs text-slate-500">Federal University Oye-Ekiti</dd></div><dd className="text-sm text-slate-600">Industrial Engineering foundations and analytical modelling</dd></div>
          <div className="grid gap-2 py-5 sm:grid-cols-[minmax(0,1fr)_minmax(220px,0.5fr)]"><div><dt className="font-display text-xl text-slate-950">ALX professional programmes</dt><dd className="mt-1 font-mono-tech text-xs text-slate-500">AI Career Essentials and Data Analytics</dd></div><dd className="text-sm text-slate-600">Applied professional learning track</dd></div>
          <div className="grid gap-2 py-5 sm:grid-cols-[minmax(0,1fr)_minmax(220px,0.5fr)]"><div><dt className="font-display text-xl text-slate-950">Technical instruction</dt><dd className="mt-1 font-mono-tech text-xs text-slate-500">AppClick Technology</dd></div><dd className="text-sm text-slate-600">Practical AI, automation, APIs, and systems thinking</dd></div>
        </dl>
      </EditorialSection>

      <div className="flex flex-wrap gap-3 pt-12 sm:pt-16">
        <Link to="/contact" className="btn-primary px-6 py-3.5">Discuss a workflow <ArrowRight className="h-4 w-4" aria-hidden="true" /></Link>
        <a href="/cv.pdf" target="_blank" rel="noopener noreferrer" download="Odafe-Amalega-CV.pdf" className="btn-secondary px-5 py-3.5"><Download className="h-4 w-4" aria-hidden="true" /> Download CV</a>
        <a href="https://wa.me/2349132480302" target="_blank" rel="noopener noreferrer" className="btn-secondary px-5 py-3.5">WhatsApp <ArrowUpRight className="h-4 w-4" aria-hidden="true" /></a>
      </div>
    </main>
  </div>
);
