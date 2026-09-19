'use client';

import React, { useState } from 'react';
import { RESEARCH_PILLARS } from '@/data/portfolioData';
import {
  Binary,
  Activity,
  ArrowRight,
  Code2,
  CheckCircle2,
  Cpu,
  TrendingUp,
  HelpCircle,
  Bookmark
} from 'lucide-react';
import { usePortfolio } from '@/context/PortfolioContext';

export default function ResearchPillars() {
  const [activePillarId, setActivePillarId] = useState<string>('operations-research');
  const { toggleStar, isStarred } = usePortfolio();

  const activePillar =
    RESEARCH_PILLARS.find((p) => p.id === activePillarId) || RESEARCH_PILLARS[0];

  return (
    <section id="research-pillars" className="py-16 md:py-24 bg-slate-50/50 dark:bg-slate-900/30 border-y border-slate-200/80 dark:border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider bg-emerald-500/10 text-emerald-700 dark:text-emerald-400 border border-emerald-500/20 mb-3">
            <Binary className="w-3.5 h-3.5" />
            <span>The Academic Hook</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Academic & Research Profile
          </h2>
          <p className="mt-2 text-base text-slate-600 dark:text-slate-400 leading-relaxed">
            My quantitative preparation bridges two complementary scientific disciplines: the mathematical rigor of Operations Research and the clinical inferential methodologies of Biostatistics.
          </p>
        </div>

        {/* Dual Pillar Switcher Tabs */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
          {RESEARCH_PILLARS.map((pillar) => {
            const isSelected = activePillar.id === pillar.id;
            const isOR = pillar.id === 'operations-research';

            return (
              <button
                key={pillar.id}
                onClick={() => setActivePillarId(pillar.id)}
                className={`text-left p-6 rounded-2xl border transition-all relative overflow-hidden ${
                  isSelected
                    ? 'bg-white dark:bg-slate-900 border-emerald-500/60 shadow-xl ring-2 ring-emerald-500/20'
                    : 'bg-white/60 dark:bg-slate-900/50 border-slate-200 dark:border-slate-800 hover:border-slate-300 dark:hover:border-slate-700'
                }`}
              >
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center space-x-3">
                    <div
                      className={`w-10 h-10 rounded-xl flex items-center justify-center ${
                        isOR
                          ? 'bg-emerald-500/10 text-emerald-600 dark:text-emerald-400'
                          : 'bg-cyan-500/10 text-cyan-600 dark:text-cyan-400'
                      }`}
                    >
                      {isOR ? <Cpu className="w-5 h-5" /> : <Activity className="w-5 h-5" />}
                    </div>
                    <div>
                      <span className="text-xs font-mono font-bold uppercase tracking-wider text-slate-400 dark:text-slate-500">
                        Pillar {isOR ? 'I' : 'II'}
                      </span>
                      <h3 className="text-lg font-bold text-slate-900 dark:text-white">
                        {pillar.title}
                      </h3>
                    </div>
                  </div>

                  <span
                    className={`text-xs px-2.5 py-1 rounded-full font-medium ${
                      isSelected
                        ? 'bg-emerald-500/10 text-emerald-700 dark:text-emerald-400 font-semibold'
                        : 'bg-slate-100 dark:bg-slate-800 text-slate-500'
                    }`}
                  >
                    {pillar.badge}
                  </span>
                </div>

                <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 line-clamp-2">
                  {pillar.tagline}
                </p>

                {isSelected && (
                  <div className="mt-3 flex items-center gap-1 text-xs font-bold text-emerald-600 dark:text-emerald-400">
                    <span>Active Deep Dive</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </div>
                )}
              </button>
            );
          })}
        </div>

        {/* Active Pillar Comprehensive Breakdown */}
        <div className="rounded-2xl p-6 sm:p-8 bg-white dark:bg-slate-900/90 border border-slate-200 dark:border-slate-800 shadow-xl space-y-8">
          
          <div className="space-y-3">
            <h3 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white">
              {activePillar.title}
            </h3>
            <p className="text-sm sm:text-base text-slate-700 dark:text-slate-300 leading-relaxed max-w-4xl">
              {activePillar.description}
            </p>
          </div>

          {/* Core Areas & Methodologies Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            
            <div className="p-5 rounded-xl bg-slate-50 dark:bg-slate-800/50 border border-slate-200/80 dark:border-slate-700/60">
              <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-3 flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-500" />
                Theoretical & Applied Focus Areas
              </h4>
              <ul className="space-y-2.5 text-xs sm:text-sm text-slate-700 dark:text-slate-300">
                {activePillar.coreAreas.map((area, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 mt-2 shrink-0"></span>
                    <span>{area}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="p-5 rounded-xl bg-slate-50 dark:bg-slate-800/50 border border-slate-200/80 dark:border-slate-700/60">
              <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-3 flex items-center gap-2">
                <TrendingUp className="w-4 h-4 text-cyan-500" />
                Key Methodological Proficiencies
              </h4>
              <ul className="space-y-2.5 text-xs sm:text-sm text-slate-700 dark:text-slate-300">
                {activePillar.keyMethodologies.map((method, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-cyan-500 mt-2 shrink-0"></span>
                    <span>{method}</span>
                  </li>
                ))}
              </ul>
            </div>

          </div>

          {/* Mathematical Formulation Showcase */}
          <div className="p-5 rounded-xl bg-slate-100/90 dark:bg-slate-900 text-slate-900 dark:text-white border border-slate-200 dark:border-slate-800 space-y-3 shadow-xs">
            <div className="flex items-center justify-between">
              <span className="text-xs font-mono uppercase tracking-wider text-emerald-700 dark:text-emerald-400 flex items-center gap-1.5 font-bold">
                <Code2 className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
                Representative Mathematical Formulation: {activePillar.sampleFormulation.title}
              </span>
              <span className="text-[11px] font-mono text-slate-500 dark:text-slate-400 font-semibold">Optimization Rigor</span>
            </div>

            <div className="math-block p-4 rounded-lg bg-white dark:bg-slate-950/80 text-slate-900 dark:text-emerald-300 font-mono text-xs sm:text-sm overflow-x-auto shadow-inner border border-slate-200 dark:border-slate-800/80">
              <code>{activePillar.sampleFormulation.latex}</code>
            </div>

            <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
              {activePillar.sampleFormulation.description}
            </p>
          </div>

        </div>

      </div>
    </section>
  );
}
