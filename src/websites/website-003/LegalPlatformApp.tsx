import React, { useState } from 'react';
import {
  Phone,
  ArrowRight,
  Lock,
  Users,
  Target,
  Zap,
  Shield,
  Award,
  Clock,
  CheckCircle2,
  MessageCircle,
  CreditCard,
  Smartphone,
  FileText,
  ChevronDown,
  Star,
  Globe,
  IndianRupee
} from 'lucide-react';
import { Navbar, PageRoute } from './components/Navbar';
import { Footer } from './components/Footer';
import { ConsultationModal } from './components/ConsultationModal';
import {
  AboutUsPage,
  ServicesCatalogPage,
  ServiceDetailPage,
  HowWeWorkPage,
  DocumentStorePage,
  RegisterLawyerPage,
  ReviewsPage,
  ContactUsPage
} from './components/SubPages';
import {
  LEGAL_SERVICES_DATA,
  HOME_FAQS,
  CALL_STEPS,
  APP_STEPS,
  CLIENT_TESTIMONIALS,
  COVERED_BY_LOGOS
} from './data/vakeelSaabData';

interface LegalPlatformAppProps {
  onBackToLibrary?: () => void;
  isEmbedded?: boolean;
}

export default function LegalPlatformApp({
  onBackToLibrary
}: LegalPlatformAppProps) {
  const [currentPage, setCurrentPage] = useState<PageRoute>('home');
  const [selectedServiceId, setSelectedServiceId] = useState<string>('property-lawyer');
  const [callModalOpen, setCallModalOpen] = useState(false);
  const [prefilledIssue, setPrefilledIssue] = useState<string | undefined>(undefined);
  const [language, setLanguage] = useState<'en' | 'hi'>('en');

  // Home interactive states
  const [isMobileAppTab, setIsMobileAppTab] = useState(false);
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);

  const handleNavigate = (page: PageRoute, serviceId?: string) => {
    if (serviceId) {
      setSelectedServiceId(serviceId);
    }
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleOpenCallModal = (issue?: string) => {
    setPrefilledIssue(issue);
    setCallModalOpen(true);
  };

  const handleExploreApps = () => {
    setIsMobileAppTab(true);
    const el = document.getElementById('app-download-section');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const renderStepIcon = (iconName: string) => {
    switch (iconName) {
      case 'Phone':
        return <Phone className="w-5 h-5 sm:w-6 sm:h-6 text-[#172B54]" />;
      case 'MessageCircle':
        return <MessageCircle className="w-5 h-5 sm:w-6 sm:h-6 text-[#172B54]" />;
      case 'Users':
        return <Users className="w-5 h-5 sm:w-6 sm:h-6 text-[#172B54]" />;
      case 'CreditCard':
        return <CreditCard className="w-5 h-5 sm:w-6 sm:h-6 text-[#172B54]" />;
      case 'Clock':
        return <Clock className="w-5 h-5 sm:w-6 sm:h-6 text-[#172B54]" />;
      case 'CheckCircle':
      default:
        return <CheckCircle2 className="w-5 h-5 sm:w-6 sm:h-6 text-[#172B54]" />;
    }
  };

  const activeService =
    LEGAL_SERVICES_DATA.find((s) => s.id === selectedServiceId) || LEGAL_SERVICES_DATA[0];

  return (
    <div className="min-h-screen bg-white text-slate-900 flex flex-col font-sans selection:bg-[#FEC556] selection:text-[#172B54]">
      {/* Sticky Top Navbar */}
      <Navbar
        currentPage={currentPage}
        onNavigate={handleNavigate}
        onOpenCallModal={handleOpenCallModal}
        language={language}
        onToggleLanguage={setLanguage}
        onBackToLibrary={onBackToLibrary}
      />

      {/* Main Content Router */}
      <main className="flex-1">
        {currentPage === 'about' && (
          <AboutUsPage onNavigate={handleNavigate} onOpenCallModal={handleOpenCallModal} />
        )}

        {currentPage === 'services' && (
          <ServicesCatalogPage onNavigate={handleNavigate} onOpenCallModal={handleOpenCallModal} />
        )}

        {currentPage === 'service-detail' && (
          <ServiceDetailPage
            service={activeService}
            onNavigate={handleNavigate}
            onOpenCallModal={handleOpenCallModal}
          />
        )}

        {currentPage === 'how-we-work' && (
          <HowWeWorkPage onNavigate={handleNavigate} onOpenCallModal={handleOpenCallModal} />
        )}

        {(currentPage === 'document-store' || currentPage === 'legal-guide') && (
          <DocumentStorePage onNavigate={handleNavigate} onOpenCallModal={handleOpenCallModal} />
        )}

        {currentPage === 'register-lawyer' && <RegisterLawyerPage isBusiness={false} />}

        {currentPage === 'register-business' && <RegisterLawyerPage isBusiness={true} />}

        {currentPage === 'reviews' && (
          <ReviewsPage onNavigate={handleNavigate} onOpenCallModal={handleOpenCallModal} />
        )}

        {currentPage === 'contact' && (
          <ContactUsPage onNavigate={handleNavigate} onOpenCallModal={handleOpenCallModal} />
        )}

        {(currentPage === 'privacy' || currentPage === 'terms') && (
          <div className="max-w-4xl mx-auto py-12 px-4 sm:px-6 space-y-6">
            <div className="bg-[#172B54] text-white rounded-3xl p-8">
              <span className="text-xs font-bold uppercase tracking-wider text-[#FEC556]">
                MV HUMHAINA PRIVATE LIMITED · Legal Governance
              </span>
              <h1 className="text-3xl font-bold mt-1">
                {currentPage === 'privacy' ? 'Privacy Policy' : 'Terms & Conditions of Service'}
              </h1>
              <p className="text-white/80 text-sm mt-2">
                VakeelSaab respects and protects the anonymity and confidentiality of every client and advocate on our platform.
              </p>
            </div>
            <div className="bg-slate-50 rounded-2xl p-6 border border-slate-200 space-y-4 text-sm text-slate-700 leading-relaxed">
              <h3 className="font-bold text-lg text-[#172B54]">1. Anonymity & Call Masking Protection</h3>
              <p>
                All telephone and app consultations conducted on VakeelSaab use encrypted bridge masking so your personal mobile number is never disclosed to third parties without your explicit consent.
              </p>
              <h3 className="font-bold text-lg text-[#172B54]">2. Independent Verified Advocates</h3>
              <p>
                VakeelSaab is a technology platform connecting users with independent, Bar Council enrolled advocates across India. VakeelSaab is not a law firm and does not itself provide legal representation.
              </p>
              <h3 className="font-bold text-lg text-[#172B54]">3. 3-Minute Trial & Transparent Wallet Billing</h3>
              <p>
                Consultations include a 3-minute initial trial window. Stage-wise offline or litigation mandates are governed by formal digital agreements and transparent milestone invoices.
              </p>
              <div className="pt-2">
                <button
                  onClick={() => handleNavigate('home')}
                  className="bg-[#172B54] text-white text-xs font-bold px-5 py-2.5 rounded-xl cursor-pointer"
                >
                  ← Back to Home
                </button>
              </div>
            </div>
          </div>
        )}

        {/* HOME PAGE (Exact Recreation from Uploaded ZIP) */}
        {currentPage === 'home' && (
          <div>
            {/* 1. HERO SECTION */}
            <section className="max-w-7xl mx-auto px-4 pt-4 pb-6">
              <div
                className="relative overflow-hidden rounded-[2rem] bg-[#172B54] text-white px-6 pt-8 pb-6 sm:px-10 sm:pt-10 lg:px-12 shadow-2xl"
                style={{
                  backgroundImage: `linear-gradient(135deg, rgba(23,43,84,0.94) 0%, rgba(15,27,60,0.92) 100%), url('/vakeelsaab/images/legal-pattern.webp')`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center'
                }}
              >
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end">
                  {/* Left Column (7 cols) */}
                  <div className="lg:col-span-7 space-y-5 pb-2">
                    <div className="inline-flex items-center gap-2 bg-white/10 border border-white/15 backdrop-blur-md rounded-full px-4 py-1.5">
                      <span className="w-2 h-2 rounded-full bg-[#FEC556]"></span>
                      <span className="text-xs font-semibold text-[#FEC556] tracking-wide">
                        India&apos;s #1 Anonymous Legal Platform
                      </span>
                    </div>

                    <div className="space-y-2">
                      <p className="text-white/90 text-lg sm:text-xl font-medium">
                        {language === 'hi' ? 'स्वागत है' : 'Welcome To'}
                      </p>
                      <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-[#FEC556]">
                        VakeelSaab
                      </h1>
                      <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-white leading-snug">
                        {language === 'hi'
                          ? 'भारत का पहला गुमनाम कानूनी परामर्श मंच'
                          : "India's First Anonymous Legal Consultation Platform"}
                      </h2>
                    </div>

                    <div className="space-y-2">
                      <p className="text-[#FEC556] font-semibold text-sm sm:text-base">
                        Talk to verified lawyers without revealing who you are.
                      </p>
                      <p className="text-white/75 text-xs sm:text-sm leading-relaxed max-w-xl">
                        On VakeelSaab, you can connect anonymously with the best lawyers in India online/offline, anytime, anywhere. Compare &amp; choose the one whose expertise &amp; approach you trust, and keep your entire legal journey from consultation to case, completely confidential.
                      </p>
                    </div>

                    {/* Primary Call CTA */}
                    <div className="pt-1">
                      <button
                        onClick={() => handleOpenCallModal()}
                        className="inline-flex items-center gap-2.5 bg-[#FEC556] text-[#172B54] hover:bg-[#ffd57a] font-bold px-7 py-3.5 rounded-full shadow-lg shadow-[#FEC556]/30 transition-all duration-200 hover:scale-105 cursor-pointer text-sm sm:text-base"
                      >
                        <Phone className="w-4 h-4" />
                        <span>Call 72848 72848</span>
                      </button>
                    </div>

                    {/* Two Glass Stat Pills with Avatar Stacks */}
                    <div className="flex flex-wrap gap-3 pt-1">
                      <button
                        onClick={() => handleOpenCallModal()}
                        className="flex items-center gap-3 bg-white/10 border border-white/15 backdrop-blur-md rounded-2xl px-4 py-3 hover:bg-white/15 transition-all text-left cursor-pointer group"
                      >
                        <div className="flex -space-x-2">
                          {[
                            '/vakeelsaab/compressed/lawyer-profile.png',
                            '/vakeelsaab/compressed/lawyer-profile-male.png',
                            '/vakeelsaab/compressed/lawyer-profile-female.png'
                          ].map((src, idx) => (
                            <img
                              key={src}
                              src={src}
                              alt={`Lawyer ${idx + 1}`}
                              className="w-10 h-10 rounded-full border-2 border-white/60 object-cover shadow-md"
                              referrerPolicy="no-referrer"
                            />
                          ))}
                        </div>
                        <div className="leading-tight">
                          <p className="text-sm font-bold text-[#FEC556] group-hover:brightness-110">
                            4000+ Lawyers
                          </p>
                          <p className="text-xs text-white/70">Ready to help you</p>
                        </div>
                      </button>

                      <button
                        onClick={() => handleNavigate('reviews')}
                        className="flex items-center gap-3 bg-white/10 border border-white/15 backdrop-blur-md rounded-2xl px-4 py-3 hover:bg-white/15 transition-all text-left cursor-pointer group"
                      >
                        <div className="flex -space-x-2">
                          {[
                            '/vakeelsaab/compressed/client-profile.png',
                            '/vakeelsaab/compressed/client-profile-female.png',
                            '/vakeelsaab/compressed/client-profile-female2.png'
                          ].map((src, idx) => (
                            <img
                              key={src}
                              src={src}
                              alt={`Client ${idx + 1}`}
                              className="w-10 h-10 rounded-full border-2 border-white/60 object-cover shadow-md"
                              referrerPolicy="no-referrer"
                            />
                          ))}
                        </div>
                        <div className="leading-tight">
                          <p className="text-sm font-bold text-[#FEC556] group-hover:brightness-110">
                            40,000+ Consultations
                          </p>
                          <p className="text-xs text-white/70">Happily Serviced</p>
                        </div>
                      </button>
                    </div>

                    {/* Available Now - Download Our Mobile Apps Box */}
                    <div className="mt-4 pt-5 border-t border-white/20">
                      <div className="bg-white/5 backdrop-blur-md border border-white/15 rounded-2xl px-4 py-4 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                        <div className="flex flex-col text-center sm:text-left">
                          <p className="text-xs font-bold text-[#FEC556] uppercase tracking-wide mb-0.5">
                            Available Now
                          </p>
                          <p className="text-sm font-semibold text-white">Download Our Mobile Apps</p>
                          <div className="flex items-center justify-center sm:justify-start gap-3 mt-1.5 text-white/80 text-xs">
                            <span className="inline-flex items-center gap-1.5">
                              <span className="w-2 h-2 rounded-full bg-[#34A853]"></span>
                              <span>Google Play</span>
                            </span>
                            <span className="w-px h-3.5 bg-white/20"></span>
                            <span className="inline-flex items-center gap-1.5">
                              <span className="w-2 h-2 rounded-full bg-white"></span>
                              <span>App Store</span>
                            </span>
                          </div>
                        </div>

                        <button
                          onClick={handleExploreApps}
                          className="w-full sm:w-auto flex items-center justify-center gap-2 bg-[#FEC556] text-[#172B54] hover:bg-[#ffd57a] font-bold px-5 py-2.5 rounded-full transition-all duration-200 hover:scale-105 text-xs sm:text-sm whitespace-nowrap cursor-pointer"
                        >
                          <span>Explore Apps</span>
                          <ArrowRight className="w-4 h-4" />
                        </button>
                      </div>
                    </div>
                  </div>

                  {/* Right Column (5 cols): Original Lawyer Hero Image */}
                  <div className="lg:col-span-5 flex flex-col items-center justify-end self-end relative z-10">
                    <img
                      src="/vakeelsaab/newdesign/lawyerImg.png"
                      alt="VakeelSaab Legal Consultation"
                      className="w-full max-w-md lg:max-w-full h-auto object-contain drop-shadow-2xl"
                      referrerPolicy="no-referrer"
                    />
                    <p className="text-[10px] text-white/40 tracking-wide italic mt-1">
                      ✦ AI Generated Image
                    </p>
                  </div>
                </div>
              </div>

              {/* COVERED BY MEDIA LOGOS BAR */}
              <div className="mt-6">
                <div className="flex flex-col lg:flex-row rounded-2xl overflow-hidden shadow-xl border border-slate-100 bg-white">
                  <div className="bg-gradient-to-br from-[#172B54] to-[#1B3A6B] flex items-center justify-center px-6 py-4 lg:px-8 lg:w-52 shrink-0">
                    <h3 className="text-white text-base sm:text-lg font-bold tracking-widest text-center uppercase leading-tight">
                      Covered
                      <br />
                      By
                    </h3>
                  </div>
                  <div className="bg-white px-6 py-4 flex-1 overflow-x-auto">
                    <div className="flex items-center justify-between gap-8 min-w-max">
                      {COVERED_BY_LOGOS.map((logo) => (
                        <div
                          key={logo.src}
                          className="flex items-center justify-center h-16 sm:h-20 px-2 shrink-0"
                        >
                          <img
                            src={encodeURI(logo.src)}
                            alt={logo.alt}
                            className="max-h-14 sm:max-h-16 w-auto object-contain hover:opacity-85 transition-opacity"
                            referrerPolicy="no-referrer"
                          />
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* 2. CONSULT A LAWYER ONLINE FOR ANY LEGAL MATTER (#services) */}
            <section id="services" className="py-12 px-4 sm:px-6 bg-slate-50/70">
              <div className="max-w-7xl mx-auto">
                <div className="text-center max-w-4xl mx-auto mb-10 space-y-3">
                  <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#172B54]">
                    Consult a Lawyer Online for Any Legal Matter
                  </h2>
                  <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                    Every time you narrate your case to a new lawyer, you share your identity, sensitive facts, and strategy with someone who is free to decline your case and may later appear for the opposite side. To protect your privacy and reduce this hidden risk, take anonymous consultations first, build trust in a lawyer&apos;s skills and approach, and meet in person only when you are ready to formally engage and file your case.
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {LEGAL_SERVICES_DATA.slice(0, 6).map((service) => (
                    <div
                      key={service.id}
                      className="bg-white rounded-2xl p-6 shadow-md hover:shadow-xl border border-slate-100 transition-all flex flex-col justify-between group"
                    >
                      <div>
                        <div className="flex items-center gap-4 mb-4">
                          <div className="w-14 h-14 rounded-2xl bg-[#EDF3FA] flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
                            <img
                              src={encodeURI(service.iconSrc)}
                              alt={service.title}
                              className="w-9 h-9 object-contain"
                              referrerPolicy="no-referrer"
                            />
                          </div>
                          <div>
                            <h3 className="text-lg font-bold text-[#172B54]">{service.title}</h3>
                            <span className="text-xs text-slate-500">Anonymous Call &amp; Video</span>
                          </div>
                        </div>
                        <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-5">
                          {service.shortDesc}
                        </p>
                      </div>

                      <div className="flex items-center justify-between pt-4 border-t border-slate-100 gap-2">
                        <button
                          onClick={() => handleNavigate('service-detail', service.id)}
                          className="text-xs font-bold text-[#172B54] hover:text-[#d99b26] cursor-pointer"
                        >
                          Learn More →
                        </button>
                        <button
                          onClick={() => handleOpenCallModal(service.title)}
                          className="bg-[#172B54] hover:bg-[#0F1B3C] text-white text-xs font-bold px-4 py-2 rounded-full transition-colors cursor-pointer"
                        >
                          Consult {service.title}
                        </button>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="flex justify-center items-center pt-10">
                  <button
                    onClick={() => handleNavigate('services')}
                    className="bg-[#172B54] hover:bg-[#190B54] text-white text-base sm:text-lg font-bold px-8 py-3 rounded-full shadow-lg transition-all hover:scale-105 cursor-pointer"
                  >
                    More Legal Services (View All 18+ Practice Areas)
                  </button>
                </div>
              </div>
            </section>

            {/* 3. HOW VAKEELSAAB WORKS & MOBILE APPS (#app-download-section) */}
            <section
              id="app-download-section"
              className="bg-[#172B54] text-white relative overflow-hidden py-14 px-4 sm:px-6"
              style={{
                backgroundImage: `linear-gradient(135deg, rgba(23,43,84,0.95) 0%, rgba(15,27,60,0.95) 100%), url('/vakeelsaab/images/legal-pattern.webp')`,
                backgroundSize: 'cover',
                backgroundPosition: 'center'
              }}
            >
              <div className="max-w-7xl mx-auto relative z-10">
                <div className="text-center mb-10 lg:mb-12">
                  <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-3">
                    How VakeelSaab Works
                  </h2>
                  <p className="text-white/90 text-sm sm:text-base lg:text-lg max-w-3xl mx-auto leading-relaxed">
                    Get expert online lawyer consultation in a few easy {isMobileAppTab ? APP_STEPS.length : CALL_STEPS.length} steps — a secure, efficient, and transparent process.
                  </p>
                </div>

                <div className="grid grid-cols-1 xl:grid-cols-[360px_minmax(0,1fr)] gap-8 xl:gap-10 items-start">
                  {/* Left Hub Card */}
                  <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-white/8 backdrop-blur-md shadow-2xl p-6 space-y-5">
                    <div className="flex items-center justify-center w-full">
                      <img
                        src="/vakeelsaab/images/r2CzOw3Vjb2U.png"
                        alt="VakeelSaab Process Hub"
                        className="object-contain w-40 h-40 drop-shadow-xl"
                        referrerPolicy="no-referrer"
                      />
                    </div>

                    <p className="text-white/90 text-center text-sm sm:text-base">
                      To know about our process via
                    </p>

                    {/* Phone Call vs Mobile App Toggle */}
                    <div className="bg-white/15 backdrop-blur-md rounded-full p-1.5 border border-white/20 shadow-md flex items-center gap-1 w-full">
                      <button
                        onClick={() => setIsMobileAppTab(false)}
                        className={`flex flex-1 items-center justify-center gap-2 px-4 py-2.5 rounded-full font-bold text-xs sm:text-sm transition-all cursor-pointer ${
                          !isMobileAppTab
                            ? 'bg-[#FEC556] text-[#172B54] shadow-md'
                            : 'text-white/80 hover:text-white hover:bg-white/10'
                        }`}
                      >
                        <Phone className="w-4 h-4" />
                        <span>Phone Call</span>
                      </button>
                      <button
                        id="mobile-app-toggle-btn"
                        onClick={() => setIsMobileAppTab(true)}
                        className={`flex flex-1 items-center justify-center gap-2 px-4 py-2.5 rounded-full font-bold text-xs sm:text-sm transition-all cursor-pointer ${
                          isMobileAppTab
                            ? 'bg-[#FEC556] text-[#172B54] shadow-md'
                            : 'text-white/80 hover:text-white hover:bg-white/10'
                        }`}
                      >
                        <Smartphone className="w-4 h-4" />
                        <span>Mobile App</span>
                      </button>
                    </div>

                    {/* At a glance */}
                    <div className="w-full rounded-[1.5rem] border border-white/10 bg-white/5 px-4 py-4">
                      <p className="text-xs font-bold uppercase tracking-[0.16em] text-[#FEC556] mb-3 text-center">
                        At a glance
                      </p>
                      <div className="grid grid-cols-1 gap-2.5">
                        {[
                          'Private and secure consultation flow',
                          'Verified lawyers matched faster',
                          'Quick call-first or app-first path'
                        ].map((point) => (
                          <div key={point} className="flex items-center gap-3 rounded-full bg-white/5 px-3 py-2">
                            <span className="w-2.5 h-2.5 rounded-full bg-[#FEC556] shrink-0"></span>
                            <span className="text-white/85 text-xs sm:text-sm">{point}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Right Panel: Either 7 Gold Phone Steps OR Client & Lawyer Mobile App Cards */}
                  <div className="w-full min-w-0">
                    {!isMobileAppTab ? (
                      <div className="rounded-[2rem] border border-white/10 bg-white/[0.05] backdrop-blur-md p-5 sm:p-6">
                        <div className="flex items-center justify-between gap-4 mb-6">
                          <div>
                            <p className="text-[#FEC556] text-xs font-semibold uppercase tracking-[0.16em] mb-1">
                              To know about our process via Phone Call
                            </p>
                            <h3 className="text-xl sm:text-2xl font-bold text-white">Your legal journey</h3>
                            <p className="text-white/75 text-sm mt-0.5">roadmap</p>
                          </div>
                          <div className="hidden lg:flex items-center justify-center w-12 h-12 rounded-full bg-[#FEC556]/15 border border-[#FEC556]/25 text-[#FEC556]">
                            <ArrowRight className="w-5 h-5" />
                          </div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 lg:gap-5">
                          {CALL_STEPS.map((s) => (
                            <div
                              key={s.step}
                              className="group relative rounded-[1.5rem] border border-white/10 bg-[#FEC556] px-5 py-5 shadow-lg overflow-hidden"
                            >
                              <div className="flex items-start gap-4">
                                <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-full bg-white shrink-0 flex items-center justify-center shadow-xs">
                                  {renderStepIcon(s.icon)}
                                </div>
                                <div className="min-w-0 flex-1">
                                  <div className="flex items-center gap-2 mb-1">
                                    <span className="inline-flex items-center justify-center rounded-full bg-[#172B54] text-white text-[11px] font-bold px-2.5 py-0.5">
                                      {String(s.step).padStart(2, '0')}
                                    </span>
                                    <span className="text-[#172B54]/80 text-xs font-semibold uppercase tracking-[0.14em]">
                                      Step {s.step}
                                    </span>
                                  </div>
                                  <h4 className="text-base sm:text-lg font-bold text-[#172B54] leading-snug">
                                    {s.title}
                                  </h4>
                                  <p className="text-xs sm:text-sm text-[#172B54]/85 leading-relaxed mt-1">
                                    {s.description}
                                  </p>
                                </div>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    ) : (
                      <div className="space-y-6">
                        <div id="client-app-card" className="grid grid-cols-1 md:grid-cols-2 gap-5">
                          {[
                            {
                              label: 'For Clients',
                              title: 'Client App',
                              description: 'Secure & anonymous legal counsel',
                              playUrl: 'https://play.google.com/store/apps/details?id=com.vakeelsaabclient',
                              appStoreUrl: 'https://apps.apple.com/in/app/vakeelsaab-get-legal-advice/id6760546728',
                              img: '/vakeelsaab/newdesign/KlHlXvJIP3Rq.jpg'
                            },
                            {
                              label: 'For Attorneys',
                              title: 'Lawyer App',
                              description: 'Manage cases & expand practice',
                              playUrl: 'https://play.google.com/store/apps/details?id=com.vakeelsaab_lawyer',
                              appStoreUrl: 'https://apps.apple.com/in/app/vakeelsaab-lawyer-app/id6760546580',
                              img: '/vakeelsaab/images/heroImg2.png'
                            }
                          ].map((app) => (
                            <div
                              key={app.title}
                              className="bg-white/[0.06] rounded-3xl p-6 border border-white/15 shadow-xl flex flex-col justify-between space-y-4"
                            >
                              <div className="text-center">
                                <p className="text-[#FEC556] text-xs font-bold uppercase tracking-wider">
                                  {app.label}
                                </p>
                                <h3 className="text-xl font-bold text-white mt-0.5">{app.title}</h3>
                                <p className="text-xs text-white/75 mt-1">{app.description}</p>
                              </div>
                              <div className="h-48 rounded-2xl overflow-hidden border border-white/10">
                                <img
                                  src={app.img}
                                  alt={app.title}
                                  className="w-full h-full object-cover"
                                  referrerPolicy="no-referrer"
                                />
                              </div>
                              <div className="grid grid-cols-2 gap-3 pt-2">
                                <a
                                  href={app.appStoreUrl}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="py-2.5 px-3 rounded-xl bg-white text-[#172B54] font-bold text-xs text-center hover:bg-[#FEC556] transition-colors"
                                >
                                  Download on App Store
                                </a>
                                <a
                                  href={app.playUrl}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="py-2.5 px-3 rounded-xl bg-[#FEC556] text-[#172B54] font-bold text-xs text-center hover:bg-[#ffd57a] transition-colors"
                                >
                                  Get it on Google Play
                                </a>
                              </div>
                            </div>
                          ))}
                        </div>

                        {/* App Steps Grid */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                          {APP_STEPS.map((s) => (
                            <div key={s.step} className="bg-[#FEC556] text-[#172B54] rounded-2xl p-4">
                              <span className="inline-block bg-[#172B54] text-white text-[11px] font-bold px-2.5 py-0.5 rounded-full mb-2">
                                Step 0{s.step}
                              </span>
                              <h4 className="font-bold text-sm">{s.title}</h4>
                              <p className="text-xs text-[#172B54]/80 mt-1">{s.description}</p>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </section>

            {/* 4. WHY CHOOSE VAKEELSAAB + 3 PILLAR CARDS (#EDF3FA BAND) */}
            <section className="py-12 relative overflow-hidden">
              <div className="max-w-7xl mx-auto px-6">
                <div className="text-center mb-12">
                  <h2 className="text-2xl md:text-3xl font-bold text-[#172B54] mb-2">
                    Why Choose VakeelSaab?
                  </h2>
                  <p className="text-slate-600 text-sm sm:text-base max-w-3xl mx-auto">
                    Experience the difference with our innovative approach to legal consultation that puts your needs first
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {[
                    {
                      title: 'Anonymity Guaranteed',
                      description: 'Your identity remains confidential throughout the legal consultation.',
                      icon: Lock,
                      iconBg: 'bg-blue-500/10',
                      iconColor: 'text-blue-600'
                    },
                    {
                      title: 'Multiple Legal Perspectives',
                      description: 'Consult with experienced lawyers online from various specializations to get well-rounded legal help.',
                      icon: Users,
                      iconBg: 'bg-emerald-500/10',
                      iconColor: 'text-emerald-600'
                    },
                    {
                      title: 'Expert Tailored Advice',
                      description: 'Receive personalised online lawyer consultation specific to your legal situation, goals, and urgency.',
                      icon: Target,
                      iconBg: 'bg-purple-500/10',
                      iconColor: 'text-purple-600'
                    },
                    {
                      title: 'Accelerate Your Case',
                      description: 'Speed up your legal process with smart, actionable recommendations from top online lawyers.',
                      icon: Zap,
                      iconBg: 'bg-orange-500/10',
                      iconColor: 'text-orange-600'
                    },
                    {
                      title: 'Reduce Legal Anxiety',
                      description: 'Gain confidence with verified legal support and clarity on your rights from trusted legal experts online.',
                      icon: Shield,
                      iconBg: 'bg-red-500/10',
                      iconColor: 'text-red-600'
                    },
                    {
                      title: 'Clarify Pending Litigation',
                      description: 'Get transparent, simplified insights through our online attorney consultation.',
                      icon: Award,
                      iconBg: 'bg-amber-500/10',
                      iconColor: 'text-amber-600'
                    }
                  ].map((item) => {
                    const IconComp = item.icon;
                    return (
                      <div
                        key={item.title}
                        className="bg-white border border-slate-100 shadow-lg hover:shadow-xl transition-all duration-300 rounded-2xl p-8"
                      >
                        <div className="flex items-center gap-4 mb-4">
                          <div className={`w-14 h-14 shrink-0 ${item.iconBg} rounded-2xl flex items-center justify-center`}>
                            <IconComp className={`w-7 h-7 ${item.iconColor}`} />
                          </div>
                          <h3 className="text-lg font-bold text-[#172B54]">{item.title}</h3>
                        </div>
                        <p className="text-slate-600 text-sm leading-relaxed">{item.description}</p>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* 3 Highlight Cards Band (#EDF3FA) */}
              <div className="w-full bg-[#EDF3FA] py-12 mt-12">
                <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8 px-4 sm:px-6 lg:px-8">
                  {[
                    {
                      title: 'Stay Anonymous',
                      desc: 'Your privacy matters. Ask legal questions without revealing your identity.',
                      cta: 'Read More →',
                      icon: Lock,
                      onClick: () => handleNavigate('about')
                    },
                    {
                      title: 'Accessible Anytime, Anywhere',
                      desc: 'Get expert legal advice online Anytime, Anywhere. Just quick and easy.',
                      cta: 'Get Advice →',
                      icon: Globe,
                      onClick: () => handleOpenCallModal()
                    },
                    {
                      title: 'Truly Affordable',
                      desc: 'Talk to a lawyer online at an affordable price. Legal help that fits your budget.',
                      cta: 'View Plans →',
                      icon: IndianRupee,
                      onClick: () => handleOpenCallModal()
                    }
                  ].map((card) => {
                    const CardIcon = card.icon;
                    return (
                      <button
                        key={card.title}
                        onClick={card.onClick}
                        className="group relative bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 border border-gray-100 text-center flex flex-col items-center space-y-4 cursor-pointer"
                      >
                        <div className="w-20 h-20 bg-gradient-to-br from-[#172B54] to-[#172B54]/80 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg">
                          <CardIcon className="w-10 h-10 text-[#FEC556]" />
                        </div>
                        <div className="space-y-2">
                          <h3 className="text-[#172B54] font-bold text-lg">{card.title}</h3>
                          <p className="text-[#4A5568] text-sm">{card.desc}</p>
                          <span className="inline-block text-[#d99b26] text-sm font-bold pt-1">
                            {card.cta}
                          </span>
                        </div>
                      </button>
                    );
                  })}
                </div>
              </div>
            </section>

            {/* 5. THE VAKEELSAAB PROMISE: A HYBRID PATH TO JUSTICE */}
            <section aria-labelledby="about-title" className="pb-12 pt-4">
              <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
                <div className="grid items-center gap-10 md:grid-cols-2">
                  <div>
                    <h2 id="about-title" className="text-3xl sm:text-4xl font-semibold tracking-tight text-[#172B54]">
                      The VakeelSaab Promise: A Hybrid Path to Justice
                    </h2>
                    <div className="mt-6 space-y-4 text-sm sm:text-base leading-7 text-slate-600">
                      <p>
                        We understand that trust is built online, but justice is delivered offline. In today&apos;s fast-paced digital world, sharing sensitive legal matters with strangers can feel risky — that&apos;s exactly why we designed VakeelSaab.
                      </p>
                      <p>
                        <strong className="text-[#172B54]">Start Safe (Online):</strong> Ask questions, compare lawyers, understand fees, and explore legal strategies and consultation without fear or pressure. All from the comfort of your home.
                      </p>
                      <p>
                        <strong className="text-[#172B54]">Move Strong (Offline):</strong> Once you are fully confident, meet the lawyer in person, submit your documents, and file your case with complete clarity, mutual respect, and a well-defined strategy.
                      </p>
                      <p>
                        You no longer have to fight the system alone. VakeelSaab helps you find the right warrior for your legal battle — safely, confidently, and on your terms.
                      </p>
                    </div>
                    <div className="mt-8">
                      <button
                        onClick={() => handleNavigate('about')}
                        className="inline-flex items-center bg-[#172B54] text-white hover:bg-[#0F1B3C] font-semibold px-6 py-3 rounded-lg text-sm transition-colors cursor-pointer"
                      >
                        <span>About Us</span>
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </button>
                    </div>
                  </div>

                  <div className="relative h-64 w-full md:h-[420px]">
                    <img
                      src="/vakeelsaab/images/heroImg2.png"
                      alt="Young Indian lawyer providing legal consultation to a senior woman"
                      className="w-full h-full rounded-2xl border object-cover shadow-sm"
                      referrerPolicy="no-referrer"
                    />
                  </div>
                </div>
              </div>
            </section>

            {/* 6. VAKEELSAAB DOCUMENT STORE BANNER */}
            <section className="pb-12 pt-2 md:pb-14" aria-labelledby="home-document-store-title">
              <div className="mx-auto max-w-7xl px-4 md:px-6">
                <div className="flex flex-col gap-6 rounded-2xl bg-[#172B54] px-6 py-8 text-white shadow-xl sm:px-10 lg:flex-row lg:items-center lg:justify-between lg:gap-10">
                  <div className="flex items-start gap-5">
                    <span className="hidden h-14 w-14 shrink-0 items-center justify-center rounded-full bg-[#FEC556]/15 ring-1 ring-[#FEC556]/40 sm:flex">
                      <FileText className="h-7 w-7 text-[#FEC556]" />
                    </span>
                    <div>
                      <p className="mb-1 text-xs font-bold uppercase tracking-wider text-[#FEC556]">
                        VakeelSaab Document Store
                      </p>
                      <h2 id="home-document-store-title" className="mb-2 text-xl font-bold leading-snug sm:text-2xl">
                        Need a legal document? Get it online.
                      </h2>
                      <p className="max-w-2xl text-sm leading-relaxed text-white/75 sm:text-base">
                        Rent agreements, affidavits, legal notices, NDAs and more. Preview for free, pay once, and get the PDF by email.
                      </p>
                    </div>
                  </div>
                  <div className="flex flex-col items-stretch gap-3 sm:flex-row sm:items-center lg:shrink-0">
                    <button
                      onClick={() => handleNavigate('document-store')}
                      className="inline-flex h-12 items-center justify-center gap-2 rounded-md px-6 text-base font-semibold bg-[#FEC556] text-[#172B54] hover:bg-[#FEC556]/90 transition-colors cursor-pointer"
                    >
                      <span>Explore the Document Store</span>
                      <ArrowRight className="h-4 w-4" />
                    </button>
                  </div>
                </div>
              </div>
            </section>

            {/* 7. WHAT OUR CLIENTS SAY (TESTIMONIALS) */}
            <section className="py-12 bg-slate-50 px-4 sm:px-6">
              <div className="max-w-7xl mx-auto">
                <div className="text-center mb-10">
                  <h2 className="text-2xl sm:text-3xl font-bold text-[#172B54]">What Our Clients Say</h2>
                  <p className="text-slate-600 text-sm mt-1">
                    Real experiences from clients who found legal solutions through VakeelSaab
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {CLIENT_TESTIMONIALS.slice(0, 3).map((item) => (
                    <div
                      key={item.author}
                      className="bg-white rounded-2xl p-6 shadow-md border border-slate-100 flex flex-col justify-between space-y-4"
                    >
                      <div>
                        <div className="flex items-center gap-1 text-[#FEC556] mb-3">
                          {[...Array(item.rating)].map((_, i) => (
                            <Star key={i} className="w-4 h-4 fill-[#FEC556]" />
                          ))}
                        </div>
                        <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                          &ldquo;{item.text}&rdquo;
                        </p>
                      </div>
                      <div className="pt-3 border-t border-slate-100 flex items-center justify-between text-xs">
                        <div>
                          <div className="font-bold text-[#172B54]">{item.author}</div>
                          <div className="text-slate-500">{item.location}</div>
                        </div>
                        <span className="font-semibold text-[#172B54] bg-[#EDF3FA] px-2.5 py-1 rounded-lg">
                          {item.case}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </section>

            {/* 8. FAQ SECTION & STICKY "NEED IMMEDIATE LEGAL HELP?" CARD */}
            <section className="py-12 md:py-16 relative overflow-hidden bg-gradient-to-br from-[#0F1B3C] via-[#172B54] to-[#1E3A5F]">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="text-center mb-12">
                  <div className="inline-flex items-center gap-2 bg-[#FEC556]/10 border border-[#FEC556]/30 rounded-full px-4 py-1.5 mb-4">
                    <span className="text-[#FEC556] font-semibold text-xs">Expert Legal Consultation</span>
                  </div>
                  <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white leading-tight max-w-4xl mx-auto">
                    Online Legal Consultation - Frequently Asked Questions
                  </h2>
                </div>

                <div className="grid xl:grid-cols-3 gap-8 items-start">
                  {/* Left: 9 FAQ Accordion Items */}
                  <div className="xl:col-span-2 space-y-3">
                    {HOME_FAQS.map((faq, idx) => {
                      const isOpen = openFaqIndex === idx;
                      return (
                        <div
                          key={faq.question}
                          className="rounded-xl bg-white/5 backdrop-blur-lg border border-white/10 hover:border-[#FEC556]/30 transition-all overflow-hidden"
                        >
                          <button
                            onClick={() => setOpenFaqIndex(isOpen ? null : idx)}
                            className="w-full p-4 text-left flex justify-between items-start gap-4 hover:bg-white/5 transition-all cursor-pointer group"
                          >
                            <div className="flex items-start gap-3">
                              <div className="w-6 h-6 rounded-full bg-[#FEC556]/20 flex items-center justify-center shrink-0 mt-0.5">
                                <span className="text-[#FEC556] font-bold text-xs">{idx + 1}</span>
                              </div>
                              <span className="text-white font-semibold text-sm sm:text-base leading-relaxed group-hover:text-[#FEC556] transition-colors">
                                {faq.question}
                              </span>
                            </div>
                            <div
                              className={`w-8 h-8 rounded-full bg-[#FEC556]/20 flex items-center justify-center shrink-0 transition-transform ${
                                isOpen ? 'rotate-180' : ''
                              }`}
                            >
                              <ChevronDown className="w-4 h-4 text-[#FEC556]" />
                            </div>
                          </button>
                          {isOpen && (
                            <div className="px-4 pb-4">
                              <div className="border-t border-white/10 pt-3 ml-9">
                                <p className="text-white/80 leading-relaxed text-xs sm:text-sm">
                                  {faq.answer}
                                </p>
                              </div>
                            </div>
                          )}
                        </div>
                      );
                    })}
                  </div>

                  {/* Right: Sticky Gold "Need Immediate Legal Help?" Card */}
                  <div className="xl:sticky xl:top-24 xl:col-span-1">
                    <div className="rounded-2xl overflow-hidden bg-gradient-to-br from-[#FEC556] via-[#FDB32A] to-[#F4A629] shadow-2xl p-6 text-center">
                      <div className="relative w-16 h-16 mx-auto mb-5 bg-white/30 rounded-full flex items-center justify-center">
                        <Phone className="w-8 h-8 text-[#172B54]" />
                      </div>
                      <h3 className="text-xl font-bold mb-4 text-[#172B54]">
                        Need Immediate Legal Help?
                      </h3>
                      <div className="flex justify-center gap-4 mb-5 flex-wrap">
                        {[
                          { label: 'Private', icon: Lock },
                          { label: 'Verified', icon: CheckCircle2 },
                          { label: 'Instant', icon: Zap },
                          { label: 'Transparent', icon: Shield }
                        ].map((b) => {
                          const BIcon = b.icon;
                          return (
                            <div key={b.label} className="flex flex-col items-center gap-1.5">
                              <div className="w-10 h-10 rounded-xl bg-[#1E3A5F] flex items-center justify-center shadow-lg border border-white/20">
                                <BIcon className="w-5 h-5 text-[#FEC556]" />
                              </div>
                              <span className="text-xs text-[#172B54] font-semibold">
                                {b.label}
                              </span>
                            </div>
                          );
                        })}
                      </div>

                      <div className="text-2xl md:text-3xl font-bold mb-2 text-[#172B54] tracking-wide">
                        +91 72848 72848
                      </div>
                      <p className="text-[#172B54]/85 mb-6 text-sm leading-relaxed">
                        Connect with verified lawyers instantly for urgent legal consultation
                      </p>

                      <button
                        onClick={() => handleOpenCallModal()}
                        className="w-full inline-flex items-center justify-center gap-2 bg-[#172B54] text-white hover:bg-[#0F1B3C] px-6 py-3.5 rounded-xl font-bold text-base shadow-xl transition-all cursor-pointer"
                      >
                        <Phone className="w-5 h-5" />
                        <span>Call Now</span>
                      </button>

                      <div className="mt-4 flex items-center justify-center gap-2 text-[#172B54]/80 text-xs font-semibold">
                        <span className="w-2 h-2 bg-emerald-600 rounded-full"></span>
                        <span>Available 24/7</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </div>
        )}
      </main>

      {/* Mega Footer */}
      <Footer onNavigate={handleNavigate} onOpenCallModal={handleOpenCallModal} />

      {/* Anonymous Consultation & Call Matching Modal */}
      <ConsultationModal
        isOpen={callModalOpen}
        onClose={() => setCallModalOpen(false)}
        initialIssue={prefilledIssue}
      />
    </div>
  );
}
