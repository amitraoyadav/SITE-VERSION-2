import React, { Suspense, useState } from 'react';
import { 
  ArrowLeft, 
  Monitor, 
  Smartphone, 
  Tablet, 
  Laptop, 
  ExternalLink, 
  FileText, 
  Maximize2, 
  Code, 
  Loader2 
} from 'lucide-react';
import { WebsiteRecord } from '../../data/websites';
import { getWebsiteModule } from '../../websites/registry';

interface WebsiteViewerProps {
  website: WebsiteRecord;
  onBack: () => void;
  onViewSpecs: (website: WebsiteRecord) => void;
}

type ViewportMode = 'full' | 'laptop' | 'tablet' | 'mobile';

export function WebsiteViewer({ website, onBack, onViewSpecs }: WebsiteViewerProps) {
  const [viewport, setViewport] = useState<ViewportMode>('full');

  const LazyComponent = getWebsiteModule(website.id);

  // Viewport width styling
  const getViewportWidthClass = () => {
    switch (viewport) {
      case 'laptop':
        return 'max-w-[1024px] mx-auto border-x border-neutral-800 shadow-2xl';
      case 'tablet':
        return 'max-w-[768px] mx-auto border-x border-neutral-800 shadow-2xl';
      case 'mobile':
        return 'max-w-[390px] mx-auto border-x border-neutral-800 shadow-2xl min-h-[844px]';
      case 'full':
      default:
        return 'w-full';
    }
  };

  return (
    <div className="min-h-screen bg-neutral-950 flex flex-col">
      {/* Top Control Bar */}
      <div className="sticky top-0 z-50 bg-neutral-950 border-b border-neutral-800 px-4 py-2.5 flex items-center justify-between gap-4">
        {/* Left: Back button & Website Info */}
        <div className="flex items-center gap-3">
          <button
            onClick={onBack}
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-neutral-900 hover:bg-neutral-800 text-xs font-medium text-neutral-200 transition-colors cursor-pointer border border-neutral-800"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>Dashboard</span>
          </button>

          <div className="hidden sm:flex items-center gap-2 text-xs">
            <span className="font-semibold text-white">{website.name}</span>
            <span className="text-neutral-600">/</span>
            <span className="text-neutral-400 font-mono text-[11px]">{website.id}</span>
            <span className="text-neutral-600">·</span>
            <span className="text-neutral-400">{website.category}</span>
          </div>
        </div>

        {/* Center: Responsive Viewport Switcher */}
        <div className="hidden md:flex items-center p-0.5 bg-neutral-900 border border-neutral-800 rounded-lg">
          <button
            onClick={() => setViewport('full')}
            className={`p-1.5 rounded-md text-xs transition-colors cursor-pointer ${
              viewport === 'full' ? 'bg-neutral-800 text-white shadow-xs' : 'text-neutral-400 hover:text-white'
            }`}
            title="Desktop Full Width (100%)"
          >
            <Maximize2 className="w-3.5 h-3.5" />
          </button>
          <button
            onClick={() => setViewport('laptop')}
            className={`p-1.5 rounded-md text-xs transition-colors cursor-pointer ${
              viewport === 'laptop' ? 'bg-neutral-800 text-white shadow-xs' : 'text-neutral-400 hover:text-white'
            }`}
            title="Laptop View (1024px)"
          >
            <Laptop className="w-3.5 h-3.5" />
          </button>
          <button
            onClick={() => setViewport('tablet')}
            className={`p-1.5 rounded-md text-xs transition-colors cursor-pointer ${
              viewport === 'tablet' ? 'bg-neutral-800 text-white shadow-xs' : 'text-neutral-400 hover:text-white'
            }`}
            title="Tablet View (768px)"
          >
            <Tablet className="w-3.5 h-3.5" />
          </button>
          <button
            onClick={() => setViewport('mobile')}
            className={`p-1.5 rounded-md text-xs transition-colors cursor-pointer ${
              viewport === 'mobile' ? 'bg-neutral-800 text-white shadow-xs' : 'text-neutral-400 hover:text-white'
            }`}
            title="Mobile View (390px)"
          >
            <Smartphone className="w-3.5 h-3.5" />
          </button>
        </div>

        {/* Right: Actions */}
        <div className="flex items-center gap-2">
          <button
            onClick={() => onViewSpecs(website)}
            className="inline-flex items-center gap-1 px-2.5 py-1.5 rounded-lg bg-neutral-900 hover:bg-neutral-800 text-neutral-300 hover:text-white text-xs border border-neutral-800 transition-colors cursor-pointer"
            title="View Prompt and Specs"
          >
            <FileText className="w-3.5 h-3.5" />
            <span className="hidden sm:inline">Recreation Specs</span>
          </button>

          {website.referenceUrl && (
            <a
              href={website.referenceUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1 px-2.5 py-1.5 rounded-lg bg-neutral-900 hover:bg-neutral-800 text-neutral-300 hover:text-white text-xs border border-neutral-800 transition-colors"
              title="Open Original Reference Website"
            >
              <ExternalLink className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">Reference Site</span>
            </a>
          )}
        </div>
      </div>

      {/* Main Sandbox Content Viewport */}
      <div className="flex-1 bg-neutral-900/40 overflow-y-auto">
        <div className={`transition-all duration-200 bg-neutral-950 min-h-screen ${getViewportWidthClass()}`}>
          {LazyComponent ? (
            <Suspense
              fallback={
                <div className="min-h-[60vh] flex flex-col items-center justify-center gap-3 text-neutral-400">
                  <Loader2 className="w-6 h-6 animate-spin text-neutral-500" />
                  <span className="text-xs font-mono">Loading {website.name} module...</span>
                </div>
              }
            >
              <LazyComponent onBack={onBack} isEmbedded={viewport !== 'full'} />
            </Suspense>
          ) : (
            /* Fallback when module is pending code build */
            <div className="p-8 sm:p-12 max-w-2xl mx-auto space-y-6 text-center">
              <div className="w-12 h-12 rounded-xl bg-neutral-900 border border-neutral-800 flex items-center justify-center mx-auto text-neutral-400">
                <Code className="w-6 h-6" />
              </div>

              <div className="space-y-2">
                <h2 className="text-xl font-bold text-white tracking-tight">{website.name}</h2>
                <p className="text-xs text-neutral-400 max-w-md mx-auto">
                  This website was registered in Raoz Site Library III. Provide the URL or prompt to build its dedicated module.
                </p>
              </div>

              <div className="p-4 rounded-lg bg-neutral-900 border border-neutral-800 text-left text-xs space-y-2 font-mono">
                <div className="text-neutral-500">Module Path:</div>
                <div className="text-indigo-400 font-semibold">src/websites/{website.id}/index.tsx</div>
                <div className="text-neutral-500 pt-2">Assigned Category:</div>
                <div className="text-white">{website.category}</div>
                <div className="text-neutral-500 pt-2">Original Reference:</div>
                <a
                  href={website.referenceUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="text-sky-400 hover:underline flex items-center gap-1"
                >
                  <span>{website.referenceUrl}</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>

              <div className="pt-2 flex justify-center gap-3">
                <button
                  onClick={() => onViewSpecs(website)}
                  className="px-4 py-2 text-xs font-medium rounded-lg bg-neutral-800 hover:bg-neutral-700 text-white cursor-pointer"
                >
                  View Building Prompt
                </button>
                <button
                  onClick={onBack}
                  className="px-4 py-2 text-xs font-semibold rounded-lg bg-neutral-100 text-neutral-950 hover:bg-white cursor-pointer"
                >
                  Back to Dashboard
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
