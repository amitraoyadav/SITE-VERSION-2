import React from 'react';
import { Scale, Phone, Mail, ShieldCheck, ArrowRight } from 'lucide-react';
import { DocumentCategory } from '../types';

interface FooterProps {
  onOpenDocumentBuilder: (templateId?: string) => void;
  onOpenBusinessFormation: (entityType?: string) => void;
  onOpenAskAdvocate: () => void;
  onOpenPricing: () => void;
  onOpenCategory: (category: DocumentCategory) => void;
  onBackToLibrary?: () => void;
}

export function Footer({
  onOpenDocumentBuilder,
  onOpenBusinessFormation,
  onOpenAskAdvocate,
  onOpenPricing,
  onOpenCategory,
  onBackToLibrary,
}: FooterProps) {
  return (
    <footer className="bg-[#1D1C1A] text-white pt-16 pb-12 border-t border-neutral-800 font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Top CTA Banner */}
        <div className="bg-[#2B2A27] rounded-2xl p-8 mb-16 border border-neutral-700 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="max-w-xl text-center md:text-left">
            <div className="text-xs font-mono font-bold text-[#FF6B6B] uppercase tracking-wider mb-1">
              READY TO PROTECT YOUR VENTURE OR ASSETS?
            </div>
            <h3 className="text-xl sm:text-2xl font-black text-white">
              Start your 7-day free trial on YOURADVOCATEE today.
            </h3>
            <p className="text-xs text-neutral-300 mt-2">
              Create enforceable Indian legal contracts, incorporate your company with MCA, and access on-demand advocate advice.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3 shrink-0">
            <button
              onClick={onOpenPricing}
              className="px-6 py-3 text-xs font-bold text-white bg-[#990000] hover:bg-[#7D0000] rounded-xl shadow-md transition-all cursor-pointer"
            >
              Start 7-Day Free Trial
            </button>
            <button
              onClick={() => onOpenDocumentBuilder()}
              className="px-5 py-3 text-xs font-bold text-white bg-transparent hover:bg-white/10 border border-neutral-500 rounded-xl transition-colors cursor-pointer"
            >
              Create a Document
            </button>
          </div>
        </div>

        {/* 4-Column Directory Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8 mb-12 text-xs">
          {/* Col 1: Brand Info */}
          <div className="col-span-2 lg:col-span-2 space-y-4">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-[#990000] flex items-center justify-center text-white">
                <Scale className="w-4 h-4" />
              </div>
              <span className="text-xl font-black tracking-tight text-white">
                YOUR<span className="text-[#FF6B6B]">ADVOCATEE</span>
              </span>
            </div>

            <p className="text-neutral-400 text-xs leading-relaxed max-w-sm">
              YOURADVOCATEE is India's leading self-service legal technology platform. We make law accessible, affordable, and actionable for individuals, startups, and enterprises across all 28 states and 8 union territories.
            </p>

            <div className="space-y-1 text-xs text-neutral-300 pt-2 font-mono">
              <div className="flex items-center gap-2">
                <Phone className="w-3.5 h-3.5 text-[#FF6B6B]" />
                <span>Toll-Free (India): 1800-123-4567</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-3.5 h-3.5 text-[#FF6B6B]" />
                <span>support@youradvocatee.in</span>
              </div>
            </div>

            {onBackToLibrary && (
              <div className="pt-2">
                <button
                  onClick={onBackToLibrary}
                  className="text-amber-400 hover:text-amber-300 text-xs font-mono underline underline-offset-2 cursor-pointer"
                >
                  ← Return to Raoz Site Library III Dashboard
                </button>
              </div>
            )}
          </div>

          {/* Col 2: Legal Documents */}
          <div className="space-y-3">
            <div className="font-bold text-white uppercase text-[11px] font-mono tracking-wider">
              Legal Documents
            </div>
            <ul className="space-y-2 text-neutral-400">
              <li>
                <button
                  onClick={() => onOpenDocumentBuilder('mutual-nda')}
                  className="hover:text-white transition-colors cursor-pointer text-left"
                >
                  Non-Disclosure Agreement (NDA)
                </button>
              </li>
              <li>
                <button
                  onClick={() => onOpenDocumentBuilder('residential-rental-agreement')}
                  className="hover:text-white transition-colors cursor-pointer text-left"
                >
                  Residential Rental Agreement
                </button>
              </li>
              <li>
                <button
                  onClick={() => onOpenDocumentBuilder('consultancy-services-agreement')}
                  className="hover:text-white transition-colors cursor-pointer text-left"
                >
                  Consultancy & Service Agreement
                </button>
              </li>
              <li>
                <button
                  onClick={() => onOpenDocumentBuilder('last-will-testament')}
                  className="hover:text-white transition-colors cursor-pointer text-left"
                >
                  Last Will and Testament
                </button>
              </li>
              <li>
                <button
                  onClick={() => onOpenDocumentBuilder('employment-offer-letter')}
                  className="hover:text-white transition-colors cursor-pointer text-left"
                >
                  Employment Offer Letter
                </button>
              </li>
              <li>
                <button
                  onClick={() => onOpenDocumentBuilder()}
                  className="text-[#FF6B6B] hover:underline font-semibold"
                >
                  See all 200+ templates →
                </button>
              </li>
            </ul>
          </div>

          {/* Col 3: Start a Business */}
          <div className="space-y-3">
            <div className="font-bold text-white uppercase text-[11px] font-mono tracking-wider">
              Start a Business
            </div>
            <ul className="space-y-2 text-neutral-400">
              <li>
                <button
                  onClick={() => onOpenBusinessFormation('pvt-ltd')}
                  className="hover:text-white transition-colors cursor-pointer text-left"
                >
                  Private Limited Company (Pvt Ltd)
                </button>
              </li>
              <li>
                <button
                  onClick={() => onOpenBusinessFormation('llp')}
                  className="hover:text-white transition-colors cursor-pointer text-left"
                >
                  Limited Liability Partnership (LLP)
                </button>
              </li>
              <li>
                <button
                  onClick={() => onOpenBusinessFormation('opc')}
                  className="hover:text-white transition-colors cursor-pointer text-left"
                >
                  One Person Company (OPC)
                </button>
              </li>
              <li>
                <button
                  onClick={() => onOpenBusinessFormation('sole-proprietorship')}
                  className="hover:text-white transition-colors cursor-pointer text-left"
                >
                  MSME Udyam Registration
                </button>
              </li>
              <li>
                <button
                  onClick={() => onOpenBusinessFormation('pvt-ltd')}
                  className="hover:text-white transition-colors cursor-pointer text-left"
                >
                  Trademark (TM) Filing
                </button>
              </li>
              <li>
                <button
                  onClick={() => onOpenBusinessFormation('pvt-ltd')}
                  className="hover:text-white transition-colors cursor-pointer text-left"
                >
                  GST & PAN/TAN Registration
                </button>
              </li>
            </ul>
          </div>

          {/* Col 4: Advocate Network */}
          <div className="space-y-3">
            <div className="font-bold text-white uppercase text-[11px] font-mono tracking-wider">
              Advocate Network
            </div>
            <ul className="space-y-2 text-neutral-400">
              <li>
                <button
                  onClick={onOpenAskAdvocate}
                  className="hover:text-white transition-colors cursor-pointer text-left"
                >
                  Ask a Legal Question
                </button>
              </li>
              <li>
                <button
                  onClick={onOpenAskAdvocate}
                  className="hover:text-white transition-colors cursor-pointer text-left"
                >
                  30-Min Phone Consultation
                </button>
              </li>
              <li>
                <button
                  onClick={onOpenAskAdvocate}
                  className="hover:text-white transition-colors cursor-pointer text-left"
                >
                  Advocate Contract Review
                </button>
              </li>
              <li>
                <button
                  onClick={onOpenPricing}
                  className="hover:text-white transition-colors cursor-pointer text-left"
                >
                  Advocate On Call Membership
                </button>
              </li>
              <li>
                <button
                  onClick={onOpenPricing}
                  className="hover:text-white transition-colors cursor-pointer text-left"
                >
                  Pricing & 7-Day Free Trial
                </button>
              </li>
            </ul>
          </div>
        </div>

        {/* Indian Statutory Compliance & Bar Council Disclaimer */}
        <div className="border-t border-neutral-800 pt-8 pb-4 text-[11px] text-neutral-500 leading-relaxed space-y-3">
          <p>
            <strong>Statutory Compliance Disclaimer:</strong> YOURADVOCATEE provides automated software and self-help legal document generation at the direction of users. YOURADVOCATEE is not a law firm, does not act as your legal attorney, and does not provide legal representation. Use of this service does not establish an advocate-client relationship. Under the Advocates Act, 1961 and the Bar Council of India (BCI) Rules, practicing advocates in India are prohibited from soliciting or advertising. Consultations requested on this platform are conducted by independent, registered advocates enrolled with State Bar Councils across India.
          </p>
          <p>
            Digital documents signed through AdvocateSign® strictly comply with Sections 3 and 4 of the Information Technology Act, 2000 and Section 65B of the Indian Evidence Act (Bharatiya Sakshya Adhiniyam, 2023) for legal validity and admissibility.
          </p>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-neutral-800 pt-6 mt-4 flex flex-col sm:flex-row items-center justify-between text-xs text-neutral-500 gap-4">
          <div>
            © 2026 YOURADVOCATEE Technologies India Pvt. Ltd. All rights reserved.
          </div>
          <div className="flex items-center gap-6">
            <span className="hover:text-neutral-400 cursor-pointer">Terms of Service</span>
            <span className="hover:text-neutral-400 cursor-pointer">Privacy Policy</span>
            <span className="hover:text-neutral-400 cursor-pointer">IT Act Compliance</span>
            <span className="hover:text-neutral-400 cursor-pointer">State Stamp Acts</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
