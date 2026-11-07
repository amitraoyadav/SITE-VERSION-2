import { MembershipPlan } from '../types';

export const MEMBERSHIP_PLANS: MembershipPlan[] = [
  {
    id: 'trial-7-day',
    name: '7-Day Free Trial',
    monthlyPrice: 0,
    annualPricePerMonth: 0,
    tagline: 'Test out YOURADVOCATEE with zero risk. Cancel anytime.',
    features: [
      'Create and edit 1 free legal document',
      'Try AdvocateSign® electronic signatures',
      'Ask 1 preliminary legal question to our advocate network',
      'Download document in printable format',
      'Zero upfront payment commitment',
    ],
    ctaLabel: 'Start 7-Day Free Trial',
  },
  {
    id: 'premium-monthly',
    name: 'Premium Legal Membership',
    monthlyPrice: 1499,
    annualPricePerMonth: 999,
    isPopular: true,
    tagline: 'Comprehensive legal document protection & advocate consultation for individuals and growing startups.',
    features: [
      'Unlimited legal document creation & customization',
      'Unlimited AdvocateSign® electronic signatures for all parties',
      'FREE 30-minute consultation with an advocate on each new legal matter',
      'Advocate document review on drafts created through the platform',
      '25% discount on Company Incorporation & Trademark filings',
      'Secure encrypted cloud document vault',
    ],
    ctaLabel: 'Get Premium Protection',
  },
  {
    id: 'business-annual',
    name: 'Business Pro Membership',
    monthlyPrice: 2499,
    annualPricePerMonth: 1999,
    tagline: 'Designed for active businesses, SMEs, and funded startups requiring continuous legal compliance.',
    features: [
      'Everything in Premium Membership',
      'FREE Private Limited Company or LLP Incorporation filing service',
      'GST & MSME annual compliance guidance',
      'Priority turnaround for advocate question replies within 1 business day',
      'Up to 5 team member access seats',
      'Dedicated legal relationship coordinator',
    ],
    ctaLabel: 'Choose Business Pro',
  },
];
