import React from 'react';
import { Phone, Mail, MapPin } from 'lucide-react';
import { PageRoute } from './Navbar';

interface FooterProps {
  onNavigate: (page: PageRoute, serviceId?: string) => void;
  onOpenCallModal: (prefilledIssue?: string) => void;
}

const LAWYERS_ONLINE = [
  { label: 'Property Lawyer', id: 'property-lawyer' },
  { label: 'Criminal Lawyer', id: 'criminal-defense-lawyer' },
  { label: 'Civil Lawyer', id: 'civil-lawyer' },
  { label: 'Family Lawyer', id: 'family-lawyer' },
  { label: 'Divorce Lawyer', id: 'divorce-lawyers' },
  { label: 'Corporate Lawyer', id: 'corporate-lawyer-in-india' },
  { label: 'Intellectual Property Lawyer', id: 'intellectual-property-lawyer' },
  { label: 'Labour & Employment Lawyer', id: 'labour-and-employment-lawyer' },
  { label: 'Administrative Lawyer', id: 'administrative-lawyer' },
  { label: 'Tax Lawyer', id: 'tax-lawyer' },
  { label: 'Consumer Protection Lawyer', id: 'consumer-protection-lawyer' },
  { label: 'Environmental Lawyer', id: 'environmental-lawyer' },
  { label: 'Immigration Lawyer', id: 'immigration-lawyer' },
  { label: 'Insurance Lawyer', id: 'insurance-lawyer' },
  { label: 'Startup Lawyer', id: 'startup-lawyer' },
  { label: 'Business Lawyer', id: 'business-lawyer' },
  { label: 'High Court Lawyers', id: 'civil-lawyer' },
  { label: 'Supreme Court Lawyers in India', id: 'administrative-lawyer' },
  { label: 'NCLT Lawyers', id: 'corporate-lawyer-in-india' },
  { label: 'NRI Lawyers', id: 'nri-lawyer' },
  { label: 'Female Lawyers in India', id: 'family-lawyer' },
  { label: 'Special Leave Petition (SLP)', id: 'administrative-lawyer' },
  { label: 'POCSO Lawyer', id: 'criminal-defense-lawyer' },
  { label: 'Writ Petition Lawyer', id: 'administrative-lawyer' }
];

const LAWYERS_IN_INDIA_STATES = [
  'Online Lawyer Consultation in Delhi',
  'Online Lawyer Consultation in Haryana',
  'Online Lawyer Consultation in Madhya Pradesh',
  'Online Lawyer Consultation in Punjab',
  'Online Lawyer Consultation in Rajasthan',
  'Online Lawyer Consultation in Telangana',
  'Online Lawyer Consultation in Uttar Pradesh',
  'Online Lawyer Consultation in Noida',
  'Online Lawyer Consultation in Chandigarh',
  'Online Lawyer Consultation in Kerala'
];

const LAWYERS_IN_INDIA_CITIES = [
  'Online Lawyer Consultation in Mumbai',
  'Online Lawyer Consultation in Bengaluru',
  'Online Lawyer Consultation in Chennai',
  'Online Lawyer Consultation in Hyderabad',
  'Online Lawyer Consultation in Pune',
  'Online Lawyer Consultation in Gurugram',
  'Online Lawyer Consultation in Ahmedabad',
  'Online Lawyer Consultation in Meerut'
];

const HIGH_COURT_LAWYERS = [
  'High Court Lawyers in Delhi',
  'High Court Lawyers in Haryana',
  'High Court Lawyers in Punjab',
  'High Court Lawyers in Madhya Pradesh',
  'High Court Lawyers in Uttar Pradesh',
  'High Court Lawyers in Rajasthan',
  'High Court Lawyers in Gujarat',
  'High Court Lawyers in Jharkhand',
  'High Court Lawyers in Madras',
  'High Court Lawyers in Allahabad',
  'High Court Lawyers in Patna',
  'High Court Lawyers in Kolkata'
];

const POPULAR_SEARCHES = [
  'Corporate Lawyer in Delhi',
  'Corporate Lawyer in Gurgaon',
  'Corporate Lawyer in Noida',
  'Corporate Lawyer in Sonipat',
  'Corporate Lawyer in Bengaluru',
  'Startup Lawyer in Delhi',
  'Startup Lawyer in Gurgaon',
  'Startup Lawyer in Noida',
  'Startup Lawyer in Sonipat',
  'Startup Lawyer in Chandigarh',
  'Startup Lawyer in Bengaluru',
  'Property Lawyer in Delhi',
  'Property Lawyer in Gurgaon',
  'Property Lawyer in Noida',
  'Property Lawyer in Sonipat',
  'Property Lawyer in Chandigarh',
  'Property Lawyer in Bengaluru',
  'Criminal Lawyer in Delhi',
  'Criminal Lawyer in Gurgaon',
  'Criminal Lawyer in Noida',
  'Criminal Lawyer in Chandigarh',
  'Criminal Lawyer in Bengaluru',
  'Divorce Lawyer in Delhi',
  'Divorce Lawyer in Gurgaon',
  'Divorce Lawyer in Noida',
  'Divorce Lawyer in Sonipat',
  'Divorce Lawyer in Chandigarh',
  'Divorce Lawyer in Bengaluru',
  'Property Lawyer in Hyderabad',
  'Criminal Lawyer in Hyderabad',
  'Divorce Lawyer in Hyderabad',
  'Corporate Lawyer in Hyderabad',
  'Startup Lawyer in Hyderabad'
];

export function Footer({ onNavigate, onOpenCallModal }: FooterProps) {
  return (
    <footer className="bg-[#0b1a3a] text-white py-12 relative">
      <div className="max-w-[85rem] mx-auto px-6">
        {/* 5-Column Directory Links */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 mb-12">
          {/* Column 1: Lawyers Online */}
          <div>
            <h3 className="font-bold text-lg mb-6 text-white">Lawyers Online</h3>
            <ul className="space-y-1.5">
              {LAWYERS_ONLINE.map((item) => (
                <li key={item.label}>
                  <button
                    onClick={() => onNavigate('service-detail', item.id)}
                    className="text-white/90 hover:text-[#FEC556] transition-colors text-sm text-left cursor-pointer"
                  >
                    {item.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 2: Lawyers in India (States) */}
          <div>
            <h3 className="font-bold text-lg mb-6 text-white">Lawyers in India</h3>
            <ul className="space-y-1.5">
              {LAWYERS_IN_INDIA_STATES.map((label) => (
                <li key={label}>
                  <button
                    onClick={() => onOpenCallModal(label)}
                    className="text-white/90 hover:text-[#FEC556] transition-colors text-sm text-left cursor-pointer"
                  >
                    {label}
                  </button>
                </li>
              ))}
              <li className="pt-1">
                <button
                  onClick={() => onNavigate('services')}
                  className="text-[#FEC556] hover:text-[#fda800] transition-colors text-sm font-semibold cursor-pointer"
                >
                  View All →
                </button>
              </li>
            </ul>
          </div>

          {/* Column 3: Lawyers in India (Cities) */}
          <div>
            <h3 className="font-bold text-lg mb-6 text-white">Lawyers in India</h3>
            <ul className="space-y-1.5">
              {LAWYERS_IN_INDIA_CITIES.map((label) => (
                <li key={label}>
                  <button
                    onClick={() => onOpenCallModal(label)}
                    className="text-white/90 hover:text-[#FEC556] transition-colors text-sm text-left cursor-pointer"
                  >
                    {label}
                  </button>
                </li>
              ))}
              <li className="pt-1">
                <button
                  onClick={() => onNavigate('services')}
                  className="text-[#FEC556] hover:text-[#fda800] transition-colors text-sm font-semibold cursor-pointer"
                >
                  View All →
                </button>
              </li>
            </ul>
          </div>

          {/* Column 4: High Court Lawyers */}
          <div>
            <h3 className="font-bold text-lg mb-6 text-white">High Court Lawyers</h3>
            <ul className="space-y-1.5">
              {HIGH_COURT_LAWYERS.map((label) => (
                <li key={label}>
                  <button
                    onClick={() => onOpenCallModal(label)}
                    className="text-white/90 hover:text-[#FEC556] transition-colors text-sm text-left cursor-pointer"
                  >
                    {label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 5: VakeelSaab Platform Links */}
          <div>
            <h3 className="font-bold text-lg mb-6 text-white">VakeelSaab</h3>
            <ul className="space-y-1.5 text-sm">
              <li>
                <button onClick={() => onNavigate('about')} className="text-white/90 hover:text-[#FEC556] transition-colors cursor-pointer">
                  About Us
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('services')} className="text-white/90 hover:text-[#FEC556] transition-colors cursor-pointer">
                  Legal Services
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('how-we-work')} className="text-white/90 hover:text-[#FEC556] transition-colors cursor-pointer">
                  How We Work
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('legal-guide')} className="text-white/90 hover:text-[#FEC556] transition-colors cursor-pointer">
                  Legal Guide
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('document-store')} className="text-white/90 hover:text-[#FEC556] transition-colors cursor-pointer">
                  Document Store
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('register-lawyer')} className="text-white/90 hover:text-[#FEC556] transition-colors cursor-pointer">
                  Register as a Lawyer
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('register-business')} className="text-white/90 hover:text-[#FEC556] transition-colors cursor-pointer">
                  Register as a Business
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('reviews')} className="text-white/90 hover:text-[#FEC556] transition-colors cursor-pointer">
                  Client Reviews
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('terms')} className="text-white/90 hover:text-[#FEC556] transition-colors cursor-pointer">
                  Client Terms & Conditions
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('terms')} className="text-white/90 hover:text-[#FEC556] transition-colors cursor-pointer">
                  Lawyer Terms & Conditions
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('privacy')} className="text-white/90 hover:text-[#FEC556] transition-colors cursor-pointer">
                  Privacy Policy
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('contact')} className="text-white/90 hover:text-[#FEC556] transition-colors cursor-pointer">
                  Contact Us
                </button>
              </li>
            </ul>
          </div>
        </div>

        {/* Popular Search Bar */}
        <div className="border-t border-white/15 pt-8 pb-8">
          <div className="flex flex-wrap items-baseline gap-y-2">
            <span className="font-bold text-lg text-white mr-4">Popular Search</span>
            {POPULAR_SEARCHES.map((item, idx) => (
              <div key={item} className="flex items-baseline text-sm">
                <button
                  onClick={() => onOpenCallModal(item)}
                  className="text-white/85 hover:text-[#FEC556] transition-colors whitespace-nowrap cursor-pointer"
                >
                  {item}
                </button>
                {idx < POPULAR_SEARCHES.length - 1 && <span className="text-white/40 mx-2">|</span>}
              </div>
            ))}
          </div>
        </div>

        {/* Brand & Address Row */}
        <div className="border-t border-white/15 pt-8 pb-6 grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
          <div className="flex items-center justify-center lg:justify-start gap-3">
            <img
              src="/vakeelsaab/images/vakeel-saab-logo.png"
              alt="VakeelSaab Logo"
              className="w-12 h-12 object-contain"
              referrerPolicy="no-referrer"
            />
            <div>
              <div className="font-bold text-white text-2xl">VakeelSaab</div>
              <div className="text-white/80 text-xs">Online Lawyer Consultation</div>
            </div>
          </div>

          <div className="text-center lg:text-left">
            <p className="text-white/90 text-sm leading-[170%]">
              VakeelSaab also known as &quot;Vakeel Saab&quot; is India&apos;s Trusted Platform for Online Lawyer Consultation &amp; Legal Advice. Get affordable, anonymous, and expert legal advice online from verified lawyers across various legal fields.
            </p>
          </div>

          <div className="text-center lg:text-left">
            <div className="space-y-2.5 text-white text-sm">
              <div className="flex items-start justify-center lg:justify-start space-x-2.5">
                <span className="bg-[#FEC556] text-[#172B54] rounded-full p-1.5 mt-0.5 shrink-0">
                  <Phone className="w-3.5 h-3.5" />
                </span>
                <button onClick={() => onOpenCallModal()} className="hover:text-[#FEC556] font-medium cursor-pointer">
                  +91 72848 72848
                </button>
              </div>
              <div className="flex items-start justify-center lg:justify-start space-x-2.5">
                <span className="bg-[#FEC556] text-[#172B54] rounded-full p-1.5 mt-0.5 shrink-0">
                  <Mail className="w-3.5 h-3.5" />
                </span>
                <a href="mailto:help@vakeelsaab.com" className="hover:text-[#FEC556]">
                  help@vakeelsaab.com
                </a>
              </div>
              <div className="flex items-start justify-center lg:justify-start space-x-2.5">
                <span className="bg-[#FEC556] text-[#172B54] rounded-full p-1.5 mt-0.5 shrink-0">
                  <MapPin className="w-3.5 h-3.5" />
                </span>
                <span className="text-left text-white/85">
                  MV HUMHAINA PRIVATE LIMITED E-14/13, First floor, Vasant Vihar, New Delhi, Delhi, India - 110057
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="h-px bg-white/25 mt-2"></div>
        <div className="mt-2 pt-6 text-center text-sm text-white/90">
          <p>© 2025 VakeelSaab | India&apos;s Trusted Platform for Online Lawyer Consultation &amp; Legal Advice</p>
        </div>
      </div>

      {/* Floating Bottom-Right Call Lawyer Button from Original ZIP */}
      <div className="fixed bottom-6 right-6 z-50">
        <div className="relative">
          <div className="absolute inset-0 w-36 h-14 rounded-full bg-[#FEC556] opacity-25 animate-ping pointer-events-none"></div>
          <button
            onClick={() => onOpenCallModal()}
            aria-label="Call Lawyer Now"
            className="relative w-36 h-14 bg-[#FEC556] hover:bg-[#ffd57a] rounded-full flex items-center justify-center gap-2 shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-200 z-10 cursor-pointer border-2 border-[#172B54]/10"
          >
            <span className="font-bold text-[#172B54] text-sm">Call Lawyer</span>
            <Phone className="w-4 h-4 text-[#172B54]" />
          </button>
        </div>
      </div>
    </footer>
  );
}
