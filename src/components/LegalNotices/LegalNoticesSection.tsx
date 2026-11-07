import React, { useState } from 'react';
import { 
  FileText, 
  ArrowRight, 
  Clock, 
  CheckCircle2, 
  Send, 
  FileCheck, 
  ShieldCheck,
  AlertCircle
} from 'lucide-react';
import { LEGAL_NOTICE_TYPES } from '../../data/legalNotices';
import { LegalNoticeRequestModal } from './LegalNoticeRequestModal';

interface LegalNoticesSectionProps {
  onOpenNoticeModal: (noticeTypeId?: string) => void;
}

export function LegalNoticesSection({ onOpenNoticeModal }: LegalNoticesSectionProps) {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedNoticeId, setSelectedNoticeId] = useState<string | undefined>();

  const handleOpenNotice = (id?: string) => {
    setSelectedNoticeId(id);
    setModalOpen(true);
  };

  return (
    <section id="notices" className="py-20 bg-[#0b192c] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Section Heading */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-14">
          <div>
            <div className="inline-flex items-center gap-1.5 text-xs font-mono uppercase tracking-widest text-amber-400 mb-2 font-semibold">
              <FileText className="w-3.5 h-3.5" />
              <span>Time-Bound Statutory Communication</span>
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white font-serif tracking-tight">
              Legal Notice Assistance
            </h2>
            <p className="text-xs sm:text-sm text-slate-300 mt-2 max-w-2xl leading-relaxed">
              A legally sound notice drafted by an advocate puts your dispute on official record, sets statutory deadlines, and frequently achieves resolution without prolonged court trials.
            </p>
          </div>

          <button
            onClick={() => handleOpenNotice()}
            className="inline-flex items-center gap-2 px-6 py-3.5 text-xs font-bold text-slate-950 bg-gradient-to-r from-amber-400 to-amber-500 hover:from-amber-300 hover:to-amber-400 rounded-lg shadow-lg shadow-amber-500/20 transition-all cursor-pointer whitespace-nowrap self-start md:self-auto"
          >
            <span>REQUEST LEGAL NOTICE ASSISTANCE</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

        {/* 8 Notice Types Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
          {LEGAL_NOTICE_TYPES.map((notice, idx) => (
            <div
              key={notice.id}
              onClick={() => handleOpenNotice(notice.id)}
              className="p-5 rounded-xl border border-slate-800 bg-[#0e213b]/60 hover:bg-[#0e213b] hover:border-amber-500/40 transition-all flex flex-col justify-between group cursor-pointer shadow-xs"
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className="text-[10px] font-mono text-amber-400 font-semibold bg-amber-500/10 border border-amber-500/20 px-2 py-0.5 rounded">
                    0{idx + 1}
                  </span>
                  <div className="flex items-center gap-1 text-[11px] font-mono text-slate-400">
                    <Clock className="w-3 h-3 text-amber-400" />
                    <span>{notice.statutoryDays.split(' ')[0]} {notice.statutoryDays.split(' ')[1] || 'Days'}</span>
                  </div>
                </div>

                <h3 className="text-sm font-bold text-white font-serif group-hover:text-amber-300 transition-colors">
                  {notice.name}
                </h3>

                <p className="text-xs text-slate-300 mt-2 line-clamp-3 leading-relaxed">
                  {notice.recommendedFor}
                </p>

                <div className="mt-4 pt-3 border-t border-slate-800/80 text-[11px] text-slate-400">
                  <span className="text-amber-400/80 font-mono">Basis:</span> {notice.keyLegalBasis}
                </div>
              </div>

              <div className="mt-5 pt-3 border-t border-slate-800/80 flex items-center justify-between">
                <span className="text-[11px] text-slate-400">Advocate Vetted</span>
                <span className="text-xs font-semibold text-amber-400 group-hover:text-amber-300 flex items-center gap-1">
                  <span>Draft Notice</span>
                  <ArrowRight className="w-3 h-3" />
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* 3 Workflow Pathways */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6 pt-10 border-t border-slate-800/80">
          <div className="p-5 rounded-xl border border-slate-800 bg-slate-900/40">
            <h4 className="text-sm font-bold text-white flex items-center gap-2 mb-2">
              <Send className="w-4 h-4 text-amber-400" />
              <span>Send a Legal Notice</span>
            </h4>
            <p className="text-xs text-slate-300 leading-relaxed">
              Formally demand unpaid dues, eviction, compensation, or contractual performance with an official advocate notice sent via Registered A.D. post.
            </p>
          </div>

          <div className="p-5 rounded-xl border border-slate-800 bg-slate-900/40">
            <h4 className="text-sm font-bold text-white flex items-center gap-2 mb-2">
              <FileText className="w-4 h-4 text-amber-400" />
              <span>Reply to a Notice</span>
            </h4>
            <p className="text-xs text-slate-300 leading-relaxed">
              Counter false allegations, protect against prospective criminal or civil liability, and put your defense on the legal record within statutory deadlines.
            </p>
          </div>

          <div className="p-5 rounded-xl border border-slate-800 bg-slate-900/40">
            <h4 className="text-sm font-bold text-white flex items-center gap-2 mb-2">
              <ShieldCheck className="w-4 h-4 text-emerald-400" />
              <span>Notice Scrutiny & Assessment</span>
            </h4>
            <p className="text-xs text-slate-300 leading-relaxed">
              Upload any notice you have received to verify if it is legally valid, enforceable under Indian law, or merely a speculative demand letter.
            </p>
          </div>
        </div>
      </div>

      {/* Notice Request Modal */}
      <LegalNoticeRequestModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        preselectedNoticeType={selectedNoticeId}
        onSubmitted={() => {}}
      />
    </section>
  );
}
