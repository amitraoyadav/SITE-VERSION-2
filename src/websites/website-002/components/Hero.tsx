import React, { useState } from 'react';
import { 
  Search, 
  ArrowRight, 
  FileText, 
  CheckCircle2, 
  ShieldCheck, 
  Building2, 
  Scale, 
  Edit3, 
  Download 
} from 'lucide-react';
import { DOCUMENTS_CATALOG } from '../data/documentsCatalog';

interface HeroProps {
  onSearch: (query: string) => void;
  onOpenDocumentBuilder: (templateId?: string) => void;
  onOpenBusinessFormation: (entityType?: string) => void;
  onOpenPricing: () => void;
}

export function Hero({
  onSearch,
  onOpenDocumentBuilder,
  onOpenBusinessFormation,
  onOpenPricing,
}: HeroProps) {
  const [searchQuery, setSearchQuery] = useState('');

  const popularPills = [
    { label: 'Non-Disclosure Agreement (NDA)', id: 'mutual-nda' },
    { label: 'Residential Rent Agreement', id: 'residential-rental-agreement' },
    { label: 'Start a Pvt Ltd Company', type: 'business', id: 'pvt-ltd' },
    { label: 'Consultancy Agreement', id: 'consultancy-services-agreement' },
    { label: 'Last Will & Testament', id: 'last-will-testament' },
  ];

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      onSearch(searchQuery.trim());
    }
  };

  return (
    <section className="bg-[#FAF9F5] border-b border-[#E8E8E3] pt-12 pb-20 md:pt-16 md:pb-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Headline, Search, and Value Props */}
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#EAE8E1] text-xs font-semibold text-[#1D1C1A]">
              <span className="w-2 h-2 rounded-full bg-[#990000]"></span>
              <span>LEGAL MADE SIMPLE FOR INDIA</span>
            </div>

            <h1 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight text-[#1D1C1A] font-sans leading-[1.15]">
              Everything legal made easy.
            </h1>

            <p className="text-base sm:text-lg text-[#5D5B56] leading-relaxed max-w-xl">
              Create lawyer-crafted Indian contracts, sign online with AdvocateSign®, register your business with the MCA, and consult verified advocates whenever you need advice.
            </p>

            {/* Search Bar (Rocket Lawyer signature look) */}
            <form onSubmit={handleSearchSubmit} className="pt-2 max-w-xl">
              <div className="relative flex items-center bg-white border-2 border-[#1D1C1A] rounded-xl p-1.5 shadow-md focus-within:border-[#990000] focus-within:ring-2 focus-within:ring-[#990000]/20 transition-all">
                <Search className="w-5 h-5 text-neutral-400 ml-3.5 shrink-0" />
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search over 200+ Indian legal documents or questions..."
                  className="w-full bg-transparent border-none px-3.5 py-3 text-sm text-[#1D1C1A] placeholder-neutral-400 focus:outline-none font-medium"
                />
                <button
                  type="submit"
                  className="px-5 py-3 text-xs font-bold text-white bg-[#990000] hover:bg-[#7D0000] rounded-lg shrink-0 transition-all cursor-pointer flex items-center gap-1.5 shadow-xs"
                >
                  <span>Search</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </form>

            {/* Popular Pill Buttons */}
            <div className="pt-2 text-xs">
              <div className="text-[11px] font-semibold text-neutral-500 mb-2 uppercase font-mono tracking-wider">
                Popular in India:
              </div>
              <div className="flex flex-wrap gap-2">
                {popularPills.map((pill, i) => (
                  <button
                    key={i}
                    onClick={() => {
                      if (pill.type === 'business') {
                        onOpenBusinessFormation(pill.id);
                      } else {
                        onOpenDocumentBuilder(pill.id);
                      }
                    }}
                    className="px-3 py-1.5 rounded-full bg-white hover:bg-[#F5F5F0] border border-[#E8E8E3] hover:border-neutral-400 text-xs text-[#1D1C1A] font-medium transition-colors cursor-pointer shadow-2xs"
                  >
                    {pill.label}
                  </button>
                ))}
              </div>
            </div>

            {/* CTA action strip */}
            <div className="pt-4 flex flex-wrap items-center gap-4">
              <button
                onClick={onOpenPricing}
                className="px-6 py-3.5 text-xs font-bold text-white bg-[#990000] hover:bg-[#7D0000] rounded-lg shadow-md transition-all cursor-pointer"
              >
                Start your 7-day free trial
              </button>
              <button
                onClick={() => onOpenDocumentBuilder()}
                className="px-6 py-3.5 text-xs font-bold text-[#1D1C1A] hover:text-[#990000] bg-white border border-[#D5D4CE] rounded-lg hover:border-neutral-400 transition-colors cursor-pointer"
              >
                Create a document
              </button>
            </div>
          </div>

          {/* Right Column: Visual Document Preview Showcase Card */}
          <div className="lg:col-span-5">
            <div className="bg-white rounded-2xl border border-[#E8E8E3] shadow-xl p-6 relative overflow-hidden group">
              {/* Document top badge */}
              <div className="flex items-center justify-between border-b border-[#E8E8E3] pb-4 mb-4">
                <div className="flex items-center gap-2">
                  <div className="w-7 h-7 rounded bg-[#FDF2F2] text-[#990000] flex items-center justify-center font-bold text-xs">
                    <FileText className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-xs font-bold text-[#1D1C1A]">Mutual NDA (Non-Disclosure)</div>
                    <div className="text-[10px] text-neutral-500 font-mono">Indian Contract Act, 1872</div>
                  </div>
                </div>
                <span className="text-[10px] font-mono text-emerald-700 bg-emerald-50 border border-emerald-200 px-2 py-0.5 rounded font-semibold flex items-center gap-1">
                  <CheckCircle2 className="w-3 h-3 text-emerald-600" />
                  <span>Advocate Vetted</span>
                </span>
              </div>

              {/* Simulated Document Sheet Preview */}
              <div className="bg-[#FAF9F6] p-4 rounded-xl border border-[#EFEFEA] space-y-2.5 font-serif text-[11px] text-neutral-700 leading-relaxed">
                <p className="font-bold text-xs uppercase text-neutral-900 border-b border-neutral-300 pb-1">
                  MUTUAL NON-DISCLOSURE AND CONFIDENTIALITY AGREEMENT
                </p>
                <p>
                  THIS AGREEMENT is entered into between <span className="bg-amber-100/80 px-1 py-0.5 rounded font-sans font-semibold text-neutral-900">Apex Technologies Pvt Ltd</span> (Disclosing Party) and <span className="bg-amber-100/80 px-1 py-0.5 rounded font-sans font-semibold text-neutral-900">Rahul Verma</span> (Receiving Party)...
                </p>
                <div className="p-2.5 rounded bg-white border border-neutral-200 space-y-1 font-sans text-[10px] text-neutral-600">
                  <div className="flex justify-between">
                    <span>Confidentiality Term:</span>
                    <strong className="text-neutral-900">3 Years from execution</strong>
                  </div>
                  <div className="flex justify-between">
                    <span>Jurisdiction:</span>
                    <strong className="text-neutral-900">Courts of New Delhi, India</strong>
                  </div>
                </div>

                {/* E-Signature Stamp */}
                <div className="pt-2 flex items-center justify-between border-t border-dashed border-neutral-300">
                  <div className="text-[10px] text-neutral-500 font-sans">
                    <div>AdvocateSign® Digital Verification</div>
                    <div className="font-mono text-[9px] text-neutral-400">Timestamp: 2026-11-06 · Sec 3 IT Act</div>
                  </div>
                  <div className="w-16 h-7 rounded border border-emerald-400 bg-emerald-50 text-emerald-800 text-[10px] font-bold font-sans flex items-center justify-center">
                    ✓ SIGNED
                  </div>
                </div>
              </div>

              {/* Card Footer CTA */}
              <div className="mt-5 pt-4 border-t border-[#E8E8E3] flex items-center justify-between">
                <div className="text-[11px] text-neutral-500">
                  <span>5 mins to complete</span>
                </div>
                <button
                  onClick={() => onOpenDocumentBuilder('mutual-nda')}
                  className="px-4 py-2 text-xs font-bold text-white bg-[#1D1C1A] hover:bg-[#990000] rounded-lg transition-colors cursor-pointer flex items-center gap-1.5"
                >
                  <Edit3 className="w-3.5 h-3.5" />
                  <span>Customize Document</span>
                </button>
              </div>
            </div>

            {/* Micro social proof below card */}
            <div className="mt-4 flex items-center justify-between text-xs text-neutral-500 px-2 font-medium">
              <span className="flex items-center gap-1 text-neutral-700">
                <ShieldCheck className="w-4 h-4 text-emerald-600" />
                <span>Legally valid across all Indian States</span>
              </span>
              <span>4.8 ★★★★★ (500k+ docs)</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
