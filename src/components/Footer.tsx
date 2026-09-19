'use client';

import React from 'react';
import { PERSONAL_INFO } from '@/data/portfolioData';
import { GraduationCap, Mail, ArrowUp, Heart } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from '@/components/Icons';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-slate-100/90 dark:bg-slate-950 text-slate-600 dark:text-slate-400 border-t border-slate-200 dark:border-slate-800/80 py-12 text-xs transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 pb-8 border-b border-slate-200 dark:border-slate-800">
          
          <div className="space-y-2">
            <div className="flex items-center space-x-2 text-slate-900 dark:text-white font-bold text-base">
              <span className="w-8 h-8 rounded-lg bg-emerald-600 flex items-center justify-center text-xs font-black text-white shadow-xs">
                IR
              </span>
              <span>{PERSONAL_INFO.name}</span>
            </div>
            <p className="text-slate-600 dark:text-slate-400 max-w-md leading-relaxed">
              Specializing in Operations Research (Mixed-Integer Linear Programming, Queueing Theory) and Biostatistics (Predictive Risk Modeling, Survival Analysis).
            </p>
            <div className="flex items-center gap-2 text-slate-500 dark:text-slate-400">
              <GraduationCap className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
              <span>University of Peradeniya • Second Class Upper Division</span>
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            <a
              href={`mailto:${PERSONAL_INFO.email}`}
              className="p-2.5 rounded-xl bg-white dark:bg-slate-900 hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-700 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white border border-slate-200 dark:border-slate-800 transition-colors shadow-xs"
              title="Send Email"
            >
              <Mail className="w-4 h-4" />
            </a>

            <a
              href={PERSONAL_INFO.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-xl bg-white dark:bg-slate-900 hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-700 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white border border-slate-200 dark:border-slate-800 transition-colors shadow-xs"
              title="LinkedIn"
            >
              <LinkedinIcon className="w-4 h-4" />
            </a>

            <a
              href={PERSONAL_INFO.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-xl bg-white dark:bg-slate-900 hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-700 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white border border-slate-200 dark:border-slate-800 transition-colors shadow-xs"
              title="GitHub"
            >
              <GithubIcon className="w-4 h-4" />
            </a>

            <button
              onClick={scrollToTop}
              className="p-2.5 rounded-xl bg-white dark:bg-slate-900 hover:bg-emerald-600 dark:hover:bg-emerald-600 hover:text-white dark:hover:text-white text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-800 transition-all flex items-center gap-1.5 shadow-xs"
              title="Back to Top"
            >
              <ArrowUp className="w-4 h-4" />
              <span>Top</span>
            </button>
          </div>

        </div>

        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 text-slate-500 text-[11px]">
          <div>
            © {new Date().getFullYear()} {PERSONAL_INFO.name}. Built with Next.js App Router, React, and Tailwind CSS.
          </div>

          <div className="flex items-center gap-3">
            <span className="inline-flex items-center gap-1 text-emerald-700 dark:text-emerald-400 font-semibold">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span>
              Fall 2027 / Spring 2027 PhD Application Cycle
            </span>
          </div>
        </div>

      </div>
    </footer>
  );
}
