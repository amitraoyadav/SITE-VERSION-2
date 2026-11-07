import React, { useState } from 'react';
import { 
  Lock, 
  X, 
  Check, 
  Search, 
  Filter, 
  FileText, 
  User, 
  ShieldCheck, 
  DollarSign, 
  FolderTree, 
  AlertTriangle, 
  ChevronRight, 
  Download, 
  Layers, 
  Phone, 
  MapPin, 
  Clock, 
  Save 
} from 'lucide-react';
import { LegalEnquiry, PricingConfig, AdvocateRecord } from '../../types/legal';
import { POPULAR_LEGAL_SERVICES } from '../../data/legalServices';

interface AdminDashboardProps {
  isOpen: boolean;
  onClose: () => void;
  enquiries: LegalEnquiry[];
  onUpdateEnquiry: (updated: LegalEnquiry) => void;
  pricingConfig: PricingConfig;
  onUpdatePricing: (pricing: PricingConfig) => void;
  advocates: AdvocateRecord[];
  isAdvocateDirectoryEnabled: boolean;
  onToggleDirectoryEnabled: (enabled: boolean) => void;
}

export function AdminDashboard({
  isOpen,
  onClose,
  enquiries,
  onUpdateEnquiry,
  pricingConfig,
  onUpdatePricing,
  advocates,
  isAdvocateDirectoryEnabled,
  onToggleDirectoryEnabled,
}: AdminDashboardProps) {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [passcode, setPasscode] = useState('');
  const [authError, setAuthError] = useState('');

  // Active Admin Tab
  const [activeTab, setActiveTab] = useState<'enquiries' | 'pricing' | 'advocates' | 'categories'>('enquiries');
  const [selectedEnquiry, setSelectedEnquiry] = useState<LegalEnquiry | null>(null);
  const [statusFilter, setStatusFilter] = useState<string>('all');
  const [newAdminNote, setNewAdminNote] = useState('');

  // Pricing Form State
  const [adminFeeInput, setAdminFeeInput] = useState(pricingConfig.referenceAdminFeePerHour);
  const [noticeFeeInput, setNoticeFeeInput] = useState(pricingConfig.noticeDraftingStartingFee);
  const [agreementFeeInput, setAgreementFeeInput] = useState(pricingConfig.agreementDraftingStartingFee);
  const [isPricingPublished, setIsPricingPublished] = useState(pricingConfig.isPublished);
  const [pricingSavedToast, setPricingSavedToast] = useState(false);

  if (!isOpen) return null;

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (passcode.trim() === 'raozlegal' || passcode.trim() === 'admin' || passcode.trim() === '1234') {
      setIsAuthenticated(true);
      setAuthError('');
    } else {
      setAuthError('Invalid administrator credentials. Try: raozlegal');
    }
  };

  const handleQuickUnlock = () => {
    setIsAuthenticated(true);
    setAuthError('');
  };

  // KPIs
  const totalEnquiries = enquiries.length;
  const newEnquiries = enquiries.filter((e) => e.status === 'new').length;
  const pendingEnquiries = enquiries.filter((e) => e.status === 'reviewing' || e.status === 'assigned').length;
  const completedEnquiries = enquiries.filter((e) => e.status === 'completed').length;
  const noticeRequests = enquiries.filter((e) => e.assistanceType === 'send-notice' || e.assistanceType === 'reply-notice').length;
  const consultationRequests = enquiries.filter((e) => e.assistanceType === 'consult-advocate').length;

  const filteredEnquiries = enquiries.filter((e) => {
    if (statusFilter === 'all') return true;
    return e.status === statusFilter;
  });

  const handleStatusChange = (enquiry: LegalEnquiry, newStatus: any) => {
    const updated: LegalEnquiry = { ...enquiry, status: newStatus };
    onUpdateEnquiry(updated);
    if (selectedEnquiry?.id === enquiry.id) {
      setSelectedEnquiry(updated);
    }
  };

  const handleAssignAdvocate = (enquiry: LegalEnquiry, advocateId: string) => {
    const updated: LegalEnquiry = { ...enquiry, assignedAdvocateId: advocateId, status: 'assigned' };
    onUpdateEnquiry(updated);
    if (selectedEnquiry?.id === enquiry.id) {
      setSelectedEnquiry(updated);
    }
  };

  const handleAddNote = (enquiry: LegalEnquiry) => {
    if (!newAdminNote.trim()) return;
    const existingNotes = enquiry.adminNotes || [];
    const updated: LegalEnquiry = {
      ...enquiry,
      adminNotes: [...existingNotes, `${new Date().toLocaleDateString('en-IN')}: ${newAdminNote.trim()}`],
    };
    onUpdateEnquiry(updated);
    setSelectedEnquiry(updated);
    setNewAdminNote('');
  };

  const handleSavePricing = (e: React.FormEvent) => {
    e.preventDefault();
    const updated: PricingConfig = {
      ...pricingConfig,
      referenceAdminFeePerHour: Number(adminFeeInput),
      noticeDraftingStartingFee: Number(noticeFeeInput),
      agreementDraftingStartingFee: Number(agreementFeeInput),
      isPublished: isPricingPublished,
    };
    onUpdatePricing(updated);
    setPricingSavedToast(true);
    setTimeout(() => setPricingSavedToast(false), 2500);
  };

  const handleExportData = () => {
    const exportBundle = {
      exportDate: new Date().toISOString(),
      platform: 'RAOZ LEGAL',
      kpis: {
        totalEnquiries,
        newEnquiries,
        pendingEnquiries,
        completedEnquiries,
        noticeRequests,
        consultationRequests,
      },
      pricingConfig,
      enquiries,
      advocates,
    };
    const blob = new Blob([JSON.stringify(exportBundle, null, 2)], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `raoz-legal-admin-dump-${new Date().toISOString().split('T')[0]}.json`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/90 backdrop-blur-md">
      <div className="w-full max-w-6xl bg-[#091526] border border-slate-700 rounded-2xl shadow-2xl overflow-hidden max-h-[96vh] flex flex-col">
        {/* Admin Header */}
        <div className="px-6 py-4 border-b border-slate-800 bg-[#060e1a] flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-amber-400">
              <Lock className="w-4 h-4" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="text-base font-bold text-white font-serif">RAOZ LEGAL</span>
                <span className="text-[10px] font-mono text-amber-400 bg-amber-500/10 border border-amber-500/20 px-2 py-0.5 rounded font-semibold">
                  ADMIN CONSOLE
                </span>
              </div>
              <p className="text-[11px] text-slate-400">
                Confidential case intake queue, pricing control & Bar Council regulatory dashboard
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            {isAuthenticated && (
              <button
                onClick={handleExportData}
                className="hidden sm:flex items-center gap-1.5 px-3 py-1.5 text-xs font-mono rounded-lg bg-slate-800 text-slate-300 hover:text-white transition-colors cursor-pointer"
              >
                <Download className="w-3.5 h-3.5" />
                <span>Export JSON</span>
              </button>
            )}
            <button
              onClick={onClose}
              className="p-1.5 text-slate-400 hover:text-white rounded-lg hover:bg-slate-800 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Auth Barrier Screen */}
        {!isAuthenticated ? (
          <div className="p-8 sm:p-14 text-center max-w-md mx-auto space-y-6">
            <div className="w-14 h-14 rounded-2xl bg-amber-500/10 border border-amber-500/30 flex items-center justify-center mx-auto text-amber-400">
              <Lock className="w-7 h-7" />
            </div>
            <div>
              <h3 className="text-lg font-bold text-white font-serif">
                Authorized Personnel Access
              </h3>
              <p className="text-xs text-slate-400 mt-1 leading-relaxed">
                Client legal disclosures and advocate assignments are protected under DPDPA 2023. Enter your administrative passcode to proceed.
              </p>
            </div>

            <form onSubmit={handleLogin} className="space-y-4">
              <input
                type="password"
                placeholder="Enter admin passcode (e.g. raozlegal)"
                value={passcode}
                onChange={(e) => setPasscode(e.target.value)}
                className="w-full bg-slate-950 border border-slate-700 rounded-lg px-3.5 py-2.5 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-amber-400 text-center font-mono"
              />
              {authError && <p className="text-xs text-red-400">{authError}</p>}
              <div className="flex gap-2">
                <button
                  type="submit"
                  className="flex-1 py-2 text-xs font-bold text-slate-950 bg-amber-400 hover:bg-amber-300 rounded-lg transition-colors cursor-pointer"
                >
                  Verify Access
                </button>
                <button
                  type="button"
                  onClick={handleQuickUnlock}
                  className="px-4 py-2 text-xs font-medium text-slate-300 bg-slate-800 hover:bg-slate-700 rounded-lg transition-colors cursor-pointer"
                >
                  Demo Unlock
                </button>
              </div>
            </form>
          </div>
        ) : (
          /* Main Authenticated Admin Workspace */
          <div className="flex-1 flex flex-col overflow-hidden">
            {/* KPI Cards Strip */}
            <div className="p-4 sm:p-6 border-b border-slate-800 bg-[#07111e] grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
              <div className="p-3 rounded-xl bg-slate-900 border border-slate-800">
                <div className="text-[10px] font-mono text-slate-400 uppercase">Total Enquiries</div>
                <div className="text-2xl font-mono font-bold text-white mt-1">{totalEnquiries}</div>
              </div>
              <div className="p-3 rounded-xl bg-slate-900 border border-amber-500/30">
                <div className="text-[10px] font-mono text-amber-400 uppercase">New (Unreviewed)</div>
                <div className="text-2xl font-mono font-bold text-amber-400 mt-1">{newEnquiries}</div>
              </div>
              <div className="p-3 rounded-xl bg-slate-900 border border-slate-800">
                <div className="text-[10px] font-mono text-slate-400 uppercase">Under Review</div>
                <div className="text-2xl font-mono font-bold text-white mt-1">{pendingEnquiries}</div>
              </div>
              <div className="p-3 rounded-xl bg-slate-900 border border-slate-800">
                <div className="text-[10px] font-mono text-slate-400 uppercase">Completed Cases</div>
                <div className="text-2xl font-mono font-bold text-emerald-400 mt-1">{completedEnquiries}</div>
              </div>
              <div className="p-3 rounded-xl bg-slate-900 border border-slate-800">
                <div className="text-[10px] font-mono text-slate-400 uppercase">Notice Requests</div>
                <div className="text-2xl font-mono font-bold text-sky-400 mt-1">{noticeRequests}</div>
              </div>
              <div className="p-3 rounded-xl bg-slate-900 border border-slate-800">
                <div className="text-[10px] font-mono text-slate-400 uppercase">Consultations</div>
                <div className="text-2xl font-mono font-bold text-indigo-400 mt-1">{consultationRequests}</div>
              </div>
            </div>

            {/* Navigation Tabs */}
            <div className="px-6 border-b border-slate-800 flex items-center gap-6 text-xs font-medium bg-[#081525]">
              <button
                onClick={() => setActiveTab('enquiries')}
                className={`py-3 border-b-2 transition-colors cursor-pointer flex items-center gap-1.5 ${
                  activeTab === 'enquiries'
                    ? 'border-amber-400 text-amber-400 font-semibold'
                    : 'border-transparent text-slate-400 hover:text-white'
                }`}
              >
                <FileText className="w-3.5 h-3.5" />
                <span>Enquiry Queue ({enquiries.length})</span>
              </button>
              <button
                onClick={() => setActiveTab('pricing')}
                className={`py-3 border-b-2 transition-colors cursor-pointer flex items-center gap-1.5 ${
                  activeTab === 'pricing'
                    ? 'border-amber-400 text-amber-400 font-semibold'
                    : 'border-transparent text-slate-400 hover:text-white'
                }`}
              >
                <DollarSign className="w-3.5 h-3.5" />
                <span>Manage Pricing</span>
              </button>
              <button
                onClick={() => setActiveTab('advocates')}
                className={`py-3 border-b-2 transition-colors cursor-pointer flex items-center gap-1.5 ${
                  activeTab === 'advocates'
                    ? 'border-amber-400 text-amber-400 font-semibold'
                    : 'border-transparent text-slate-400 hover:text-white'
                }`}
              >
                <ShieldCheck className="w-3.5 h-3.5" />
                <span>Advocates & BCI Compliance</span>
              </button>
              <button
                onClick={() => setActiveTab('categories')}
                className={`py-3 border-b-2 transition-colors cursor-pointer flex items-center gap-1.5 ${
                  activeTab === 'categories'
                    ? 'border-amber-400 text-amber-400 font-semibold'
                    : 'border-transparent text-slate-400 hover:text-white'
                }`}
              >
                <FolderTree className="w-3.5 h-3.5" />
                <span>Legal Categories (15)</span>
              </button>
            </div>

            {/* Tab 1: Enquiries Queue & Management */}
            {activeTab === 'enquiries' && (
              <div className="flex-1 flex flex-col md:flex-row overflow-hidden">
                {/* Enquiries Master List */}
                <div className="w-full md:w-1/2 lg:w-5/12 border-r border-slate-800 flex flex-col overflow-hidden bg-[#071322]">
                  {/* Status Filter */}
                  <div className="p-3 border-b border-slate-800 flex items-center gap-2">
                    <span className="text-[11px] font-mono text-slate-400">Status:</span>
                    {['all', 'new', 'reviewing', 'assigned', 'completed'].map((st) => (
                      <button
                        key={st}
                        onClick={() => setStatusFilter(st)}
                        className={`px-2 py-0.5 rounded text-[10px] font-mono capitalize transition-colors ${
                          statusFilter === st
                            ? 'bg-amber-400 text-slate-950 font-bold'
                            : 'bg-slate-900 text-slate-400 hover:text-white'
                        }`}
                      >
                        {st}
                      </button>
                    ))}
                  </div>

                  {/* List View */}
                  <div className="flex-1 overflow-y-auto divide-y divide-slate-800/80">
                    {filteredEnquiries.map((enq) => (
                      <div
                        key={enq.id}
                        onClick={() => setSelectedEnquiry(enq)}
                        className={`p-4 transition-colors cursor-pointer ${
                          selectedEnquiry?.id === enq.id ? 'bg-[#0f243e]' : 'hover:bg-slate-900/60'
                        }`}
                      >
                        <div className="flex items-center justify-between text-xs mb-1">
                          <span className="font-mono font-bold text-amber-400">{enq.id}</span>
                          <span
                            className={`text-[10px] font-mono px-2 py-0.5 rounded-full capitalize ${
                              enq.status === 'new'
                                ? 'bg-amber-500/20 text-amber-300'
                                : enq.status === 'completed'
                                ? 'bg-emerald-500/20 text-emerald-300'
                                : 'bg-slate-800 text-slate-300'
                            }`}
                          >
                            {enq.status}
                          </span>
                        </div>

                        <div className="font-medium text-white text-xs truncate">{enq.clientName}</div>
                        <div className="text-[11px] text-slate-400 truncate mt-0.5">{enq.category}</div>
                        <p className="text-[11px] text-slate-500 line-clamp-1 mt-1 font-mono">
                          {enq.city}, {enq.state} · {enq.preferredLanguage}
                        </p>
                      </div>
                    ))}

                    {filteredEnquiries.length === 0 && (
                      <div className="p-8 text-center text-xs text-slate-400">
                        No enquiries matching status &quot;{statusFilter}&quot;.
                      </div>
                    )}
                  </div>
                </div>

                {/* Selected Enquiry Detail Panel */}
                <div className="flex-1 p-6 overflow-y-auto space-y-5 bg-[#091526]">
                  {selectedEnquiry ? (
                    <div className="space-y-6">
                      <div className="flex items-start justify-between">
                        <div>
                          <div className="flex items-center gap-2">
                            <h3 className="text-lg font-bold text-white font-serif">
                              {selectedEnquiry.clientName}
                            </h3>
                            <span className="text-xs font-mono text-amber-400 bg-amber-500/10 px-2 py-0.5 rounded border border-amber-500/20">
                              {selectedEnquiry.id}
                            </span>
                          </div>
                          <div className="text-xs text-slate-400 mt-1 flex items-center gap-2">
                            <span>{selectedEnquiry.city}, {selectedEnquiry.state}</span>
                            <span>·</span>
                            <span>{selectedEnquiry.preferredLanguage}</span>
                          </div>
                        </div>

                        {/* Status Updater */}
                        <div className="flex items-center gap-1.5">
                          <span className="text-[11px] font-mono text-slate-400">Change Status:</span>
                          <select
                            value={selectedEnquiry.status}
                            onChange={(e) => handleStatusChange(selectedEnquiry, e.target.value)}
                            className="bg-slate-900 border border-slate-700 rounded-lg px-2.5 py-1 text-xs text-white"
                          >
                            <option value="new">New</option>
                            <option value="reviewing">Under Review</option>
                            <option value="assigned">Assigned to Advocate</option>
                            <option value="completed">Completed</option>
                            <option value="cancelled">Cancelled</option>
                          </select>
                        </div>
                      </div>

                      {/* Contact Info Card */}
                      <div className="p-4 rounded-xl bg-slate-900 border border-slate-800 grid grid-cols-2 sm:grid-cols-3 gap-3 text-xs font-mono">
                        <div>
                          <div className="text-slate-500 text-[10px]">Mobile Contact:</div>
                          <div className="text-white font-semibold mt-0.5">{selectedEnquiry.mobileNumber}</div>
                        </div>
                        <div>
                          <div className="text-slate-500 text-[10px]">Assistance Required:</div>
                          <div className="text-white capitalize mt-0.5">{selectedEnquiry.assistanceType.replace('-', ' ')}</div>
                        </div>
                        <div>
                          <div className="text-slate-500 text-[10px]">Logged Timestamp:</div>
                          <div className="text-white mt-0.5">{new Date(selectedEnquiry.createdAt).toLocaleDateString('en-IN')}</div>
                        </div>
                      </div>

                      {/* Factual Problem Statement */}
                      <div>
                        <h4 className="text-xs font-semibold text-white uppercase font-mono tracking-wider mb-1.5">
                          Problem Description:
                        </h4>
                        <div className="p-4 rounded-xl bg-slate-950 border border-slate-800 text-xs text-slate-200 leading-relaxed font-mono whitespace-pre-wrap">
                          {selectedEnquiry.problemDescription}
                        </div>
                      </div>

                      {/* Uploaded Documents */}
                      {selectedEnquiry.uploadedDocuments && selectedEnquiry.uploadedDocuments.length > 0 && (
                        <div>
                          <h4 className="text-xs font-semibold text-white uppercase font-mono tracking-wider mb-1.5">
                            Uploaded Client Documents:
                          </h4>
                          <div className="flex flex-wrap gap-2">
                            {selectedEnquiry.uploadedDocuments.map((doc, idx) => (
                              <div
                                key={idx}
                                className="px-3 py-1.5 rounded-lg bg-slate-900 border border-slate-800 text-xs text-slate-300 font-mono flex items-center gap-1.5"
                              >
                                <FileText className="w-3.5 h-3.5 text-amber-400" />
                                <span>{doc}</span>
                              </div>
                            ))}
                          </div>
                        </div>
                      )}

                      {/* Assign to Advocate */}
                      <div className="p-4 rounded-xl bg-slate-900/60 border border-slate-800 space-y-3">
                        <div className="text-xs font-semibold text-white font-mono uppercase tracking-wider">
                          Assign Matter to Enrolled Advocate
                        </div>
                        <div className="flex flex-col sm:flex-row gap-2">
                          <select
                            value={selectedEnquiry.assignedAdvocateId || ''}
                            onChange={(e) => handleAssignAdvocate(selectedEnquiry, e.target.value)}
                            className="flex-1 bg-slate-950 border border-slate-700 rounded-lg px-3 py-2 text-xs text-white"
                          >
                            <option value="">Select Enrolled Advocate...</option>
                            {advocates.map((a) => (
                              <option key={a.id} value={a.id}>
                                Adv. {a.fullName} ({a.city} · {a.enrolmentNumber})
                              </option>
                            ))}
                          </select>
                          <span className="text-[11px] text-slate-400 self-center">
                            {selectedEnquiry.assignedAdvocateId ? '✓ Assigned' : 'Unassigned'}
                          </span>
                        </div>
                      </div>

                      {/* Administrative Notes */}
                      <div>
                        <h4 className="text-xs font-semibold text-white uppercase font-mono tracking-wider mb-2">
                          Internal Case Coordinator Notes:
                        </h4>
                        {selectedEnquiry.adminNotes && selectedEnquiry.adminNotes.length > 0 ? (
                          <div className="space-y-1.5 mb-3">
                            {selectedEnquiry.adminNotes.map((note, idx) => (
                              <div
                                key={idx}
                                className="p-2.5 rounded-lg bg-slate-950 border border-slate-800 text-xs text-slate-300 font-mono"
                              >
                                {note}
                              </div>
                            ))}
                          </div>
                        ) : (
                          <p className="text-xs text-slate-500 italic mb-3">No coordinator notes added yet.</p>
                        )}

                        <div className="flex gap-2">
                          <input
                            type="text"
                            placeholder="Add case update or notes..."
                            value={newAdminNote}
                            onChange={(e) => setNewAdminNote(e.target.value)}
                            className="flex-1 bg-slate-950 border border-slate-700 rounded-lg px-3 py-1.5 text-xs text-white placeholder-slate-500"
                          />
                          <button
                            onClick={() => handleAddNote(selectedEnquiry)}
                            className="px-4 py-1.5 text-xs font-semibold bg-amber-400 text-slate-950 rounded-lg hover:bg-amber-300 cursor-pointer"
                          >
                            Add Note
                          </button>
                        </div>
                      </div>
                    </div>
                  ) : (
                    <div className="py-20 text-center text-xs text-slate-400">
                      Select an enquiry from the left queue to view details and assign counsel.
                    </div>
                  )}
                </div>
              </div>
            )}

            {/* Tab 2: Manage Pricing Configuration */}
            {activeTab === 'pricing' && (
              <div className="p-6 overflow-y-auto space-y-6 max-w-2xl">
                <div>
                  <h3 className="text-base font-bold text-white font-serif">
                    Platform Pricing & Rate Card Configuration
                  </h3>
                  <p className="text-xs text-slate-400 mt-1">
                    Control administrative coordination fee, drafting benchmark rates, and publication status.
                  </p>
                </div>

                {pricingSavedToast && (
                  <div className="p-3 rounded-lg bg-emerald-950/60 border border-emerald-800 text-emerald-300 text-xs flex items-center gap-2">
                    <Check className="w-4 h-4" />
                    <span>Pricing configuration updated and persisted.</span>
                  </div>
                )}

                <form onSubmit={handleSavePricing} className="space-y-4">
                  {/* Publish Pricing Toggle */}
                  <div className="p-4 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-between">
                    <div>
                      <div className="text-xs font-semibold text-white">Publish Benchmark Rates Publicly</div>
                      <div className="text-[11px] text-slate-400">
                        When disabled, the public interface states &quot;Custom Case Quotation&quot; pending case assessment.
                      </div>
                    </div>
                    <button
                      type="button"
                      onClick={() => setIsPricingPublished(!isPricingPublished)}
                      className={`px-3 py-1.5 rounded-lg text-xs font-mono font-bold transition-colors ${
                        isPricingPublished
                          ? 'bg-emerald-500/20 text-emerald-400 border border-emerald-500/40'
                          : 'bg-slate-800 text-slate-400 border border-slate-700'
                      }`}
                    >
                      {isPricingPublished ? 'PUBLISHED' : 'UNPUBLISHED (DEFAULT)'}
                    </button>
                  </div>

                  {/* Proposed Reference Admin Fee */}
                  <div>
                    <label className="block text-xs font-medium text-slate-300 mb-1">
                      Proposed Platform Administrative Fee per Hour (₹)
                    </label>
                    <input
                      type="number"
                      value={adminFeeInput}
                      onChange={(e) => setAdminFeeInput(Number(e.target.value))}
                      className="w-full bg-slate-950 border border-slate-700 rounded-lg px-3 py-2 text-xs text-white font-mono"
                    />
                    <p className="text-[11px] text-slate-500 mt-1">
                      Proposed reference price: ₹50/hr for platform coordination and appointment scheduling.
                    </p>
                  </div>

                  {/* Notice Drafting Benchmark */}
                  <div>
                    <label className="block text-xs font-medium text-slate-300 mb-1">
                      Notice Drafting Starting Benchmark (₹)
                    </label>
                    <input
                      type="number"
                      value={noticeFeeInput}
                      onChange={(e) => setNoticeFeeInput(Number(e.target.value))}
                      className="w-full bg-slate-950 border border-slate-700 rounded-lg px-3 py-2 text-xs text-white font-mono"
                    />
                  </div>

                  {/* Agreement Benchmark */}
                  <div>
                    <label className="block text-xs font-medium text-slate-300 mb-1">
                      Contract & Agreement Vetting Benchmark (₹)
                    </label>
                    <input
                      type="number"
                      value={agreementFeeInput}
                      onChange={(e) => setAgreementFeeInput(Number(e.target.value))}
                      className="w-full bg-slate-950 border border-slate-700 rounded-lg px-3 py-2 text-xs text-white font-mono"
                    />
                  </div>

                  <div className="pt-2">
                    <button
                      type="submit"
                      className="px-5 py-2 text-xs font-bold text-slate-950 bg-amber-400 hover:bg-amber-300 rounded-lg transition-colors cursor-pointer flex items-center gap-2"
                    >
                      <Save className="w-3.5 h-3.5" />
                      <span>Save Pricing Settings</span>
                    </button>
                  </div>
                </form>
              </div>
            )}

            {/* Tab 3: Advocates & BCI Compliance */}
            {activeTab === 'advocates' && (
              <div className="p-6 overflow-y-auto space-y-6">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                  <div>
                    <h3 className="text-base font-bold text-white font-serif">
                      Advocate Registry & Bar Council Compliance
                    </h3>
                    <p className="text-xs text-slate-400 mt-1">
                      Manage verified advocate credentials and toggle the public directory compliance mode.
                    </p>
                  </div>

                  <div className="flex items-center gap-2">
                    <span className="text-xs font-mono text-slate-400">Public Directory Module:</span>
                    <button
                      onClick={() => onToggleDirectoryEnabled(!isAdvocateDirectoryEnabled)}
                      className={`px-3 py-1.5 rounded-lg text-xs font-mono font-bold transition-colors ${
                        isAdvocateDirectoryEnabled
                          ? 'bg-emerald-500/20 text-emerald-400 border border-emerald-500/40'
                          : 'bg-amber-500/20 text-amber-300 border border-amber-500/40'
                      }`}
                    >
                      {isAdvocateDirectoryEnabled ? 'ENABLED (LIVE SEARCH)' : 'RESTRICTED (COMPLIANCE)'}
                    </button>
                  </div>
                </div>

                {/* Advocates List */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {advocates.map((adv) => (
                    <div
                      key={adv.id}
                      className="p-4 rounded-xl bg-slate-900 border border-slate-800 text-xs space-y-2"
                    >
                      <div className="flex justify-between items-start">
                        <div>
                          <div className="font-bold text-white text-sm">Adv. {adv.fullName}</div>
                          <div className="text-amber-400 font-mono text-[11px]">{adv.enrolmentNumber}</div>
                        </div>
                        <span className="text-[10px] text-emerald-400 bg-emerald-950 px-2 py-0.5 rounded border border-emerald-800">
                          BCI Consent Verified
                        </span>
                      </div>
                      <div className="text-slate-400 text-[11px]">
                        {adv.stateBarCouncil} · {adv.city}, {adv.state}
                      </div>
                      <div className="text-slate-300 text-[11px]">
                        Practice: {adv.practiceAreas.join(', ')}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Tab 4: Legal Categories */}
            {activeTab === 'categories' && (
              <div className="p-6 overflow-y-auto space-y-6">
                <div>
                  <h3 className="text-base font-bold text-white font-serif">
                    Legal Practice Categories (15 Active)
                  </h3>
                  <p className="text-xs text-slate-400 mt-1">
                    Configured legal taxonomy mapped to Indian statutes.
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                  {POPULAR_LEGAL_SERVICES.map((s, idx) => (
                    <div
                      key={s.id}
                      className="p-3.5 rounded-xl bg-slate-900 border border-slate-800 text-xs"
                    >
                      <div className="font-semibold text-white mb-1">
                        {idx + 1}. {s.title}
                      </div>
                      <p className="text-[11px] text-slate-400 line-clamp-2">{s.shortDesc}</p>
                      <div className="text-[10px] font-mono text-amber-400 mt-2">
                        {s.turnaroundTime}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
