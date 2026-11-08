import React, { useState } from 'react';
import { Phone, ChevronDown, Menu, X, Globe, ArrowLeft } from 'lucide-react';
import { LEGAL_SERVICES_DATA } from '../data/vakeelSaabData';

export type PageRoute =
  | 'home'
  | 'about'
  | 'services'
  | 'service-detail'
  | 'how-we-work'
  | 'legal-guide'
  | 'register-lawyer'
  | 'register-business'
  | 'document-store'
  | 'reviews'
  | 'contact'
  | 'privacy'
  | 'terms';

interface NavbarProps {
  currentPage: PageRoute;
  onNavigate: (page: PageRoute, serviceId?: string) => void;
  onOpenCallModal: (prefilledIssue?: string) => void;
  language: 'en' | 'hi';
  onToggleLanguage: (lang: 'en' | 'hi') => void;
  onBackToLibrary?: () => void;
}

export function Navbar({
  currentPage,
  onNavigate,
  onOpenCallModal,
  language,
  onToggleLanguage,
  onBackToLibrary
}: NavbarProps) {
  const [servicesMenuOpen, setServicesMenuOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const [langMenuOpen, setLangMenuOpen] = useState(false);

  const col1 = LEGAL_SERVICES_DATA.slice(0, 6);
  const col2 = LEGAL_SERVICES_DATA.slice(6, 12);
  const col3 = LEGAL_SERVICES_DATA.slice(12, 18);

  return (
    <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-slate-200/80 shadow-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-18 gap-4">
          {/* Left: Brand Logo */}
          <div className="flex items-center gap-3 shrink-0">
            {onBackToLibrary && (
              <button
                onClick={onBackToLibrary}
                className="inline-flex items-center gap-1 px-2.5 py-1.5 rounded-lg bg-slate-100 hover:bg-slate-200 text-[#172B54] text-xs font-semibold transition-colors cursor-pointer"
                title="Back to RAOZ SITE Library III"
              >
                <ArrowLeft className="w-3.5 h-3.5" />
                <span className="hidden sm:inline">Library</span>
              </button>
            )}
            <button
              onClick={() => onNavigate('home')}
              className="flex items-center gap-2.5 text-left group cursor-pointer"
            >
              <img
                src="/vakeelsaab/navbar/vakeelsaab-legal-services-consultation.png"
                alt="VakeelSaab Legal Platform"
                className="h-10 sm:h-11 w-auto object-contain"
                referrerPolicy="no-referrer"
                onError={(e) => {
                  (e.currentTarget as HTMLImageElement).src = '/vakeelsaab/images/vakeel-saab-logo.png';
                }}
              />
            </button>
          </div>

          {/* Center: Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-6 text-sm font-medium text-[#172B54]">
            <button
              onClick={() => onNavigate('home')}
              className={`hover:text-[#FEC556] transition-colors whitespace-nowrap cursor-pointer ${
                currentPage === 'home' ? 'font-bold text-[#172B54] underline decoration-[#FEC556] decoration-2 underline-offset-8' : ''
              }`}
            >
              {language === 'hi' ? 'होम' : 'Home'}
            </button>

            <button
              onClick={() => onNavigate('about')}
              className={`hover:text-[#FEC556] transition-colors whitespace-nowrap cursor-pointer ${
                currentPage === 'about' ? 'font-bold text-[#172B54] underline decoration-[#FEC556] decoration-2 underline-offset-8' : ''
              }`}
            >
              {language === 'hi' ? 'हमारे बारे में' : 'About Us'}
            </button>

            {/* Legal Services Mega Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setServicesMenuOpen(true)}
              onMouseLeave={() => setServicesMenuOpen(false)}
            >
              <button
                onClick={() => {
                  setServicesMenuOpen(!servicesMenuOpen);
                  onNavigate('services');
                }}
                className={`inline-flex items-center gap-1 py-6 hover:text-[#FEC556] transition-colors whitespace-nowrap cursor-pointer ${
                  currentPage === 'services' || currentPage === 'service-detail'
                    ? 'font-bold text-[#172B54] underline decoration-[#FEC556] decoration-2 underline-offset-8'
                    : ''
                }`}
              >
                <span>{language === 'hi' ? 'कानूनी सेवाएं' : 'Legal Services'}</span>
                <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${servicesMenuOpen ? 'rotate-180' : ''}`} />
              </button>

              {servicesMenuOpen && (
                <div className="absolute left-1/2 -translate-x-1/2 top-full w-[760px] bg-white rounded-2xl shadow-2xl border border-slate-100 p-6 z-50">
                  <div className="grid grid-cols-3 gap-4">
                    {[col1, col2, col3].map((column, colIdx) => (
                      <div key={colIdx} className="space-y-1">
                        {column.map((service) => (
                          <button
                            key={service.id}
                            onClick={() => {
                              setServicesMenuOpen(false);
                              onNavigate('service-detail', service.id);
                            }}
                            className="w-full flex items-center space-x-3 p-2.5 rounded-lg hover:bg-[#FEC556]/15 transition-colors duration-200 group/item text-left cursor-pointer"
                          >
                            <div className="w-8 h-8 shrink-0 flex items-center justify-center">
                              <img
                                src={encodeURI(service.iconSrc)}
                                alt={service.title}
                                className="w-7 h-7 object-contain"
                                referrerPolicy="no-referrer"
                              />
                            </div>
                            <span className="text-[#172B54] font-medium text-xs sm:text-sm group-hover/item:text-[#d99b26] transition-colors">
                              {service.title}
                            </span>
                          </button>
                        ))}
                      </div>
                    ))}
                  </div>

                  <div className="mt-4 pt-4 border-t border-slate-100 flex items-center justify-between">
                    <span className="text-xs text-slate-500">
                      100% Anonymous & Confidential Consultations Across India
                    </span>
                    <button
                      onClick={() => {
                        setServicesMenuOpen(false);
                        onNavigate('services');
                      }}
                      className="text-xs font-bold text-[#172B54] hover:text-[#d99b26] underline underline-offset-4 cursor-pointer"
                    >
                      View All Legal Services →
                    </button>
                  </div>
                </div>
              )}
            </div>

            <button
              onClick={() => onNavigate('how-we-work')}
              className={`hover:text-[#FEC556] transition-colors whitespace-nowrap cursor-pointer ${
                currentPage === 'how-we-work' ? 'font-bold text-[#172B54] underline decoration-[#FEC556] decoration-2 underline-offset-8' : ''
              }`}
            >
              {language === 'hi' ? 'हम कैसे काम करते हैं' : 'How We Work'}
            </button>

            <button
              onClick={() => onNavigate('legal-guide')}
              className={`hover:text-[#FEC556] transition-colors whitespace-nowrap cursor-pointer ${
                currentPage === 'legal-guide' ? 'font-bold text-[#172B54] underline decoration-[#FEC556] decoration-2 underline-offset-8' : ''
              }`}
            >
              {language === 'hi' ? 'कानूनी गाइड' : 'Legal Guide'}
            </button>

            <button
              onClick={() => onNavigate('register-lawyer')}
              className={`hover:text-[#FEC556] transition-colors whitespace-nowrap cursor-pointer ${
                currentPage === 'register-lawyer' ? 'font-bold text-[#172B54] underline decoration-[#FEC556] decoration-2 underline-offset-8' : ''
              }`}
            >
              {language === 'hi' ? 'वकील के रूप में जुड़ें' : 'Register as a Lawyer'}
            </button>
          </nav>

          {/* Right: Talk to a Lawyer CTA & Language Switcher */}
          <div className="hidden lg:flex items-center gap-3 shrink-0">
            <button
              onClick={() => onOpenCallModal()}
              className="inline-flex items-center gap-2 bg-[#FEC556] hover:bg-[#ffd57a] text-[#172B54] font-bold text-sm px-5 py-2.5 rounded-full shadow-md shadow-[#FEC556]/25 transition-all duration-200 hover:scale-105 cursor-pointer whitespace-nowrap"
            >
              <Phone className="w-4 h-4" />
              <span>{language === 'hi' ? 'वकील से बात करें' : 'Talk to a Lawyer'}</span>
            </button>

            {/* Language Dropdown */}
            <div className="relative">
              <button
                onClick={() => setLangMenuOpen(!langMenuOpen)}
                className="inline-flex items-center gap-1.5 px-3 py-2 rounded-full border border-slate-200 hover:border-[#172B54] text-xs font-semibold text-[#172B54] transition-colors cursor-pointer"
              >
                <Globe className="w-3.5 h-3.5 text-[#172B54]" />
                <span>{language === 'en' ? 'English' : 'हिन्दी'}</span>
                <ChevronDown className="w-3.5 h-3.5" />
              </button>

              {langMenuOpen && (
                <div className="absolute right-0 mt-2 w-32 bg-white rounded-xl shadow-xl border border-slate-100 py-1.5 z-50">
                  <button
                    onClick={() => {
                      onToggleLanguage('en');
                      setLangMenuOpen(false);
                    }}
                    className={`w-full text-left px-3.5 py-2 text-xs font-medium hover:bg-slate-50 cursor-pointer ${
                      language === 'en' ? 'text-[#172B54] font-bold bg-[#FEC556]/15' : 'text-slate-600'
                    }`}
                  >
                    English
                  </button>
                  <button
                    onClick={() => {
                      onToggleLanguage('hi');
                      setLangMenuOpen(false);
                    }}
                    className={`w-full text-left px-3.5 py-2 text-xs font-medium hover:bg-slate-50 cursor-pointer ${
                      language === 'hi' ? 'text-[#172B54] font-bold bg-[#FEC556]/15' : 'text-slate-600'
                    }`}
                  >
                    हिन्दी (Hindi)
                  </button>
                </div>
              )}
            </div>
          </div>

          {/* Mobile Hamburger Button */}
          <div className="flex lg:hidden items-center gap-2">
            <button
              onClick={() => onOpenCallModal()}
              className="inline-flex items-center gap-1.5 bg-[#FEC556] text-[#172B54] font-bold text-xs px-3.5 py-2 rounded-full shadow-xs cursor-pointer"
            >
              <Phone className="w-3.5 h-3.5" />
              <span>Call</span>
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-[#172B54] hover:bg-slate-100 cursor-pointer"
              aria-label="Toggle Menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white border-t border-slate-100 px-4 pt-3 pb-6 space-y-2 shadow-xl max-h-[80vh] overflow-y-auto">
          <button
            onClick={() => {
              onNavigate('home');
              setMobileMenuOpen(false);
            }}
            className="block w-full text-left px-3 py-2.5 rounded-lg text-sm font-semibold text-[#172B54] hover:bg-slate-50"
          >
            Home
          </button>
          <button
            onClick={() => {
              onNavigate('about');
              setMobileMenuOpen(false);
            }}
            className="block w-full text-left px-3 py-2.5 rounded-lg text-sm font-semibold text-[#172B54] hover:bg-slate-50"
          >
            About Us
          </button>

          <div>
            <button
              onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
              className="flex items-center justify-between w-full px-3 py-2.5 rounded-lg text-sm font-semibold text-[#172B54] hover:bg-slate-50"
            >
              <span>Legal Services</span>
              <ChevronDown className={`w-4 h-4 transition-transform ${mobileServicesOpen ? 'rotate-180' : ''}`} />
            </button>
            {mobileServicesOpen && (
              <div className="pl-4 pr-2 py-2 space-y-1 bg-slate-50 rounded-xl mt-1">
                {LEGAL_SERVICES_DATA.map((s) => (
                  <button
                    key={s.id}
                    onClick={() => {
                      onNavigate('service-detail', s.id);
                      setMobileMenuOpen(false);
                    }}
                    className="flex items-center gap-2.5 w-full text-left py-2 px-2 rounded-lg text-xs font-medium text-[#172B54] hover:bg-[#FEC556]/20"
                  >
                    <img src={encodeURI(s.iconSrc)} alt={s.title} className="w-5 h-5 object-contain" />
                    <span>{s.title}</span>
                  </button>
                ))}
              </div>
            )}
          </div>

          <button
            onClick={() => {
              onNavigate('how-we-work');
              setMobileMenuOpen(false);
            }}
            className="block w-full text-left px-3 py-2.5 rounded-lg text-sm font-semibold text-[#172B54] hover:bg-slate-50"
          >
            How We Work
          </button>
          <button
            onClick={() => {
              onNavigate('legal-guide');
              setMobileMenuOpen(false);
            }}
            className="block w-full text-left px-3 py-2.5 rounded-lg text-sm font-semibold text-[#172B54] hover:bg-slate-50"
          >
            Legal Guide
          </button>
          <button
            onClick={() => {
              onNavigate('register-lawyer');
              setMobileMenuOpen(false);
            }}
            className="block w-full text-left px-3 py-2.5 rounded-lg text-sm font-semibold text-[#172B54] hover:bg-slate-50"
          >
            Register as a Lawyer
          </button>
          <button
            onClick={() => {
              onNavigate('document-store');
              setMobileMenuOpen(false);
            }}
            className="block w-full text-left px-3 py-2.5 rounded-lg text-sm font-semibold text-[#172B54] hover:bg-slate-50"
          >
            Document Store
          </button>
        </div>
      )}
    </header>
  );
}
