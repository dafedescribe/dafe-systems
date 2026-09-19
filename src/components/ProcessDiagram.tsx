import React from 'react';

interface ProcessDiagramProps {
  type?: 'commercial' | 'rfq' | 'tender' | 'quotation';
}

export const ProcessDiagram: React.FC<ProcessDiagramProps> = ({ type = 'commercial' }) => {
  if (type === 'rfq') {
    return (
      <div className="border border-[#ded9cf] bg-[#ffffff] p-6 sm:p-8 my-8">
        <div className="font-mono-tech text-xs uppercase tracking-wider text-[#96742c] mb-6">
          [PROCESS ARCHITECTURE: RFQ INTAKE & PREPARATION]
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 relative">
          {/* Phase 1: Incoming */}
          <div className="border border-[#ded9cf] bg-[#faf8f5] p-5">
            <div className="font-mono-tech text-xs text-[#7a7770] uppercase mb-2">
              Phase 01 · Incoming Sources
            </div>
            <div className="text-base font-semibold text-[#141416] mb-3">
              Unstructured Inputs
            </div>
            <ul className="space-y-1.5 text-xs text-[#575653] font-mono-tech">
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-[#96742c]" /> Customer Email Bodies
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-[#96742c]" /> Multi-page PDF Drawings & Specs
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-[#96742c]" /> Custom Format Spreadsheets
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-[#96742c]" /> Scanned Paper Purchase Enquiries
              </li>
            </ul>
          </div>

          {/* Phase 2: System Prepares */}
          <div className="border border-[#141416] bg-[#f4f1eb] p-5 relative">
            <div className="absolute -top-2.5 right-4 bg-[#141416] text-[#faf8f5] px-2 py-0.5 font-mono-tech text-[10px] uppercase tracking-wider">
              Automated Preparation
            </div>
            <div className="font-mono-tech text-xs text-[#96742c] uppercase mb-2">
              Phase 02 · System Prepares
            </div>
            <div className="text-base font-semibold text-[#141416] mb-3">
              Normalized RFQ Dossier
            </div>
            <ul className="space-y-1.5 text-xs text-[#4a4946] font-mono-tech">
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-[#141416]" /> Verified Customer Identity & CRM Match
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-[#141416]" /> Exact Part Numbers & SKUs
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-[#141416]" /> Line-item Quantities & Units
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-[#141416]" /> Extracted Tolerances & Material Specs
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-[#141416]" /> Delivery Deadlines & Terms
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-[#96742c]" /> Highlighted Missing Information
              </li>
            </ul>
          </div>

          {/* Phase 3: Human Decides */}
          <div className="border border-[#ded9cf] bg-[#faf8f5] p-5">
            <div className="font-mono-tech text-xs text-[#7a7770] uppercase mb-2">
              Phase 03 · Commercial Engineer
            </div>
            <div className="text-base font-semibold text-[#141416] mb-3">
              Human Judgement
            </div>
            <ul className="space-y-1.5 text-xs text-[#575653] font-mono-tech">
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-[#575653]" /> Technical Feasibility Review
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-[#575653]" /> Live Material Cost & Margin Sizing
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-[#575653]" /> Shop Capacity & Availability
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-[#575653]" /> Commercial Terms & Exceptions
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-[#141416]" /> Final Approved Binding Quotation
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-6 pt-4 border-t border-[#ded9cf] flex flex-col sm:flex-row sm:items-center justify-between gap-2 text-xs text-[#575653]">
          <span className="font-mono-tech text-[#141416]">
            PRINCIPLE: Automate preparation, never unmonitored commercial commitment.
          </span>
          <span className="font-mono-tech text-[#7a7770]">
            Latency: &lt; 3 minutes per document batch
          </span>
        </div>
      </div>
    );
  }

  if (type === 'tender') {
    const steps = [
      { num: '01', name: 'Monitor', desc: 'Continuous polling of target portals, trade gazettes & buyer sites.' },
      { num: '02', name: 'Detect', desc: 'Identify net-new notices against historical hash database.' },
      { num: '03', name: 'Extract', desc: 'Isolate scope summary, submission deadlines & mandatory bonds.' },
      { num: '04', name: 'Filter', desc: 'Score against company capabilities, geography & negative keywords.' },
      { num: '05', name: 'Alert', desc: 'Unified morning digest and push notification to commercial desk.' },
      { num: '06', name: 'Human Review', desc: 'Experienced estimators review qualified documents and decide.' },
    ];

    return (
      <div className="border border-[#ded9cf] bg-[#ffffff] p-6 sm:p-8 my-8">
        <div className="font-mono-tech text-xs uppercase tracking-wider text-[#96742c] mb-6">
          [PROCESS ARCHITECTURE: TENDER DISCOVERY & QUALIFICATION PIPELINE]
        </div>

        <div className="grid grid-cols-2 md:grid-cols-6 gap-3">
          {steps.map((step) => {
            const isLast = step.num === '06';
            return (
              <div
                key={step.num}
                className={`p-4 border ${
                  isLast
                    ? 'border-[#141416] bg-[#f4f1eb]'
                    : 'border-[#ded9cf] bg-[#faf8f5]'
                }`}
              >
                <div className="font-mono-tech text-xs text-[#96742c] font-semibold mb-1">
                  [{step.num}]
                </div>
                <div className="font-semibold text-sm text-[#141416] mb-1">
                  {step.name}
                </div>
                <div className="text-[11px] text-[#575653] leading-relaxed">
                  {step.desc}
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-6 pt-4 border-t border-[#ded9cf] text-xs font-mono-tech text-[#141416]">
          The system finds. Your team decides.
        </div>
      </div>
    );
  }

  // Default: Commercial industrial workflow horizontal progression
  const commercialStages = [
    { code: '01', title: 'Opportunity', role: 'External' },
    { code: '02', title: 'Enquiry / RFQ', role: 'Intake' },
    { code: '03', title: 'Review', role: 'Preparation' },
    { code: '04', title: 'Quote', role: 'Judgement' },
    { code: '05', title: 'Follow-up', role: 'Tracking' },
    { code: '06', title: 'Order', role: 'Commercial' },
    { code: '07', title: 'Reporting', role: 'Intelligence' },
  ];

  return (
    <div className="border border-[#ded9cf] bg-[#ffffff] p-6 sm:p-8 my-8">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-6">
        <div className="font-mono-tech text-xs uppercase tracking-wider text-[#96742c]">
          [FLOW-IND-01: THE COMMERCIAL ORDER LIFECYCLE]
        </div>
        <div className="font-mono-tech text-xs text-[#7a7770]">
          End-to-End Operational Surface
        </div>
      </div>

      {/* Horizontal Flow */}
      <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-7 gap-2">
        {commercialStages.map((stage, idx) => {
          const isCoreDecision = stage.code === '04';
          return (
            <div
              key={stage.code}
              className={`p-3.5 border relative ${
                isCoreDecision
                  ? 'border-[#141416] bg-[#f4f1eb]'
                  : 'border-[#ded9cf] bg-[#faf8f5]'
              }`}
            >
              <div className="flex items-center justify-between mb-1.5">
                <span className="font-mono-tech text-[11px] text-[#96742c] font-medium">
                  {stage.code}
                </span>
                {idx < commercialStages.length - 1 && (
                  <span className="text-[#b8b3a7] font-mono-tech text-[10px]">
                    →
                  </span>
                )}
              </div>
              <div className="font-semibold text-xs sm:text-sm text-[#141416] leading-tight mb-1">
                {stage.title}
              </div>
              <div className="font-mono-tech text-[10px] text-[#7a7770] uppercase">
                {stage.role}
              </div>
            </div>
          );
        })}
      </div>

      {/* Key Principle Banner */}
      <div className="mt-6 pt-5 border-t border-[#ded9cf] space-y-1">
        <div className="text-sm sm:text-base font-medium text-[#141416]">
          The valuable judgement stays with your people.
        </div>
        <div className="text-sm sm:text-base text-[#575653]">
          The repeated information work does not necessarily have to.
        </div>
      </div>
    </div>
  );
};
