import React, { useState } from 'react';
import { 
  X, 
  FileText, 
  Send, 
  Upload, 
  Check, 
  AlertTriangle, 
  ShieldCheck, 
  FileCheck2 
} from 'lucide-react';
import { LEGAL_NOTICE_TYPES } from '../../data/legalNotices';
import { INDIAN_STATES_AND_CITIES } from '../../data/statesCities';

interface LegalNoticeRequestModalProps {
  isOpen: boolean;
  onClose: () => void;
  preselectedNoticeType?: string;
  onSubmitted: (noticeRecord: any) => void;
}

export function LegalNoticeRequestModal({
  isOpen,
  onClose,
  preselectedNoticeType,
  onSubmitted,
}: LegalNoticeRequestModalProps) {
  const [requestMode, setRequestMode] = useState<'send' | 'reply' | 'check'>('send');
  const [noticeType, setNoticeType] = useState(preselectedNoticeType || LEGAL_NOTICE_TYPES[0].id);
  const [senderName, setSenderName] = useState('');
  const [senderContact, setSenderContact] = useState('');
  const [senderCity, setSenderCity] = useState(INDIAN_STATES_AND_CITIES[0].cities[0]);
  const [recipientName, setRecipientName] = useState('');
  const [recipientAddress, setRecipientAddress] = useState('');
  const [disputeSummary, setDisputeSummary] = useState('');
  const [claimAmount, setClaimAmount] = useState('');
  const [uploadedFiles, setUploadedFiles] = useState<string[]>([]);
  const [hasConsent, setHasConsent] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [referenceId, setReferenceId] = useState('');

  if (!isOpen) return null;

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      const names = Array.from(e.target.files).map((f) => f.name);
      setUploadedFiles((prev) => [...prev, ...names]);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!senderName || !senderContact || !disputeSummary || !hasConsent) {
      alert('Please fill all mandatory fields and accept the consent agreement.');
      return;
    }

    const ref = `NOT-${Date.now().toString().slice(-6)}`;
    setReferenceId(ref);

    const record = {
      id: ref,
      requestMode,
      noticeType,
      senderName,
      senderContact,
      senderCity,
      recipientName,
      recipientAddress,
      disputeSummary,
      claimAmount,
      uploadedFiles,
      status: 'under-review',
      createdAt: new Date().toISOString(),
    };

    onSubmitted(record);
    setIsSuccess(true);
  };

  const handleResetAndClose = () => {
    setIsSuccess(false);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-xs">
      <div className="w-full max-w-2xl bg-[#0c1c30] border border-slate-700 rounded-xl shadow-2xl overflow-hidden max-h-[92vh] flex flex-col">
        {/* Header */}
        <div className="px-6 py-4 border-b border-slate-800 bg-[#081525] flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-lg bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-amber-400">
              <FileText className="w-4 h-4" />
            </div>
            <div>
              <h2 className="text-base font-bold text-white font-serif">
                Legal Notice Drafting & Reply System
              </h2>
              <p className="text-xs text-slate-400">
                All notices are vetted by an enrolled advocate before issuance
              </p>
            </div>
          </div>
          <button
            onClick={handleResetAndClose}
            className="p-1.5 text-slate-400 hover:text-white rounded-lg hover:bg-slate-800"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Content */}
        <div className="p-6 overflow-y-auto space-y-5 text-sm">
          {isSuccess ? (
            <div className="py-6 text-center space-y-4">
              <div className="w-14 h-14 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 flex items-center justify-center mx-auto">
                <Check className="w-7 h-7" />
              </div>
              <h3 className="text-xl font-bold text-white font-serif">
                Notice Request Submitted Successfully
              </h3>
              <p className="text-xs text-slate-300 max-w-md mx-auto leading-relaxed">
                Your request has been logged under Reference ID:{' '}
                <strong className="font-mono text-amber-400">{referenceId}</strong>. A legal coordinator will review your background facts and connect you with a drafting advocate.
              </p>

              <div className="p-4 rounded-lg bg-slate-900/60 border border-slate-800 text-left text-xs space-y-2 max-w-md mx-auto">
                <div className="flex justify-between text-slate-400">
                  <span>Workflow Type:</span>
                  <span className="text-white font-medium capitalize">{requestMode} a Notice</span>
                </div>
                <div className="flex justify-between text-slate-400">
                  <span>Selected Category:</span>
                  <span className="text-white font-medium truncate max-w-[200px]">
                    {LEGAL_NOTICE_TYPES.find((n) => n.id === noticeType)?.name || noticeType}
                  </span>
                </div>
                <div className="flex justify-between text-slate-400">
                  <span>Mandatory Vetting:</span>
                  <span className="text-emerald-400 font-medium">Pending Advocate Review</span>
                </div>
              </div>

              <div className="pt-4 flex justify-center">
                <button
                  onClick={handleResetAndClose}
                  className="px-6 py-2.5 text-xs font-bold text-slate-950 bg-amber-400 hover:bg-amber-300 rounded-lg transition-colors cursor-pointer"
                >
                  Done
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              {/* Select Mode */}
              <div>
                <label className="block text-xs font-semibold text-slate-300 mb-1.5 uppercase font-mono tracking-wider">
                  Select Notice Action
                </label>
                <div className="grid grid-cols-3 gap-2">
                  <button
                    type="button"
                    onClick={() => setRequestMode('send')}
                    className={`py-2 px-3 rounded-lg border text-xs font-medium transition-colors cursor-pointer ${
                      requestMode === 'send'
                        ? 'bg-amber-500/10 border-amber-500 text-amber-300 font-semibold'
                        : 'bg-slate-900/60 border-slate-800 text-slate-400 hover:text-white'
                    }`}
                  >
                    Send Legal Notice
                  </button>
                  <button
                    type="button"
                    onClick={() => setRequestMode('reply')}
                    className={`py-2 px-3 rounded-lg border text-xs font-medium transition-colors cursor-pointer ${
                      requestMode === 'reply'
                        ? 'bg-amber-500/10 border-amber-500 text-amber-300 font-semibold'
                        : 'bg-slate-900/60 border-slate-800 text-slate-400 hover:text-white'
                    }`}
                  >
                    Reply to Notice
                  </button>
                  <button
                    type="button"
                    onClick={() => setRequestMode('check')}
                    className={`py-2 px-3 rounded-lg border text-xs font-medium transition-colors cursor-pointer ${
                      requestMode === 'check'
                        ? 'bg-amber-500/10 border-amber-500 text-amber-300 font-semibold'
                        : 'bg-slate-900/60 border-slate-800 text-slate-400 hover:text-white'
                    }`}
                  >
                    Check & Assess Notice
                  </button>
                </div>
              </div>

              {/* Notice Type */}
              <div>
                <label className="block text-xs font-medium text-slate-300 mb-1.5">
                  Notice Category <span className="text-red-400">*</span>
                </label>
                <select
                  value={noticeType}
                  onChange={(e) => setNoticeType(e.target.value)}
                  className="w-full bg-slate-900 border border-slate-700 rounded-lg px-3 py-2 text-xs text-white focus:outline-none focus:border-amber-400"
                >
                  {LEGAL_NOTICE_TYPES.map((nt) => (
                    <option key={nt.id} value={nt.id} className="bg-slate-900">
                      {nt.name} ({nt.statutoryDays})
                    </option>
                  ))}
                </select>
              </div>

              {/* Sender & Recipient Information */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-medium text-slate-300 mb-1">
                    Your Name (Sender / Client) <span className="text-red-400">*</span>
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Full legal name"
                    value={senderName}
                    onChange={(e) => setSenderName(e.target.value)}
                    className="w-full bg-slate-900 border border-slate-700 rounded-lg px-3 py-2 text-xs text-white focus:outline-none focus:border-amber-400"
                  />
                </div>
                <div>
                  <label className="block text-xs font-medium text-slate-300 mb-1">
                    Your Contact Mobile <span className="text-red-400">*</span>
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="10-digit mobile number"
                    value={senderContact}
                    onChange={(e) => setSenderContact(e.target.value)}
                    className="w-full bg-slate-900 border border-slate-700 rounded-lg px-3 py-2 text-xs text-white focus:outline-none focus:border-amber-400"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-medium text-slate-300 mb-1">
                    Recipient Name / Company <span className="text-red-400">*</span>
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Individual or organization name"
                    value={recipientName}
                    onChange={(e) => setRecipientName(e.target.value)}
                    className="w-full bg-slate-900 border border-slate-700 rounded-lg px-3 py-2 text-xs text-white focus:outline-none focus:border-amber-400"
                  />
                </div>
                <div>
                  <label className="block text-xs font-medium text-slate-300 mb-1">
                    Claim / Disputed Amount <span className="text-slate-400">(If applicable)</span>
                  </label>
                  <input
                    type="text"
                    placeholder="e.g., ₹2,50,000 + interest"
                    value={claimAmount}
                    onChange={(e) => setClaimAmount(e.target.value)}
                    className="w-full bg-slate-900 border border-slate-700 rounded-lg px-3 py-2 text-xs text-white focus:outline-none focus:border-amber-400"
                  />
                </div>
              </div>

              {/* Factual Summary */}
              <div>
                <label className="block text-xs font-medium text-slate-300 mb-1">
                  Background Facts & Demands <span className="text-red-400">*</span>
                </label>
                <textarea
                  required
                  rows={3}
                  placeholder="Explain chronological facts: dates, agreements, default, cheque number, or allegations you wish to address or refute..."
                  value={disputeSummary}
                  onChange={(e) => setDisputeSummary(e.target.value)}
                  className="w-full bg-slate-900 border border-slate-700 rounded-lg p-3 text-xs text-white focus:outline-none focus:border-amber-400 resize-none font-mono"
                />
              </div>

              {/* Document Attachment */}
              <div>
                <label className="block text-xs font-medium text-slate-300 mb-1">
                  Upload Invoices, Agreements, or Received Notice{' '}
                  <span className="text-slate-500">(Optional)</span>
                </label>
                <label className="border border-dashed border-slate-700 hover:border-amber-400/60 rounded-lg p-3 flex items-center justify-center gap-2 cursor-pointer bg-slate-900/40 transition-colors">
                  <Upload className="w-4 h-4 text-slate-400" />
                  <span className="text-xs text-slate-300">Choose PDF / Images</span>
                  <input
                    type="file"
                    multiple
                    accept=".pdf,image/*,.doc,.docx"
                    onChange={handleFileUpload}
                    className="hidden"
                  />
                </label>
                {uploadedFiles.length > 0 && (
                  <div className="mt-2 flex flex-wrap gap-1.5">
                    {uploadedFiles.map((f, i) => (
                      <span
                        key={i}
                        className="text-[11px] font-mono text-slate-300 bg-slate-800 px-2 py-0.5 rounded border border-slate-700 flex items-center gap-1"
                      >
                        <FileCheck2 className="w-3 h-3 text-emerald-400" />
                        {f}
                      </span>
                    ))}
                  </div>
                )}
              </div>

              {/* Mandatory Bar Council Disclosure */}
              <div className="p-3 rounded-lg bg-amber-500/10 border border-amber-500/30 text-[11px] text-amber-200 leading-relaxed flex items-start gap-2">
                <AlertTriangle className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                <span>
                  <strong>Advocate Vetting Assurance:</strong> Raoz Legal does not automatically dispatch automated legal notices. Every notice is independently prepared, verified, and issued on the formal letterhead of an enrolled advocate after client verification.
                </span>
              </div>

              {/* Consent Checkbox */}
              <label className="flex items-start gap-2 text-xs text-slate-300 cursor-pointer pt-1">
                <input
                  type="checkbox"
                  required
                  checked={hasConsent}
                  onChange={(e) => setHasConsent(e.target.checked)}
                  className="mt-0.5 rounded border-slate-700 text-amber-500 focus:ring-0"
                />
                <span>
                  I authorize Raoz Legal to coordinate with an enrolled advocate for drafting/replying to this legal notice and consent to data processing under the Digital Personal Data Protection Act 2023.
                </span>
              </label>

              {/* Buttons */}
              <div className="pt-3 border-t border-slate-800 flex justify-end gap-3">
                <button
                  type="button"
                  onClick={onClose}
                  className="px-4 py-2 text-xs text-slate-400 hover:text-white"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-5 py-2.5 text-xs font-bold text-slate-950 bg-amber-400 hover:bg-amber-300 rounded-lg shadow-sm transition-colors cursor-pointer"
                >
                  Submit Notice Request
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
