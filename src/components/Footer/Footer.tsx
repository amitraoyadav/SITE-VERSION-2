import React from 'react';
import { Scale, ShieldCheck, Heart, Lock, AlertTriangle } from 'lucide-react';

interface FooterProps {
  onNavigate: (sectionId: string) => void;
  onOpenCompliance: (tab: 'disclaimer' | 'terms' | 'privacy' | 'bci') => void;
  onOpenEmergency: () => void;
}

export function Footer({
  onNavigate,
  onOpenCompliance,
  onOpenEmergency,
}: FooterProps) {
  return (
    <footer className="bg-[#060e1a] border-t border-slate-800 text-slate-400 text-xs">
      {/* Top Footer Strip: Statutory Disclaimer */}
      <div className="border-b border-slate-800/80 py-6 px-4 sm:px-6 bg-[#040912]">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-start md:items-center justify-between gap-4 text-[11px] text-slate-400 leading-relaxed">
          <div className="flex items-start gap-2 max-w-4xl">
            <AlertTriangle className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
            <div>
              <strong className="text-white">Statutory Regulatory Disclosure:</strong> Raoz Legal is an independent legal coordination platform. As per the Bar Council of India Rules (Rule 36), advocates are prohibited from soliciting work or advertising. Raoz Legal does not advertise or solicit for any advocate. The information provided is solely for public educational literacy and preliminary dispute intake.
            </div>
          </div>
          <button
            onClick={() => onOpenCompliance('bci')}
            className="text-amber-400 hover:text-amber-300 font-mono underline underline-offset-2 shrink-0 cursor-pointer"
          >
            Read Full BCI Notice →
          </button>
        </div>
      </div>

      {/* Main Footer Links */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Brand Col */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-lg bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-amber-400">
                <Scale className="w-4 h-4" />
              </div>
              <span className="text-lg font-bold text-white font-serif tracking-tight">
                RAOZ LEGAL
              </span>
            </div>
            <p className="text-xs text-slate-300 max-w-sm leading-relaxed">
              Legal Help Made Simple. Support When You Need It. We connect citizens across India with verified advocates, statutory legal notice drafting, and confidential consultations.
            </p>
            <div className="text-[11px] text-slate-400 font-mono flex items-center gap-1.5">
              <Lock className="w-3.5 h-3.5 text-emerald-400" />
              <span>DPDPA 2023 Compliant · 256-Bit SSL Intake</span>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-3">
            <h4 className="text-xs font-semibold text-white uppercase font-mono tracking-wider">
              Legal Services
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <button onClick={() => onNavigate('services')} className="hover:text-white transition-colors cursor-pointer">
                  Criminal Defense
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('services')} className="hover:text-white transition-colors cursor-pointer">
                  Divorce & Family Law
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('services')} className="hover:text-white transition-colors cursor-pointer">
                  Property Disputes
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('services')} className="hover:text-white transition-colors cursor-pointer">
                  Cyber Crime & Fraud
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('services')} className="hover:text-white transition-colors cursor-pointer">
                  Cheque Bounce (Sec 138)
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('services')} className="hover:text-white transition-colors cursor-pointer">
                  Consumer Complaints
                </button>
              </li>
            </ul>
          </div>

          {/* Legal Notice & Consultation */}
          <div className="space-y-3">
            <h4 className="text-xs font-semibold text-white uppercase font-mono tracking-wider">
              Notices & Counsel
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <button onClick={() => onNavigate('notices')} className="hover:text-white transition-colors cursor-pointer">
                  Send a Legal Notice
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('notices')} className="hover:text-white transition-colors cursor-pointer">
                  Reply to Received Notice
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('consultation')} className="hover:text-white transition-colors cursor-pointer">
                  Phone Consultation
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('consultation')} className="hover:text-white transition-colors cursor-pointer">
                  Video Consultation
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('directory')} className="hover:text-white transition-colors cursor-pointer">
                  Advocate Directory
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('pricing')} className="hover:text-white transition-colors cursor-pointer">
                  Transparent Pricing
                </button>
              </li>
            </ul>
          </div>

          {/* Legal Compliance & Urgent */}
          <div className="space-y-3">
            <h4 className="text-xs font-semibold text-white uppercase font-mono tracking-wider">
              Compliance & Safety
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <button onClick={() => onOpenCompliance('disclaimer')} className="hover:text-white transition-colors cursor-pointer">
                  Legal Disclaimer
                </button>
              </li>
              <li>
                <button onClick={() => onOpenCompliance('bci')} className="hover:text-white transition-colors cursor-pointer">
                  BCI Rule 36 Policy
                </button>
              </li>
              <li>
                <button onClick={() => onOpenCompliance('terms')} className="hover:text-white transition-colors cursor-pointer">
                  Terms of Service
                </button>
              </li>
              <li>
                <button onClick={() => onOpenCompliance('privacy')} className="hover:text-white transition-colors cursor-pointer">
                  Privacy Policy (DPDPA)
                </button>
              </li>
              <li>
                <button onClick={onOpenEmergency} className="text-red-400 hover:text-red-300 font-medium transition-colors cursor-pointer flex items-center gap-1">
                  <span>Urgent Arrest / Police Help</span>
                </button>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-6 border-t border-slate-800/80 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-slate-500">
          <div>
            © {new Date().getFullYear()} RAOZ LEGAL · A Raoz Site Platform. All rights reserved.
          </div>
          <div className="flex items-center gap-4 text-slate-400">
            <span>Operating Across 28 States & 8 UTs in India</span>
            <span>·</span>
            <span>Emergency Police Helpline: 112</span>
            <span>·</span>
            <span>Cybercrime: 1930</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
