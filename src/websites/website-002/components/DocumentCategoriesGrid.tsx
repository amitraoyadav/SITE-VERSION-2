import React from 'react';
import { 
  FileText, 
  Home, 
  Users, 
  Briefcase, 
  ArrowRight, 
  ShieldCheck, 
  CheckCircle2 
} from 'lucide-react';
import { DOCUMENTS_CATALOG } from '../data/documentsCatalog';
import { DocumentCategory } from '../types';

interface DocumentCategoriesGridProps {
  onOpenDocumentBuilder: (templateId?: string) => void;
  onSelectCategory?: (category: DocumentCategory) => void;
}

export function DocumentCategoriesGrid({
  onOpenDocumentBuilder,
}: DocumentCategoriesGridProps) {
  const categories = [
    {
      id: 'business' as DocumentCategory,
      title: 'Business & Commercial',
      icon: <Briefcase className="w-5 h-5 text-[#990000]" />,
      desc: 'Protect confidential data, formalize vendor terms, and structure partnerships.',
      popular: [
        { name: 'Mutual NDA (Non-Disclosure)', id: 'mutual-nda' },
        { name: 'Consultancy & Service Agreement', id: 'consultancy-services-agreement' },
        { name: 'Co-Founders Agreement', id: 'consultancy-services-agreement' },
        { name: 'Vendor Supply Contract', id: 'consultancy-services-agreement' },
      ],
      count: '45+ Templates',
    },
    {
      id: 'real-estate' as DocumentCategory,
      title: 'Real Estate & Tenancy',
      icon: <Home className="w-5 h-5 text-[#990000]" />,
      desc: 'Standardized agreements compliant with State Rent Control Acts and Model Tenancy Act.',
      popular: [
        { name: 'Residential Rental Agreement', id: 'residential-rental-agreement' },
        { name: 'Commercial Lease Deed', id: 'residential-rental-agreement' },
        { name: 'Leave and License Agreement', id: 'residential-rental-agreement' },
        { name: 'Eviction Notice', id: 'residential-rental-agreement' },
      ],
      count: '30+ Templates',
    },
    {
      id: 'personal-family' as DocumentCategory,
      title: 'Personal & Family Legal',
      icon: <Users className="w-5 h-5 text-[#990000]" />,
      desc: 'Protect loved ones, designate powers of attorney, and plan estate succession.',
      popular: [
        { name: 'Last Will & Testament', id: 'last-will-testament' },
        { name: 'General Power of Attorney (GPA)', id: 'last-will-testament' },
        { name: 'Special Power of Attorney (SPA)', id: 'last-will-testament' },
        { name: 'Affidavit for Name Change', id: 'last-will-testament' },
      ],
      count: '25+ Templates',
    },
    {
      id: 'employment' as DocumentCategory,
      title: 'Employment & Human Resources',
      icon: <FileText className="w-5 h-5 text-[#990000]" />,
      desc: 'Hire compliant employees and contractors under Indian Labour & Industrial Codes.',
      popular: [
        { name: 'Employment Offer Letter & Contract', id: 'employment-offer-letter' },
        { name: 'Independent Contractor Agreement', id: 'consultancy-services-agreement' },
        { name: 'Employee Non-Compete Agreement', id: 'mutual-nda' },
        { name: 'Relieving & Experience Letter', id: 'employment-offer-letter' },
      ],
      count: '35+ Templates',
    },
  ];

  return (
    <section className="py-20 bg-[#FAF9F5] border-b border-[#E8E8E3]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <div className="text-xs font-mono font-bold text-[#990000] uppercase tracking-widest mb-1.5">
              INDIAN LEGAL DOCUMENT TEMPLATES
            </div>
            <h2 className="text-2xl sm:text-3xl font-black text-[#1D1C1A] font-sans tracking-tight">
              Create enforceable documents tailored to Indian law
            </h2>
            <p className="text-sm text-[#5D5B56] mt-2 max-w-xl">
              All documents are updated to conform to current Indian statutes, including the Indian Contract Act, Transfer of Property Act, and BNS reforms.
            </p>
          </div>

          <button
            onClick={() => onOpenDocumentBuilder()}
            className="px-5 py-2.5 text-xs font-bold text-[#1D1C1A] hover:text-white bg-white hover:bg-[#1D1C1A] border border-[#D5D4CE] rounded-lg transition-colors flex items-center gap-1.5 self-start md:self-auto cursor-pointer shadow-2xs"
          >
            <span>View All Documents</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((cat) => (
            <div
              key={cat.id}
              className="bg-white rounded-2xl border border-[#E8E8E3] p-6 shadow-xs hover:shadow-md transition-shadow flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="w-10 h-10 rounded-xl bg-[#FAF9F5] border border-[#E8E8E3] flex items-center justify-center">
                    {cat.icon}
                  </div>
                  <span className="text-[11px] font-mono text-neutral-400 bg-neutral-100 px-2 py-0.5 rounded">
                    {cat.count}
                  </span>
                </div>

                <h3 className="text-base font-bold text-[#1D1C1A] mb-1.5">
                  {cat.title}
                </h3>
                <p className="text-xs text-[#5D5B56] leading-relaxed mb-4">
                  {cat.desc}
                </p>

                <div className="space-y-2 border-t border-[#E8E8E3] pt-4">
                  <div className="text-[10px] uppercase font-mono font-bold text-neutral-400">
                    Most Requested:
                  </div>
                  {cat.popular.map((item, idx) => (
                    <button
                      key={idx}
                      onClick={() => onOpenDocumentBuilder(item.id)}
                      className="w-full text-left text-xs text-[#1D1C1A] hover:text-[#990000] font-medium py-1 flex items-center justify-between group cursor-pointer"
                    >
                      <span className="truncate pr-2">{item.name}</span>
                      <ArrowRight className="w-3 h-3 text-neutral-300 group-hover:text-[#990000] shrink-0 transition-transform group-hover:translate-x-0.5" />
                    </button>
                  ))}
                </div>
              </div>

              <div className="pt-5 mt-5 border-t border-[#E8E8E3]">
                <button
                  onClick={() => onOpenDocumentBuilder()}
                  className="w-full py-2 text-xs font-bold text-[#990000] hover:bg-[#FDF2F2] rounded-lg transition-colors text-center cursor-pointer"
                >
                  Explore {cat.title} →
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
