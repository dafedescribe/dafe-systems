import React, { useState } from 'react';
import { Link, useRouter } from '../router/Router';
import { Menu, X, ArrowUpRight } from 'lucide-react';

export const Navbar: React.FC = () => {
  const { path } = useRouter();
  const [mobileOpen, setMobileOpen] = useState(false);

  const navLinks = [
    { num: '01', label: 'INDUSTRY', to: '/industry' },
    { num: '02', label: 'AUTOMATION', to: '/automation' },
    { num: '03', label: 'WORK', to: '/work' },
    { num: '04', label: 'TEACHING', to: '/teaching' },
    { num: '05', label: 'NOTES', to: '/notes' },
    { num: '06', label: 'ABOUT', to: '/about' },
  ];

  const isActive = (to: string) => {
    if (to === '/') return path === '/';
    return path.startsWith(to);
  };

  return (
    <header className="sticky top-0 z-50 bg-[#FCFBF7]/95 backdrop-blur-sm border-b border-[#D9D4C8]">
      <div className="max-w-[1440px] mx-auto px-6 sm:px-12 lg:px-16">
        <div className="flex items-center justify-between h-18 sm:h-20">
          
          {/* Brand Wordmark & Technical Identifier */}
          <Link
            to="/"
            className="flex flex-col group py-1"
            aria-label="DafeDeScribe Index"
          >
            <span className="font-bold tracking-tight text-lg sm:text-xl text-[#181816] font-body">
              DafeDeScribe
            </span>
            <span className="font-mono-tech text-[10px] tracking-[0.12em] uppercase text-[#77736A]">
              SYSTEMS · AUTOMATION · EDUCATION
            </span>
          </Link>

          {/* Desktop Navigation Links — Catalogue Index Style */}
          <nav className="hidden md:flex items-center gap-7 lg:gap-9 text-xs font-mono-tech tracking-[0.08em]">
            {navLinks.map((link) => {
              const active = isActive(link.to);
              return (
                <Link
                  key={link.to}
                  to={link.to}
                  className={`relative py-2 flex items-center gap-1.5 transition-colors ${
                    active
                      ? 'text-[#181816] font-semibold'
                      : 'text-[#77736A] hover:text-[#181816]'
                  }`}
                >
                  <span className={`text-[10px] ${active ? 'text-[#B58A2A]' : 'text-[#AAA397]'}`}>
                    {link.num}
                  </span>
                  <span>{link.label}</span>
                  {active && (
                    <span className="absolute bottom-0 left-0 right-0 h-[2px] bg-[#B58A2A]" />
                  )}
                </Link>
              );
            })}
          </nav>

          {/* Primary CTA & Mobile Drawer Toggle */}
          <div className="flex items-center gap-4">
            <Link
              to="/contact"
              className="hidden sm:inline-flex btn-primary px-4 py-2.5"
            >
              <span>Show Me the Workflow</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </Link>

            <button
              type="button"
              onClick={() => setMobileOpen(!mobileOpen)}
              className="md:hidden p-2 text-[#181816] border border-[#D9D4C8] hover:bg-[#F5F1E7]"
              aria-label={mobileOpen ? 'Close Navigation' : 'Open Navigation'}
              aria-expanded={mobileOpen}
            >
              {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileOpen && (
        <div className="md:hidden border-t border-[#D9D4C8] bg-[#FCFBF7] px-6 py-5 space-y-4">
          <div className="font-mono-tech text-[10px] text-[#77736A] tracking-[0.1em] uppercase">
            CATALOGUE DIRECTORY
          </div>
          <nav className="grid grid-cols-1 gap-1 text-xs font-mono-tech">
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                onClick={() => setMobileOpen(false)}
                className={`py-2.5 px-3 border flex items-center justify-between ${
                  isActive(link.to)
                    ? 'border-[#B58A2A] bg-[#F6F0DC] text-[#181816] font-semibold'
                    : 'border-[#D9D4C8] bg-[#FFFFFF] text-[#77736A] hover:text-[#181816]'
                }`}
              >
                <span>{link.label}</span>
                <span className="text-[10px] text-[#B58A2A]">{link.num}</span>
              </Link>
            ))}
          </nav>

          <div className="pt-2 border-t border-[#D9D4C8]">
            <Link
              to="/contact"
              onClick={() => setMobileOpen(false)}
              className="btn-primary w-full py-3"
            >
              <span>Show Me the Workflow</span>
              <ArrowUpRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      )}
    </header>
  );
};
