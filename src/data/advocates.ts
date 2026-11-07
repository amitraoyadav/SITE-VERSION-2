import { AdvocateRecord } from '../types/legal';

export interface AdvocateDirectorySettings {
  isEnabled: boolean; // BCI Rule 36 compliance: Default is disabled pending institutional review
  bciComplianceNotice: string;
  allowPublicSearch: boolean;
}

export const INITIAL_DIRECTORY_SETTINGS: AdvocateDirectorySettings = {
  isEnabled: false, // Explicitly disabled per BCI compliance guidelines
  bciComplianceNotice:
    'Notice pursuant to Bar Council of India Rules (Rule 36, Section IV, Chapter II, Part VI): Advocates enrolled with State Bar Councils are legally prohibited from advertising or soliciting clients directly or indirectly. The directory feature of Raoz Legal is preserved in a restricted compliance mode and will only display verified enrolment and contact information after individual advocate written consent and regulatory clearance.',
  allowPublicSearch: false,
};

export const INITIAL_VERIFIED_ADVOCATES: AdvocateRecord[] = [
  {
    id: 'adv-del-01',
    fullName: 'Rajiv Sharma',
    enrolmentNumber: 'D/2419/2012',
    stateBarCouncil: 'Bar Council of Delhi',
    city: 'New Delhi',
    state: 'Delhi NCR',
    experienceYears: 14,
    qualifications: ['B.A. LL.B. (Hons.)', 'LL.M. (Constitutional & Criminal Law)'],
    practiceAreas: ['Criminal Law', 'Civil Disputes', 'Cheque Bounce (Sec 138)'],
    languages: ['Hindi', 'English'],
    modesOffered: ['online', 'phone', 'video', 'in-person'],
    isVerified: true,
    bciConsentOnRecord: true,
  },
  {
    id: 'adv-mum-02',
    fullName: 'Ananya Deshmukh',
    enrolmentNumber: 'MAH/5812/2015',
    stateBarCouncil: 'Bar Council of Maharashtra & Goa',
    city: 'Mumbai',
    state: 'Maharashtra',
    experienceYears: 11,
    qualifications: ['LL.B. (Mumbai University)', 'Diploma in Cyber Law'],
    practiceAreas: ['Cyber Crime', 'Business & Corporate Law', 'Consumer Complaints'],
    languages: ['Marathi', 'Hindi', 'English'],
    modesOffered: ['online', 'video', 'phone'],
    isVerified: true,
    bciConsentOnRecord: true,
  },
  {
    id: 'adv-blr-03',
    fullName: 'K. Venkatesh Rao',
    enrolmentNumber: 'KAR/1984/2010',
    stateBarCouncil: 'Karnataka State Bar Council',
    city: 'Bengaluru',
    state: 'Karnataka',
    experienceYears: 16,
    qualifications: ['B.Sc., LL.B.', 'PGD in Real Estate Law (NLSIU)'],
    practiceAreas: ['Property Disputes', 'Documentation & Agreements', 'Civil Disputes'],
    languages: ['Kannada', 'English', 'Telugu'],
    modesOffered: ['in-person', 'video', 'online'],
    isVerified: true,
    bciConsentOnRecord: true,
  },
  {
    id: 'adv-chd-04',
    fullName: 'Harpreet Singh Gill',
    enrolmentNumber: 'P&H/3104/2014',
    stateBarCouncil: 'Bar Council of Punjab & Haryana',
    city: 'Chandigarh',
    state: 'Punjab',
    experienceYears: 12,
    qualifications: ['B.Com. LL.B.', 'Diploma in Labour Laws'],
    practiceAreas: ['Employment & Labour Law', 'Banking & Financial Disputes', 'Legal Notice Assistance'],
    languages: ['Punjabi', 'Hindi', 'English'],
    modesOffered: ['phone', 'video', 'in-person'],
    isVerified: true,
    bciConsentOnRecord: true,
  },
];

const STORAGE_KEY_ADVOCATES = 'raoz_legal_advocates_v1';
const STORAGE_KEY_DIR_SETTINGS = 'raoz_legal_dir_settings_v1';

export function getStoredAdvocates(): AdvocateRecord[] {
  try {
    const raw = localStorage.getItem(STORAGE_KEY_ADVOCATES);
    if (raw) return JSON.parse(raw);
  } catch (err) {
    console.error('Error reading advocates from storage:', err);
  }
  return INITIAL_VERIFIED_ADVOCATES;
}

export function saveStoredAdvocates(advocates: AdvocateRecord[]): void {
  try {
    localStorage.setItem(STORAGE_KEY_ADVOCATES, JSON.stringify(advocates));
  } catch (err) {
    console.error('Error saving advocates to storage:', err);
  }
}

export function getStoredDirectorySettings(): AdvocateDirectorySettings {
  try {
    const raw = localStorage.getItem(STORAGE_KEY_DIR_SETTINGS);
    if (raw) return JSON.parse(raw);
  } catch (err) {
    console.error('Error reading directory settings:', err);
  }
  return INITIAL_DIRECTORY_SETTINGS;
}

export function saveStoredDirectorySettings(settings: AdvocateDirectorySettings): void {
  try {
    localStorage.setItem(STORAGE_KEY_DIR_SETTINGS, JSON.stringify(settings));
  } catch (err) {
    console.error('Error saving directory settings:', err);
  }
}
