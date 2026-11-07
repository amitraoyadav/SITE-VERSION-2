import React from 'react';
import { 
  X, 
  ArrowRight, 
  Clock, 
  BookOpen, 
  CheckCircle2, 
  AlertCircle, 
  ShieldCheck 
} from 'lucide-react';
import { LegalServiceItem } from '../../types/legal';

interface ServiceDetailModalProps {
  service: LegalServiceItem | null;
  onClose: () => void;
  onEnquireNow: (serviceTitle: string) => void;
}

export function ServiceDetailModal({
  service,
  onClose,
  onEnquireNow,
}: ServiceDetailModalProps) {
  if (!service) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-xs">
      <div className="w-full max-w-2xl bg-[#0e2038] border border-slate-700 rounded-xl shadow-2xl overflow-hidden max-h-[90vh] flex flex-col">
        {/* Header */}
        <div className="px-6 py-4 border-b border-slate-800 flex items-center justify-between bg-[#0a182b]">
          <div>
            <div className="text-[11px] font-mono text-amber-400 font-medium uppercase tracking-wider">
              Legal Practice Area
            </div>
            <h2 className="text-xl font-bold text-white font-serif">{service.title}</h2>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 text-slate-400 hover:text-white rounded-lg hover:bg-slate-800 transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 overflow-y-auto space-y-6 text-sm">
          {/* Overview */}
          <div className="p-4 rounded-lg bg-slate-900/60 border border-slate-800 text-slate-300 leading-relaxed text-xs sm:text-sm">
            {service.overview}
          </div>

          {/* Common Issues Handled */}
          <div>
            <h4 className="text-xs font-semibold text-white uppercase tracking-wider mb-3 flex items-center gap-1.5 font-mono">
              <CheckCircle2 className="w-3.5 h-3.5 text-amber-400" />
              <span>Common Issues Handled in this Category</span>
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              {service.popularIssues.map((issue, idx) => (
                <div
                  key={idx}
                  className="p-2.5 rounded-lg bg-slate-900/40 border border-slate-800/80 text-xs text-slate-200 flex items-start gap-2"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-amber-400 shrink-0 mt-1.5"></span>
                  <span>{issue}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Applicable Indian Laws */}
          <div>
            <h4 className="text-xs font-semibold text-white uppercase tracking-wider mb-2 flex items-center gap-1.5 font-mono">
              <BookOpen className="w-3.5 h-3.5 text-amber-400" />
              <span>Governing Indian Laws & Statutes</span>
            </h4>
            <ul className="space-y-1.5 text-xs text-slate-300">
              {service.applicableLaws.map((law, idx) => (
                <li key={idx} className="flex items-center gap-2">
                  <span className="text-amber-400/80">§</span>
                  <span className="font-mono text-[11px] text-slate-200">{law}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Response Time & Compliance */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 p-3.5 rounded-lg bg-[#071322] border border-slate-800 text-xs text-slate-400">
            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4 text-amber-400" />
              <span>Expected response: <strong className="text-white">{service.turnaroundTime}</strong></span>
            </div>
            <div className="flex items-center gap-1.5 text-slate-400">
              <ShieldCheck className="w-4 h-4 text-emerald-400" />
              <span>Strict Lawyer-Client Privilege</span>
            </div>
          </div>
        </div>

        {/* Action Footer */}
        <div className="px-6 py-4 border-t border-slate-800 bg-[#0a182b] flex items-center justify-between">
          <button
            onClick={onClose}
            className="px-4 py-2 text-xs font-medium text-slate-400 hover:text-white rounded-lg transition-colors cursor-pointer"
          >
            Close
          </button>
          <button
            onClick={() => {
              onClose();
              onEnquireNow(service.title);
            }}
            className="inline-flex items-center gap-2 px-5 py-2.5 text-xs font-bold text-slate-950 bg-amber-400 hover:bg-amber-300 rounded-lg shadow-sm transition-all cursor-pointer"
          >
            <span>Request Legal Assistance for {service.title}</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </div>
  );
}
