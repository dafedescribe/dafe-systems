import React from 'react';

const environments = [
  { name: 'AppClick', context: 'Technical instruction', logo: '/uploads/images-2.jpeg' },
  { name: 'New Edition', context: 'Education & internal systems', logo: '/uploads/logo.jpg' },
  { name: 'SR Construction', context: 'Construction context', logo: '/uploads/src-logopng.png' },
  { name: 'Dangote Cement', context: 'Industrial exposure', logo: '/uploads/download-1.png' },
];

export const TrustRail: React.FC = () => (
  <section className="trust-rail border-y border-stone-300/90 py-6" aria-labelledby="trust-rail-title">
    <div className="grid gap-6 lg:grid-cols-[minmax(220px,0.7fr)_minmax(0,2.3fr)] lg:items-center">
      <div className="space-y-2 lg:border-r lg:border-stone-300 lg:pr-8">
        <div className="font-mono-tech text-[10px] font-bold uppercase tracking-[0.14em] text-amber-800">
          Working Context
        </div>
        <h2 id="trust-rail-title" className="max-w-sm font-display text-xl leading-tight text-slate-950 sm:text-2xl">
          Experience across industrial, education & technical environments
        </h2>
      </div>

      <div className="grid grid-cols-2 gap-x-5 gap-y-5 md:grid-cols-4">
        {environments.map((environment) => (
          <div key={environment.name} className="group flex min-w-0 items-center gap-3">
            <div className="grid h-12 w-12 flex-none place-items-center border border-stone-300 bg-white p-1.5 transition-colors group-hover:border-amber-700">
              <img
                src={environment.logo}
                alt={`${environment.name} logo`}
                width={48}
                height={48}
                loading="lazy"
                className="h-full w-full object-contain grayscale transition-[filter] group-hover:grayscale-0"
              />
            </div>
            <div className="min-w-0">
              <div className="truncate text-sm font-bold text-slate-900">{environment.name}</div>
              <div className="mt-0.5 text-[11px] leading-snug text-slate-500">{environment.context}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);
