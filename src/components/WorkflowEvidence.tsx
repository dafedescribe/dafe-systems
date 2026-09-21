import React from 'react';
import { ArrowRight, CheckCircle2, Workflow } from 'lucide-react';
import type { Project } from '../data/projectsData';

interface WorkflowEvidenceProps {
  project: Project;
  compact?: boolean;
}

export const WorkflowEvidence: React.FC<WorkflowEvidenceProps> = ({ project, compact = false }) => (
  <div className={compact ? 'grid grid-cols-1 sm:grid-cols-2 gap-3' : 'space-y-4'}>
    <div className="rounded-lg border border-slate-200 bg-slate-50/70 p-4">
      <div className="mb-1 flex items-center gap-2 text-[11px] font-mono-tech uppercase tracking-wider text-slate-500"><span className="flex h-5 w-5 items-center justify-center rounded-full bg-slate-200 text-[10px] font-bold text-slate-700">1</span>Input</div>
      <p className="text-sm font-medium leading-relaxed text-slate-900">{project.workflow.input}</p>
    </div>
    <div className="rounded-lg border border-amber-200 bg-amber-50/50 p-4">
      <div className="mb-2 flex items-center gap-2 text-[11px] font-mono-tech uppercase tracking-wider font-semibold text-amber-800"><span className="flex h-5 w-5 items-center justify-center rounded-full bg-amber-200 text-[10px] font-bold text-amber-900">2</span>Process</div>
      <ul className="space-y-1.5 text-sm leading-relaxed text-slate-700">{project.workflow.processing.map((step, index) => <li key={index} className="flex items-start gap-2"><ArrowRight className="mt-1 h-3.5 w-3.5 flex-shrink-0 text-amber-700" /><span>{step}</span></li>)}</ul>
    </div>
    <div className="rounded-lg border border-emerald-200 bg-emerald-50/50 p-4">
      <div className="mb-1 flex items-center gap-2 text-[11px] font-mono-tech uppercase tracking-wider font-semibold text-emerald-800"><span className="flex h-5 w-5 items-center justify-center rounded-full bg-emerald-200 text-[10px] font-bold text-emerald-900">3</span>Output</div>
      <p className="text-sm font-medium leading-relaxed text-slate-900">{project.workflow.output}</p>
    </div>
    <div className="rounded-lg border border-slate-300 bg-white p-4">
      <div className="mb-1 flex items-center gap-2 text-[11px] font-mono-tech uppercase tracking-wider font-semibold text-slate-700"><CheckCircle2 className="h-4 w-4 text-emerald-700" />Result</div>
      <p className="text-sm font-medium leading-relaxed text-slate-900">{project.result}</p>
    </div>
  </div>
);

export const WorkflowEvidenceHeading: React.FC = () => (
  <div className="flex items-center justify-between border-b border-slate-100 pb-3">
    <div className="flex items-center gap-2"><Workflow className="h-4 w-4 text-amber-600" /><span className="text-xs font-mono-tech uppercase tracking-wider font-semibold text-slate-900">Workflow Evidence</span></div>
    <span className="text-xs font-mono-tech text-slate-500">Input → Process → Output → Result</span>
  </div>
);
