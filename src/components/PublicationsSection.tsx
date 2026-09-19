'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { usePortfolio } from '@/context/PortfolioContext';
import { PUBLICATIONS, CONFERENCE_PRESENTATIONS, JOURNAL_COVER_INFO } from '@/data/portfolioData';
import { Publication } from '@/types/portfolio';
import {
  BookOpenCheck,
  Bookmark,
  Quote,
  ChevronDown,
  ChevronUp,
  Calendar,
  Mic,
  Award,
  Presentation,
  Maximize2,
  X,
  ShieldCheck,
  FileText,
  CheckCircle2,
  ExternalLink
} from 'lucide-react';

export default function PublicationsSection() {
  const {
    toggleStar,
    isStarred,
    filterMode,
    setSelectedPublicationBibtex,
    logInteraction,
    isHydrated
  } = usePortfolio();

  const [activeTab, setActiveTab] = useState<'all' | 'papers' | 'talks'>('all');
  const [isCoverModalOpen, setIsCoverModalOpen] = useState(false);
  const [expandedAbstracts, setExpandedAbstracts] = useState<Record<string, boolean>>({
    'pub-sljs-2026-breast-cancer-under40': true
  });

  const displayedPublications =
    filterMode === 'starred' && isHydrated
      ? PUBLICATIONS.filter((p) => isStarred(p.id))
      : PUBLICATIONS;

  const toggleAbstract = (id: string) => {
    setExpandedAbstracts((prev) => ({
      ...prev,
      [id]: !prev[id]
    }));
  };

  const handleOpenBibtex = (pub: Publication) => {
    setSelectedPublicationBibtex(pub);
    logInteraction(
      'Viewed BibTeX Citation',
      `Citation for "${pub.title.slice(0, 45)}..."`,
      'Quote'
    );
  };

  return (
    <section id="publications" className="scroll-mt-16 md:scroll-mt-20 pt-7 pb-16 md:pt-9 md:pb-20 bg-white dark:bg-slate-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider bg-emerald-500/10 text-emerald-700 dark:text-emerald-400 border border-emerald-500/20 mb-3">
              <BookOpenCheck className="w-3.5 h-3.5" />
              <span>Peer-Reviewed Abstracts & Oral Presentations</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
              Publications & Conference Presentations
            </h2>
            <p className="mt-2 text-base text-slate-600 dark:text-slate-400">
              Featuring 3 published research abstracts in{' '}
              <strong className="text-slate-900 dark:text-white font-semibold">
                The Sri Lanka Journal of Surgery (September 2026, Vol. 44, Supp. S1)
              </strong>
              {' '}for the 55th Annual Academic Sessions of the College of Surgeons of Sri Lanka, alongside 3 oral conference presentations at SICET, iPURSE, and SURS.
            </p>
          </div>

          {/* View Filter Switcher */}
          <div className="flex items-center gap-2 bg-slate-100 dark:bg-slate-900 p-1.5 rounded-xl border border-slate-200 dark:border-slate-800">
            <button
              onClick={() => setActiveTab('all')}
              className={`px-3.5 py-1.5 rounded-lg text-xs font-semibold transition-all cursor-pointer ${
                activeTab === 'all'
                  ? 'bg-emerald-600 text-white shadow-xs'
                  : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
              }`}
            >
              All Outputs (6)
            </button>
            <button
              onClick={() => setActiveTab('papers')}
              className={`px-3.5 py-1.5 rounded-lg text-xs font-semibold transition-all cursor-pointer ${
                activeTab === 'papers'
                  ? 'bg-emerald-600 text-white shadow-xs'
                  : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
              }`}
            >
              Journal Abstracts (3)
            </button>
            <button
              onClick={() => setActiveTab('talks')}
              className={`px-3.5 py-1.5 rounded-lg text-xs font-semibold transition-all cursor-pointer ${
                activeTab === 'talks'
                  ? 'bg-emerald-600 text-white shadow-xs'
                  : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
              }`}
            >
              Oral Presentations (3)
            </button>
          </div>
        </div>

        {/* Empty state when filterMode is starred */}
        {filterMode === 'starred' && displayedPublications.length === 0 && (
          <div className="p-8 text-center rounded-2xl bg-slate-50 dark:bg-slate-900 border border-dashed border-slate-300 dark:border-slate-800 space-y-2 mb-8">
            <p className="text-sm font-semibold text-slate-700 dark:text-slate-300">
              No publications currently starred for review.
            </p>
            <p className="text-xs text-slate-500">
              Star any publication below using the bookmark icon to save it to your review list.
            </p>
          </div>
        )}

        {/* Publications List */}
        {(activeTab === 'all' || activeTab === 'papers') && (
          <div className="space-y-6">
            {/* Official Journal Cover & Issue Spotlight Banner */}
            <div className="p-6 sm:p-8 rounded-3xl bg-gradient-to-br from-slate-900 via-slate-800 to-indigo-950 text-white shadow-xl border border-slate-700/70 relative overflow-hidden">
              <div className="absolute top-0 right-0 -mr-16 -mt-16 w-80 h-80 rounded-full bg-emerald-500/15 blur-3xl pointer-events-none" />
              <div className="absolute bottom-0 left-1/3 -mb-16 w-72 h-72 rounded-full bg-blue-500/15 blur-3xl pointer-events-none" />

              <div className="relative z-10 flex flex-col md:flex-row items-center md:items-start gap-6 sm:gap-8">
                {/* 3D Journal Cover Preview with interactive click */}
                <div className="shrink-0 flex flex-col items-center">
                  <div
                    onClick={() => setIsCoverModalOpen(true)}
                    className="group relative cursor-pointer rounded-xl overflow-hidden shadow-2xl transition-all duration-300 transform hover:-translate-y-1 hover:scale-105 border-2 border-slate-600/80 hover:border-emerald-400/80 bg-slate-950 max-w-[170px] sm:max-w-[190px]"
                    title="Click to inspect official journal cover in high resolution"
                  >
                    <Image
                      src={JOURNAL_COVER_INFO.coverImageUrl}
                      alt="The Sri Lanka Journal of Surgery Official Cover - September 2026 Volume 44 Supplement S1"
                      width={280}
                      height={396}
                      className="w-full h-auto object-cover transition-transform duration-300 group-hover:scale-105"
                      priority
                    />
                    <div className="absolute inset-0 bg-slate-950/60 opacity-0 group-hover:opacity-100 transition-opacity duration-200 flex flex-col items-center justify-center p-3 gap-1 text-center backdrop-blur-xs">
                      <div className="p-2 rounded-full bg-emerald-500/20 text-emerald-300 border border-emerald-400/40 shadow-sm">
                        <Maximize2 className="w-5 h-5" />
                      </div>
                      <span className="text-xs font-bold text-white tracking-wide">
                        Inspect Cover
                      </span>
                      <span className="text-[10px] text-slate-300">
                        Click to enlarge
                      </span>
                    </div>
                  </div>
                  <button
                    onClick={() => setIsCoverModalOpen(true)}
                    className="mt-2.5 inline-flex items-center gap-1.5 text-[11px] font-mono text-emerald-400 hover:text-emerald-300 transition-colors cursor-pointer"
                  >
                    <Maximize2 className="w-3.5 h-3.5" />
                    <span>View Full High-Res</span>
                  </button>
                </div>

                {/* Issue & Congress Information */}
                <div className="flex-1 text-center md:text-left space-y-3">
                  <div className="flex flex-wrap items-center justify-center md:justify-start gap-2">
                    <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-semibold bg-emerald-500/20 text-emerald-300 border border-emerald-500/40">
                      <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
                      <span>Official Journal Issue</span>
                    </span>
                    <span className="font-mono text-xs px-2.5 py-1 rounded-full bg-slate-800/90 text-slate-300 border border-slate-700">
                      ISSN {JOURNAL_COVER_INFO.issn}
                    </span>
                    <span className="font-mono text-xs px-2.5 py-1 rounded-full bg-slate-800/90 text-slate-300 border border-slate-700">
                      {JOURNAL_COVER_INFO.issue}
                    </span>
                  </div>

                  <div>
                    <h3 className="text-xl sm:text-2xl font-black tracking-tight text-white">
                      {JOURNAL_COVER_INFO.journalTitle}
                    </h3>
                    <p className="text-xs sm:text-sm font-medium text-emerald-300/90 mt-0.5">
                      {JOURNAL_COVER_INFO.issue} • {JOURNAL_COVER_INFO.date}
                    </p>
                  </div>

                  <div className="space-y-1.5 text-xs text-slate-300 bg-slate-950/50 p-3.5 rounded-xl border border-slate-800/80">
                    <p className="font-bold text-slate-100 flex items-center justify-center md:justify-start gap-1.5">
                      <Award className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                      <span>{JOURNAL_COVER_INFO.congress}</span>
                    </p>
                    <p className="text-slate-300 leading-relaxed">
                      {JOURNAL_COVER_INFO.congressSessions}
                    </p>
                    <p className="text-slate-400 text-[11px] leading-relaxed">
                      {JOURNAL_COVER_INFO.jointConference}
                    </p>
                    <div className="pt-1.5 flex flex-wrap items-center justify-center md:justify-start gap-x-4 gap-y-1 text-[11px] text-slate-400 font-mono">
                      <span>📍 {JOURNAL_COVER_INFO.location}</span>
                      <span>🗓️ {JOURNAL_COVER_INFO.dates}</span>
                    </div>
                  </div>

                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                    Featuring <strong className="text-emerald-300 font-bold">3 published peer-reviewed research abstracts</strong> authored and contributed by Imesha Rajapaksha in clinical oncology, statistical modeling, and breast cancer outcomes.
                  </p>

                  <div className="pt-1 flex flex-wrap items-center justify-center md:justify-start gap-3">
                    <button
                      onClick={() => setIsCoverModalOpen(true)}
                      className="px-4 py-2 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-bold transition-all flex items-center gap-1.5 shadow-lg shadow-emerald-600/30 cursor-pointer"
                    >
                      <Maximize2 className="w-4 h-4" />
                      <span>Inspect Official Cover</span>
                    </button>
                    <span className="text-xs text-slate-400 self-center">
                      3 Indexed Abstracts Below ↓
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {activeTab === 'all' && (
              <div className="flex items-center gap-2 pt-2 pb-1 text-xs font-mono font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400">
                <BookOpenCheck className="w-4 h-4 text-emerald-600" />
                <span>Journal Abstract Publications (The Sri Lanka Journal of Surgery)</span>
              </div>
            )}

            {displayedPublications.map((pub, idx) => {
              const starred = isHydrated && isStarred(pub.id);
              const isExpanded = !!expandedAbstracts[pub.id];

              return (
                <div
                  key={pub.id}
                  className="p-6 sm:p-8 rounded-2xl bg-slate-50/70 dark:bg-slate-900/70 border border-slate-200 dark:border-slate-800 hover:border-slate-300 dark:hover:border-slate-700 shadow-sm hover:shadow-lg transition-all"
                >
                  {/* Journal & Metadata Header */}
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-4 mb-4 border-b border-slate-200/80 dark:border-slate-800/80">
                    <div className="flex flex-wrap items-center gap-2 text-xs">
                      <span className="font-mono font-bold px-2.5 py-0.5 rounded bg-emerald-500/10 text-emerald-700 dark:text-emerald-400 border border-emerald-500/20">
                        Abstract #{idx + 1} • {pub.impactScore || 'SLJS 2026'}
                      </span>
                      <span className="font-semibold text-slate-800 dark:text-slate-200">
                        {pub.journal}
                      </span>
                      <span className="text-slate-400">•</span>
                      <span className="font-mono text-slate-500 dark:text-slate-400">
                        {pub.issue}
                      </span>
                      <span className="text-slate-400">•</span>
                      <span className="flex items-center gap-1 text-slate-500 font-mono">
                        <Calendar className="w-3.5 h-3.5" />
                        {pub.date}
                      </span>
                    </div>

                    {/* Bookmark Button */}
                    <div className="flex items-center space-x-2 shrink-0">
                      <button
                        onClick={() => handleOpenBibtex(pub)}
                        className="px-2.5 py-1.5 rounded-lg bg-white dark:bg-slate-800 hover:bg-slate-100 dark:hover:bg-slate-700 text-xs font-semibold text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-700 flex items-center gap-1.5 transition-colors cursor-pointer"
                        title="View & copy BibTeX citation"
                      >
                        <Quote className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400" />
                        <span>BibTeX</span>
                      </button>

                      <button
                        onClick={() => toggleStar(pub.id, pub.title)}
                        className={`p-1.5 rounded-lg border transition-all cursor-pointer ${
                          starred
                            ? 'bg-emerald-500/15 border-emerald-500/40 text-emerald-600 dark:text-emerald-400'
                            : 'bg-white dark:bg-slate-800 border-slate-200 dark:border-slate-700 text-slate-400 hover:text-emerald-500'
                        }`}
                        title={starred ? 'Starred for Review' : 'Star publication for review'}
                      >
                        <Bookmark className={`w-4 h-4 ${starred ? 'fill-current' : ''}`} />
                      </button>
                    </div>
                  </div>

                  {/* Title & Cover Thumbnail Flex Area */}
                  <div className="flex flex-col sm:flex-row items-start justify-between gap-4">
                    <div className="flex-1 space-y-2">
                      <h3 className="text-lg sm:text-xl font-bold text-slate-900 dark:text-white leading-snug">
                        {pub.title}
                      </h3>

                      {/* Authors List */}
                      <div className="text-xs sm:text-sm text-slate-600 dark:text-slate-400">
                        <span className="font-semibold text-emerald-700 dark:text-emerald-400">
                          {pub.authors[0]}
                        </span>
                        {pub.authors.length > 1 && (
                          <span>, {pub.authors.slice(1).join(', ')}</span>
                        )}
                      </div>
                    </div>

                    {/* Journal Cover Interactive Thumbnail Badge */}
                    {pub.journalCoverUrl && (
                      <div
                        onClick={() => setIsCoverModalOpen(true)}
                        className="shrink-0 flex items-center gap-3 p-2 rounded-xl bg-white dark:bg-slate-800/90 border border-slate-200 dark:border-slate-700 cursor-pointer hover:border-emerald-500/50 hover:bg-emerald-500/5 dark:hover:bg-emerald-500/10 transition-all group shadow-2xs"
                        title="Click to view full official journal cover"
                      >
                        <div className="w-10 sm:w-12 rounded overflow-hidden shadow-xs border border-slate-300 dark:border-slate-600 group-hover:scale-105 transition-transform bg-slate-900">
                          <Image
                            src={pub.journalCoverUrl}
                            alt="The Sri Lanka Journal of Surgery"
                            width={70}
                            height={98}
                            className="w-full h-auto object-cover"
                          />
                        </div>
                        <div className="text-left pr-1">
                          <span className="inline-flex items-center gap-1 text-[10px] font-mono font-bold uppercase tracking-wider text-emerald-700 dark:text-emerald-400">
                            <CheckCircle2 className="w-3 h-3 text-emerald-500" />
                            SLJS Verified
                          </span>
                          <span className="block text-xs font-bold text-slate-800 dark:text-slate-200 group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors">
                            Vol. 44 (S1)
                          </span>
                          <span className="block text-[10px] text-slate-500 font-mono">
                            ISSN 1391-491X
                          </span>
                        </div>
                        <Maximize2 className="w-3.5 h-3.5 text-slate-400 group-hover:text-emerald-500 ml-1" />
                      </div>
                    )}
                  </div>

                  {/* Abstract Preview / Accordion */}
                  <div className="mt-4 pt-4 border-t border-slate-200/80 dark:border-slate-800/80">
                    <div className="flex items-center justify-between">
                      <button
                        onClick={() => toggleAbstract(pub.id)}
                        className="text-xs font-mono font-bold uppercase tracking-wider text-slate-700 dark:text-slate-300 flex items-center gap-1.5 hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors cursor-pointer"
                      >
                        <span>Scientific Abstract</span>
                        {isExpanded ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                      </button>

                      {pub.doi && (
                        <span className="text-[11px] font-mono text-slate-400">
                          DOI: {pub.doi}
                        </span>
                      )}
                    </div>

                    {isExpanded && (
                      <div className="mt-3 text-xs sm:text-sm text-slate-700 dark:text-slate-300 whitespace-pre-line leading-relaxed bg-white dark:bg-slate-950/60 p-5 rounded-xl border border-slate-200 dark:border-slate-800">
                        {pub.abstract}
                      </div>
                    )}
                  </div>

                  {/* Keywords & Study Type */}
                  <div className="mt-4 pt-3 flex flex-wrap items-center justify-between gap-2">
                    <div className="flex flex-wrap items-center gap-1.5">
                      {pub.keywords.map((kw, i) => (
                        <span
                          key={i}
                          className="text-[10px] font-medium px-2 py-0.5 rounded bg-slate-200/60 dark:bg-slate-800 text-slate-700 dark:text-slate-300"
                        >
                          {kw}
                        </span>
                      ))}
                    </div>

                    <span className="text-[11px] font-semibold text-slate-500 dark:text-slate-400">
                      {pub.studyType}
                    </span>
                  </div>

                </div>
              );
            })}
          </div>
        )}

        {/* Conference Oral Presentations Section */}
        {(activeTab === 'all' || activeTab === 'talks') && (
          <div className={`space-y-6 ${activeTab === 'all' ? 'mt-12 pt-8 border-t border-slate-200 dark:border-slate-800' : ''}`}>
            <div className="flex items-center gap-2 pb-1 text-xs font-mono font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400">
              <Mic className="w-4 h-4 text-emerald-600" />
              <span>Conference Presentations (Oral Presentations)</span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {CONFERENCE_PRESENTATIONS.map((pres, idx) => (
                <div
                  key={pres.id}
                  className="p-6 rounded-2xl bg-slate-50/70 dark:bg-slate-900/70 border border-slate-200 dark:border-slate-800 hover:border-slate-300 dark:hover:border-slate-700 transition-all flex flex-col justify-between"
                >
                  <div className="space-y-3">
                    <div className="flex items-center justify-between gap-2">
                      <span className="text-[11px] font-mono font-bold px-2 py-0.5 rounded bg-emerald-500/10 text-emerald-700 dark:text-emerald-400 border border-emerald-500/20">
                        Oral #{idx + 1} • {pres.type}
                      </span>
                      <span className="text-xs font-mono font-bold text-slate-500">
                        {pres.year}
                      </span>
                    </div>

                    <h4 className="text-base font-bold text-slate-900 dark:text-white leading-snug">
                      &ldquo;{pres.title}&rdquo;
                    </h4>

                    <div className="text-xs font-semibold text-emerald-700 dark:text-emerald-400">
                      {pres.conference}
                    </div>

                    {pres.description && (
                      <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                        {pres.description}
                      </p>
                    )}
                  </div>

                  <div className="pt-4 mt-4 border-t border-slate-200/80 dark:border-slate-800/80 flex items-center justify-between text-[11px] text-slate-500">
                    <span>{pres.trackOrId}</span>
                    <span>{pres.location}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Full-Screen High-Resolution Journal Cover Lightbox Modal */}
        {isCoverModalOpen && (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-slate-950/85 backdrop-blur-md animate-in fade-in duration-200"
            onClick={() => setIsCoverModalOpen(false)}
          >
            <div
              className="relative max-w-4xl w-full max-h-[92vh] overflow-y-auto bg-slate-900 border border-slate-700 rounded-3xl shadow-2xl p-5 sm:p-8 text-white flex flex-col md:flex-row gap-6 sm:gap-8 items-center md:items-start"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close button */}
              <button
                onClick={() => setIsCoverModalOpen(false)}
                className="absolute top-4 right-4 p-2.5 rounded-xl bg-slate-800/90 hover:bg-slate-700 text-slate-300 hover:text-white border border-slate-600 transition-colors cursor-pointer z-20"
                title="Close Viewer"
              >
                <X className="w-5 h-5" />
              </button>

              {/* High-Resolution Cover Image Container */}
              <div className="w-full md:w-1/2 flex justify-center shrink-0">
                <div className="rounded-2xl overflow-hidden shadow-2xl border-2 border-slate-700 max-w-[340px] bg-slate-950">
                  <Image
                    src={JOURNAL_COVER_INFO.coverImageUrl}
                    alt="The Sri Lanka Journal of Surgery Official Issue Cover - September 2026 Volume 44 Issue Supplement S1"
                    width={480}
                    height={680}
                    className="w-full h-auto object-cover"
                    priority
                  />
                </div>
              </div>

              {/* Metadata Details & Indexing */}
              <div className="w-full md:w-1/2 space-y-4 text-left">
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-emerald-500/20 text-emerald-400 border border-emerald-500/30">
                  <ShieldCheck className="w-4 h-4" />
                  <span>Official Peer-Reviewed Journal Publication</span>
                </div>

                <div>
                  <h3 className="text-2xl font-black text-white">
                    {JOURNAL_COVER_INFO.journalTitle}
                  </h3>
                  <p className="text-sm text-emerald-400 font-mono mt-0.5">
                    {JOURNAL_COVER_INFO.issue} • ISSN {JOURNAL_COVER_INFO.issn}
                  </p>
                  <p className="text-xs text-slate-400">
                    Published: {JOURNAL_COVER_INFO.date}
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-slate-800/70 border border-slate-700/80 space-y-2 text-xs">
                  <p className="font-bold text-slate-100 flex items-center gap-1.5">
                    <Award className="w-4 h-4 text-emerald-400 shrink-0" />
                    <span>{JOURNAL_COVER_INFO.congress}</span>
                  </p>
                  <p className="text-slate-300">
                    {JOURNAL_COVER_INFO.congressSessions}
                  </p>
                  <p className="text-slate-400 text-[11px] leading-relaxed">
                    {JOURNAL_COVER_INFO.jointConference}
                  </p>
                  <div className="pt-2 border-t border-slate-700 flex items-center justify-between text-[11px] text-slate-400 font-mono">
                    <span>📍 {JOURNAL_COVER_INFO.location}</span>
                    <span>🗓️ {JOURNAL_COVER_INFO.dates}</span>
                  </div>
                </div>

                <div className="space-y-2">
                  <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-slate-400">
                    Published Abstracts by Imesha in this Issue:
                  </h4>
                  <div className="space-y-2 max-h-56 overflow-y-auto pr-1">
                    {PUBLICATIONS.map((pub, idx) => (
                      <div
                        key={pub.id}
                        className="p-3 rounded-xl bg-slate-950/70 border border-slate-800 text-xs text-slate-300 hover:border-emerald-500/40 transition-colors space-y-1"
                      >
                        <div className="font-semibold text-slate-100">
                          [{idx + 1}] {pub.title}
                        </div>
                        <div className="text-[11px] text-emerald-400/90 font-mono">
                          {pub.issue} • {pub.studyType}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-2 flex items-center justify-end">
                  <button
                    onClick={() => setIsCoverModalOpen(false)}
                    className="px-5 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-bold transition-all cursor-pointer shadow-md shadow-emerald-600/20"
                  >
                    Close Viewer
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}

      </div>
    </section>
  );
}
