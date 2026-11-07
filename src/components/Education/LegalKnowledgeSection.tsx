import React, { useState } from 'react';
import { 
  BookOpen, 
  Clock, 
  ArrowRight, 
  Scale, 
  HelpCircle, 
  Search, 
  AlertTriangle 
} from 'lucide-react';
import { EDUCATIONAL_GUIDES } from '../../data/educational';
import { EducationalGuide } from '../../types/legal';
import { EducationalArticleModal } from './EducationalArticleModal';

interface LegalKnowledgeSectionProps {
  onOpenEnquiry: (category: string) => void;
}

export function LegalKnowledgeSection({ onOpenEnquiry }: LegalKnowledgeSectionProps) {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [selectedGuide, setSelectedGuide] = useState<EducationalGuide | null>(null);
  const [searchQuery, setSearchQuery] = useState('');

  const categories = ['all', 'Criminal Law', 'Property Law', 'Divorce & Family', 'Legal Notice Guides', 'Cyber Crime', 'Banking & Financial'];

  const filteredGuides = EDUCATIONAL_GUIDES.filter((g) => {
    if (selectedCategory !== 'all' && g.category !== selectedCategory) return false;
    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase();
      return (
        g.title.toLowerCase().includes(q) ||
        g.summary.toLowerCase().includes(q) ||
        g.legalProvisions.some((lp) => lp.toLowerCase().includes(q))
      );
    }
    return true;
  });

  return (
    <section id="knowledge" className="py-20 bg-[#0b192c] border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Section Heading */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12">
          <div>
            <div className="inline-flex items-center gap-1.5 text-xs font-mono uppercase tracking-widest text-amber-400 mb-2 font-semibold">
              <BookOpen className="w-3.5 h-3.5" />
              <span>Public Legal Literacy</span>
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white font-serif tracking-tight">
              Legal Knowledge & Statutory Guides
            </h2>
            <p className="text-xs sm:text-sm text-slate-300 mt-2 max-w-2xl leading-relaxed">
              Clear, plain-language educational articles explaining Indian laws, statutory notice limitation periods, criminal codes (BNS/BNSS), and citizen rights.
            </p>
          </div>

          <div className="text-right">
            <span className="text-[11px] font-mono text-slate-400 bg-slate-900 px-3 py-1.5 rounded-lg border border-slate-800">
              General Information · Not Legal Advice
            </span>
          </div>
        </div>

        {/* Filter Categories Chips */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 scrollbar-none mb-8">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-3 py-1.5 rounded-lg text-xs font-medium whitespace-nowrap transition-colors cursor-pointer border ${
                selectedCategory === cat
                  ? 'bg-amber-400 text-slate-950 border-amber-400 font-semibold'
                  : 'bg-slate-900/60 text-slate-300 border-slate-800 hover:text-white hover:border-slate-700'
              }`}
            >
              {cat === 'all' ? 'All Guides' : cat}
            </button>
          ))}
        </div>

        {/* Guides Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredGuides.map((guide) => (
            <div
              key={guide.id}
              onClick={() => setSelectedGuide(guide)}
              className="p-6 rounded-xl border border-slate-800 bg-[#0e213b]/60 hover:bg-[#0e213b] hover:border-amber-500/40 transition-all flex flex-col justify-between group cursor-pointer shadow-xs"
            >
              <div>
                <div className="flex items-center justify-between text-xs mb-3 font-mono">
                  <span className="text-amber-400 font-semibold bg-amber-500/10 px-2 py-0.5 rounded border border-amber-500/20 text-[10px]">
                    {guide.category}
                  </span>
                  <span className="text-slate-400 flex items-center gap-1 text-[11px]">
                    <Clock className="w-3 h-3" />
                    {guide.readingTime}
                  </span>
                </div>

                <h3 className="text-base font-bold text-white font-serif group-hover:text-amber-300 transition-colors leading-snug">
                  {guide.title}
                </h3>

                <p className="text-xs text-slate-300 mt-2 line-clamp-3 leading-relaxed">
                  {guide.summary}
                </p>

                {/* Key Takeaway snippet */}
                <div className="mt-4 pt-3 border-t border-slate-800/80 text-[11px] text-slate-400">
                  <span className="text-slate-300 font-semibold">Key Rule:</span>{' '}
                  <span className="text-slate-400 truncate block mt-0.5">
                    {guide.keyTakeaways[0]}
                  </span>
                </div>
              </div>

              <div className="mt-6 pt-3 border-t border-slate-800/80 flex items-center justify-between">
                <span className="text-[11px] font-mono text-slate-500">
                  {guide.legalProvisions[0].slice(0, 24)}...
                </span>
                <span className="text-xs font-semibold text-amber-400 group-hover:text-amber-300 flex items-center gap-1">
                  <span>Read Guide</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      <EducationalArticleModal
        guide={selectedGuide}
        onClose={() => setSelectedGuide(null)}
        onOpenEnquiry={(cat) => onOpenEnquiry(cat)}
      />
    </section>
  );
}
