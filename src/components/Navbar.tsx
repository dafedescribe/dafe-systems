import React, { useState } from 'react';
import { Link, useRouter } from '../router/Router';
import { Menu, X, ArrowUpRight } from 'lucide-react';
import { useI18n } from '../i18n/I18nProvider';
import { LanguageSelector } from './LanguageSelector';

export const Navbar: React.FC = () => {
  const { path } = useRouter();
  const { t } = useI18n();
  const [mobileOpen, setMobileOpen] = useState(false);

  const navLinks = [
    { num: '01', label: t('nav.industry'), to: '/industry' },
    { num: '02', label: t('nav.work'), to: '/work' },
    { num: '03', label: t('nav.teaching'), to: '/teaching' },
    { num: '04', label: t('nav.notes'), to: '/notes' },
    { num: '05', label: t('nav.about'), to: '/about' },
  ];

  const isActive = (to: string) => {
    if (to === '/') return path === '/';
    return path.startsWith(to);
  };

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-slate-200">
      <div className="max-w-[1440px] mx-auto px-6 sm:px-12 lg:px-16">
        <div className="flex items-center justify-between h-18 sm:h-20">
          
          {/* Brand Wordmark & Technical Identifier */}
          <Link
            to="/"
            className="flex items-center gap-3 group py-1"
            aria-label="DafeDeScribe Home"
          >
            <img
              src="/logo.png"
              alt="DafeDeScribe Logo"
              className="w-8 h-8 rounded object-cover border border-slate-200 shadow-2xs"
              onError={(e) => {
                (e.target as HTMLElement).style.display = 'none';
              }}
            />
            <div className="flex flex-col">
              <span className="font-bold tracking-tight text-lg sm:text-xl text-slate-900 font-body">
                DafeDeScribe
              </span>
              <span className="font-mono-tech text-[10px] tracking-[0.12em] uppercase text-slate-500">
                SYSTEMS · AUTOMATION · EDUCATION
              </span>
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-5 lg:gap-7 text-xs font-mono-tech tracking-[0.08em]">
            {navLinks.map((link) => {
              const active = isActive(link.to);
              return (
                <Link
                  key={link.to}
                  to={link.to}
                  className={`relative py-2 flex items-center gap-1.5 transition-colors ${
                    active
                      ? 'text-slate-900 font-semibold'
                      : 'text-slate-600 hover:text-slate-900'
                  }`}
                >
                  <span className={`text-[10px] ${active ? 'text-amber-700' : 'text-slate-400'}`}>
                    {link.num}
                  </span>
                  <span>{link.label}</span>
                  {active && (
                    <span className="absolute bottom-0 left-0 right-0 h-[2px] bg-amber-600" />
                  )}
                </Link>
              );
            })}
          </nav>

          {/* Primary CTA & Mobile Drawer Toggle */}
          <div className="flex items-center gap-3">
            <LanguageSelector />
            <a
              href="/cv.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="hidden lg:inline-flex items-center gap-1.5 text-xs font-mono-tech uppercase tracking-wider text-slate-600 hover:text-slate-900 transition-colors py-2 px-2.5 rounded-lg border border-slate-200 hover:border-slate-400 bg-white"
              download="Odafe-Amalega-CV.pdf"
            >
              <span>CV (PDF)</span>
              <ArrowUpRight className="w-3 h-3 text-slate-400" />
            </a>

            <div className="hidden sm:block">
              <Link
                to="/contact"
                className="btn-primary px-4 py-2.5"
              >
                <span>{t('nav.showWorkflow')}</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </Link>
            </div>

            <button
              type="button"
              onClick={() => setMobileOpen(!mobileOpen)}
              className="md:hidden min-h-[44px] min-w-[44px] p-2 flex items-center justify-center text-slate-900 border border-slate-200 rounded-lg hover:bg-slate-100"
              aria-label={mobileOpen ? t('nav.close') : t('nav.open')}
              aria-expanded={mobileOpen}
            >
              {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileOpen && (
        <div className="md:hidden border-t border-slate-200 bg-white px-6 py-5 space-y-4">
          <div className="font-mono-tech text-[10px] text-slate-500 tracking-[0.1em] uppercase">
            {t('nav.open')}
          </div>
          <nav className="grid grid-cols-1 gap-1.5 text-xs font-mono-tech">
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                onClick={() => setMobileOpen(false)}
                className={`min-h-[44px] py-3 px-3.5 border rounded-lg flex items-center justify-between transition-colors ${
                  isActive(link.to)
                    ? 'border-amber-600 bg-amber-50/50 text-slate-900 font-semibold'
                    : 'border-slate-200 bg-white text-slate-600 hover:text-slate-900'
                }`}
              >
                <span>{link.label}</span>
                <span className="text-[10px] text-amber-700">{link.num}</span>
              </Link>
            ))}
          </nav>

          <div className="pt-2 border-t border-slate-200 space-y-2">
            <Link
              to="/contact"
              onClick={() => setMobileOpen(false)}
              className="btn-primary w-full py-3"
            >
              <span>{t('nav.showWorkflow')}</span>
              <ArrowUpRight className="w-4 h-4" />
            </Link>

            <a
              href="/cv.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary w-full py-2.5 text-xs font-mono-tech flex items-center justify-center gap-2"
              download="Odafe-Amalega-CV.pdf"
            >
              <span>{t('nav.downloadCv')}</span>
              <ArrowUpRight className="w-3.5 h-3.5 text-slate-400" />
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
