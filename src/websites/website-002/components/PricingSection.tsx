import React, { useState } from 'react';
import { Check, ShieldCheck, HelpCircle, ArrowRight, Sparkles } from 'lucide-react';
import { MEMBERSHIP_PLANS } from '../data/pricingPlans';
import { MembershipPlan } from '../types';

interface PricingSectionProps {
  onSelectPlan: (plan: MembershipPlan, billingCycle: 'monthly' | 'annual') => void;
}

export function PricingSection({ onSelectPlan }: PricingSectionProps) {
  const [billingCycle, setBillingCycle] = useState<'monthly' | 'annual'>('monthly');

  return (
    <section id="pricing" className="py-24 bg-[#FAF9F5] border-b border-[#E8E8E3]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#EAE8E1] text-xs font-semibold text-[#1D1C1A] mb-3">
            <Sparkles className="w-3.5 h-3.5 text-[#990000]" />
            <span>TRANSPARENT INDIAN PRICING</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-[#1D1C1A] font-sans tracking-tight">
            Simple legal memberships. Serious peace of mind.
          </h2>
          <p className="text-sm text-[#5D5B56] mt-3">
            Save thousands in traditional advocate retainer fees. Cancel anytime with a single click.
          </p>

          {/* Billing Switcher */}
          <div className="mt-8 inline-flex items-center p-1 bg-white border border-[#E8E8E3] rounded-xl shadow-xs">
            <button
              onClick={() => setBillingCycle('monthly')}
              className={`px-4 py-2 text-xs font-bold rounded-lg transition-all cursor-pointer ${
                billingCycle === 'monthly'
                  ? 'bg-[#1D1C1A] text-white shadow-xs'
                  : 'text-neutral-600 hover:text-neutral-900'
              }`}
            >
              Billed Monthly
            </button>
            <button
              onClick={() => setBillingCycle('annual')}
              className={`px-4 py-2 text-xs font-bold rounded-lg transition-all cursor-pointer flex items-center gap-1.5 ${
                billingCycle === 'annual'
                  ? 'bg-[#1D1C1A] text-white shadow-xs'
                  : 'text-neutral-600 hover:text-neutral-900'
              }`}
            >
              <span>Annual Billing</span>
              <span className="text-[10px] bg-emerald-100 text-emerald-800 font-extrabold px-1.5 py-0.5 rounded">
                Save 33%
              </span>
            </button>
          </div>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
          {MEMBERSHIP_PLANS.map((plan) => {
            const price = billingCycle === 'annual' ? plan.annualPricePerMonth : plan.monthlyPrice;
            return (
              <div
                key={plan.id}
                className={`rounded-2xl p-8 flex flex-col justify-between transition-all relative ${
                  plan.isPopular
                    ? 'bg-white border-2 border-[#990000] shadow-xl scale-[1.02] z-10'
                    : 'bg-white border border-[#E8E8E3] shadow-xs hover:shadow-md'
                }`}
              >
                {plan.isPopular && (
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-[#990000] text-white text-[11px] font-bold uppercase tracking-wider px-3.5 py-1 rounded-full shadow-sm">
                    Most Popular Choice
                  </div>
                )}

                <div>
                  <div className="text-lg font-bold text-[#1D1C1A] mb-1">
                    {plan.name}
                  </div>
                  <p className="text-xs text-[#5D5B56] leading-relaxed min-h-[36px] mb-6">
                    {plan.tagline}
                  </p>

                  {/* Price */}
                  <div className="mb-6 pb-6 border-b border-[#E8E8E3]">
                    <div className="flex items-baseline gap-1">
                      <span className="text-3xl sm:text-4xl font-black text-[#1D1C1A] font-sans">
                        ₹{price.toLocaleString('en-IN')}
                      </span>
                      <span className="text-xs font-semibold text-neutral-500">
                        {price === 0 ? 'for 7 days' : '/ month'}
                      </span>
                    </div>
                    {billingCycle === 'annual' && price > 0 && (
                      <div className="text-[11px] text-emerald-600 font-semibold mt-1">
                        Billed annually (₹{(price * 12).toLocaleString('en-IN')}/year)
                      </div>
                    )}
                  </div>

                  {/* Feature list */}
                  <div className="space-y-3 mb-8">
                    <div className="text-[10px] uppercase font-mono font-bold text-neutral-400">
                      What's Included:
                    </div>
                    {plan.features.map((feature, idx) => (
                      <div key={idx} className="flex items-start gap-2.5 text-xs text-[#1D1C1A]">
                        <Check className="w-4 h-4 text-[#990000] shrink-0 mt-0.5" />
                        <span className="leading-snug">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-6 border-t border-[#E8E8E3]">
                  <button
                    onClick={() => onSelectPlan(plan, billingCycle)}
                    className={`w-full py-3 px-4 rounded-xl text-xs font-bold transition-all cursor-pointer flex items-center justify-center gap-2 shadow-xs active:scale-98 ${
                      plan.isPopular
                        ? 'bg-[#990000] hover:bg-[#7D0000] text-white'
                        : 'bg-[#1D1C1A] hover:bg-neutral-800 text-white'
                    }`}
                  >
                    <span>{plan.ctaLabel}</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                  <div className="text-center text-[10px] text-neutral-400 mt-2.5 font-medium">
                    No hidden commitments · GST invoice available
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* 100% Satisfaction Guarantee Strip */}
        <div className="mt-16 bg-white rounded-2xl border border-[#E8E8E3] p-6 max-w-3xl mx-auto flex flex-col sm:flex-row items-center gap-4 text-center sm:text-left">
          <div className="w-12 h-12 rounded-xl bg-emerald-50 text-emerald-700 flex items-center justify-center shrink-0 border border-emerald-200">
            <ShieldCheck className="w-6 h-6" />
          </div>
          <div className="flex-1">
            <div className="text-sm font-bold text-[#1D1C1A]">
              100% Legal Satisfaction & Money-Back Guarantee
            </div>
            <div className="text-xs text-[#5D5B56] mt-0.5">
              If your customized document is not legally valid for your situation, or if you are not fully satisfied during your 7-day trial, cancel with one click for a complete refund.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
