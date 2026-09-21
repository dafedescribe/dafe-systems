import React from 'react';
import { Breadcrumbs } from './Breadcrumbs';

type EditorialPageHeaderProps = React.PropsWithChildren<{
  indexLabel: string;
  eyebrow?: string;
  title: string;
  summary: React.ReactNode;
  className?: string;
}>;

export const EditorialPageHeader: React.FC<EditorialPageHeaderProps> = ({
  indexLabel,
  eyebrow,
  title,
  summary,
  children,
  className = '',
}) => (
  <header className={`border-b border-stone-300 pb-10 sm:pb-12 ${className}`.trim()}>
    <Breadcrumbs items={[{ label: indexLabel, path: '' }]} />
    <div className="mt-7 grid gap-7 lg:grid-cols-12 lg:items-end">
      <div className="lg:col-span-8">
        {eyebrow && <div className="mb-4 font-mono-tech text-xs font-semibold uppercase tracking-[0.1em] text-amber-800">{eyebrow}</div>}
        <h1 className="max-w-[18ch] font-display text-5xl font-medium leading-[0.98] tracking-[-0.04em] text-slate-950 sm:text-6xl">{title}</h1>
      </div>
      <div className="space-y-5 lg:col-span-4">
        <div className="text-base leading-relaxed text-slate-700">{summary}</div>
        {children && <div className="flex flex-wrap gap-3">{children}</div>}
      </div>
    </div>
  </header>
);
