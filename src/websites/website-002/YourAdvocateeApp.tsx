import React, { useState } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { ServicesPillars } from './components/ServicesPillars';
import { DocumentCategoriesGrid } from './components/DocumentCategoriesGrid';
import { CustomerTrustReviews } from './components/CustomerTrustReviews';
import { PricingSection } from './components/PricingSection';
import { Footer } from './components/Footer';

import { DocumentBuilderModal } from './components/DocumentBuilderModal';
import { BusinessFormationModal } from './components/BusinessFormationModal';
import { AdvocateSignModal } from './components/AdvocateSignModal';
import { AskAdvocateModal } from './components/AskAdvocateModal';
import { UserAccountModal } from './components/UserAccountModal';

import { DocumentCategory, MembershipPlan } from './types';
import { CheckCircle2, X } from 'lucide-react';

interface YourAdvocateeAppProps {
  onBackToLibrary?: () => void;
  isEmbedded?: boolean;
}

export default function YourAdvocateeApp({
  onBackToLibrary,
  isEmbedded = false,
}: YourAdvocateeAppProps) {
  // Modal states
  const [docBuilderOpen, setDocBuilderOpen] = useState(false);
  const [selectedDocTemplate, setSelectedDocTemplate] = useState<string | undefined>(undefined);

  const [bizModalOpen, setBizModalOpen] = useState(false);
  const [selectedBizType, setSelectedBizType] = useState<string | undefined>(undefined);

  const [askAdvocateOpen, setAskAdvocateOpen] = useState(false);
  const [advocateCategory, setAdvocateCategory] = useState<string | undefined>(undefined);

  const [signModalOpen, setSignModalOpen] = useState(false);
  const [signingDocTitle, setSigningDocTitle] = useState('Mutual Non-Disclosure Agreement');

  const [accountModalOpen, setAccountModalOpen] = useState(false);

  // Selected plan confirmation toast / modal
  const [selectedPlanModal, setSelectedPlanModal] = useState<{
    plan: MembershipPlan;
    cycle: 'monthly' | 'annual';
  } | null>(null);

  // Search filter
  const [searchQuery, setSearchQuery] = useState('');

  // Handlers
  const handleOpenDocBuilder = (templateId?: string) => {
    setSelectedDocTemplate(templateId);
    setDocBuilderOpen(true);
  };

  const handleOpenBizFormation = (entityType?: string) => {
    setSelectedBizType(entityType);
    setBizModalOpen(true);
  };

  const handleOpenAskAdvocate = (cat?: string) => {
    setAdvocateCategory(cat || 'Property & Real Estate');
    setAskAdvocateOpen(true);
  };

  const handleOpenSignModal = (docTitle: string) => {
    setSigningDocTitle(docTitle);
    setSignModalOpen(true);
  };

  const handleSelectPlan = (plan: MembershipPlan, billingCycle: 'monthly' | 'annual') => {
    setSelectedPlanModal({ plan, cycle: billingCycle });
  };

  const handleSearch = (query: string) => {
    setSearchQuery(query);
    // Open document builder with query or scroll
    handleOpenDocBuilder();
  };

  const handleScrollToPricing = () => {
    const el = document.getElementById('pricing');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-white text-[#1D1C1A] flex flex-col font-sans selection:bg-[#990000] selection:text-white">
      {/* Top Header */}
      <Header
        onOpenDocumentBuilder={handleOpenDocBuilder}
        onOpenBusinessFormation={handleOpenBizFormation}
        onOpenAskAdvocate={() => handleOpenAskAdvocate()}
        onOpenPricing={handleScrollToPricing}
        onOpenAccount={() => setAccountModalOpen(true)}
        onOpenCategory={(cat) => handleOpenDocBuilder()}
        onNavigateHome={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        onBackToLibrary={onBackToLibrary}
      />

      {/* Main Page Flow (Faithful to Rocket Lawyer's architecture) */}
      <main className="flex-1">
        {/* 1. Hero Section */}
        <Hero
          onSearch={handleSearch}
          onOpenDocumentBuilder={handleOpenDocBuilder}
          onOpenBusinessFormation={handleOpenBizFormation}
          onOpenPricing={handleScrollToPricing}
        />

        {/* 2. Four Platform Pillars */}
        <ServicesPillars
          onOpenDocumentBuilder={handleOpenDocBuilder}
          onOpenBusinessFormation={handleOpenBizFormation}
          onOpenAskAdvocate={() => handleOpenAskAdvocate()}
          onOpenPricing={handleScrollToPricing}
        />

        {/* 3. Document Categories Grid */}
        <DocumentCategoriesGrid
          onOpenDocumentBuilder={handleOpenDocBuilder}
          onSelectCategory={(cat) => handleOpenDocBuilder()}
        />

        {/* 4. Customer Trust & Verified Reviews */}
        <CustomerTrustReviews />

        {/* 5. Subscription & 7-Day Trial Pricing Section */}
        <PricingSection onSelectPlan={handleSelectPlan} />
      </main>

      {/* Mega Footer with Bar Council Disclaimer */}
      <Footer
        onOpenDocumentBuilder={handleOpenDocBuilder}
        onOpenBusinessFormation={handleOpenBizFormation}
        onOpenAskAdvocate={() => handleOpenAskAdvocate()}
        onOpenPricing={handleScrollToPricing}
        onOpenCategory={(cat) => handleOpenDocBuilder()}
        onBackToLibrary={onBackToLibrary}
      />

      {/* Interactive Modals */}
      <DocumentBuilderModal
        isOpen={docBuilderOpen}
        onClose={() => setDocBuilderOpen(false)}
        initialTemplateId={selectedDocTemplate}
        onOpenAdvocateSign={(docTitle) => {
          setDocBuilderOpen(false);
          handleOpenSignModal(docTitle);
        }}
      />

      <BusinessFormationModal
        isOpen={bizModalOpen}
        onClose={() => setBizModalOpen(false)}
        initialEntityType={selectedBizType}
        onSubmitted={() => {}}
      />

      <AdvocateSignModal
        isOpen={signModalOpen}
        onClose={() => setSignModalOpen(false)}
        documentTitle={signingDocTitle}
      />

      <AskAdvocateModal
        isOpen={askAdvocateOpen}
        onClose={() => setAskAdvocateOpen(false)}
        initialCategory={advocateCategory}
      />

      <UserAccountModal
        isOpen={accountModalOpen}
        onClose={() => setAccountModalOpen(false)}
        onOpenDocumentBuilder={handleOpenDocBuilder}
        onOpenSignModal={handleOpenSignModal}
        onOpenPricing={handleScrollToPricing}
      />

      {/* Membership Plan Trial Confirmation Modal */}
      {selectedPlanModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs">
          <div className="bg-white rounded-2xl max-w-md w-full border border-[#E8E8E3] shadow-2xl overflow-hidden p-6 text-center space-y-4">
            <div className="w-14 h-14 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center mx-auto border-2 border-emerald-300">
              <CheckCircle2 className="w-7 h-7" />
            </div>

            <div>
              <div className="text-xs font-mono font-bold text-[#990000] uppercase tracking-wider">
                MEMBERSHIP TRIAL ACTIVATED
              </div>
              <h3 className="text-xl font-black text-[#1D1C1A] mt-1">
                {selectedPlanModal.plan.name}
              </h3>
              <p className="text-xs text-neutral-500 mt-1">
                {selectedPlanModal.plan.monthlyPrice === 0
                  ? 'Your 7-day risk-free trial is now active. You have full access to create contracts and test AdvocateSign®.'
                  : `Your ${selectedPlanModal.cycle === 'annual' ? 'annual' : 'monthly'} membership has been registered.`}
              </p>
            </div>

            <div className="p-4 bg-[#FAF9F5] rounded-xl border border-[#E8E8E3] text-left text-xs space-y-1.5">
              <div className="flex justify-between font-bold text-[#1D1C1A]">
                <span>Effective Rate:</span>
                <span>
                  {selectedPlanModal.plan.monthlyPrice === 0
                    ? 'Free for 7 Days'
                    : `₹${(selectedPlanModal.cycle === 'annual' ? selectedPlanModal.plan.annualPricePerMonth : selectedPlanModal.plan.monthlyPrice).toLocaleString('en-IN')}/mo`}
                </span>
              </div>
              <div className="text-[11px] text-neutral-500">
                Cancel anytime from your account dashboard with zero termination penalties.
              </div>
            </div>

            <button
              onClick={() => {
                setSelectedPlanModal(null);
                setAccountModalOpen(true);
              }}
              className="w-full py-2.5 text-xs font-bold text-white bg-[#990000] hover:bg-[#7D0000] rounded-xl transition-colors cursor-pointer shadow-sm"
            >
              Go to My Account Dashboard
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
