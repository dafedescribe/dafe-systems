import React from 'react';
import { ArrowRight } from 'lucide-react';
import { CompactCta } from '../components/CompactCta';
import { EditorialPageHeader } from '../components/EditorialPageHeader';
import { EditorialSection } from '../components/EditorialSection';
import { SeoHead } from '../components/SeoHead';
import { Link } from '../router/Router';

const pillars = [
  ['Understand', 'First-principles mental models for AI, APIs, data structures, security, and software systems.'],
  ['Use', 'Direct application through productivity, research, structured content, and workflow exercises.'],
  ['Build', 'Tangible automations, prototypes, data views, and responsible AI-assisted applications.'],
] as const;

const modules = [
  ['EDU-014', 'API Fundamentals & Webhook Systems', 'Half-day intensive', 'Inspect raw HTTP requests, map JSON payloads, and connect spreadsheets to databases through automation without code fatigue.'],
  ['EDU-022', 'n8n Workflow Construction Sandbox', 'Full-day hands-on lab', 'Build three production-grade automations: customer qualification, document parsing, and scheduled reporting.'],
  ['EDU-031', 'Practical AI Literacy for Educators & Teachers', 'Interactive seminar', 'Understand token mechanics, detect hallucination patterns, and establish responsible student generative-AI guidelines.'],
  ['EDU-045', 'Vibe Coding & Systems Thinking for Builders', 'Weekend workshop', 'Use modern AI models to build, debug, and deploy functional web prototypes from first principles.'],
] as const;

export const TeachingPage: React.FC = () => (
  <div className="min-h-screen">
    <SeoHead title="Practical AI, Automation & API Training | Odafe Amalega" description="Practical instruction in AI, automation, APIs, data handling and systems thinking for teams, professionals and educators." canonicalPath="/teaching" />
    <main className="mx-auto max-w-[1440px] px-6 pb-16 pt-10 sm:px-12 sm:pb-20 sm:pt-14 lg:px-16">
      <EditorialPageHeader
        indexLabel="TEACHING"
        eyebrow="Applied systems education"
        title="Learn what is happening underneath the button."
        summary={<>I teach AI engineering and workflow automation so participants understand the mechanics of the tools they deploy rather than memorising interfaces. Current applied instruction includes work through AppClick Technology.</>}
      >
        <Link to="/contact" className="btn-primary px-6 py-3.5">Discuss training <ArrowRight className="h-4 w-4" aria-hidden="true" /></Link>
      </EditorialPageHeader>

      <EditorialSection label="Learning architecture" title="Understand. Use. Build." intro="Every programme moves from mental models to direct application and then to a working artifact.">
        <div className="divide-y divide-stone-300 border-y border-stone-300 md:grid md:grid-cols-3 md:divide-x md:divide-y-0">
          {pillars.map(([title, copy], index) => (
            <article key={title} className="py-6 md:px-6 md:first:pl-0 md:last:pr-0">
              <div className="font-mono-tech text-xs font-bold text-amber-800">0{index + 1}</div>
              <h2 className="mt-6 font-display text-3xl text-slate-950">{title}</h2>
              <p className="mt-3 text-sm leading-relaxed text-slate-600">{copy}</p>
            </article>
          ))}
        </div>
      </EditorialSection>

      <EditorialSection label="Representative modules" title="Four practical ways to teach the underlying system." intro="Modules are adapted to the audience, available time, and operational context.">
        <div className="divide-y divide-stone-300 border-y border-stone-300">
          {modules.map(([ref, title, format, outcome]) => (
            <article key={ref} data-teaching-module="true" className="grid gap-4 py-6 sm:grid-cols-[120px_minmax(0,0.8fr)_minmax(0,1.2fr)] sm:items-start">
              <div className="font-mono-tech text-xs font-bold text-amber-800">{ref}</div>
              <div><h2 className="font-display text-2xl leading-tight text-slate-950">{title}</h2><div className="mt-2 font-mono-tech text-xs uppercase text-slate-500">{format}</div></div>
              <p className="text-sm leading-relaxed text-slate-600">{outcome}</p>
            </article>
          ))}
        </div>
      </EditorialSection>

      <EditorialSection title="Designed around the people in the room." intro="The same topic requires a different entry point for an operations team, an educator, a business owner, or a new technical builder.">
        <dl className="grid border-y border-stone-300 md:grid-cols-3">
          <div className="py-5 md:pr-6"><dt className="font-mono-tech text-xs font-semibold uppercase text-amber-800">Audience</dt><dd className="mt-2 text-sm leading-relaxed text-slate-700">Operational teams, professionals, educators, young learners, and training organisations.</dd></div>
          <div className="border-t border-stone-300 py-5 md:border-l md:border-t-0 md:px-6"><dt className="font-mono-tech text-xs font-semibold uppercase text-amber-800">Delivery</dt><dd className="mt-2 text-sm leading-relaxed text-slate-700">Seminars, half-day intensives, full-day labs, and multi-session practical programmes.</dd></div>
          <div className="border-t border-stone-300 py-5 md:border-l md:border-t-0 md:pl-6"><dt className="font-mono-tech text-xs font-semibold uppercase text-amber-800">Materials</dt><dd className="mt-2 text-sm leading-relaxed text-slate-700">Workflow maps, API examples, guided builds, validation habits, and take-home references.</dd></div>
        </dl>
      </EditorialSection>

      <div className="pt-12 sm:pt-16"><CompactCta title="Discuss a practical training session." copy="Tell me about the participants, their current experience, and the capability they should be able to apply after the session." actionLabel="Discuss training" actionTo="/contact" /></div>
    </main>
  </div>
);
