/**
 * Category management and default taxonomy
 * Decoupled for independent export and future integration
 */

export interface Category {
  id: string;
  name: string;
  description?: string;
}

export const INITIAL_CATEGORIES: Category[] = [
  { 
    id: 'cat-law-firms', 
    name: 'Law Firms', 
    description: 'Legal assistance platforms, advocate consultation, documentation, and online law services' 
  },
  { 
    id: 'cat-saas-ai', 
    name: 'SaaS & AI Platforms', 
    description: 'Artificial intelligence tools, B2B software, and cloud workflows' 
  },
  { 
    id: 'cat-fintech', 
    name: 'Fintech & Banking', 
    description: 'Modern financial services, payment gateways, and banking interfaces' 
  },
  { 
    id: 'cat-agency', 
    name: 'Creative Agency & Studios', 
    description: 'Design agencies, production studios, and digital portfolios' 
  },
  { 
    id: 'cat-ecommerce', 
    name: 'E-Commerce & Brands', 
    description: 'Direct-to-consumer storefronts, luxury products, and retail catalogs' 
  },
];

const STORAGE_KEY_CATEGORIES = 'raoz_site_categories_v2';

export function getStoredCategories(): Category[] {
  try {
    const raw = localStorage.getItem(STORAGE_KEY_CATEGORIES);
    if (raw) {
      const parsed = JSON.parse(raw);
      if (Array.isArray(parsed) && parsed.length > 0) {
        return parsed;
      }
    }
  } catch (err) {
    console.error('Error reading categories from localStorage:', err);
  }
  return INITIAL_CATEGORIES;
}

export function saveCategories(categories: Category[]): void {
  try {
    localStorage.setItem(STORAGE_KEY_CATEGORIES, JSON.stringify(categories));
  } catch (err) {
    console.error('Error saving categories to localStorage:', err);
  }
}
