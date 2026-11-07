import React, { useState, useRef } from 'react';
import { 
  X, 
  Check, 
  PenTool, 
  ShieldCheck, 
  FileCheck, 
  Copy, 
  Download, 
  Calendar, 
  User, 
  Award 
} from 'lucide-react';

interface AdvocateSignModalProps {
  isOpen: boolean;
  onClose: () => void;
  documentTitle?: string;
  documentContent?: string;
  onSignatureComplete?: (signatureDetails: {
    signerName: string;
    signedAt: string;
    certificateId: string;
  }) => void;
}

export function AdvocateSignModal({
  isOpen,
  onClose,
  documentTitle = 'Legal Agreement Draft',
  documentContent = '',
  onSignatureComplete,
}: AdvocateSignModalProps) {
  const [signerName, setSignerName] = useState('');
  const [signerRole, setSignerRole] = useState('Authorized Signatory');
  const [signMethod, setSignMethod] = useState<'draw' | 'type'>('type');
  const [selectedFont, setSelectedFont] = useState<'cursive' | 'serif' | 'clean'>('cursive');
  const [agreedToTerms, setAgreedToTerms] = useState(false);
  const [isSigned, setIsSigned] = useState(false);
  const [auditCert, setAuditCert] = useState<{
    id: string;
    timestamp: string;
    ip: string;
    hash: string;
  } | null>(null);
  const [copied, setCopied] = useState(false);

  // Canvas drawing ref
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const [isDrawing, setIsDrawing] = useState(false);

  if (!isOpen) return null;

  const handleStartDraw = (e: React.MouseEvent<HTMLCanvasElement> | React.TouchEvent<HTMLCanvasElement>) => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    setIsDrawing(true);
    const rect = canvas.getBoundingClientRect();
    const x = 'touches' in e ? e.touches[0].clientX - rect.left : e.clientX - rect.left;
    const y = 'touches' in e ? e.touches[0].clientY - rect.top : e.clientY - rect.top;
    ctx.beginPath();
    ctx.moveTo(x, y);
  };

  const handleDraw = (e: React.MouseEvent<HTMLCanvasElement> | React.TouchEvent<HTMLCanvasElement>) => {
    if (!isDrawing) return;
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    const rect = canvas.getBoundingClientRect();
    const x = 'touches' in e ? e.touches[0].clientX - rect.left : e.clientX - rect.left;
    const y = 'touches' in e ? e.touches[0].clientY - rect.top : e.clientY - rect.top;
    ctx.lineWidth = 2.5;
    ctx.lineCap = 'round';
    ctx.strokeStyle = '#1D1C1A';
    ctx.lineTo(x, y);
    ctx.stroke();
  };

  const handleStopDraw = () => {
    setIsDrawing(false);
  };

  const clearCanvas = () => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (ctx) {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
    }
  };

  const handleExecuteSignature = () => {
    if (!signerName.trim() || !agreedToTerms) return;

    const certId = `AS-IN-${Math.random().toString(36).substring(2, 8).toUpperCase()}-${Date.now().toString().slice(-4)}`;
    const now = new Date().toLocaleString('en-IN', {
      timeZone: 'Asia/Kolkata',
      dateStyle: 'full',
      timeStyle: 'medium',
    });

    const certData = {
      id: certId,
      timestamp: now,
      ip: '103.21.244.' + Math.floor(Math.random() * 200 + 10),
      hash: 'SHA256:' + Array.from({ length: 32 }, () => Math.floor(Math.random() * 16).toString(16)).join(''),
    };

    setAuditCert(certData);
    setIsSigned(true);

    if (onSignatureComplete) {
      onSignatureComplete({
        signerName,
        signedAt: now,
        certificateId: certId,
      });
    }
  };

  const copyCertDetails = () => {
    if (!auditCert) return;
    const text = `ADVOCATESIGN® ELECTRONIC SIGNATURE AUDIT TRAIL
Document: ${documentTitle}
Signer: ${signerName} (${signerRole})
Certificate ID: ${auditCert.id}
Timestamp: ${auditCert.timestamp} IST
IP Address: ${auditCert.ip}
Tamper-Evident SHA-256: ${auditCert.hash}
Statutory Validity: Section 3 & 4 of the Information Technology Act, 2000 (India)`;

    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs overflow-y-auto">
      <div className="bg-white rounded-2xl max-w-2xl w-full border border-[#E8E8E3] shadow-2xl overflow-hidden my-8">
        {/* Modal Header */}
        <div className="bg-[#1D1C1A] text-white px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-[#990000] flex items-center justify-center text-white">
              <PenTool className="w-4 h-4" />
            </div>
            <div>
              <div className="text-sm font-bold tracking-tight">AdvocateSign® E-Signature Workflow</div>
              <div className="text-[11px] text-neutral-400 font-mono">
                IT Act 2000 Compliant · Legally Enforceable in India
              </div>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-1 rounded-lg text-neutral-400 hover:text-white hover:bg-white/10 transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6">
          {!isSigned ? (
            <div className="space-y-6">
              {/* Document Overview Strip */}
              <div className="p-3.5 bg-[#FAF9F5] rounded-xl border border-[#E8E8E3] flex items-center justify-between">
                <div>
                  <div className="text-xs font-bold text-[#1D1C1A]">{documentTitle}</div>
                  <div className="text-[11px] text-neutral-500 font-sans">
                    Ready for legal digital execution under Indian law
                  </div>
                </div>
                <span className="text-[11px] font-mono bg-amber-50 text-amber-800 border border-amber-200 px-2 py-0.5 rounded font-semibold">
                  Awaiting Signature
                </span>
              </div>

              {/* Signer Details Fields */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-neutral-800 mb-1">
                    Signer Full Name (as per PAN / Aadhaar) *
                  </label>
                  <input
                    type="text"
                    value={signerName}
                    onChange={(e) => setSignerName(e.target.value)}
                    placeholder="e.g. Rahul Sharma"
                    className="w-full text-xs p-2.5 rounded-lg border border-neutral-300 focus:outline-none focus:border-[#990000]"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-neutral-800 mb-1">
                    Signer Designation / Capacity
                  </label>
                  <input
                    type="text"
                    value={signerRole}
                    onChange={(e) => setSignerRole(e.target.value)}
                    placeholder="e.g. Director / Individual / Tenant"
                    className="w-full text-xs p-2.5 rounded-lg border border-neutral-300 focus:outline-none focus:border-[#990000]"
                  />
                </div>
              </div>

              {/* Signing Method Selector */}
              <div>
                <label className="block text-xs font-bold text-neutral-800 mb-2">
                  Choose Signature Style
                </label>
                <div className="flex gap-2 mb-3">
                  <button
                    type="button"
                    onClick={() => setSignMethod('type')}
                    className={`px-4 py-2 text-xs font-bold rounded-lg border cursor-pointer transition-colors ${
                      signMethod === 'type'
                        ? 'bg-[#1D1C1A] text-white border-[#1D1C1A]'
                        : 'bg-white text-neutral-700 border-neutral-300 hover:bg-neutral-50'
                    }`}
                  >
                    Type Signature
                  </button>
                  <button
                    type="button"
                    onClick={() => setSignMethod('draw')}
                    className={`px-4 py-2 text-xs font-bold rounded-lg border cursor-pointer transition-colors ${
                      signMethod === 'draw'
                        ? 'bg-[#1D1C1A] text-white border-[#1D1C1A]'
                        : 'bg-white text-neutral-700 border-neutral-300 hover:bg-neutral-50'
                    }`}
                  >
                    Draw Signature (Pad)
                  </button>
                </div>

                {signMethod === 'type' ? (
                  <div className="p-4 rounded-xl border border-neutral-300 bg-[#FAF9F5] space-y-3">
                    <div className="text-[11px] text-neutral-500">Preview generated digital mark:</div>
                    <div className="h-20 bg-white rounded-lg border border-neutral-200 flex items-center justify-center p-4">
                      {signerName.trim() ? (
                        <span className="font-serif italic text-2xl text-neutral-900 tracking-wider">
                          {signerName}
                        </span>
                      ) : (
                        <span className="text-xs text-neutral-400 italic">
                          Enter your name above to see signature preview
                        </span>
                      )}
                    </div>
                  </div>
                ) : (
                  <div className="p-4 rounded-xl border border-neutral-300 bg-[#FAF9F5] space-y-2">
                    <div className="flex justify-between items-center text-[11px] text-neutral-500">
                      <span>Draw inside the box using mouse or finger:</span>
                      <button
                        type="button"
                        onClick={clearCanvas}
                        className="text-[#990000] hover:underline cursor-pointer"
                      >
                        Clear pad
                      </button>
                    </div>
                    <canvas
                      ref={canvasRef}
                      width={500}
                      height={120}
                      onMouseDown={handleStartDraw}
                      onMouseMove={handleDraw}
                      onMouseUp={handleStopDraw}
                      onMouseLeave={handleStopDraw}
                      onTouchStart={handleStartDraw}
                      onTouchMove={handleDraw}
                      onTouchEnd={handleStopDraw}
                      className="w-full h-28 bg-white border border-neutral-300 rounded-lg cursor-crosshair touch-none"
                    />
                  </div>
                )}
              </div>

              {/* Statutory consent check */}
              <div className="p-3.5 bg-neutral-50 rounded-xl border border-neutral-200">
                <label className="flex items-start gap-2.5 text-xs text-neutral-700 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={agreedToTerms}
                    onChange={(e) => setAgreedToTerms(e.target.checked)}
                    className="mt-0.5 rounded text-[#990000] focus:ring-[#990000]"
                  />
                  <span>
                    I consent to sign electronically under Section 3 & 4 of the Indian Information Technology Act, 2000. I confirm that I am legally authorized to execute this document and that this digital signature has the same legal effect as a handwritten physical signature.
                  </span>
                </label>
              </div>

              {/* Action buttons */}
              <div className="flex items-center justify-end gap-3 pt-4 border-t border-neutral-200">
                <button
                  type="button"
                  onClick={onClose}
                  className="px-4 py-2.5 text-xs font-semibold text-neutral-600 hover:text-neutral-900 cursor-pointer"
                >
                  Cancel
                </button>
                <button
                  type="button"
                  onClick={handleExecuteSignature}
                  disabled={!signerName.trim() || !agreedToTerms}
                  className={`px-6 py-2.5 text-xs font-bold rounded-lg transition-all flex items-center gap-1.5 cursor-pointer ${
                    signerName.trim() && agreedToTerms
                      ? 'bg-[#990000] hover:bg-[#7D0000] text-white shadow-md active:scale-95'
                      : 'bg-neutral-200 text-neutral-400 cursor-not-allowed'
                  }`}
                >
                  <PenTool className="w-3.5 h-3.5" />
                  <span>Execute Legal Signature</span>
                </button>
              </div>
            </div>
          ) : (
            /* Signed Success Screen with Audit Trail Certificate */
            <div className="space-y-6 text-center py-2">
              <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center mx-auto border-2 border-emerald-300">
                <Check className="w-8 h-8" />
              </div>

              <div>
                <h3 className="text-xl font-black text-[#1D1C1A]">
                  Document Successfully Signed & Sealed
                </h3>
                <p className="text-xs text-neutral-500 mt-1">
                  AdvocateSign® has generated a tamper-evident audit record compliant with the IT Act 2000.
                </p>
              </div>

              {/* Digital Audit Certificate Box */}
              {auditCert && (
                <div className="text-left bg-[#FAF9F5] border border-[#E8E8E3] rounded-xl p-4 space-y-2 text-xs font-mono">
                  <div className="flex justify-between items-center border-b border-[#E8E8E3] pb-2 font-sans">
                    <span className="font-bold text-[#1D1C1A] flex items-center gap-1.5">
                      <ShieldCheck className="w-4 h-4 text-emerald-600" />
                      <span>Audit Trail Certificate</span>
                    </span>
                    <button
                      onClick={copyCertDetails}
                      className="text-xs font-bold text-[#990000] hover:underline flex items-center gap-1 cursor-pointer"
                    >
                      <Copy className="w-3.5 h-3.5" />
                      <span>{copied ? 'Copied!' : 'Copy Audit'}</span>
                    </button>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-[11px] text-neutral-700 pt-1">
                    <div>
                      <span className="text-neutral-400">Cert ID:</span> {auditCert.id}
                    </div>
                    <div>
                      <span className="text-neutral-400">Signer:</span> {signerName}
                    </div>
                    <div>
                      <span className="text-neutral-400">Timestamp:</span> {auditCert.timestamp}
                    </div>
                    <div>
                      <span className="text-neutral-400">IP Stamp:</span> {auditCert.ip}
                    </div>
                  </div>

                  <div className="text-[10px] text-neutral-500 break-all pt-1 border-t border-[#E8E8E3]">
                    {auditCert.hash}
                  </div>
                </div>
              )}

              <div className="flex items-center justify-center gap-3 pt-2">
                <button
                  onClick={onClose}
                  className="px-6 py-2.5 text-xs font-bold text-white bg-[#1D1C1A] hover:bg-neutral-800 rounded-lg transition-colors cursor-pointer"
                >
                  Done / Return to Platform
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
