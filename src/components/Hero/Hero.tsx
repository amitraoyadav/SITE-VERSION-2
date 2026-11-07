import React, { useState } from 'react';
import { 
  Search, 
  ArrowRight, 
  ShieldCheck, 
  Clock, 
  Languages, 
  Lock, 
  HelpCircle,
  FileCheck2,
  Users
} from 'lucide-react';

interface HeroProps {
  onSearch: (query: string) => void;
  onOpenEnquiry: (prefilledIssue?: string) => void;
  onOpenConsultation: () => void;
  onSelectServiceQuery: (query: string) => void;
}

export function Hero({
  onSearch,
  onOpenEnquiry,
  onOpenConsultation,
  onSelectServiceQuery,
}: HeroProps) {
  const [searchInput, setSearchInput] = useState('');

  const suggestedQueries = [
    'I want to send a legal notice.',
    'I have received a legal notice.',
    'I need a criminal lawyer.',
    'I have a property dispute.',
    'I want to file a divorce.',
    'Someone has committed fraud against me.',
    'I need help with a cybercrime complaint.',
  ];

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchInput.trim()) {
      onSearch(searchInput.trim());
      onSelectServiceQuery(searchInput.trim());
    }
  };

  const handleChipClick = (query: string) => {
    setSearchInput(query);
    onSelectServiceQuery(query);
  };

  return (
    <section className="relative pt-12 pb-20 md:pt-20 md:pb-28 overflow-hidden bg-[#0b192c]">
      {/* Background Graphic with scrim overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center opacity-15 pointer-events-none mix-blend-luminosity"
        style={{ backgroundImage: `url('/assets/reference/legal-hero-bg.jpg')` }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-[#0b192c]/90 via-[#0b192c]/95 to-[#0b192c] pointer-events-none" />

      {/* Decorative Gold Glow subtle accent */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-amber-500/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        <div className="max-w-3xl mx-auto text-center space-y-6">
          {/* Tagline Badge */}
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-800/80 border border-slate-700/80 text-xs text-amber-300 font-medium">
            <span className="w-2 h-2 rounded-full bg-amber-400"></span>
            <span>Legal Help Made Simple. Support When You Need It.</span>
          </div>

          {/* Main Heading */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white font-serif leading-tight">
            Need Legal Help? Let&apos;s Find the Right Way Forward.
          </h1>

          {/* Subheading */}
          <p className="text-base sm:text-lg text-slate-300 leading-relaxed font-sans max-w-2xl mx-auto">
            Get assistance for legal questions, documentation, notices, disputes and advocate consultations. Explain your problem in simple Hindi or English and find the right legal support.
          </p>

          {/* Prominent Search Bar */}
          <form onSubmit={handleSearchSubmit} className="pt-2 max-w-2xl mx-auto">
            <div className="relative flex items-center bg-slate-900/90 border border-slate-700 hover:border-amber-500/60 rounded-xl p-1.5 shadow-xl transition-all focus-within:border-amber-400 focus-within:ring-2 focus-within:ring-amber-400/20">
              <Search className="w-5 h-5 text-slate-400 ml-3.5 shrink-0" />
              <input
                type="text"
                value={searchInput}
                onChange={(e) => setSearchInput(e.target.value)}
                placeholder="What legal help do you need today? (e.g., Send notice, Divorce, Cheque bounce...)"
                className="w-full bg-transparent border-none px-3.5 py-3 text-sm text-white placeholder-slate-400 focus:outline-none"
              />
              <button
                type="submit"
                className="px-5 py-3 text-xs font-semibold text-slate-950 bg-gradient-to-r from-amber-400 to-amber-500 hover:from-amber-300 hover:to-amber-400 rounded-lg shrink-0 transition-all cursor-pointer flex items-center gap-1.5 shadow-sm"
              >
                <span>Find Help</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </form>

          {/* Suggested Search Queries / Prompts */}
          <div className="pt-2 text-left max-w-2xl mx-auto">
            <div className="text-[11px] font-medium text-slate-400 mb-2 flex items-center gap-1.5">
              <HelpCircle className="w-3 h-3 text-amber-400" />
              <span>Common legal requests (click to explore):</span>
            </div>
            <div className="flex flex-wrap gap-1.5">
              {suggestedQueries.map((query, idx) => (
                <button
                  key={idx}
                  type="button"
                  onClick={() => handleChipClick(query)}
                  className="px-2.5 py-1 rounded-md bg-slate-800/70 hover:bg-slate-800 border border-slate-700/70 hover:border-amber-500/40 text-[11px] text-slate-300 hover:text-white transition-colors cursor-pointer text-left"
                >
                  {query}
                </button>
              ))}
            </div>
          </div>

          {/* Primary Action Buttons */}
          <div className="pt-6 flex flex-wrap items-center justify-center gap-4">
            <button
              onClick={() => onOpenEnquiry()}
              className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-lg bg-gradient-to-r from-amber-400 to-amber-500 hover:from-amber-300 hover:to-amber-400 text-slate-950 font-bold text-sm tracking-wide transition-all shadow-lg shadow-amber-500/20 cursor-pointer"
            >
              <span>GET LEGAL HELP</span>
              <ArrowRight className="w-4 h-4" />
            </button>
            <button
              onClick={onOpenConsultation}
              className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-lg bg-slate-800/90 hover:bg-slate-700/90 border border-slate-700 text-slate-100 font-semibold text-sm transition-colors cursor-pointer"
            >
              <Users className="w-4 h-4 text-amber-400" />
              <span>FIND AN ADVOCATE</span>
            </button>
          </div>
        </div>

        {/* Trust Badges Strip */}
        <div className="mt-16 pt-10 border-t border-slate-800/80 grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
          <div className="flex items-center gap-3 p-3 rounded-lg bg-slate-900/40 border border-slate-800/60">
            <div className="w-9 h-9 rounded-lg bg-amber-500/10 text-amber-400 flex items-center justify-center shrink-0">
              <Lock className="w-4 h-4" />
            </div>
            <div>
              <div className="text-xs font-semibold text-white">100% Confidential</div>
              <div className="text-[11px] text-slate-400">Encrypted client intake</div>
            </div>
          </div>

          <div className="flex items-center gap-3 p-3 rounded-lg bg-slate-900/40 border border-slate-800/60">
            <div className="w-9 h-9 rounded-lg bg-amber-500/10 text-amber-400 flex items-center justify-center shrink-0">
              <ShieldCheck className="w-4 h-4" />
            </div>
            <div>
              <div className="text-xs font-semibold text-white">Verified Advocates</div>
              <div className="text-[11px] text-slate-400">State Bar Council enrolled</div>
            </div>
          </div>

          <div className="flex items-center gap-3 p-3 rounded-lg bg-slate-900/40 border border-slate-800/60">
            <div className="w-9 h-9 rounded-lg bg-amber-500/10 text-amber-400 flex items-center justify-center shrink-0">
              <Languages className="w-4 h-4" />
            </div>
            <div>
              <div className="text-xs font-semibold text-white">Hindi & English</div>
              <div className="text-[11px] text-slate-400">Simple plain language</div>
            </div>
          </div>

          <div className="flex items-center gap-3 p-3 rounded-lg bg-slate-900/40 border border-slate-800/60">
            <div className="w-9 h-9 rounded-lg bg-amber-500/10 text-amber-400 flex items-center justify-center shrink-0">
              <FileCheck2 className="w-4 h-4" />
            </div>
            <div>
              <div className="text-xs font-semibold text-white">No Hidden Fees</div>
              <div className="text-[11px] text-slate-400">Transparent cost model</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
