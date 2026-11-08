import React, { useState, useEffect } from 'react';
import { X, Phone, Shield, Lock, Clock, CheckCircle2, Sparkles } from 'lucide-react';
import { LEGAL_SERVICES_DATA } from '../data/vakeelSaabData';

interface ConsultationModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialIssue?: string;
}

export function ConsultationModal({ isOpen, onClose, initialIssue }: ConsultationModalProps) {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [language, setLanguage] = useState('English / Hindi');
  const [city, setCity] = useState('Delhi NCR');
  const [issue, setIssue] = useState(initialIssue || 'Property Lawyer');
  const [budget, setBudget] = useState('₹499 (15 Min Anonymous Call)');
  const [submitted, setSubmitted] = useState(false);
  const [referenceCode, setReferenceCode] = useState('');

  useEffect(() => {
    if (initialIssue) {
      setIssue(initialIssue);
    }
  }, [initialIssue]);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!phone.trim()) return;
    const code = `LIC-${Math.floor(100000 + Math.random() * 900000)}`;
    setReferenceCode(code);
    setSubmitted(true);
  };

  const handleReset = () => {
    setSubmitted(false);
    setName('');
    setPhone('');
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#0b1a3a]/80 backdrop-blur-xs">
      <div className="bg-white rounded-3xl max-w-lg w-full overflow-hidden shadow-2xl border border-slate-100 animate-in fade-in zoom-in-95 duration-200">
        {/* Top Banner */}
        <div className="bg-gradient-to-r from-[#172B54] to-[#1E3A5F] px-6 py-5 text-white flex items-start justify-between">
          <div>
            <div className="inline-flex items-center gap-1.5 bg-[#FEC556]/20 border border-[#FEC556]/40 rounded-full px-3 py-0.5 text-[11px] font-bold text-[#FEC556] mb-2">
              <Lock className="w-3 h-3" />
              <span>100% Anonymous & Masked Call</span>
            </div>
            <h3 className="text-xl font-bold">Connect with a Verified Lawyer</h3>
            <p className="text-xs text-white/75 mt-0.5">
              Instant Helpline: <strong className="text-[#FEC556]">+91 72848 72848</strong> · 3-Minute Trial Included
            </p>
          </div>
          <button
            onClick={handleReset}
            className="p-1.5 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {submitted ? (
          <div className="p-6 text-center space-y-4">
            <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center mx-auto">
              <CheckCircle2 className="w-9 h-9" />
            </div>
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-emerald-700">
                Anonymous Bridge Activated
              </span>
              <h4 className="text-xl font-bold text-[#172B54] mt-1">
                Lawyer Match Assigned!
              </h4>
              <p className="text-xs text-slate-600 mt-1 max-w-sm mx-auto">
                Your phone number is masked for privacy. Our legal executive is connecting your anonymous bridge call for <strong>{issue}</strong>.
              </p>
            </div>

            <div className="bg-[#EDF3FA] rounded-2xl p-4 text-left text-xs space-y-2 border border-slate-200">
              <div className="flex justify-between">
                <span className="text-slate-500">Unique Lawyer Identity Code (LIC):</span>
                <span className="font-mono font-bold text-[#172B54]">{referenceCode}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-500">Selected Practice Area:</span>
                <span className="font-semibold text-[#172B54]">{issue}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-500">Preferred Language & City:</span>
                <span className="font-semibold text-[#172B54]">{language} · {city}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-500">Consultation Plan:</span>
                <span className="font-semibold text-emerald-700">{budget}</span>
              </div>
            </div>

            <div className="flex gap-3 pt-2">
              <a
                href="tel:+917284872848"
                className="flex-1 inline-flex items-center justify-center gap-2 bg-[#FEC556] hover:bg-[#ffd57a] text-[#172B54] font-bold py-3 rounded-xl text-sm shadow-md transition-colors"
              >
                <Phone className="w-4 h-4" />
                <span>Dial +91 72848 72848 Now</span>
              </a>
              <button
                onClick={handleReset}
                className="px-5 py-3 rounded-xl border border-slate-200 text-xs font-bold text-slate-600 hover:bg-slate-50 cursor-pointer"
              >
                Done
              </button>
            </div>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="p-6 space-y-4">
            {/* Trust Pillars */}
            <div className="grid grid-cols-3 gap-2 bg-[#EDF3FA] p-3 rounded-2xl text-center">
              <div className="flex flex-col items-center">
                <Lock className="w-4 h-4 text-[#172B54] mb-1" />
                <span className="text-[11px] font-bold text-[#172B54]">Identity Masked</span>
              </div>
              <div className="flex flex-col items-center">
                <Clock className="w-4 h-4 text-[#172B54] mb-1" />
                <span className="text-[11px] font-bold text-[#172B54]">3-Min Risk-Free Trial</span>
              </div>
              <div className="flex flex-col items-center">
                <Shield className="w-4 h-4 text-[#172B54] mb-1" />
                <span className="text-[11px] font-bold text-[#172B54]">4,000+ Verified Lawyers</span>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div>
                <label className="block text-xs font-bold text-[#172B54] mb-1">
                  Alias or Name (Optional for Anonymity)
                </label>
                <input
                  type="text"
                  placeholder="e.g. Anonymous Client"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full rounded-xl border border-slate-200 px-3.5 py-2.5 text-xs text-slate-900 focus:outline-none focus:border-[#172B54]"
                />
              </div>
              <div>
                <label className="block text-xs font-bold text-[#172B54] mb-1">
                  Mobile Number (Number Masked) *
                </label>
                <input
                  type="tel"
                  required
                  placeholder="+91 98765 43210"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  className="w-full rounded-xl border border-slate-200 px-3.5 py-2.5 text-xs text-slate-900 focus:outline-none focus:border-[#172B54]"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div>
                <label className="block text-xs font-bold text-[#172B54] mb-1">
                  Legal Issue / Lawyer Type *
                </label>
                <select
                  value={issue}
                  onChange={(e) => setIssue(e.target.value)}
                  className="w-full rounded-xl border border-slate-200 px-3 py-2.5 text-xs text-slate-900 bg-white focus:outline-none focus:border-[#172B54]"
                >
                  {LEGAL_SERVICES_DATA.map((s) => (
                    <option key={s.id} value={s.title}>
                      {s.title}
                    </option>
                  ))}
                </select>
              </div>
              <div>
                <label className="block text-xs font-bold text-[#172B54] mb-1">
                  Preferred Language *
                </label>
                <select
                  value={language}
                  onChange={(e) => setLanguage(e.target.value)}
                  className="w-full rounded-xl border border-slate-200 px-3 py-2.5 text-xs text-slate-900 bg-white focus:outline-none focus:border-[#172B54]"
                >
                  <option>English / Hindi</option>
                  <option>Hindi</option>
                  <option>English</option>
                  <option>Marathi</option>
                  <option>Tamil</option>
                  <option>Telugu</option>
                  <option>Kannada</option>
                  <option>Punjabi</option>
                  <option>Gujarati</option>
                  <option>Bengali</option>
                </select>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div>
                <label className="block text-xs font-bold text-[#172B54] mb-1">
                  City / Jurisdiction
                </label>
                <input
                  type="text"
                  value={city}
                  onChange={(e) => setCity(e.target.value)}
                  className="w-full rounded-xl border border-slate-200 px-3.5 py-2.5 text-xs text-slate-900 focus:outline-none focus:border-[#172B54]"
                />
              </div>
              <div>
                <label className="block text-xs font-bold text-[#172B54] mb-1">
                  Consultation Slot & Budget
                </label>
                <select
                  value={budget}
                  onChange={(e) => setBudget(e.target.value)}
                  className="w-full rounded-xl border border-slate-200 px-3 py-2.5 text-xs text-slate-900 bg-white focus:outline-none focus:border-[#172B54]"
                >
                  <option>₹499 (15 Min Anonymous Call)</option>
                  <option>₹899 (30 Min Detailed Strategy Call)</option>
                  <option>₹1,499 (Document Review + Video Call)</option>
                </select>
              </div>
            </div>

            <div className="pt-2 flex flex-col sm:flex-row gap-2.5">
              <button
                type="submit"
                className="flex-1 inline-flex items-center justify-center gap-2 bg-[#FEC556] hover:bg-[#ffd57a] text-[#172B54] font-bold py-3 px-5 rounded-xl text-sm shadow-md transition-all cursor-pointer"
              >
                <Sparkles className="w-4 h-4" />
                <span>Request Instant Anonymous Call</span>
              </button>
              <a
                href="tel:+917284872848"
                className="inline-flex items-center justify-center gap-2 bg-[#172B54] hover:bg-[#0F1B3C] text-white font-semibold py-3 px-4 rounded-xl text-xs transition-colors"
              >
                <Phone className="w-3.5 h-3.5 text-[#FEC556]" />
                <span>Call 72848 72848</span>
              </a>
            </div>
          </form>
        )}
      </div>
    </div>
  );
}
