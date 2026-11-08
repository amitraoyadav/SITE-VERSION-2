import React, { lazy } from 'react';
import { WebsiteModuleProps } from './types';

/**
 * RAOZ SITE - Dynamic Website Module Registry
 * Implements code splitting and lazy loading so websites only load when opened.
 * Each website has an independent folder in src/websites/{id}/
 */

export interface RegisteredWebsiteModule {
  id: string;
  component: React.LazyExoticComponent<React.ComponentType<WebsiteModuleProps>>;
}

export const WEBSITE_MODULE_REGISTRY: Record<
  string, 
  React.LazyExoticComponent<React.ComponentType<WebsiteModuleProps>>
> = {
  'website-001': lazy(() => import('./website-001/index.tsx')),
  'website-002': lazy(() => import('./website-002/index.tsx')),
  'website-003': lazy(() => import('./website-003/index.tsx')),
};

/**
 * Returns the lazy-loaded component if registered, or null if pending recreation.
 */
export function getWebsiteModule(id: string): React.LazyExoticComponent<React.ComponentType<WebsiteModuleProps>> | null {
  return WEBSITE_MODULE_REGISTRY[id] || null;
}
