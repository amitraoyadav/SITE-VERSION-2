import { LegalEnquiry } from '../types/legal';

export const INITIAL_ENQUIRIES: LegalEnquiry[] = [
  {
    id: 'RZL-2026-78412',
    category: 'Cheque Bounce (Section 138)',
    problemDescription:
      'A contractor gave me a cheque of ₹3,50,000 against building supplies. The cheque bounced on 28th October with memo "Funds Insufficient". Need immediate 15-day statutory legal notice drafted before the 30-day deadline expires.',
    clientName: 'Suresh Chandra Sharma',
    mobileNumber: '9811234567',
    email: 'suresh.sharma.del@gmail.com',
    state: 'Delhi NCR',
    city: 'New Delhi',
    preferredLanguage: 'Hindi (हिन्दी)',
    assistanceType: 'send-notice',
    consultationMode: 'phone',
    uploadedDocuments: ['cheque_front.jpg', 'bank_return_memo.pdf'],
    createdAt: '2026-11-04T10:30:00.000Z',
    status: 'reviewing',
    urgencyLevel: 'urgent',
    assignedAdvocateId: 'adv-del-01',
    adminNotes: ['Client contacted on WhatsApp. Bank memo date verified as 28-Oct. Notice drafting in progress.'],
  },
  {
    id: 'RZL-2026-89204',
    category: 'Property Disputes',
    problemDescription:
      'Ancestral residential land in Pune has been occupied by distant relatives who have started unauthorized construction. Need guidance on obtaining an immediate temporary injunction (stay order) from civil court.',
    clientName: 'Priya Shrikant Kulkarni',
    mobileNumber: '9822098765',
    email: 'priya.kulkarni@yahoo.co.in',
    state: 'Maharashtra',
    city: 'Pune',
    preferredLanguage: 'Marathi (मराठी)',
    assistanceType: 'property-assistance',
    consultationMode: 'video',
    uploadedDocuments: ['7_12_extract.pdf'],
    createdAt: '2026-11-05T14:15:00.000Z',
    status: 'new',
    urgencyLevel: 'standard',
    adminNotes: ['7/12 extract received. Need to schedule video call with Pune property counsel.'],
  },
];

const STORAGE_KEY_ENQUIRIES = 'raoz_legal_enquiries_v1';

export function getStoredEnquiries(): LegalEnquiry[] {
  try {
    const raw = localStorage.getItem(STORAGE_KEY_ENQUIRIES);
    if (raw) return JSON.parse(raw);
  } catch (err) {
    console.error('Error reading enquiries:', err);
  }
  return INITIAL_ENQUIRIES;
}

export function saveStoredEnquiries(enquiries: LegalEnquiry[]): void {
  try {
    localStorage.setItem(STORAGE_KEY_ENQUIRIES, JSON.stringify(enquiries));
  } catch (err) {
    console.error('Error saving enquiries:', err);
  }
}

export function generateEnquiryReferenceId(): string {
  const randomSuffix = Math.floor(10000 + Math.random() * 90000);
  return `RZL-2026-${randomSuffix}`;
}
