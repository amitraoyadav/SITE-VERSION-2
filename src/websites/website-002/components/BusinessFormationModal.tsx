import React, { useState } from 'react';
import { 
  X, 
  Building2, 
  Check, 
  CheckCircle2, 
  ArrowRight, 
  ArrowLeft, 
  ShieldCheck, 
  FileText, 
  Download 
} from 'lucide-react';
import { BUSINESS_ENTITIES } from '../data/businessServices';
import { BusinessEntityOption, BusinessEntityType } from '../types';
import { INDIAN_STATES_AND_CITIES } from '../../../data/statesCities';

interface BusinessFormationModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialEntityType?: string;
  onSubmitted: (dossier: any) => void;
}

export function BusinessFormationModal({
  isOpen,
  onClose,
  initialEntityType,
  onSubmitted,
}: BusinessFormationModalProps) {
  const [selectedEntityId, setSelectedEntityId] = useState<BusinessEntityType>(
    (initialEntityType as BusinessEntityType) || 'pvt-ltd'
  );
  const [currentStep, setCurrentStep] = useState(1);

  // Form Fields
  const [companyName1, setCompanyName1] = useState('');
  const [companyName2, setCompanyName2] = useState('');
  const [businessActivity, setBusinessActivity] = useState('');
  const [state, setState] = useState(INDIAN_STATES_AND_CITIES[0].state);
  const [city, setCity] = useState(INDIAN_STATES_AND_CITIES[0].cities[0]);
  const [directorsCount, setDirectorsCount] = useState('2');
  const [capital, setCapital] = useState('100000');
  const [founderName, setFounderName] = useState('');
  const [founderMobile, setFounderMobile] = useState('');
  const [founderEmail, setFounderEmail] = useState('');

  // Result state
  const [confirmedDossier, setConfirmedDossier] = useState<any | null>(null);

  if (!isOpen) return null;

  const currentEntity =
    BUSINESS_ENTITIES.find((b) => b.id === selectedEntityId) || BUSINESS_ENTITIES[0];

  const totalFee = currentEntity.governmentFeeEstimate + currentEntity.professionalFee;

  const handleNext = () => {
    if (currentStep === 1) {
      setCurrentStep(2);
    } else if (currentStep === 2) {
      if (!companyName1.trim() || !businessActivity.trim()) {
        alert('Please provide your desired company name and business activity description.');
        return;
      }
      setCurrentStep(3);
    }
  };

  const handleFinalSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!founderName.trim() || !founderMobile.trim()) {
      alert('Please provide your contact name and mobile number.');
      return;
    }

    const dossier = {
      id: `INC-2026-${Date.now().toString().slice(-5)}`,
      entityType: currentEntity.name,
      companyNamePrimary: companyName1.trim(),
      companyNameSecondary: companyName2.trim() || undefined,
      businessActivity,
      registeredState: state,
      registeredCity: city,
      authorizedCapital: Number(capital),
      directorsCount: Number(directorsCount),
      founderName,
      founderMobile,
      founderEmail,
      statutoryFiling: currentEntity.statutoryFiling,
      totalFeeEstimate: totalFee,
      createdAt: new Date().toISOString(),
    };

    onSubmitted(dossier);
    setConfirmedDossier(dossier);
  };

  const resetAndClose = () => {
    setCurrentStep(1);
    setConfirmedDossier(null);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/80 backdrop-blur-xs">
      <div className="w-full max-w-3xl bg-white border border-[#E8E8E3] rounded-2xl shadow-2xl overflow-hidden max-h-[94vh] flex flex-col">
        {/* Header */}
        <div className="px-6 py-4 border-b border-[#E8E8E3] bg-[#FAF9F5] flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-[#990000] text-white flex items-center justify-center shadow-xs">
              <Building2 className="w-4 h-4" />
            </div>
            <div>
              <h2 className="text-base font-bold text-[#1D1C1A]">
                Start a Business in India · MCA SPICe+ Filing
              </h2>
              <p className="text-xs text-[#5D5B56]">
                Step {confirmedDossier ? 'Complete' : `${currentStep} of 3`} · Fast incorporation with MCA & ROC
              </p>
            </div>
          </div>
          <button
            onClick={resetAndClose}
            className="p-1.5 text-neutral-400 hover:text-neutral-900 rounded-lg hover:bg-neutral-100"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 overflow-y-auto space-y-6 text-sm flex-1">
          {confirmedDossier ? (
            /* Confirmation View */
            <div className="py-6 text-center space-y-5">
              <div className="w-16 h-16 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-600 flex items-center justify-center mx-auto">
                <Check className="w-8 h-8" />
              </div>

              <div>
                <h3 className="text-2xl font-black text-[#1D1C1A]">
                  Incorporation Filing Dossier Prepared
                </h3>
                <p className="text-xs text-[#5D5B56] mt-1 max-w-md mx-auto leading-relaxed">
                  Your registration dossier has been created under Dossier ID:{' '}
                  <strong className="font-mono text-[#990000] font-bold">{confirmedDossier.id}</strong>.
                </p>
              </div>

              {/* Dossier Summary Box */}
              <div className="p-5 rounded-xl bg-[#FAF9F5] border border-[#E8E8E3] text-left text-xs space-y-3 max-w-lg mx-auto font-mono">
                <div className="flex justify-between border-b border-[#E8E8E3] pb-2">
                  <span className="text-neutral-500">Entity Type:</span>
                  <span className="font-bold text-[#1D1C1A]">{confirmedDossier.entityType}</span>
                </div>
                <div className="flex justify-between border-b border-[#E8E8E3] pb-2">
                  <span className="text-neutral-500">Proposed Name:</span>
                  <span className="font-bold text-[#990000]">{confirmedDossier.companyNamePrimary}</span>
                </div>
                <div className="flex justify-between border-b border-[#E8E8E3] pb-2">
                  <span className="text-neutral-500">Registered Office:</span>
                  <span className="text-[#1D1C1A]">{confirmedDossier.registeredCity}, {confirmedDossier.registeredState}</span>
                </div>
                <div className="flex justify-between border-b border-[#E8E8E3] pb-2">
                  <span className="text-neutral-500">Authorized Capital:</span>
                  <span className="text-[#1D1C1A]">₹{confirmedDossier.authorizedCapital.toLocaleString('en-IN')}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-neutral-500">Transparent Total Fee:</span>
                  <span className="text-emerald-700 font-bold">₹{confirmedDossier.totalFeeEstimate.toLocaleString('en-IN')} (Govt + Filing)</span>
                </div>
              </div>

              {/* Next Steps Checklist */}
              <div className="p-4 rounded-xl bg-white border border-[#E8E8E3] text-left text-xs max-w-lg mx-auto space-y-2">
                <div className="font-bold text-[#1D1C1A]">ROC Registration Checklist:</div>
                <div className="flex items-center gap-2 text-neutral-600">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                  <span>DSC (Digital Signature) video verification link will be sent to {confirmedDossier.founderMobile}</span>
                </div>
                <div className="flex items-center gap-2 text-neutral-600">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                  <span>Name reservation submitted to Central Registration Centre (CRC / MCA)</span>
                </div>
              </div>

              <div className="pt-2">
                <button
                  onClick={resetAndClose}
                  className="px-6 py-2.5 text-xs font-bold text-white bg-[#990000] hover:bg-[#7D0000] rounded-lg transition-colors cursor-pointer"
                >
                  Return to YOURADVOCATEE
                </button>
              </div>
            </div>
          ) : (
            <div className="space-y-6">
              {/* Step 1: Select Entity Type */}
              {currentStep === 1 && (
                <div className="space-y-4">
                  <div>
                    <h3 className="text-sm font-bold text-[#1D1C1A]">
                      Step 1: Choose Your Business Structure
                    </h3>
                    <p className="text-xs text-[#5D5B56]">
                      Select the entity structure that best aligns with your funding and operational goals in India:
                    </p>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {BUSINESS_ENTITIES.map((b) => (
                      <div
                        key={b.id}
                        onClick={() => setSelectedEntityId(b.id)}
                        className={`p-4 rounded-xl border transition-all cursor-pointer flex flex-col justify-between ${
                          selectedEntityId === b.id
                            ? 'bg-[#FDF2F2] border-[#990000] ring-1 ring-[#990000]'
                            : 'bg-white border-[#E8E8E3] hover:border-neutral-400'
                        }`}
                      >
                        <div>
                          <div className="flex items-center justify-between mb-1">
                            <span className="font-bold text-xs text-[#1D1C1A]">{b.name}</span>
                            {b.badge && (
                              <span className="text-[10px] font-mono text-[#990000] bg-white border border-[#F8D7DA] px-1.5 py-0.5 rounded font-semibold">
                                {b.badge}
                              </span>
                            )}
                          </div>
                          <p className="text-[11px] text-[#5D5B56] leading-relaxed line-clamp-2 mt-1">
                            {b.description}
                          </p>
                        </div>

                        <div className="mt-3 pt-2 border-t border-[#E8E8E3] flex justify-between text-[11px] font-mono">
                          <span className="text-neutral-500">Setup: {b.setupTimeDays}</span>
                          <span className="font-bold text-[#990000]">
                            ₹{(b.governmentFeeEstimate + b.professionalFee).toLocaleString('en-IN')} total
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Included features preview */}
                  <div className="p-4 rounded-xl bg-[#FAF9F5] border border-[#E8E8E3] text-xs space-y-2">
                    <div className="font-semibold text-[#1D1C1A]">
                      Included with {currentEntity.name}:
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-1.5">
                      {currentEntity.features.slice(0, 4).map((f, i) => (
                        <div key={i} className="flex items-center gap-1.5 text-[11px] text-neutral-700">
                          <Check className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                          <span>{f}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              )}

              {/* Step 2: Company Details */}
              {currentStep === 2 && (
                <div className="space-y-4">
                  <div>
                    <h3 className="text-sm font-bold text-[#1D1C1A]">
                      Step 2: Propose Name & Location
                    </h3>
                    <p className="text-xs text-[#5D5B56]">
                      Provide your preferred business name for Ministry of Corporate Affairs (MCA) approval.
                    </p>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
                    <div>
                      <label className="block text-xs font-semibold text-[#1D1C1A] mb-1">
                        Primary Proposed Name <span className="text-red-600">*</span>
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="e.g. ZenScale Technologies"
                        value={companyName1}
                        onChange={(e) => setCompanyName1(e.target.value)}
                        className="w-full bg-white border border-[#D5D4CE] rounded-lg px-3 py-2 text-xs text-[#1D1C1A] focus:outline-none focus:border-[#990000]"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-[#1D1C1A] mb-1">
                        Alternate Name Choice <span className="text-neutral-400">(Optional)</span>
                      </label>
                      <input
                        type="text"
                        placeholder="e.g. ZenScale Solutions"
                        value={companyName2}
                        onChange={(e) => setCompanyName2(e.target.value)}
                        className="w-full bg-white border border-[#D5D4CE] rounded-lg px-3 py-2 text-xs text-[#1D1C1A] focus:outline-none focus:border-[#990000]"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-[#1D1C1A] mb-1">
                      Business Activity / Industry <span className="text-red-600">*</span>
                    </label>
                    <textarea
                      rows={2}
                      required
                      placeholder="e.g. Software-as-a-service cloud computing and data analytics solutions..."
                      value={businessActivity}
                      onChange={(e) => setBusinessActivity(e.target.value)}
                      className="w-full bg-white border border-[#D5D4CE] rounded-lg p-2.5 text-xs text-[#1D1C1A] focus:outline-none focus:border-[#990000] resize-none"
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
                    <div>
                      <label className="block text-xs font-semibold text-[#1D1C1A] mb-1">
                        Registered State
                      </label>
                      <select
                        value={state}
                        onChange={(e) => {
                          setState(e.target.value);
                          const cities = INDIAN_STATES_AND_CITIES.find((s) => s.state === e.target.value)?.cities || [];
                          if (cities.length > 0) setCity(cities[0]);
                        }}
                        className="w-full bg-white border border-[#D5D4CE] rounded-lg px-3 py-2 text-xs text-[#1D1C1A] focus:outline-none focus:border-[#990000]"
                      >
                        {INDIAN_STATES_AND_CITIES.map((s) => (
                          <option key={s.state} value={s.state}>{s.state}</option>
                        ))}
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-[#1D1C1A] mb-1">City</label>
                      <input
                        type="text"
                        value={city}
                        onChange={(e) => setCity(e.target.value)}
                        className="w-full bg-white border border-[#D5D4CE] rounded-lg px-3 py-2 text-xs text-[#1D1C1A] focus:outline-none focus:border-[#990000]"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
                    <div>
                      <label className="block text-xs font-semibold text-[#1D1C1A] mb-1">
                        Number of Directors / Partners
                      </label>
                      <select
                        value={directorsCount}
                        onChange={(e) => setDirectorsCount(e.target.value)}
                        className="w-full bg-white border border-[#D5D4CE] rounded-lg px-3 py-2 text-xs text-[#1D1C1A]"
                      >
                        <option value="1">1 Director (OPC)</option>
                        <option value="2">2 Directors (Standard)</option>
                        <option value="3">3 Directors</option>
                        <option value="4">4+ Directors</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-[#1D1C1A] mb-1">
                        Initial Authorized Capital (₹)
                      </label>
                      <select
                        value={capital}
                        onChange={(e) => setCapital(e.target.value)}
                        className="w-full bg-white border border-[#D5D4CE] rounded-lg px-3 py-2 text-xs text-[#1D1C1A]"
                      >
                        <option value="100000">₹1,00,000 (Standard Startup Capital)</option>
                        <option value="500000">₹5,00,000</option>
                        <option value="1000000">₹10,00,000</option>
                      </select>
                    </div>
                  </div>
                </div>
              )}

              {/* Step 3: Founder Contact Details */}
              {currentStep === 3 && (
                <form onSubmit={handleFinalSubmit} className="space-y-4">
                  <div>
                    <h3 className="text-sm font-bold text-[#1D1C1A]">
                      Step 3: Founder Contact & Verification
                    </h3>
                    <p className="text-xs text-[#5D5B56]">
                      Where should our Company Secretary / Incorporation Specialist send the signature documents?
                    </p>
                  </div>

                  <div className="space-y-3 text-xs">
                    <div>
                      <label className="block text-xs font-semibold text-[#1D1C1A] mb-1">
                        Lead Founder / Director Name <span className="text-red-600">*</span>
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="As per PAN card"
                        value={founderName}
                        onChange={(e) => setFounderName(e.target.value)}
                        className="w-full bg-white border border-[#D5D4CE] rounded-lg px-3 py-2 text-xs text-[#1D1C1A] focus:outline-none focus:border-[#990000]"
                      />
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-semibold text-[#1D1C1A] mb-1">
                          Mobile Number (for OTP & DSC) <span className="text-red-600">*</span>
                        </label>
                        <input
                          type="tel"
                          required
                          placeholder="10-digit mobile"
                          value={founderMobile}
                          onChange={(e) => setFounderMobile(e.target.value)}
                          className="w-full bg-white border border-[#D5D4CE] rounded-lg px-3 py-2 text-xs text-[#1D1C1A] focus:outline-none focus:border-[#990000]"
                        />
                      </div>

                      <div>
                        <label className="block text-xs font-semibold text-[#1D1C1A] mb-1">
                          Official Email Address <span className="text-red-600">*</span>
                        </label>
                        <input
                          type="email"
                          required
                          placeholder="founder@company.com"
                          value={founderEmail}
                          onChange={(e) => setFounderEmail(e.target.value)}
                          className="w-full bg-white border border-[#D5D4CE] rounded-lg px-3 py-2 text-xs text-[#1D1C1A] focus:outline-none focus:border-[#990000]"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Pricing transparency strip */}
                  <div className="p-4 rounded-xl bg-[#FAF9F5] border border-[#E8E8E3] flex items-center justify-between text-xs">
                    <div>
                      <span className="text-neutral-500">Government MCA Fee: </span>
                      <strong className="text-neutral-900 font-mono">₹{currentEntity.governmentFeeEstimate}</strong>
                      <span className="text-neutral-400"> + Professional CS Fee: </span>
                      <strong className="text-neutral-900 font-mono">₹{currentEntity.professionalFee}</strong>
                    </div>
                    <div className="text-right">
                      <span className="text-xs font-bold text-[#990000] font-mono text-sm">
                        ₹{totalFee.toLocaleString('en-IN')} Total
                      </span>
                    </div>
                  </div>

                  <div className="pt-2">
                    <button
                      type="submit"
                      className="w-full py-3 text-xs font-bold text-white bg-[#990000] hover:bg-[#7D0000] rounded-lg transition-colors cursor-pointer shadow-sm"
                    >
                      Generate Incorporation Dossier & Initiate Filing
                    </button>
                  </div>
                </form>
              )}

              {/* Navigation Controls */}
              {currentStep < 3 && (
                <div className="pt-4 border-t border-[#E8E8E3] flex justify-between items-center">
                  {currentStep > 1 ? (
                    <button
                      type="button"
                      onClick={() => setCurrentStep((prev) => prev - 1)}
                      className="px-4 py-2 text-xs font-semibold text-neutral-600 hover:text-neutral-900 flex items-center gap-1 cursor-pointer"
                    >
                      <ArrowLeft className="w-3.5 h-3.5" />
                      <span>Back</span>
                    </button>
                  ) : (
                    <div />
                  )}

                  <button
                    type="button"
                    onClick={handleNext}
                    className="px-5 py-2 text-xs font-bold text-white bg-[#990000] hover:bg-[#7D0000] rounded-lg flex items-center gap-1.5 cursor-pointer shadow-xs"
                  >
                    <span>Continue</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
