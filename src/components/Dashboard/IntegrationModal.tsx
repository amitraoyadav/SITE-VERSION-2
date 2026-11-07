import React, { useState } from 'react';
import { X, Check, Copy, Download, FolderArchive, ArrowRight, ShieldCheck, Sparkles } from 'lucide-react';
import { WebsiteRecord } from '../../data/websites';
import { Category } from '../../data/categories';

interface IntegrationModalProps {
  isOpen: boolean;
  onClose: () => void;
  websites: WebsiteRecord[];
  categories: Category[];
}

export function IntegrationModal({
  isOpen,
  onClose,
  websites,
  categories,
}: IntegrationModalProps) {
  const [activeTab, setActiveTab] = useState<'guide' | 'export_json' | 'registry_code'>('guide');
  const [copied, setCopied] = useState(false);

  if (!isOpen) return null;

  const exportData = {
    libraryName: 'RAOZ SITE – THIRD WEBSITE LIBRARY',
    exportTimestamp: new Date().toISOString(),
    totalWebsites: websites.length,
    totalCategories: categories.length,
    categories,
    websites,
  };

  const jsonString = JSON.stringify(exportData, null, 2);

  const registrySnippet = `// Generated for Raoz Site Main Collection Integration
// Merging Third Website Library (${websites.length} websites)

export const THIRD_LIBRARY_WEBSITES = ${JSON.stringify(websites, null, 2)};

export const THIRD_LIBRARY_CATEGORIES = ${JSON.stringify(categories, null, 2)};

// Dynamic lazy import mapping for Third Library:
export const THIRD_LIBRARY_REGISTRY = {
${websites
  .map(
    (w) => `  '${w.id}': React.lazy(() => import('./websites/${w.id}/index.tsx')),`
  )
  .join('\n')}
};
`;

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const downloadJsonFile = () => {
    const blob = new Blob([jsonString], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `raoz-site-library3-export-${new Date().toISOString().split('T')[0]}.json`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-xs">
      <div className="w-full max-w-3xl bg-neutral-900 border border-neutral-800 rounded-xl shadow-2xl overflow-hidden max-h-[90vh] flex flex-col">
        {/* Header */}
        <div className="px-6 py-4 border-b border-neutral-800 flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-lg bg-neutral-800 flex items-center justify-center text-white">
              <FolderArchive className="w-4 h-4 text-indigo-400" />
            </div>
            <div>
              <h2 className="text-base font-semibold text-white tracking-tight">
                Raoz Site Main Collection Integration Hub
              </h2>
              <p className="text-xs text-neutral-400">
                Seamlessly merge this 3rd library into your original main website without collisions
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 text-neutral-400 hover:text-white rounded-lg hover:bg-neutral-800 transition-colors cursor-pointer"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Sub Navigation */}
        <div className="px-6 border-b border-neutral-800 flex items-center gap-4 text-xs font-medium">
          <button
            onClick={() => setActiveTab('guide')}
            className={`py-3 border-b-2 transition-colors cursor-pointer ${
              activeTab === 'guide'
                ? 'border-white text-white font-semibold'
                : 'border-transparent text-neutral-400 hover:text-neutral-200'
            }`}
          >
            Integration Blueprint
          </button>
          <button
            onClick={() => setActiveTab('export_json')}
            className={`py-3 border-b-2 transition-colors cursor-pointer ${
              activeTab === 'export_json'
                ? 'border-white text-white font-semibold'
                : 'border-transparent text-neutral-400 hover:text-neutral-200'
            }`}
          >
            Export JSON ({websites.length} Sites)
          </button>
          <button
            onClick={() => setActiveTab('registry_code')}
            className={`py-3 border-b-2 transition-colors cursor-pointer ${
              activeTab === 'registry_code'
                ? 'border-white text-white font-semibold'
                : 'border-transparent text-neutral-400 hover:text-neutral-200'
            }`}
          >
            TypeScript Registry Code
          </button>
        </div>

        {/* Content */}
        <div className="p-6 overflow-y-auto space-y-6 text-sm">
          {activeTab === 'guide' && (
            <div className="space-y-6">
              {/* Architecture Guarantee */}
              <div className="p-4 rounded-lg bg-neutral-950 border border-neutral-800 text-xs space-y-2">
                <div className="flex items-center gap-2 text-white font-semibold">
                  <ShieldCheck className="w-4 h-4 text-emerald-400" />
                  <span>Future Integration Guarantee</span>
                </div>
                <p className="text-neutral-400 leading-relaxed">
                  Every website in this library is designed as an isolated, self-contained module in <code className="text-white font-mono">src/websites/{'{id}'}/</code> with its own internal navigation, zero global styling leaks, and lazy loading. It will drop into your original Raoz main website with zero breaking changes.
                </p>
              </div>

              {/* Step by step */}
              <div className="space-y-4">
                <h4 className="text-xs uppercase tracking-wider text-neutral-500 font-mono">
                  3-Step Merge Process
                </h4>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="p-4 rounded-xl border border-neutral-800 bg-neutral-950/60 flex flex-col justify-between">
                    <div>
                      <div className="text-xs font-mono text-indigo-400 font-semibold mb-1">Step 01</div>
                      <h5 className="text-sm font-semibold text-white mb-2">Copy Website Modules</h5>
                      <p className="text-xs text-neutral-400 leading-relaxed">
                        Copy <code className="text-white">src/websites/website-*</code> folders directly into your main project's website folder.
                      </p>
                    </div>
                  </div>

                  <div className="p-4 rounded-xl border border-neutral-800 bg-neutral-950/60 flex flex-col justify-between">
                    <div>
                      <div className="text-xs font-mono text-indigo-400 font-semibold mb-1">Step 02</div>
                      <h5 className="text-sm font-semibold text-white mb-2">Merge Metadata</h5>
                      <p className="text-xs text-neutral-400 leading-relaxed">
                        Export JSON or copy the registry array below and append it to your main website's <code className="text-white">websites.ts</code>.
                      </p>
                    </div>
                  </div>

                  <div className="p-4 rounded-xl border border-neutral-800 bg-neutral-950/60 flex flex-col justify-between">
                    <div>
                      <div className="text-xs font-mono text-indigo-400 font-semibold mb-1">Step 03</div>
                      <h5 className="text-sm font-semibold text-white mb-2">Preserve Lazy Loading</h5>
                      <p className="text-xs text-neutral-400 leading-relaxed">
                        Keep dynamic <code className="text-white">React.lazy()</code> imports so your main site retains lightning performance without loading 30 sites at once.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Safety Checklist */}
              <div className="p-4 rounded-lg bg-neutral-950 border border-neutral-800 text-xs space-y-2.5">
                <h4 className="font-semibold text-white">Conflict Prevention Checklist</h4>
                <ul className="space-y-2 text-neutral-400">
                  <li className="flex items-start gap-2">
                    <Check className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                    <span><strong>Unique IDs:</strong> All IDs follow <code className="text-white">website-001</code> to <code className="text-white">website-030</code>. If your main project uses conflicting numbers, prefix them as <code className="text-white">lib3-website-001</code>.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                    <span><strong>No Root URL Dependencies:</strong> All routes and internal links are relative or handled via internal state, eliminating path collisions.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                    <span><strong>Category Separation:</strong> Categories are decoupled from individual website code, allowing you to merge or map them to existing categories on your main site.</span>
                  </li>
                </ul>
              </div>
            </div>
          )}

          {activeTab === 'export_json' && (
            <div className="space-y-4">
              <div className="flex items-center justify-between text-xs text-neutral-400">
                <span>Complete Snapshot ({websites.length} Websites, {categories.length} Categories)</span>
                <div className="flex items-center gap-2">
                  <button
                    onClick={() => copyToClipboard(jsonString)}
                    className="px-3 py-1.5 rounded-md bg-neutral-800 hover:bg-neutral-700 text-white flex items-center gap-1.5 transition-colors cursor-pointer"
                  >
                    {copied ? <Check className="w-3 h-3 text-emerald-400" /> : <Copy className="w-3 h-3" />}
                    <span>{copied ? 'Copied' : 'Copy JSON'}</span>
                  </button>
                  <button
                    onClick={downloadJsonFile}
                    className="px-3 py-1.5 rounded-md bg-neutral-100 text-neutral-950 hover:bg-white flex items-center gap-1.5 transition-colors cursor-pointer font-semibold"
                  >
                    <Download className="w-3 h-3" />
                    <span>Download .json</span>
                  </button>
                </div>
              </div>
              <pre className="p-4 rounded-lg bg-neutral-950 border border-neutral-800 text-xs font-mono text-neutral-300 overflow-x-auto max-h-96">
                {jsonString}
              </pre>
            </div>
          )}

          {activeTab === 'registry_code' && (
            <div className="space-y-4">
              <div className="flex items-center justify-between text-xs text-neutral-400">
                <span>TypeScript Merge Snippet</span>
                <button
                  onClick={() => copyToClipboard(registrySnippet)}
                  className="px-3 py-1.5 rounded-md bg-neutral-800 hover:bg-neutral-700 text-white flex items-center gap-1.5 transition-colors cursor-pointer"
                >
                  {copied ? <Check className="w-3 h-3 text-emerald-400" /> : <Copy className="w-3 h-3" />}
                  <span>{copied ? 'Copied Code' : 'Copy TypeScript'}</span>
                </button>
              </div>
              <pre className="p-4 rounded-lg bg-neutral-950 border border-neutral-800 text-xs font-mono text-neutral-300 overflow-x-auto max-h-96">
                {registrySnippet}
              </pre>
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="px-6 py-4 border-t border-neutral-800 flex justify-end">
          <button
            onClick={onClose}
            className="px-4 py-2 text-xs font-semibold rounded-lg bg-neutral-100 text-neutral-950 hover:bg-white transition-colors cursor-pointer"
          >
            Done
          </button>
        </div>
      </div>
    </div>
  );
}
