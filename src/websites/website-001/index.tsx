import React from 'react';
import { WebsiteModuleProps } from '../types';
import RaozLegalApp from '../../RaozLegalApp';

/**
 * RAOZ LEGAL - Modular Website Module (website-001)
 * Self-contained for seamless inclusion into Raoz Site Main Collection.
 */
export default function Website001({ onBack }: WebsiteModuleProps) {
  return <RaozLegalApp onBackToLibrary={onBack} isEmbedded={true} />;
}
