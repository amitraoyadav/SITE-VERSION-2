/**
 * RAOZ LEGAL - Type Definitions
 * Designed for Indian legal workflows, BCI compliance, and future backend integration.
 */

export type LegalServiceId =
  | 'criminal-law'
  | 'divorce-family'
  | 'property-disputes'
  | 'legal-notice'
  | 'cyber-crime'
  | 'consumer-complaints'
  | 'cheque-bounce'
  | 'civil-disputes'
  | 'employment-labour'
  | 'business-corporate'
  | 'banking-financial'
  | 'documentation-agreements'
  | 'motor-accident'
  | 'domestic-violence'
  | 'immigration-legal';

export interface LegalServiceItem {
  id: LegalServiceId;
  title: string;
  shortDesc: string;
  iconName: string;
  popularIssues: string[];
  applicableLaws: string[];
  turnaroundTime: string;
  badge?: string;
  overview: string;
}

export type AssistanceType =
  | 'consult-advocate'
  | 'send-notice'
  | 'reply-notice'
  | 'criminal-assistance'
  | 'property-assistance'
  | 'documentation'
  | 'other';

export type ConsultationMode = 'online' | 'phone' | 'video' | 'in-person';

export type EnquiryStatus = 'new' | 'reviewing' | 'assigned' | 'completed' | 'cancelled';

export interface LegalEnquiry {
  id: string; // e.g. RZL-2026-10482
  category: string;
  problemDescription: string;
  clientName: string;
  mobileNumber: string;
  email?: string;
  state: string;
  city: string;
  preferredLanguage: string;
  assistanceType: AssistanceType;
  consultationMode?: ConsultationMode;
  uploadedDocuments?: string[];
  createdAt: string;
  status: EnquiryStatus;
  urgencyLevel: 'standard' | 'urgent';
  assignedAdvocateId?: string;
  adminNotes?: string[];
}

export interface LegalNoticeRequest {
  id: string;
  noticeType: string;
  isReply: boolean;
  senderName: string;
  senderAddress: string;
  recipientName: string;
  recipientAddress: string;
  subjectMatter: string;
  demandAmount?: string;
  factsSummary: string;
  existingNoticeUploaded?: string;
  contactMobile: string;
  status: 'draft' | 'under-review' | 'advocate-vetted' | 'dispatched';
  createdAt: string;
}

export interface AdvocateRecord {
  id: string;
  fullName: string;
  enrolmentNumber: string; // e.g. D/1482/2015
  stateBarCouncil: string; // e.g. Bar Council of Delhi
  city: string;
  state: string;
  experienceYears: number;
  qualifications: string[];
  practiceAreas: string[];
  languages: string[];
  modesOffered: ConsultationMode[];
  isVerified: boolean;
  bciConsentOnRecord: boolean;
}

export interface PricingConfig {
  referenceAdminFeePerHour: number; // Proposed ₹50/hr platform coordination
  noticeDraftingStartingFee: number;
  agreementDraftingStartingFee: number;
  isPublished: boolean;
  adminFeeDescription: string;
  advocateFeeDisclaimer: string;
}

export interface EducationalGuide {
  id: string;
  title: string;
  category: string;
  readingTime: string;
  summary: string;
  keyTakeaways: string[];
  legalProvisions: string[];
  contentParagraphs: string[];
}
