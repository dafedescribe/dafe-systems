import React from 'react';

const environments = [
  { name: 'AppClick', context: 'Technical instruction', logo: '/uploads/images-2.jpeg' },
  { name: 'New Edition', context: 'Education & internal systems', logo: '/uploads/logo.jpg' },
  { name: 'SR Construction', context: 'Construction context', logo: '/uploads/src-logopng.png' },
  { name: 'Dangote Cement', context: 'Industrial exposure', logo: '/uploads/download-1.png' },
];

export const TrustRail: React.FC = () => (
  <section className="trust-rail" aria-labelledby="trust-rail-title">
    <h2 id="trust-rail-title" className="max-w-lg font-display text-2xl leading-tight text-slate-950 sm:text-3xl">
      Experience across industrial, education &amp; technical environments
    </h2>

    <div className="mt-7 grid grid-cols-2 border-y border-stone-300">
      {environments.map((environment, index) => (
        <div
          key={environment.name}
          className={`flex min-w-0 flex-col items-center py-6 text-center sm:py-7 ${index % 2 === 1 ? 'border-l border-stone-300 pl-4' : 'pr-4'} ${index > 1 ? 'border-t border-stone-300' : ''}`}
        >
          <img
            src={environment.logo}
            alt={`${environment.name} logo`}
            width={88}
            height={88}
            loading="eager"
            className="h-[88px] w-[88px] object-contain"
          />
          <div className="mt-4 text-base font-bold text-slate-950">{environment.name}</div>
          <div className="mt-1 max-w-[18ch] text-xs leading-relaxed text-slate-600">{environment.context}</div>
        </div>
      ))}
    </div>
  </section>
);
