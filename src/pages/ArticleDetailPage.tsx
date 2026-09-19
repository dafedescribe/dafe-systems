import React from 'react';
import { Link } from '../router/Router';
import { SeoHead } from '../components/SeoHead';
import { Breadcrumbs } from '../components/Breadcrumbs';
import { ARTICLES } from '../data/articlesData';
import { ArrowRight, ArrowUpRight } from 'lucide-react';

export const ArticleDetailPage: React.FC<{ slug: string }> = ({ slug }) => {
  const article = ARTICLES.find((a) => a.slug === slug);

  if (!article) {
    return (
      <div className="max-w-4xl mx-auto px-4 py-20 text-center space-y-4">
        <h1 className="text-3xl font-bold text-[#141416]">Note Not Found</h1>
        <p className="text-[#575653]">The requested note does not exist.</p>
        <Link to="/notes" className="inline-block px-4 py-2 bg-[#141416] text-[#faf8f5] text-xs font-mono-tech uppercase">
          Back to Notes
        </Link>
      </div>
    );
  }

  const jsonLd = [
    {
      '@context': 'https://schema.org',
      '@type': 'Article',
      headline: article.title,
      description: article.summary,
      author: {
        '@type': 'Person',
        name: 'Odafe Amalega',
        url: 'https://dafe.name.ng/about'
      },
      publisher: {
        '@type': 'Organization',
        name: 'DafeDeScribe',
        url: 'https://dafe.name.ng/'
      },
      datePublished: article.date,
      mainEntityOfPage: `https://dafe.name.ng/notes/${article.slug}`
    },
    {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://dafe.name.ng/' },
        { '@type': 'ListItem', position: 2, name: 'Notes', item: 'https://dafe.name.ng/notes' },
        { '@type': 'ListItem', position: 3, name: article.title, item: `https://dafe.name.ng/notes/${article.slug}` }
      ]
    }
  ];

  return (
    <div className="min-h-screen">
      <SeoHead
        title={`${article.title} | DafeDeScribe`}
        description={article.summary}
        canonicalPath={`/notes/${article.slug}`}
        ogType="article"
        jsonLd={jsonLd}
      />

      <main className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-20 space-y-12">
        <Breadcrumbs
          items={[
            { label: 'NOTES', path: '/notes' },
            { label: article.cluster.toUpperCase(), path: '/notes' },
          ]}
        />

        {/* ─── ARTICLE HEADER ──────────────────────────────────── */}
        <header className="space-y-4 border-b border-[#ded9cf] pb-8">
          <div className="flex flex-wrap items-center justify-between gap-2">
            <span className="font-mono-tech text-xs text-[#96742c] font-semibold uppercase">
              {article.cluster}
            </span>
            <span className="font-mono-tech text-xs text-[#7a7770]">
              {article.date} · {article.readTime}
            </span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-bold tracking-tight text-[#141416] leading-[1.15]">
            {article.title}
          </h1>

          <p className="text-lg text-[#575653] leading-relaxed font-medium">
            {article.summary}
          </p>

          <div className="pt-2">
            <Link
              to={article.targetServiceUrl}
              className="inline-flex items-center gap-1.5 font-mono-tech text-xs text-[#141416] font-medium hover:text-[#96742c] transition-colors"
            >
              <span>Operational Context: {article.targetServiceLabel}</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </header>

        {/* ─── ARTICLE BODY ────────────────────────────────────── */}
        <div className="space-y-6 text-base sm:text-lg text-[#3a3936] leading-relaxed">
          {article.content.map((paragraph, idx) => (
            <p key={idx}>
              {paragraph}
            </p>
          ))}
        </div>

        {/* ─── AUTHOR STAMP ────────────────────────────────────── */}
        <section className="border border-[#ded9cf] bg-[#faf8f5] p-6 space-y-2">
          <div className="font-mono-tech text-xs text-[#7a7770] uppercase">
            WRITTEN BY
          </div>
          <div className="font-bold text-base text-[#141416]">
            Odafe Amalega
          </div>
          <p className="text-xs sm:text-sm text-[#575653] leading-relaxed">
            AI Workflow Engineer and Educator currently at AppClick. Builds systems around high-value commercial processes and repetitive operational bottlenecks.
          </p>
          <div className="pt-2">
            <Link to="/about" className="font-mono-tech text-xs text-[#141416] hover:text-[#96742c] transition-colors">
              View full profile & digital CV →
            </Link>
          </div>
        </section>

        {/* ─── NEXT STEP CTA ───────────────────────────────────── */}
        <section className="border border-[#141416] bg-[#f3efe6] p-8 space-y-4">
          <div className="font-mono-tech text-xs tracking-wider uppercase text-[#96742c]">
            [NEXT STEP]
          </div>
          <h2 className="text-xl sm:text-2xl font-bold text-[#141416]">
            Have a process like this in your business?
          </h2>
          <p className="text-sm text-[#575653] leading-relaxed">
            Send me the workflow. We will identify which steps can be handled deterministically.
          </p>
          <div className="pt-2">
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-6 py-3 text-xs font-mono-tech uppercase tracking-wider bg-[#141416] text-[#faf8f5] border border-[#141416] hover:bg-[#2b2b30] transition-colors"
            >
              <span>Show Me the Workflow</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </section>

      </main>
    </div>
  );
};
