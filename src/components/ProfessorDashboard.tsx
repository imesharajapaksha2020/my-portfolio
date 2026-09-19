'use client';

import React, { useState } from 'react';
import { usePortfolio } from '@/context/PortfolioContext';
import {
  Bookmark,
  Sparkles,
  Activity,
  FileText,
  FileDown,
  Trash2,
  Plus,
  Copy,
  Check,
  FolderHeart,
  ClipboardList
} from 'lucide-react';

export default function ProfessorDashboard() {
  const {
    starredIds,
    filterMode,
    setFilterMode,
    cvDownloads,
    projectExpansions,
    citationsCopied,
    engagementLogs,
    professorNotes,
    addProfessorNote,
    deleteProfessorNote,
    clearProfessorNotes,
    setIsCVModalOpen,
    setIsStarredDrawerOpen,
    isHydrated
  } = usePortfolio();

  const [noteInput, setNoteInput] = useState('');
  const [copiedNotes, setCopiedNotes] = useState(false);

  const handleAddNote = (e: React.FormEvent) => {
    e.preventDefault();
    if (noteInput.trim()) {
      addProfessorNote(noteInput.trim());
      setNoteInput('');
    }
  };

  const handleCopyNotes = () => {
    if (professorNotes.length === 0) return;
    const text = professorNotes
      .map((n, i) => `${i + 1}. [${n.createdAt}] ${n.text}`)
      .join('\n');
    navigator.clipboard.writeText(
      `Faculty Evaluation Notes - Imesha Rajapaksha Portfolio:\n\n${text}`
    );
    setCopiedNotes(true);
    setTimeout(() => setCopiedNotes(false), 2500);
  };

  return (
    <section id="professor-dashboard" className="py-12 bg-slate-100/70 dark:bg-slate-900/90 text-slate-900 dark:text-white border-y border-slate-200 dark:border-slate-800 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Bar with Filter Switcher */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 pb-8 border-b border-slate-200 dark:border-slate-800">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded text-[11px] font-mono font-bold bg-emerald-500/10 dark:bg-emerald-500/20 text-emerald-700 dark:text-emerald-400 border border-emerald-500/20 dark:border-emerald-500/30">
                <Sparkles className="w-3.5 h-3.5" />
                PROFESSOR REVIEW HUB
              </span>
              <span className="text-xs text-slate-500 dark:text-slate-400 hidden sm:inline">
                State persisted via Browser Storage (localStorage & sessionStorage)
              </span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight">
              Interactive Review & Engagement Workspace
            </h2>
            <p className="text-sm text-slate-600 dark:text-slate-400 mt-1 max-w-2xl">
              Bookmark key publications or projects to your review list. Your selections and evaluation notes persist across browser reloads.
            </p>
          </div>

          {/* Quick Filter Toggle */}
          <div className="flex items-center gap-3">
            <div className="bg-slate-200/80 dark:bg-slate-950 p-1 rounded-xl border border-slate-300/80 dark:border-slate-800 flex items-center">
              <button
                id="filter-all-btn"
                onClick={() => setFilterMode('all')}
                className={`px-3.5 py-1.5 rounded-lg text-xs font-semibold transition-all ${
                  filterMode === 'all'
                    ? 'bg-emerald-600 text-white shadow'
                    : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
                }`}
              >
                All Portfolio Items
              </button>
              <button
                id="filter-starred-btn"
                onClick={() => setFilterMode('starred')}
                className={`px-3.5 py-1.5 rounded-lg text-xs font-semibold flex items-center gap-1.5 transition-all ${
                  filterMode === 'starred'
                    ? 'bg-emerald-600 text-white shadow'
                    : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
                }`}
              >
                <Bookmark className="w-3.5 h-3.5 fill-current" />
                <span>Starred for Review</span>
                {isHydrated && (
                  <span className="ml-1 px-1.5 py-0.2 rounded-full text-[10px] bg-slate-300 dark:bg-slate-800 text-slate-800 dark:text-emerald-300 font-bold">
                    {starredIds.length}
                  </span>
                )}
              </button>
            </div>
          </div>
        </div>

        {/* 3-Column Layout: Metrics, Review Notes, Simulated Interaction Log */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 pt-8">
          
          {/* Column 1: Engagement Tracker Metrics (4 cols) */}
          <div className="lg:col-span-4 space-y-4">
            <h3 className="text-sm font-mono font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 flex items-center gap-2">
              <Activity className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
              Session Engagement Tracker
            </h3>

            <div className="grid grid-cols-3 gap-3">
              <div className="p-4 rounded-xl bg-white dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700/60 text-center shadow-xs">
                <div className="text-2xl font-black text-emerald-600 dark:text-emerald-400">
                  {isHydrated ? cvDownloads : 0}
                </div>
                <div className="text-[11px] font-medium text-slate-600 dark:text-slate-300 mt-1">CV Views / Downloads</div>
              </div>

              <div className="p-4 rounded-xl bg-white dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700/60 text-center shadow-xs">
                <div className="text-2xl font-black text-sky-600 dark:text-cyan-400">
                  {isHydrated ? projectExpansions : 1}
                </div>
                <div className="text-[11px] font-medium text-slate-600 dark:text-slate-300 mt-1">Project Deep Dives</div>
              </div>

              <div className="p-4 rounded-xl bg-white dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700/60 text-center shadow-xs">
                <div className="text-2xl font-black text-indigo-600 dark:text-indigo-400">
                  {isHydrated ? citationsCopied : 0}
                </div>
                <div className="text-[11px] font-medium text-slate-600 dark:text-slate-300 mt-1">BibTeX Copies</div>
              </div>
            </div>

            {/* Quick action buttons for professor testing */}
            <div className="p-4 rounded-xl bg-white/80 dark:bg-slate-950/60 border border-slate-200 dark:border-slate-800 space-y-2.5 text-xs shadow-xs">
              <div className="text-slate-700 dark:text-slate-300 font-semibold flex items-center justify-between">
                <span>Quick Evaluation Actions:</span>
                <span className="text-[10px] text-emerald-600 dark:text-emerald-400 font-mono">Simulated Logs</span>
              </div>
              <div className="flex flex-wrap gap-2">
                <button
                  onClick={() => setIsCVModalOpen(true)}
                  className="px-3 py-1.5 rounded-lg bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-200 border border-slate-200 dark:border-slate-700 flex items-center gap-1.5 text-xs font-medium"
                >
                  <FileDown className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400" />
                  <span>Inspect Academic CV</span>
                </button>
                <button
                  onClick={() => setIsStarredDrawerOpen(true)}
                  className="px-3 py-1.5 rounded-lg bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-200 border border-slate-200 dark:border-slate-700 flex items-center gap-1.5 text-xs font-medium"
                >
                  <FolderHeart className="w-3.5 h-3.5 text-sky-600 dark:text-cyan-400" />
                  <span>Open Starred Drawer</span>
                </button>
              </div>
            </div>
          </div>

          {/* Column 2: Review Notes Notepad (4 cols) */}
          <div className="lg:col-span-4 space-y-4">
            <div className="flex items-center justify-between">
              <h3 className="text-sm font-mono font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 flex items-center gap-2">
                <ClipboardList className="w-4 h-4 text-sky-600 dark:text-cyan-400" />
                Professor Evaluation Notes
              </h3>
              {isHydrated && professorNotes.length > 0 && (
                <div className="flex items-center gap-2">
                  <button
                    onClick={handleCopyNotes}
                    className="text-xs text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white flex items-center gap-1 transition-colors"
                    title="Copy notes to clipboard"
                  >
                    {copiedNotes ? (
                      <Check className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400" />
                    ) : (
                      <Copy className="w-3.5 h-3.5" />
                    )}
                    <span>{copiedNotes ? 'Copied' : 'Copy'}</span>
                  </button>
                  <button
                    onClick={clearProfessorNotes}
                    className="text-xs text-slate-400 hover:text-red-500 transition-colors"
                    title="Clear notes"
                  >
                    <Trash2 className="w-3.5 h-3.5" />
                  </button>
                </div>
              )}
            </div>

            {/* Note Input Form */}
            <form onSubmit={handleAddNote} className="flex gap-2">
              <input
                type="text"
                value={noteInput}
                onChange={(e) => setNoteInput(e.target.value)}
                placeholder="Add review note (e.g., strong PuLP experience)..."
                className="flex-1 px-3 py-2 rounded-xl bg-white dark:bg-slate-950 border border-slate-300 dark:border-slate-700 text-xs text-slate-900 dark:text-slate-200 placeholder-slate-400 dark:placeholder-slate-500 focus:outline-none focus:border-emerald-500"
              />
              <button
                type="submit"
                className="px-3 py-2 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-semibold flex items-center gap-1 transition-colors shrink-0 shadow-xs"
              >
                <Plus className="w-3.5 h-3.5" />
                <span>Save</span>
              </button>
            </form>

            {/* Notes List */}
            <div className="space-y-2 max-h-48 overflow-y-auto pr-1">
              {!isHydrated || professorNotes.length === 0 ? (
                <div className="text-center py-6 text-xs text-slate-500 bg-white/60 dark:bg-slate-950/40 rounded-xl border border-dashed border-slate-300 dark:border-slate-800">
                  No review notes saved yet. Use the input above to jot down candidate feedback.
                </div>
              ) : (
                professorNotes.map((note) => (
                  <div
                    key={note.id}
                    className="p-3 rounded-xl bg-white dark:bg-slate-800/70 border border-slate-200 dark:border-slate-700/60 flex items-start justify-between gap-2 text-xs group shadow-xs"
                  >
                    <div className="space-y-1">
                      <p className="text-slate-800 dark:text-slate-200 leading-snug">{note.text}</p>
                      <span className="text-[10px] font-mono text-slate-500 dark:text-slate-400">
                        {note.createdAt}
                      </span>
                    </div>
                    <button
                      onClick={() => deleteProfessorNote(note.id)}
                      className="text-slate-400 hover:text-red-500 opacity-0 group-hover:opacity-100 transition-opacity p-1"
                    >
                      <Trash2 className="w-3.5 h-3.5" />
                    </button>
                  </div>
                ))
              )}
            </div>
          </div>

          {/* Column 3: Simulated Interactions Log (sessionStorage) (4 cols) */}
          <div className="lg:col-span-4 space-y-4">
            <h3 className="text-sm font-mono font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 flex items-center gap-2">
              <Activity className="w-4 h-4 text-indigo-600 dark:text-indigo-400" />
              Live Session Activity Stream
            </h3>

            <div className="rounded-xl bg-white dark:bg-slate-950 border border-slate-200 dark:border-slate-800 p-3 max-h-60 overflow-y-auto space-y-2.5 shadow-xs">
              {!isHydrated || engagementLogs.length === 0 ? (
                <div className="text-xs text-slate-500 py-4 text-center">
                  Initializing activity stream...
                </div>
              ) : (
                engagementLogs.map((log, index) => (
                  <div
                    key={index}
                    className="flex items-start gap-2.5 pb-2 border-b border-slate-100 dark:border-slate-900 last:border-0 last:pb-0 text-xs"
                  >
                    <div className="w-2 h-2 rounded-full bg-emerald-500 mt-1 shrink-0"></div>
                    <div className="flex-1 space-y-0.5">
                      <div className="flex items-center justify-between text-[11px]">
                        <span className="font-semibold text-slate-800 dark:text-slate-200">{log.action}</span>
                        <span className="text-[10px] font-mono text-slate-500 dark:text-slate-400">
                          {log.timestamp}
                        </span>
                      </div>
                      <p className="text-[11px] text-slate-500 dark:text-slate-400 truncate">{log.details}</p>
                    </div>
                  </div>
                ))
              )}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
