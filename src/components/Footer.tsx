import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import { Link } from '../router/Router';

const linkClass = 'text-sm text-slate-600 transition-colors hover:text-slate-950';

export const Footer: React.FC = () => (
  <footer className="mt-16 border-t border-slate-200 bg-slate-50 text-slate-900">
    <div className="mx-auto max-w-[1440px] px-6 py-12 sm:px-12 lg:px-16">
      <div className="grid gap-10 md:grid-cols-12">
        <div className="space-y-4 md:col-span-5">
          <Link to="/" className="inline-flex items-center gap-3" aria-label="DafeDeScribe home">
            <img src="/logo.png" alt="" className="h-9 w-9 border border-slate-200 object-cover" />
            <div>
              <div className="text-xl font-bold tracking-tight">DafeDeScribe</div>
              <div className="font-mono-tech text-xs uppercase tracking-[0.1em] text-slate-500">Systems · Automation · Education</div>
            </div>
          </Link>
          <p className="max-w-md text-sm leading-relaxed text-slate-600">
            Odafe Amalega designs maintainable workflow, data, and AI-assisted systems for industrial and operational businesses.
          </p>
          <div className="font-mono-tech text-xs text-slate-500">Ibadan, Nigeria · Working globally</div>
        </div>

        <nav aria-label="Commercial services" className="space-y-3 md:col-span-3">
          <div className="font-mono-tech text-xs font-semibold uppercase tracking-[0.1em] text-amber-800">Commercial work</div>
          <ul className="space-y-2">
            <li><Link to="/industry" className={linkClass}>Industry systems</Link></li>
            <li><Link to="/automation" className={linkClass}>Automation approach</Link></li>
            <li><Link to="/work" className={linkClass}>Documented work</Link></li>
            <li><Link to="/contact" className="text-sm font-semibold text-slate-950 hover:text-amber-800">Show me the workflow</Link></li>
          </ul>
        </nav>

        <nav aria-label="Background and learning" className="space-y-3 md:col-span-2">
          <div className="font-mono-tech text-xs font-semibold uppercase tracking-[0.1em] text-amber-800">Practice</div>
          <ul className="space-y-2">
            <li><Link to="/teaching" className={linkClass}>Teaching</Link></li>
            <li><Link to="/notes" className={linkClass}>Notes</Link></li>
            <li><Link to="/about" className={linkClass}>About</Link></li>
            <li><Link to="/lab" className={linkClass}>Lab</Link></li>
          </ul>
        </nav>

        <div className="space-y-3 md:col-span-2">
          <div className="font-mono-tech text-xs font-semibold uppercase tracking-[0.1em] text-amber-800">Direct</div>
          <a href="/cv.pdf" target="_blank" rel="noopener noreferrer" download="Odafe-Amalega-CV.pdf" className={`${linkClass} inline-flex items-center gap-1`}>
            CV (PDF)<ArrowUpRight className="h-3.5 w-3.5" aria-hidden="true" />
          </a>
          <a href="https://wa.me/2349132480302" target="_blank" rel="noopener noreferrer" className={`${linkClass} flex items-center gap-1`}>
            WhatsApp<ArrowUpRight className="h-3.5 w-3.5" aria-hidden="true" />
          </a>
        </div>
      </div>

      <div className="mt-10 flex flex-col gap-3 border-t border-slate-200 pt-5 font-mono-tech text-xs text-slate-500 sm:flex-row sm:items-center sm:justify-between">
        <div>© {new Date().getFullYear()} DafeDeScribe · Odafe Amalega.</div>
        <Link to="/contact" className="hover:text-slate-950">Direct inquiry</Link>
      </div>
    </div>
  </footer>
);
