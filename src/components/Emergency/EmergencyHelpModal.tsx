import React from 'react';
import { 
  X, 
  ShieldAlert, 
  PhoneCall, 
  AlertTriangle, 
  Scale, 
  Lock, 
  HeartHandshake, 
  Terminal, 
  FileText, 
  CheckCircle2,
  ExternalLink
} from 'lucide-react';

interface EmergencyHelpModalProps {
  isOpen: boolean;
  onClose: () => void;
  onOpenEnquiry: (category: string) => void;
}

export function EmergencyHelpModal({
  isOpen,
  onClose,
  onOpenEnquiry,
}: EmergencyHelpModalProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-xs">
      <div className="w-full max-w-2xl bg-[#101e33] border border-red-500/40 rounded-xl shadow-2xl overflow-hidden max-h-[92vh] flex flex-col">
        {/* Urgent Header */}
        <div className="px-6 py-4 border-b border-slate-800 bg-[#0d1728] flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-lg bg-red-500/20 border border-red-500/40 flex items-center justify-center text-red-400">
              <ShieldAlert className="w-5 h-5" />
            </div>
            <div>
              <h2 className="text-base font-bold text-white font-serif flex items-center gap-2">
                <span>Emergency & Urgent Legal Guidance</span>
                <span className="text-[10px] uppercase font-mono tracking-wider bg-red-500/20 text-red-300 px-2 py-0.5 rounded font-semibold">
                  URGENT TRIAGE
                </span>
              </h2>
              <p className="text-xs text-slate-400">
                Statutory legal protections and emergency hotlines in India
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 text-slate-400 hover:text-white rounded-lg hover:bg-slate-800"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 overflow-y-auto space-y-6 text-sm">
          {/* Critical Emergency Service Disclaimer */}
          <div className="p-4 rounded-xl bg-red-950/40 border border-red-800/80 text-xs text-red-200 leading-relaxed flex items-start gap-3">
            <AlertTriangle className="w-5 h-5 text-red-400 shrink-0 mt-0.5" />
            <div>
              <strong className="text-white block mb-1">
                IMPORTANT: Raoz Legal Is NOT an Emergency Response Service
              </strong>
              If you or someone else is in immediate physical danger, facing an ongoing violent assault, or requires urgent medical/police intervention, please immediately call Indian National Emergency Services by dialing <strong>112</strong> or the local police station.
            </div>
          </div>

          {/* Official Indian Emergency Helplines Grid */}
          <div>
            <h4 className="text-xs font-mono uppercase tracking-wider text-slate-400 font-semibold mb-3">
              Official Indian Emergency & Statutory Helplines
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
              <div className="p-3 rounded-lg bg-slate-900 border border-slate-800 flex items-center justify-between">
                <div>
                  <div className="font-semibold text-white">National Emergency / Police</div>
                  <div className="text-[11px] text-slate-400">All-India Emergency Number</div>
                </div>
                <a
                  href="tel:112"
                  className="px-3 py-1.5 rounded bg-red-500/20 text-red-300 font-mono font-bold hover:bg-red-500/30 transition-colors"
                >
                  112
                </a>
              </div>

              <div className="p-3 rounded-lg bg-slate-900 border border-slate-800 flex items-center justify-between">
                <div>
                  <div className="font-semibold text-white">National Cyber Crime Helpline</div>
                  <div className="text-[11px] text-slate-400">Golden Hour Financial Fraud</div>
                </div>
                <a
                  href="tel:1930"
                  className="px-3 py-1.5 rounded bg-amber-500/20 text-amber-300 font-mono font-bold hover:bg-amber-500/30 transition-colors"
                >
                  1930
                </a>
              </div>

              <div className="p-3 rounded-lg bg-slate-900 border border-slate-800 flex items-center justify-between">
                <div>
                  <div className="font-semibold text-white">Women in Distress (NCW)</div>
                  <div className="text-[11px] text-slate-400">Domestic Violence & Safety</div>
                </div>
                <a
                  href="tel:1091"
                  className="px-3 py-1.5 rounded bg-slate-800 text-slate-200 font-mono font-bold hover:bg-slate-700 transition-colors"
                >
                  1091 / 181
                </a>
              </div>

              <div className="p-3 rounded-lg bg-slate-900 border border-slate-800 flex items-center justify-between">
                <div>
                  <div className="font-semibold text-white">National Legal Services (NALSA)</div>
                  <div className="text-[11px] text-slate-400">Free Legal Aid for Eligible Citizens</div>
                </div>
                <a
                  href="tel:15100"
                  className="px-3 py-1.5 rounded bg-slate-800 text-slate-200 font-mono font-bold hover:bg-slate-700 transition-colors"
                >
                  15100
                </a>
              </div>
            </div>
          </div>

          {/* Constitutional Rights Upon Arrest (Article 22 & BNSS/CrPC) */}
          <div className="p-4 rounded-xl bg-slate-900/60 border border-slate-800 space-y-3">
            <div className="flex items-center gap-2 text-white font-semibold text-xs font-mono uppercase tracking-wider">
              <Scale className="w-4 h-4 text-amber-400" />
              <span>Know Your Fundamental Rights if Detained or Summoned by Police</span>
            </div>
            <ul className="space-y-2 text-xs text-slate-300">
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-amber-400 shrink-0 mt-0.5" />
                <span>
                  <strong>Right to Know Grounds of Arrest:</strong> Under Article 22(1) of the Constitution and Section 50 CrPC (Sec 47 BNSS), police must immediately inform you of the exact grounds and offences alleged.
                </span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-amber-400 shrink-0 mt-0.5" />
                <span>
                  <strong>Right to an Advocate:</strong> You have the absolute right to consult and be defended by a legal practitioner of your choice during interrogation.
                </span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-amber-400 shrink-0 mt-0.5" />
                <span>
                  <strong>Memo of Arrest & Relative Intimation:</strong> Under D.K. Basu guidelines, police must prepare a formal Arrest Memo and inform a designated friend or family member within 8 to 12 hours.
                </span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-amber-400 shrink-0 mt-0.5" />
                <span>
                  <strong>24-Hour Magistrate Production:</strong> Police cannot detain any person for more than 24 hours without producing them before the nearest Judicial Magistrate.
                </span>
              </li>
            </ul>
          </div>

          {/* Action Trigger */}
          <div className="p-4 rounded-xl bg-slate-900 border border-slate-800 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div>
              <div className="font-semibold text-white text-xs">Need Urgent Criminal or FIR Defense?</div>
              <div className="text-[11px] text-slate-400">
                Log an urgent enquiry for anticipatory bail or High Court intervention.
              </div>
            </div>
            <button
              onClick={() => {
                onClose();
                onOpenEnquiry('Criminal Law');
              }}
              className="px-4 py-2 text-xs font-bold rounded-lg bg-red-500 hover:bg-red-400 text-white transition-colors cursor-pointer whitespace-nowrap"
            >
              Request Urgent Defense
            </button>
          </div>
        </div>

        {/* Footer */}
        <div className="px-6 py-4 border-t border-slate-800 bg-[#0d1728] flex justify-end">
          <button
            onClick={onClose}
            className="px-4 py-2 text-xs text-slate-300 hover:text-white"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
}
