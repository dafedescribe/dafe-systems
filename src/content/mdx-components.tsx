import React from 'react';

/* impeccable-disable side-tab: PullQuote left border is an intentional typographic device, not a card side-tab */

export const PullQuote: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <blockquote className="border-l-4 border-amber-600 pl-6 py-1 text-xl sm:text-2xl font-display font-bold text-slate-900 leading-snug">
    {children}
  </blockquote>
);

export const Figure: React.FC<{ src: string; alt: string; caption?: string; credit?: string }> = ({
  src,
  alt,
  caption,
  credit,
}) => (
  <figure className="space-y-2">
    <img
      src={src}
      alt={alt}
      loading="lazy"
      decoding="async"
      className="w-full rounded-xl border border-slate-200"
    />
    {(caption || credit) && (
      <figcaption className="font-mono-tech text-xs text-slate-500">
        {caption} {credit && <span>· Photo: {credit}</span>}
      </figcaption>
    )}
  </figure>
);

export const Gallery: React.FC<{ images: { src: string; alt: string }[] }> = ({ images }) => (
  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
    {images.map((img) => (
      <img
        key={img.src}
        src={img.src}
        alt={img.alt}
        loading="lazy"
        decoding="async"
        className="w-full rounded-xl border border-slate-200"
      />
    ))}
  </div>
);

export const Steps: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <ol className="[counter-reset:step] space-y-4">
    {React.Children.map(children, (child, i) => (
      <li className="flex gap-4">
        <span className="flex-none w-8 h-8 rounded-full bg-black text-white font-mono-tech text-xs font-bold flex items-center justify-center">
          {i + 1}
        </span>
        <div className="flex-1">{child}</div>
      </li>
    ))}
  </ol>
);

export const Callout: React.FC<{ title?: string; children: React.ReactNode }> = ({ title, children }) => (
  <aside className="rounded-xl bg-amber-50 border border-amber-200 p-5 space-y-2">
    {title && (
      <div className="font-mono-tech text-xs font-bold uppercase tracking-[0.1em] text-amber-700">{title}</div>
    )}
    <div className="text-slate-700 text-base leading-relaxed">{children}</div>
  </aside>
);

export const Stat: React.FC<{ value: string; label: string }> = ({ value, label }) => (
  <div className="rounded-xl bg-black text-white p-6 text-center space-y-1">
    <div className="text-3xl font-display font-black text-amber-400">{value}</div>
    <div className="font-mono-tech text-xs uppercase tracking-widest text-slate-300">{label}</div>
  </div>
);

export const NoteCta: React.FC = () => (
  /* impeccable-disable border-accent-on-rounded: CTA accent top-border matches the existing article CTA system */
  <div className="rounded-xl border-t-2 border-t-amber-600 bg-slate-50 p-6 text-center space-y-3">
    <div className="font-mono-tech text-xs uppercase tracking-[0.1em] text-amber-700 font-semibold">
      Actionable Next Step
    </div>
    <a href="/contact" className="btn-primary px-6 py-3.5 inline-flex">
      Show Me the Workflow
    </a>
  </div>
);

export const mdxComponents = { PullQuote, Figure, Gallery, Steps, Callout, Stat, NoteCta };
