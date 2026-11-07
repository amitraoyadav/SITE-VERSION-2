import React, { useState } from 'react';
import { 
  X, 
  Phone, 
  Video, 
  MapPin, 
  Globe, 
  Calendar, 
  Check, 
  Clock, 
  ShieldCheck, 
  AlertCircle 
} from 'lucide-react';
import { ConsultationMode } from '../../types/legal';
import { INDIAN_STATES_AND_CITIES, POPULAR_LANGUAGES } from '../../data/statesCities';

interface BookConsultationModalProps {
  isOpen: boolean;
  onClose: () => void;
  defaultMode?: ConsultationMode;
  onSuccess: (booking: any) => void;
}

export function BookConsultationModal({
  isOpen,
  onClose,
  defaultMode = 'phone',
  onSuccess,
}: BookConsultationModalProps) {
  const [mode, setMode] = useState<ConsultationMode>(defaultMode);
  const [clientName, setClientName] = useState('');
  const [mobileNumber, setMobileNumber] = useState('');
  const [state, setState] = useState(INDIAN_STATES_AND_CITIES[0].state);
  const [city, setCity] = useState(INDIAN_STATES_AND_CITIES[0].cities[0]);
  const [language, setLanguage] = useState(POPULAR_LANGUAGES[0]);
  const [briefMatter, setBriefMatter] = useState('');
  const [preferredDate, setPreferredDate] = useState('');
  const [preferredSlot, setPreferredSlot] = useState('morning');
  const [isBooked, setIsBooked] = useState(false);
  const [bookingId, setBookingId] = useState('');

  if (!isOpen) return null;

  const currentCities =
    INDIAN_STATES_AND_CITIES.find((s) => s.state === state)?.cities || [];

  const handleStateChange = (newState: string) => {
    setState(newState);
    const newCities =
      INDIAN_STATES_AND_CITIES.find((s) => s.state === newState)?.cities || [];
    if (newCities.length > 0) setCity(newCities[0]);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!clientName || !mobileNumber || !briefMatter) {
      alert('Please fill in your name, mobile number, and a brief description of your matter.');
      return;
    }

    const ref = `CNS-${Date.now().toString().slice(-6)}`;
    setBookingId(ref);

    const booking = {
      id: ref,
      mode,
      clientName,
      mobileNumber,
      state,
      city,
      language,
      briefMatter,
      preferredDate: preferredDate || 'Earliest Available',
      preferredSlot,
      createdAt: new Date().toISOString(),
    };

    onSuccess(booking);
    setIsBooked(true);
  };

  const handleClose = () => {
    setIsBooked(false);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-xs">
      <div className="w-full max-w-xl bg-[#0c1c30] border border-slate-700 rounded-xl shadow-2xl overflow-hidden max-h-[92vh] flex flex-col">
        {/* Header */}
        <div className="px-6 py-4 border-b border-slate-800 bg-[#081525] flex items-center justify-between">
          <div>
            <h2 className="text-base font-bold text-white font-serif">
              Schedule Legal Consultation
            </h2>
            <p className="text-xs text-slate-400">
              Select consultation mode and describe your matter for advocate review
            </p>
          </div>
          <button
            onClick={handleClose}
            className="p-1.5 text-slate-400 hover:text-white rounded-lg hover:bg-slate-800"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 overflow-y-auto space-y-5 text-sm">
          {isBooked ? (
            <div className="py-6 text-center space-y-4">
              <div className="w-14 h-14 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 flex items-center justify-center mx-auto">
                <Check className="w-7 h-7" />
              </div>
              <h3 className="text-xl font-bold text-white font-serif">
                Consultation Request Logged
              </h3>
              <p className="text-xs text-slate-300 max-w-md mx-auto leading-relaxed">
                Your consultation booking reference is{' '}
                <strong className="font-mono text-amber-400">{bookingId}</strong>. Our legal coordinator will verify advocate availability in {city} and confirm your appointment time via SMS and phone.
              </p>

              <div className="p-4 rounded-lg bg-slate-900/60 border border-slate-800 text-left text-xs space-y-2 max-w-md mx-auto font-mono">
                <div className="flex justify-between text-slate-400">
                  <span>Mode:</span>
                  <span className="text-white capitalize">{mode} Consultation</span>
                </div>
                <div className="flex justify-between text-slate-400">
                  <span>Language:</span>
                  <span className="text-white">{language}</span>
                </div>
                <div className="flex justify-between text-slate-400">
                  <span>Location:</span>
                  <span className="text-white">{city}, {state}</span>
                </div>
              </div>

              <div className="pt-4 flex justify-center">
                <button
                  onClick={handleClose}
                  className="px-6 py-2.5 text-xs font-bold text-slate-950 bg-amber-400 hover:bg-amber-300 rounded-lg transition-colors cursor-pointer"
                >
                  Close & Return
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              {/* Select Mode */}
              <div>
                <label className="block text-xs font-semibold text-slate-300 mb-2 uppercase font-mono tracking-wider">
                  Preferred Consultation Mode
                </label>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                  {[
                    { id: 'phone', label: 'Phone', icon: <Phone className="w-4 h-4 text-amber-400" /> },
                    { id: 'video', label: 'Video Call', icon: <Video className="w-4 h-4 text-amber-400" /> },
                    { id: 'in-person', label: 'In-Person', icon: <MapPin className="w-4 h-4 text-amber-400" /> },
                    { id: 'online', label: 'Online / Chat', icon: <Globe className="w-4 h-4 text-amber-400" /> },
                  ].map((m) => (
                    <button
                      key={m.id}
                      type="button"
                      onClick={() => setMode(m.id as ConsultationMode)}
                      className={`p-3 rounded-lg border text-xs font-medium flex flex-col items-center gap-1.5 transition-all cursor-pointer ${
                        mode === m.id
                          ? 'bg-amber-500/15 border-amber-500 text-white shadow-xs font-semibold'
                          : 'bg-slate-900/60 border-slate-800 text-slate-400 hover:text-white'
                      }`}
                    >
                      {m.icon}
                      <span>{m.label}</span>
                    </button>
                  ))}
                </div>
              </div>

              {/* Name & Contact */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-medium text-slate-300 mb-1">
                    Your Full Name <span className="text-red-400">*</span>
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Enter your name"
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
                    placeholder="10-digit mobile"
                    value={mobileNumber}
                    onChange={(e) => setMobileNumber(e.target.value)}
                    className="w-full bg-slate-900 border border-slate-700 rounded-lg px-3 py-2 text-xs text-white focus:outline-none focus:border-amber-400"
                  />
                </div>
              </div>

              {/* State & City */}
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

              {/* Language */}
              <div>
                <label className="block text-xs font-medium text-slate-300 mb-1">
                  Preferred Language of Consultation
                </label>
                <select
                  value={language}
                  onChange={(e) => setLanguage(e.target.value)}
                  className="w-full bg-slate-900 border border-slate-700 rounded-lg px-3 py-2 text-xs text-white focus:outline-none focus:border-amber-400"
                >
                  {POPULAR_LANGUAGES.map((l) => (
                    <option key={l} value={l}>
                      {l}
                    </option>
                  ))}
                </select>
              </div>

              {/* Brief problem summary */}
              <div>
                <label className="block text-xs font-medium text-slate-300 mb-1">
                  Brief Summary of Legal Issue <span className="text-red-400">*</span>
                </label>
                <textarea
                  required
                  rows={3}
                  placeholder="Explain what happened and what specific question you wish to ask the advocate..."
                  value={briefMatter}
                  onChange={(e) => setBriefMatter(e.target.value)}
                  className="w-full bg-slate-900 border border-slate-700 rounded-lg p-3 text-xs text-white focus:outline-none focus:border-amber-400 resize-none font-mono"
                />
              </div>

              {/* Preferred Time Slot */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-medium text-slate-300 mb-1">
                    Preferred Date <span className="text-slate-500">(Optional)</span>
                  </label>
                  <input
                    type="date"
                    value={preferredDate}
                    onChange={(e) => setPreferredDate(e.target.value)}
                    className="w-full bg-slate-900 border border-slate-700 rounded-lg px-3 py-2 text-xs text-white focus:outline-none focus:border-amber-400"
                  />
                </div>
                <div>
                  <label className="block text-xs font-medium text-slate-300 mb-1">Time Window</label>
                  <select
                    value={preferredSlot}
                    onChange={(e) => setPreferredSlot(e.target.value)}
                    className="w-full bg-slate-900 border border-slate-700 rounded-lg px-3 py-2 text-xs text-white focus:outline-none focus:border-amber-400"
                  >
                    <option value="morning">Morning (10:00 AM – 01:00 PM)</option>
                    <option value="afternoon">Afternoon (02:00 PM – 05:00 PM)</option>
                    <option value="evening">Evening (05:00 PM – 08:00 PM)</option>
                  </select>
                </div>
              </div>

              {/* Bar Council Compliance Notice */}
              <div className="p-3 rounded-lg bg-slate-900/80 border border-slate-800 text-[11px] text-slate-400 leading-relaxed flex items-start gap-2">
                <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                <span>
                  Consultation fees are agreed transparently beforehand with no hidden charges. Raoz Legal facilitates the appointment coordination without promising guaranteed outcomes.
                </span>
              </div>

              {/* Submit Buttons */}
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
                  Confirm Appointment Request
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
