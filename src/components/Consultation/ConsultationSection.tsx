import React, { useState } from 'react';
import { 
  Phone, 
  Video, 
  MapPin, 
  Globe, 
  Clock, 
  ShieldCheck, 
  ArrowRight, 
  CheckCircle2, 
  Calendar 
} from 'lucide-react';
import { ConsultationMode } from '../../types/legal';
import { BookConsultationModal } from './BookConsultationModal';

export function ConsultationSection() {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedMode, setSelectedMode] = useState<ConsultationMode>('phone');

  const modes = [
    {
      id: 'phone' as ConsultationMode,
      title: 'Phone Consultation',
      badge: 'Quickest',
      desc: 'Discuss your legal dilemma over a direct confidential phone call with an advocate practicing in your jurisdiction.',
      features: ['Direct telephonic call', 'Flexible evening slots', 'Follow-up summary via WhatsApp'],
      icon: <Phone className="w-6 h-6 text-amber-400" />,
      idealFor: 'Immediate legal queries, police notices, first-look assessment',
    },
    {
      id: 'video' as ConsultationMode,
      title: 'Video Consultation',
      badge: 'Most Popular',
      desc: 'Face-to-face secure virtual meeting to share documents on screen, inspect contracts, and discuss complex disputes.',
      features: ['Screen document sharing', 'Private encrypted meeting room', 'Joint family / partner attendance'],
      icon: <Video className="w-6 h-6 text-amber-400" />,
      idealFor: 'Divorce counseling, property title papers, company contracts',
    },
    {
      id: 'in-person' as ConsultationMode,
      title: 'In-Person Chamber Meeting',
      badge: 'Chamber / Office',
      desc: 'Schedule a formal in-person meeting at an enrolled advocate’s office or court chamber in your designated city.',
      features: ['Physical document inspection', 'Court litigation planning', 'Vakalatnama signing'],
      icon: <MapPin className="w-6 h-6 text-amber-400" />,
      idealFor: 'Bail applications, civil trials, contested court representation',
    },
    {
      id: 'online' as ConsultationMode,
      title: 'Written Legal Advisory',
      badge: 'Documented',
      desc: 'Submit your query in writing and receive a structured written legal opinion citing relevant Indian case laws and statutory sections.',
      features: ['Documented legal opinion', 'Statute & section citations', 'Permanent written record'],
      icon: <Globe className="w-6 h-6 text-amber-400" />,
      idealFor: 'Commercial agreements, employment clauses, tax disputes',
    },
  ];

  const handleOpenBooking = (mode: ConsultationMode) => {
    setSelectedMode(mode);
    setModalOpen(true);
  };

  return (
    <section id="consultation" className="py-20 bg-[#081424] border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-14">
          <div>
            <div className="inline-flex items-center gap-1.5 text-xs font-mono uppercase tracking-widest text-amber-400 mb-2 font-semibold">
              <Calendar className="w-3.5 h-3.5" />
              <span>Advocate Consultation Options</span>
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white font-serif tracking-tight">
              Consult on Your Terms
            </h2>
            <p className="text-xs sm:text-sm text-slate-300 mt-2 max-w-2xl leading-relaxed">
              Connect with verified legal professionals through phone, video call, in-person chamber consultation, or written advisory. No unverified promises or hidden fees.
            </p>
          </div>

          <button
            onClick={() => handleOpenBooking('phone')}
            className="px-6 py-3.5 text-xs font-bold text-slate-950 bg-gradient-to-r from-amber-400 to-amber-500 hover:from-amber-300 hover:to-amber-400 rounded-lg shadow-lg shadow-amber-500/20 transition-all cursor-pointer whitespace-nowrap self-start md:self-auto"
          >
            <span>Book Legal Consultation</span>
          </button>
        </div>

        {/* 4 Consultation Modes Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {modes.map((m) => (
            <div
              key={m.id}
              onClick={() => handleOpenBooking(m.id)}
              className="p-6 rounded-xl border border-slate-800 bg-[#0b192c] hover:bg-[#0e213b] hover:border-amber-500/40 transition-all flex flex-col justify-between group cursor-pointer shadow-xs"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 rounded-xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-center">
                    {m.icon}
                  </div>
                  <span className="text-[10px] font-mono uppercase font-semibold text-amber-300 bg-amber-500/10 border border-amber-500/30 px-2 py-0.5 rounded-full">
                    {m.badge}
                  </span>
                </div>

                <h3 className="text-base font-bold text-white font-serif group-hover:text-amber-300 transition-colors">
                  {m.title}
                </h3>
                <p className="text-xs text-slate-300 mt-2 leading-relaxed">
                  {m.desc}
                </p>

                <div className="mt-4 pt-3 border-t border-slate-800/80 space-y-1.5">
                  {m.features.map((feat, i) => (
                    <div key={i} className="flex items-center gap-1.5 text-[11px] text-slate-400">
                      <CheckCircle2 className="w-3.5 h-3.5 text-amber-400/80 shrink-0" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>

                <div className="mt-4 p-2.5 rounded-lg bg-slate-900/60 text-[11px] text-slate-400 border border-slate-800/60">
                  <strong className="text-slate-300">Best for:</strong> {m.idealFor}
                </div>
              </div>

              <div className="mt-6 pt-3 border-t border-slate-800/80 flex items-center justify-between">
                <span className="text-[11px] font-mono text-slate-400">Verified Counsel</span>
                <span className="text-xs font-semibold text-amber-400 group-hover:text-amber-300 flex items-center gap-1">
                  <span>Schedule</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Regulatory Disclosure Box */}
        <div className="mt-12 p-4 rounded-xl bg-slate-900/40 border border-slate-800 text-xs text-slate-400 leading-relaxed flex items-start gap-3">
          <ShieldCheck className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
          <div>
            <strong className="text-white">Strict Professional Integrity:</strong> Raoz Legal does not rank advocates, accept payment for search placement, or guarantee legal verdicts. All consultations are rendered by independent advocates enrolled with State Bar Councils in accordance with the Advocates Act, 1961.
          </div>
        </div>
      </div>

      <BookConsultationModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        defaultMode={selectedMode}
        onSuccess={() => {}}
      />
    </section>
  );
}
