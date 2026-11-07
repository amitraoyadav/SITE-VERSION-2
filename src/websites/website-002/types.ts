/**
 * YOURADVOCATEE - Type Definitions
 * Faithful adaptation of Rocket Lawyer for the Indian legal market.
 */

export type DocumentCategory = 'business' | 'real-estate' | 'personal-family' | 'employment';

export interface DocumentField {
  id: string;
  label: string;
  type: 'text' | 'number' | 'date' | 'select' | 'textarea';
  options?: string[];
  placeholder?: string;
  defaultValue?: string;
  helpText?: string;
}

export interface DocumentTemplate {
  id: string;
  title: string;
  category: DocumentCategory;
  shortDesc: string;
  estimatedTime: string;
  popular: boolean;
  governingLaw: string;
  fields: DocumentField[];
  templateGenerator: (values: Record<string, string>) => string;
}

export type BusinessEntityType = 'pvt-ltd' | 'llp' | 'opc' | 'sole-proprietorship' | 'partnership';

export interface BusinessEntityOption {
  id: BusinessEntityType;
  name: string;
  badge?: string;
  description: string;
  idealFor: string;
  statutoryFiling: string;
  minDirectors: number;
  setupTimeDays: string;
  governmentFeeEstimate: number;
  professionalFee: number;
  features: string[];
}

export interface MembershipPlan {
  id: string;
  name: string;
  monthlyPrice: number;
  annualPricePerMonth: number;
  isPopular?: boolean;
  tagline: string;
  features: string[];
  ctaLabel: string;
}
