'use client';

import React, { createContext, useContext, useState, useEffect, useCallback } from 'react';
import { useLocalStorage } from '@/hooks/useLocalStorage';
import { useSessionStorage } from '@/hooks/useSessionStorage';
import { ResearchProject, Publication, EngagementLog, ProfessorNote } from '@/types/portfolio';

interface PortfolioContextType {
  // Starred items (persisted in localStorage)
  starredIds: string[];
  toggleStar: (id: string, title?: string) => void;
  isStarred: (id: string) => boolean;
  filterMode: 'all' | 'starred';
  setFilterMode: (mode: 'all' | 'starred') => void;

  // Engagement tracking (persisted in sessionStorage)
  cvDownloads: number;
  projectExpansions: number;
  citationsCopied: number;
  engagementLogs: EngagementLog[];
  logInteraction: (action: string, details: string, iconName?: string) => void;

  // Professor review notes (persisted in localStorage)
  professorNotes: ProfessorNote[];
  addProfessorNote: (text: string) => void;
  deleteProfessorNote: (id: string) => void;
  clearProfessorNotes: () => void;

  // Theme (dark / light) and Academic Palette
  theme: 'dark' | 'light';
  toggleTheme: () => void;
  accentTheme: 'emerald' | 'ocean' | 'violet';
  setAccentTheme: (palette: 'emerald' | 'ocean' | 'violet') => void;

  // Modals state
  selectedProject: ResearchProject | null;
  setSelectedProject: (project: ResearchProject | null) => void;
  selectedPublicationBibtex: Publication | null;
  setSelectedPublicationBibtex: (pub: Publication | null) => void;
  isCVModalOpen: boolean;
  setIsCVModalOpen: (open: boolean) => void;
  isContactModalOpen: boolean;
  setIsContactModalOpen: (open: boolean) => void;
  isStarredDrawerOpen: boolean;
  setIsStarredDrawerOpen: (open: boolean) => void;

  // Hydration state
  isHydrated: boolean;
}

const PortfolioContext = createContext<PortfolioContextType | undefined>(undefined);

export function PortfolioProvider({ children }: { children: React.ReactNode }) {
  // 1. Starred items in localStorage
  const [starredIds, setStarredIds, isLocalHydrated] = useLocalStorage<string[]>('imesha_starred_items', [
    'project-railway-signal',
    'pub-sljs-2026-mgps'
  ]);

  // 2. Professor Notes in localStorage
  const [professorNotes, setProfessorNotes] = useLocalStorage<ProfessorNote[]>('imesha_prof_notes', [
    {
      id: 'note-1',
      text: 'Strong match for Operations Research / Biostatistics PhD. Relevant experience in mixed-integer programming (PuLP) and clinical epidemiology at Univ of Peradeniya.',
      createdAt: '2026-09-18 10:15'
    }
  ]);

  // 3. Theme & Academic Palette in localStorage
  const [theme, setTheme] = useLocalStorage<'dark' | 'light'>('imesha_theme', 'dark');
  const [accentTheme, setAccentTheme] = useLocalStorage<'emerald' | 'ocean' | 'violet'>('imesha_accent_theme', 'emerald');

  // 4. Session Engagement Metrics in sessionStorage
  const [engagementMetrics, setEngagementMetrics, isSessionHydrated] = useSessionStorage<{
    cvDownloads: number;
    projectExpansions: number;
    citationsCopied: number;
    logs: EngagementLog[];
  }>('imesha_session_engagement', {
    cvDownloads: 0,
    projectExpansions: 1,
    citationsCopied: 0,
    logs: [
      {
        timestamp: 'Just now',
        action: 'Session Initialized',
        details: 'Reviewing PhD Portfolio: Imesha Rajapaksha',
        iconName: 'Sparkles'
      }
    ]
  });

  // UI state
  const [filterMode, setFilterMode] = useState<'all' | 'starred'>('all');
  const [selectedProject, setSelectedProject] = useState<ResearchProject | null>(null);
  const [selectedPublicationBibtex, setSelectedPublicationBibtex] = useState<Publication | null>(null);
  const [isCVModalOpen, setIsCVModalOpen] = useState<boolean>(false);
  const [isContactModalOpen, setIsContactModalOpen] = useState<boolean>(false);
  const [isStarredDrawerOpen, setIsStarredDrawerOpen] = useState<boolean>(false);

  // Sync theme class and data-accent with HTML document element
  useEffect(() => {
    if (typeof document !== 'undefined') {
      const root = document.documentElement;
      if (theme === 'dark') {
        root.classList.add('dark');
        root.classList.remove('light');
      } else {
        root.classList.remove('dark');
        root.classList.add('light');
      }
      root.setAttribute('data-accent', accentTheme);
    }
  }, [theme, accentTheme]);

  // Action: Log interactions safely in sessionStorage
  const logInteraction = useCallback(
    (action: string, details: string, iconName: string = 'Activity') => {
      const now = new Date();
      const timeString = now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', second: '2-digit' });
      const newEntry: EngagementLog = {
        timestamp: timeString,
        action,
        details,
        iconName
      };

      setEngagementMetrics((prev) => {
        let cv = prev.cvDownloads;
        let proj = prev.projectExpansions;
        let cite = prev.citationsCopied;

        if (action.includes('CV')) cv += 1;
        if (action.includes('Project')) proj += 1;
        if (action.includes('BibTeX') || action.includes('Citation')) cite += 1;

        return {
          cvDownloads: cv,
          projectExpansions: proj,
          citationsCopied: cite,
          logs: [newEntry, ...prev.logs.slice(0, 19)]
        };
      });
    },
    [setEngagementMetrics]
  );

  // Action: Star/unstar items
  const toggleStar = useCallback(
    (id: string, title?: string) => {
      setStarredIds((prev) => {
        const exists = prev.includes(id);
        const next = exists ? prev.filter((item) => item !== id) : [...prev, id];
        logInteraction(
          exists ? 'Unstarred Item' : 'Starred Item for Review',
          title ? `"${title.slice(0, 45)}..."` : `ID: ${id}`,
          'Bookmark'
        );
        return next;
      });
    },
    [setStarredIds, logInteraction]
  );

  const isStarred = useCallback((id: string) => starredIds.includes(id), [starredIds]);

  // Action: Notes management
  const addProfessorNote = useCallback(
    (text: string) => {
      if (!text.trim()) return;
      const newNote: ProfessorNote = {
        id: `note-${Date.now()}`,
        text: text.trim(),
        createdAt: new Date().toLocaleString()
      };
      setProfessorNotes((prev) => [newNote, ...prev]);
      logInteraction('Added Review Note', text.slice(0, 35) + '...', 'FileText');
    },
    [setProfessorNotes, logInteraction]
  );

  const deleteProfessorNote = useCallback(
    (id: string) => {
      setProfessorNotes((prev) => prev.filter((n) => n.id !== id));
      logInteraction('Removed Review Note', `Deleted note ${id}`, 'Trash2');
    },
    [setProfessorNotes, logInteraction]
  );

  const clearProfessorNotes = useCallback(() => {
    setProfessorNotes([]);
    logInteraction('Cleared Review Notes', 'All evaluation notes cleared', 'Trash2');
  }, [setProfessorNotes, logInteraction]);

  // Action: Theme toggling
  const toggleTheme = useCallback(() => {
    setTheme((prev) => (prev === 'dark' ? 'light' : 'dark'));
  }, [setTheme]);

  return (
    <PortfolioContext.Provider
      value={{
        starredIds,
        toggleStar,
        isStarred,
        filterMode,
        setFilterMode,
        cvDownloads: engagementMetrics.cvDownloads,
        projectExpansions: engagementMetrics.projectExpansions,
        citationsCopied: engagementMetrics.citationsCopied,
        engagementLogs: engagementMetrics.logs,
        logInteraction,
        professorNotes,
        addProfessorNote,
        deleteProfessorNote,
        clearProfessorNotes,
        theme,
        toggleTheme,
        accentTheme,
        setAccentTheme,
        selectedProject,
        setSelectedProject,
        selectedPublicationBibtex,
        setSelectedPublicationBibtex,
        isCVModalOpen,
        setIsCVModalOpen,
        isContactModalOpen,
        setIsContactModalOpen,
        isStarredDrawerOpen,
        setIsStarredDrawerOpen,
        isHydrated: isLocalHydrated && isSessionHydrated
      }}
    >
      {children}
    </PortfolioContext.Provider>
  );
}

export function usePortfolio() {
  const context = useContext(PortfolioContext);
  if (!context) {
    throw new Error('usePortfolio must be used within a PortfolioProvider');
  }
  return context;
}
