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
      <div className="max-w-4xl mx-auto px-6 py-20 text-center space-y-4">
        <h1 className="text-3xl font-bold text-[#181816] font-display">Technical Note Not Found</h1>
        <p className="text-[#77736A] font-body">The requested technical bulletin does not exist in the catalogue.</p>
        <Link to="/notes" className="btn-secondary px-4 py-2">
          Back to Notes Directory
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
        url: 'https://www.dafe.name.ng/about'
      },
      publisher: {
        '@type': 'Organization',
        name: 'DafeDeScribe',
        url: 'https://www.dafe.name.ng/'
      },
      datePublished: article.date,
      mainEntityOfPage: `https://www.dafe.name.ng/notes/${article.slug}`
    },
    {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.dafe.name.ng/' },
        { '@type': 'ListItem', position: 2, name: 'Notes', item: 'https://www.dafe.name.ng/notes' },
        { '@type': 'ListItem', position: 3, name: article.title, item: `https://www.dafe.name.ng/notes/${article.slug}` }
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

      <main className="max-w-3xl mx-auto px-6 sm:px-10 py-12 sm:py-20 space-y-12">
        <Breadcrumbs
          items={[
            { label: 'NOTES', path: '/notes' },
            { label: article.cluster.toUpperCase(), path: '/notes' },
          ]}
        />

        {/* ─── BULLETIN HEADER ─────────────────────────────────── */}
        <header className="catalogue-sheet p-6 sm:p-8 space-y-4">
          <div className="flex flex-wrap items-center justify-between gap-2 border-b border-[#D9D4C8] pb-3 font-mono-tech text-xs">
            <span className="text-[#B58A2A] font-semibold uppercase">
              TECHNICAL NOTE / {article.cluster.toUpperCase()}
            </span>
            <span className="text-[#77736A]">
              {article.readTime.toUpperCase()} · {article.date}
            </span>
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#181816] font-display leading-[1.15]">
            {article.title}
          </h1>

          <p className="text-base sm:text-lg text-[#33312C] font-body leading-relaxed">
            {article.summary}
          </p>

          <div className="pt-3 border-t border-[#D9D4C8]">
            <Link
              to={article.targetServiceUrl}
              className="inline-flex items-center gap-1.5 font-mono-tech text-xs text-[#181816] font-semibold hover:text-[#B58A2A] transition-colors"
            >
              <span>OPERATIONAL CONTEXT: {article.targetServiceLabel.toUpperCase()}</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </header>

        {/* ─── BULLETIN BODY ───────────────────────────────────── */}
        <div className="catalogue-sheet p-6 sm:p-10 space-y-6 text-base sm:text-lg text-[#33312C] font-body leading-[1.75]">
          {article.content.map((paragraph, idx) => (
            <p key={idx}>
              {paragraph}
            </p>
          ))}
        </div>

        {/* ─── AUTHOR SPECIFICATION ────────────────────────────── */}
        <section className="catalogue-inset p-6 space-y-2 font-mono-tech text-xs">
          <div className="text-[#77736A] uppercase">
            WRITTEN & TESTED BY
          </div>
          <div className="font-bold text-base text-[#181816] font-body">
            Odafe Amalega
          </div>
          <p className="text-[#77736A] font-body leading-relaxed">
            AI Workflow Engineer and Educator currently at AppClick. Builds systems around high-value commercial processes and repetitive operational bottlenecks.
          </p>
          <div className="pt-2">
            <Link to="/about" className="text-[#181816] font-semibold hover:text-[#B58A2A] transition-colors">
              View personnel file & digital CV →
            </Link>
          </div>
        </section>

        {/* ─── NEXT STEP CTA ───────────────────────────────────── */}
        <section className="catalogue-sheet p-8 space-y-4 border border-[#D9D4C8] border-t-2 border-t-[#B58A2A]">
          <div className="font-mono-tech text-xs tracking-[0.1em] uppercase text-[#B58A2A]">
            ACTIONABLE NEXT STEP
          </div>
          <h2 className="text-2xl font-bold text-[#181816] font-display">
            Have a similar workflow in your business?
          </h2>
          <p className="text-sm text-[#77736A] font-body leading-relaxed">
            Send me the workflow. We will identify which steps can be handled deterministically.
          </p>
          <div className="pt-2">
            <Link
              to="/contact"
              className="btn-primary px-6 py-3.5"
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
