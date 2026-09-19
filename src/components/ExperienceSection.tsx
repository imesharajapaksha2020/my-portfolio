'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { usePortfolio } from '@/context/PortfolioContext';
import { EXPERIENCE_ITEMS } from '@/data/portfolioData';
import {
  Briefcase,
  GraduationCap,
  Calendar,
  Bookmark,
  CheckCircle2,
  Building2,
  Award,
  BookOpen,
  Activity,
  Users,
  Maximize2,
  X
} from 'lucide-react';

export default function ExperienceSection() {
  const { toggleStar, isStarred, filterMode, isHydrated } = usePortfolio();
  const [selectedCategory, setSelectedCategory] = useState<'all' | 'research' | 'teaching' | 'education'>('all');
  const [previewImage, setPreviewImage] = useState<{ url: string; title: string; subtitle: string } | null>(null);

  const baseItems =
    filterMode === 'starred' && isHydrated
      ? EXPERIENCE_ITEMS.filter((item) => isStarred(item.id))
      : EXPERIENCE_ITEMS;

  const displayedItems = baseItems.filter((item) => {
    if (selectedCategory === 'all') return true;
    if (selectedCategory === 'research') return item.type === 'Research Appointment';
    if (selectedCategory === 'teaching') return item.type === 'Academic Teaching';
    if (selectedCategory === 'education') {
      return item.type === 'Education' || item.type === 'Professional Experience' || item.type === 'Outreach & Leadership';
    }
    return true;
  });

  return (
    <section id="experience" className="scroll-mt-16 md:scroll-mt-20 pt-7 pb-16 md:pt-9 md:pb-20 bg-white dark:bg-slate-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Title */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider bg-emerald-500/10 text-emerald-700 dark:text-emerald-400 border border-emerald-500/20 mb-3">
              <Briefcase className="w-3.5 h-3.5" />
              <span>Academic Appointments & Research Roles</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
              Research & Teaching Experience
            </h2>
            <p className="mt-2 text-base text-slate-600 dark:text-slate-400">
              Clinical oncology and perioperative data science at University of Kelaniya and University of Peradeniya, combined with undergraduate medical education and epidemiological surveillance.
            </p>
          </div>

          {/* Quick Category Filter Pills */}
          <div className="flex flex-wrap items-center gap-2 bg-slate-100 dark:bg-slate-900 p-1.5 rounded-xl border border-slate-200 dark:border-slate-800">
            <button
              onClick={() => setSelectedCategory('all')}
              className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all cursor-pointer ${
                selectedCategory === 'all'
                  ? 'bg-emerald-600 text-white shadow-xs'
                  : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
              }`}
            >
              All ({baseItems.length})
            </button>
            <button
              onClick={() => setSelectedCategory('research')}
              className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all cursor-pointer ${
                selectedCategory === 'research'
                  ? 'bg-cyan-600 text-white shadow-xs'
                  : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
              }`}
            >
              Research (2)
            </button>
            <button
              onClick={() => setSelectedCategory('teaching')}
              className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all cursor-pointer ${
                selectedCategory === 'teaching'
                  ? 'bg-emerald-600 text-white shadow-xs'
                  : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
              }`}
            >
              Teaching (1)
            </button>
            <button
              onClick={() => setSelectedCategory('education')}
              className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all cursor-pointer ${
                selectedCategory === 'education'
                  ? 'bg-indigo-600 text-white shadow-xs'
                  : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
              }`}
            >
              Education & Outreach (3)
            </button>
          </div>
        </div>

        {/* Filter State Warning if none starred */}
        {filterMode === 'starred' && displayedItems.length === 0 && (
          <div className="p-6 rounded-2xl bg-amber-500/10 border border-amber-500/30 text-amber-800 dark:text-amber-300 text-sm mb-8 flex items-center justify-between">
            <span>No experience items currently starred. Click the bookmark icon on any position to add it to your review list.</span>
          </div>
        )}

        {/* Timeline List */}
        <div className="relative border-l-2 border-slate-200 dark:border-slate-800 ml-4 sm:ml-6 space-y-10">
          {displayedItems.map((item) => {
            const starred = isHydrated && isStarred(item.id);
            const isTeaching = item.type === 'Academic Teaching';
            const isEducation = item.type === 'Education';
            const isResearch = item.type === 'Research Appointment';
            const isProfessional = item.type === 'Professional Experience';

            return (
              <div key={item.id} className="relative pl-6 sm:pl-8 group">
                
                {/* Timeline node icon */}
                <div
                  className={`absolute -left-4 top-1.5 w-8 h-8 rounded-full border-4 border-white dark:border-slate-950 flex items-center justify-center text-white shadow-md transition-transform group-hover:scale-110 ${
                    isTeaching
                      ? 'bg-emerald-600'
                      : isEducation
                      ? 'bg-indigo-600'
                      : isResearch
                      ? 'bg-cyan-600'
                      : isProfessional
                      ? 'bg-amber-600'
                      : 'bg-purple-600'
                  }`}
                >
                  {isEducation ? (
                    <GraduationCap className="w-3.5 h-3.5" />
                  ) : isTeaching ? (
                    <BookOpen className="w-3.5 h-3.5" />
                  ) : isResearch ? (
                    <Activity className="w-3.5 h-3.5" />
                  ) : isProfessional ? (
                    <Briefcase className="w-3.5 h-3.5" />
                  ) : (
                    <Users className="w-3.5 h-3.5" />
                  )}
                </div>

                {/* Experience Card */}
                <div className="p-6 sm:p-8 rounded-2xl bg-slate-50/70 dark:bg-slate-900/70 border border-slate-200 dark:border-slate-800/80 hover:border-slate-300 dark:hover:border-slate-700 transition-all shadow-sm">
                  
                  {/* Top Bar: Title, Department, Star action */}
                  <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4 mb-4">
                    <div className="space-y-1">
                      <div className="flex flex-wrap items-center gap-2">
                        <h3 className="text-xl font-bold text-slate-900 dark:text-white">
                          {item.title}
                        </h3>
                        <span
                          className={`text-xs font-semibold px-2.5 py-0.5 rounded-full ${
                            isTeaching
                              ? 'bg-emerald-500/10 text-emerald-700 dark:text-emerald-300 border border-emerald-500/20'
                              : isResearch
                              ? 'bg-cyan-500/10 text-cyan-700 dark:text-cyan-300 border border-cyan-500/20'
                              : isEducation
                              ? 'bg-indigo-500/10 text-indigo-700 dark:text-indigo-300 border border-indigo-500/20'
                              : 'bg-slate-200 dark:bg-slate-800 text-slate-700 dark:text-slate-300'
                          }`}
                        >
                          {item.type}
                        </span>
                      </div>

                      <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-xs sm:text-sm text-slate-600 dark:text-slate-400 font-medium">
                        <span className="flex items-center gap-1.5 text-slate-800 dark:text-slate-200 font-semibold">
                          <Building2 className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
                          {item.institution}
                        </span>
                        <span>•</span>
                        <span>{item.department}</span>
                      </div>
                    </div>

                    {/* Meta Period & Bookmark Button */}
                    <div className="flex items-center space-x-3 shrink-0">
                      <div className="flex items-center gap-1 text-xs font-mono font-medium text-slate-500 dark:text-slate-400 bg-white dark:bg-slate-800/90 px-2.5 py-1 rounded-lg border border-slate-200 dark:border-slate-700">
                        <Calendar className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400" />
                        <span>{item.period}</span>
                      </div>

                      <button
                        onClick={() => toggleStar(item.id, item.title)}
                        className={`p-2 rounded-lg border transition-all cursor-pointer ${
                          starred
                            ? 'bg-emerald-500/15 border-emerald-500/40 text-emerald-600 dark:text-emerald-400'
                            : 'bg-white dark:bg-slate-800 border-slate-200 dark:border-slate-700 text-slate-400 hover:text-emerald-500'
                        }`}
                        title={starred ? 'Starred for Review' : 'Star position for review'}
                      >
                        <Bookmark className={`w-4 h-4 ${starred ? 'fill-current' : ''}`} />
                      </button>
                    </div>
                  </div>

                  {/* Summary Text */}
                  <p className="text-sm text-slate-700 dark:text-slate-300 leading-relaxed mb-4">
                    {item.summary}
                  </p>

                  {/* Responsibilities */}
                  <div className="space-y-2 mb-5">
                    <div className="text-xs font-mono font-bold uppercase tracking-wider text-slate-400 dark:text-slate-500">
                      Key Responsibilities & Scope:
                    </div>
                    <ul className="grid grid-cols-1 md:grid-cols-2 gap-2 text-xs sm:text-sm text-slate-600 dark:text-slate-300">
                      {item.responsibilities.map((resp, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <CheckCircle2 className="w-4 h-4 text-emerald-500 mt-0.5 shrink-0" />
                          <span>{resp}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Key Accomplishments & Technologies */}
                  <div className="pt-4 border-t border-slate-200 dark:border-slate-800/80 flex flex-col md:flex-row md:items-center justify-between gap-4">
                    
                    <div className="flex flex-wrap items-center gap-1.5">
                      <span className="text-xs font-mono text-slate-400 mr-1">Tools & Focus:</span>
                      {item.technologiesUsed.map((tech, i) => (
                        <span
                          key={i}
                          className="text-[11px] font-semibold px-2 py-0.5 rounded bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-700"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    {item.keyAccomplishments.length > 0 && (
                      <div className="text-xs text-emerald-700 dark:text-emerald-400 font-medium flex items-center gap-1.5">
                        <Award className="w-4 h-4 text-emerald-500 shrink-0" />
                        <span>{item.keyAccomplishments[0]}</span>
                      </div>
                    )}
                  </div>

                  {/* Official Temporary Lecturer Appointment Letter Callout */}
                  {item.id === 'exp-temp-lecturer' && item.imageUrl && (
                    <div className="mt-4 p-3 rounded-xl bg-emerald-500/10 dark:bg-emerald-500/15 border border-emerald-500/25 flex items-center justify-between gap-3">
                      <div className="flex items-center gap-3">
                        <div
                          onClick={() =>
                            setPreviewImage({
                              url: item.imageUrl!,
                              title: 'Appointment of Temporary Lecturer',
                              subtitle:
                                "Dean's Office, Faculty of Medicine, University of Peradeniya • Academic Establishments Division (Ref: AE/17)"
                            })
                          }
                          className="w-12 h-12 rounded-lg overflow-hidden border border-emerald-500/40 shrink-0 relative bg-white dark:bg-slate-900 shadow-xs cursor-pointer group flex items-center justify-center p-0.5"
                          title="Click to view official Appointment Letter"
                        >
                          <Image
                            src={item.imageUrl}
                            alt="Appointment of Temporary Lecturer, University of Peradeniya"
                            width={48}
                            height={48}
                            className="w-full h-full object-cover object-top group-hover:scale-110 transition-transform"
                          />
                          <div className="absolute inset-0 bg-slate-950/30 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                            <Maximize2 className="w-3 h-3 text-white" />
                          </div>
                        </div>
                        <div>
                          <div className="text-xs font-bold text-slate-900 dark:text-white flex items-center gap-1.5">
                            <BookOpen className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400" />
                            <span>Official Appointment Letter • University of Peradeniya</span>
                          </div>
                          <p className="text-[11px] text-emerald-800 dark:text-emerald-300">
                            Dean&apos;s Office, Faculty of Medicine • Academic Establishments Division (Ref: AE/17)
                          </p>
                        </div>
                      </div>

                      <button
                        onClick={() =>
                          setPreviewImage({
                            url: item.imageUrl!,
                            title: 'Appointment of Temporary Lecturer',
                            subtitle:
                              "Dean's Office, Faculty of Medicine, University of Peradeniya • Academic Establishments Division (Ref: AE/17)"
                          })
                        }
                        className="hidden sm:inline-flex items-center gap-1 text-[11px] font-semibold text-emerald-700 dark:text-emerald-300 hover:text-emerald-900 dark:hover:text-emerald-100 cursor-pointer shrink-0"
                      >
                        <Maximize2 className="w-3.5 h-3.5" />
                        <span>View Letter</span>
                      </button>
                    </div>
                  )}

                  {/* Official Professorial Surgical Unit Callout */}
                  {item.id === 'exp-ra-surgery-kelaniya' && item.imageUrl && (
                    <div className="mt-4 p-3 rounded-xl bg-cyan-500/10 dark:bg-cyan-500/15 border border-cyan-500/25 flex items-center justify-between gap-3">
                      <div className="flex items-center gap-3">
                        <div
                          onClick={() =>
                            setPreviewImage({
                              url: item.imageUrl!,
                              title: 'Professorial Surgical Unit',
                              subtitle:
                                'Department of Surgery, Faculty of Medicine, University of Kelaniya'
                            })
                          }
                          className="w-12 h-12 rounded-lg overflow-hidden border border-cyan-500/40 shrink-0 relative bg-white dark:bg-slate-900 shadow-xs cursor-pointer group flex items-center justify-center p-0.5"
                          title="Click to view Professorial Surgical Unit insignia"
                        >
                          <Image
                            src={item.imageUrl}
                            alt="Professorial Surgical Unit, Faculty of Medicine, University of Kelaniya"
                            width={48}
                            height={48}
                            className="w-full h-full object-contain group-hover:scale-110 transition-transform"
                          />
                          <div className="absolute inset-0 bg-slate-950/30 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                            <Maximize2 className="w-3 h-3 text-white" />
                          </div>
                        </div>
                        <div>
                          <div className="text-xs font-bold text-slate-900 dark:text-white flex items-center gap-1.5">
                            <Activity className="w-3.5 h-3.5 text-cyan-600 dark:text-cyan-400" />
                            <span>Professorial Surgical Unit • University of Kelaniya</span>
                          </div>
                          <p className="text-[11px] text-cyan-800 dark:text-cyan-300">
                            Faculty of Medicine • Clinical Oncology Research & Cancer Registry Analysis
                          </p>
                        </div>
                      </div>

                      <button
                        onClick={() =>
                          setPreviewImage({
                            url: item.imageUrl!,
                            title: 'Professorial Surgical Unit',
                            subtitle:
                              'Department of Surgery, Faculty of Medicine, University of Kelaniya'
                          })
                        }
                        className="hidden sm:inline-flex items-center gap-1 text-[11px] font-semibold text-cyan-700 dark:text-cyan-300 hover:text-cyan-900 dark:hover:text-cyan-100 cursor-pointer shrink-0"
                      >
                        <Maximize2 className="w-3.5 h-3.5" />
                        <span>View Image</span>
                      </button>
                    </div>
                  )}

                  {/* Official WSAP Traineeship Awarding Ceremony Callout */}
                  {item.id === 'exp-intern-wsap' && item.imageUrl && (
                    <div className="mt-4 p-3 rounded-xl bg-amber-500/10 dark:bg-amber-500/15 border border-amber-500/25 flex items-center justify-between gap-3">
                      <div className="flex items-center gap-3">
                        <div
                          onClick={() =>
                            setPreviewImage({
                              url: item.imageUrl!,
                              title: 'Traineeship Awarding Ceremony – WSAP (NZ) Phase II',
                              subtitle:
                                'Career Guidance Unit, University of Peradeniya • Conferred October 2024'
                            })
                          }
                          className="w-12 h-12 rounded-lg overflow-hidden border border-amber-500/40 shrink-0 relative bg-slate-900 shadow-xs cursor-pointer group"
                          title="Click to view full awarding ceremony photograph"
                        >
                          <Image
                            src={item.imageUrl}
                            alt="WSAP Traineeship Awarding Ceremony"
                            width={48}
                            height={48}
                            className="w-full h-full object-cover group-hover:scale-110 transition-transform"
                          />
                          <div className="absolute inset-0 bg-slate-950/30 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                            <Maximize2 className="w-3 h-3 text-white" />
                          </div>
                        </div>
                        <div>
                          <div className="text-xs font-bold text-slate-900 dark:text-white flex items-center gap-1.5">
                            <Award className="w-3.5 h-3.5 text-amber-600 dark:text-amber-400" />
                            <span>Traineeship Awarding Ceremony – WSAP (NZ) Phase II</span>
                          </div>
                          <p className="text-[11px] text-amber-800 dark:text-amber-300">
                            Career Guidance Unit, University of Peradeniya • Conferred October 2024
                          </p>
                        </div>
                      </div>

                      <button
                        onClick={() =>
                          setPreviewImage({
                            url: item.imageUrl!,
                            title: 'Traineeship Awarding Ceremony – WSAP (NZ) Phase II',
                            subtitle:
                              'Career Guidance Unit, University of Peradeniya • Conferred October 2024'
                          })
                        }
                        className="hidden sm:inline-flex items-center gap-1 text-[11px] font-semibold text-amber-700 dark:text-amber-300 hover:text-amber-900 dark:hover:text-amber-100 cursor-pointer shrink-0"
                      >
                        <Maximize2 className="w-3.5 h-3.5" />
                        <span>View Photo</span>
                      </button>
                    </div>
                  )}

                  {/* Official Convocation Credential Callout */}
                  {isEducation && (
                    <div className="mt-4 p-3 rounded-xl bg-emerald-500/10 dark:bg-emerald-500/15 border border-emerald-500/25 flex items-center justify-between gap-3">
                      <div className="flex items-center gap-3">
                        <div
                          onClick={() =>
                            setPreviewImage({
                              url: '/imesha-convocation.jpg',
                              title: 'General Convocation 2025 – University of Peradeniya',
                              subtitle:
                                'Conferment of B.Sc. (Hons) in Statistics and Operations Research (Second Class Upper Division, GPA: 3.4/4.00)'
                            })
                          }
                          className="w-12 h-12 rounded-lg overflow-hidden border border-emerald-500/40 shrink-0 relative bg-slate-900 shadow-xs cursor-pointer group"
                          title="Click to view convocation portrait"
                        >
                          <Image
                            src="/imesha-convocation.jpg"
                            alt="Convocation 2025"
                            width={48}
                            height={48}
                            className="w-full h-full object-cover object-top group-hover:scale-110 transition-transform"
                          />
                          <div className="absolute inset-0 bg-slate-950/30 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                            <Maximize2 className="w-3 h-3 text-white" />
                          </div>
                        </div>
                        <div>
                          <div className="text-xs font-bold text-slate-900 dark:text-white flex items-center gap-1.5">
                            <Award className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400" />
                            <span>General Convocation 2025 • University of Peradeniya</span>
                          </div>
                          <p className="text-[11px] text-emerald-700 dark:text-emerald-400">
                            B.Sc. (Hons) Degree scroll conferred with Second Class Upper Division (GPA: 3.4/4.00)
                          </p>
                        </div>
                      </div>

                      <button
                        onClick={() =>
                          setPreviewImage({
                            url: '/imesha-convocation.jpg',
                            title: 'General Convocation 2025 – University of Peradeniya',
                            subtitle:
                              'Conferment of B.Sc. (Hons) in Statistics and Operations Research (Second Class Upper Division, GPA: 3.4/4.00)'
                          })
                        }
                        className="hidden sm:inline-flex items-center gap-1 text-[11px] font-semibold text-emerald-700 dark:text-emerald-300 hover:text-emerald-900 dark:hover:text-emerald-100 cursor-pointer shrink-0"
                      >
                        <Maximize2 className="w-3.5 h-3.5" />
                        <span>View Photo</span>
                      </button>
                    </div>
                  )}

                </div>
              </div>
            );
          })}
        </div>

        {/* Image Lightbox Modal for Experience & Credentials */}
        {previewImage && (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-slate-950/85 backdrop-blur-md animate-in fade-in duration-200"
            onClick={() => setPreviewImage(null)}
          >
            <div
              className="relative max-w-3xl w-full max-h-[92vh] overflow-y-auto bg-slate-900 border border-slate-700 rounded-3xl shadow-2xl p-5 sm:p-7 text-white space-y-4"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex items-center justify-between pb-3 border-b border-slate-700/80">
                <div>
                  <h3 className="text-lg font-bold text-white">
                    {previewImage.title}
                  </h3>
                  <p className="text-xs text-slate-400 mt-0.5">
                    {previewImage.subtitle}
                  </p>
                </div>
                <button
                  onClick={() => setPreviewImage(null)}
                  className="p-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white border border-slate-600 transition-colors cursor-pointer"
                  title="Close"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              <div className="rounded-2xl overflow-hidden border border-slate-700 bg-slate-950 flex items-center justify-center shadow-2xl">
                <Image
                  src={previewImage.url}
                  alt={previewImage.title}
                  width={1024}
                  height={768}
                  className="w-full h-auto max-h-[68vh] object-contain"
                  priority
                />
              </div>

              <div className="flex items-center justify-end pt-2">
                <button
                  onClick={() => setPreviewImage(null)}
                  className="px-5 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-bold transition-all cursor-pointer shadow-md shadow-emerald-600/20"
                >
                  Close Viewer
                </button>
              </div>
            </div>
          </div>
        )}

      </div>
    </section>
  );
}
