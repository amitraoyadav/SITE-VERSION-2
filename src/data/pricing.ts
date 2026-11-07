import { PricingConfig } from '../types/legal';

export const INITIAL_PRICING_CONFIG: PricingConfig = {
  referenceAdminFeePerHour: 50, // Reference ₹50 administrative coordination fee
  noticeDraftingStartingFee: 1499,
  agreementDraftingStartingFee: 999,
  isPublished: false, // Default is UNPUBLISHED pending administrator verification & advocate agreement
  adminFeeDescription:
    'Raoz Legal charges a nominal platform administrative fee (proposed reference ₹50/hr) strictly for technology infrastructure, initial documentation intake, and appointment coordination. This is separate from professional advocate legal fees.',
  advocateFeeDisclaimer:
    'Advocate professional consultation fees are established independently between the client and the respective enrolled advocate in accordance with Bar Council of India norms. No fee is charged without prior quotation and client consent.',
};

const STORAGE_KEY_PRICING = 'raoz_legal_pricing_config_v1';

export function getStoredPricingConfig(): PricingConfig {
  try {
    const raw = localStorage.getItem(STORAGE_KEY_PRICING);
    if (raw) {
      return JSON.parse(raw);
    }
  } catch (err) {
    console.error('Error reading pricing config from storage:', err);
  }
  return INITIAL_PRICING_CONFIG;
}

export function saveStoredPricingConfig(config: PricingConfig): void {
  try {
    localStorage.setItem(STORAGE_KEY_PRICING, JSON.stringify(config));
  } catch (err) {
    console.error('Error saving pricing config to storage:', err);
  }
}
