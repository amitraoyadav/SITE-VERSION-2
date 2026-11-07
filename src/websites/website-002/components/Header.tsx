import React, { useState } from 'react';
import { 
  ChevronDown, 
  Menu, 
  X, 
  Search, 
  FileText, 
  Building2, 
  HelpCircle, 
  Phone, 
  ShieldCheck, 
  User, 
  Check, 
  Scale 
} from 'lucide-react';
import { DocumentCategory } from '../types';

interface HeaderProps {
  onOpenDocumentBuilder: (templateId?: string) => void;
  onOpenBusinessFormation: (entityType?: string) => void;
  onOpenAskAdvocate: () => void;
  onOpenPricing: () => void;
  onOpenAccount: () => void;
  onOpenCategory: (category: DocumentCategory) => void;
  onNavigateHome: () => void;
  onBackToLibrary?: () => void;
}

export function Header({
  onOpenDocumentBuilder,
  onOpenBusinessFormation,
  onOpenAskAdvocate,
  onOpenPricing,
  onOpenAccount,
  onOpenCategory,
  onNavigateHome,
  onBackToLibrary,
}: HeaderProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  const toggleDropdown = (name: string) => {
    setActiveDropdown((prev) => (prev === name ? null : name));
  };

  const closeAll = () => {
    setActiveDropdown(null);
    setMobileMenuOpen(false);
  };

  return (
    <>
      {/* Top Banner (Optional return to Raoz Library or Support info) */}
      <div className="bg-[#1D1C1A] text-white text-xs py-1.5 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-3 text-[11px] text-neutral-300">
            <span className="flex items-center gap-1 text-white font-semibold">
              <span className="w-2 h-2 rounded-full bg-[#990000]"></span>
              <span>YOURADVOCATEE INDIA</span>
            </span>
            <span className="hidden md:inline text-neutral-500">|</span>
            <span className="hidden md:inline">
              Trusted legal documents, business incorporation & advocate network for India
            </span>
          </div>

          <div className="flex items-center gap-4 text-[11px]">
            {onBackToLibrary && (
              <button
                onClick={onBackToLibrary}
                className="text-amber-400 hover:text-amber-300 underline underline-offset-2 cursor-pointer font-mono"
              >
                ← Raoz Site Library III
              </button>
            )}
            <a
              href="tel:1800123456"
              className="text-neutral-300 hover:text-white flex items-center gap-1 transition-colors"
            >
              <Phone className="w-3 h-3 text-[#C8102E]" />
              <span className="font-mono">Toll-Free: 1800-123-4567</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Brand Navigation Header (Clean White / Charcoal / Red) */}
      <header className="sticky top-0 z-40 bg-white border-b border-[#E8E8E3] shadow-xs">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 h-18 flex items-center justify-between gap-6">
          {/* Brand Logo - Rocket Lawyer Inspired Geometric Wordmark */}
          <div
            onClick={onNavigateHome}
            className="flex items-center gap-2 cursor-pointer shrink-0"
          >
            <div className="flex items-center gap-1.5">
              {/* Stylized Advocate Icon Badge */}
              <div className="w-8 h-8 rounded-md bg-[#990000] flex items-center justify-center text-white shadow-xs">
                <Scale className="w-4 h-4" />
              </div>
              <span className="text-xl sm:text-2xl font-black tracking-tight text-[#1D1C1A] font-sans">
                YOUR<span className="text-[#990000]">ADVOCATEE</span>
              </span>
            </div>
          </div>

          {/* Center Navigation Links with Dropdowns */}
          <nav className="hidden lg:flex items-center gap-6 text-sm font-semibold text-[#1D1C1A]">
            {/* 1. Legal Documents */}
            <div className="relative">
              <button
                onClick={() => toggleDropdown('docs')}
                className="flex items-center gap-1 py-2 hover:text-[#990000] transition-colors cursor-pointer"
              >
                <span>Legal Documents</span>
                <ChevronDown className={`w-3.5 h-3.5 transition-transform ${activeDropdown === 'docs' ? 'rotate-180' : ''}`} />
              </button>

              {activeDropdown === 'docs' && (
                <div className="absolute top-full left-0 w-72 bg-white rounded-xl shadow-xl border border-[#E8E8E3] p-3 space-y-1 z-50">
                  <div className="text-[11px] font-mono text-neutral-400 px-3 py-1 uppercase tracking-wider">
                    Indian Document Templates
                  </div>
                  <button
                    onClick={() => { onOpenCategory('business'); closeAll(); }}
                    className="w-full text-left px-3 py-2 rounded-lg text-xs hover:bg-[#F5F5F0] text-neutral-800 font-medium flex items-center justify-between"
                  >
                    <span>Business Contracts & NDAs</span>
                    <span className="text-[10px] text-neutral-400">12 forms</span>
                  </button>
                  <button
                    onClick={() => { onOpenCategory('real-estate'); closeAll(); }}
                    className="w-full text-left px-3 py-2 rounded-lg text-xs hover:bg-[#F5F5F0] text-neutral-800 font-medium flex items-center justify-between"
                  >
                    <span>Real Estate & Rent Agreements</span>
                    <span className="text-[10px] text-neutral-400">8 forms</span>
                  </button>
                  <button
                    onClick={() => { onOpenCategory('personal-family'); closeAll(); }}
                    className="w-full text-left px-3 py-2 rounded-lg text-xs hover:bg-[#F5F5F0] text-neutral-800 font-medium flex items-center justify-between"
                  >
                    <span>Family, Wills & Powers of Attorney</span>
                    <span className="text-[10px] text-neutral-400">6 forms</span>
                  </button>
                  <button
                    onClick={() => { onOpenCategory('employment'); closeAll(); }}
                    className="w-full text-left px-3 py-2 rounded-lg text-xs hover:bg-[#F5F5F0] text-neutral-800 font-medium flex items-center justify-between"
                  >
                    <span>Employment & HR Letters</span>
                    <span className="text-[10px] text-neutral-400">9 forms</span>
                  </button>
                  <div className="pt-2 border-t border-[#E8E8E3]">
                    <button
                      onClick={() => { onOpenDocumentBuilder(); closeAll(); }}
                      className="w-full text-center py-2 text-xs font-bold text-[#990000] hover:bg-[#FDF2F2] rounded-lg transition-colors"
                    >
                      Browse All 200+ Indian Documents →
                    </button>
                  </div>
                </div>
              )}
            </div>

            {/* 2. Start a Business */}
            <div className="relative">
              <button
                onClick={() => toggleDropdown('business')}
                className="flex items-center gap-1 py-2 hover:text-[#990000] transition-colors cursor-pointer"
              >
                <span>Start a Business</span>
                <ChevronDown className={`w-3.5 h-3.5 transition-transform ${activeDropdown === 'business' ? 'rotate-180' : ''}`} />
              </button>

              {activeDropdown === 'business' && (
                <div className="absolute top-full left-0 w-80 bg-white rounded-xl shadow-xl border border-[#E8E8E3] p-3 space-y-1 z-50">
                  <div className="text-[11px] font-mono text-neutral-400 px-3 py-1 uppercase tracking-wider">
                    MCA Incorporation in India
                  </div>
                  <button
                    onClick={() => { onOpenBusinessFormation('pvt-ltd'); closeAll(); }}
                    className="w-full text-left px-3 py-2 rounded-lg text-xs hover:bg-[#F5F5F0] text-neutral-800 font-medium"
                  >
                    <div className="font-semibold text-neutral-900">Private Limited Company (Pvt Ltd)</div>
                    <div className="text-[11px] text-neutral-500">Most popular for funded startups</div>
                  </button>
                  <button
                    onClick={() => { onOpenBusinessFormation('llp'); closeAll(); }}
                    className="w-full text-left px-3 py-2 rounded-lg text-xs hover:bg-[#F5F5F0] text-neutral-800 font-medium"
                  >
                    <div className="font-semibold text-neutral-900">Limited Liability Partnership (LLP)</div>
                    <div className="text-[11px] text-neutral-500">Low annual maintenance & audit threshold</div>
                  </button>
                  <button
                    onClick={() => { onOpenBusinessFormation('opc'); closeAll(); }}
                    className="w-full text-left px-3 py-2 rounded-lg text-xs hover:bg-[#F5F5F0] text-neutral-800 font-medium"
                  >
                    <div className="font-semibold text-neutral-900">One Person Company (OPC)</div>
                    <div className="text-[11px] text-neutral-500">Full corporate status for solo founders</div>
                  </button>
                  <button
                    onClick={() => { onOpenBusinessFormation('sole-proprietorship'); closeAll(); }}
                    className="w-full text-left px-3 py-2 rounded-lg text-xs hover:bg-[#F5F5F0] text-neutral-800 font-medium"
                  >
                    <div className="font-semibold text-neutral-900">MSME Udyam & GST Registration</div>
                    <div className="text-[11px] text-neutral-500">Small business & freelancer setup</div>
                  </button>
                </div>
              )}
            </div>

            {/* 3. Ask an Advocate */}
            <div className="relative">
              <button
                onClick={() => toggleDropdown('advocate')}
                className="flex items-center gap-1 py-2 hover:text-[#990000] transition-colors cursor-pointer"
              >
                <span>Ask an Advocate</span>
                <ChevronDown className={`w-3.5 h-3.5 transition-transform ${activeDropdown === 'advocate' ? 'rotate-180' : ''}`} />
              </button>

              {activeDropdown === 'advocate' && (
                <div className="absolute top-full left-0 w-72 bg-white rounded-xl shadow-xl border border-[#E8E8E3] p-3 space-y-1 z-50">
                  <div className="text-[11px] font-mono text-neutral-400 px-3 py-1 uppercase tracking-wider">
                    Advocate Consultations
                  </div>
                  <button
                    onClick={() => { onOpenAskAdvocate(); closeAll(); }}
                    className="w-full text-left px-3 py-2 rounded-lg text-xs hover:bg-[#F5F5F0] text-neutral-800 font-medium"
                  >
                    <div className="font-semibold text-neutral-900">Ask a Legal Question</div>
                    <div className="text-[11px] text-neutral-500">Receive written response from advocate</div>
                  </button>
                  <button
                    onClick={() => { onOpenAskAdvocate(); closeAll(); }}
                    className="w-full text-left px-3 py-2 rounded-lg text-xs hover:bg-[#F5F5F0] text-neutral-800 font-medium"
                  >
                    <div className="font-semibold text-neutral-900">30-Min Live Legal Advice Session</div>
                    <div className="text-[11px] text-neutral-500">Confidential phone or video consultation</div>
                  </button>
                  <button
                    onClick={() => { onOpenAskAdvocate(); closeAll(); }}
                    className="w-full text-left px-3 py-2 rounded-lg text-xs hover:bg-[#F5F5F0] text-neutral-800 font-medium"
                  >
                    <div className="font-semibold text-neutral-900">Advocate Document Review</div>
                    <div className="text-[11px] text-neutral-500">Have an advocate review your contract draft</div>
                  </button>
                </div>
              )}
            </div>

            {/* 4. Pricing */}
            <button
              onClick={onOpenPricing}
              className="hover:text-[#990000] transition-colors cursor-pointer"
            >
              Pricing
            </button>
          </nav>

          {/* Right Action CTAs */}
          <div className="hidden sm:flex items-center gap-4 shrink-0">
            <button
              onClick={onOpenAccount}
              className="text-xs font-semibold text-[#1D1C1A] hover:text-[#990000] transition-colors cursor-pointer flex items-center gap-1.5"
            >
              <User className="w-3.5 h-3.5" />
              <span>Sign in</span>
            </button>

            {/* Signature Red CTA */}
            <button
              onClick={onOpenPricing}
              className="px-5 py-2.5 text-xs font-bold text-white bg-[#990000] hover:bg-[#7D0000] rounded-lg shadow-sm transition-all cursor-pointer whitespace-nowrap active:scale-95"
            >
              Start free trial
            </button>
          </div>

          {/* Mobile Hamburger */}
          <div className="flex lg:hidden items-center gap-2">
            <button
              onClick={onOpenPricing}
              className="px-3 py-1.5 text-xs font-bold text-white bg-[#990000] rounded-md sm:hidden"
            >
              Free trial
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-neutral-700 hover:text-neutral-950 rounded-lg hover:bg-neutral-100"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <div className="lg:hidden border-b border-[#E8E8E3] bg-white px-6 py-5 space-y-4 shadow-lg">
            <div className="flex flex-col space-y-3 text-sm font-semibold text-neutral-800">
              <button
                onClick={() => { onOpenCategory('business'); setMobileMenuOpen(false); }}
                className="text-left py-1"
              >
                Legal Documents (NDA, Rent, Agreements)
              </button>
              <button
                onClick={() => { onOpenBusinessFormation(); setMobileMenuOpen(false); }}
                className="text-left py-1"
              >
                Start a Business (Pvt Ltd, LLP, Trademark)
              </button>
              <button
                onClick={() => { onOpenAskAdvocate(); setMobileMenuOpen(false); }}
                className="text-left py-1"
              >
                Ask an Advocate (Advice & Reviews)
              </button>
              <button
                onClick={() => { onOpenPricing(); setMobileMenuOpen(false); }}
                className="text-left py-1"
              >
                Pricing & 7-Day Trial
              </button>
            </div>

            <div className="pt-4 border-t border-[#E8E8E3] flex flex-col gap-2">
              <button
                onClick={() => { onOpenPricing(); setMobileMenuOpen(false); }}
                className="w-full py-2.5 text-xs font-bold bg-[#990000] text-white rounded-lg text-center"
              >
                Start Free 7-Day Trial
              </button>
              <button
                onClick={() => { onOpenAccount(); setMobileMenuOpen(false); }}
                className="w-full py-2 text-xs font-semibold text-neutral-800 border border-neutral-300 rounded-lg text-center"
              >
                Sign In to Account
              </button>
            </div>
          </div>
        )}
      </header>
    </>
  );
}
