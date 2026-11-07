import React, { useState } from 'react';
import { X, Scale, ShieldCheck, AlertTriangle, FileText, Lock } from 'lucide-react';

interface ComplianceModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialTab?: 'disclaimer' | 'terms' | 'privacy' | 'bci';
}

export function ComplianceModal({
  isOpen,
  onClose,
  initialTab = 'disclaimer',
}: ComplianceModalProps) {
  const [activeTab, setActiveTab] = useState<'disclaimer' | 'terms' | 'privacy' | 'bci'>(initialTab);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-xs">
      <div className="w-full max-w-3xl bg-[#0c1c30] border border-slate-700 rounded-xl shadow-2xl overflow-hidden max-h-[92vh] flex flex-col">
        {/* Header */}
        <div className="px-6 py-4 border-b border-slate-800 bg-[#081525] flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-lg bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-amber-400">
              <Scale className="w-4 h-4" />
            </div>
            <div>
              <h2 className="text-base font-bold text-white font-serif">
                Legal Compliance & Regulatory Notices
              </h2>
              <p className="text-xs text-slate-400">
                Operating strictly within the legal framework of India & Bar Council rules
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

        {/* Tab Strip */}
        <div className="px-6 border-b border-slate-800 flex items-center gap-4 text-xs font-medium bg-[#071322] overflow-x-auto">
          {[
            { id: 'disclaimer', label: 'Legal Disclaimer' },
            { id: 'bci', label: 'Bar Council of India Rule 36' },
            { id: 'terms', label: 'Terms of Use' },
            { id: 'privacy', label: 'Privacy Policy (DPDPA 2023)' },
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id as any)}
              className={`py-3 border-b-2 whitespace-nowrap transition-colors cursor-pointer ${
                activeTab === tab.id
                  ? 'border-amber-400 text-amber-400 font-semibold'
                  : 'border-transparent text-slate-400 hover:text-white'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Content Area */}
        <div className="p-6 overflow-y-auto space-y-4 text-xs sm:text-sm text-slate-300 leading-relaxed">
          {activeTab === 'disclaimer' && (
            <div className="space-y-4">
              <h3 className="text-base font-bold text-white font-serif">
                Platform Legal Disclaimer & Non-Solicitation
              </h3>
              <div className="p-4 rounded-xl bg-amber-500/10 border border-amber-500/30 text-amber-200 text-xs leading-relaxed space-y-2">
                <p>
                  <strong>1. No Government or Bar Council Affiliation:</strong> Raoz Legal (raozlegal.in) is an independent technological platform operated by Raoz Site. It is neither a government department, a court of law, nor an official arm of the Bar Council of India or any State Bar Council.
                </p>
                <p>
                  <strong>2. Educational Purpose:</strong> The information, articles, guides, and statutory summaries published on this website are intended solely for general legal literacy and informational orientation for the public. Nothing on this website constitutes, or is intended to constitute, formal legal advice.
                </p>
                <p>
                  <strong>3. No Guarantee of Outcomes:</strong> In accordance with Indian legal ethics, no advocate or platform can guarantee the success or specific outcome of any court petition, bail plea, criminal defense, notice demand, or civil trial.
                </p>
                <p>
                  <strong>4. Lawyer-Client Relationship:</strong> Browsing this website or submitting an initial general enquiry does not inherently establish an advocate-client relationship. Such a professional relationship commences only when an enrolled advocate is formally engaged and a Vakalatnama or formal engagement agreement is executed.
                </p>
              </div>
            </div>
          )}

          {activeTab === 'bci' && (
            <div className="space-y-4">
              <h3 className="text-base font-bold text-white font-serif">
                Compliance with Bar Council of India Rule 36
              </h3>
              <p className="text-xs text-slate-400">
                Rule 36, Section IV, Chapter II, Part VI of the Bar Council of India Rules framed under the Advocates Act, 1961 explicitly prohibits enrolled advocates from soliciting work or advertising their practice through circulars, advertisements, touts, personal communications, or interviews.
              </p>
              <div className="p-4 rounded-xl bg-slate-900 border border-slate-800 text-xs space-y-2">
                <div className="font-semibold text-white">How Raoz Legal Upholds BCI Compliance:</div>
                <ul className="space-y-1.5 list-disc pl-4 text-slate-300">
                  <li>Zero promotional rankings, paid search priority, or "best lawyer" superlative claims.</li>
                  <li>No subjective customer rating stars or fabricated public testimonial badges.</li>
                  <li>All listed advocates are verified directly against State Bar Council enrolment registers.</li>
                  <li>Advocate profiles are only published after explicit written consent for public informational access under Rule 36 proviso.</li>
                </ul>
              </div>
            </div>
          )}

          {activeTab === 'terms' && (
            <div className="space-y-4">
              <h3 className="text-base font-bold text-white font-serif">Terms of Service</h3>
              <p className="text-xs text-slate-300">
                By accessing or submitting an enquiry through Raoz Legal, you agree to the following conditions:
              </p>
              <ul className="space-y-2 text-xs list-disc pl-4 text-slate-300">
                <li>You confirm that you are seeking legal information and assistance of your own volition and that no unsolicited solicitation was made to you.</li>
                <li>You acknowledge that platform administrative coordination fees are distinct from professional legal fees charged by advocates.</li>
                <li>You agree not to upload abusive, defamatory, or unlawful materials.</li>
                <li>Limitation of Liability: Under no circumstances shall Raoz Legal or its operators be liable for indirect, punitive, or consequential damages resulting from user reliance on general educational content.</li>
              </ul>
            </div>
          )}

          {activeTab === 'privacy' && (
            <div className="space-y-4">
              <h3 className="text-base font-bold text-white font-serif">
                Data Protection & Privacy Policy (DPDPA 2023)
              </h3>
              <p className="text-xs text-slate-300">
                We take client confidentiality with utmost gravity in accordance with the Digital Personal Data Protection Act, 2023:
              </p>
              <div className="p-4 rounded-xl bg-slate-900 border border-slate-800 text-xs space-y-2">
                <p>
                  <strong>Data Minimization:</strong> We only collect information strictly necessary to process your legal enquiry and route your request to an advocate in your jurisdiction.
                </p>
                <p>
                  <strong>Confidentiality:</strong> Your factual narrative, uploaded documents, and contact details are encrypted and never sold, leased, or broadcast on public directories.
                </p>
                <p>
                  <strong>Right to Erasure:</strong> Clients may request the complete deletion of their enquiry record upon case closure by contacting our grievance officer at privacy@raozlegal.in.
                </p>
              </div>
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="px-6 py-4 border-t border-slate-800 bg-[#081525] flex justify-end">
          <button
            onClick={onClose}
            className="px-5 py-2 text-xs font-semibold rounded-lg bg-amber-400 text-slate-950 hover:bg-amber-300 transition-colors"
          >
            I Understand & Acknowledge
          </button>
        </div>
      </div>
    </div>
  );
}
