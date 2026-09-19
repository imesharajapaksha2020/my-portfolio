'use client';

import React, { useState } from 'react';
import { usePortfolio } from '@/context/PortfolioContext';
import { X, Copy, Check, Quote, FileText } from 'lucide-react';

export default function BibtexModal() {
  const {
    selectedPublicationBibtex,
    setSelectedPublicationBibtex,
    logInteraction
  } = usePortfolio();

  const [copied, setCopied] = useState(false);

  if (!selectedPublicationBibtex) return null;

  const handleCopy = () => {
    navigator.clipboard.writeText(selectedPublicationBibtex.bibtex);
    setCopied(true);
    logInteraction(
      'Copied BibTeX Citation',
      selectedPublicationBibtex.title.slice(0, 45) + '...',
      'Quote'
    );
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/70 dark:bg-slate-950/80 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="relative w-full max-w-2xl rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-2xl p-6 text-slate-900 dark:text-white space-y-4">
        
        <div className="flex items-center justify-between pb-3 border-b border-slate-200 dark:border-slate-800">
          <div className="flex items-center gap-2">
            <Quote className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />
            <h3 className="text-base font-bold text-slate-900 dark:text-white">BibTeX Citation</h3>
          </div>
          <button
            onClick={() => setSelectedPublicationBibtex(null)}
            className="p-1.5 rounded-lg text-slate-400 hover:text-slate-900 dark:hover:text-white transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <div>
          <p className="text-xs font-semibold text-slate-800 dark:text-slate-200 line-clamp-2">
            {selectedPublicationBibtex.title}
          </p>
          <span className="text-[11px] font-mono text-emerald-700 dark:text-emerald-400 font-semibold">
            {selectedPublicationBibtex.journal} ({selectedPublicationBibtex.date})
          </span>
        </div>

        <div className="relative">
          <pre className="p-4 rounded-xl bg-slate-900 dark:bg-slate-950 text-slate-200 font-mono text-xs overflow-x-auto border border-slate-800 max-h-72">
            <code>{selectedPublicationBibtex.bibtex}</code>
          </pre>

          <button
            onClick={handleCopy}
            className="absolute top-3 right-3 px-3 py-1.5 rounded-lg bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-semibold flex items-center gap-1.5 shadow-xs transition-colors"
          >
            {copied ? <Check className="w-3.5 h-3.5" /> : <Copy className="w-3.5 h-3.5" />}
            <span>{copied ? 'Copied' : 'Copy BibTeX'}</span>
          </button>
        </div>

        <div className="flex justify-end pt-2">
          <button
            onClick={() => setSelectedPublicationBibtex(null)}
            className="px-4 py-2 rounded-xl bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 text-xs font-semibold text-slate-800 dark:text-slate-200 border border-slate-200 dark:border-slate-700 transition-colors"
          >
            Close
          </button>
        </div>

      </div>
    </div>
  );
}
