import React, { useState } from 'react';
import { 
  X, 
  Scale, 
  Clock, 
  Phone, 
  FileText, 
  CheckCircle2, 
  AlertCircle, 
  ShieldCheck, 
  Calendar 
} from 'lucide-react';

interface AskAdvocateModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialCategory?: string;
}

export function AskAdvocateModal({
  isOpen,
  onClose,
  initialCategory = 'Property & Real Estate',
}: AskAdvocateModalProps) {
  const [serviceType, setServiceType] = useState<'question' | 'call' | 'review'>('question');
  const [category, setCategory] = useState(initialCategory);
  const [fullName, setFullName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [city, setCity] = useState('');
  const [questionText, setQuestionText] = useState('');
  const [preferredSlot, setPreferredSlot] = useState('Today Evening (5 PM - 8 PM)');
  const [submitted, setSubmitted] = useState(false);
  const [ticketId, setTicketId] = useState('');

  if (!isOpen) return null;

  const categories = [
    'Property Disputes & Land Titles',
    'Startup Law & Corporate Agreements',
    'Cheque Bounce (Section 138 NI Act)',
    'Divorce, Custody & Family Disputes',
    'Criminal Defense & Police Complaints',
    'Employment Termination & Severance',
    'Consumer Court Complaints',
    'Cyber Crime & Online Fraud',
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!fullName || !phone || !questionText) return;

    const id = `YA-ADV-${Math.floor(100000 + Math.random() * 900000)}`;
    setTicketId(id);
    setSubmitted(true);
  };

  const handleReset = () => {
    setSubmitted(false);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs overflow-y-auto">
      <div className="bg-white rounded-2xl max-w-2xl w-full border border-[#E8E8E3] shadow-2xl overflow-hidden my-8">
        {/* Modal Header */}
        <div className="bg-[#1D1C1A] text-white px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-lg bg-[#990000] flex items-center justify-center text-white">
              <Scale className="w-4 h-4" />
            </div>
            <div>
              <div className="text-sm font-bold tracking-tight">Ask an Advocate — On-Demand Legal Guidance</div>
              <div className="text-[11px] text-neutral-400 font-mono">
                Verified Advocates Enrolled with State Bar Councils across India
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

        {/* Modal Body */}
        <div className="p-6">
          {!submitted ? (
            <form onSubmit={handleSubmit} className="space-y-5">
              {/* Service Type Switcher */}
              <div>
                <label className="block text-xs font-bold text-neutral-800 mb-2">
                  Select Legal Assistance Format
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
                  <button
                    type="button"
                    onClick={() => setServiceType('question')}
                    className={`p-3 rounded-xl border text-left cursor-pointer transition-all ${
                      serviceType === 'question'
                        ? 'border-[#990000] bg-[#FDF2F2] text-[#990000]'
                        : 'border-[#E8E8E3] hover:bg-[#FAF9F5] text-neutral-700'
                    }`}
                  >
                    <div className="text-xs font-bold">Ask a Question</div>
                    <div className="text-[10px] text-neutral-500 mt-0.5">Written advocate advice</div>
                  </button>

                  <button
                    type="button"
                    onClick={() => setServiceType('call')}
                    className={`p-3 rounded-xl border text-left cursor-pointer transition-all ${
                      serviceType === 'call'
                        ? 'border-[#990000] bg-[#FDF2F2] text-[#990000]'
                        : 'border-[#E8E8E3] hover:bg-[#FAF9F5] text-neutral-700'
                    }`}
                  >
                    <div className="text-xs font-bold">30-Min Consultation</div>
                    <div className="text-[10px] text-neutral-500 mt-0.5">Confidential phone/video</div>
                  </button>

                  <button
                    type="button"
                    onClick={() => setServiceType('review')}
                    className={`p-3 rounded-xl border text-left cursor-pointer transition-all ${
                      serviceType === 'review'
                        ? 'border-[#990000] bg-[#FDF2F2] text-[#990000]'
                        : 'border-[#E8E8E3] hover:bg-[#FAF9F5] text-neutral-700'
                    }`}
                  >
                    <div className="text-xs font-bold">Document Review</div>
                    <div className="text-[10px] text-neutral-500 mt-0.5">Line-by-line contract vet</div>
                  </button>
                </div>
              </div>

              {/* Legal Domain */}
              <div>
                <label className="block text-xs font-bold text-neutral-800 mb-1">
                  Legal Matter Category *
                </label>
                <select
                  value={category}
                  onChange={(e) => setCategory(e.target.value)}
                  className="w-full text-xs p-2.5 rounded-lg border border-neutral-300 focus:outline-none focus:border-[#990000]"
                >
                  {categories.map((c) => (
                    <option key={c} value={c}>
                      {c}
                    </option>
                  ))}
                </select>
              </div>

              {/* Question / Matter Description */}
              <div>
                <label className="block text-xs font-bold text-neutral-800 mb-1">
                  Describe Your Legal Query or Situation *
                </label>
                <textarea
                  value={questionText}
                  onChange={(e) => setQuestionText(e.target.value)}
                  rows={4}
                  placeholder="Explain your situation in plain English or Hindi. Mention key details such as agreements signed, notices received, property location, or key dates..."
                  className="w-full text-xs p-3 rounded-lg border border-neutral-300 focus:outline-none focus:border-[#990000] resize-none"
                  required
                />
                <div className="text-[11px] text-neutral-400 mt-1">
                  Strictly confidential. Protected under Advocate-Client privilege guidelines.
                </div>
              </div>

              {/* Contact Information */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                <div>
                  <label className="block text-xs font-bold text-neutral-800 mb-1">
                    Your Full Name *
                  </label>
                  <input
                    type="text"
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                    placeholder="e.g. Vikram Malhotra"
                    className="w-full text-xs p-2.5 rounded-lg border border-neutral-300 focus:outline-none focus:border-[#990000]"
                    required
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-neutral-800 mb-1">
                    Phone Number (for call) *
                  </label>
                  <input
                    type="tel"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="+91 98765 43210"
                    className="w-full text-xs p-2.5 rounded-lg border border-neutral-300 focus:outline-none focus:border-[#990000]"
                    required
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-neutral-800 mb-1">
                    City / State
                  </label>
                  <input
                    type="text"
                    value={city}
                    onChange={(e) => setCity(e.target.value)}
                    placeholder="e.g. Mumbai, Maharashtra"
                    className="w-full text-xs p-2.5 rounded-lg border border-neutral-300 focus:outline-none focus:border-[#990000]"
                  />
                </div>
              </div>

              {/* Time slot preference for calls */}
              {serviceType === 'call' && (
                <div>
                  <label className="block text-xs font-bold text-neutral-800 mb-1">
                    Preferred Consultation Window
                  </label>
                  <select
                    value={preferredSlot}
                    onChange={(e) => setPreferredSlot(e.target.value)}
                    className="w-full text-xs p-2.5 rounded-lg border border-neutral-300 focus:outline-none focus:border-[#990000]"
                  >
                    <option value="Today Evening (5 PM - 8 PM)">Today Evening (5 PM - 8 PM)</option>
                    <option value="Tomorrow Morning (10 AM - 1 PM)">Tomorrow Morning (10 AM - 1 PM)</option>
                    <option value="Tomorrow Afternoon (2 PM - 5 PM)">Tomorrow Afternoon (2 PM - 5 PM)</option>
                    <option value="Weekend Slot">Weekend Priority Slot</option>
                  </select>
                </div>
              )}

              {/* Statutory Note */}
              <div className="p-3 bg-[#FAF9F5] rounded-xl border border-[#E8E8E3] text-[11px] text-neutral-600 flex items-start gap-2">
                <ShieldCheck className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                <span>
                  Consultations are provided by independent advocates enrolled with State Bar Councils. YOURADVOCATEE facilitates technology access and does not solicit legal business under Bar Council of India rules.
                </span>
              </div>

              {/* Submit Buttons */}
              <div className="flex items-center justify-end gap-3 pt-3 border-t border-neutral-200">
                <button
                  type="button"
                  onClick={onClose}
                  className="px-4 py-2.5 text-xs font-semibold text-neutral-600 hover:text-neutral-900 cursor-pointer"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-6 py-2.5 text-xs font-bold text-white bg-[#990000] hover:bg-[#7D0000] rounded-lg shadow-md transition-all cursor-pointer flex items-center gap-1.5 active:scale-95"
                >
                  <Scale className="w-3.5 h-3.5" />
                  <span>Submit to Advocate Network</span>
                </button>
              </div>
            </form>
          ) : (
            /* Submission Success Screen */
            <div className="text-center py-6 space-y-5">
              <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center mx-auto border-2 border-emerald-300">
                <CheckCircle2 className="w-8 h-8" />
              </div>

              <div>
                <h3 className="text-xl font-black text-[#1D1C1A]">
                  Consultation Request Assigned
                </h3>
                <p className="text-xs text-neutral-500 mt-1 max-w-md mx-auto">
                  Your legal query has been assigned to a verified advocate specializing in {category}.
                </p>
              </div>

              <div className="bg-[#FAF9F5] border border-[#E8E8E3] rounded-xl p-4 max-w-md mx-auto text-xs space-y-2 text-left">
                <div className="flex justify-between border-b border-[#E8E8E3] pb-2">
                  <span className="text-neutral-500">Case Ticket Ref:</span>
                  <span className="font-mono font-bold text-neutral-900">{ticketId}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-neutral-500">Client:</span>
                  <span className="font-bold text-neutral-900">{fullName}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-neutral-500">Service:</span>
                  <span className="font-bold text-neutral-900 capitalize">{serviceType === 'call' ? '30-Min Call' : serviceType === 'review' ? 'Doc Review' : 'Written Advice'}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-neutral-500">Expected Response:</span>
                  <span className="font-bold text-emerald-600">Within 2 business hours</span>
                </div>
              </div>

              <div className="pt-2">
                <button
                  type="button"
                  onClick={handleReset}
                  className="px-6 py-2.5 text-xs font-bold text-white bg-[#1D1C1A] hover:bg-neutral-800 rounded-lg transition-colors cursor-pointer"
                >
                  Return to Dashboard
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
