import React from 'react';

type EditorialSectionProps = React.PropsWithChildren<{
  id?: string;
  label?: string;
  title?: string;
  intro?: React.ReactNode;
  className?: string;
}>;

export const EditorialSection: React.FC<EditorialSectionProps> = ({
  id,
  label,
  title,
  intro,
  children,
  className = '',
}) => (
  <section id={id} className={`border-b border-stone-300 py-12 sm:py-16 ${className}`.trim()}>
    {(label || title || intro) && (
      <div className="mb-8 grid gap-4 lg:grid-cols-12 lg:items-end">
        <div className="lg:col-span-7">
          {label && <div className="mb-3 font-mono-tech text-xs font-semibold uppercase tracking-[0.1em] text-amber-800">{label}</div>}
          {title && <h2 className="max-w-2xl font-display text-4xl leading-[1.03] tracking-[-0.035em] text-slate-950 sm:text-5xl">{title}</h2>}
        </div>
        {intro && <div className="max-w-xl text-sm leading-relaxed text-slate-600 lg:col-span-5 lg:justify-self-end">{intro}</div>}
      </div>
    )}
    {children}
  </section>
);
