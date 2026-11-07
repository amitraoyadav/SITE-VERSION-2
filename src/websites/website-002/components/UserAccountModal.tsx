import React, { useState } from 'react';
import { 
  X, 
  User, 
  FileText, 
  Building2, 
  Scale, 
  CheckCircle2, 
  Clock, 
  Download, 
  PenTool, 
  ExternalLink, 
  LogOut, 
  Shield 
} from 'lucide-react';

interface UserAccountModalProps {
  isOpen: boolean;
  onClose: () => void;
  onOpenDocumentBuilder: (templateId?: string) => void;
  onOpenSignModal: (title: string) => void;
  onOpenPricing: () => void;
}

export function UserAccountModal({
  isOpen,
  onClose,
  onOpenDocumentBuilder,
  onOpenSignModal,
  onOpenPricing,
}: UserAccountModalProps) {
  const [activeTab, setActiveTab] = useState<'docs' | 'business' | 'advocates' | 'membership'>('docs');
  const [isLoggedIn, setIsLoggedIn] = useState(true);

  if (!isOpen) return null;

  const mockDocuments = [
    {
      id: 'doc-01',
      title: 'Mutual Non-Disclosure Agreement',
      type: 'mutual-nda',
      parties: 'Apex Technologies Pvt Ltd & Rahul Verma',
      updatedAt: 'Today, 11:30 AM',
      status: 'Signed via AdvocateSign®',
      isSigned: true,
    },
    {
      id: 'doc-02',
      title: 'Residential Tenancy Agreement',
      type: 'residential-rental-agreement',
      parties: 'Flat 402, Oakwood Greens, Bengaluru',
      updatedAt: 'Yesterday',
      status: 'Ready to Sign',
      isSigned: false,
    },
    {
      id: 'doc-03',
      title: 'Consultancy & Service Agreement',
      type: 'consultancy-services-agreement',
      parties: 'Design Sprint Studio & Client Corp',
      updatedAt: '3 days ago',
      status: 'Draft in Progress',
      isSigned: false,
    },
  ];

  const mockBusinesses = [
    {
      id: 'biz-01',
      name: 'Apex Horizon Technologies Pvt Ltd',
      type: 'Private Limited Company (Pvt Ltd)',
      stage: 'RUN Name Approved (ROC Bengaluru)',
      status: 'MCA SPICe+ Filing in Progress',
      submittedOn: '04 Nov 2026',
      progress: 65,
    },
  ];

  const mockConsultations = [
    {
      id: 'adv-01',
      topic: 'Commercial Lease Clause Review',
      advocate: 'Adv. Ananya Deshmukh (14 yrs exp)',
      date: '02 Nov 2026',
      status: 'Completed (Summary Emailed)',
    },
  ];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs overflow-y-auto">
      <div className="bg-white rounded-2xl max-w-3xl w-full border border-[#E8E8E3] shadow-2xl overflow-hidden my-8">
        {/* Top Header */}
        <div className="bg-[#1D1C1A] text-white px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-[#990000] flex items-center justify-center font-bold text-white text-sm">
              RS
            </div>
            <div>
              <div className="text-sm font-bold flex items-center gap-2">
                <span>Rahul Sharma</span>
                <span className="text-[10px] font-mono bg-emerald-900/60 text-emerald-300 border border-emerald-500/30 px-2 py-0.5 rounded-full font-semibold">
                  7-Day Trial Active
                </span>
              </div>
              <div className="text-xs text-neutral-400 font-sans">
                rahul.sharma@apextech.in · User ID: YA-9941
              </div>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-1 rounded-lg text-neutral-400 hover:text-white hover:bg-white/10 transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Tab Navigation */}
        <div className="border-b border-[#E8E8E3] bg-[#FAF9F5] px-6 flex items-center gap-6 text-xs font-bold text-neutral-600">
          <button
            onClick={() => setActiveTab('docs')}
            className={`py-3.5 border-b-2 cursor-pointer transition-colors flex items-center gap-1.5 ${
              activeTab === 'docs'
                ? 'border-[#990000] text-[#990000]'
                : 'border-transparent hover:text-neutral-900'
            }`}
          >
            <FileText className="w-4 h-4" />
            <span>My Documents ({mockDocuments.length})</span>
          </button>

          <button
            onClick={() => setActiveTab('business')}
            className={`py-3.5 border-b-2 cursor-pointer transition-colors flex items-center gap-1.5 ${
              activeTab === 'business'
                ? 'border-[#990000] text-[#990000]'
                : 'border-transparent hover:text-neutral-900'
            }`}
          >
            <Building2 className="w-4 h-4" />
            <span>Business Incorporations ({mockBusinesses.length})</span>
          </button>

          <button
            onClick={() => setActiveTab('advocates')}
            className={`py-3.5 border-b-2 cursor-pointer transition-colors flex items-center gap-1.5 ${
              activeTab === 'advocates'
                ? 'border-[#990000] text-[#990000]'
                : 'border-transparent hover:text-neutral-900'
            }`}
          >
            <Scale className="w-4 h-4" />
            <span>Advocate Consultations ({mockConsultations.length})</span>
          </button>

          <button
            onClick={() => setActiveTab('membership')}
            className={`py-3.5 border-b-2 cursor-pointer transition-colors flex items-center gap-1.5 ${
              activeTab === 'membership'
                ? 'border-[#990000] text-[#990000]'
                : 'border-transparent hover:text-neutral-900'
            }`}
          >
            <Shield className="w-4 h-4" />
            <span>Membership & Plan</span>
          </button>
        </div>

        {/* Tab Content */}
        <div className="p-6 max-h-[60vh] overflow-y-auto">
          {/* 1. Documents Tab */}
          {activeTab === 'docs' && (
            <div className="space-y-4">
              <div className="flex items-center justify-between mb-2">
                <span className="text-xs text-neutral-500">
                  Manage your customized contracts, NDAs, and tenancy documents.
                </span>
                <button
                  onClick={() => {
                    onClose();
                    onOpenDocumentBuilder();
                  }}
                  className="px-3 py-1.5 text-xs font-bold text-white bg-[#990000] hover:bg-[#7D0000] rounded-lg transition-colors cursor-pointer"
                >
                  + New Document
                </button>
              </div>

              <div className="space-y-3">
                {mockDocuments.map((doc) => (
                  <div
                    key={doc.id}
                    className="p-4 rounded-xl border border-[#E8E8E3] bg-[#FAF9F5] hover:bg-white hover:shadow-xs transition-all flex flex-col sm:flex-row sm:items-center justify-between gap-3"
                  >
                    <div>
                      <div className="text-xs font-bold text-[#1D1C1A]">{doc.title}</div>
                      <div className="text-[11px] text-neutral-500">{doc.parties}</div>
                      <div className="text-[10px] text-neutral-400 mt-1">
                        Updated {doc.updatedAt} · <span className={doc.isSigned ? 'text-emerald-600 font-semibold' : 'text-amber-700 font-semibold'}>{doc.status}</span>
                      </div>
                    </div>

                    <div className="flex items-center gap-2">
                      <button
                        onClick={() => {
                          onClose();
                          onOpenDocumentBuilder(doc.type);
                        }}
                        className="px-3 py-1.5 rounded-lg border border-neutral-300 bg-white text-xs font-semibold text-neutral-700 hover:text-neutral-900 cursor-pointer"
                      >
                        Edit
                      </button>

                      {!doc.isSigned ? (
                        <button
                          onClick={() => {
                            onClose();
                            onOpenSignModal(doc.title);
                          }}
                          className="px-3 py-1.5 rounded-lg bg-[#1D1C1A] hover:bg-[#990000] text-white text-xs font-bold transition-colors cursor-pointer flex items-center gap-1"
                        >
                          <PenTool className="w-3 h-3" />
                          <span>AdvocateSign®</span>
                        </button>
                      ) : (
                        <span className="text-[11px] font-mono text-emerald-700 bg-emerald-50 border border-emerald-200 px-2 py-1 rounded font-bold">
                          ✓ IT Act Certified
                        </span>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* 2. Business Formation Tab */}
          {activeTab === 'business' && (
            <div className="space-y-4">
              <div className="text-xs text-neutral-500 mb-2">
                Live MCA SPICe+ dossier tracking and ROC registration milestones.
              </div>

              {mockBusinesses.map((biz) => (
                <div
                  key={biz.id}
                  className="p-5 rounded-xl border border-[#E8E8E3] bg-[#FAF9F5] space-y-4"
                >
                  <div className="flex items-start justify-between">
                    <div>
                      <div className="text-sm font-bold text-[#1D1C1A]">{biz.name}</div>
                      <div className="text-xs text-neutral-500">{biz.type}</div>
                    </div>
                    <span className="text-[11px] font-mono text-emerald-800 bg-emerald-100 px-2 py-0.5 rounded font-semibold">
                      {biz.stage}
                    </span>
                  </div>

                  <div>
                    <div className="flex justify-between text-xs mb-1">
                      <span className="text-neutral-600">Filing Progress:</span>
                      <span className="font-bold text-[#1D1C1A]">{biz.progress}%</span>
                    </div>
                    <div className="w-full h-2 bg-neutral-200 rounded-full overflow-hidden">
                      <div
                        className="h-full bg-[#990000] rounded-full"
                        style={{ width: `${biz.progress}%` }}
                      ></div>
                    </div>
                  </div>

                  <div className="grid grid-cols-3 gap-2 text-[11px] text-neutral-600 pt-2 border-t border-[#E8E8E3]">
                    <div>
                      <span className="text-neutral-400">Step 1:</span> DSC & DIN Issued ✓
                    </div>
                    <div>
                      <span className="text-neutral-400">Step 2:</span> Name Approved ✓
                    </div>
                    <div>
                      <span className="text-neutral-400">Step 3:</span> ROC Dossier in Review ⏳
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* 3. Advocates Tab */}
          {activeTab === 'advocates' && (
            <div className="space-y-4">
              <div className="text-xs text-neutral-500 mb-2">
                Records of previous legal queries and advice from our advocate network.
              </div>

              {mockConsultations.map((adv) => (
                <div
                  key={adv.id}
                  className="p-4 rounded-xl border border-[#E8E8E3] bg-[#FAF9F5] flex items-center justify-between"
                >
                  <div>
                    <div className="text-xs font-bold text-[#1D1C1A]">{adv.topic}</div>
                    <div className="text-[11px] text-neutral-600">{adv.advocate}</div>
                    <div className="text-[10px] text-neutral-400 mt-1">Conducted on {adv.date}</div>
                  </div>
                  <span className="text-[10px] font-mono text-emerald-700 bg-emerald-50 border border-emerald-200 px-2 py-1 rounded font-bold">
                    {adv.status}
                  </span>
                </div>
              ))}
            </div>
          )}

          {/* 4. Membership Tab */}
          {activeTab === 'membership' && (
            <div className="p-5 rounded-xl border border-[#E8E8E3] bg-[#FAF9F5] space-y-4">
              <div className="flex items-center justify-between border-b border-[#E8E8E3] pb-4">
                <div>
                  <div className="text-sm font-bold text-[#1D1C1A]">Current Plan: 7-Day Free Trial</div>
                  <div className="text-xs text-neutral-500">Active until 13 Nov 2026 · Unlimited document downloads included</div>
                </div>
                <button
                  onClick={() => {
                    onClose();
                    onOpenPricing();
                  }}
                  className="px-4 py-2 text-xs font-bold text-white bg-[#990000] hover:bg-[#7D0000] rounded-lg transition-colors cursor-pointer"
                >
                  Upgrade to Premium
                </button>
              </div>

              <div className="space-y-2 text-xs text-neutral-700">
                <div className="font-semibold text-neutral-900">Your Benefits in India:</div>
                <div className="flex items-center gap-2">✓ 1 Free Legal Document generation</div>
                <div className="flex items-center gap-2">✓ AdvocateSign® digital execution</div>
                <div className="flex items-center gap-2">✓ Encrypted cloud storage</div>
              </div>
            </div>
          )}
        </div>

        {/* Modal Footer */}
        <div className="bg-[#FAF9F5] border-t border-[#E8E8E3] px-6 py-3 flex items-center justify-between text-xs text-neutral-500">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
            <span>Secured Session · 256-Bit SSL</span>
          </div>
          <button
            onClick={onClose}
            className="text-xs font-semibold text-neutral-700 hover:text-neutral-900 cursor-pointer"
          >
            Close Dashboard
          </button>
        </div>
      </div>
    </div>
  );
}
