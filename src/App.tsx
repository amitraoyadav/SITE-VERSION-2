import React, { useState, useEffect } from 'react';
import RaozLegalApp from './RaozLegalApp';
import { 
  WebsiteRecord, 
  getStoredWebsites, 
  saveWebsites, 
  generateNextWebsiteId 
} from './data/websites';
import { 
  Category, 
  getStoredCategories, 
  saveCategories 
} from './data/categories';
import { TopNav } from './components/Dashboard/TopNav';
import { Dashboard } from './pages/Dashboard';
import { CategoriesPage } from './pages/Categories';
import { AddWebsiteModal } from './components/Dashboard/AddWebsiteModal';
import { WebsiteDetailsModal } from './components/Dashboard/WebsiteDetailsModal';
import { IntegrationModal } from './components/Dashboard/IntegrationModal';
import { WebsiteViewer } from './components/Viewer/WebsiteViewer';

export default function App() {
  // Primary view mode: Defaults to the newly built RAOZ LEGAL platform
  const [appMode, setAppMode] = useState<'raoz-legal' | 'library-dashboard'>('raoz-legal');

  // Library State (for future integration and collection management)
  const [websites, setWebsites] = useState<WebsiteRecord[]>(() => getStoredWebsites());
  const [categories, setCategories] = useState<Category[]>(() => getStoredCategories());
  
  const [currentView, setCurrentView] = useState<'dashboard' | 'categories'>('dashboard');
  const [activeWebsite, setActiveWebsite] = useState<WebsiteRecord | null>(null);
  const [detailsWebsite, setDetailsWebsite] = useState<WebsiteRecord | null>(null);
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const [isIntegrationModalOpen, setIsIntegrationModalOpen] = useState(false);
  
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  // Sync to local persistence
  useEffect(() => {
    saveWebsites(websites);
  }, [websites]);

  useEffect(() => {
    saveCategories(categories);
  }, [categories]);

  // Handler: Add new website
  const handleSaveWebsite = (newSite: WebsiteRecord) => {
    setWebsites((prev) => [newSite, ...prev]);
  };

  // Handler: Delete website
  const handleDeleteWebsite = (id: string) => {
    setWebsites((prev) => prev.filter((w) => w.id !== id));
    if (activeWebsite?.id === id) setActiveWebsite(null);
    if (detailsWebsite?.id === id) setDetailsWebsite(null);
  };

  // Handler: Add category
  const handleAddCategory = (name: string, description?: string) => {
    const existing = categories.find((c) => c.name.toLowerCase() === name.toLowerCase());
    if (existing) return;

    const newCategory: Category = {
      id: `cat-${Date.now()}`,
      name,
      description,
    };
    setCategories((prev) => [...prev, newCategory]);
  };

  // Handler: Delete category
  const handleDeleteCategory = (id: string) => {
    setCategories((prev) => prev.filter((c) => c.id !== id));
  };

  // 1. If in Raoz Legal mode, render the full platform with a top switcher
  if (appMode === 'raoz-legal') {
    return (
      <div className="relative">
        {/* Quick collection switcher bar */}
        <div className="bg-[#050b14] border-b border-slate-800 text-[11px] py-1 px-4 sm:px-6 flex items-center justify-between text-slate-400">
          <div className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400"></span>
            <span>Active Project: <strong>RAOZ LEGAL (Indian Legal Assistance Platform)</strong></span>
          </div>
          <button
            onClick={() => setAppMode('library-dashboard')}
            className="text-amber-400 hover:text-amber-300 font-mono underline underline-offset-2 transition-colors cursor-pointer"
          >
            Switch to Raoz Site Library III Overview ({websites.length} Sites) →
          </button>
        </div>

        <RaozLegalApp onBackToLibrary={() => setAppMode('library-dashboard')} />
      </div>
    );
  }

  // 2. If viewing a specific website sandbox from the library dashboard
  if (activeWebsite) {
    if (activeWebsite.id === 'website-002') {
      return <RaozLegalApp onBackToLibrary={() => setActiveWebsite(null)} isEmbedded={true} />;
    }
    return (
      <WebsiteViewer
        website={activeWebsite}
        onBack={() => setActiveWebsite(null)}
        onViewSpecs={(site) => setDetailsWebsite(site)}
      />
    );
  }

  const suggestedNextId = generateNextWebsiteId(websites);

  // 3. Library Dashboard View
  return (
    <div className="min-h-screen bg-neutral-950 text-neutral-100 flex flex-col font-sans">
      {/* Return to Raoz Legal Banner */}
      <div className="bg-[#0b192c] border-b border-slate-800 text-xs py-2 px-4 sm:px-6 flex items-center justify-between">
        <span className="text-slate-300">
          Viewing <strong>Raoz Site Library III Manager</strong>.
        </span>
        <button
          onClick={() => setAppMode('raoz-legal')}
          className="text-amber-400 hover:text-amber-300 font-bold underline underline-offset-2 cursor-pointer"
        >
          ← Open RAOZ LEGAL Full Platform
        </button>
      </div>

      {/* SaaS Top Bar */}
      <TopNav
        currentView={currentView}
        onChangeView={setCurrentView}
        onAddWebsite={() => setIsAddModalOpen(true)}
        onOpenIntegrationGuide={() => setIsIntegrationModalOpen(true)}
      />

      {/* Main Content Area */}
      <main className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 py-8">
        {currentView === 'dashboard' ? (
          <Dashboard
            websites={websites}
            categories={categories}
            searchQuery={searchQuery}
            onSearchChange={setSearchQuery}
            selectedCategory={selectedCategory}
            onSelectCategory={setSelectedCategory}
            onOpenWebsite={(site) => {
              if (site.id === 'website-002') {
                setAppMode('raoz-legal');
              } else {
                setActiveWebsite(site);
              }
            }}
            onViewSpecs={(site) => setDetailsWebsite(site)}
            onDeleteWebsite={handleDeleteWebsite}
            onAddWebsite={() => setIsAddModalOpen(true)}
            onViewCategories={() => setCurrentView('categories')}
          />
        ) : (
          <CategoriesPage
            categories={categories}
            websites={websites}
            onAddCategory={handleAddCategory}
            onDeleteCategory={handleDeleteCategory}
            onSelectCategoryFilter={(catName) => {
              setSelectedCategory(catName);
              setCurrentView('dashboard');
            }}
            onOpenWebsite={(site) => {
              if (site.id === 'website-002') {
                setAppMode('raoz-legal');
              } else {
                setActiveWebsite(site);
              }
            }}
          />
        )}
      </main>

      {/* Footer */}
      <footer className="border-t border-neutral-900 bg-neutral-950/80 py-6 text-xs text-neutral-500">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <span className="font-semibold text-neutral-400">RAOZ SITE</span>
            <span>· Third Website Library Platform</span>
          </div>
          <div className="flex items-center gap-4 text-neutral-400">
            <button
              onClick={() => setIsIntegrationModalOpen(true)}
              className="hover:text-white transition-colors cursor-pointer"
            >
              Main Site Integration Guide
            </button>
            <span>·</span>
            <span className="font-mono text-[11px] text-neutral-500">
              {websites.length} {websites.length === 1 ? 'Site' : 'Sites'} Registered
            </span>
          </div>
        </div>
      </footer>

      {/* Modals */}
      <AddWebsiteModal
        isOpen={isAddModalOpen}
        onClose={() => setIsAddModalOpen(false)}
        categories={categories}
        onAddCategory={handleAddCategory}
        onSaveWebsite={handleSaveWebsite}
        suggestedId={suggestedNextId}
      />

      <WebsiteDetailsModal
        website={detailsWebsite}
        onClose={() => setDetailsWebsite(null)}
        onLaunch={(site) => {
          if (site.id === 'website-002') {
            setAppMode('raoz-legal');
          } else {
            setActiveWebsite(site);
          }
        }}
      />

      <IntegrationModal
        isOpen={isIntegrationModalOpen}
        onClose={() => setIsIntegrationModalOpen(false)}
        websites={websites}
        categories={categories}
      />
    </div>
  );
}
