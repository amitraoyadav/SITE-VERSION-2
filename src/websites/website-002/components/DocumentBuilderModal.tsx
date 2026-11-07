import React, { useState, useEffect } from 'react';
import { 
  X, 
  FileText, 
  Check, 
  Download, 
  Copy, 
  PenTool, 
  ArrowRight, 
  ArrowLeft, 
  ShieldCheck, 
  Clock, 
  Eye 
} from 'lucide-react';
import { DOCUMENTS_CATALOG } from '../data/documentsCatalog';
import { DocumentTemplate } from '../types';

interface DocumentBuilderModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialTemplateId?: string;
  onOpenAdvocateSign: (docTitle: string, docContent: string) => void;
}

export function DocumentBuilderModal({
  isOpen,
  onClose,
  initialTemplateId,
  onOpenAdvocateSign,
}: DocumentBuilderModalProps) {
  const [selectedTemplate, setSelectedTemplate] = useState<DocumentTemplate>(
    DOCUMENTS_CATALOG.find((d) => d.id === initialTemplateId) || DOCUMENTS_CATALOG[0]
  );
  const [formValues, setFormValues] = useState<Record<string, string>>({});
  const [copied, setCopied] = useState(false);
  const [activeStep, setActiveStep] = useState<'form' | 'preview'>('form');

  // Update selected template if initialTemplateId changes
  useEffect(() => {
    if (initialTemplateId) {
      const found = DOCUMENTS_CATALOG.find((d) => d.id === initialTemplateId);
      if (found) setSelectedTemplate(found);
    }
  }, [initialTemplateId]);

  // Set default values when template changes
  useEffect(() => {
    const defaults: Record<string, string> = {};
    selectedTemplate.fields.forEach((f) => {
      if (f.defaultValue) defaults[f.id] = f.defaultValue;
    });
    setFormValues(defaults);
  }, [selectedTemplate]);

  if (!isOpen) return null;

  const handleFieldChange = (fieldId: string, value: string) => {
    setFormValues((prev) => ({ ...prev, [fieldId]: value }));
  };

  const generatedDocText = selectedTemplate.templateGenerator(formValues);

  const handleCopy = () => {
    navigator.clipboard.writeText(generatedDocText);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleDownload = () => {
    const blob = new Blob([generatedDocText], { type: 'text/plain;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = `${selectedTemplate.id}-${new Date().toISOString().split('T')[0]}.txt`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/80 backdrop-blur-xs">
      <div className="w-full max-w-5xl bg-white border border-[#E8E8E3] rounded-2xl shadow-2xl overflow-hidden max-h-[94vh] flex flex-col">
        {/* Header */}
        <div className="px-6 py-4 border-b border-[#E8E8E3] bg-[#FAF9F5] flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-[#990000] text-white flex items-center justify-center shadow-xs">
              <FileText className="w-4 h-4" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h2 className="text-base font-bold text-[#1D1C1A]">
                  YOURADVOCATEE Document Builder
                </h2>
                <span className="text-[10px] font-mono text-[#990000] bg-[#FDF2F2] border border-[#F8D7DA] px-2 py-0.5 rounded font-semibold">
                  Indian Law Compliant
                </span>
              </div>
              <p className="text-xs text-[#5D5B56]">
                {selectedTemplate.title} · {selectedTemplate.governingLaw}
              </p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <div className="hidden sm:flex items-center gap-1.5 text-xs text-emerald-700 bg-emerald-50 px-2.5 py-1 rounded-md border border-emerald-200 font-medium">
              <ShieldCheck className="w-3.5 h-3.5" />
              <span>Advocate-Crafted Template</span>
            </div>
            <button
              onClick={onClose}
              className="p-1.5 text-neutral-400 hover:text-neutral-900 rounded-lg hover:bg-neutral-100"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Template Selector Bar */}
        <div className="px-6 py-2.5 bg-white border-b border-[#E8E8E3] flex items-center gap-2 overflow-x-auto scrollbar-none text-xs">
          <span className="text-neutral-500 font-semibold shrink-0">Switch Template:</span>
          {DOCUMENTS_CATALOG.map((doc) => (
            <button
              key={doc.id}
              onClick={() => setSelectedTemplate(doc)}
              className={`px-3 py-1 rounded-full whitespace-nowrap transition-colors cursor-pointer border ${
                selectedTemplate.id === doc.id
                  ? 'bg-[#1D1C1A] text-white border-[#1D1C1A] font-semibold'
                  : 'bg-[#FAF9F5] text-neutral-700 border-[#E8E8E3] hover:border-neutral-400'
              }`}
            >
              {doc.title.split('(')[0]}
            </button>
          ))}
        </div>

        {/* Main Split Layout: Form on Left, Live Preview on Right */}
        <div className="flex-1 flex flex-col md:flex-row overflow-hidden">
          {/* Left Panel: Form Inputs */}
          <div className="w-full md:w-1/2 p-6 overflow-y-auto space-y-4 border-r border-[#E8E8E3] bg-[#FAF9F5]">
            <div className="border-b border-[#E8E8E3] pb-3 mb-2">
              <h3 className="text-sm font-bold text-[#1D1C1A]">
                Customize Document Clauses
              </h3>
              <p className="text-xs text-[#5D5B56] mt-0.5">
                Answer the questionnaire below to update the legally binding clauses in real time.
              </p>
            </div>

            <div className="space-y-4 text-xs">
              {selectedTemplate.fields.map((field) => (
                <div key={field.id}>
                  <label className="block text-xs font-semibold text-[#1D1C1A] mb-1">
                    {field.label}
                  </label>

                  {field.type === 'textarea' ? (
                    <textarea
                      rows={3}
                      value={formValues[field.id] || ''}
                      onChange={(e) => handleFieldChange(field.id, e.target.value)}
                      placeholder={field.placeholder}
                      className="w-full bg-white border border-[#D5D4CE] rounded-lg p-2.5 text-xs text-[#1D1C1A] placeholder-neutral-400 focus:outline-none focus:border-[#990000] resize-none"
                    />
                  ) : field.type === 'select' ? (
                    <select
                      value={formValues[field.id] || field.defaultValue || ''}
                      onChange={(e) => handleFieldChange(field.id, e.target.value)}
                      className="w-full bg-white border border-[#D5D4CE] rounded-lg px-3 py-2 text-xs text-[#1D1C1A] focus:outline-none focus:border-[#990000]"
                    >
                      {field.options?.map((opt) => (
                        <option key={opt} value={opt}>
                          {opt}
                        </option>
                      ))}
                    </select>
                  ) : (
                    <input
                      type={field.type}
                      value={formValues[field.id] || ''}
                      onChange={(e) => handleFieldChange(field.id, e.target.value)}
                      placeholder={field.placeholder}
                      className="w-full bg-white border border-[#D5D4CE] rounded-lg px-3 py-2 text-xs text-[#1D1C1A] placeholder-neutral-400 focus:outline-none focus:border-[#990000]"
                    />
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Right Panel: Real-Time Legal Document Preview */}
          <div className="w-full md:w-1/2 p-6 overflow-y-auto bg-white flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between border-b border-[#E8E8E3] pb-3 mb-4">
                <div className="flex items-center gap-2">
                  <Eye className="w-4 h-4 text-[#990000]" />
                  <span className="text-xs font-bold text-[#1D1C1A]">Live Formatted Document</span>
                </div>
                <div className="flex items-center gap-2">
                  <button
                    onClick={handleCopy}
                    className="px-2.5 py-1 text-xs font-semibold rounded-md bg-[#FAF9F5] border border-[#E8E8E3] hover:bg-neutral-100 text-neutral-700 flex items-center gap-1 transition-colors cursor-pointer"
                  >
                    {copied ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Copy className="w-3.5 h-3.5" />}
                    <span>{copied ? 'Copied' : 'Copy'}</span>
                  </button>
                  <button
                    onClick={handleDownload}
                    className="px-2.5 py-1 text-xs font-semibold rounded-md bg-[#FAF9F5] border border-[#E8E8E3] hover:bg-neutral-100 text-neutral-700 flex items-center gap-1 transition-colors cursor-pointer"
                  >
                    <Download className="w-3.5 h-3.5" />
                    <span>Download</span>
                  </button>
                </div>
              </div>

              {/* Rendered Text Body */}
              <div className="p-5 rounded-xl bg-[#FAF9F5] border border-[#E8E8E3] font-mono text-[11px] sm:text-xs text-[#1D1C1A] whitespace-pre-wrap leading-relaxed max-h-[50vh] overflow-y-auto select-text shadow-inner">
                {generatedDocText}
              </div>
            </div>

            {/* Bottom Actions: Sign or Advocate Review */}
            <div className="pt-6 border-t border-[#E8E8E3] mt-6 flex flex-col sm:flex-row items-center justify-between gap-3">
              <div className="text-[11px] text-[#5D5B56]">
                Compliant with Section 3, Information Technology Act, 2000
              </div>
              <div className="flex items-center gap-2 w-full sm:w-auto">
                <button
                  onClick={handleDownload}
                  className="flex-1 sm:flex-none px-4 py-2 text-xs font-semibold text-[#1D1C1A] border border-[#D5D4CE] hover:bg-neutral-50 rounded-lg cursor-pointer"
                >
                  Save as Text / Print
                </button>
                <button
                  onClick={() => {
                    onClose();
                    onOpenAdvocateSign(selectedTemplate.title, generatedDocText);
                  }}
                  className="flex-1 sm:flex-none px-5 py-2 text-xs font-bold text-white bg-[#990000] hover:bg-[#7D0000] rounded-lg shadow-sm transition-colors cursor-pointer flex items-center justify-center gap-1.5"
                >
                  <PenTool className="w-3.5 h-3.5" />
                  <span>Sign with AdvocateSign®</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
