import React from 'react';
import { Link } from '../router/Router';
import { ArrowUpRight } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="border-t border-[#D9D4C8] bg-[#F5F1E7] text-[#181816] mt-24">
      <div className="max-w-[1440px] mx-auto px-6 sm:px-12 lg:px-16 py-16">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10">
          
          {/* Col 1: Brand & Role */}
          <div className="md:col-span-5 space-y-4">
            <div className="flex flex-col">
              <span className="font-bold tracking-tight text-xl text-[#181816] font-body">
                DafeDeScribe
              </span>
              <span className="font-mono-tech text-[10px] tracking-[0.12em] uppercase text-[#77736A]">
                SYSTEMS · AUTOMATION · EDUCATION
              </span>
            </div>
            
            <p className="text-sm text-[#77736A] font-body leading-relaxed max-w-md">
              The professional brand of <strong className="font-semibold text-[#181816]">Odafe Amalega</strong>. 
              Designing workflow automation, data processing, and AI systems for industrial and operational businesses, and delivering practical technical training.
            </p>

            <div className="pt-2 font-mono-tech text-xs text-[#77736A] space-y-1">
              <div>AI Workflow Engineer · Systems Builder · Educator</div>
              <div>Currently at <span className="text-[#181816] font-semibold">AppClick</span></div>
            </div>
          </div>

          {/* Col 2: Industry Systems */}
          <div className="md:col-span-3 space-y-3">
            <div className="font-mono-tech text-xs uppercase tracking-[0.1em] text-[#B58A2A] font-semibold">
              01 / INDUSTRY
            </div>
            <ul className="space-y-2 text-sm font-body">
              <li>
                <Link to="/industry" className="text-[#77736A] hover:text-[#181816] transition-colors">
                  Commercial Systems Overview
                </Link>
              </li>
              <li>
                <Link to="/industry/rfq-automation" className="text-[#77736A] hover:text-[#181816] transition-colors">
                  RFQ Automation
                </Link>
              </li>
              <li>
                <Link to="/industry/tender-monitoring" className="text-[#77736A] hover:text-[#181816] transition-colors">
                  Tender Monitoring
                </Link>
              </li>
              <li>
                <Link to="/industry/quotation-workflows" className="text-[#77736A] hover:text-[#181816] transition-colors">
                  Quotation Workflows
                </Link>
              </li>
              <li>
                <Link to="/industry/commercial-reporting" className="text-[#77736A] hover:text-[#181816] transition-colors">
                  Commercial Reporting
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 3: Practice & Catalogue */}
          <div className="md:col-span-2 space-y-3">
            <div className="font-mono-tech text-xs uppercase tracking-[0.1em] text-[#B58A2A] font-semibold">
              02 / PRACTICE
            </div>
            <ul className="space-y-2 text-sm font-body">
              <li>
                <Link to="/automation" className="text-[#77736A] hover:text-[#181816] transition-colors">
                  Automation
                </Link>
              </li>
              <li>
                <Link to="/teaching" className="text-[#77736A] hover:text-[#181816] transition-colors">
                  Teaching & Training
                </Link>
              </li>
              <li>
                <Link to="/work" className="text-[#77736A] hover:text-[#181816] transition-colors">
                  Selected Work
                </Link>
              </li>
              <li>
                <Link to="/notes" className="text-[#77736A] hover:text-[#181816] transition-colors">
                  Technical Bulletins
                </Link>
              </li>
              <li>
                <Link to="/lab" className="text-[#77736A] hover:text-[#181816] transition-colors">
                  Lab & Prototypes
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 4: Contact */}
          <div className="md:col-span-2 space-y-3">
            <div className="font-mono-tech text-xs uppercase tracking-[0.1em] text-[#B58A2A] font-semibold">
              03 / CONTACT
            </div>
            <ul className="space-y-2 text-sm font-body">
              <li>
                <Link to="/about" className="text-[#77736A] hover:text-[#181816] transition-colors">
                  About & Personnel File
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-[#181816] font-semibold hover:text-[#B58A2A] transition-colors">
                  Submit a Workflow
                </Link>
              </li>
              <li>
                <a
                  href="https://wa.me/2348148794458"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-[#77736A] hover:text-[#181816] transition-colors"
                >
                  <span>WhatsApp Direct</span>
                  <ArrowUpRight className="w-3 h-3" />
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-6 border-t border-[#D9D4C8] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 font-mono-tech text-xs text-[#77736A]">
          <div>
            © {new Date().getFullYear()} DafeDeScribe · Odafe Amalega. All rights reserved.
          </div>
          <div className="flex items-center gap-4">
            <span>Engineering Systems & Workflow Architecture</span>
            <span className="text-[#D9D4C8]">|</span>
            <Link to="/contact" className="hover:text-[#181816] transition-colors">
              Direct Enquiry
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};
