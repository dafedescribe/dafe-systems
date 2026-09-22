import React from 'react';
import { ArrowRight, ArrowUpRight } from 'lucide-react';
import { Link } from '../router/Router';

type CompactCtaProps = {
  eyebrow?: string;
  title: string;
  copy: string;
  actionLabel: string;
  actionTo: string;
  secondaryLabel?: string;
  secondaryTo?: string;
};

export const CompactCta: React.FC<CompactCtaProps> = ({ eyebrow, title, copy, actionLabel, actionTo, secondaryLabel, secondaryTo }) => (
  <section className="grid gap-7 border-y border-stone-300 bg-slate-950 px-6 py-9 text-white sm:px-10 sm:py-11 lg:grid-cols-12 lg:items-end">
    <div className="lg:col-span-8">
      {eyebrow && <div className="mb-3 font-mono-tech text-xs font-semibold uppercase tracking-[0.1em] text-amber-400">{eyebrow}</div>}
      <h2 className="max-w-3xl font-display text-4xl leading-tight tracking-[-0.035em] sm:text-5xl">{title}</h2>
      <p className="mt-4 max-w-2xl text-sm leading-relaxed text-slate-300">{copy}</p>
    </div>
    <div className="flex flex-wrap gap-3 lg:col-span-4 lg:justify-end">
      <Link to={actionTo} className="inline-flex min-h-12 items-center justify-center gap-2 bg-amber-600 px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-amber-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-amber-400">
        {actionLabel}<ArrowRight className="h-4 w-4" aria-hidden="true" />
      </Link>
      {secondaryLabel && secondaryTo && (
        <Link to={secondaryTo} className="inline-flex min-h-12 items-center justify-center gap-2 border border-slate-600 px-5 py-3 text-sm font-semibold text-white transition-colors hover:border-slate-300">
          {secondaryLabel}<ArrowUpRight className="h-4 w-4" aria-hidden="true" />
        </Link>
      )}
    </div>
  </section>
);
