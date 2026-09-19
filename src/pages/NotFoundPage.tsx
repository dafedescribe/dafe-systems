import React from 'react';
import { Link } from '../router/Router';
import { SeoHead } from '../components/SeoHead';

export const NotFoundPage: React.FC = () => {
  return (
    <div className="min-h-screen max-w-4xl mx-auto px-4 py-20 space-y-6">
      <SeoHead
        title="404 — System Route Not Found | DafeDeScribe"
        description="The requested route does not exist in the DafeDeScribe system directory."
        noIndex={true}
      />

      <div className="font-mono-tech text-xs text-amber-700 uppercase tracking-wider font-semibold">
        404 · Page Not Found
      </div>

      <h1 className="text-3xl sm:text-5xl font-bold tracking-tight text-slate-900 font-display">
        Page Not Found
      </h1>

      <p className="text-base text-slate-600 leading-relaxed max-w-lg">
        The path you requested does not correspond to an active workflow solution, technical note, or case study.
      </p>

      <div className="pt-4 flex flex-wrap gap-3">
        <Link
          to="/"
          className="btn-primary px-5 py-2.5"
        >
          Return Home
        </Link>
        <Link
          to="/industry"
          className="btn-secondary px-5 py-2.5"
        >
          Industry Solutions
        </Link>
        <Link
          to="/work"
          className="btn-secondary px-5 py-2.5"
        >
          Verified Work
        </Link>
      </div>
    </div>
  );
};
