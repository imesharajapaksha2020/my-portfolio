'use client';

import React from 'react';
import { usePortfolio } from '@/context/PortfolioContext';
import { RESEARCH_PROJECTS } from '@/data/portfolioData';
import { ResearchProject } from '@/types/portfolio';
import {
  FolderKanban,
  Bookmark,
  ExternalLink,
  Code2,
  TrendingUp,
  ArrowRight,
  Cpu,
  Activity,
  Layers
} from 'lucide-react';

export default function ProjectsSection() {
  const {
    starredIds,
    toggleStar,
    isStarred,
    filterMode,
    setSelectedProject,
    logInteraction,
    isHydrated
  } = usePortfolio();

  const displayedProjects =
    filterMode === 'starred' && isHydrated
      ? RESEARCH_PROJECTS.filter((p) => isStarred(p.id))
      : RESEARCH_PROJECTS;

  const handleOpenProject = (project: ResearchProject) => {
    setSelectedProject(project);
    logInteraction(
      'Expanded Project Details',
      `Inspected formulation for "${project.title.slice(0, 45)}..."`,
      'Code2'
    );
  };

  return (
    <section id="projects" className="py-16 md:py-24 bg-slate-50/60 dark:bg-slate-900/40 border-t border-slate-200/80 dark:border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider bg-emerald-500/10 text-emerald-700 dark:text-emerald-400 border border-emerald-500/20 mb-3">
              <FolderKanban className="w-3.5 h-3.5" />
              <span>Quantitative Investigations</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
              Selected Research Projects
            </h2>
            <p className="mt-2 text-base text-slate-600 dark:text-slate-400">
              Rigorous empirical and optimization frameworks combining mixed-integer linear programming, dynamic queueing theory, and clinical predictive modeling.
            </p>
          </div>

          <div className="text-xs text-slate-500 dark:text-slate-400 font-mono">
            Showing {displayedProjects.length} of {RESEARCH_PROJECTS.length} Projects
          </div>
        </div>

        {/* Empty state when starred is empty */}
        {filterMode === 'starred' && displayedProjects.length === 0 && (
          <div className="p-8 text-center rounded-2xl bg-slate-100 dark:bg-slate-900 border border-dashed border-slate-300 dark:border-slate-800 space-y-2">
            <p className="text-sm font-semibold text-slate-700 dark:text-slate-300">
              No research projects currently starred for review.
            </p>
            <p className="text-xs text-slate-500">
              Switch back to &quot;All Portfolio Items&quot; in the review hub above or star a project below.
            </p>
          </div>
        )}

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {displayedProjects.map((project) => {
            const starred = isHydrated && isStarred(project.id);
            const isOR = project.category === 'Operations Research';
            const isBiostat = project.category === 'Biostatistics & Data Science';

            return (
              <div
                key={project.id}
                className="rounded-2xl p-6 sm:p-7 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 hover:border-slate-300 dark:hover:border-slate-700 shadow-sm hover:shadow-xl transition-all flex flex-col justify-between group"
              >
                <div className="space-y-4">
                  
                  {/* Category Badge & Star Button */}
                  <div className="flex items-center justify-between gap-2">
                    <span
                      className={`inline-flex items-center gap-1 text-xs font-semibold px-2.5 py-0.5 rounded-full ${
                        isOR
                          ? 'bg-emerald-500/10 text-emerald-700 dark:text-emerald-400 border border-emerald-500/20'
                          : isBiostat
                          ? 'bg-cyan-500/10 text-cyan-700 dark:text-cyan-400 border border-cyan-500/20'
                          : 'bg-indigo-500/10 text-indigo-700 dark:text-indigo-400 border border-indigo-500/20'
                      }`}
                    >
                      {isOR ? (
                        <Cpu className="w-3.5 h-3.5" />
                      ) : isBiostat ? (
                        <Activity className="w-3.5 h-3.5" />
                      ) : (
                        <Layers className="w-3.5 h-3.5" />
                      )}
                      <span>{project.category}</span>
                    </span>

                    <button
                      onClick={() => toggleStar(project.id, project.title)}
                      className={`p-2 rounded-lg border transition-all ${
                        starred
                          ? 'bg-emerald-500/15 border-emerald-500/40 text-emerald-600 dark:text-emerald-400'
                          : 'bg-slate-50 dark:bg-slate-800/80 border-slate-200 dark:border-slate-700 text-slate-400 hover:text-emerald-500'
                      }`}
                      title={starred ? 'Starred in Review List' : 'Star project for review'}
                    >
                      <Bookmark className={`w-4 h-4 ${starred ? 'fill-current' : ''}`} />
                    </button>
                  </div>

                  {/* Title & Role */}
                  <div>
                    <h3 className="text-lg font-bold text-slate-900 dark:text-white leading-snug group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">
                      Role: <span className="font-semibold text-slate-700 dark:text-slate-300">{project.role}</span> ({project.duration})
                    </p>
                  </div>

                  {/* Summary */}
                  <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 line-clamp-3 leading-relaxed">
                    {project.summary}
                  </p>

                  {/* Metrics Bar */}
                  <div className="grid grid-cols-2 gap-2 pt-2">
                    {project.metrics.slice(0, 2).map((metric, i) => (
                      <div
                        key={i}
                        className="p-2.5 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200/80 dark:border-slate-700/60 text-center"
                      >
                        <div className="text-base font-black text-emerald-600 dark:text-emerald-400">
                          {metric.value}
                        </div>
                        <div className="text-[10px] font-semibold text-slate-500 dark:text-slate-400 truncate">
                          {metric.label}
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Stack pills */}
                  <div className="flex flex-wrap items-center gap-1.5 pt-1">
                    {project.tools.slice(0, 4).map((tool, i) => (
                      <span
                        key={i}
                        className="text-[10px] font-mono font-semibold px-2 py-0.5 rounded bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 border border-slate-200 dark:border-slate-700/80"
                      >
                        {tool}
                      </span>
                    ))}
                    {project.tools.length > 4 && (
                      <span className="text-[10px] font-mono text-slate-400">
                        +{project.tools.length - 4} more
                      </span>
                    )}
                  </div>

                </div>

                {/* Card Action Button: Deep Dive Trigger */}
                <div className="pt-6 mt-6 border-t border-slate-200/80 dark:border-slate-800/80">
                  <button
                    onClick={() => handleOpenProject(project)}
                    className="w-full py-2.5 px-4 rounded-xl bg-slate-100 dark:bg-slate-800/90 hover:bg-emerald-600 hover:text-white dark:hover:bg-emerald-600 text-slate-800 dark:text-slate-200 text-xs font-bold transition-all flex items-center justify-center gap-2 group-hover:bg-emerald-600 group-hover:text-white"
                  >
                    <Code2 className="w-4 h-4" />
                    <span>Explore Formulation & Code</span>
                    <ArrowRight className="w-3.5 h-3.5 ml-auto" />
                  </button>
                </div>

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
