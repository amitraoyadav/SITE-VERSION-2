import React from 'react';
import { WebsiteModuleProps } from '../types';
import RaozLegalApp from '../../RaozLegalApp';

/**
 * Raoz Legal Platform - Modular Website Module (website-002)
 * Self-contained for seamless inclusion into Raoz Site Main Collection.
 */
export default function Website002({ onBack }: WebsiteModuleProps) {
  return <RaozLegalApp onBackToLibrary={onBack} isEmbedded={true} />;
}
