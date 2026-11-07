import React from 'react';
import { 
  ShieldCheck, 
  CheckCircle2, 
  AlertCircle, 
  FileText, 
  Phone, 
  ScrollText, 
  Lock, 
  Sparkles,
  ArrowRight
} from 'lucide-react';
import { PricingConfig } from '../../types/legal';

interface PricingSectionProps {
  pricingConfig: PricingConfig;
  onOpenEnquiry: (category?: string) => void;
  onOpenConsultation: () => void;
  onOpenAdmin: () => void;
}

export function PricingSection({
  pricingConfig,
  onOpenEnquiry,
  onOpenConsultation,
  onOpenAdmin,
}: PricingSectionProps) {
  return (
    <section id="pricing" className="py-20 bg-[#081424] border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 text-xs font-mono uppercase tracking-widest text-amber-400 mb-2 font-semibold">
            <ShieldCheck className="w-3.5 h-3.5" />
            <span>Ethical & Transparent Cost Framework</span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white font-serif tracking-tight">
            Transparent Pricing Structure
          </h2>
          <p className="text-xs sm:text-sm text-slate-300 mt-2 leading-relaxed">
            No hidden fees, no automatic credit debits, and no surprise invoices. Scope and quotations are confirmed with you prior to any payment.
          </p>
        </div>

        {/* Platform Administrative Fee vs Advocate Professional Fee Distinction Box */}
        <div className="mb-12 p-6 rounded-xl bg-gradient-to-r from-[#0d2138] to-[#0a1b2e] border border-amber-500/30 shadow-xl">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
            <div className="space-y-2 max-w-2xl">
              <span className="text-[10px] font-mono uppercase tracking-wider text-amber-400 font-semibold bg-amber-500/10 px-2 py-0.5 rounded border border-amber-500/20">
                Core Principle: Strict Two-Tier Separation
              </span>
              <h3 className="text-lg font-bold text-white font-serif">
                Platform Administrative Fee vs. Advocate Professional Fee
              </h3>
              <p className="text-xs text-slate-300 leading-relaxed">
                {pricingConfig.adminFeeDescription}
              </p>
              <p className="text-[11px] text-amber-200/80 leading-relaxed pt-1">
                {pricingConfig.advocateFeeDisclaimer}
              </p>
            </div>

            <div className="p-4 rounded-xl bg-slate-900 border border-slate-700/80 shrink-0 text-center sm:text-right min-w-[200px]">
              <div className="text-[11px] uppercase font-mono text-slate-400">
                Proposed Reference Admin Fee
              </div>
              <div className="text-3xl font-mono font-bold text-amber-400 mt-0.5">
                ₹{pricingConfig.referenceAdminFeePerHour}
                <span className="text-xs text-slate-400 font-sans font-normal"> / hour</span>
              </div>
              <div className="text-[10px] text-slate-500 font-mono mt-1">
                Coordination & Intake Only
              </div>
            </div>
          </div>
        </div>

        {/* 3 Service Pricing Estimation Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Card 1: Advocate Consultation */}
          <div className="p-6 rounded-xl border border-slate-800 bg-[#0b192c] flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs font-mono uppercase text-amber-400 font-semibold">
                  01. Consultation
                </span>
                <Phone className="w-4 h-4 text-slate-400" />
              </div>
              <h4 className="text-lg font-bold text-white font-serif mb-2">
                Advocate Consultation
              </h4>
              <p className="text-xs text-slate-300 leading-relaxed mb-6">
                Direct phone, video, or in-person advisory with an enrolled advocate for factual review, merit evaluation, and legal strategy.
              </p>

              <div className="p-4 rounded-lg bg-slate-900/60 border border-slate-800 mb-6 text-xs space-y-2">
                <div className="flex justify-between text-slate-400">
                  <span>Platform Fee:</span>
                  <span className="text-amber-400 font-mono font-bold">₹{pricingConfig.referenceAdminFeePerHour}/hr</span>
                </div>
                <div className="flex justify-between text-slate-400">
                  <span>Advocate Fee:</span>
                  <span className="text-white font-medium">As quoted prior to call</span>
                </div>
                <div className="text-[11px] text-slate-500 pt-1 border-t border-slate-800">
                  No fee deducted without prior client confirmation.
                </div>
              </div>

              <ul className="space-y-2 text-xs text-slate-300">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                  <span>30–60 minute dedicated session</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                  <span>Written key points summary</span>
                </li>
              </ul>
            </div>

            <button
              onClick={onOpenConsultation}
              className="mt-8 w-full py-2.5 text-xs font-bold text-slate-950 bg-amber-400 hover:bg-amber-300 rounded-lg transition-colors cursor-pointer"
            >
              Request Consultation Booking
            </button>
          </div>

          {/* Card 2: Legal Notice Drafting */}
          <div className="p-6 rounded-xl border border-amber-500/40 bg-[#0c1e33] flex flex-col justify-between shadow-lg shadow-amber-500/5">
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs font-mono uppercase text-amber-400 font-semibold">
                  02. Legal Notices
                </span>
                <FileText className="w-4 h-4 text-amber-400" />
              </div>
              <h4 className="text-lg font-bold text-white font-serif mb-2">
                Legal Notice Preparation & Reply
              </h4>
              <p className="text-xs text-slate-300 leading-relaxed mb-6">
                Comprehensive statutory notice or reply drafted and issued on official advocate letterhead with registered post dispatch.
              </p>

              <div className="p-4 rounded-lg bg-slate-900/80 border border-slate-700/80 mb-6 text-xs space-y-2">
                <div className="flex justify-between text-slate-400">
                  <span>Starting Benchmark:</span>
                  <span className="text-amber-400 font-mono font-bold">
                    {pricingConfig.isPublished ? `₹${pricingConfig.noticeDraftingStartingFee}` : 'Custom Case Quote'}
                  </span>
                </div>
                <div className="flex justify-between text-slate-400">
                  <span>Advocate Vetting:</span>
                  <span className="text-emerald-400 font-medium">Included 100%</span>
                </div>
                <div className="text-[11px] text-slate-400 pt-1 border-t border-slate-800">
                  Includes 1 round of client factual revisions.
                </div>
              </div>

              <ul className="space-y-2 text-xs text-slate-300">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                  <span>Custom advocate letterhead drafting</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                  <span>Speed Post / Regd Post dispatch proof</span>
                </li>
              </ul>
            </div>

            <button
              onClick={() => onOpenEnquiry('Legal Notice Assistance')}
              className="mt-8 w-full py-2.5 text-xs font-bold text-slate-950 bg-gradient-to-r from-amber-400 to-amber-500 hover:from-amber-300 hover:to-amber-400 rounded-lg transition-all cursor-pointer shadow-sm"
            >
              Get Notice Quotation
            </button>
          </div>

          {/* Card 3: Documentation & Agreements */}
          <div className="p-6 rounded-xl border border-slate-800 bg-[#0b192c] flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs font-mono uppercase text-amber-400 font-semibold">
                  03. Documentation
                </span>
                <ScrollText className="w-4 h-4 text-slate-400" />
              </div>
              <h4 className="text-lg font-bold text-white font-serif mb-2">
                Contracts & Deed Vetting
              </h4>
              <p className="text-xs text-slate-300 leading-relaxed mb-6">
                Custom drafting or clause-by-clause legal audit of sale deeds, wills, lease deeds, NDAs, or co-founder agreements.
              </p>

              <div className="p-4 rounded-lg bg-slate-900/60 border border-slate-800 mb-6 text-xs space-y-2">
                <div className="flex justify-between text-slate-400">
                  <span>Starting Benchmark:</span>
                  <span className="text-amber-400 font-mono font-bold">
                    {pricingConfig.isPublished ? `₹${pricingConfig.agreementDraftingStartingFee}` : 'Custom Case Quote'}
                  </span>
                </div>
                <div className="flex justify-between text-slate-400">
                  <span>Stamp Duty Advisory:</span>
                  <span className="text-white font-medium">Included</span>
                </div>
                <div className="text-[11px] text-slate-500 pt-1 border-t border-slate-800">
                  Drafted according to specific State registration acts.
                </div>
              </div>

              <ul className="space-y-2 text-xs text-slate-300">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                  <span>Editable word document + PDF output</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                  <span>Enforceability review under Contract Act</span>
                </li>
              </ul>
            </div>

            <button
              onClick={() => onOpenEnquiry('Documentation & Agreements')}
              className="mt-8 w-full py-2.5 text-xs font-bold text-slate-950 bg-amber-400 hover:bg-amber-300 rounded-lg transition-colors cursor-pointer"
            >
              Request Document Drafting
            </button>
          </div>
        </div>

        {/* Administration Compliance Guarantee */}
        <div className="mt-12 text-center text-xs text-slate-400 flex items-center justify-center gap-3">
          <span className="flex items-center gap-1.5">
            <Lock className="w-3.5 h-3.5 text-emerald-400" />
            <span>Encrypted payment processing (Razorpay / UPI upon manual confirmation)</span>
          </span>
          <span>·</span>
          <button
            onClick={onOpenAdmin}
            className="text-amber-400 hover:text-amber-300 underline underline-offset-4 cursor-pointer font-mono"
          >
            Manage Rates in Admin Portal
          </button>
        </div>
      </div>
    </section>
  );
}
