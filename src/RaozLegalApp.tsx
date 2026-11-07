import React, { useState, useEffect } from 'react';
import { 
  LegalEnquiry, 
  PricingConfig, 
  AdvocateRecord 
} from './types/legal';
import { 
  getStoredEnquiries, 
  saveStoredEnquiries 
} from './data/enquiriesStore';
import { 
  getStoredPricingConfig, 
  saveStoredPricingConfig 
} from './data/pricing';
import { 
  getStoredAdvocates, 
  saveStoredAdvocates, 
  getStoredDirectorySettings, 
  saveStoredDirectorySettings 
} from './data/advocates';

// Components
import { Header } from './components/Header/Header';
import { Hero } from './components/Hero/Hero';
import { ServicesGrid } from './components/Services/ServicesGrid';
import { HowItWorks } from './components/HowItWorks/HowItWorks';
import { LegalNoticesSection } from './components/LegalNotices/LegalNoticesSection';
import { ConsultationSection } from './components/Consultation/ConsultationSection';
import { AdvocateDirectory } from './components/Directory/AdvocateDirectory';
import { PricingSection } from './components/Pricing/PricingSection';
import { LegalKnowledgeSection } from './components/Education/LegalKnowledgeSection';
import { ContactSection } from './components/Contact/ContactSection';
import { Footer } from './components/Footer/Footer';

// Modals
import { EnquiryFormModal } from './components/EnquiryForm/EnquiryFormModal';
import { BookConsultationModal } from './components/Consultation/BookConsultationModal';
import { EmergencyHelpModal } from './components/Emergency/EmergencyHelpModal';
import { AdminDashboard } from './components/Admin/AdminDashboard';
import { ComplianceModal } from './components/LegalCompliance/ComplianceModal';

interface RaozLegalAppProps {
  onBackToLibrary?: () => void;
  isEmbedded?: boolean;
}

export default function RaozLegalApp({ onBackToLibrary, isEmbedded = false }: RaozLegalAppProps) {
  // Data Stores
  const [enquiries, setEnquiries] = useState<LegalEnquiry[]>(() => getStoredEnquiries());
  const [pricingConfig, setPricingConfig] = useState<PricingConfig>(() => getStoredPricingConfig());
  const [advocates, setAdvocates] = useState<AdvocateRecord[]>(() => getStoredAdvocates());
  const [isAdvocateDirectoryEnabled, setIsAdvocateDirectoryEnabled] = useState<boolean>(() => {
    return getStoredDirectorySettings().isEnabled;
  });

  // Active Navigation & Filter States
  const [currentSection, setCurrentSection] = useState<string>('home');
  const [activeSearchFilter, setActiveSearchFilter] = useState<string>('');

  // Modals
  const [isEnquiryModalOpen, setIsEnquiryModalOpen] = useState(false);
  const [prefilledEnquiryCategory, setPrefilledEnquiryCategory] = useState<string | undefined>();
  const [isConsultationModalOpen, setIsConsultationModalOpen] = useState(false);
  const [isEmergencyModalOpen, setIsEmergencyModalOpen] = useState(false);
  const [isAdminOpen, setIsAdminOpen] = useState(false);
  const [complianceModalTab, setComplianceModalTab] = useState<'disclaimer' | 'terms' | 'privacy' | 'bci' | null>(null);

  // Sync to local storage
  useEffect(() => {
    saveStoredEnquiries(enquiries);
  }, [enquiries]);

  useEffect(() => {
    saveStoredPricingConfig(pricingConfig);
  }, [pricingConfig]);

  useEffect(() => {
    saveStoredAdvocates(advocates);
  }, [advocates]);

  // Handler: Save newly submitted enquiry
  const handleSaveEnquiry = (newEnquiry: LegalEnquiry) => {
    setEnquiries((prev) => [newEnquiry, ...prev]);
  };

  // Handler: Update enquiry status or notes from Admin
  const handleUpdateEnquiry = (updated: LegalEnquiry) => {
    setEnquiries((prev) => prev.map((e) => (e.id === updated.id ? updated : e)));
  };

  // Handler: Update pricing settings from Admin
  const handleUpdatePricing = (updated: PricingConfig) => {
    setPricingConfig(updated);
  };

  // Handler: Toggle BCI directory mode from Admin
  const handleToggleDirectory = (enabled: boolean) => {
    setIsAdvocateDirectoryEnabled(enabled);
    const settings = getStoredDirectorySettings();
    saveStoredDirectorySettings({ ...settings, isEnabled: enabled });
  };

  // Navigation smoothly scrolls to anchor or sets view
  const handleNavigate = (sectionId: string) => {
    setCurrentSection(sectionId);
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    } else if (sectionId === 'home') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const handleOpenEnquiryModal = (category?: string) => {
    setPrefilledEnquiryCategory(category);
    setIsEnquiryModalOpen(true);
  };

  return (
    <div className="min-h-screen bg-[#0b192c] text-slate-100 font-sans flex flex-col selection:bg-amber-500/20 selection:text-amber-200">
      {/* Optional Top Return Bar if embedded inside the parent Raoz Site library collection */}
      {isEmbedded && onBackToLibrary && (
        <div className="bg-[#050b14] border-b border-slate-800 px-4 py-2 text-xs flex items-center justify-between text-slate-400">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-amber-400"></span>
            <span>Raoz Site Library III · <strong>Website #002: RAOZ LEGAL</strong></span>
          </div>
          <button
            onClick={onBackToLibrary}
            className="text-amber-400 hover:text-amber-300 font-medium underline underline-offset-2 cursor-pointer"
          >
            ← Return to Dashboard
          </button>
        </div>
      )}

      {/* Main Header */}
      <Header
        currentSection={currentSection}
        onNavigate={handleNavigate}
        onOpenEnquiry={() => handleOpenEnquiryModal()}
        onOpenConsultation={() => setIsConsultationModalOpen(true)}
        onOpenEmergency={() => setIsEmergencyModalOpen(true)}
        onOpenAdmin={() => setIsAdminOpen(true)}
        onOpenCompliance={(tab) => setComplianceModalTab(tab)}
      />

      {/* Main Content Sections */}
      <main className="flex-1">
        {/* Hero Section */}
        <Hero
          onSearch={(query) => {
            setActiveSearchFilter(query);
            handleNavigate('services');
          }}
          onSelectServiceQuery={(query) => {
            setActiveSearchFilter(query);
            handleNavigate('services');
          }}
          onOpenEnquiry={(category) => handleOpenEnquiryModal(category)}
          onOpenConsultation={() => setIsConsultationModalOpen(true)}
        />

        {/* 15 Popular Legal Services Grid */}
        <ServicesGrid
          activeFilterQuery={activeSearchFilter}
          onOpenEnquiry={(cat) => handleOpenEnquiryModal(cat)}
        />

        {/* How It Works (3 Steps) */}
        <HowItWorks onOpenEnquiry={() => handleOpenEnquiryModal()} />

        {/* Legal Notices Section (8 Notice Types & Drafting Workflow) */}
        <LegalNoticesSection
          onOpenNoticeModal={(noticeTypeId) => {
            handleOpenEnquiryModal('Legal Notice Assistance');
          }}
        />

        {/* Advocate Consultation Section (4 Modes) */}
        <ConsultationSection />

        {/* Advocate Directory (BCI Rule 36 Compliance Mode) */}
        <AdvocateDirectory
          advocates={advocates}
          isEnabled={isAdvocateDirectoryEnabled}
          onSelectAdvocateForConsultation={(adv) => {
            setIsConsultationModalOpen(true);
          }}
        />

        {/* Transparent Pricing Section */}
        <PricingSection
          pricingConfig={pricingConfig}
          onOpenEnquiry={(cat) => handleOpenEnquiryModal(cat)}
          onOpenConsultation={() => setIsConsultationModalOpen(true)}
          onOpenAdmin={() => setIsAdminOpen(true)}
        />

        {/* Legal Knowledge & Indian Statutory Guides */}
        <LegalKnowledgeSection
          onOpenEnquiry={(cat) => handleOpenEnquiryModal(cat)}
        />

        {/* Contact & Communication */}
        <ContactSection onOpenEnquiry={() => handleOpenEnquiryModal()} />
      </main>

      {/* Footer */}
      <Footer
        onNavigate={handleNavigate}
        onOpenCompliance={(tab) => setComplianceModalTab(tab)}
        onOpenEmergency={() => setIsEmergencyModalOpen(true)}
      />

      {/* Modals & Dialogs */}
      <EnquiryFormModal
        isOpen={isEnquiryModalOpen}
        onClose={() => setIsEnquiryModalOpen(false)}
        initialCategory={prefilledEnquiryCategory}
        onSaveEnquiry={handleSaveEnquiry}
      />

      <BookConsultationModal
        isOpen={isConsultationModalOpen}
        onClose={() => setIsConsultationModalOpen(false)}
        onSuccess={() => {}}
      />

      <EmergencyHelpModal
        isOpen={isEmergencyModalOpen}
        onClose={() => setIsEmergencyModalOpen(false)}
        onOpenEnquiry={(cat) => handleOpenEnquiryModal(cat)}
      />

      <AdminDashboard
        isOpen={isAdminOpen}
        onClose={() => setIsAdminOpen(false)}
        enquiries={enquiries}
        onUpdateEnquiry={handleUpdateEnquiry}
        pricingConfig={pricingConfig}
        onUpdatePricing={handleUpdatePricing}
        advocates={advocates}
        isAdvocateDirectoryEnabled={isAdvocateDirectoryEnabled}
        onToggleDirectoryEnabled={handleToggleDirectory}
      />

      <ComplianceModal
        isOpen={complianceModalTab !== null}
        onClose={() => setComplianceModalTab(null)}
        initialTab={complianceModalTab || 'disclaimer'}
      />
    </div>
  );
}
