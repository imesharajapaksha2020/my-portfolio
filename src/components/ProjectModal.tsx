'use client';

import React, { useState } from 'react';
import { usePortfolio } from '@/context/PortfolioContext';
import {
  X,
  Bookmark,
  Code2,
  Copy,
  Check,
  Cpu,
  Activity,
  CheckCircle2,
  ExternalLink,
  Sigma,
  FileCode
} from 'lucide-react';

export default function ProjectModal() {
  const {
    selectedProject,
    setSelectedProject,
    isStarred,
    toggleStar,
    isHydrated
  } = usePortfolio();

  const [copiedCode, setCopiedCode] = useState(false);

  if (!selectedProject) return null;

  const starred = isHydrated && isStarred(selectedProject.id);

  const handleCopyCode = () => {
    navigator.clipboard.writeText(selectedProject.codeSnippet);
    setCopiedCode(true);
    setTimeout(() => setCopiedCode(false), 2500);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto bg-slate-950/80 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="relative w-full max-w-4xl max-h-[90vh] overflow-y-auto rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-2xl text-slate-900 dark:text-white p-6 sm:p-8 space-y-6">
        
        {/* Modal Top Header */}
        <div className="flex items-start justify-between gap-4 pb-4 border-b border-slate-200 dark:border-slate-800">
          <div className="space-y-1">
            <div className="flex items-center gap-2">
              <span className="text-xs font-semibold px-2.5 py-0.5 rounded-full bg-emerald-500/10 text-emerald-700 dark:text-emerald-400 border border-emerald-500/20">
                {selectedProject.category}
              </span>
              <span className="text-xs font-mono text-slate-400">
                {selectedProject.duration}
              </span>
            </div>
            <h2 className="text-xl sm:text-2xl font-extrabold tracking-tight">
              {selectedProject.title}
            </h2>
            <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400">
              Role: <strong className="text-slate-700 dark:text-slate-300">{selectedProject.role}</strong>
            </p>
          </div>

          <div className="flex items-center space-x-2">
            <button
              onClick={() => toggleStar(selectedProject.id, selectedProject.title)}
              className={`p-2.5 rounded-xl border transition-all ${
                starred
                  ? 'bg-emerald-500/15 border-emerald-500/40 text-emerald-600 dark:text-emerald-400'
                  : 'bg-slate-100 dark:bg-slate-800 border-slate-200 dark:border-slate-700 text-slate-400 hover:text-emerald-500'
              }`}
              title={starred ? 'Starred in Review List' : 'Star for review'}
            >
              <Bookmark className={`w-5 h-5 ${starred ? 'fill-current' : ''}`} />
            </button>

            <button
              onClick={() => setSelectedProject(null)}
              className="p-2.5 rounded-xl bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-500 hover:text-slate-900 dark:hover:text-white transition-colors"
              aria-label="Close Modal"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Quantitative Metrics Bar */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
          {selectedProject.metrics.map((metric, i) => (
            <div
              key={i}
              className="p-3 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700/60 text-center"
            >
              <div className="text-xl sm:text-2xl font-black text-emerald-600 dark:text-emerald-400">
                {metric.value}
              </div>
              <div className="text-[11px] font-semibold text-slate-600 dark:text-slate-400 mt-0.5">
                {metric.label}
              </div>
            </div>
          ))}
        </div>

        {/* Problem Statement */}
        <div className="space-y-2">
          <h3 className="text-xs font-mono font-bold uppercase tracking-wider text-slate-400 dark:text-slate-500">
            Problem Formulation & Real-World Motivation:
          </h3>
          <p className="text-sm text-slate-700 dark:text-slate-300 leading-relaxed bg-slate-100/80 dark:bg-slate-800/30 p-4 rounded-xl border border-slate-200 dark:border-slate-800">
            {selectedProject.problemStatement}
          </p>
        </div>

        {/* Mathematical Model Breakdown */}
        <div className="space-y-3">
          <div className="flex items-center gap-2">
            <Sigma className="w-4 h-4 text-emerald-600 dark:text-emerald-500" />
            <h3 className="text-xs font-mono font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400">
              Mathematical Programming & Model Structure:
            </h3>
          </div>

          <div className="p-4 rounded-xl bg-slate-100/80 dark:bg-slate-900 text-slate-800 dark:text-slate-200 border border-slate-200 dark:border-slate-800 space-y-3 font-mono text-xs shadow-xs">
            <div>
              <span className="text-emerald-700 dark:text-emerald-400 font-bold">Objective Function:</span>
              <p className="mt-1 text-slate-800 dark:text-slate-300 bg-white dark:bg-slate-950 p-2.5 rounded border border-slate-200 dark:border-slate-800 overflow-x-auto">
                {selectedProject.mathematicalModel.objective}
              </p>
            </div>

            <div>
              <span className="text-sky-700 dark:text-cyan-400 font-bold">Key Constraints:</span>
              <ul className="mt-1 space-y-1 text-slate-800 dark:text-slate-300">
                {selectedProject.mathematicalModel.constraints.map((c, i) => (
                  <li key={i} className="bg-white dark:bg-slate-950/80 px-2.5 py-1.5 rounded border border-slate-200 dark:border-slate-800/80">
                    {c}
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <span className="text-amber-700 dark:text-amber-400 font-bold">Decision Variables & Parameters:</span>
              <p className="mt-1 text-slate-600 dark:text-slate-400 text-[11px]">
                {selectedProject.mathematicalModel.variables}
              </p>
            </div>
          </div>
        </div>

        {/* Key Findings */}
        <div className="space-y-2">
          <h3 className="text-xs font-mono font-bold uppercase tracking-wider text-slate-400 dark:text-slate-500">
            Key Empirical & Statistical Findings:
          </h3>
          <ul className="space-y-2 text-xs sm:text-sm text-slate-700 dark:text-slate-300">
            {selectedProject.keyFindings.map((finding, i) => (
              <li key={i} className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-500 mt-0.5 shrink-0" />
                <span>{finding}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Code Snippet Preview */}
        <div className="space-y-2">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <FileCode className="w-4 h-4 text-emerald-500" />
              <h3 className="text-xs font-mono font-bold uppercase tracking-wider text-slate-400 dark:text-slate-500">
                Implementation Snippet:
              </h3>
            </div>
            <button
              onClick={handleCopyCode}
              className="text-xs text-slate-500 hover:text-emerald-500 flex items-center gap-1 transition-colors"
            >
              {copiedCode ? <Check className="w-3.5 h-3.5 text-emerald-500" /> : <Copy className="w-3.5 h-3.5" />}
              <span>{copiedCode ? 'Copied' : 'Copy Code'}</span>
            </button>
          </div>

          <pre className="p-4 rounded-xl bg-slate-950 text-slate-300 font-mono text-xs overflow-x-auto border border-slate-800 max-h-60">
            <code>{selectedProject.codeSnippet}</code>
          </pre>
        </div>

        {/* Tools and Footer */}
        <div className="pt-4 border-t border-slate-200 dark:border-slate-800 flex flex-wrap items-center justify-between gap-4">
          <div className="flex flex-wrap items-center gap-1.5">
            <span className="text-xs font-mono text-slate-400 mr-1">Stack:</span>
            {selectedProject.tools.map((t, i) => (
              <span
                key={i}
                className="text-[11px] font-semibold px-2 py-0.5 rounded bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-700"
              >
                {t}
              </span>
            ))}
          </div>

          <button
            onClick={() => setSelectedProject(null)}
            className="px-4 py-2 rounded-xl bg-slate-200 dark:bg-slate-800 hover:bg-slate-300 dark:hover:bg-slate-700 text-slate-800 dark:text-white text-xs font-semibold transition-colors"
          >
            Close Deep Dive
          </button>
        </div>

      </div>
    </div>
  );
}
