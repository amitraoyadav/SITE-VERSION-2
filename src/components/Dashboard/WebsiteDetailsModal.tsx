import React, { useState } from 'react';
import { X, ExternalLink, Play, Copy, Check, Code, Calendar, Folder } from 'lucide-react';
import { WebsiteRecord } from '../../data/websites';

interface WebsiteDetailsModalProps {
  website: WebsiteRecord | null;
  onClose: () => void;
  onLaunch: (website: WebsiteRecord) => void;
}

export function WebsiteDetailsModal({ website, onClose, onLaunch }: WebsiteDetailsModalProps) {
  const [copiedPrompt, setCopiedPrompt] = useState(false);

  if (!website) return null;

  const copyPromptText = () => {
    navigator.clipboard.writeText(website.prompt);
    setCopiedPrompt(true);
    setTimeout(() => setCopiedPrompt(false), 2000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-xs">
      <div className="w-full max-w-2xl bg-neutral-900 border border-neutral-800 rounded-xl shadow-2xl overflow-hidden max-h-[90vh] flex flex-col">
        {/* Header */}
        <div className="px-6 py-4 border-b border-neutral-800 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <span className="font-mono text-xs text-neutral-400 bg-neutral-950 px-2.5 py-1 rounded-md border border-neutral-800">
              {website.id}
            </span>
            <div>
              <h2 className="text-base font-semibold text-white tracking-tight">{website.name}</h2>
              <div className="flex items-center gap-2 text-xs text-neutral-500 mt-0.5">
                <span>{website.category}</span>
                <span>·</span>
                <span className="flex items-center gap-1">
                  <Calendar className="w-3 h-3" />
                  {website.createdAt}
                </span>
              </div>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 text-neutral-400 hover:text-white rounded-lg hover:bg-neutral-800 transition-colors cursor-pointer"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Body */}
        <div className="p-6 overflow-y-auto space-y-6 text-sm">
          {/* Reference URL */}
          <div className="p-4 rounded-lg bg-neutral-950 border border-neutral-800 flex items-center justify-between">
            <div>
              <div className="text-[11px] uppercase tracking-wider text-neutral-500 font-mono">Reference URL</div>
              <a
                href={website.referenceUrl}
                target="_blank"
                rel="noreferrer"
                className="text-xs text-indigo-400 hover:text-indigo-300 font-mono flex items-center gap-1.5 mt-0.5"
              >
                <span>{website.referenceUrl}</span>
                <ExternalLink className="w-3 h-3" />
              </a>
            </div>
            <div className="text-right">
              <div className="text-[11px] uppercase tracking-wider text-neutral-500 font-mono">Module Directory</div>
              <div className="text-xs text-neutral-300 font-mono mt-0.5 flex items-center gap-1 justify-end">
                <Folder className="w-3 h-3 text-neutral-500" />
                <span>src/websites/{website.id}</span>
              </div>
            </div>
          </div>

          {/* Description */}
          {website.description && (
            <div>
              <h4 className="text-xs font-medium text-neutral-300 mb-1.5">Description</h4>
              <p className="text-xs text-neutral-400 leading-relaxed bg-neutral-950/60 p-3.5 rounded-lg border border-neutral-800/80">
                {website.description}
              </p>
            </div>
          )}

          {/* Recreation Prompt / Instructions */}
          <div>
            <div className="flex items-center justify-between mb-1.5">
              <h4 className="text-xs font-medium text-neutral-300">Recreation Prompt & Instructions</h4>
              <button
                onClick={copyPromptText}
                className="text-[11px] text-neutral-400 hover:text-white flex items-center gap-1 cursor-pointer transition-colors"
              >
                {copiedPrompt ? <Check className="w-3 h-3 text-emerald-400" /> : <Copy className="w-3 h-3" />}
                <span>{copiedPrompt ? 'Copied' : 'Copy Prompt'}</span>
              </button>
            </div>
            <div className="p-4 rounded-lg bg-neutral-950 border border-neutral-800 font-mono text-xs text-neutral-300 whitespace-pre-wrap leading-relaxed max-h-48 overflow-y-auto">
              {website.prompt}
            </div>
          </div>

          {/* Reference Images if available */}
          {website.referenceImages && website.referenceImages.length > 0 && (
            <div>
              <h4 className="text-xs font-medium text-neutral-300 mb-2">Reference Images ({website.referenceImages.length})</h4>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                {website.referenceImages.map((img, i) => (
                  <a
                    key={i}
                    href={img}
                    target="_blank"
                    rel="noreferrer"
                    className="group relative block rounded-lg overflow-hidden border border-neutral-800 aspect-video bg-neutral-950"
                  >
                    <img
                      src={img}
                      alt={`Reference ${i + 1}`}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform"
                    />
                  </a>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="px-6 py-4 border-t border-neutral-800 flex items-center justify-between">
          <span className="text-xs text-neutral-500 font-mono">
            {website.hasCustomModule ? 'Ready for live preview' : 'Awaiting custom module build'}
          </span>
          <div className="flex items-center gap-3">
            <button
              onClick={onClose}
              className="px-4 py-2 text-xs font-medium text-neutral-400 hover:text-white rounded-lg transition-colors cursor-pointer"
            >
              Close
            </button>
            <button
              onClick={() => {
                onClose();
                onLaunch(website);
              }}
              className="inline-flex items-center gap-1.5 px-4 py-2 text-xs font-semibold rounded-lg bg-neutral-100 text-neutral-950 hover:bg-white transition-colors cursor-pointer"
            >
              <Play className="w-3 h-3 fill-neutral-950" />
              <span>Launch in Sandbox</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
