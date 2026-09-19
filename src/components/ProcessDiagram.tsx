import React from 'react';

interface ProcessDiagramProps {
  type?: 'commercial' | 'rfq' | 'tender' | 'quotation' | 'hero-schematic';
}

export const ProcessDiagram: React.FC<ProcessDiagramProps> = ({ type = 'commercial' }) => {
  // Hero Schematic: 7/5 layout companion diagram
  if (type === 'hero-schematic') {
    return (
      <div className="catalogue-sheet p-6 sm:p-7 space-y-5">
        <div className="flex items-center justify-between border-b border-[#D9D4C8] pb-3">
          <span className="font-mono-tech text-[10px] tracking-[0.1em] text-[#B58A2A] uppercase font-semibold">
            SCHEMATIC / SCH-001
          </span>
          <span className="font-mono-tech text-[10px] text-[#77736A] uppercase">
            OPERATIONAL PIPELINE
          </span>
        </div>

        <div className="space-y-2.5 font-mono-tech text-xs">
          {/* Step 1: Input */}
          <div className="p-3 border border-[#D9D4C8] bg-[#FCFBF7] flex items-start justify-between gap-3">
            <div>
              <span className="text-[10px] text-[#B58A2A] font-semibold block">01 / INPUT</span>
              <span className="text-[#181816] font-medium font-body text-sm">Unstructured Influx</span>
              <span className="text-[11px] text-[#77736A] block mt-0.5">Emails, multi-page PDFs, messy spreadsheets</span>
            </div>
            <span className="text-[10px] px-1.5 py-0.5 bg-[#EBE5D8] text-[#33312C]">RAW</span>
          </div>

          <div className="text-center text-[#B58A2A] text-xs font-semibold py-0.5">↓</div>

          {/* Step 2: Process (Automated) */}
          <div className="p-3 border border-[#B58A2A] bg-[#F6F0DC] flex items-start justify-between gap-3">
            <div>
              <span className="text-[10px] text-[#795B18] font-semibold block">02 / PROCESS [AUTOMATED]</span>
              <span className="text-[#181816] font-medium font-body text-sm">Extraction & Normalization</span>
              <span className="text-[11px] text-[#77736A] block mt-0.5">Data parsing, schema matching, catalog lookup</span>
            </div>
            <span className="text-[10px] px-1.5 py-0.5 bg-[#B58A2A] text-[#FFFFFF] font-semibold">SYSTEM</span>
          </div>

          <div className="text-center text-[#B58A2A] text-xs font-semibold py-0.5">↓</div>

          {/* Step 3: Decision (Human) */}
          <div className="p-3 border border-[#181816] bg-[#FFFFFF] flex items-start justify-between gap-3">
            <div>
              <span className="text-[10px] text-[#33312C] font-semibold block">03 / DECISION [HUMAN]</span>
              <span className="text-[#181816] font-medium font-body text-sm">Commercial Judgement</span>
              <span className="text-[11px] text-[#77736A] block mt-0.5">Pricing, margin sizing, engineering feasibility</span>
            </div>
            <span className="text-[10px] px-1.5 py-0.5 bg-[#181816] text-[#FCFBF7] font-semibold">HUMAN</span>
          </div>

          <div className="text-center text-[#B58A2A] text-xs font-semibold py-0.5">↓</div>

          {/* Step 4: Output */}
          <div className="p-3 border border-[#D9D4C8] bg-[#F5F1E7] flex items-start justify-between gap-3">
            <div>
              <span className="text-[10px] text-[#77736A] font-semibold block">04 / OUTPUT</span>
              <span className="text-[#181816] font-medium font-body text-sm">Dispatched Result</span>
              <span className="text-[11px] text-[#77736A] block mt-0.5">Approved quote, CRM update, rolling report</span>
            </div>
            <span className="text-[10px] px-1.5 py-0.5 bg-[#EBE5D8] text-[#33312C]">VERIFIED</span>
          </div>
        </div>

        <div className="pt-2 border-t border-[#D9D4C8] flex items-center justify-between text-[10px] font-mono-tech text-[#77736A]">
          <span>RULE: AUTOMATE PREPARATION</span>
          <span className="text-[#B58A2A]">KEEP JUDGEMENT HUMAN</span>
        </div>
      </div>
    );
  }

  // RFQ Architecture Diagram
  if (type === 'rfq') {
    return (
      <div className="catalogue-sheet p-6 sm:p-8 my-8">
        <div className="flex flex-wrap items-center justify-between gap-2 border-b border-[#D9D4C8] pb-3 mb-6">
          <span className="font-mono-tech text-xs tracking-[0.1em] text-[#B58A2A] uppercase font-semibold">
            [SCHEMATIC / RFQ-001]
          </span>
          <span className="font-mono-tech text-xs text-[#77736A] uppercase">
            INTAKE & PREPARATION ENGINE
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Phase 1 */}
          <div className="p-5 border border-[#D9D4C8] bg-[#FCFBF7]">
            <div className="font-mono-tech text-xs text-[#77736A] uppercase mb-2">
              Phase 01 · Inflow
            </div>
            <div className="text-base font-bold text-[#181816] mb-3 font-body">
              Incoming Sources
            </div>
            <ul className="space-y-1.5 text-xs text-[#77736A] font-mono-tech">
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-[#B58A2A]" /> Inbound Customer Emails
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-[#B58A2A]" /> Multi-page PDF Drawings & Specs
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-[#B58A2A]" /> Excel Spreadsheets (Custom Columns)
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-[#B58A2A]" /> Scanned Paper RFQs
              </li>
            </ul>
          </div>

          {/* Phase 2: Gold mark automated */}
          <div className="p-5 border border-[#B58A2A] bg-[#F6F0DC] relative">
            <div className="absolute -top-2.5 right-4 bg-[#B58A2A] text-[#FFFFFF] px-2 py-0.5 font-mono-tech text-[10px] uppercase tracking-wider font-semibold">
              AUTOMATED PREPARATION
            </div>
            <div className="font-mono-tech text-xs text-[#795B18] uppercase mb-2 font-semibold">
              Phase 02 · System Prepares
            </div>
            <div className="text-base font-bold text-[#181816] mb-3 font-body">
              Normalized RFQ Dossier
            </div>
            <ul className="space-y-1.5 text-xs text-[#33312C] font-mono-tech">
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-[#181816]" /> Verified Customer Identity & CRM Match
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-[#181816]" /> Exact Part Numbers & ERP SKUs
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-[#181816]" /> Line-item Quantities & Units
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-[#181816]" /> Extracted Tolerances & Material Grades
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-[#181816]" /> Delivery Deadlines & Lead Times
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-[#B58A2A]" /> Flagged Missing Information
              </li>
            </ul>
          </div>

          {/* Phase 3: Human Decides */}
          <div className="p-5 border border-[#181816] bg-[#FFFFFF]">
            <div className="font-mono-tech text-xs text-[#33312C] uppercase mb-2 font-semibold">
              Phase 03 · Commercial Desk
            </div>
            <div className="text-base font-bold text-[#181816] mb-3 font-body">
              Human Judgement
            </div>
            <ul className="space-y-1.5 text-xs text-[#77736A] font-mono-tech">
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-[#77736A]" /> Technical Feasibility Sign-off
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-[#77736A]" /> Current Material Pricing & Margin
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-[#77736A]" /> Shop Floor Availability
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-[#77736A]" /> Terms, Exceptions & Payment
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-[#181816]" /> Final Binding Quotation
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-6 pt-4 border-t border-[#D9D4C8] flex flex-col sm:flex-row sm:items-center justify-between gap-2 text-xs font-mono-tech text-[#77736A]">
          <span className="text-[#181816] font-semibold">
            PRINCIPLE: Automate preparation, never unmonitored commitment.
          </span>
          <span className="text-[#B58A2A]">
            Processing latency: &lt; 3 mins per batch
          </span>
        </div>
      </div>
    );
  }

  // Tender Pipeline Diagram
  if (type === 'tender') {
    const steps = [
      { num: '01', name: 'Monitor', role: 'System', desc: 'Polling target portals & public trade boards.' },
      { num: '02', name: 'Detect', role: 'System', desc: 'Identify net-new notices against hash database.' },
      { num: '03', name: 'Extract', role: 'System', desc: 'Scope summary, submission dates & bond values.' },
      { num: '04', name: 'Filter', role: 'System', desc: 'Capability score, regional filter & exclusions.' },
      { num: '05', name: 'Alert', role: 'System', desc: 'Consolidated morning digest to commercial desk.' },
      { num: '06', name: 'Review', role: 'Human', desc: 'Estimators evaluate qualified opportunities.' },
    ];

    return (
      <div className="catalogue-sheet p-6 sm:p-8 my-8">
        <div className="flex flex-wrap items-center justify-between gap-2 border-b border-[#D9D4C8] pb-3 mb-6">
          <span className="font-mono-tech text-xs tracking-[0.1em] text-[#B58A2A] uppercase font-semibold">
            [SCHEMATIC / TND-001]
          </span>
          <span className="font-mono-tech text-xs text-[#77736A] uppercase">
            TENDER DISCOVERY & QUALIFICATION
          </span>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-6 gap-3">
          {steps.map((step) => {
            const isHuman = step.role === 'Human';
            return (
              <div
                key={step.num}
                className={`p-4 border ${
                  isHuman
                    ? 'border-[#181816] bg-[#FFFFFF]'
                    : 'border-[#D9D4C8] bg-[#FCFBF7]'
                }`}
              >
                <div className="flex items-center justify-between mb-1.5">
                  <span className="font-mono-tech text-xs text-[#B58A2A] font-semibold">
                    [{step.num}]
                  </span>
                  <span className="font-mono-tech text-[9px] px-1 py-0.2 bg-[#EBE5D8] text-[#33312C]">
                    {step.role.toUpperCase()}
                  </span>
                </div>
                <div className="font-bold text-sm text-[#181816] mb-1 font-body">
                  {step.name}
                </div>
                <div className="text-[11px] text-[#77736A] leading-relaxed">
                  {step.desc}
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-6 pt-4 border-t border-[#D9D4C8] font-mono-tech text-xs text-[#181816] font-semibold">
          The system finds. Your team decides.
        </div>
      </div>
    );
  }

  // Commercial Industrial Lifecycle Diagram
  const stages = [
    { code: '01', title: 'Opportunity', role: 'External' },
    { code: '02', title: 'Enquiry / RFQ', role: 'Intake' },
    { code: '03', title: 'Review', role: 'Preparation' },
    { code: '04', title: 'Quote', role: 'Judgement' },
    { code: '05', title: 'Follow-up', role: 'Tracking' },
    { code: '06', title: 'Order', role: 'Commercial' },
    { code: '07', title: 'Reporting', role: 'Intelligence' },
  ];

  return (
    <div className="catalogue-sheet p-6 sm:p-8 my-8">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-[#D9D4C8] pb-3 mb-6">
        <div className="font-mono-tech text-xs tracking-[0.1em] text-[#B58A2A] uppercase font-semibold">
          [FLOW-IND-01: THE COMMERCIAL ORDER LIFECYCLE]
        </div>
        <div className="font-mono-tech text-xs text-[#77736A]">
          End-to-End Operational Surface
        </div>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-7 gap-2">
        {stages.map((stage, idx) => {
          const isQuote = stage.code === '04';
          return (
            <div
              key={stage.code}
              className={`p-3.5 border ${
                isQuote
                  ? 'border-[#181816] bg-[#F5F1E7]'
                  : 'border-[#D9D4C8] bg-[#FCFBF7]'
              }`}
            >
              <div className="flex items-center justify-between mb-1.5">
                <span className="font-mono-tech text-[11px] text-[#B58A2A] font-semibold">
                  {stage.code}
                </span>
                {idx < stages.length - 1 && (
                  <span className="text-[#AAA397] font-mono-tech text-[10px]">
                    →
                  </span>
                )}
              </div>
              <div className="font-bold text-xs sm:text-sm text-[#181816] leading-tight mb-1 font-body">
                {stage.title}
              </div>
              <div className="font-mono-tech text-[10px] text-[#77736A] uppercase">
                {stage.role}
              </div>
            </div>
          );
        })}
      </div>

      <div className="mt-6 pt-5 border-t border-[#D9D4C8] space-y-1">
        <div className="text-sm sm:text-base font-semibold text-[#181816] font-display">
          The valuable judgement stays with your people.
        </div>
        <div className="text-sm sm:text-base text-[#77736A] font-body">
          The repeated information work does not necessarily have to.
        </div>
      </div>
    </div>
  );
};
