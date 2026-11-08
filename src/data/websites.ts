/**
 * RAOZ SITE - Website Registry Store
 * Every website has a unique ID, category assignment, reference URL,
 * recreation prompt, and points to its independent module in src/websites/{id}/
 */

export interface WebsiteRecord {
  id: string; // e.g., 'website-001'
  name: string;
  referenceUrl: string;
  category: string;
  description?: string;
  prompt: string;
  referenceImages?: string[];
  createdAt: string;
  status: 'ready' | 'draft' | 'pending';
  hasCustomModule: boolean;
  version?: string;
  tags?: string[];
}

export const INITIAL_WEBSITES: WebsiteRecord[] = [
  {
    id: 'website-001',
    name: 'RAOZ LEGAL',
    referenceUrl: 'https://lawrato.com',
    category: 'Law Firms',
    description: 'Online Indian legal assistance and consultation platform for advocate consultation, legal notices, property disputes, criminal defense, and documentation.',
    prompt: 'Recreate Indian legal assistance platform with 15 legal service areas, 8 statutory legal notice workflows, advocate directory with BCI compliance, multi-step enquiry form, and admin console.',
    createdAt: '2026-11-06',
    status: 'ready',
    hasCustomModule: true,
    version: '1.0.0',
    tags: ['Law Firms', 'Legal Services', 'LawRato Recreation', 'Advocate Consultation'],
  },
  {
    id: 'website-002',
    name: 'YOURADVOCATEE',
    referenceUrl: 'https://www.rocketlawyer.com/',
    category: 'Law Firms',
    description: 'Faithful recreation of Rocket Lawyer adapted for India under the new brand YOURADVOCATEE. Features legal document creation, business incorporation, advocate consultations, and electronic signatures.',
    prompt: 'Faithfully recreate Rocket Lawyer as YOURADVOCATEE for the Indian legal market. Include signature Rocket Lawyer navigation, Legal Documents creation wizard, Start a Business incorporation tool, Ask an Advocate, AdvocateSign e-signatures, and membership pricing.',
    createdAt: '2026-11-06',
    status: 'ready',
    hasCustomModule: true,
    version: '1.0.0',
    tags: ['Law Firms', 'Legal Documents', 'Rocket Lawyer Recreation', 'Business Incorporation'],
  },
  {
    id: 'website-003',
    name: 'Legal Platform',
    referenceUrl: 'https://www.legalplatform.co/web/',
    category: 'Legal & Advocate',
    description: "India's #1 Anonymous Legal Consultation Platform (VakeelSaab recreation). Connect anonymously with 4,000+ verified lawyers online or offline across 18+ practice areas with 3-minute trial, Document Store, and stage-wise billing.",
    prompt: 'Recreate Legal Platform (https://www.legalplatform.co/web/) from the uploaded VakeelSaab ZIP archive under the Legal & Advocate category. Preserve all original pages, design, images, SVG icons, text, fonts, and interactive functionality.',
    createdAt: '2026-11-07',
    status: 'ready',
    hasCustomModule: true,
    version: '1.0.0',
    tags: ['Legal & Advocate', 'Legal Platform', 'Anonymous Consultation', 'VakeelSaab'],
  },
];

const STORAGE_KEY_WEBSITES = 'raoz_site_websites_v2';

export function getStoredWebsites(): WebsiteRecord[] {
  const legalPlatformEntry = INITIAL_WEBSITES.find((w) => w.id === 'website-003')!;
  try {
    const raw = localStorage.getItem(STORAGE_KEY_WEBSITES);
    if (raw) {
      const parsed: WebsiteRecord[] = JSON.parse(raw);
      if (Array.isArray(parsed) && parsed.length > 0) {
        const existingIdx = parsed.findIndex(
          (w) =>
            w.id === 'website-003' ||
            w.name.toLowerCase() === 'legal platform' ||
            w.referenceUrl === 'https://www.legalplatform.co/web/'
        );
        if (existingIdx !== -1) {
          const updated = [...parsed];
          updated[existingIdx] = {
            ...updated[existingIdx],
            ...legalPlatformEntry,
            id: 'website-003',
          };
          return updated;
        }
        return [legalPlatformEntry, ...parsed];
      }
    }
  } catch (err) {
    console.error('Error reading websites from localStorage:', err);
  }
  return INITIAL_WEBSITES;
}

export function saveWebsites(websites: WebsiteRecord[]): void {
  try {
    localStorage.setItem(STORAGE_KEY_WEBSITES, JSON.stringify(websites));
  } catch (err) {
    console.error('Error saving websites to localStorage:', err);
  }
}

export function generateNextWebsiteId(existingWebsites: WebsiteRecord[]): string {
  let maxNum = 0;
  for (const site of existingWebsites) {
    const match = site.id.match(/^website-(\d+)$/);
    if (match) {
      const num = parseInt(match[1], 10);
      if (!isNaN(num) && num > maxNum) {
        maxNum = num;
      }
    }
  }
  const nextNum = maxNum + 1;
  return `website-${String(nextNum).padStart(3, '0')}`;
}
