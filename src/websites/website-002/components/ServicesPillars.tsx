import React from 'react';
import { 
  FileCheck2, 
  Building2, 
  Scale, 
  Sparkles, 
  ArrowRight, 
  Check, 
  PenTool, 
  ShieldCheck 
} from 'lucide-react';

interface ServicesPillarsProps {
  onOpenDocumentBuilder: (templateId?: string) => void;
  onOpenBusinessFormation: (entityType?: string) => void;
  onOpenAskAdvocate: () => void;
  onOpenPricing: () => void;
}

export function ServicesPillars({
  onOpenDocumentBuilder,
  onOpenBusinessFormation,
  onOpenAskAdvocate,
  onOpenPricing,
}: ServicesPillarsProps) {
  const pillars = [
    {
      id: 'docs',
      icon: <FileCheck2 className="w-6 h-6 text-[#990000]" />,
      title: 'Make & Sign Legal Documents',
      tagline: 'Create binding Indian legal documents in minutes',
      description: 'Choose from 200+ lawyer-crafted Indian contract templates. Customize by answering simple questions, then sign digitally with AdvocateSign®.',
      bullets: [
        'NDAs, rental agreements, wills & contractor contracts',
        'Valid under Indian Contract Act & Registration Acts',
        'Legally binding e-signatures under IT Act 2000',
      ],
      ctaText: 'Browse Legal Documents',
      onClick: () => onOpenDocumentBuilder(),
    },
    {
      id: 'incorporation',
      icon: <Building2 className="w-6 h-6 text-[#990000]" />,
      title: 'Start a Business in India',
      tagline: 'Incorporate your company with MCA in 7–10 days',
      description: 'We handle the entire incorporation process: DSC, DIN, name reservation, MOA & AOA drafting, PAN, TAN, and bank account setup.',
      bullets: [
        'Private Limited, LLP, OPC & MSME Udyam setup',
        'SPICe+ MCA filing with expert compliance guidance',
        'Free 1-year corporate compliance advisory',
      ],
      ctaText: 'Start Your Business',
      onClick: () => onOpenBusinessFormation(),
    },
    {
      id: 'advocate',
      icon: <Scale className="w-6 h-6 text-[#990000]" />,
      title: 'Ask an Advocate',
      tagline: 'On-demand legal guidance from enrolled advocates',
      description: 'Get your legal questions answered by verified advocates. Book 30-minute confidential phone or video consultations whenever legal questions arise.',
      bullets: [
        'Verified State Bar Council enrolled advocates',
        'Contract review and legal risk assessment',
        'FREE 30-min consultation with Premium Membership',
      ],
      ctaText: 'Ask a Legal Question',
      onClick: () => onOpenAskAdvocate(),
    },
    {
      id: 'copilot',
      icon: <Sparkles className="w-6 h-6 text-[#990000]" />,
      title: 'Advocate Copilot (AI Legal Guide)',
      tagline: 'Instant plain-language legal answers 24/7',
      description: 'Translate legal jargon into plain English or Hindi. Summarize lengthy agreements and detect ambiguous clauses before you sign.',
      bullets: [
        'Plain-language contract clause breakdowns',
        'Indian statutory section references (BNS, RERA, NI 138)',
        'Instant answers backed by advocate review options',
      ],
      ctaText: 'Try Free Trial',
      onClick: () => onOpenPricing(),
    },
  ];

  return (
    <section className="py-20 bg-white border-b border-[#E8E8E3]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="text-xs font-mono font-bold text-[#990000] uppercase tracking-widest mb-2">
            THE YOURADVOCATEE PLATFORM
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-[#1D1C1A] font-sans tracking-tight">
            A full suite of legal services for you and your business
          </h2>
          <p className="text-sm text-[#5D5B56] mt-3 leading-relaxed">
            From your first commercial contract to company incorporation and ongoing dispute advisory, YOURADVOCATEE has you covered.
          </p>
        </div>

        {/* 4 Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {pillars.map((pillar) => (
            <div
              key={pillar.id}
              className="p-6 rounded-2xl border border-[#E8E8E3] bg-[#FAF9F5] hover:bg-white hover:border-[#990000]/40 hover:shadow-xl transition-all flex flex-col justify-between group"
            >
              <div>
                <div className="w-12 h-12 rounded-xl bg-white border border-[#E8E8E3] flex items-center justify-center mb-5 group-hover:scale-105 transition-transform">
                  {pillar.icon}
                </div>

                <h3 className="text-lg font-bold text-[#1D1C1A] mb-1">
                  {pillar.title}
                </h3>
                <div className="text-xs font-semibold text-[#990000] mb-3">
                  {pillar.tagline}
                </div>
                <p className="text-xs text-[#5D5B56] leading-relaxed mb-5">
                  {pillar.description}
                </p>

                <div className="space-y-2 pt-4 border-t border-[#E8E8E3]">
                  {pillar.bullets.map((b, idx) => (
                    <div key={idx} className="flex items-start gap-2 text-xs text-[#1D1C1A]">
                      <Check className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                      <span>{b}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-6 mt-6 border-t border-[#E8E8E3]">
                <button
                  onClick={pillar.onClick}
                  className="w-full py-2.5 px-3 rounded-lg text-xs font-bold text-[#1D1C1A] group-hover:text-white bg-white group-hover:bg-[#990000] border border-[#D5D4CE] group-hover:border-[#990000] transition-all flex items-center justify-center gap-1.5 cursor-pointer shadow-2xs"
                >
                  <span>{pillar.ctaText}</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
