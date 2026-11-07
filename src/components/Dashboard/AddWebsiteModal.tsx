import React, { useState } from 'react';
import { X, Upload, Check, Copy, ExternalLink, Image as ImageIcon } from 'lucide-react';
import { Category } from '../../data/categories';
import { WebsiteRecord } from '../../data/websites';

interface AddWebsiteModalProps {
  isOpen: boolean;
  onClose: () => void;
  categories: Category[];
  onAddCategory: (categoryName: string) => void;
  onSaveWebsite: (newSite: WebsiteRecord) => void;
  suggestedId: string;
}

export function AddWebsiteModal({
  isOpen,
  onClose,
  categories,
  onAddCategory,
  onSaveWebsite,
  suggestedId,
}: AddWebsiteModalProps) {
  const [name, setName] = useState('');
  const [referenceUrl, setReferenceUrl] = useState('');
  const [category, setCategory] = useState(categories[0]?.name || 'SaaS & AI Platforms');
  const [newCategoryName, setNewCategoryName] = useState('');
  const [isCreatingNewCategory, setIsCreatingNewCategory] = useState(false);
  const [description, setDescription] = useState('');
  const [prompt, setPrompt] = useState('');
  const [referenceImages, setReferenceImages] = useState<string[]>([]);
  const [isCopied, setIsCopied] = useState(false);
  const [createdRecord, setCreatedRecord] = useState<WebsiteRecord | null>(null);

  if (!isOpen) return null;

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (!files) return;

    Array.from(files).forEach((file) => {
      const reader = new FileReader();
      reader.onload = (uploadEvent) => {
        if (uploadEvent.target?.result) {
          setReferenceImages((prev) => [...prev, uploadEvent.target!.result as string]);
        }
      };
      reader.readAsDataURL(file);
    });
  };

  const handleAddCategorySubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (newCategoryName.trim()) {
      onAddCategory(newCategoryName.trim());
      setCategory(newCategoryName.trim());
      setNewCategoryName('');
      setIsCreatingNewCategory(false);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !referenceUrl.trim() || !prompt.trim()) {
      alert('Please fill in Website Name, Reference URL, and Building Prompt / Instructions.');
      return;
    }

    const newRecord: WebsiteRecord = {
      id: suggestedId,
      name: name.trim(),
      referenceUrl: referenceUrl.trim().startsWith('http') ? referenceUrl.trim() : `https://${referenceUrl.trim()}`,
      category,
      description: description.trim() || undefined,
      prompt: prompt.trim(),
      referenceImages: referenceImages.length > 0 ? referenceImages : undefined,
      createdAt: new Date().toISOString().split('T')[0],
      status: 'pending',
      hasCustomModule: false,
      version: '1.0.0',
    };

    onSaveWebsite(newRecord);
    setCreatedRecord(newRecord);
  };

  const scaffoldSnippet = createdRecord ? `// Module file: src/websites/${createdRecord.id}/index.tsx
import React from 'react';
import { WebsiteModuleProps } from '../types';

export default function ${createdRecord.id.replace(/-/g, '_').toUpperCase()}({ onBack }: WebsiteModuleProps) {
  return (
    <div className="min-h-screen bg-neutral-950 text-white p-8">
      {/* Recreated: ${createdRecord.name} */}
      <div className="max-w-6xl mx-auto space-y-6">
        <h1 className="text-3xl font-bold">${createdRecord.name}</h1>
        <p className="text-neutral-400">Reference: ${createdRecord.referenceUrl}</p>
      </div>
    </div>
  );
}
` : '';

  const copyScaffold = () => {
    navigator.clipboard.writeText(scaffoldSnippet);
    setIsCopied(true);
    setTimeout(() => setIsCopied(false), 2000);
  };

  const resetFormAndClose = () => {
    setName('');
    setReferenceUrl('');
    setDescription('');
    setPrompt('');
    setReferenceImages([]);
    setCreatedRecord(null);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-xs">
      <div className="w-full max-w-2xl bg-neutral-900 border border-neutral-800 rounded-xl shadow-2xl overflow-hidden max-h-[90vh] flex flex-col">
        {/* Header */}
        <div className="px-6 py-4 border-b border-neutral-800 flex items-center justify-between">
          <div>
            <h2 className="text-base font-semibold text-white tracking-tight">
              {createdRecord ? 'Website Registered Successfully' : 'Add New Website to Library III'}
            </h2>
            <p className="text-xs text-neutral-400">
              {createdRecord
                ? `Module ${createdRecord.id} is registered in the catalog`
                : `Assign category and provide recreation prompt for ${suggestedId}`}
            </p>
          </div>
          <button
            onClick={resetFormAndClose}
            className="p-1.5 text-neutral-400 hover:text-white rounded-lg hover:bg-neutral-800 transition-colors cursor-pointer"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 overflow-y-auto space-y-5 text-sm">
          {createdRecord ? (
            <div className="space-y-4">
              <div className="p-4 rounded-lg bg-emerald-950/40 border border-emerald-800/60 text-emerald-300 text-xs flex items-start gap-3">
                <Check className="w-4 h-4 shrink-0 mt-0.5" />
                <div>
                  <p className="font-semibold">{createdRecord.name} was added to Raoz Site Library III!</p>
                  <p className="text-emerald-400/80 mt-1">
                    Assigned ID: <span className="font-mono font-bold">{createdRecord.id}</span> · Category: {createdRecord.category}
                  </p>
                </div>
              </div>

              <div className="space-y-2">
                <div className="flex items-center justify-between text-xs text-neutral-400">
                  <span>Independent Module Path</span>
                  <span className="font-mono text-white">src/websites/{createdRecord.id}/index.tsx</span>
                </div>
                <div className="relative">
                  <pre className="p-4 rounded-lg bg-neutral-950 border border-neutral-800 text-xs font-mono text-neutral-300 overflow-x-auto max-h-48">
                    {scaffoldSnippet}
                  </pre>
                  <button
                    onClick={copyScaffold}
                    className="absolute top-2.5 right-2.5 px-2.5 py-1 text-xs font-medium rounded-md bg-neutral-800 hover:bg-neutral-700 text-white flex items-center gap-1.5 transition-colors cursor-pointer"
                  >
                    {isCopied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                    <span>{isCopied ? 'Copied' : 'Copy Skeleton'}</span>
                  </button>
                </div>
              </div>

              <div className="pt-3 border-t border-neutral-800 flex justify-end gap-3">
                <button
                  type="button"
                  onClick={resetFormAndClose}
                  className="px-4 py-2 text-xs font-semibold rounded-lg bg-white text-neutral-950 hover:bg-neutral-200 transition-colors cursor-pointer"
                >
                  Return to Dashboard
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              {/* Field 1: Website Name */}
              <div>
                <label className="block text-xs font-medium text-neutral-300 mb-1.5">
                  Website Name <span className="text-red-400">*</span>
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g., Stripe Atlas, Linear, Raycast..."
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full bg-neutral-950 border border-neutral-800 rounded-lg px-3.5 py-2 text-xs text-white placeholder-neutral-500 focus:outline-none focus:border-neutral-600"
                />
              </div>

              {/* Field 2: Website URL */}
              <div>
                <label className="block text-xs font-medium text-neutral-300 mb-1.5">
                  Website URL (Reference Website) <span className="text-red-400">*</span>
                </label>
                <input
                  type="text"
                  required
                  placeholder="https://example.com"
                  value={referenceUrl}
                  onChange={(e) => setReferenceUrl(e.target.value)}
                  className="w-full bg-neutral-950 border border-neutral-800 rounded-lg px-3.5 py-2 text-xs text-white placeholder-neutral-500 focus:outline-none focus:border-neutral-600"
                />
              </div>

              {/* Field 3: Category */}
              <div>
                <div className="flex items-center justify-between mb-1.5">
                  <label className="block text-xs font-medium text-neutral-300">
                    Category <span className="text-red-400">*</span>
                  </label>
                  <button
                    type="button"
                    onClick={() => setIsCreatingNewCategory(!isCreatingNewCategory)}
                    className="text-[11px] text-indigo-400 hover:text-indigo-300 cursor-pointer"
                  >
                    {isCreatingNewCategory ? 'Select Existing' : '+ Add New Category'}
                  </button>
                </div>

                {isCreatingNewCategory ? (
                  <div className="flex gap-2">
                    <input
                      type="text"
                      placeholder="New category name..."
                      value={newCategoryName}
                      onChange={(e) => setNewCategoryName(e.target.value)}
                      className="flex-1 bg-neutral-950 border border-neutral-800 rounded-lg px-3.5 py-2 text-xs text-white placeholder-neutral-500 focus:outline-none focus:border-neutral-600"
                    />
                    <button
                      type="button"
                      onClick={handleAddCategorySubmit}
                      className="px-3 py-2 text-xs font-medium rounded-lg bg-neutral-800 hover:bg-neutral-700 text-white cursor-pointer"
                    >
                      Save
                    </button>
                  </div>
                ) : (
                  <select
                    value={category}
                    onChange={(e) => setCategory(e.target.value)}
                    className="w-full bg-neutral-950 border border-neutral-800 rounded-lg px-3.5 py-2 text-xs text-white focus:outline-none focus:border-neutral-600 cursor-pointer"
                  >
                    {categories.map((c) => (
                      <option key={c.id} value={c.name} className="bg-neutral-900 text-white">
                        {c.name}
                      </option>
                    ))}
                  </select>
                )}
              </div>

              {/* Field 4: Description (Optional) */}
              <div>
                <label className="block text-xs font-medium text-neutral-300 mb-1.5">
                  Website Description <span className="text-neutral-500">(Optional)</span>
                </label>
                <input
                  type="text"
                  placeholder="Short summary of key pages, audience, or purpose..."
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  className="w-full bg-neutral-950 border border-neutral-800 rounded-lg px-3.5 py-2 text-xs text-white placeholder-neutral-500 focus:outline-none focus:border-neutral-600"
                />
              </div>

              {/* Field 5: Website Building Prompt / Instructions */}
              <div>
                <label className="block text-xs font-medium text-neutral-300 mb-1.5">
                  Website Building Prompt / Instructions <span className="text-red-400">*</span>
                </label>
                <textarea
                  required
                  rows={4}
                  placeholder="Detail exact layout, typography, animations, sub-pages, color palette, interactive components, responsive behaviors..."
                  value={prompt}
                  onChange={(e) => setPrompt(e.target.value)}
                  className="w-full bg-neutral-950 border border-neutral-800 rounded-lg p-3 text-xs text-white placeholder-neutral-500 focus:outline-none focus:border-neutral-600 resize-none font-mono"
                />
              </div>

              {/* Field 6: Upload Reference Images (Optional) */}
              <div>
                <label className="block text-xs font-medium text-neutral-300 mb-1.5">
                  Upload Reference Images / Screenshots <span className="text-neutral-500">(Optional)</span>
                </label>
                <div className="flex flex-col gap-3">
                  <label className="border border-dashed border-neutral-800 hover:border-neutral-700 bg-neutral-950/60 rounded-lg p-4 flex flex-col items-center justify-center cursor-pointer transition-colors">
                    <Upload className="w-5 h-5 text-neutral-500 mb-1" />
                    <span className="text-xs text-neutral-400">Click to upload screenshots</span>
                    <span className="text-[10px] text-neutral-600">PNG, JPG, WEBP</span>
                    <input
                      type="file"
                      multiple
                      accept="image/*"
                      onChange={handleImageUpload}
                      className="hidden"
                    />
                  </label>

                  {/* Thumbnail Previews */}
                  {referenceImages.length > 0 && (
                    <div className="flex items-center gap-2 overflow-x-auto py-1">
                      {referenceImages.map((img, i) => (
                        <div key={i} className="relative group shrink-0">
                          <img
                            src={img}
                            alt={`Preview ${i + 1}`}
                            className="w-16 h-16 object-cover rounded-md border border-neutral-800"
                          />
                          <button
                            type="button"
                            onClick={() =>
                              setReferenceImages((prev) => prev.filter((_, idx) => idx !== i))
                            }
                            className="absolute -top-1.5 -right-1.5 bg-neutral-900 border border-neutral-700 rounded-full p-0.5 text-neutral-400 hover:text-white"
                          >
                            <X className="w-3 h-3" />
                          </button>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </div>

              {/* Submit Actions */}
              <div className="pt-4 border-t border-neutral-800 flex items-center justify-end gap-3">
                <button
                  type="button"
                  onClick={resetFormAndClose}
                  className="px-4 py-2 text-xs font-medium rounded-lg text-neutral-400 hover:text-white hover:bg-neutral-800 transition-colors cursor-pointer"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-4 py-2 text-xs font-semibold rounded-lg bg-neutral-100 text-neutral-950 hover:bg-white transition-colors cursor-pointer shadow-sm"
                >
                  Save & Register {suggestedId}
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
