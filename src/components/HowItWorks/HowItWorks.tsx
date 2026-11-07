import React from 'react';
import { MessageSquareText, ShieldCheck, UserCheck, ArrowRight, CheckCircle2 } from 'lucide-react';

interface HowItWorksProps {
  onOpenEnquiry: () => void;
}

export function HowItWorks({ onOpenEnquiry }: HowItWorksProps) {
  const steps = [
    {
      number: '01',
      title: 'Explain Your Legal Problem',
      desc: 'Describe your issue in your own words using simple Hindi or English. You do not need to know legal sections or technical jargon.',
      icon: <MessageSquareText className="w-6 h-6 text-amber-400" />,
      subpoints: ['Simple voice/text inputs', 'Upload docs safely (optional)', 'Complete confidentiality'],
    },
    {
      number: '02',
      title: 'Submit Your Enquiry & Details',
      desc: 'Provide your city, state, and preferred consultation mode. Receive an instant unique tracking reference number (RZL-XXXXX).',
      icon: <ShieldCheck className="w-6 h-6 text-amber-400" />,
      subpoints: ['Zero public disclosure', 'DPDPA 2023 compliant data safety', 'Instant SMS/WhatsApp receipt'],
    },
    {
      number: '03',
      title: 'Receive Assistance Through an Advocate',
      desc: 'Your matter is routed to an appropriately qualified, verified advocate enrolled with the relevant State Bar Council for advice, notice drafting, or representation.',
      icon: <UserCheck className="w-6 h-6 text-amber-400" />,
      subpoints: ['Verified Bar Council credentials', 'Phone, Video, or In-Person', 'Transparent fixed pricing'],
    },
  ];

  return (
    <section className="py-20 bg-[#0b192c] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 text-xs font-mono uppercase tracking-widest text-amber-400 mb-2 font-semibold">
            <span>Simple 3-Step Process</span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white font-serif tracking-tight">
            How Raoz Legal Works
          </h2>
          <p className="text-xs sm:text-sm text-slate-300 mt-2 leading-relaxed">
            We bridge the gap between ordinary citizens facing complex disputes and verified legal professionals across India.
          </p>
        </div>

        {/* 3 Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
          {steps.map((step, idx) => (
            <div
              key={idx}
              className="p-6 sm:p-7 rounded-xl border border-slate-800 bg-[#0e213b]/60 hover:bg-[#0e213b] transition-all flex flex-col justify-between relative group"
            >
              <div>
                <div className="flex items-center justify-between mb-6">
                  <div className="w-12 h-12 rounded-xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-center">
                    {step.icon}
                  </div>
                  <span className="text-3xl font-mono font-bold text-slate-700 group-hover:text-amber-400/40 transition-colors">
                    {step.number}
                  </span>
                </div>

                <h3 className="text-lg font-bold text-white font-serif mb-2">
                  {step.title}
                </h3>
                <p className="text-xs text-slate-300 leading-relaxed mb-6">
                  {step.desc}
                </p>

                <div className="space-y-2 pt-4 border-t border-slate-800">
                  {step.subpoints.map((pt, i) => (
                    <div key={i} className="flex items-center gap-2 text-[11px] text-slate-400">
                      <CheckCircle2 className="w-3.5 h-3.5 text-amber-400/80 shrink-0" />
                      <span>{pt}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-8 pt-4 border-t border-slate-800/80">
                <span className="text-[11px] font-mono text-amber-400 font-semibold uppercase tracking-wider">
                  Step {idx + 1} of 3
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Banner */}
        <div className="mt-14 p-6 sm:p-8 rounded-xl bg-gradient-to-r from-[#102a4a] to-[#0d2038] border border-amber-500/30 flex flex-col sm:flex-row sm:items-center justify-between gap-6 shadow-xl">
          <div>
            <h4 className="text-lg font-bold text-white font-serif">Ready to take the first step?</h4>
            <p className="text-xs text-slate-300 mt-1 max-w-xl leading-relaxed">
              Submitting an enquiry takes less than 2 minutes. Explain your situation and find clarity on your statutory options.
            </p>
          </div>
          <button
            onClick={onOpenEnquiry}
            className="px-6 py-3 text-xs font-bold text-slate-950 bg-gradient-to-r from-amber-400 to-amber-500 hover:from-amber-300 hover:to-amber-400 rounded-lg shrink-0 transition-all shadow-md shadow-amber-500/20 cursor-pointer flex items-center justify-center gap-2"
          >
            <span>Start Legal Help Enquiry</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </section>
  );
}
