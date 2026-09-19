import React from 'react';
import { Link } from '../router/Router';
import { SeoHead } from '../components/SeoHead';
import { Breadcrumbs } from '../components/Breadcrumbs';
import { LAB_ITEMS } from '../data/labData';
import { FlaskConical, ArrowRight } from 'lucide-react';

export const LabPage: React.FC = () => {
  return (
    <div className="min-h-screen">
      <SeoHead
        title="Lab & Experiments | DafeDeScribe"
        description="Experiments, prototypes, and research builds in automation, video processing, web scraping, and generative media."
        canonicalPath="/lab"
        noIndex={true}
      />

      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-20 space-y-12">
        <Breadcrumbs items={[{ label: 'LAB', path: '/lab' }]} />

        {/* ─── HEADER ──────────────────────────────────────────── */}
        <section className="space-y-6">
          <div className="flex items-center gap-2 font-mono-tech text-xs tracking-widest uppercase text-[#96742c]">
            <FlaskConical className="w-4 h-4 text-[#96742c]" />
            <span>[EXPERIMENTAL SANDBOX / PROTOTYPES]</span>
          </div>

          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-[#141416] leading-[1.15]">
            Experiments, prototypes and things I wanted to test.
          </h1>

          <p className="text-base sm:text-lg text-[#575653] leading-relaxed max-w-2xl">
            This section demonstrates range. It is where I test technical concepts, build quick prototypes, and explore media automation before turning them into client solutions.
          </p>
          
          <div className="font-mono-tech text-xs text-[#7a7770]">
            INDEX STATUS: noindex, follow (Sandbox artifacts)
          </div>
        </section>

        {/* ─── LAB ITEMS GRID ──────────────────────────────────── */}
        <section className="space-y-6">
          {LAB_ITEMS.map((item) => (
            <div
              key={item.id}
              className="border border-[#ded9cf] bg-[#ffffff] p-6 sm:p-8 space-y-4"
            >
              <div className="flex flex-wrap items-center justify-between gap-2">
                <span className="font-mono-tech text-xs text-[#96742c] font-semibold">
                  [{item.id.toUpperCase()}] · {item.type}
                </span>
                <span className="font-mono-tech text-xs text-[#7a7770]">
                  {item.date}
                </span>
              </div>

              <h2 className="text-xl font-bold text-[#141416]">
                {item.title}
              </h2>

              <p className="text-sm text-[#4a4946] leading-relaxed">
                {item.summary}
              </p>

              <div className="p-3 bg-[#faf8f5] border border-[#ded9cf] text-xs text-[#575653]">
                <strong className="font-mono-tech text-[#141416]">Technical Note: </strong>
                {item.notes}
              </div>

              <div className="flex flex-wrap gap-2 pt-2">
                {item.tech.map((t) => (
                  <span
                    key={t}
                    className="px-2 py-0.5 border border-[#ded9cf] bg-[#ffffff] font-mono-tech text-[11px] text-[#575653]"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </section>

        {/* ─── FOOTER CTA ──────────────────────────────────────── */}
        <section className="border border-[#141416] bg-[#f3efe6] p-8 space-y-4">
          <div className="font-mono-tech text-xs tracking-wider uppercase text-[#96742c]">
            [COMMERCIAL APPLICATION]
          </div>
          <h2 className="text-xl font-bold text-[#141416]">
            Looking for tested, production-grade systems?
          </h2>
          <p className="text-sm text-[#575653]">
            Explore our verified case studies or submit a commercial workflow for review.
          </p>
          <div className="pt-2 flex flex-wrap gap-4">
            <Link
              to="/work"
              className="inline-flex items-center gap-2 px-5 py-2.5 text-xs font-mono-tech uppercase tracking-wider bg-[#141416] text-[#faf8f5]"
            >
              <span>View Verified Work</span>
            </Link>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-5 py-2.5 text-xs font-mono-tech uppercase tracking-wider bg-[#faf8f5] text-[#141416] border border-[#ded9cf]"
            >
              <span>Show Me the Workflow</span>
            </Link>
          </div>
        </section>

      </main>
    </div>
  );
};
