import React from 'react';
import { X, BookOpen, Clock, AlertTriangle, ArrowRight } from 'lucide-react';
import { EducationalGuide } from '../../types/legal';

interface EducationalArticleModalProps {
  guide: EducationalGuide | null;
  onClose: () => void;
  onOpenEnquiry: (category: string) => void;
}

export function EducationalArticleModal({
  guide,
  onClose,
  onOpenEnquiry,
}: EducationalArticleModalProps) {
  if (!guide) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-xs">
      <div className="w-full max-w-3xl bg-[#0c1c30] border border-slate-700 rounded-xl shadow-2xl overflow-hidden max-h-[92vh] flex flex-col">
        {/* Header */}
        <div className="px-6 py-4 border-b border-slate-800 bg-[#081525] flex items-center justify-between">
          <div className="flex items-center gap-3">
            <span className="text-[11px] font-mono text-amber-400 bg-amber-500/10 border border-amber-500/30 px-2 py-0.5 rounded font-semibold">
              {guide.category}
            </span>
            <span className="text-xs text-slate-400 flex items-center gap-1 font-mono">
              <Clock className="w-3 h-3" />
              {guide.readingTime}
            </span>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 text-slate-400 hover:text-white rounded-lg hover:bg-slate-800"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Article Body */}
        <div className="p-6 overflow-y-auto space-y-6 text-sm">
          <div>
            <h2 className="text-xl sm:text-2xl font-bold text-white font-serif leading-snug">
              {guide.title}
            </h2>
            <p className="text-xs sm:text-sm text-slate-300 mt-3 leading-relaxed border-l-2 border-amber-400 pl-3">
              {guide.summary}
            </p>
          </div>

          {/* Key Takeaways Box */}
          <div className="p-4 rounded-xl bg-slate-900 border border-slate-800 space-y-2">
            <h4 className="text-xs font-mono font-semibold uppercase tracking-wider text-amber-400">
              Essential Statutory Key Takeaways
            </h4>
            <ul className="space-y-1.5 text-xs text-slate-200">
              {guide.keyTakeaways.map((point, idx) => (
                <li key={idx} className="flex items-start gap-2">
                  <span className="text-amber-400 font-bold">✓</span>
                  <span>{point}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Article Prose Paragraphs */}
          <div className="space-y-4 text-xs sm:text-sm text-slate-300 leading-relaxed font-sans">
            {guide.contentParagraphs.map((para, idx) => (
              <p key={idx}>{para}</p>
            ))}
          </div>

          {/* Relevant Statutory Provisions */}
          <div className="p-3.5 rounded-lg bg-[#071322] border border-slate-800 text-xs">
            <span className="font-mono text-amber-400 font-semibold block mb-1">
              Relevant Indian Statutes & Precedents Cited:
            </span>
            <div className="flex flex-wrap gap-2 text-[11px] font-mono text-slate-300">
              {guide.legalProvisions.map((prov, i) => (
                <span key={i} className="px-2 py-0.5 rounded bg-slate-800 border border-slate-700">
                  {prov}
                </span>
              ))}
            </div>
          </div>

          {/* Educational Disclaimer */}
          <div className="p-3 rounded-lg bg-amber-500/10 border border-amber-500/20 text-[11px] text-amber-200/90 leading-relaxed flex items-start gap-2">
            <AlertTriangle className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
            <span>
              <strong>Educational Disclaimer:</strong> This guide provides general informational knowledge regarding Indian statutory provisions and does not constitute formal legal counsel. For specific case advice, please consult an enrolled advocate.
            </span>
          </div>
        </div>

        {/* Footer */}
        <div className="px-6 py-4 border-t border-slate-800 bg-[#081525] flex items-center justify-between">
          <button
            onClick={onClose}
            className="px-4 py-2 text-xs text-slate-400 hover:text-white"
          >
            Close
          </button>
          <button
            onClick={() => {
              onClose();
              onOpenEnquiry(guide.category);
            }}
            className="inline-flex items-center gap-1.5 px-4 py-2 text-xs font-bold text-slate-950 bg-amber-400 hover:bg-amber-300 rounded-lg transition-colors cursor-pointer"
          >
            <span>Consult an Advocate on this Issue</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </div>
  );
}
