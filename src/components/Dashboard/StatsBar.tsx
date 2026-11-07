import React from 'react';
import { Search, Globe, FolderTree, PlusCircle, X } from 'lucide-react';

interface StatsBarProps {
  totalWebsites: number;
  totalCategories: number;
  searchQuery: string;
  onSearchChange: (query: string) => void;
  onAddWebsite: () => void;
  onViewCategories: () => void;
  onViewAllWebsites: () => void;
}

export function StatsBar({
  totalWebsites,
  totalCategories,
  searchQuery,
  onSearchChange,
  onAddWebsite,
  onViewCategories,
  onViewAllWebsites,
}: StatsBarProps) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
      {/* 1. Total Websites */}
      <div 
        onClick={onViewAllWebsites}
        className="p-5 rounded-xl border border-neutral-800 bg-neutral-900/50 hover:bg-neutral-900/80 transition-colors cursor-pointer group"
      >
        <div className="flex items-center justify-between text-neutral-400 mb-2">
          <span className="text-xs font-medium uppercase tracking-wider text-neutral-400">Total Websites</span>
          <Globe className="w-4 h-4 text-neutral-500 group-hover:text-neutral-300 transition-colors" />
        </div>
        <div className="text-3xl font-bold font-mono tabular-nums text-white">
          {totalWebsites}
        </div>
        <p className="text-xs text-neutral-500 mt-1">
          Dynamic active count in Library III
        </p>
      </div>

      {/* 2. Categories */}
      <div 
        onClick={onViewCategories}
        className="p-5 rounded-xl border border-neutral-800 bg-neutral-900/50 hover:bg-neutral-900/80 transition-colors cursor-pointer group"
      >
        <div className="flex items-center justify-between text-neutral-400 mb-2">
          <span className="text-xs font-medium uppercase tracking-wider text-neutral-400">Categories</span>
          <FolderTree className="w-4 h-4 text-neutral-500 group-hover:text-neutral-300 transition-colors" />
        </div>
        <div className="text-3xl font-bold font-mono tabular-nums text-white">
          {totalCategories}
        </div>
        <p className="text-xs text-neutral-500 mt-1">
          Assigned organizational groups
        </p>
      </div>

      {/* 3. Add New Website */}
      <div 
        onClick={onAddWebsite}
        className="p-5 rounded-xl border border-neutral-800 bg-neutral-900/50 hover:bg-neutral-900/80 hover:border-neutral-700 transition-colors cursor-pointer group flex flex-col justify-between"
      >
        <div className="flex items-center justify-between text-neutral-400 mb-2">
          <span className="text-xs font-medium uppercase tracking-wider text-neutral-400">Add New Website</span>
          <PlusCircle className="w-4 h-4 text-indigo-400 group-hover:text-indigo-300 transition-colors" />
        </div>
        <button
          type="button"
          onClick={(e) => { e.stopPropagation(); onAddWebsite(); }}
          className="w-full py-2 px-3 text-xs font-semibold rounded-lg bg-neutral-100 text-neutral-950 hover:bg-neutral-200 transition-colors flex items-center justify-center gap-1.5 cursor-pointer mt-1"
        >
          <span>Register New Website</span>
        </button>
        <p className="text-xs text-neutral-500 mt-2">
          URL, category, and recreation prompt
        </p>
      </div>

      {/* 4. Search Websites */}
      <div className="p-5 rounded-xl border border-neutral-800 bg-neutral-900/50 flex flex-col justify-between">
        <div className="flex items-center justify-between text-neutral-400 mb-2">
          <span className="text-xs font-medium uppercase tracking-wider text-neutral-400">Search Websites</span>
          <Search className="w-4 h-4 text-neutral-500" />
        </div>
        <div className="relative mt-1">
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => onSearchChange(e.target.value)}
            placeholder="Search name, category, URL..."
            className="w-full bg-neutral-950 border border-neutral-800 rounded-lg pl-8 pr-7 py-2 text-xs text-white placeholder-neutral-500 focus:outline-none focus:border-neutral-600 transition-colors"
          />
          <Search className="w-3.5 h-3.5 text-neutral-500 absolute left-2.5 top-2.5 pointer-events-none" />
          {searchQuery && (
            <button
              onClick={() => onSearchChange('')}
              className="absolute right-2 top-2 p-0.5 text-neutral-500 hover:text-white rounded-full cursor-pointer"
            >
              <X className="w-3.5 h-3.5" />
            </button>
          )}
        </div>
        <p className="text-xs text-neutral-500 mt-2 truncate">
          {searchQuery ? `Filtering by "${searchQuery}"` : 'Live instant filter across collection'}
        </p>
      </div>
    </div>
  );
}
