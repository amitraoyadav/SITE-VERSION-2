import React, { useState } from 'react';
import { 
  X, 
  ArrowRight, 
  ArrowLeft, 
  Check, 
  Upload, 
  ShieldCheck, 
  FileCheck2, 
  Lock, 
  AlertCircle, 
  Download, 
  Copy, 
  Scale 
} from 'lucide-react';
import { POPULAR_LEGAL_SERVICES } from '../../data/legalServices';
import { INDIAN_STATES_AND_CITIES, POPULAR_LANGUAGES } from '../../data/statesCities';
import { AssistanceType, LegalEnquiry } from '../../types/legal';
import { generateEnquiryReferenceId } from '../../data/enquiriesStore';

interface EnquiryFormModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialCategory?: string;
  onSaveEnquiry: (enquiry: LegalEnquiry) => void;
}

export function EnquiryFormModal({
  isOpen,
  onClose,
  initialCategory,
  onSaveEnquiry,
}: EnquiryFormModalProps) {
  const [currentStep, setCurrentStep] = useState(1);

  // Form State
  const [category, setCategory] = useState(initialCategory || POPULAR_LEGAL_SERVICES[0].title);
  const [problemDescription, setProblemDescription] = useState('');
  const [clientName, setClientName] = useState('');
  const [mobileNumber, setMobileNumber] = useState('');
  const [email, setEmail] = useState('');
  const [state, setState] = useState(INDIAN_STATES_AND_CITIES[0].state);
  const [city, setCity] = useState(INDIAN_STATES_AND_CITIES[0].cities[0]);
  const [preferredLanguage, setPreferredLanguage] = useState(POPULAR_LANGUAGES[0]);
  const [assistanceType, setAssistanceType] = useState<AssistanceType>('consult-advocate');
  const [urgencyLevel, setUrgencyLevel] = useState<'standard' | 'urgent'>('standard');
  const [uploadedDocuments, setUploadedDocuments] = useState<string[]>([]);
  const [hasConsent, setHasConsent] = useState(false);

  // Confirmation state
  const [submittedEnquiry, setSubmittedEnquiry] = useState<LegalEnquiry | null>(null);
  const [copiedRef, setCopiedRef] = useState(false);

  if (!isOpen) return null;

  const currentCities =
    INDIAN_STATES_AND_CITIES.find((s) => s.state === state)?.cities || [];

  const handleStateChange = (newState: string) => {
    setState(newState);
    const newCities =
      INDIAN_STATES_AND_CITIES.find((s) => s.state === newState)?.cities || [];
    if (newCities.length > 0) setCity(newCities[0]);
  };

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      const names = Array.from(e.target.files).map((f) => f.name);
      setUploadedDocuments((prev) => [...prev, ...names]);
    }
  };

  const validateStep = (stepNumber: number): boolean => {
    switch (stepNumber) {
      case 1:
        return Boolean(category);
      case 2:
        if (problemDescription.trim().length < 10) {
          alert('Please describe your legal issue in at least 10 characters.');
          return false;
        }
        return true;
      case 3:
        if (!clientName.trim() || !mobileNumber.trim()) {
          alert('Please provide your Full Name and Mobile Number.');
          return false;
        }
        if (!/^[0-9]{10}$/.test(mobileNumber.replace(/[^0-9]/g, ''))) {
          alert('Please enter a valid 10-digit Indian mobile number.');
          return false;
        }
        return true;
      case 4:
        return Boolean(assistanceType);
      case 5:
        return true; // Optional file upload
      case 6:
        if (!hasConsent) {
          alert('You must provide consent for data processing to submit the enquiry.');
          return false;
        }
        return true;
      default:
        return true;
    }
  };

  const nextStep = () => {
    if (validateStep(currentStep)) {
      setCurrentStep((prev) => Math.min(prev + 1, 6));
    }
  };

  const prevStep = () => {
    setCurrentStep((prev) => Math.max(prev - 1, 1));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateStep(6)) return;

    const refId = generateEnquiryReferenceId();
    const newEnquiry: LegalEnquiry = {
      id: refId,
      category,
      problemDescription: problemDescription.trim(),
      clientName: clientName.trim(),
      mobileNumber: mobileNumber.trim(),
      email: email.trim() || undefined,
      state,
      city,
      preferredLanguage,
      assistanceType,
      urgencyLevel,
      uploadedDocuments: uploadedDocuments.length > 0 ? uploadedDocuments : undefined,
      createdAt: new Date().toISOString(),
      status: 'new',
    };

    onSaveEnquiry(newEnquiry);
    setSubmittedEnquiry(newEnquiry);
  };

  const handleCopyRef = () => {
    if (submittedEnquiry) {
      navigator.clipboard.writeText(submittedEnquiry.id);
      setCopiedRef(true);
      setTimeout(() => setCopiedRef(false), 2000);
    }
  };

  const resetAndClose = () => {
    setCurrentStep(1);
    setProblemDescription('');
    setClientName('');
    setMobileNumber('');
    setEmail('');
    setUploadedDocuments([]);
    setHasConsent(false);
    setSubmittedEnquiry(null);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-xs">
      <div className="w-full max-w-2xl bg-[#0c1c30] border border-slate-700 rounded-xl shadow-2xl overflow-hidden max-h-[94vh] flex flex-col">
        {/* Header */}
        <div className="px-6 py-4 border-b border-slate-800 bg-[#081525] flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-amber-400">
              <Scale className="w-4 h-4" />
            </div>
            <div>
              <h2 className="text-base font-bold text-white font-serif">
                {submittedEnquiry ? 'Enquiry Confirmed' : 'Request Legal Assistance'}
              </h2>
              <p className="text-xs text-slate-400">
                {submittedEnquiry
                  ? 'Your matter has been registered confidentially'
                  : `Step ${currentStep} of 6 · Confidential client intake`}
              </p>
            </div>
          </div>
          <button
            onClick={resetAndClose}
            className="p-1.5 text-slate-400 hover:text-white rounded-lg hover:bg-slate-800 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Progress Bar (Only during steps) */}
        {!submittedEnquiry && (
          <div className="w-full bg-slate-900 h-1">
            <div
              className="bg-amber-400 h-1 transition-all duration-300"
              style={{ width: `${(currentStep / 6) * 100}%` }}
            />
          </div>
        )}

        {/* Body Content */}
        <div className="p-6 overflow-y-auto space-y-6 text-sm flex-1">
          {submittedEnquiry ? (
            /* Confirmation View */
            <div className="py-4 text-center space-y-5">
              <div className="w-16 h-16 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 flex items-center justify-center mx-auto">
                <Check className="w-8 h-8" />
              </div>

              <div>
                <h3 className="text-2xl font-bold text-white font-serif">
                  Enquiry Submitted Successfully
                </h3>
                <p className="text-xs text-slate-300 mt-1 max-w-md mx-auto leading-relaxed">
                  Your legal assistance enquiry has been registered in the Raoz Legal intake queue.
                </p>
              </div>

              {/* Reference ID Card */}
              <div className="p-5 rounded-xl bg-slate-900 border border-amber-500/30 max-w-md mx-auto text-center space-y-2">
                <div className="text-[11px] uppercase tracking-wider text-slate-400 font-mono">
                  Your Confidential Reference ID
                </div>
                <div className="text-2xl sm:text-3xl font-mono font-bold text-amber-400 flex items-center justify-center gap-2">
                  <span>{submittedEnquiry.id}</span>
                  <button
                    onClick={handleCopyRef}
                    className="p-1 text-slate-400 hover:text-white transition-colors"
                    title="Copy Reference Code"
                  >
                    {copiedRef ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
                  </button>
                </div>
                <p className="text-[11px] text-slate-400">
                  Save this number to check your status or quote it to our coordinator.
                </p>
              </div>

              {/* Next Steps Card */}
              <div className="p-4 rounded-lg bg-slate-900/60 border border-slate-800 text-left text-xs space-y-2.5 max-w-md mx-auto">
                <div className="font-semibold text-white">What Happens Next?</div>
                <ul className="space-y-1.5 text-slate-300">
                  <li className="flex items-start gap-2">
                    <Check className="w-3.5 h-3.5 text-amber-400 shrink-0 mt-0.5" />
                    <span>Our legal coordination team reviews your jurisdiction ({submittedEnquiry.city}, {submittedEnquiry.state}).</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="w-3.5 h-3.5 text-amber-400 shrink-0 mt-0.5" />
                    <span>An enrolled advocate will be assigned for consultation in {submittedEnquiry.preferredLanguage}.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="w-3.5 h-3.5 text-amber-400 shrink-0 mt-0.5" />
                    <span>You will receive an SMS and WhatsApp confirmation on {submittedEnquiry.mobileNumber}.</span>
                  </li>
                </ul>
              </div>

              {/* Strict Privacy Guarantee */}
              <div className="text-[11px] text-slate-500 max-w-md mx-auto flex items-center justify-center gap-1.5">
                <Lock className="w-3 h-3 text-emerald-400" />
                <span>Client data protected under Digital Personal Data Protection Act (DPDPA 2023).</span>
              </div>

              <div className="pt-2 flex justify-center">
                <button
                  onClick={resetAndClose}
                  className="px-6 py-2.5 text-xs font-bold text-slate-950 bg-amber-400 hover:bg-amber-300 rounded-lg transition-colors cursor-pointer"
                >
                  Return to Homepage
                </button>
              </div>
            </div>
          ) : (
            /* Multi-step Form Views */
            <form onSubmit={handleSubmit} className="space-y-5">
              {/* Step 1: Legal Issue */}
              {currentStep === 1 && (
                <div className="space-y-4">
                  <div>
                    <h3 className="text-sm font-bold text-white font-serif mb-1">
                      Step 1: Select Your Legal Issue
                    </h3>
                    <p className="text-xs text-slate-400">
                      Choose the category that best matches your situation:
                    </p>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 max-h-72 overflow-y-auto pr-1">
                    {POPULAR_LEGAL_SERVICES.map((s) => (
                      <button
                        key={s.id}
                        type="button"
                        onClick={() => setCategory(s.title)}
                        className={`p-3 rounded-lg border text-left text-xs transition-all cursor-pointer ${
                          category === s.title
                            ? 'bg-amber-500/15 border-amber-500 text-white font-semibold'
                            : 'bg-slate-900/60 border-slate-800 text-slate-300 hover:text-white hover:bg-slate-900'
                        }`}
                      >
                        <div className="font-medium text-white">{s.title}</div>
                        <div className="text-[11px] text-slate-400 truncate mt-0.5">
                          {s.popularIssues[0]}
                        </div>
                      </button>
                    ))}
                  </div>

                  {/* Urgency toggle */}
                  <div className="pt-2 flex items-center justify-between p-3 rounded-lg bg-slate-900/60 border border-slate-800 text-xs">
                    <div>
                      <span className="text-slate-200 font-medium">Is this matter urgent?</span>
                      <p className="text-[11px] text-slate-500">
                        Check for arrest threats, imminent 24h notice deadlines, or cyber fraud
                      </p>
                    </div>
                    <button
                      type="button"
                      onClick={() =>
                        setUrgencyLevel(urgencyLevel === 'urgent' ? 'standard' : 'urgent')
                      }
                      className={`px-3 py-1.5 rounded-md text-xs font-semibold transition-colors ${
                        urgencyLevel === 'urgent'
                          ? 'bg-red-500/20 text-red-400 border border-red-500/40'
                          : 'bg-slate-800 text-slate-400 border border-slate-700'
                      }`}
                    >
                      {urgencyLevel === 'urgent' ? 'Urgent Priority' : 'Standard'}
                    </button>
                  </div>
                </div>
              )}

              {/* Step 2: Problem Description */}
              {currentStep === 2 && (
                <div className="space-y-4">
                  <div>
                    <h3 className="text-sm font-bold text-white font-serif mb-1">
                      Step 2: Describe Your Problem in Your Own Words
                    </h3>
                    <p className="text-xs text-slate-400">
                      Explain in simple Hindi or English. Include approximate dates, parties involved, and the specific relief or outcome you desire.
                    </p>
                  </div>

                  <textarea
                    rows={6}
                    required
                    value={problemDescription}
                    onChange={(e) => setProblemDescription(e.target.value)}
                    placeholder="E.g., I bought an apartment in Noida in 2021 with possession promised by Dec 2023. The builder is demanding extra charges and construction has stopped. What are my options under RERA or consumer court?..."
                    className="w-full bg-slate-900 border border-slate-700 rounded-lg p-3 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-amber-400 resize-none font-mono leading-relaxed"
                  />

                  <div className="p-3 rounded-lg bg-slate-900/40 border border-slate-800 text-[11px] text-slate-400">
                    <strong className="text-slate-300">Tip:</strong> Do not worry about legal terminology or sections. Our team will identify the applicable Acts (BNS, RERA, NI Act 138, etc.).
                  </div>
                </div>
              )}

              {/* Step 3: Contact & Location */}
              {currentStep === 3 && (
                <div className="space-y-4">
                  <div>
                    <h3 className="text-sm font-bold text-white font-serif mb-1">
                      Step 3: Contact & Location Details
                    </h3>
                    <p className="text-xs text-slate-400">
                      We need this to connect you with an advocate licensed in the appropriate state court.
                    </p>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-medium text-slate-300 mb-1">
                        Full Name <span className="text-red-400">*</span>
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="Your full legal name"
                        value={clientName}
                        onChange={(e) => setClientName(e.target.value)}
                        className="w-full bg-slate-900 border border-slate-700 rounded-lg px-3 py-2 text-xs text-white focus:outline-none focus:border-amber-400"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-medium text-slate-300 mb-1">
                        Mobile Number <span className="text-red-400">*</span>
                      </label>
                      <input
                        type="tel"
                        required
                        placeholder="10-digit Indian mobile"
                        value={mobileNumber}
                        onChange={(e) => setMobileNumber(e.target.value)}
                        className="w-full bg-slate-900 border border-slate-700 rounded-lg px-3 py-2 text-xs text-white focus:outline-none focus:border-amber-400"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-medium text-slate-300 mb-1">
                        Email Address <span className="text-slate-500">(Optional)</span>
                      </label>
                      <input
                        type="email"
                        placeholder="name@example.com"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="w-full bg-slate-900 border border-slate-700 rounded-lg px-3 py-2 text-xs text-white focus:outline-none focus:border-amber-400"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-medium text-slate-300 mb-1">
                        Preferred Language
                      </label>
                      <select
                        value={preferredLanguage}
                        onChange={(e) => setPreferredLanguage(e.target.value)}
                        className="w-full bg-slate-900 border border-slate-700 rounded-lg px-3 py-2 text-xs text-white focus:outline-none focus:border-amber-400"
                      >
                        {POPULAR_LANGUAGES.map((l) => (
                          <option key={l} value={l}>
                            {l}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-medium text-slate-300 mb-1">State</label>
                      <select
                        value={state}
                        onChange={(e) => handleStateChange(e.target.value)}
                        className="w-full bg-slate-900 border border-slate-700 rounded-lg px-3 py-2 text-xs text-white focus:outline-none focus:border-amber-400"
                      >
                        {INDIAN_STATES_AND_CITIES.map((s) => (
                          <option key={s.state} value={s.state}>
                            {s.state}
                          </option>
                        ))}
                      </select>
                    </div>
                    <div>
                      <label className="block text-xs font-medium text-slate-300 mb-1">City</label>
                      <select
                        value={city}
                        onChange={(e) => setCity(e.target.value)}
                        className="w-full bg-slate-900 border border-slate-700 rounded-lg px-3 py-2 text-xs text-white focus:outline-none focus:border-amber-400"
                      >
                        {currentCities.map((c) => (
                          <option key={c} value={c}>
                            {c}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>
                </div>
              )}

              {/* Step 4: Assistance Required */}
              {currentStep === 4 && (
                <div className="space-y-4">
                  <div>
                    <h3 className="text-sm font-bold text-white font-serif mb-1">
                      Step 4: Select Assistance Required
                    </h3>
                    <p className="text-xs text-slate-400">
                      What specific service do you need from the legal professional?
                    </p>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                    {[
                      { id: 'consult-advocate', label: 'Consult an Advocate', desc: 'Advice on court procedure, merits, and next steps' },
                      { id: 'send-notice', label: 'Send a Legal Notice', desc: 'Formal statutory demand letter issued by advocate' },
                      { id: 'reply-notice', label: 'Reply to a Legal Notice', desc: 'Defense reply to contest or dispute claims' },
                      { id: 'criminal-assistance', label: 'Criminal Case Assistance', desc: 'Bail, FIR quashing, police summons defense' },
                      { id: 'property-assistance', label: 'Property Dispute Assistance', desc: 'Injunctions, partition, title deed scrutiny' },
                      { id: 'documentation', label: 'Documentation & Agreements', desc: 'Drafting rent deeds, wills, NDAs, power of attorney' },
                      { id: 'other', label: 'Other Legal Assistance', desc: 'Specialized arbitration, company law, or advisory' },
                    ].map((item) => (
                      <button
                        key={item.id}
                        type="button"
                        onClick={() => setAssistanceType(item.id as AssistanceType)}
                        className={`p-3 rounded-lg border text-left text-xs transition-all cursor-pointer ${
                          assistanceType === item.id
                            ? 'bg-amber-500/15 border-amber-500 text-white font-semibold'
                            : 'bg-slate-900/60 border-slate-800 text-slate-300 hover:text-white'
                        }`}
                      >
                        <div className="font-semibold text-white">{item.label}</div>
                        <div className="text-[11px] text-slate-400 mt-0.5">{item.desc}</div>
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* Step 5: Document Upload */}
              {currentStep === 5 && (
                <div className="space-y-4">
                  <div>
                    <h3 className="text-sm font-bold text-white font-serif mb-1">
                      Step 5: Upload Relevant Documents (Optional)
                    </h3>
                    <p className="text-xs text-slate-400">
                      Attach contracts, cheque copy, bank memos, received notices, or FIR copies. Files are encrypted and visible only to assigned legal counsel.
                    </p>
                  </div>

                  <label className="border-2 border-dashed border-slate-700 hover:border-amber-400/60 rounded-xl p-6 flex flex-col items-center justify-center cursor-pointer bg-slate-900/40 transition-colors">
                    <Upload className="w-8 h-8 text-slate-400 mb-2" />
                    <span className="text-xs font-semibold text-white">Click or Drag Files Here</span>
                    <span className="text-[11px] text-slate-500 mt-1">
                      PDF, JPG, PNG, DOCX up to 25MB each
                    </span>
                    <input
                      type="file"
                      multiple
                      accept=".pdf,image/*,.doc,.docx"
                      onChange={handleFileUpload}
                      className="hidden"
                    />
                  </label>

                  {uploadedDocuments.length > 0 && (
                    <div className="space-y-1.5">
                      <div className="text-xs font-medium text-slate-300">Attached Documents:</div>
                      {uploadedDocuments.map((doc, idx) => (
                        <div
                          key={idx}
                          className="flex items-center justify-between p-2 rounded-lg bg-slate-900 border border-slate-800 text-xs font-mono text-slate-200"
                        >
                          <span className="flex items-center gap-2">
                            <FileCheck2 className="w-3.5 h-3.5 text-emerald-400" />
                            {doc}
                          </span>
                          <button
                            type="button"
                            onClick={() =>
                              setUploadedDocuments((prev) => prev.filter((_, i) => i !== idx))
                            }
                            className="text-slate-500 hover:text-red-400 p-0.5"
                          >
                            <X className="w-3.5 h-3.5" />
                          </button>
                        </div>
                      ))}
                    </div>
                  )}

                  <div className="p-3 rounded-lg bg-slate-900/40 border border-slate-800 text-[11px] text-slate-400 flex items-start gap-2">
                    <Lock className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                    <span>
                      Private Intake Guarantee: Your documents are never posted publicly or shared with third parties.
                    </span>
                  </div>
                </div>
              )}

              {/* Step 6: Review & Submit */}
              {currentStep === 6 && (
                <div className="space-y-4">
                  <div>
                    <h3 className="text-sm font-bold text-white font-serif mb-1">
                      Step 6: Review Summary & Submit Enquiry
                    </h3>
                    <p className="text-xs text-slate-400">
                      Please confirm your details before submission:
                    </p>
                  </div>

                  <div className="p-4 rounded-xl bg-slate-900/80 border border-slate-800 space-y-2 text-xs">
                    <div className="flex justify-between border-b border-slate-800/80 pb-1.5">
                      <span className="text-slate-400">Category:</span>
                      <span className="text-white font-medium">{category}</span>
                    </div>
                    <div className="flex justify-between border-b border-slate-800/80 pb-1.5">
                      <span className="text-slate-400">Client:</span>
                      <span className="text-white font-medium">{clientName} ({mobileNumber})</span>
                    </div>
                    <div className="flex justify-between border-b border-slate-800/80 pb-1.5">
                      <span className="text-slate-400">Location:</span>
                      <span className="text-white font-medium">{city}, {state}</span>
                    </div>
                    <div className="flex justify-between border-b border-slate-800/80 pb-1.5">
                      <span className="text-slate-400">Assistance:</span>
                      <span className="text-white font-medium capitalize">{assistanceType.replace('-', ' ')}</span>
                    </div>
                    <div className="flex justify-between border-b border-slate-800/80 pb-1.5">
                      <span className="text-slate-400">Language:</span>
                      <span className="text-white font-medium">{preferredLanguage}</span>
                    </div>
                    <div className="flex justify-between pb-1">
                      <span className="text-slate-400">Attachments:</span>
                      <span className="text-white font-medium">{uploadedDocuments.length} files attached</span>
                    </div>
                  </div>

                  {/* Mandatory Consent Checkbox */}
                  <label className="flex items-start gap-2 text-xs text-slate-300 cursor-pointer pt-2">
                    <input
                      type="checkbox"
                      required
                      checked={hasConsent}
                      onChange={(e) => setHasConsent(e.target.checked)}
                      className="mt-0.5 rounded border-slate-700 text-amber-500 focus:ring-0"
                    />
                    <span className="leading-relaxed">
                      I expressly consent to the collection and processing of my contact details and matter information by Raoz Legal and its affiliated advocates for legal evaluation under the <strong>Digital Personal Data Protection Act (DPDPA 2023)</strong> and Bar Council norms.
                    </span>
                  </label>
                </div>
              )}

              {/* Navigation Controls */}
              <div className="pt-4 border-t border-slate-800 flex items-center justify-between">
                {currentStep > 1 ? (
                  <button
                    type="button"
                    onClick={prevStep}
                    className="inline-flex items-center gap-1.5 px-3.5 py-2 text-xs font-medium text-slate-400 hover:text-white rounded-lg transition-colors cursor-pointer"
                  >
                    <ArrowLeft className="w-3.5 h-3.5" />
                    <span>Back</span>
                  </button>
                ) : (
                  <div />
                )}

                {currentStep < 6 ? (
                  <button
                    type="button"
                    onClick={nextStep}
                    className="inline-flex items-center gap-1.5 px-5 py-2 text-xs font-bold text-slate-950 bg-amber-400 hover:bg-amber-300 rounded-lg shadow-sm transition-colors cursor-pointer"
                  >
                    <span>Next Step</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                ) : (
                  <button
                    type="submit"
                    className="inline-flex items-center gap-2 px-6 py-2.5 text-xs font-bold text-slate-950 bg-gradient-to-r from-amber-400 to-amber-500 hover:from-amber-300 hover:to-amber-400 rounded-lg shadow-md transition-all cursor-pointer"
                  >
                    <span>Submit Legal Enquiry</span>
                    <Check className="w-4 h-4" />
                  </button>
                )}
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
