import React from 'react';
import { ExternalLink, Play, FileText, Trash2, Code } from 'lucide-react';
import { WebsiteRecord } from '../../data/websites';

interface WebsiteCardProps {
  website: WebsiteRecord;
  onOpen: (website: WebsiteRecord) => void;
  onViewSpecs: (website: WebsiteRecord) => void;
  onDelete: (id: string) => void;
}

export function WebsiteCard({ website, onOpen, onViewSpecs, onDelete }: WebsiteCardProps) {
  return (
    <div className="p-5 rounded-xl border border-neutral-800 bg-neutral-900/40 hover:bg-neutral-900/70 hover:border-neutral-700 transition-all flex flex-col justify-between group">
      <div>
        {/* Unboxed clean metadata with typographic separators */}
        <div className="flex items-center gap-2 text-xs text-neutral-500 mb-2 font-mono">
          <span>{website.id}</span>
          <span aria-hidden="true">·</span>
          <span className="text-neutral-400">{website.category}</span>
          <span aria-hidden="true">·</span>
          <span>{website.status === 'ready' ? 'Module Live' : 'Scaffold Ready'}</span>
        </div>

        {/* Website Title */}
        <h3 className="text-lg font-semibold text-white tracking-tight flex items-center justify-between gap-2">
          <span>{website.name}</span>
          {website.referenceUrl && (
            <a
              href={website.referenceUrl}
              target="_blank"
              rel="noreferrer"
              onClick={(e) => e.stopPropagation()}
              className="text-neutral-500 hover:text-neutral-300 transition-colors p-1"
              title="Open Reference URL"
            >
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          )}
        </h3>

        {/* Description or prompt excerpt */}
        <p className="text-xs text-neutral-400 mt-2 line-clamp-2 leading-relaxed">
          {website.description || website.prompt}
        </p>

        {/* Reference URL / module info */}
        <div className="mt-4 pt-3 border-t border-neutral-800/80 flex items-center justify-between text-[11px] text-neutral-500 font-mono">
          <span className="truncate max-w-[200px] text-neutral-400">
            {website.referenceUrl.replace(/^https?:\/\//, '')}
          </span>
          <span className="flex items-center gap-1 text-neutral-500">
            <Code className="w-3 h-3" />
            src/websites/{website.id}
          </span>
        </div>
      </div>

      {/* Action Footer */}
      <div className="mt-5 pt-3 border-t border-neutral-800/80 flex items-center justify-between gap-2">
        <button
          onClick={() => onOpen(website)}
          className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold rounded-lg bg-neutral-100 text-neutral-950 hover:bg-white transition-colors cursor-pointer"
        >
          <Play className="w-3 h-3 fill-neutral-950" />
          <span>Open Website</span>
        </button>

        <div className="flex items-center gap-1">
          <button
            onClick={() => onViewSpecs(website)}
            className="p-1.5 text-neutral-400 hover:text-white rounded-md hover:bg-neutral-800 transition-colors cursor-pointer"
            title="View Recreation Prompt & Details"
          >
            <FileText className="w-3.5 h-3.5" />
          </button>
          <button
            onClick={() => {
              if (confirm(`Remove "${website.name}" from your collection?`)) {
                onDelete(website.id);
              }
            }}
            className="p-1.5 text-neutral-500 hover:text-red-400 rounded-md hover:bg-neutral-800 transition-colors cursor-pointer"
            title="Delete from Library"
          >
            <Trash2 className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </div>
  );
}
