import React, { useState } from 'react';
import { Link, useRouter } from '../router/Router';
import { Menu, X, ArrowUpRight } from 'lucide-react';

export const Navbar: React.FC = () => {
  const { path } = useRouter();
  const [mobileOpen, setMobileOpen] = useState(false);

  const navLinks = [
    { label: 'Industry', to: '/industry' },
    { label: 'Automation', to: '/automation' },
    { label: 'Work', to: '/work' },
    { label: 'Teaching', to: '/teaching' },
    { label: 'Notes', to: '/notes' },
    { label: 'About', to: '/about' },
  ];

  const isActive = (to: string) => {
    if (to === '/') return path === '/';
    return path.startsWith(to);
  };

  return (
    <header className="sticky top-0 z-50 bg-[#faf8f5]/95 backdrop-blur-sm border-b border-[#ded9cf]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20">
          
          {/* Brand Logo & Title */}
          <Link
            to="/"
            className="flex items-center gap-3 group text-[#141416] hover:opacity-90 transition-opacity"
            aria-label="DafeDeScribe Home"
          >
            <div className="w-8 h-8 rounded-none border border-[#141416] bg-[#141416] text-[#faf8f5] flex items-center justify-center font-mono-tech text-xs font-semibold tracking-wider">
              DS
            </div>
            <div className="flex flex-col">
              <span className="font-semibold tracking-tight text-base sm:text-lg text-[#141416]">
                DafeDeScribe
              </span>
              <span className="hidden sm:inline font-mono-tech text-[10px] tracking-widest uppercase text-[#7a7770]">
                Odafe Amalega · Systems
              </span>
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-7 text-sm">
            {navLinks.map((link) => {
              const active = isActive(link.to);
              return (
                <Link
                  key={link.to}
                  to={link.to}
                  className={`relative py-1 transition-colors ${
                    active
                      ? 'text-[#141416] font-medium'
                      : 'text-[#575653] hover:text-[#141416]'
                  }`}
                >
                  {link.label}
                  {active && (
                    <span className="absolute bottom-0 left-0 right-0 h-[1.5px] bg-[#96742c]" />
                  )}
                </Link>
              );
            })}
          </nav>

          {/* Primary CTA & Mobile Toggle */}
          <div className="flex items-center gap-3">
            <Link
              to="/contact"
              className="hidden sm:inline-flex items-center gap-2 px-4 py-2 text-xs font-mono-tech uppercase tracking-wider bg-[#141416] text-[#faf8f5] border border-[#141416] hover:bg-[#2b2b30] transition-colors"
            >
              <span>Show Me the Workflow</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </Link>

            <button
              type="button"
              onClick={() => setMobileOpen(!mobileOpen)}
              className="md:hidden p-2 text-[#141416] hover:bg-[#f3efe6] border border-[#ded9cf]"
              aria-label={mobileOpen ? 'Close Navigation Menu' : 'Open Navigation Menu'}
              aria-expanded={mobileOpen}
            >
              {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Compact Mobile Menu */}
      {mobileOpen && (
        <div className="md:hidden border-t border-[#ded9cf] bg-[#faf8f5] px-4 py-4 space-y-3">
          <nav className="grid grid-cols-2 gap-2 text-sm">
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                onClick={() => setMobileOpen(false)}
                className={`px-3 py-2 border ${
                  isActive(link.to)
                    ? 'border-[#141416] bg-[#f3efe6] font-medium text-[#141416]'
                    : 'border-[#ded9cf] text-[#575653] hover:bg-[#f3efe6] hover:text-[#141416]'
                }`}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="pt-2 border-t border-[#ded9cf]">
            <Link
              to="/contact"
              onClick={() => setMobileOpen(false)}
              className="flex items-center justify-between w-full px-4 py-3 text-xs font-mono-tech uppercase tracking-wider bg-[#141416] text-[#faf8f5]"
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
