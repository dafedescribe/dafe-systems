import React from 'react';
import { 
  FileText, 
  Cpu, 
  UserCheck, 
  CheckCircle2, 
  ArrowRight, 
  Search, 
  Filter, 
  Bell, 
  Database,
  Layers,
  Sparkles
} from 'lucide-react';

interface ProcessDiagramProps {
  type?: 'commercial' | 'rfq' | 'tender' | 'quotation' | 'hero-schematic';
}

export const ProcessDiagram: React.FC<ProcessDiagramProps> = ({ type = 'commercial' }) => {
  // Hero Workflow Architecture Diagram
  if (type === 'hero-schematic') {
    const steps = [
      {
        num: '01',
        title: 'Unstructured Influx',
        desc: 'Incoming customer emails, engineering PDFs, and custom Excel sheets arrive through commercial channels.',
        badge: 'Inflow',
        badgeColor: 'bg-slate-100 text-slate-700',
        icon: FileText
      },
      {
        num: '02',
        title: 'Automated Extraction',
        desc: 'Deterministic parsers and AI models extract line items, match SKUs, normalize quantities, and flag missing specifications.',
        badge: 'Automated',
        badgeColor: 'bg-amber-100 text-amber-800 font-semibold',
        icon: Cpu
      },
      {
        num: '03',
        title: 'Engineering Review',
        desc: 'Sales engineers evaluate margin thresholds, inventory availability, and technical constraints.',
        badge: 'Human Checkpoint',
        badgeColor: 'bg-slate-900 text-white font-medium',
        icon: UserCheck
      },
      {
        num: '04',
        title: 'System Dispatch',
        desc: 'Binding quotation is assembled, dispatched to the customer, and synchronized back into ERP and CRM databases.',
        badge: 'Dispatched',
        badgeColor: 'bg-emerald-50 text-emerald-800 font-medium',
        icon: CheckCircle2
      }
    ];

    return (
      <div 
        className="bg-white border border-slate-200 rounded-xl p-6 sm:p-7 shadow-sm space-y-6" 
        role="region" 
        aria-label="Operational Workflow Architecture"
      >
        <div className="flex items-center justify-between border-b border-slate-100 pb-4">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-amber-600" aria-hidden="true" />
            <span className="font-mono-tech text-xs tracking-wider text-slate-900 uppercase font-semibold">
              Operational Pipeline Architecture
            </span>
          </div>
          <span className="text-xs text-slate-500 font-medium">
            Automated Intake · Human Sign-off
          </span>
        </div>

        <div className="space-y-3">
          {steps.map((step, idx) => {
            const Icon = step.icon;
            return (
              <div key={step.num} className="relative">
                <div className="p-4 rounded-lg border border-slate-100 bg-slate-50/50 hover:bg-slate-50 transition-colors flex items-start gap-4">
                  <div className="w-9 h-9 rounded-md bg-white border border-slate-200 flex items-center justify-center flex-shrink-0 text-slate-700 shadow-2xs">
                    <Icon className="w-4 h-4 text-slate-700" />
                  </div>
                  
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between gap-2 mb-1">
                      <div className="flex items-center gap-2">
                        <span className="text-xs font-mono-tech text-slate-400 font-medium">{step.num}</span>
                        <h4 className="text-sm font-bold text-slate-900 font-body">{step.title}</h4>
                      </div>
                      <span className={`text-[11px] px-2 py-0.5 rounded-full ${step.badgeColor}`}>
                        {step.badge}
                      </span>
                    </div>
                    <p className="text-xs text-slate-600 leading-relaxed font-body">
                      {step.desc}
                    </p>
                  </div>
                </div>

                {idx < steps.length - 1 && (
                  <div className="flex justify-center py-1">
                    <div className="w-0.5 h-3 bg-slate-200" />
                  </div>
                )}
              </div>
            );
          })}
        </div>

        <div className="pt-3 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500">
          <span className="font-medium text-slate-700">Deterministic preparation</span>
          <span className="text-amber-700 font-semibold">Human commercial control</span>
        </div>
      </div>
    );
  }

  // RFQ Architecture Diagram
  if (type === 'rfq') {
    return (
      <div 
        className="bg-white border border-slate-200 rounded-xl p-6 sm:p-8 my-8 shadow-sm" 
        role="region" 
        aria-label="RFQ Intake and Preparation Engine Architecture"
      >
        <div className="flex flex-wrap items-center justify-between gap-2 border-b border-slate-100 pb-4 mb-6">
          <div className="flex items-center gap-2">
            <Layers className="w-4 h-4 text-amber-600" />
            <span className="text-xs font-mono-tech uppercase tracking-wider text-slate-900 font-semibold">
              RFQ Intake & Extraction Architecture
            </span>
          </div>
          <span className="text-xs text-slate-500">
            End-to-End Preparation Engine
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Phase 1 */}
          <div className="p-5 rounded-lg border border-slate-200 bg-slate-50/50">
            <div className="text-xs font-mono-tech text-slate-500 uppercase tracking-wider mb-2">
              Phase 01 · Inbound Sources
            </div>
            <div className="text-base font-bold text-slate-900 mb-3 font-body">
              Multi-Format Intake
            </div>
            <ul className="space-y-2 text-xs text-slate-600">
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-amber-600" /> Inbound Customer Emails
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-amber-600" /> Multi-page PDF Drawings & Specifications
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-amber-600" /> Non-standard Vendor Excel Sheets
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-amber-600" /> Scanned Quotation Requests
              </li>
            </ul>
          </div>

          {/* Phase 2: Automated Preparation */}
          <div className="p-5 rounded-lg border border-amber-300 bg-amber-50/40 relative">
            <div className="inline-block bg-amber-700 text-white text-[10px] px-2 py-0.5 rounded font-semibold uppercase tracking-wider mb-2">
              Automated Parsing Pipeline
            </div>
            <div className="text-base font-bold text-slate-900 mb-3 font-body">
              Normalized RFQ Dossier
            </div>
            <ul className="space-y-2 text-xs text-slate-700">
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-amber-700 flex-shrink-0" /> Verified Customer Identity & CRM Match
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-amber-700 flex-shrink-0" /> Exact Part Numbers & ERP SKU Resolution
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-amber-700 flex-shrink-0" /> Line-Item Quantities & Unit Normalization
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-amber-700 flex-shrink-0" /> Extracted Tolerances & Material Grades
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-amber-700 flex-shrink-0" /> Required Delivery Dates & Lead Times
              </li>
            </ul>
          </div>

          {/* Phase 3: Commercial Desk */}
          <div className="p-5 rounded-lg border border-slate-200 bg-white shadow-2xs">
            <div className="text-xs font-mono-tech text-slate-500 uppercase tracking-wider mb-2">
              Phase 03 · Commercial Desk
            </div>
            <div className="text-base font-bold text-slate-900 mb-3 font-body">
              Sales Engineering Sign-off
            </div>
            <ul className="space-y-2 text-xs text-slate-600">
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-slate-700" /> Engineering Feasibility Approval
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-slate-700" /> Live Margin & Pricing Evaluation
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-slate-700" /> Shop Floor Production Availability
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-slate-700" /> Terms & Payment Exceptions
              </li>
              <li className="flex items-center gap-2 font-medium text-slate-900">
                <CheckCircle2 className="w-3.5 h-3.5 text-slate-900 flex-shrink-0" /> Final Dispatched Quotation
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-6 pt-4 border-t border-slate-100 flex flex-col sm:flex-row sm:items-center justify-between gap-2 text-xs text-slate-600">
          <span className="font-semibold text-slate-900">
            Automating repetitive extraction while keeping commercial decisions with your engineers.
          </span>
          <span className="text-amber-700 font-mono-tech font-medium">
            Processing speed: &lt; 3 mins per batch
          </span>
        </div>
      </div>
    );
  }

  // Tender Pipeline Diagram
  if (type === 'tender') {
    const steps = [
      { num: '01', name: 'Monitor', desc: 'Continuous polling of procurement portals and trade boards.', icon: Search },
      { num: '02', name: 'Deduplicate', desc: 'Identify new notices against existing hash database.', icon: Database },
      { num: '03', name: 'Extract', desc: 'Parse scope summary, submission deadlines, and bond requirements.', icon: FileText },
      { num: '04', name: 'Filter', desc: 'Score capability match against regional criteria and exclusions.', icon: Filter },
      { num: '05', name: 'Notify', desc: 'Generate consolidated morning briefing for commercial leads.', icon: Bell },
      { num: '06', name: 'Review', desc: 'Estimators evaluate qualified, high-margin opportunities.', icon: UserCheck }
    ];

    return (
      <div 
        className="bg-white border border-slate-200 rounded-xl p-6 sm:p-8 my-8 shadow-sm" 
        role="region" 
        aria-label="Tender Discovery and Qualification Pipeline Architecture"
      >
        <div className="flex flex-wrap items-center justify-between gap-2 border-b border-slate-100 pb-4 mb-6">
          <div className="flex items-center gap-2">
            <Search className="w-4 h-4 text-amber-600" />
            <span className="text-xs font-mono-tech uppercase tracking-wider text-slate-900 font-semibold">
              Tender Discovery & Qualification Pipeline
            </span>
          </div>
          <span className="text-xs text-slate-500 font-medium">
            Continuous Discovery Architecture
          </span>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-6 gap-3">
          {steps.map((step) => {
            const Icon = step.icon;
            const isHuman = step.name === 'Review';
            return (
              <div
                key={step.num}
                className={`p-4 rounded-lg border ${
                  isHuman
                    ? 'border-slate-900 bg-slate-900 text-white'
                    : 'border-slate-200 bg-slate-50/60 text-slate-900'
                }`}
              >
                <div className="flex items-center justify-between mb-2">
                  <span className={`font-mono-tech text-xs font-semibold ${isHuman ? 'text-amber-400' : 'text-amber-700'}`}>
                    {step.num}
                  </span>
                  <Icon className={`w-3.5 h-3.5 ${isHuman ? 'text-slate-300' : 'text-slate-500'}`} />
                </div>
                <div className="font-bold text-sm mb-1 font-body">
                  {step.name}
                </div>
                <div className={`text-xs leading-relaxed ${isHuman ? 'text-slate-300' : 'text-slate-600'}`}>
                  {step.desc}
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-6 pt-4 border-t border-slate-100 text-xs text-slate-600 flex items-center justify-between">
          <span>Automated monitoring surfaces qualified opportunities without manual daily portal checking.</span>
          <span className="font-semibold text-slate-900">Commercial estimation stays human.</span>
        </div>
      </div>
    );
  }

  // Commercial Industrial Lifecycle Diagram
  const stages = [
    { code: '01', title: 'Opportunity Discovery', subtitle: 'Portal & inbound tracking' },
    { code: '02', title: 'Enquiry / RFQ', subtitle: 'Document extraction' },
    { code: '03', title: 'Specification Review', subtitle: 'SKU & requirement mapping' },
    { code: '04', title: 'Quotation Preparation', subtitle: 'Pricing & margin sign-off' },
    { code: '05', title: 'Follow-Up Tracking', subtitle: 'Structured cadence' },
    { code: '06', title: 'Order Execution', subtitle: 'ERP & shop handoff' },
    { code: '07', title: 'Performance Reporting', subtitle: 'Weekly operational metrics' },
  ];

  return (
    <div 
      className="bg-white border border-slate-200 rounded-xl p-6 sm:p-8 my-8 shadow-sm" 
      role="region" 
      aria-label="Commercial Order Lifecycle Flow Schematic"
    >
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-slate-100 pb-4 mb-6">
        <div className="flex items-center gap-2">
          <Database className="w-4 h-4 text-amber-600" />
          <span className="text-xs font-mono-tech uppercase tracking-wider text-slate-900 font-semibold">
            The Commercial Order Lifecycle
          </span>
        </div>
        <span className="text-xs text-slate-500">
          End-to-End Operational Surface
        </span>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-7 gap-2.5">
        {stages.map((stage, idx) => {
          const isHighlight = stage.code === '04';
          return (
            <div
              key={stage.code}
              className={`p-3.5 rounded-lg border ${
                isHighlight
                  ? 'border-amber-400 bg-amber-50/50 shadow-2xs'
                  : 'border-slate-200 bg-slate-50/50'
              }`}
            >
              <div className="flex items-center justify-between mb-1.5">
                <span className="font-mono-tech text-[11px] text-amber-700 font-semibold">
                  {stage.code}
                </span>
                {idx < stages.length - 1 && (
                  <span className="text-slate-300 font-mono-tech text-[10px]">
                    →
                  </span>
                )}
              </div>
              <div className="font-bold text-xs sm:text-sm text-slate-900 leading-tight mb-1 font-body">
                {stage.title}
              </div>
              <div className="text-[11px] text-slate-500">
                {stage.subtitle}
              </div>
            </div>
          );
        })}
      </div>

      <div className="mt-6 pt-5 border-t border-slate-100 flex flex-col sm:flex-row sm:items-center justify-between gap-2 text-xs sm:text-sm text-slate-600">
        <span className="font-medium text-slate-900">
          Experienced sales engineers retain control over commitments and margins.
        </span>
        <span className="text-amber-700 font-medium">
          Routine manual transcription is handled systematically.
        </span>
      </div>
    </div>
  );
};
