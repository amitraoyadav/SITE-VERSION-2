import React from 'react';
import { WebsiteRecord } from '../data/websites';
import { Category } from '../data/categories';
import { StatsBar } from '../components/Dashboard/StatsBar';
import { CategoryFilter } from '../components/CategoryFilter/CategoryFilter';
import { WebsiteCard } from '../components/WebsiteCard/WebsiteCard';
import { Plus, SearchX } from 'lucide-react';

interface DashboardProps {
  websites: WebsiteRecord[];
  categories: Category[];
  searchQuery: string;
  onSearchChange: (q: string) => void;
  selectedCategory: string | null;
  onSelectCategory: (cat: string | null) => void;
  onOpenWebsite: (website: WebsiteRecord) => void;
  onViewSpecs: (website: WebsiteRecord) => void;
  onDeleteWebsite: (id: string) => void;
  onAddWebsite: () => void;
  onViewCategories: () => void;
}

export function Dashboard({
  websites,
  categories,
  searchQuery,
  onSearchChange,
  selectedCategory,
  onSelectCategory,
  onOpenWebsite,
  onViewSpecs,
  onDeleteWebsite,
  onAddWebsite,
  onViewCategories,
}: DashboardProps) {
  // Filter websites based on category and search query
  const filteredWebsites = websites.filter((site) => {
    const matchesCategory = selectedCategory ? site.category === selectedCategory : true;
    const query = searchQuery.toLowerCase().trim();
    const matchesSearch =
      !query ||
      site.name.toLowerCase().includes(query) ||
      site.category.toLowerCase().includes(query) ||
      site.referenceUrl.toLowerCase().includes(query) ||
      site.id.toLowerCase().includes(query) ||
      (site.description && site.description.toLowerCase().includes(query)) ||
      site.prompt.toLowerCase().includes(query);

    return matchesCategory && matchesSearch;
  });

  return (
    <div>
      {/* 4 Primary Options Dashboard StatsBar */}
      <StatsBar
        totalWebsites={websites.length}
        totalCategories={categories.length}
        searchQuery={searchQuery}
        onSearchChange={onSearchChange}
        onAddWebsite={onAddWebsite}
        onViewCategories={onViewCategories}
        onViewAllWebsites={() => {
          onSelectCategory(null);
          onSearchChange('');
        }}
      />

      {/* Category Filter Bar */}
      <CategoryFilter
        categories={categories}
        selectedCategory={selectedCategory}
        onSelectCategory={onSelectCategory}
        websites={websites}
      />

      {/* Active Filter Indicators */}
      {(selectedCategory || searchQuery) && (
        <div className="flex items-center justify-between text-xs text-neutral-400 mb-4 pb-2 border-b border-neutral-800">
          <div className="flex items-center gap-2">
            <span>Showing:</span>
            {selectedCategory && (
              <span className="text-white font-medium">{selectedCategory}</span>
            )}
            {selectedCategory && searchQuery && <span>·</span>}
            {searchQuery && (
              <span>Matching &quot;{searchQuery}&quot;</span>
            )}
            <span className="font-mono text-neutral-500">({filteredWebsites.length} results)</span>
          </div>
          <button
            onClick={() => {
              onSelectCategory(null);
              onSearchChange('');
            }}
            className="text-neutral-500 hover:text-white transition-colors cursor-pointer"
          >
            Clear filters
          </button>
        </div>
      )}

      {/* Website Cards Grid */}
      {filteredWebsites.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredWebsites.map((site) => (
            <WebsiteCard
              key={site.id}
              website={site}
              onOpen={onOpenWebsite}
              onViewSpecs={onViewSpecs}
              onDelete={onDeleteWebsite}
            />
          ))}
        </div>
      ) : (
        /* Empty State */
        <div className="py-20 text-center rounded-xl border border-dashed border-neutral-800 bg-neutral-900/20 max-w-lg mx-auto">
          <div className="w-10 h-10 rounded-xl bg-neutral-900 border border-neutral-800 flex items-center justify-center mx-auto text-neutral-400 mb-3">
            <SearchX className="w-5 h-5" />
          </div>
          <h3 className="text-base font-semibold text-white">No websites found</h3>
          <p className="text-xs text-neutral-400 mt-1 max-w-sm mx-auto">
            {searchQuery || selectedCategory
              ? 'No websites match your current filter criteria. Try clearing filters or searching for another term.'
              : 'Your collection is ready. Add your first website recreation to begin.'}
          </p>
          <div className="mt-5 flex justify-center gap-3">
            {(searchQuery || selectedCategory) && (
              <button
                onClick={() => {
                  onSelectCategory(null);
                  onSearchChange('');
                }}
                className="px-3.5 py-1.5 text-xs rounded-lg border border-neutral-800 text-neutral-300 hover:text-white hover:bg-neutral-800 transition-colors cursor-pointer"
              >
                Reset Filters
              </button>
            )}
            <button
              onClick={onAddWebsite}
              className="inline-flex items-center gap-1.5 px-3.5 py-1.5 text-xs font-semibold rounded-lg bg-neutral-100 text-neutral-950 hover:bg-white transition-colors cursor-pointer"
            >
              <Plus className="w-3.5 h-3.5" />
              <span>Add New Website</span>
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
