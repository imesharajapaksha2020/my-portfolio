'use client';

import React, { useState } from 'react';
import { SKILL_CATEGORIES, RELEVANT_COURSEWORK } from '@/data/portfolioData';
import {
  Code,
  Sigma,
  Cpu,
  GraduationCap,
  Sparkles,
  CheckCircle2,
  BookOpen,
  Award
} from 'lucide-react';

export default function SkillsMatrix() {
  const [activeTab, setActiveTab] = useState<'skills' | 'coursework'>('skills');

  return (
    <section id="skills" className="scroll-mt-16 md:scroll-mt-20 pt-7 pb-16 md:pt-9 md:pb-20 bg-slate-50/50 dark:bg-slate-900/30 border-y border-slate-200/80 dark:border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header & Tabs */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider bg-emerald-500/10 text-emerald-700 dark:text-emerald-400 border border-emerald-500/20 mb-3">
              <Cpu className="w-3.5 h-3.5" />
              <span>Quantitative Competencies</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
              Technical Skills & Academic Coursework
            </h2>
            <p className="mt-2 text-base text-slate-600 dark:text-slate-400">
              Categorized proficiencies across mathematical programming solvers, statistical computing environments, and advanced undergraduate honors coursework.
            </p>
          </div>

          {/* Toggle Tab */}
          <div className="bg-slate-200 dark:bg-slate-800 p-1 rounded-xl flex items-center shrink-0">
            <button
              onClick={() => setActiveTab('skills')}
              className={`px-4 py-2 rounded-lg text-xs font-bold transition-all ${
                activeTab === 'skills'
                  ? 'bg-white dark:bg-slate-900 text-slate-900 dark:text-white shadow-sm'
                  : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
              }`}
            >
              Technical Skills Matrix
            </button>
            <button
              onClick={() => setActiveTab('coursework')}
              className={`px-4 py-2 rounded-lg text-xs font-bold transition-all ${
                activeTab === 'coursework'
                  ? 'bg-white dark:bg-slate-900 text-slate-900 dark:text-white shadow-sm'
                  : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
              }`}
            >
              Relevant Coursework & Grades
            </button>
          </div>
        </div>

        {/* Tab 1: Skills Matrix */}
        {activeTab === 'skills' && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {SKILL_CATEGORIES.map((cat, idx) => (
              <div
                key={idx}
                className="p-6 sm:p-7 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm hover:shadow-md transition-all space-y-5"
              >
                <div className="border-b border-slate-200 dark:border-slate-800 pb-3">
                  <h3 className="text-lg font-bold text-slate-900 dark:text-white flex items-center justify-between">
                    <span>{cat.category}</span>
                    <span className="text-xs font-mono font-normal text-emerald-600 dark:text-emerald-400">
                      {cat.skills.length} domains
                    </span>
                  </h3>
                  <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">
                    {cat.description}
                  </p>
                </div>

                <div className="space-y-4">
                  {cat.skills.map((skill, sIdx) => (
                    <div
                      key={sIdx}
                      className="p-3.5 rounded-xl bg-slate-50 dark:bg-slate-800/50 border border-slate-200/80 dark:border-slate-700/60 space-y-1.5"
                    >
                      <div className="flex items-center justify-between text-xs sm:text-sm">
                        <span className="font-bold text-slate-800 dark:text-slate-200">
                          {skill.name}
                        </span>
                        <span
                          className={`text-[10px] font-mono px-2 py-0.5 rounded-full font-semibold ${
                            skill.level === 'Advanced'
                              ? 'bg-emerald-500/10 text-emerald-700 dark:text-emerald-400 border border-emerald-500/20'
                              : 'bg-indigo-500/10 text-indigo-700 dark:text-indigo-400 border border-indigo-500/20'
                          }`}
                        >
                          {skill.level}
                        </span>
                      </div>

                      <div className="flex flex-wrap items-center gap-1 text-[11px] text-slate-500 dark:text-slate-400 font-mono">
                        {skill.librariesOrPackages.map((lib, lIdx) => (
                          <span
                            key={lIdx}
                            className="bg-white dark:bg-slate-900 px-1.5 py-0.5 rounded border border-slate-200 dark:border-slate-800"
                          >
                            {lib}
                          </span>
                        ))}
                      </div>

                      <p className="text-[11px] text-slate-600 dark:text-slate-300 leading-snug pt-0.5">
                        <strong className="text-slate-700 dark:text-slate-400">Application:</strong>{' '}
                        {skill.academicApplication}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Tab 2: Relevant Coursework */}
        {activeTab === 'coursework' && (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {RELEVANT_COURSEWORK.map((cat, idx) => (
              <div
                key={idx}
                className="p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm space-y-4"
              >
                <div className="pb-3 border-b border-slate-200 dark:border-slate-800">
                  <h3 className="text-base font-bold text-slate-900 dark:text-white flex items-center gap-2">
                    <BookOpen className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
                    <span>{cat.category}</span>
                  </h3>
                </div>

                <div className="space-y-3">
                  {cat.courses.map((course, cIdx) => (
                    <div
                      key={cIdx}
                      className="p-3 rounded-xl bg-slate-50 dark:bg-slate-800/50 border border-slate-200/80 dark:border-slate-700/60 space-y-1"
                    >
                      <div className="flex items-center justify-between">
                        <span className="text-xs font-mono font-bold text-slate-500 dark:text-slate-400">
                          {course.code}
                        </span>
                        <span className="text-xs font-black px-2 py-0.5 rounded bg-emerald-500/10 text-emerald-700 dark:text-emerald-400 font-mono">
                          Grade: {course.grade}
                        </span>
                      </div>
                      <div className="text-xs sm:text-sm font-bold text-slate-800 dark:text-slate-200">
                        {course.name}
                      </div>
                      <p className="text-[11px] text-slate-500 dark:text-slate-400 leading-snug">
                        {course.relevance}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        )}

      </div>
    </section>
  );
}
