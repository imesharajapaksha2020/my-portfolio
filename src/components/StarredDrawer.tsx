'use client';

import React from 'react';
import { usePortfolio } from '@/context/PortfolioContext';
import { RESEARCH_PROJECTS, PUBLICATIONS, EXPERIENCE_ITEMS } from '@/data/portfolioData';
import {
  X,
  Bookmark,
  Trash2,
  ExternalLink,
  Code2,
  Quote,
  FileDown,
  CheckCircle2,
  FolderHeart
} from 'lucide-react';

export default function StarredDrawer() {
  const {
    isStarredDrawerOpen,
    setIsStarredDrawerOpen,
    starredIds,
    toggleStar,
    setSelectedProject,
    setSelectedPublicationBibtex,
    setIsCVModalOpen,
    isHydrated
  } = usePortfolio();

  if (!isStarredDrawerOpen) return null;

  // Gather all items matching starredIds
  const starredProjects = RESEARCH_PROJECTS.filter((p) => starredIds.includes(p.id));
  const starredPublications = PUBLICATIONS.filter((p) => starredIds.includes(p.id));
  const starredExperience = EXPERIENCE_ITEMS.filter((e) => starredIds.includes(e.id));

  const totalStarred = starredProjects.length + starredPublications.length + starredExperience.length;

  return (
    <div className="fixed inset-0 z-50 flex justify-end bg-slate-950/60 dark:bg-slate-950/75 backdrop-blur-xs animate-in fade-in duration-200">
      <div className="relative w-full max-w-md h-full bg-white dark:bg-slate-900 border-l border-slate-200 dark:border-slate-800 shadow-2xl p-6 flex flex-col justify-between overflow-hidden">
        
        {/* Drawer Header */}
        <div>
          <div className="flex items-center justify-between pb-4 border-b border-slate-200 dark:border-slate-800">
            <div className="flex items-center gap-2">
              <FolderHeart className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />
              <div>
                <h3 className="text-base font-bold text-slate-900 dark:text-white">
                  My Review List
                </h3>
                <p className="text-xs text-slate-500 dark:text-slate-400">
                  {totalStarred} {totalStarred === 1 ? 'item' : 'items'} saved for evaluation
                </p>
              </div>
            </div>

            <button
              onClick={() => setIsStarredDrawerOpen(false)}
              className="p-1.5 rounded-lg text-slate-400 hover:text-slate-900 dark:hover:text-white transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          <p className="text-xs text-slate-500 dark:text-slate-400 py-3">
            Items starred here persist across sessions via <code className="text-emerald-700 dark:text-emerald-400 font-semibold">localStorage</code>.
          </p>
        </div>

        {/* Drawer Content */}
        <div className="flex-1 overflow-y-auto space-y-6 pr-1 py-2">
          {totalStarred === 0 ? (
            <div className="text-center py-12 space-y-3">
              <Bookmark className="w-8 h-8 text-slate-400 mx-auto stroke-1" />
              <p className="text-xs text-slate-500 dark:text-slate-400 max-w-xs mx-auto">
                Your review list is empty. Click the bookmark icon next to any project, publication, or experience to save it here.
              </p>
            </div>
          ) : (
            <>
              {/* Starred Projects */}
              {starredProjects.length > 0 && (
                <div className="space-y-2">
                  <div className="text-xs font-mono font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400">
                    Projects ({starredProjects.length})
                  </div>
                  {starredProjects.map((p) => (
                    <div
                      key={p.id}
                      className="p-3 rounded-xl bg-slate-100/80 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700 space-y-2 shadow-xs"
                    >
                      <div className="flex items-start justify-between gap-2">
                        <span className="text-xs font-bold text-slate-900 dark:text-white leading-snug">
                          {p.title}
                        </span>
                        <button
                          onClick={() => toggleStar(p.id, p.title)}
                          className="text-slate-400 hover:text-red-500 p-0.5 transition-colors"
                          title="Remove bookmark"
                        >
                          <Trash2 className="w-3.5 h-3.5" />
                        </button>
                      </div>
                      <div className="flex items-center justify-between text-[11px] pt-1">
                        <span className="text-emerald-700 dark:text-emerald-400 font-mono font-semibold">{p.category}</span>
                        <button
                          onClick={() => {
                            setSelectedProject(p);
                            setIsStarredDrawerOpen(false);
                          }}
                          className="text-indigo-600 dark:text-indigo-400 font-semibold hover:underline flex items-center gap-1"
                        >
                          <Code2 className="w-3 h-3" />
                          <span>Deep Dive</span>
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              )}

              {/* Starred Publications */}
              {starredPublications.length > 0 && (
                <div className="space-y-2">
                  <div className="text-xs font-mono font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400">
                    Publications ({starredPublications.length})
                  </div>
                  {starredPublications.map((pub) => (
                    <div
                      key={pub.id}
                      className="p-3 rounded-xl bg-slate-100/80 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700 space-y-2 shadow-xs"
                    >
                      <div className="flex items-start justify-between gap-2">
                        <span className="text-xs font-bold text-slate-900 dark:text-white leading-snug">
                          {pub.title}
                        </span>
                        <button
                          onClick={() => toggleStar(pub.id, pub.title)}
                          className="text-slate-400 hover:text-red-500 p-0.5 transition-colors"
                          title="Remove bookmark"
                        >
                          <Trash2 className="w-3.5 h-3.5" />
                        </button>
                      </div>
                      <div className="flex items-center justify-between text-[11px] pt-1">
                        <span className="text-slate-600 dark:text-slate-400 font-mono">{pub.journal}</span>
                        <button
                          onClick={() => {
                            setSelectedPublicationBibtex(pub);
                            setIsStarredDrawerOpen(false);
                          }}
                          className="text-emerald-700 dark:text-emerald-400 font-semibold hover:underline flex items-center gap-1"
                        >
                          <Quote className="w-3 h-3" />
                          <span>BibTeX</span>
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              )}

              {/* Starred Experience */}
              {starredExperience.length > 0 && (
                <div className="space-y-2">
                  <div className="text-xs font-mono font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400">
                    Experience & Education ({starredExperience.length})
                  </div>
                  {starredExperience.map((exp) => (
                    <div
                      key={exp.id}
                      className="p-3 rounded-xl bg-slate-100/80 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700 space-y-1.5 shadow-xs"
                    >
                      <div className="flex items-start justify-between gap-2">
                        <div>
                          <div className="text-xs font-bold text-slate-900 dark:text-white">
                            {exp.title}
                          </div>
                          <div className="text-[11px] text-slate-600 dark:text-slate-400">
                            {exp.institution} ({exp.period})
                          </div>
                        </div>
                        <button
                          onClick={() => toggleStar(exp.id, exp.title)}
                          className="text-slate-400 hover:text-red-500 p-0.5 transition-colors"
                        >
                          <Trash2 className="w-3.5 h-3.5" />
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </>
          )}
        </div>

        {/* Drawer Footer Actions */}
        <div className="pt-4 border-t border-slate-200 dark:border-slate-800 space-y-2">
          <button
            onClick={() => {
              setIsCVModalOpen(true);
              setIsStarredDrawerOpen(false);
            }}
            className="w-full py-2.5 px-4 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold flex items-center justify-center gap-2 shadow-xs transition-colors"
          >
            <FileDown className="w-4 h-4" />
            <span>Review Full Academic CV</span>
          </button>

          <button
            onClick={() => setIsStarredDrawerOpen(false)}
            className="w-full py-2 rounded-xl bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 text-xs font-semibold text-slate-800 dark:text-slate-200 border border-slate-200 dark:border-slate-700 transition-colors"
          >
            Back to Portfolio
          </button>
        </div>

      </div>
    </div>
  );
}
