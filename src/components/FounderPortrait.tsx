import React from 'react';

export const FounderPortrait: React.FC = () => (
  <figure className="founder-profile-compact m-0 flex max-w-md items-center gap-4 border-t border-stone-300 pt-5" aria-labelledby="founder-caption">
    <img
      src="/uploads/replicate-image-style-precisely-20260919112129.jpeg"
      alt="Odafe Amalega, workflow automation and systems engineer"
      width={1024}
      height={1024}
      loading="eager"
      fetchPriority="high"
      className="h-20 w-20 flex-none border border-stone-300 object-cover sm:h-24 sm:w-24"
    />
    <figcaption id="founder-caption" className="min-w-0">
      <span className="block font-display text-xl leading-tight text-slate-950">Odafe Amalega</span>
      <span className="mt-1 block text-sm leading-relaxed text-slate-600">
        Independent systems builder · Ibadan, Nigeria
      </span>
    </figcaption>
  </figure>
);
