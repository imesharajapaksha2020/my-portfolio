'use client';

import React, { useState } from 'react';
import { usePortfolio } from '@/context/PortfolioContext';
import { ADVISOR_RESEARCH_FIT, PERSONAL_INFO } from '@/data/portfolioData';
import {
  Sparkles,
  Target,
  Send,
  Mail,
  Copy,
  Check,
  CheckCircle2,
  X,
  ExternalLink,
  MessageSquare
} from 'lucide-react';

export default function AdvisorMatch() {
  const { isContactModalOpen, setIsContactModalOpen, logInteraction } = usePortfolio();
  const [copiedDraft, setCopiedDraft] = useState(false);

  const sampleEmailTemplate = `Dear Imesha,

I have reviewed your academic portfolio and research background in Operations Research and Biostatistics. We have an upcoming PhD research opening in our lab focusing on [Optimization / Biostatistics / Stochastic Systems], and your experience in [Mixed-Integer Programming / Clinical Predictive Modeling] matches our active project.

Could you share your full academic transcripts and availability for an exploratory discussion via Zoom?

Best regards,
[Professor Name]
[University / Department]`;

  const handleCopyDraft = () => {
    navigator.clipboard.writeText(sampleEmailTemplate);
    setCopiedDraft(true);
    logInteraction('Copied Faculty Email Draft', 'Advisor Match Inquiry', 'Copy');
    setTimeout(() => setCopiedDraft(false), 2500);
  };

  return (
    <section id="advisor-fit" className="scroll-mt-16 md:scroll-mt-20 pt-7 pb-16 md:pt-9 md:pb-20 bg-white dark:bg-slate-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider bg-emerald-500/10 text-emerald-700 dark:text-emerald-400 border border-emerald-500/20 mb-3">
              <Target className="w-3.5 h-3.5" />
              <span>PhD Candidate Matchmaking</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
              Prospective PhD Advisor Alignment
            </h2>
            <p className="mt-2 text-base text-slate-600 dark:text-slate-400">
              Tailored alignment profiles for principal investigators and admissions committees seeking doctoral candidates with demonstrated mathematical, algorithmic, and applied clinical research competencies.
            </p>
          </div>

          <button
            onClick={() => setIsContactModalOpen(true)}
            className="px-5 py-3 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white text-xs sm:text-sm font-semibold flex items-center gap-2 shadow-lg shadow-emerald-600/20 shrink-0"
          >
            <Mail className="w-4 h-4" />
            <span>Send Advisor Inquiry</span>
          </button>
        </div>

        {/* 3 Research Alignment Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {ADVISOR_RESEARCH_FIT.map((fit, idx) => (
            <div
              key={idx}
              className="p-6 sm:p-7 rounded-2xl bg-slate-50/70 dark:bg-slate-900/70 border border-slate-200 dark:border-slate-800 flex flex-col justify-between space-y-6 hover:border-slate-300 dark:hover:border-slate-700 transition-all shadow-sm"
            >
              <div className="space-y-4">
                <div className="w-8 h-8 rounded-lg bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 flex items-center justify-center font-mono font-bold text-xs">
                  0{idx + 1}
                </div>

                <h3 className="text-lg font-bold text-slate-900 dark:text-white leading-snug">
                  {fit.domain}
                </h3>

                <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                  {fit.description}
                </p>

                <div className="space-y-2">
                  <div className="text-[11px] font-mono font-bold uppercase tracking-wider text-slate-400 dark:text-slate-500">
                    Core Methodologies:
                  </div>
                  <div className="flex flex-wrap gap-1.5">
                    {fit.methods.map((m, mIdx) => (
                      <span
                        key={mIdx}
                        className="text-[10px] font-semibold px-2 py-0.5 rounded bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-700"
                      >
                        {m}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              <div className="pt-4 border-t border-slate-200 dark:border-slate-800/80 space-y-2">
                <div className="text-[11px] font-mono text-slate-400">Target Lab Profiles:</div>
                <div className="text-xs text-emerald-700 dark:text-emerald-400 font-medium">
                  {fit.targetLabs.join(' • ')}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Contact / Faculty Inquiry Modal */}
        {isContactModalOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/70 dark:bg-slate-950/80 backdrop-blur-sm animate-in fade-in duration-200">
            <div className="relative w-full max-w-2xl rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-2xl p-6 sm:p-8 text-slate-900 dark:text-white space-y-6">
              
              <div className="flex items-center justify-between pb-4 border-b border-slate-200 dark:border-slate-800">
                <div className="flex items-center gap-2">
                  <Send className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />
                  <h3 className="text-lg font-bold">Inquire About PhD Opportunities</h3>
                </div>
                <button
                  onClick={() => setIsContactModalOpen(false)}
                  className="p-1.5 rounded-lg text-slate-400 hover:text-slate-900 dark:hover:text-white transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                Thank you for reviewing my profile! You can email me directly at{' '}
                <a
                  href={`mailto:${PERSONAL_INFO.email}`}
                  className="text-emerald-700 dark:text-emerald-400 font-bold underline"
                >
                  {PERSONAL_INFO.email}
                </a>{' '}
                or use the quick academic email template below to schedule an interview or request transcripts.
              </p>

              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-mono font-bold uppercase text-slate-500 dark:text-slate-400">
                    Pre-Composed Academic Inquiry Draft:
                  </span>
                  <button
                    onClick={handleCopyDraft}
                    className="text-xs text-slate-500 hover:text-emerald-600 dark:hover:text-emerald-400 flex items-center gap-1 transition-colors"
                  >
                    {copiedDraft ? <Check className="w-3.5 h-3.5 text-emerald-500" /> : <Copy className="w-3.5 h-3.5" />}
                    <span>{copiedDraft ? 'Copied' : 'Copy Draft'}</span>
                  </button>
                </div>

                <pre className="p-4 rounded-xl bg-slate-900 dark:bg-slate-950 text-slate-200 font-mono text-xs overflow-x-auto border border-slate-800 whitespace-pre-wrap">
                  {sampleEmailTemplate}
                </pre>
              </div>

              <div className="flex flex-wrap items-center justify-between gap-3 pt-4 border-t border-slate-200 dark:border-slate-800">
                <a
                  href={`mailto:${PERSONAL_INFO.email}?subject=PhD%20Opportunity%20Inquiry%20-%20Imesha%20Rajapaksha`}
                  className="px-5 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold flex items-center gap-2 shadow-xs transition-colors"
                >
                  <Mail className="w-4 h-4" />
                  <span>Open in Mail Client</span>
                </a>

                <button
                  onClick={() => setIsContactModalOpen(false)}
                  className="px-4 py-2.5 rounded-xl bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 text-xs font-semibold text-slate-800 dark:text-slate-200 border border-slate-200 dark:border-slate-700 transition-colors"
                >
                  Close
                </button>
              </div>

            </div>
          </div>
        )}

      </div>
    </section>
  );
}
