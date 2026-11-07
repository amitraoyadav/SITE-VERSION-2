export interface NoticeTypeInfo {
  id: string;
  name: string;
  statutoryDays: string;
  recommendedFor: string;
  requiredDocuments: string[];
  keyLegalBasis: string;
}

export const LEGAL_NOTICE_TYPES: NoticeTypeInfo[] = [
  {
    id: 'cheque-bounce-notice',
    name: 'Cheque Bounce Notice (Section 138 NI Act)',
    statutoryDays: '15 Days to pay from receipt',
    recommendedFor: 'When a cheque presented for legal debt or liability is returned unpaid by the bank due to insufficient funds.',
    requiredDocuments: ['Original Dishonoured Cheque', 'Bank Return Memo', 'Invoice or Debt Proof'],
    keyLegalBasis: 'Section 138 & 142 of Negotiable Instruments Act 1881',
  },
  {
    id: 'payment-recovery-notice',
    name: 'Payment Recovery & Commercial Dues Notice',
    statutoryDays: '15 to 30 Days',
    recommendedFor: 'Recovery of outstanding business dues, unpaid invoices, personal loans, or consultant fees.',
    requiredDocuments: ['Invoices / Work Orders', 'Account Ledger / Statements', 'Communication / Emails'],
    keyLegalBasis: 'Indian Contract Act 1872 & Order 37 Code of Civil Procedure',
  },
  {
    id: 'property-dispute-notice',
    name: 'Property, Tenancy & Eviction Legal Notice',
    statutoryDays: '15 Days (or as per agreement)',
    recommendedFor: 'Tenant eviction for non-payment of rent, unlawful possession, trespass, or boundary encroachment.',
    requiredDocuments: ['Registered Lease / Rent Agreement', 'Property Title Deed', 'Notice of Default'],
    keyLegalBasis: 'Section 106 Transfer of Property Act 1882',
  },
  {
    id: 'consumer-deficiency-notice',
    name: 'Consumer Legal Notice',
    statutoryDays: '15 to 30 Days',
    recommendedFor: 'Defective products, builder failure to deliver possession, repudiated medical claims, service deficiencies.',
    requiredDocuments: ['Purchase Receipt / Warranty Card', 'Builder Agreement (BBA)', 'Proof of Complaints'],
    keyLegalBasis: 'Section 35 Consumer Protection Act 2019',
  },
  {
    id: 'employment-dispute-notice',
    name: 'Employment & Unpaid Salary Legal Notice',
    statutoryDays: '15 Days',
    recommendedFor: 'Illegal termination without contractual severance, withheld salary, non-payment of gratuity or PF.',
    requiredDocuments: ['Appointment Letter', 'Pay Slips & Bank Statements', 'Termination Letter / Resignation Record'],
    keyLegalBasis: 'Payment of Wages Act & Industrial Disputes Act',
  },
  {
    id: 'defamation-notice',
    name: 'Defamation & Cease-and-Desist Notice',
    statutoryDays: '7 to 15 Days',
    recommendedFor: 'False, damaging statements published on social media, public forums, or print media damaging reputation.',
    requiredDocuments: ['Screenshots of Defamatory Post with Timestamps', 'URLs / Publications', 'Proof of Harm'],
    keyLegalBasis: 'Section 356 Bharatiya Nyaya Sanhita (BNS) & Civil Law of Torts',
  },
  {
    id: 'reply-to-notice',
    name: 'Strategic Reply to Received Legal Notice',
    statutoryDays: 'Within the period stated in the notice received',
    recommendedFor: 'When you have received a legal notice demanding payment, action, or threatening legal suit.',
    requiredDocuments: ['The Received Legal Notice (Full copy)', 'Postal Envelope showing delivery date', 'Rebuttal Evidence'],
    keyLegalBasis: 'Crucial for establishing your defense before court proceedings begin',
  },
  {
    id: 'notice-scrutiny',
    name: 'Check & Assess a Received Legal Notice',
    statutoryDays: 'Immediate',
    recommendedFor: 'Evaluating whether a received notice is legally valid, enforceable, or an empty threat.',
    requiredDocuments: ['Copy of Received Notice'],
    keyLegalBasis: 'Preliminary legal risk assessment by an enrolled advocate',
  },
];
