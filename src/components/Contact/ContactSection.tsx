import React, { useState } from 'react';
import { 
  Phone, 
  Mail, 
  MessageCircle, 
  Clock, 
  MapPin, 
  Check, 
  Send, 
  ShieldCheck 
} from 'lucide-react';

interface ContactSectionProps {
  onOpenEnquiry: () => void;
}

export function ContactSection({ onOpenEnquiry }: ContactSectionProps) {
  const [name, setName] = useState('');
  const [mobile, setMobile] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');
  const [sentAcknowledgment, setSentAcknowledgment] = useState<string | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !mobile || !message) {
      alert('Please fill in your name, mobile, and message.');
      return;
    }

    const ackId = `MSG-${Date.now().toString().slice(-6)}`;
    setSentAcknowledgment(ackId);
    setName('');
    setMobile('');
    setSubject('');
    setMessage('');
  };

  const openWhatsApp = () => {
    const text = encodeURIComponent(
      'Hello Raoz Legal, I need legal assistance regarding a legal dispute / notice. Please guide me on consultation steps.'
    );
    window.open(`https://wa.me/919876543210?text=${text}`, '_blank');
  };

  return (
    <section id="contact" className="py-20 bg-[#091526] border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 text-xs font-mono uppercase tracking-widest text-amber-400 mb-2 font-semibold">
            <Mail className="w-3.5 h-3.5" />
            <span>Connect with Legal Coordination</span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white font-serif tracking-tight">
            Contact & Communication
          </h2>
          <p className="text-xs sm:text-sm text-slate-300 mt-2 leading-relaxed">
            Have a question about our platform, advocate onboarding, or enquiry status? Connect with our dedicated support team via phone, email, or WhatsApp.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Left: Contact Channels Card */}
          <div className="lg:col-span-5 space-y-4">
            {/* WhatsApp Quick Connect */}
            <div className="p-6 rounded-xl border border-emerald-500/30 bg-[#0c2236] space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-xs font-mono uppercase tracking-wider text-emerald-400 font-semibold flex items-center gap-1.5">
                  <MessageCircle className="w-4 h-4 text-emerald-400" />
                  <span>Instant WhatsApp Support</span>
                </span>
                <span className="text-[10px] font-mono bg-emerald-500/20 text-emerald-300 px-2 py-0.5 rounded">
                  Live
                </span>
              </div>
              <h4 className="text-base font-bold text-white font-serif">
                Direct WhatsApp Helpline
              </h4>
              <p className="text-xs text-slate-300 leading-relaxed">
                Connect directly with a case coordinator on WhatsApp for quick guidance on notice formats and appointment scheduling.
              </p>
              <button
                type="button"
                onClick={openWhatsApp}
                className="w-full py-2.5 px-4 rounded-lg bg-emerald-600 hover:bg-emerald-500 text-white font-semibold text-xs transition-colors flex items-center justify-center gap-2 cursor-pointer shadow-sm"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Chat on WhatsApp</span>
              </button>
            </div>

            {/* Helpline & Email */}
            <div className="p-6 rounded-xl border border-slate-800 bg-slate-900/60 space-y-4 text-xs">
              <div className="flex items-start gap-3">
                <div className="w-9 h-9 rounded-lg bg-slate-800 flex items-center justify-center text-amber-400 shrink-0">
                  <Phone className="w-4 h-4" />
                </div>
                <div>
                  <div className="font-semibold text-white">Central Telephone Desk</div>
                  <div className="font-mono text-slate-300 mt-0.5">+91 (011) 4892-0000 / 01</div>
                  <div className="text-[11px] text-slate-500 mt-0.5">Toll-free coordination across India</div>
                </div>
              </div>

              <div className="flex items-start gap-3 pt-3 border-t border-slate-800">
                <div className="w-9 h-9 rounded-lg bg-slate-800 flex items-center justify-center text-amber-400 shrink-0">
                  <Mail className="w-4 h-4" />
                </div>
                <div>
                  <div className="font-semibold text-white">Email Communications</div>
                  <div className="font-mono text-slate-300 mt-0.5">support@raozlegal.in</div>
                  <div className="text-[11px] text-slate-500 mt-0.5">Institutional queries: contact@raozlegal.in</div>
                </div>
              </div>

              <div className="flex items-start gap-3 pt-3 border-t border-slate-800">
                <div className="w-9 h-9 rounded-lg bg-slate-800 flex items-center justify-center text-amber-400 shrink-0">
                  <Clock className="w-4 h-4" />
                </div>
                <div>
                  <div className="font-semibold text-white">Operating Hours</div>
                  <div className="text-slate-300 mt-0.5">Monday – Saturday: 09:30 AM – 07:00 PM IST</div>
                  <div className="text-[11px] text-slate-500 mt-0.5">Urgent bail requests handled 24/7</div>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Contact Message Form */}
          <div className="lg:col-span-7 p-6 sm:p-8 rounded-xl border border-slate-800 bg-[#0b192c]">
            <h3 className="text-lg font-bold text-white font-serif mb-1">
              Send a Message or Query
            </h3>
            <p className="text-xs text-slate-400 mb-6">
              Receive a formal acknowledgment ticket within minutes.
            </p>

            {sentAcknowledgment && (
              <div className="mb-6 p-4 rounded-xl bg-emerald-950/60 border border-emerald-800 text-xs text-emerald-300 flex items-start gap-3">
                <Check className="w-5 h-5 shrink-0 mt-0.5 text-emerald-400" />
                <div>
                  <div className="font-bold">Message Received Successfully!</div>
                  <div className="mt-1">
                    Your inquiry ticket reference is{' '}
                    <strong className="font-mono text-white">{sentAcknowledgment}</strong>. A representative will contact your mobile shortly.
                  </div>
                </div>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-4 text-xs">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-medium text-slate-300 mb-1">
                    Full Name <span className="text-red-400">*</span>
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Enter your name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full bg-slate-900 border border-slate-700 rounded-lg px-3 py-2 text-white focus:outline-none focus:border-amber-400"
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
                    value={mobile}
                    onChange={(e) => setMobile(e.target.value)}
                    className="w-full bg-slate-900 border border-slate-700 rounded-lg px-3 py-2 text-white focus:outline-none focus:border-amber-400"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-medium text-slate-300 mb-1">Subject</label>
                <input
                  type="text"
                  placeholder="e.g. Enquiry status, Advocate onboarding, Notice clarification"
                  value={subject}
                  onChange={(e) => setSubject(e.target.value)}
                  className="w-full bg-slate-900 border border-slate-700 rounded-lg px-3 py-2 text-white focus:outline-none focus:border-amber-400"
                />
              </div>

              <div>
                <label className="block text-xs font-medium text-slate-300 mb-1">
                  Message <span className="text-red-400">*</span>
                </label>
                <textarea
                  rows={4}
                  required
                  placeholder="Write your query or message..."
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  className="w-full bg-slate-900 border border-slate-700 rounded-lg p-3 text-white focus:outline-none focus:border-amber-400 resize-none font-mono"
                />
              </div>

              <div className="pt-2 flex items-center justify-between">
                <span className="text-[11px] text-slate-500 font-mono">
                  Guaranteed confidential processing
                </span>
                <button
                  type="submit"
                  className="px-6 py-2.5 text-xs font-bold text-slate-950 bg-amber-400 hover:bg-amber-300 rounded-lg transition-colors cursor-pointer flex items-center gap-1.5 shadow-sm"
                >
                  <Send className="w-3.5 h-3.5" />
                  <span>Send Inquiry</span>
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
