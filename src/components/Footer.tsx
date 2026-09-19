import React from 'react';
import { Link } from '../router/Router';
import { ArrowUpRight } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="border-t border-[#ded9cf] bg-[#f3efe6] text-[#141416] mt-24">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10">
          
          {/* Col 1: Brand & Role */}
          <div className="md:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-7 h-7 border border-[#141416] bg-[#141416] text-[#faf8f5] flex items-center justify-center font-mono-tech text-xs font-semibold">
                DS
              </div>
              <span className="font-semibold tracking-tight text-lg text-[#141416]">
                DafeDeScribe
              </span>
            </div>
            
            <p className="text-sm text-[#575653] leading-relaxed max-w-md">
              The professional brand of <strong className="font-medium text-[#141416]">Odafe Amalega</strong>. 
              Designing workflow automation, data processing, and AI systems for industrial and operational businesses, and delivering practical technical training.
            </p>

            <div className="pt-2 font-mono-tech text-xs text-[#7a7770] space-y-1">
              <div>AI Workflow Engineer · Systems Builder · Educator</div>
              <div>Currently at <span className="text-[#141416] font-medium">AppClick</span></div>
            </div>
          </div>

          {/* Col 2: Industry Systems */}
          <div className="md:col-span-3 space-y-3">
            <div className="font-mono-tech text-xs uppercase tracking-wider text-[#7a7770]">
              [01] Industrial
            </div>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/industry" className="text-[#575653] hover:text-[#141416] transition-colors">
                  Commercial Systems Overview
                </Link>
              </li>
              <li>
                <Link to="/industry/rfq-automation" className="text-[#575653] hover:text-[#141416] transition-colors">
                  RFQ Automation
                </Link>
              </li>
              <li>
                <Link to="/industry/tender-monitoring" className="text-[#575653] hover:text-[#141416] transition-colors">
                  Tender Monitoring
                </Link>
              </li>
              <li>
                <Link to="/industry/quotation-workflows" className="text-[#575653] hover:text-[#141416] transition-colors">
                  Quotation Workflows
                </Link>
              </li>
              <li>
                <Link to="/industry/commercial-reporting" className="text-[#575653] hover:text-[#141416] transition-colors">
                  Commercial Reporting
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 3: Automation & Teaching */}
          <div className="md:col-span-2 space-y-3">
            <div className="font-mono-tech text-xs uppercase tracking-wider text-[#7a7770]">
              [02] Practice
            </div>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/automation" className="text-[#575653] hover:text-[#141416] transition-colors">
                  Automation
                </Link>
              </li>
              <li>
                <Link to="/teaching" className="text-[#575653] hover:text-[#141416] transition-colors">
                  Teaching & Training
                </Link>
              </li>
              <li>
                <Link to="/work" className="text-[#575653] hover:text-[#141416] transition-colors">
                  Selected Work
                </Link>
              </li>
              <li>
                <Link to="/notes" className="text-[#575653] hover:text-[#141416] transition-colors">
                  Technical Notes
                </Link>
              </li>
              <li>
                <Link to="/lab" className="text-[#7a7770] hover:text-[#141416] transition-colors">
                  Lab & Prototypes
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 4: About & Direct */}
          <div className="md:col-span-2 space-y-3">
            <div className="font-mono-tech text-xs uppercase tracking-wider text-[#7a7770]">
              [03] Contact
            </div>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/about" className="text-[#575653] hover:text-[#141416] transition-colors">
                  About & Digital CV
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-[#575653] hover:text-[#141416] transition-colors font-medium">
                  Submit a Workflow
                </Link>
              </li>
              <li>
                <a
                  href="https://wa.me/2348148794458"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-[#575653] hover:text-[#141416] transition-colors"
                >
                  <span>WhatsApp Direct</span>
                  <ArrowUpRight className="w-3 h-3" />
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-6 border-t border-[#ded9cf] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 font-mono-tech text-xs text-[#7a7770]">
          <div>
            © {new Date().getFullYear()} DafeDeScribe · Odafe Amalega. All rights reserved.
          </div>
          <div className="flex items-center gap-4">
            <span>Engineering Systems & Workflow Architecture</span>
            <span className="text-[#ded9cf]">|</span>
            <Link to="/contact" className="hover:text-[#141416] transition-colors">
              Direct Enquiry
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};
