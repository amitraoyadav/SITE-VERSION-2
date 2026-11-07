import React, { useState } from 'react';
import { 
  ShieldAlert, 
  Users, 
  Home, 
  FileText, 
  Terminal, 
  ShoppingBag, 
  CreditCard, 
  Scale, 
  Briefcase, 
  Building2, 
  Landmark, 
  ScrollText, 
  Car, 
  HeartHandshake, 
  Plane,
  ArrowRight,
  Search,
  CheckCircle2,
  Sparkles
} from 'lucide-react';
import { POPULAR_LEGAL_SERVICES } from '../../data/legalServices';
import { LegalServiceItem } from '../../types/legal';
import { ServiceDetailModal } from './ServiceDetailModal';

interface ServicesGridProps {
  onOpenEnquiry: (prefilledCategory?: string) => void;
  activeFilterQuery?: string;
}

export function ServicesGrid({ onOpenEnquiry, activeFilterQuery = '' }: ServicesGridProps) {
  const [searchFilter, setSearchFilter] = useState('');
  const [selectedService, setSelectedService] = useState<LegalServiceItem | null>(null);

  // Icon mapper helper
  const renderIcon = (iconName: string) => {
    const props = { className: 'w-5 h-5 text-amber-400' };
    switch (iconName) {
      case 'ShieldAlert': return <ShieldAlert {...props} />;
      case 'Users': return <Users {...props} />;
      case 'Home': return <Home {...props} />;
      case 'FileText': return <FileText {...props} />;
      case 'Terminal': return <Terminal {...props} />;
      case 'ShoppingBag': return <ShoppingBag {...props} />;
      case 'CreditCard': return <CreditCard {...props} />;
      case 'Scale': return <Scale {...props} />;
      case 'Briefcase': return <Briefcase {...props} />;
      case 'Building2': return <Building2 {...props} />;
      case 'Landmark': return <Landmark {...props} />;
      case 'ScrollText': return <ScrollText {...props} />;
      case 'Car': return <Car {...props} />;
      case 'HeartHandshake': return <HeartHandshake {...props} />;
      case 'Plane': return <Plane {...props} />;
      default: return <Scale {...props} />;
    }
  };

  const effectiveQuery = (activeFilterQuery || searchFilter).toLowerCase().trim();

  const filteredServices = POPULAR_LEGAL_SERVICES.filter((svc) => {
    if (!effectiveQuery) return true;
    return (
      svc.title.toLowerCase().includes(effectiveQuery) ||
      svc.shortDesc.toLowerCase().includes(effectiveQuery) ||
      svc.popularIssues.some((issue) => issue.toLowerCase().includes(effectiveQuery)) ||
      svc.applicableLaws.some((law) => law.toLowerCase().includes(effectiveQuery))
    );
  });

  return (
    <section id="services" className="py-20 bg-[#081424] border-t border-b border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12">
          <div>
            <div className="inline-flex items-center gap-1.5 text-xs font-mono uppercase tracking-widest text-amber-400 mb-2 font-semibold">
              <Scale className="w-3.5 h-3.5" />
              <span>Practice Areas Across India</span>
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white font-serif tracking-tight">
              Popular Legal Services
            </h2>
            <p className="text-xs sm:text-sm text-slate-400 mt-2 max-w-2xl leading-relaxed">
              Explore dedicated legal assistance across civil, criminal, marital, property, cyber, and business disputes. Every matter is evaluated by an appropriate advocate.
            </p>
          </div>

          {/* Quick filter input */}
          <div className="w-full md:w-72 relative">
            <input
              type="text"
              value={searchFilter}
              onChange={(e) => setSearchFilter(e.target.value)}
              placeholder="Filter by issue or law..."
              className="w-full bg-slate-900 border border-slate-700 rounded-lg pl-9 pr-3.5 py-2 text-xs text-white placeholder-slate-400 focus:outline-none focus:border-amber-400"
            />
            <Search className="w-3.5 h-3.5 text-slate-400 absolute left-3 top-2.5 pointer-events-none" />
            {searchFilter && (
              <button
                onClick={() => setSearchFilter('')}
                className="absolute right-2.5 top-2 text-xs text-slate-400 hover:text-white"
              >
                Clear
              </button>
            )}
          </div>
        </div>

        {/* 15 Service Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {filteredServices.map((service, idx) => (
            <div
              key={service.id}
              onClick={() => setSelectedService(service)}
              className="p-5 rounded-xl border border-slate-800 bg-[#0b192c]/90 hover:bg-[#0e213b] hover:border-amber-500/40 transition-all flex flex-col justify-between group cursor-pointer shadow-sm"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="w-10 h-10 rounded-lg bg-amber-500/10 border border-amber-500/20 flex items-center justify-center group-hover:scale-105 transition-transform">
                    {renderIcon(service.iconName)}
                  </div>
                  {service.badge && (
                    <span className="text-[10px] font-mono uppercase tracking-wider font-semibold text-amber-300 bg-amber-500/10 border border-amber-500/30 px-2 py-0.5 rounded-full">
                      {service.badge}
                    </span>
                  )}
                </div>

                <h3 className="text-base font-bold text-white font-serif group-hover:text-amber-300 transition-colors">
                  {idx + 1}. {service.title}
                </h3>

                <p className="text-xs text-slate-300 mt-2 leading-relaxed">
                  {service.shortDesc}
                </p>

                {/* Popular bullet items preview */}
                <div className="mt-4 pt-3 border-t border-slate-800/80 space-y-1">
                  {service.popularIssues.slice(0, 2).map((issue, i) => (
                    <div key={i} className="flex items-center gap-1.5 text-[11px] text-slate-400">
                      <span className="w-1 h-1 rounded-full bg-amber-400"></span>
                      <span className="truncate">{issue}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Card Footer Actions */}
              <div className="mt-5 pt-3 border-t border-slate-800/80 flex items-center justify-between">
                <span className="text-[11px] font-mono text-slate-400">
                  {service.turnaroundTime.split('in')[1] || '24-48h'}
                </span>
                <span className="text-xs font-semibold text-amber-400 group-hover:text-amber-300 flex items-center gap-1">
                  <span>Enquire Now</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
                </span>
              </div>
            </div>
          ))}
        </div>

        {filteredServices.length === 0 && (
          <div className="p-12 text-center border border-dashed border-slate-800 rounded-xl bg-slate-900/30 max-w-md mx-auto">
            <p className="text-sm text-slate-400">No legal service matching &quot;{effectiveQuery}&quot;.</p>
            <button
              onClick={() => onOpenEnquiry(effectiveQuery)}
              className="mt-4 px-4 py-2 text-xs font-semibold bg-amber-400 text-slate-950 rounded-lg hover:bg-amber-300 transition-colors"
            >
              Submit Custom Legal Query
            </button>
          </div>
        )}
      </div>

      {/* Service Detail Modal */}
      <ServiceDetailModal
        service={selectedService}
        onClose={() => setSelectedService(null)}
        onEnquireNow={(title) => onOpenEnquiry(title)}
      />
    </section>
  );
}
