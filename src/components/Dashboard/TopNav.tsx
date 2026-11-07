import React from 'react';
import { Plus, BookOpen, Layers } from 'lucide-react';

interface TopNavProps {
  onAddWebsite: () => void;
  onOpenIntegrationGuide: () => void;
  currentView: 'dashboard' | 'categories';
  onChangeView: (view: 'dashboard' | 'categories') => void;
}

export function TopNav({
  onAddWebsite,
  onOpenIntegrationGuide,
  currentView,
  onChangeView,
}: TopNavProps) {
  return (
    <header className="sticky top-0 z-30 bg-neutral-950/90 backdrop-blur-md border-b border-neutral-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between gap-8">
        {/* Zone 1: Brand wordmark (single element, whitespace-nowrap) */}
        <div 
          onClick={() => onChangeView('dashboard')}
          className="flex items-center gap-2 cursor-pointer shrink-0"
        >
          <div className="w-8 h-8 rounded-lg bg-neutral-900 border border-neutral-800 flex items-center justify-center text-white">
            <Layers className="w-4 h-4 text-neutral-200" />
          </div>
          <span className="text-base font-bold tracking-tight text-white whitespace-nowrap">
            RAOZ SITE <span className="font-normal text-neutral-400">/ Library III</span>
          </span>
        </div>

        {/* Zone 2: Navigation Links */}
        <nav className="hidden md:flex items-center gap-6 text-sm font-medium text-neutral-400">
          <button
            onClick={() => onChangeView('dashboard')}
            className={`whitespace-nowrap shrink-0 transition-colors cursor-pointer hover:text-white ${
              currentView === 'dashboard' ? 'text-white' : ''
            }`}
          >
            Dashboard
          </button>
          <button
            onClick={() => onChangeView('categories')}
            className={`whitespace-nowrap shrink-0 transition-colors cursor-pointer hover:text-white ${
              currentView === 'categories' ? 'text-white' : ''
            }`}
          >
            Categories
          </button>
          <button
            onClick={onOpenIntegrationGuide}
            className="whitespace-nowrap shrink-0 transition-colors cursor-pointer hover:text-white flex items-center gap-1.5"
          >
            <BookOpen className="w-3.5 h-3.5" />
            <span>Integration Guide</span>
          </button>
        </nav>

        {/* Zone 3: Primary Action */}
        <div className="flex items-center gap-3 shrink-0">
          <button
            onClick={onOpenIntegrationGuide}
            className="md:hidden p-2 text-neutral-400 hover:text-white rounded-lg border border-neutral-800 cursor-pointer"
            title="Integration Guide"
          >
            <BookOpen className="w-4 h-4" />
          </button>
          <button
            onClick={onAddWebsite}
            className="inline-flex items-center gap-1.5 px-3.5 py-2 text-xs font-semibold text-white bg-neutral-100 dark:bg-white text-neutral-950 hover:bg-neutral-200 rounded-lg transition-colors whitespace-nowrap shrink-0 shadow-sm cursor-pointer"
          >
            <Plus className="w-3.5 h-3.5 text-neutral-950" />
            <span>Add New Website</span>
          </button>
        </div>
      </div>
    </header>
  );
}
