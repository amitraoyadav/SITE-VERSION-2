import React, { useState } from 'react';
import { FolderTree, Plus, Trash2, ArrowRight, ExternalLink } from 'lucide-react';
import { Category } from '../data/categories';
import { WebsiteRecord } from '../data/websites';

interface CategoriesPageProps {
  categories: Category[];
  websites: WebsiteRecord[];
  onAddCategory: (name: string, description?: string) => void;
  onDeleteCategory: (id: string) => void;
  onSelectCategoryFilter: (categoryName: string) => void;
  onOpenWebsite: (website: WebsiteRecord) => void;
}

export function CategoriesPage({
  categories,
  websites,
  onAddCategory,
  onDeleteCategory,
  onSelectCategoryFilter,
  onOpenWebsite,
}: CategoriesPageProps) {
  const [newCatName, setNewCatName] = useState('');
  const [newCatDesc, setNewCatDesc] = useState('');
  const [isAdding, setIsAdding] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (newCatName.trim()) {
      onAddCategory(newCatName.trim(), newCatDesc.trim() || undefined);
      setNewCatName('');
      setNewCatDesc('');
      setIsAdding(false);
    }
  };

  const getWebsitesForCategory = (categoryName: string) => {
    return websites.filter((w) => w.category === categoryName);
  };

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold tracking-tight text-white">Categories Management</h1>
          <p className="text-xs text-neutral-400 mt-1">
            Organize the 20–30 websites of Library III into distinct categories
          </p>
        </div>

        <button
          onClick={() => setIsAdding(!isAdding)}
          className="inline-flex items-center gap-1.5 px-3.5 py-2 text-xs font-semibold rounded-lg bg-neutral-100 text-neutral-950 hover:bg-white transition-colors cursor-pointer self-start sm:self-auto"
        >
          <Plus className="w-3.5 h-3.5" />
          <span>New Category</span>
        </button>
      </div>

      {/* Add New Category Form Drawer */}
      {isAdding && (
        <form
          onSubmit={handleSubmit}
          className="p-5 rounded-xl border border-neutral-800 bg-neutral-900/60 space-y-4"
        >
          <h3 className="text-sm font-semibold text-white">Create New Category</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-medium text-neutral-300 mb-1">
                Category Name <span className="text-red-400">*</span>
              </label>
              <input
                type="text"
                required
                placeholder="e.g., Luxury Architecture, Web3 Protocol..."
                value={newCatName}
                onChange={(e) => setNewCatName(e.target.value)}
                className="w-full bg-neutral-950 border border-neutral-800 rounded-lg px-3 py-2 text-xs text-white placeholder-neutral-500 focus:outline-none focus:border-neutral-600"
              />
            </div>
            <div>
              <label className="block text-xs font-medium text-neutral-300 mb-1">
                Description <span className="text-neutral-500">(Optional)</span>
              </label>
              <input
                type="text"
                placeholder="Short purpose of this category..."
                value={newCatDesc}
                onChange={(e) => setNewCatDesc(e.target.value)}
                className="w-full bg-neutral-950 border border-neutral-800 rounded-lg px-3 py-2 text-xs text-white placeholder-neutral-500 focus:outline-none focus:border-neutral-600"
              />
            </div>
          </div>
          <div className="flex justify-end gap-2 pt-2">
            <button
              type="button"
              onClick={() => setIsAdding(false)}
              className="px-3 py-1.5 text-xs text-neutral-400 hover:text-white cursor-pointer"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-3.5 py-1.5 text-xs font-semibold bg-neutral-100 text-neutral-950 rounded-lg hover:bg-white cursor-pointer"
            >
              Save Category
            </button>
          </div>
        </form>
      )}

      {/* Category List */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {categories.map((cat) => {
          const categoryWebsites = getWebsitesForCategory(cat.name);

          return (
            <div
              key={cat.id}
              className="p-5 rounded-xl border border-neutral-800 bg-neutral-900/40 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <h3 className="text-base font-semibold text-white tracking-tight flex items-center gap-2">
                      <span>{cat.name}</span>
                      <span className="font-mono text-xs text-neutral-400">
                        ({categoryWebsites.length})
                      </span>
                    </h3>
                    {cat.description && (
                      <p className="text-xs text-neutral-400 mt-1 leading-relaxed">
                        {cat.description}
                      </p>
                    )}
                  </div>

                  {categoryWebsites.length === 0 && (
                    <button
                      onClick={() => onDeleteCategory(cat.id)}
                      className="p-1.5 text-neutral-500 hover:text-red-400 rounded-md transition-colors cursor-pointer"
                      title="Delete Empty Category"
                    >
                      <Trash2 className="w-3.5 h-3.5" />
                    </button>
                  )}
                </div>

                {/* Assigned Websites Listing */}
                <div className="mt-4 pt-3 border-t border-neutral-800/80 space-y-2">
                  <div className="text-[11px] font-mono uppercase tracking-wider text-neutral-500">
                    Assigned Websites ({categoryWebsites.length})
                  </div>

                  {categoryWebsites.length > 0 ? (
                    <ul className="space-y-1.5">
                      {categoryWebsites.map((site) => (
                        <li
                          key={site.id}
                          className="flex items-center justify-between text-xs py-1 px-2 rounded-md hover:bg-neutral-800/60 group"
                        >
                          <span className="text-neutral-300 group-hover:text-white font-medium">
                            {site.name}
                          </span>
                          <button
                            onClick={() => onOpenWebsite(site)}
                            className="text-[11px] text-neutral-400 group-hover:text-white flex items-center gap-1 cursor-pointer"
                          >
                            <span>Open</span>
                            <ArrowRight className="w-3 h-3" />
                          </button>
                        </li>
                      ))}
                    </ul>
                  ) : (
                    <p className="text-xs text-neutral-500 italic py-1">
                      No websites assigned to this category yet.
                    </p>
                  )}
                </div>
              </div>

              <div className="mt-5 pt-3 border-t border-neutral-800/80 flex justify-between items-center text-xs">
                <button
                  onClick={() => onSelectCategoryFilter(cat.name)}
                  className="text-neutral-400 hover:text-white transition-colors cursor-pointer"
                >
                  View filtered on dashboard →
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
