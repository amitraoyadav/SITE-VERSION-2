/**
 * Contract for all independent website modules in RAOZ SITE
 * Guarantees zero side effects and seamless future integration
 */

export interface WebsiteModuleProps {
  /** Optional callback to return to the parent library dashboard */
  onBack?: () => void;
  /** Whether the module is embedded in a responsive device frame or standalone */
  isEmbedded?: boolean;
}

export type WebsiteModuleComponent = React.ComponentType<WebsiteModuleProps>;
