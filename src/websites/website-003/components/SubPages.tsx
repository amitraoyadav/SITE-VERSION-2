import React, { useState } from 'react';
import {
  Phone,
  ArrowLeft,
  ArrowRight,
  Shield,
  Lock,
  CheckCircle2,
  Users,
  Award,
  Clock,
  FileText,
  Star,
  MapPin,
  Mail,
  ChevronDown,
  Building2,
  Download
} from 'lucide-react';
import {
  LEGAL_SERVICES_DATA,
  CLIENT_TESTIMONIALS,
  DOCUMENT_STORE_CATALOG,
  ServiceItem
} from '../data/vakeelSaabData';
import { PageRoute } from './Navbar';

interface SubPageCommonProps {
  onNavigate: (page: PageRoute, serviceId?: string) => void;
  onOpenCallModal: (prefilledIssue?: string) => void;
}

export function AboutUsPage({ onNavigate, onOpenCallModal }: SubPageCommonProps) {
  const [offerTab, setOfferTab] = useState<'individual' | 'business'>('individual');

  return (
    <div className="bg-white text-slate-900">
      {/* Hero */}
      <section className="bg-gradient-to-br from-[#0F1B3C] via-[#172B54] to-[#1E3A5F] text-white py-16 px-4 sm:px-6">
        <div className="max-w-5xl mx-auto text-center space-y-4">
          <span className="inline-block bg-[#FEC556]/20 text-[#FEC556] border border-[#FEC556]/40 text-xs font-bold uppercase tracking-wider px-4 py-1 rounded-full">
            India&apos;s First Anonymous Legal Consultation Platform
          </span>
          <h1 className="text-3xl sm:text-5xl font-bold tracking-tight">
            Bridging the Gap Between Legal Need and Legal Help
          </h1>
          <p className="text-white/85 text-base sm:text-lg max-w-3xl mx-auto leading-relaxed">
            We understand that trust is built online, but justice is delivered offline. VakeelSaab empowers individuals and businesses across India to consult verified advocates anonymously, affordably, and without fear.
          </p>
        </div>
      </section>

      {/* Hybrid Promise Split */}
      <section className="py-14 max-w-6xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          <div className="space-y-4">
            <h2 className="text-2xl sm:text-3xl font-bold text-[#172B54]">
              The VakeelSaab Promise: A Hybrid Path to Justice
            </h2>
            <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
              In today&apos;s fast-paced digital world, sharing sensitive legal matters with strangers can feel risky — that&apos;s exactly why we designed VakeelSaab.
            </p>
            <div className="p-4 rounded-2xl bg-[#EDF3FA] border border-slate-200 space-y-1">
              <div className="font-bold text-[#172B54] text-sm">1. Start Safe (Online)</div>
              <p className="text-xs sm:text-sm text-slate-600">
                Ask questions, compare lawyers, understand fees, and explore legal strategies and consultation without fear or pressure. All from the comfort of your home.
              </p>
            </div>
            <div className="p-4 rounded-2xl bg-[#EDF3FA] border border-slate-200 space-y-1">
              <div className="font-bold text-[#172B54] text-sm">2. Move Strong (Offline)</div>
              <p className="text-xs sm:text-sm text-slate-600">
                Once you are fully confident, meet the lawyer in person, submit your documents, and file your case with complete clarity, mutual respect, and a well-defined strategy.
              </p>
            </div>
          </div>

          <div className="relative h-72 sm:h-96 rounded-2xl overflow-hidden shadow-xl border border-slate-200">
            <img
              src="/vakeelsaab/images/heroImg2.png"
              alt="Young Indian lawyer providing legal consultation to a senior woman"
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
          </div>
        </div>
      </section>

      {/* What We Offer (Individual vs Business) */}
      <section className="py-14 bg-[#EDF3FA] px-4 sm:px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-8">
            <h2 className="text-2xl sm:text-3xl font-bold text-[#172B54]">
              Tailored Legal Support for Individuals & Businesses
            </h2>
            <div className="inline-flex p-1.5 rounded-full bg-white border border-slate-200 mt-5 shadow-xs">
              <button
                onClick={() => setOfferTab('individual')}
                className={`px-5 py-2 rounded-full text-xs sm:text-sm font-bold transition-colors cursor-pointer ${
                  offerTab === 'individual' ? 'bg-[#172B54] text-white' : 'text-[#172B54] hover:bg-slate-100'
                }`}
              >
                For Individuals
              </button>
              <button
                onClick={() => setOfferTab('business')}
                className={`px-5 py-2 rounded-full text-xs sm:text-sm font-bold transition-colors cursor-pointer ${
                  offerTab === 'business' ? 'bg-[#172B54] text-white' : 'text-[#172B54] hover:bg-slate-100'
                }`}
              >
                For Businesses & Startups
              </button>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {(offerTab === 'individual'
              ? [
                  { title: 'Affordable Legal Advice', desc: 'Consult verified lawyers online with transparent, pay-per-minute billing.' },
                  { title: 'Complete Privacy', desc: 'Stay anonymous during consultations unless you choose to share your identity.' },
                  { title: 'Anywhere in India', desc: 'Access legal help from metros, small towns, or rural areas — all from your phone.' },
                  { title: 'Tailored Lawyer Matching', desc: 'We connect you with the right lawyer based on your specific legal issue.' }
                ]
              : [
                  { title: 'Expert Legal Guidance', desc: 'Connect with experienced business lawyers for contracts, compliance, IPR, tax, and more.' },
                  { title: 'Affordable Consultations', desc: 'Get a 10-minute lawyer session with clear, upfront pricing.' },
                  { title: 'Tailored for All Business Types', desc: "Whether you're a startup, SME, or growing enterprise, we match you with the right legal support." },
                  { title: 'Reliable Long-Term Support', desc: "We're more than a one-time service — we offer ongoing legal help so you can focus on growth." }
                ]
            ).map((f) => (
              <div key={f.title} className="bg-white rounded-2xl p-6 shadow-md border border-slate-100">
                <div className="w-10 h-10 rounded-xl bg-[#FEC556]/25 text-[#172B54] flex items-center justify-center mb-4">
                  <CheckCircle2 className="w-5 h-5" />
                </div>
                <h3 className="font-bold text-base text-[#172B54] mb-2">{f.title}</h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Core Values & Lawyer Onboarding */}
      <section className="py-14 max-w-6xl mx-auto px-4 sm:px-6 space-y-14">
        <div>
          <h2 className="text-2xl sm:text-3xl font-bold text-[#172B54] text-center mb-3">
            Our Core Values
          </h2>
          <p className="text-slate-600 text-sm text-center max-w-2xl mx-auto mb-8">
            These principles guide everything we do at VakeelSaab, from how we select our lawyers to how we structure our services.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: 'Trust', desc: 'We build trust through transparency, reliability, and consistent delivery of quality legal services.' },
              { title: 'Accessibility', desc: 'We ensure our services are available to everyone, regardless of location, language, or economic status.' },
              { title: 'Excellence', desc: 'We maintain the highest standards of legal expertise and customer service in everything we do.' },
              { title: 'Confidentiality', desc: 'We respect and protect the privacy of our clients and their sensitive legal matters.' }
            ].map((val) => (
              <div key={val.title} className="p-6 rounded-2xl border border-slate-200 bg-slate-50/60">
                <h3 className="font-bold text-lg text-[#172B54] mb-2">{val.title}</h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">{val.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* How We Onboard Lawyers */}
        <div className="bg-[#172B54] text-white rounded-3xl p-8 sm:p-10">
          <div className="max-w-3xl mb-8">
            <span className="text-xs font-bold uppercase tracking-wider text-[#FEC556]">Quality Assurance Promise</span>
            <h2 className="text-2xl sm:text-3xl font-bold mt-1">How We Onboard Lawyers at VakeelSaab</h2>
            <p className="text-white/80 text-sm mt-2">
              Our rigorous selection process ensures only the most qualified and trustworthy lawyers join our platform.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {[
              { step: '01', title: 'Rigorous Screening', desc: 'Every lawyer undergoes detailed selection to ensure strong legal expertise and Bar Council verification.' },
              { step: '02', title: 'Comprehensive Interview', desc: 'In-house legal team conducts interviews to assess knowledge, experience, and communication skills.' },
              { step: '03', title: 'Strict Approval', desc: 'Lawyers cannot take client calls until they successfully pass our complete vetting process.' },
              { step: '04', title: 'Client-First Focus', desc: 'Only verified, high-quality professionals join our platform for trusted legal support.' }
            ].map((item) => (
              <div key={item.step} className="bg-white/10 border border-white/15 rounded-2xl p-5">
                <span className="inline-block bg-[#FEC556] text-[#172B54] text-xs font-bold px-2.5 py-0.5 rounded-full mb-3">
                  Step {item.step}
                </span>
                <h3 className="font-bold text-base mb-1.5">{item.title}</h3>
                <p className="text-xs text-white/80 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>

          <div className="mt-8 pt-6 border-t border-white/15 flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-xs sm:text-sm text-white/85 max-w-xl">
              Ready to get confidential legal advice from one of our 4,000+ personally vetted advocates?
            </p>
            <button
              onClick={() => onOpenCallModal()}
              className="bg-[#FEC556] hover:bg-[#ffd57a] text-[#172B54] font-bold text-sm px-6 py-3 rounded-full shadow-lg cursor-pointer whitespace-nowrap"
            >
              Talk to Lawyer 72848 72848
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}

export function ServicesCatalogPage({ onNavigate, onOpenCallModal }: SubPageCommonProps) {
  const [search, setSearch] = useState('');

  const filtered = LEGAL_SERVICES_DATA.filter(
    (s) =>
      !search.trim() ||
      s.title.toLowerCase().includes(search.toLowerCase()) ||
      s.shortDesc.toLowerCase().includes(search.toLowerCase()) ||
      s.features.some((f) => f.toLowerCase().includes(search.toLowerCase()))
  );

  return (
    <div className="bg-slate-50 py-12 px-4 sm:px-6">
      <div className="max-w-7xl mx-auto">
        <div className="bg-[#172B54] text-white rounded-3xl p-8 sm:p-12 text-center mb-10">
          <h1 className="text-3xl sm:text-4xl font-bold mb-3">Our Online Legal Consultation Services</h1>
          <p className="text-white/85 text-sm sm:text-base max-w-3xl mx-auto leading-relaxed mb-6">
            We provide trusted online legal consultation services in India. Our experienced online lawyers can assist you with property disputes, criminal cases, civil matters, family issues, corporate law, and more.
          </p>
          <div className="max-w-md mx-auto">
            <input
              type="text"
              placeholder="Search practice area (e.g., Property, Divorce, Criminal, Startup)..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full rounded-full bg-white px-5 py-3 text-xs sm:text-sm text-[#172B54] placeholder-slate-400 focus:outline-none shadow-lg"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((service) => (
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
                    <span className="text-[11px] text-emerald-700 font-semibold">Verified Advocates Available 24/7</span>
                  </div>
                </div>

                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-4">
                  {service.shortDesc}
                </p>

                <div className="grid grid-cols-2 gap-2 mb-6">
                  {service.features.map((feat) => (
                    <div key={feat} className="flex items-center gap-1.5 text-xs text-[#172B54] bg-slate-50 px-2.5 py-1.5 rounded-lg">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#d99b26] shrink-0" />
                      <span className="truncate">{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="flex items-center gap-2 pt-3 border-t border-slate-100">
                <button
                  onClick={() => onNavigate('service-detail', service.id)}
                  className="flex-1 py-2.5 px-4 rounded-xl bg-[#172B54] hover:bg-[#0F1B3C] text-white text-xs font-bold transition-colors cursor-pointer"
                >
                  Know More
                </button>
                <button
                  onClick={() => onOpenCallModal(service.title)}
                  className="py-2.5 px-4 rounded-xl bg-[#FEC556] hover:bg-[#ffd57a] text-[#172B54] text-xs font-bold transition-colors cursor-pointer"
                >
                  Consult Now
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export function ServiceDetailPage({
  service,
  onNavigate,
  onOpenCallModal
}: SubPageCommonProps & { service: ServiceItem }) {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  return (
    <div className="bg-white py-10 px-4 sm:px-6">
      <div className="max-w-6xl mx-auto space-y-10">
        <button
          onClick={() => onNavigate('services')}
          className="inline-flex items-center gap-2 text-xs font-bold text-[#172B54] hover:text-[#d99b26] cursor-pointer"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Back to Services</span>
        </button>

        {/* Service Hero Card */}
        <div className="bg-gradient-to-br from-[#172B54] to-[#1E3A5F] rounded-3xl p-8 sm:p-10 text-white grid grid-cols-1 lg:grid-cols-3 gap-8 items-center shadow-xl">
          <div className="lg:col-span-2 space-y-4">
            <div className="inline-flex items-center gap-2 bg-white/10 border border-white/15 px-3.5 py-1 rounded-full text-xs text-[#FEC556] font-semibold">
              <Lock className="w-3.5 h-3.5" />
              <span>100% Anonymous & Confidential Legal Consultation</span>
            </div>
            <h1 className="text-3xl sm:text-4xl font-bold">
              Lawyers in India for {service.title}
            </h1>
            <p className="text-white/85 text-sm sm:text-base leading-relaxed">
              {service.fullDesc}
            </p>
            <div className="flex flex-wrap gap-3 pt-2">
              <button
                onClick={() => onOpenCallModal(service.title)}
                className="inline-flex items-center gap-2 bg-[#FEC556] hover:bg-[#ffd57a] text-[#172B54] font-bold px-6 py-3 rounded-full text-sm shadow-lg cursor-pointer"
              >
                <Phone className="w-4 h-4" />
                <span>Call +91 72848 72848</span>
              </button>
              <button
                onClick={() => onNavigate('how-we-work')}
                className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 text-white font-semibold px-5 py-3 rounded-full text-sm border border-white/20 cursor-pointer"
              >
                <span>How Stage-Wise Billing Works</span>
              </button>
            </div>
          </div>

          <div className="bg-white rounded-2xl p-6 text-[#172B54] flex flex-col items-center text-center shadow-lg">
            <div className="w-20 h-20 rounded-2xl bg-[#EDF3FA] flex items-center justify-center mb-4">
              <img
                src={encodeURI(service.iconSrc)}
                alt={service.title}
                className="w-12 h-12 object-contain"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="text-lg font-bold">{service.title} Desk</div>
            <p className="text-xs text-slate-500 mt-1 mb-4">
              3-Minute Risk-Free Trial · Pay Only If Satisfied
            </p>
            <button
              onClick={() => onOpenCallModal(service.title)}
              className="w-full py-2.5 rounded-xl bg-[#172B54] text-white font-bold text-xs hover:bg-[#0F1B3C] cursor-pointer"
            >
              Match with {service.title}
            </button>
          </div>
        </div>

        {/* Core Areas Covered */}
        <div>
          <h2 className="text-2xl font-bold text-[#172B54] mb-5">Core Legal Areas Covered</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {service.coreAreas.map((area) => (
              <div
                key={area}
                className="p-4 rounded-2xl bg-[#EDF3FA]/70 border border-slate-200 flex items-start gap-3"
              >
                <CheckCircle2 className="w-5 h-5 text-[#172B54] shrink-0 mt-0.5" />
                <span className="text-xs sm:text-sm font-semibold text-[#172B54]">{area}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Practice Area FAQs */}
        <div className="bg-slate-50 rounded-3xl p-6 sm:p-8 border border-slate-200">
          <h2 className="text-xl sm:text-2xl font-bold text-[#172B54] mb-5">
            Frequently Asked Questions on {service.title}
          </h2>
          <div className="space-y-3">
            {service.faqs.map((faq, idx) => (
              <div key={faq.question} className="bg-white rounded-2xl border border-slate-200 overflow-hidden">
                <button
                  onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                  className="w-full p-4 text-left flex items-center justify-between gap-4 font-bold text-sm text-[#172B54] cursor-pointer"
                >
                  <span>{faq.question}</span>
                  <ChevronDown className={`w-4 h-4 shrink-0 transition-transform ${openFaq === idx ? 'rotate-180' : ''}`} />
                </button>
                {openFaq === idx && (
                  <div className="px-4 pb-4 text-xs sm:text-sm text-slate-600 leading-relaxed border-t border-slate-100 pt-3">
                    {faq.answer}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export function HowWeWorkPage({ onOpenCallModal }: SubPageCommonProps) {
  return (
    <div className="bg-white py-12 px-4 sm:px-6 space-y-16">
      {/* Hero */}
      <div className="max-w-5xl mx-auto text-center space-y-3">
        <span className="inline-block bg-[#FEC556]/25 text-[#172B54] text-xs font-bold px-4 py-1 rounded-full">
          Transparent · Stage-Wise · Anonymous
        </span>
        <h1 className="text-3xl sm:text-5xl font-bold text-[#172B54]">How VakeelSaab Works</h1>
        <p className="text-slate-600 text-sm sm:text-base max-w-2xl mx-auto">
          Get Fast & Convenient Legal Help — Talk to trusted lawyers online instantly and transition offline only when you are 100% confident.
        </p>
      </div>

      {/* Simple 3-Step Book Your Consultation */}
      <div className="max-w-6xl mx-auto bg-[#EDF3FA] rounded-3xl p-8 sm:p-10">
        <div className="text-center mb-8">
          <h2 className="text-2xl font-bold text-[#172B54]">Book Your Consultation</h2>
          <p className="text-xs sm:text-sm text-slate-600">Simple 3-step process to get immediate legal help</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            { step: '01', title: 'Call Helpline: +91 72848 72848', desc: 'Share your legal issue, language, location, and budget.' },
            { step: '02', title: 'Get Matched Instantly', desc: 'Executive picks lawyer based on your needs and connects you.' },
            { step: '03', title: 'Continue or Change Lawyer', desc: 'Like your lawyer? Keep going. Not satisfied? We’ll help you find another — no worries.' }
          ].map((s) => (
            <div key={s.step} className="bg-white rounded-2xl p-6 shadow-sm border border-slate-100">
              <span className="inline-block bg-[#FEC556] text-[#172B54] font-bold text-xs px-3 py-1 rounded-full mb-3">
                Step {s.step}
              </span>
              <h3 className="font-bold text-base text-[#172B54] mb-1.5">{s.title}</h3>
              <p className="text-xs sm:text-sm text-slate-600">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* 6-Step In-Person Engagement Process */}
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-10">
          <h2 className="text-2xl sm:text-3xl font-bold text-[#172B54]">In-Person Engagement Process</h2>
          <p className="text-xs sm:text-sm text-slate-600 mt-1">
            For comprehensive legal representation & stage-wise court milestones
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            {
              title: '1. Receive Lawyer Details',
              summary: 'After call, receive lawyer details and profile via SMS.',
              full: "After the brief advisory call is over with the lawyer, the client will receive an SMS with the unique Lawyer Identification Code (LIC) & lawyer's professional profile."
            },
            {
              title: '2. Request Meeting',
              summary: 'Request direct meeting with lawyer.',
              full: 'If the client wishes to meet the lawyer in person or engage the lawyer for court representation, they can request an appointment via VakeelSaab using the Lawyer Identification Code (LIC).'
            },
            {
              title: '3. Negotiate & Agree',
              summary: 'Negotiate fee, timeline and agree on stage-wise payments.',
              full: 'VakeelSaab will then provide a video link for fee negotiations to establish a stage-wise fee schedule.'
            },
            {
              title: '4. Formal Agreement',
              summary: 'Formal agreement signed via platform.',
              full: 'Once an agreement is reached, VakeelSaab will share a contract for both parties to accept.'
            },
            {
              title: '5. Secure Payments',
              summary: 'Payments processed through VakeelSaab platform.',
              full: 'The lawyer submits the initial bill to the client through VakeelSaab. Upon clearance of the bill, the lawyer starts delivering the work as agreed upon in a time-bound manner.'
            },
            {
              title: '6. Work Delivered',
              summary: 'Work delivered as per timeline.',
              full: 'This process repeats for subsequent stages, with bills managed similarly. The lawyer delivers work according to the agreed timeline and quality standards.'
            }
          ].map((item) => (
            <div key={item.title} className="p-6 rounded-2xl border border-slate-200 bg-white shadow-xs space-y-2">
              <h3 className="font-bold text-base text-[#172B54]">{item.title}</h3>
              <p className="text-xs font-semibold text-[#d99b26]">{item.summary}</p>
              <p className="text-xs text-slate-600 leading-relaxed">{item.full}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Confidential Second Opinion */}
      <div className="max-w-6xl mx-auto bg-[#172B54] text-white rounded-3xl p-8 sm:p-10 text-center space-y-6">
        <h2 className="text-2xl sm:text-3xl font-bold">
          Why Choose VakeelSaab for a Confidential Second Opinion?
        </h2>
        <p className="text-white/80 text-sm max-w-2xl mx-auto">
          Clients often want a second opinion on a pending court case but hesitate due to fear of their current lawyer&apos;s reaction. We eliminate that fear completely through 100% anonymous consultations.
        </p>
        <button
          onClick={() => onOpenCallModal('Confidential Second Opinion')}
          className="bg-[#FEC556] hover:bg-[#ffd57a] text-[#172B54] font-bold px-7 py-3 rounded-full text-sm shadow-lg cursor-pointer"
        >
          Talk to Lawyer 72848 72848
        </button>
      </div>
    </div>
  );
}

export function DocumentStorePage({ onOpenCallModal }: SubPageCommonProps) {
  const [selectedDoc, setSelectedDoc] = useState(DOCUMENT_STORE_CATALOG[0]);
  const [partyOne, setPartyOne] = useState('Aditya Verma');
  const [partyTwo, setPartyTwo] = useState('Rohan Kulkarni');
  const [city, setCity] = useState('New Delhi');
  const [downloaded, setDownloaded] = useState(false);

  const handleDownload = () => {
    const content = `VAKEELSAAB DOCUMENT STORE - OFFICIAL DRAFT\n==========================================\nDocument: ${selectedDoc.title}\nCategory: ${selectedDoc.category}\nExecution City: ${city}\nFirst Party: ${partyOne}\nSecond Party: ${partyTwo}\nDate: ${new Date().toISOString().slice(0, 10)}\n\n${selectedDoc.description}\n\nVerified by VakeelSaab Legal Desk (+91 72848 72848)`;
    const blob = new Blob([content], { type: 'text/plain;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `${selectedDoc.id}-draft.txt`;
    a.click();
    URL.revokeObjectURL(url);
    setDownloaded(true);
    setTimeout(() => setDownloaded(false), 3000);
  };

  return (
    <div className="bg-slate-50 py-12 px-4 sm:px-6">
      <div className="max-w-7xl mx-auto space-y-10">
        <div className="bg-[#172B54] text-white rounded-3xl p-8 sm:p-10 flex flex-col lg:flex-row items-center justify-between gap-6">
          <div>
            <span className="text-xs font-bold uppercase tracking-wider text-[#FEC556]">
              VakeelSaab Document Store
            </span>
            <h1 className="text-2xl sm:text-4xl font-bold mt-1">
              Need a legal document? Get it online.
            </h1>
            <p className="text-white/80 text-sm mt-2 max-w-2xl">
              Rent agreements, affidavits, legal notices, NDAs and more. Preview for free, customize party details, and download or request lawyer vetting.
            </p>
          </div>
          <button
            onClick={() => onOpenCallModal('Custom Legal Document Drafting')}
            className="bg-[#FEC556] hover:bg-[#ffd57a] text-[#172B54] font-bold px-6 py-3 rounded-full text-sm shrink-0 cursor-pointer"
          >
            Request Custom Lawyer Draft
          </button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Document List */}
          <div className="space-y-3">
            {DOCUMENT_STORE_CATALOG.map((doc) => (
              <button
                key={doc.id}
                onClick={() => setSelectedDoc(doc)}
                className={`w-full text-left p-4 rounded-2xl border transition-all cursor-pointer ${
                  selectedDoc.id === doc.id
                    ? 'bg-[#172B54] text-white border-[#172B54] shadow-lg'
                    : 'bg-white text-[#172B54] border-slate-200 hover:border-[#172B54]'
                }`}
              >
                <div className="flex items-center justify-between text-xs mb-1">
                  <span className={selectedDoc.id === doc.id ? 'text-[#FEC556] font-bold' : 'text-slate-500'}>
                    {doc.category}
                  </span>
                  <span className="font-bold">{doc.price}</span>
                </div>
                <div className="font-bold text-sm">{doc.title}</div>
              </button>
            ))}
          </div>

          {/* Live Document Customizer & Preview */}
          <div className="lg:col-span-2 bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-sm space-y-6">
            <div className="flex flex-wrap items-center justify-between gap-4 border-b border-slate-100 pb-4">
              <div>
                <h2 className="text-xl font-bold text-[#172B54]">{selectedDoc.title}</h2>
                <p className="text-xs text-slate-500 mt-0.5">
                  {selectedDoc.category} · {selectedDoc.pages} · Instant Preview
                </p>
              </div>
              <div className="text-2xl font-bold text-[#172B54]">{selectedDoc.price}</div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              <div>
                <label className="block text-xs font-bold text-[#172B54] mb-1">First Party Name</label>
                <input
                  type="text"
                  value={partyOne}
                  onChange={(e) => setPartyOne(e.target.value)}
                  className="w-full rounded-xl border border-slate-200 px-3 py-2 text-xs text-slate-900"
                />
              </div>
              <div>
                <label className="block text-xs font-bold text-[#172B54] mb-1">Second Party Name</label>
                <input
                  type="text"
                  value={partyTwo}
                  onChange={(e) => setPartyTwo(e.target.value)}
                  className="w-full rounded-xl border border-slate-200 px-3 py-2 text-xs text-slate-900"
                />
              </div>
              <div>
                <label className="block text-xs font-bold text-[#172B54] mb-1">Jurisdiction City</label>
                <input
                  type="text"
                  value={city}
                  onChange={(e) => setCity(e.target.value)}
                  className="w-full rounded-xl border border-slate-200 px-3 py-2 text-xs text-slate-900"
                />
              </div>
            </div>

            {/* Live Clause Preview */}
            <div className="bg-[#EDF3FA]/60 rounded-2xl p-5 border border-slate-200 font-mono text-xs text-slate-800 space-y-2">
              <div className="font-bold text-[#172B54] uppercase">
                PREVIEW: {selectedDoc.title}
              </div>
              <p>
                This Agreement / Instrument is executed at <strong>{city}</strong> on this{' '}
                <strong>{new Date().toLocaleDateString('en-IN')}</strong> BY AND BETWEEN{' '}
                <strong>{partyOne}</strong> (hereinafter referred to as the &quot;First Party&quot;) AND{' '}
                <strong>{partyTwo}</strong> (hereinafter referred to as the &quot;Second Party&quot;).
              </p>
              <p className="text-slate-600">{selectedDoc.description}</p>
            </div>

            <div className="flex flex-wrap items-center gap-3">
              <button
                onClick={handleDownload}
                className="inline-flex items-center gap-2 bg-[#FEC556] hover:bg-[#ffd57a] text-[#172B54] font-bold px-6 py-3 rounded-xl text-xs sm:text-sm cursor-pointer shadow-sm"
              >
                <Download className="w-4 h-4" />
                <span>{downloaded ? 'Draft Downloaded!' : 'Download Free Preview Draft'}</span>
              </button>
              <button
                onClick={() => onOpenCallModal(`Lawyer Review for ${selectedDoc.title}`)}
                className="inline-flex items-center gap-2 bg-[#172B54] hover:bg-[#0F1B3C] text-white font-semibold px-5 py-3 rounded-xl text-xs sm:text-sm cursor-pointer"
              >
                <Phone className="w-4 h-4 text-[#FEC556]" />
                <span>Have a Lawyer Review & Stamp</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export function RegisterLawyerPage({ isBusiness = false }: { isBusiness?: boolean }) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [mobile, setMobile] = useState('');
  const [barNumber, setBarNumber] = useState('');
  const [expertise, setExpertise] = useState('Property & Civil Law');
  const [experience, setExperience] = useState('6–10 Years');
  const [city, setCity] = useState('New Delhi');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !mobile.trim()) return;
    setSubmitted(true);
  };

  return (
    <div className="bg-slate-50 py-12 px-4 sm:px-6">
      <div className="max-w-5xl mx-auto space-y-10">
        <div className="bg-[#172B54] text-white rounded-3xl p-8 sm:p-10 text-center space-y-3">
          <span className="inline-block bg-[#FEC556]/20 text-[#FEC556] text-xs font-bold px-4 py-1 rounded-full">
            {isBusiness ? 'VakeelSaab Corporate Legal Desk' : 'Join 4,000+ Verified Advocates Across India'}
          </span>
          <h1 className="text-3xl sm:text-4xl font-bold">
            {isBusiness ? 'Register as a Business Partner' : 'Register as a Lawyer on VakeelSaab'}
          </h1>
          <p className="text-white/80 text-sm max-w-2xl mx-auto">
            {isBusiness
              ? 'Get dedicated corporate legal counsel, contract management, and priority compliance support for your enterprise.'
              : 'Receive direct client consultation calls, zero marketing overhead, stage-wise advance billing, and nationwide visibility.'}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="space-y-4">
            {[
              { title: 'Direct Client Calls', desc: 'Get matched with verified clients seeking immediate consultation in your practice area.' },
              { title: 'Stage-Wise Billing Advance', desc: 'Transparent milestone-based billing processed securely via VakeelSaab.' },
              { title: 'Bar Council Compliant', desc: '100% ethical onboarding with verified Bar Council enrollment certificate.' }
            ].map((b) => (
              <div key={b.title} className="bg-white p-5 rounded-2xl border border-slate-200 shadow-xs">
                <h3 className="font-bold text-base text-[#172B54] mb-1">{b.title}</h3>
                <p className="text-xs text-slate-600 leading-relaxed">{b.desc}</p>
              </div>
            ))}
          </div>

          <div className="lg:col-span-2 bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-sm">
            {submitted ? (
              <div className="text-center py-8 space-y-4">
                <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-9 h-9" />
                </div>
                <h3 className="text-2xl font-bold text-[#172B54]">Application Submitted Successfully!</h3>
                <p className="text-xs sm:text-sm text-slate-600 max-w-md mx-auto">
                  Thank you, <strong>{name}</strong>. Our Lawyer Onboarding & Verification team will review your credentials and reach out within 24 hours.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="bg-[#172B54] text-white text-xs font-bold px-6 py-2.5 rounded-xl cursor-pointer"
                >
                  Submit Another Registration
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <h2 className="text-xl font-bold text-[#172B54]">
                  {isBusiness ? 'Business Legal Desk Registration' : 'Advocate Onboarding Form'}
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-[#172B54] mb-1">Full Name *</label>
                    <input
                      type="text"
                      required
                      placeholder="Adv. Rajeshwar Rao"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className="w-full rounded-xl border border-slate-200 px-3.5 py-2.5 text-xs text-slate-900"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-[#172B54] mb-1">Mobile Number *</label>
                    <input
                      type="tel"
                      required
                      placeholder="+91 98765 43210"
                      value={mobile}
                      onChange={(e) => setMobile(e.target.value)}
                      className="w-full rounded-xl border border-slate-200 px-3.5 py-2.5 text-xs text-slate-900"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-[#172B54] mb-1">Email Address *</label>
                    <input
                      type="email"
                      required
                      placeholder="advocate@example.com"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full rounded-xl border border-slate-200 px-3.5 py-2.5 text-xs text-slate-900"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-[#172B54] mb-1">
                      {isBusiness ? 'Company / GSTIN' : 'Bar Council Enrollment No. *'}
                    </label>
                    <input
                      type="text"
                      required
                      placeholder={isBusiness ? 'CIN / GSTIN' : 'e.g. D/1234/2016'}
                      value={barNumber}
                      onChange={(e) => setBarNumber(e.target.value)}
                      className="w-full rounded-xl border border-slate-200 px-3.5 py-2.5 text-xs text-slate-900"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-[#172B54] mb-1">Primary Area of Expertise</label>
                    <select
                      value={expertise}
                      onChange={(e) => setExpertise(e.target.value)}
                      className="w-full rounded-xl border border-slate-200 px-3 py-2.5 text-xs text-slate-900 bg-white"
                    >
                      {LEGAL_SERVICES_DATA.map((s) => (
                        <option key={s.id} value={s.title}>
                          {s.title}
                        </option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-[#172B54] mb-1">Years of Experience</label>
                    <select
                      value={experience}
                      onChange={(e) => setExperience(e.target.value)}
                      className="w-full rounded-xl border border-slate-200 px-3 py-2.5 text-xs text-slate-900 bg-white"
                    >
                      <option>0–2 Years</option>
                      <option>2–5 Years</option>
                      <option>6–10 Years</option>
                      <option>11–15 Years</option>
                      <option>15+ Years</option>
                    </select>
                  </div>
                </div>
                <div>
                  <label className="block text-xs font-bold text-[#172B54] mb-1">Primary Practicing Court & City</label>
                  <input
                    type="text"
                    value={city}
                    onChange={(e) => setCity(e.target.value)}
                    className="w-full rounded-xl border border-slate-200 px-3.5 py-2.5 text-xs text-slate-900"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full py-3 rounded-xl bg-[#FEC556] hover:bg-[#ffd57a] text-[#172B54] font-bold text-sm shadow-md cursor-pointer"
                >
                  Submit Onboarding Application
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export function ReviewsPage({ onOpenCallModal }: SubPageCommonProps) {
  return (
    <div className="bg-slate-50 py-12 px-4 sm:px-6">
      <div className="max-w-6xl mx-auto space-y-10">
        <div className="bg-[#172B54] text-white rounded-3xl p-8 sm:p-10 text-center space-y-3">
          <h1 className="text-3xl sm:text-4xl font-bold">Client Reviews</h1>
          <p className="text-white/80 text-sm max-w-2xl mx-auto">
            Read authentic reviews from clients who have experienced our legal services. All reviews are verified and from real clients who chose to remain anonymous.
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-4 max-w-3xl mx-auto">
            {[
              { label: 'Total Consultations', val: '40,000+' },
              { label: 'Average Rating', val: '4.9 / 5' },
              { label: 'Verified Lawyers', val: '4,000+' },
              { label: 'Response Time', val: '< 2 Mins' }
            ].map((s) => (
              <div key={s.label} className="bg-white/10 rounded-2xl p-3">
                <div className="text-xl font-bold text-[#FEC556]">{s.val}</div>
                <div className="text-[11px] text-white/80">{s.label}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {CLIENT_TESTIMONIALS.map((item) => (
            <div key={item.author} className="bg-white rounded-2xl p-6 border border-slate-200 shadow-xs flex flex-col justify-between space-y-4">
              <div>
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-1 text-[#FEC556]">
                    {[...Array(item.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-[#FEC556]" />
                    ))}
                  </div>
                  <span className="text-[11px] font-mono text-emerald-700 font-semibold">
                    Verified · {item.clientId}
                  </span>
                </div>
                <p className="text-xs sm:text-sm text-slate-700 leading-relaxed italic">
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

        <div className="text-center">
          <button
            onClick={() => onOpenCallModal()}
            className="bg-[#FEC556] hover:bg-[#ffd57a] text-[#172B54] font-bold px-7 py-3 rounded-full text-sm shadow-md cursor-pointer"
          >
            Start Your Confidential Consultation (+91 72848 72848)
          </button>
        </div>
      </div>
    </div>
  );
}

export function ContactUsPage({ onOpenCallModal }: SubPageCommonProps) {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [issue, setIssue] = useState('Property Law');
  const [message, setMessage] = useState('');
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !phone.trim()) return;
    setSent(true);
  };

  return (
    <div className="bg-slate-50 py-12 px-4 sm:px-6">
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10">
        <div className="space-y-6">
          <div>
            <span className="text-xs font-bold uppercase tracking-wider text-[#d99b26]">24/7 Legal Support</span>
            <h1 className="text-3xl font-bold text-[#172B54] mt-1">Get in Touch with Us</h1>
            <p className="text-sm text-slate-600 mt-2">
              Need legal help? Contact our expert lawyers through your preferred method. All communications are protected and handled with complete confidentiality.
            </p>
          </div>

          <div className="space-y-4">
            <div className="bg-white p-5 rounded-2xl border border-slate-200 flex items-start gap-4">
              <div className="w-10 h-10 rounded-xl bg-[#FEC556]/25 text-[#172B54] flex items-center justify-center shrink-0">
                <Phone className="w-5 h-5" />
              </div>
              <div>
                <div className="font-bold text-sm text-[#172B54]">24/7 Consultation Helpline</div>
                <button onClick={() => onOpenCallModal()} className="text-lg font-bold text-[#172B54] hover:underline cursor-pointer">
                  +91 72848 72848
                </button>
                <div className="text-xs text-slate-500">Mon–Sun: Open 24 Hours</div>
              </div>
            </div>

            <div className="bg-white p-5 rounded-2xl border border-slate-200 flex items-start gap-4">
              <div className="w-10 h-10 rounded-xl bg-[#FEC556]/25 text-[#172B54] flex items-center justify-center shrink-0">
                <Mail className="w-5 h-5" />
              </div>
              <div>
                <div className="font-bold text-sm text-[#172B54]">Email Us</div>
                <div className="text-sm font-semibold text-[#172B54]">help@vakeelsaab.com</div>
                <div className="text-xs text-slate-500">We respond within 2 hours</div>
              </div>
            </div>

            <div className="bg-white p-5 rounded-2xl border border-slate-200 flex items-start gap-4">
              <div className="w-10 h-10 rounded-xl bg-[#FEC556]/25 text-[#172B54] flex items-center justify-center shrink-0">
                <MapPin className="w-5 h-5" />
              </div>
              <div>
                <div className="font-bold text-sm text-[#172B54]">New Delhi Registered Office</div>
                <div className="text-xs text-slate-600 leading-relaxed mt-0.5">
                  MV HUMHAINA PRIVATE LIMITED<br />
                  E-14/13, First Floor, Vasant Vihar, New Delhi, Delhi, India - 110057
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-sm">
          {sent ? (
            <div className="text-center py-10 space-y-4">
              <CheckCircle2 className="w-12 h-12 text-emerald-600 mx-auto" />
              <h3 className="text-xl font-bold text-[#172B54]">Message sent successfully</h3>
              <p className="text-xs sm:text-sm text-slate-600 max-w-md mx-auto">
                Thank you for reaching out. One of our legal experts will get back to you within 2 hours. If your matter is urgent, please call us directly at +91 72848 72848.
              </p>
              <button
                onClick={() => setSent(false)}
                className="bg-[#172B54] text-white text-xs font-bold px-5 py-2.5 rounded-xl cursor-pointer"
              >
                Send another message
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <h2 className="text-xl font-bold text-[#172B54]">Send Us a Message</h2>
              <p className="text-xs text-slate-500">
                Fill out the form below and our legal experts will get back to you within 2 hours.
              </p>
              <div>
                <label className="block text-xs font-bold text-[#172B54] mb-1">Full Name *</label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Aditya Sharma"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full rounded-xl border border-slate-200 px-3.5 py-2.5 text-xs text-slate-900"
                />
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-bold text-[#172B54] mb-1">Phone Number *</label>
                  <input
                    type="tel"
                    required
                    placeholder="+91 98765 43210"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className="w-full rounded-xl border border-slate-200 px-3.5 py-2.5 text-xs text-slate-900"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-[#172B54] mb-1">Email Address *</label>
                  <input
                    type="email"
                    required
                    placeholder="you@example.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full rounded-xl border border-slate-200 px-3.5 py-2.5 text-xs text-slate-900"
                  />
                </div>
              </div>
              <div>
                <label className="block text-xs font-bold text-[#172B54] mb-1">Legal Issue Type *</label>
                <select
                  value={issue}
                  onChange={(e) => setIssue(e.target.value)}
                  className="w-full rounded-xl border border-slate-200 px-3 py-2.5 text-xs text-slate-900 bg-white"
                >
                  <option>Property Law</option>
                  <option>Criminal Law</option>
                  <option>Family & Divorce Law</option>
                  <option>Civil Law</option>
                  <option>Corporate & Startup Law</option>
                  <option>Cyber Law</option>
                  <option>Tax Law</option>
                </select>
              </div>
              <div>
                <label className="block text-xs font-bold text-[#172B54] mb-1">Message *</label>
                <textarea
                  rows={4}
                  required
                  placeholder="Briefly describe your legal issue so we can route you to the right lawyer."
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  className="w-full rounded-xl border border-slate-200 px-3.5 py-2.5 text-xs text-slate-900"
                />
              </div>
              <button
                type="submit"
                className="w-full py-3 rounded-xl bg-[#FEC556] hover:bg-[#ffd57a] text-[#172B54] font-bold text-sm shadow-md cursor-pointer"
              >
                Send Message
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
