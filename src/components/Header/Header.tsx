import React, { useState } from 'react';
import { 
  Scale, 
  Menu, 
  X, 
  ShieldAlert, 
  PhoneCall, 
  Lock, 
  User, 
  ChevronDown, 
  Search, 
  FileText,
  LifeBuoy
} from 'lucide-react';

interface HeaderProps {
  onOpenEnquiry: () => void;
  onOpenConsultation: () => void;
  onOpenEmergency: () => void;
  onOpenAdmin: () => void;
  onOpenCompliance: (tab: 'disclaimer' | 'terms' | 'privacy' | 'bci') => void;
  currentSection: string;
  onNavigate: (sectionId: string) => void;
}

export function Header({
  onOpenEnquiry,
  onOpenConsultation,
  onOpenEmergency,
  onOpenAdmin,
  onOpenCompliance,
  currentSection,
  onNavigate,
}: HeaderProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false);

  const navLinks = [
    { id: 'home', label: 'Home' },
    { id: 'services', label: 'Legal Services' },
    { id: 'notices', label: 'Legal Notices' },
    { id: 'consultation', label: 'Consultation' },
    { id: 'directory', label: 'Advocate Directory' },
    { id: 'knowledge', label: 'Legal Knowledge' },
    { id: 'pricing', label: 'Pricing' },
    { id: 'contact', label: 'Contact' },
  ];

  const handleLinkClick = (id: string) => {
    onNavigate(id);
    setMobileMenuOpen(false);
    setServicesDropdownOpen(false);
  };

  return (
    <>
      {/* Top Advisory Bar */}
      <div className="bg-[#070f1a] border-b border-slate-800 text-xs py-1.5 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-2 text-slate-400">
          <div className="flex items-center gap-3 text-[11px]">
            <span className="flex items-center gap-1.5 text-amber-400 font-medium">
              <Scale className="w-3.5 h-3.5" />
              <span>Independent Legal Assistance Platform</span>
            </span>
            <span className="hidden md:inline text-slate-600">|</span>
            <span className="hidden md:inline text-slate-400">
              Assisting citizens across all States & High Court jurisdictions in India
            </span>
          </div>

          <div className="flex items-center gap-4 text-[11px]">
            <button
              onClick={onOpenEmergency}
              className="text-red-400 hover:text-red-300 font-medium flex items-center gap-1 transition-colors cursor-pointer"
            >
              <ShieldAlert className="w-3 h-3 text-red-400" />
              <span>Urgent Legal Help</span>
            </button>
            <span className="text-slate-700">·</span>
            <button
              onClick={() => onOpenCompliance('bci')}
              className="hover:text-slate-200 transition-colors cursor-pointer"
            >
              BCI Compliance Notice
            </button>
            <span className="text-slate-700">·</span>
            <button
              onClick={onOpenAdmin}
              className="text-slate-400 hover:text-amber-300 transition-colors flex items-center gap-1 cursor-pointer font-mono"
            >
              <Lock className="w-3 h-3" />
              <span>Admin Portal</span>
            </button>
          </div>
        </div>
      </div>

      {/* Main Navigation Header */}
      <header className="sticky top-0 z-40 bg-[#0b192c]/95 backdrop-blur-md border-b border-slate-800/80 shadow-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 h-20 flex items-center justify-between gap-6">
          {/* Brand Identity */}
          <div
            onClick={() => handleLinkClick('home')}
            className="flex items-center gap-3 cursor-pointer shrink-0"
          >
            <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-amber-500/20 to-slate-800 border border-amber-500/40 flex items-center justify-center text-amber-400 shadow-sm">
              <Scale className="w-5 h-5" />
            </div>
            <div>
              <div className="flex items-baseline gap-2">
                <span className="text-xl font-bold tracking-tight text-white font-serif">
                  RAOZ LEGAL
                </span>
                <span className="text-[10px] uppercase font-mono tracking-widest text-amber-400/90 font-semibold px-1.5 py-0.5 rounded bg-amber-500/10 border border-amber-500/20">
                  INDIA
                </span>
              </div>
              <p className="text-[11px] text-slate-400 leading-none mt-0.5 tracking-tight font-sans">
                Legal Help Made Simple. Support When You Need It.
              </p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-5 text-sm font-medium text-slate-300">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => handleLinkClick(link.id)}
                className={`whitespace-nowrap transition-colors cursor-pointer py-1 text-[13px] ${
                  currentSection === link.id
                    ? 'text-amber-400 font-semibold border-b-2 border-amber-400'
                    : 'hover:text-white text-slate-300'
                }`}
              >
                {link.label}
              </button>
            ))}
          </nav>

          {/* Header Action CTAs */}
          <div className="hidden sm:flex items-center gap-3 shrink-0">
            <button
              onClick={onOpenConsultation}
              className="px-3.5 py-2 text-xs font-medium text-slate-200 hover:text-white rounded-lg border border-slate-700/80 hover:bg-slate-800/80 transition-colors cursor-pointer whitespace-nowrap"
            >
              Book Consultation
            </button>
            <button
              onClick={onOpenEnquiry}
              className="px-4 py-2 text-xs font-semibold text-slate-950 bg-gradient-to-r from-amber-400 to-amber-500 hover:from-amber-300 hover:to-amber-400 rounded-lg shadow-sm shadow-amber-500/20 transition-all cursor-pointer whitespace-nowrap"
            >
              Get Legal Help
            </button>
          </div>

          {/* Mobile Menu Hamburger */}
          <div className="flex lg:hidden items-center gap-2">
            <button
              onClick={onOpenEnquiry}
              className="sm:hidden px-3 py-1.5 text-xs font-semibold text-slate-950 bg-amber-400 rounded-md"
            >
              Help
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-slate-300 hover:text-white rounded-lg hover:bg-slate-800"
              aria-label="Toggle navigation"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden border-b border-slate-800 bg-[#0b192c] px-6 py-5 space-y-4 shadow-xl">
            <div className="flex flex-col space-y-3 text-sm">
              {navLinks.map((link) => (
                <button
                  key={link.id}
                  onClick={() => handleLinkClick(link.id)}
                  className={`text-left py-1 text-sm ${
                    currentSection === link.id
                      ? 'text-amber-400 font-semibold'
                      : 'text-slate-300 hover:text-white'
                  }`}
                >
                  {link.label}
                </button>
              ))}
            </div>

            <div className="pt-4 border-t border-slate-800 flex flex-col gap-2.5">
              <button
                onClick={() => {
                  onOpenEnquiry();
                  setMobileMenuOpen(false);
                }}
                className="w-full py-2.5 text-xs font-semibold text-slate-950 bg-amber-400 hover:bg-amber-300 rounded-lg text-center"
              >
                Submit Legal Enquiry (Multi-Step Form)
              </button>
              <button
                onClick={() => {
                  onOpenConsultation();
                  setMobileMenuOpen(false);
                }}
                className="w-full py-2 text-xs font-medium text-slate-300 border border-slate-700 rounded-lg text-center"
              >
                Schedule Advocate Consultation
              </button>
              <button
                onClick={() => {
                  onOpenEmergency();
                  setMobileMenuOpen(false);
                }}
                className="w-full py-2 text-xs font-medium text-red-400 border border-red-900/50 rounded-lg text-center flex items-center justify-center gap-1.5"
              >
                <ShieldAlert className="w-3.5 h-3.5" />
                <span>Urgent Arrest / Police Emergency Guide</span>
              </button>
            </div>
          </div>
        )}
      </header>
    </>
  );
}
