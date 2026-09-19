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

      <div className="font-mono-tech text-xs text-[#96742c] uppercase tracking-wider">
        [HTTP ERROR 404: ROUTE NOT LOCATED]
      </div>

      <h1 className="text-3xl sm:text-5xl font-bold tracking-tight text-[#141416]">
        System Route Not Found
      </h1>

      <p className="text-base text-[#575653] leading-relaxed max-w-lg">
        The path you requested does not correspond to an active operational workflow, note, or case study in this system.
      </p>

      <div className="pt-4 flex flex-wrap gap-3">
        <Link
          to="/"
          className="px-5 py-2.5 bg-[#141416] text-[#faf8f5] font-mono-tech text-xs uppercase"
        >
          Return to Index
        </Link>
        <Link
          to="/industry"
          className="px-5 py-2.5 border border-[#ded9cf] bg-[#ffffff] text-[#141416] font-mono-tech text-xs uppercase"
        >
          Industry Systems
        </Link>
        <Link
          to="/work"
          className="px-5 py-2.5 border border-[#ded9cf] bg-[#ffffff] text-[#141416] font-mono-tech text-xs uppercase"
        >
          Verified Work
        </Link>
      </div>
    </div>
  );
};
