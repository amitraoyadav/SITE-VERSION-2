import React from 'react';
import { Category } from '../../data/categories';
import { WebsiteRecord } from '../../data/websites';

interface CategoryFilterProps {
  categories: Category[];
  selectedCategory: string | null;
  onSelectCategory: (categoryId: string | null) => void;
  websites: WebsiteRecord[];
}

export function CategoryFilter({
  categories,
  selectedCategory,
  onSelectCategory,
  websites,
}: CategoryFilterProps) {
  // Count websites per category
  const getCountForCategory = (categoryName: string) => {
    return websites.filter((w) => w.category === categoryName).length;
  };

  return (
    <div className="flex items-center gap-1.5 overflow-x-auto pb-2 scrollbar-none mb-6">
      <button
        onClick={() => onSelectCategory(null)}
        className={`px-3 py-1.5 text-xs font-medium rounded-lg transition-colors whitespace-nowrap shrink-0 cursor-pointer ${
          selectedCategory === null
            ? 'bg-neutral-100 text-neutral-950 font-semibold'
            : 'text-neutral-400 hover:text-white hover:bg-neutral-900 border border-transparent'
        }`}
      >
        All Websites <span className="font-mono text-[11px] opacity-75">({websites.length})</span>
      </button>

      {categories.map((cat) => {
        const count = getCountForCategory(cat.name);
        const isSelected = selectedCategory === cat.name;

        return (
          <button
            key={cat.id}
            onClick={() => onSelectCategory(isSelected ? null : cat.name)}
            className={`px-3 py-1.5 text-xs font-medium rounded-lg transition-colors whitespace-nowrap shrink-0 cursor-pointer border ${
              isSelected
                ? 'bg-neutral-100 text-neutral-950 border-neutral-100 font-semibold'
                : 'text-neutral-400 border-neutral-800/80 hover:border-neutral-700 hover:text-white hover:bg-neutral-900/60'
            }`}
          >
            {cat.name} <span className="font-mono text-[11px] opacity-75">({count})</span>
          </button>
        );
      })}
    </div>
  );
}
