import React from 'react';
import { WebsiteModuleProps } from '../types';
import LegalPlatformApp from './LegalPlatformApp';

/**
 * Legal Platform (https://www.legalplatform.co/web/) - Modular Website Module (website-003)
 * Recreated from uploaded ZIP archive under category "Legal & Advocate".
 */
export default function Website003({ onBack, isEmbedded }: WebsiteModuleProps) {
  return <LegalPlatformApp onBackToLibrary={onBack} isEmbedded={isEmbedded} />;
}
