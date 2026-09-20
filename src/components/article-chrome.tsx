import React, { useEffect, useState } from 'react';

export const SITE_URL = 'https://www.dafe.name.ng';

export const ReadingProgress: React.FC = () => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      const total = document.documentElement.scrollHeight - window.innerHeight;
      setProgress(total > 0 ? Math.min(100, (window.scrollY / total) * 100) : 0);
    };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <div className="fixed top-0 left-0 right-0 h-1 z-50 bg-transparent" aria-hidden="true">
      <div
        className="h-full w-full origin-left bg-amber-600"
        style={{ transform: `scaleX(${progress / 100})` }}
      />
    </div>
  );
};

export const ShareRow: React.FC<{ title: string; path: string }> = ({ title, path }) => {
  const url = `${SITE_URL}${path}`;
  const text = encodeURIComponent(`${title} — via DafeDeScribe`);
  const [copied, setCopied] = useState(false);

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(url);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      setCopied(false);
    }
  };

  const linkCls =
    'font-mono-tech text-xs font-semibold uppercase tracking-[0.08em] text-slate-600 hover:text-amber-700 transition-colors';

  return (
    <div className="flex flex-wrap items-center gap-4 pt-4 border-t border-slate-200">
      <span className="font-mono-tech text-xs uppercase tracking-[0.1em] text-slate-500">Share</span>
      <a
        className={linkCls}
        href={`https://x.com/intent/tweet?text=${text}&url=${encodeURIComponent(url)}`}
        target="_blank"
        rel="noopener noreferrer"
      >
        Post
      </a>
      <a
        className={linkCls}
        href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}`}
        target="_blank"
        rel="noopener noreferrer"
      >
        LinkedIn
      </a>
      <a
        className={linkCls}
        href={`https://wa.me/?text=${text}%20${encodeURIComponent(url)}`}
        target="_blank"
        rel="noopener noreferrer"
      >
        WhatsApp
      </a>
      <button type="button" onClick={copy} className={linkCls}>
        {copied ? 'Copied ✓' : 'Copy link'}
      </button>
    </div>
  );
};

export const TableOfContents: React.FC<{ headings: { text: string; id: string }[] }> = ({ headings }) => {
  if (headings.length === 0) return null;
  return (
    <nav aria-label="On this page" className="space-y-2">
      <div className="font-mono-tech text-xs font-bold uppercase tracking-[0.1em] text-slate-500">
        On this page
      </div>
      <ul className="space-y-1.5 border-l border-slate-200">
        {headings.map((h) => (
          <li key={h.id}>
            <a
              href={`#${h.id}`}
              className="block pl-3 -ml-px border-l-2 border-transparent hover:border-amber-600 font-body text-sm text-slate-600 hover:text-slate-900 transition-colors"
            >
              {h.text}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};
