import React from 'react';

export const FounderPortrait: React.FC = () => (
  <figure className="founder-portrait relative m-0" aria-labelledby="founder-caption">
    <div className="relative overflow-hidden border border-stone-400/70 bg-[#e8ddc8]">
      <img
        src="/uploads/whatsapp-image-2026-09-21-at-1-01-24-pm-1.jpeg"
        alt="Odafe Amalega, workflow automation and systems engineer"
        width={608}
        height={1080}
        loading="eager"
        fetchPriority="high"
        className="aspect-[4/5] w-full object-cover object-[center_18%] saturate-[0.82] contrast-[1.03]"
      />
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-slate-950/35 via-transparent to-amber-50/10" aria-hidden="true" />
      <div className="absolute bottom-0 left-0 right-0 flex items-end justify-between gap-4 border-t border-white/30 bg-slate-950/75 px-4 py-3 text-white backdrop-blur-sm">
        <figcaption id="founder-caption" className="min-w-0">
          <span className="block font-display text-lg leading-none">Odafe Amalega</span>
          <span className="mt-1 block font-mono-tech text-[9px] uppercase tracking-[0.12em] text-stone-300">
            Workflow Automation &amp; Systems Engineer
          </span>
        </figcaption>
        <span className="h-2 w-2 flex-none rounded-full bg-amber-400 shadow-[0_0_0_4px_rgba(251,191,36,0.15)]" aria-hidden="true" />
      </div>
    </div>
    <div className="absolute -bottom-3 -right-3 -z-10 h-full w-full border border-amber-700/40" aria-hidden="true" />
  </figure>
);
