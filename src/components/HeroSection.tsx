'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { usePortfolio } from '@/context/PortfolioContext';
import { PERSONAL_INFO } from '@/data/portfolioData';
import {
  Mail,
  GraduationCap,
  ExternalLink,
  Copy,
  Check,
  FileText,
  ArrowDown,
  Sparkles,
  Award,
  BookOpen,
  Send,
  Maximize2,
  X,
  CheckCircle2,
  Phone
} from 'lucide-react';
import { GithubIcon, LinkedinIcon } from '@/components/Icons';

export default function HeroSection() {
  const { setIsCVModalOpen, setIsContactModalOpen, logInteraction } = usePortfolio();
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);
  const [isPhotoModalOpen, setIsPhotoModalOpen] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(PERSONAL_INFO.email);
    setCopiedEmail(true);
    logInteraction('Copied Contact Email', PERSONAL_INFO.email, 'Copy');
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  const handleCopyPhone = () => {
    navigator.clipboard.writeText(PERSONAL_INFO.phone);
    setCopiedPhone(true);
    logInteraction('Copied Contact Phone', PERSONAL_INFO.phone, 'Phone');
    setTimeout(() => setCopiedPhone(false), 2500);
  };

  const handleOpenConvocationPhoto = () => {
    setIsPhotoModalOpen(true);
    logInteraction('Viewed Convocation Photograph', 'General Convocation 2025 Photo', 'Award');
  };

  return (
    <section className="relative pt-8 pb-16 md:pt-14 md:pb-24 overflow-hidden">
      {/* Decorative gradient background glows */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-gradient-to-tr from-emerald-500/10 via-cyan-500/10 to-indigo-500/10 rounded-full blur-3xl pointer-events-none -z-10"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Main Hero Column (8 cols) */}
          <div className="lg:col-span-8 space-y-6">
            
            {/* Academic Candidacy Callout */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-100 dark:bg-slate-800/90 border border-slate-200 dark:border-slate-700/80 text-xs font-semibold text-slate-800 dark:text-slate-200 shadow-sm">
              <span className="flex h-2 w-2 rounded-full bg-emerald-500 animate-ping"></span>
              <span className="text-emerald-700 dark:text-emerald-400 font-bold">PROSPECTIVE PhD CANDIDATE</span>
              <span className="text-slate-400">|</span>
              <span>Operations Research • Statistics • Biostatistics</span>
            </div>

            {/* Candidate Identity with Academic Portrait */}
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-5 pt-1">
              <div className="relative group shrink-0">
                <div
                  onClick={handleOpenConvocationPhoto}
                  className="w-24 h-24 sm:w-28 sm:h-28 rounded-2xl overflow-hidden border-2 border-emerald-500/50 dark:border-emerald-400/40 shadow-xl shadow-emerald-600/15 group-hover:scale-105 transition-all duration-300 relative bg-slate-100 dark:bg-slate-800 cursor-pointer"
                  title="Click to view full graduation convocation photo"
                >
                  <Image
                    src={PERSONAL_INFO.photoUrl}
                    alt={PERSONAL_INFO.name}
                    width={112}
                    height={112}
                    className="w-full h-full object-cover"
                    priority
                  />
                  <div className="absolute inset-0 bg-emerald-950/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <Maximize2 className="w-5 h-5 text-white drop-shadow-md" />
                  </div>
                </div>
                <button
                  onClick={handleOpenConvocationPhoto}
                  className="absolute -bottom-2 -right-1 px-2 py-0.5 rounded-md bg-emerald-600 hover:bg-emerald-700 text-white text-[10px] font-bold shadow-md flex items-center gap-1 transition-colors cursor-pointer"
                  title="Verified Convocation 2025 Graduate"
                >
                  <Award className="w-3 h-3" />
                  <span>2025 Grad</span>
                </button>
              </div>

              <div className="space-y-2">
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-900 dark:text-white">
                  {PERSONAL_INFO.name}
                </h1>
                <p className="text-xl sm:text-2xl font-semibold text-emerald-700 dark:text-emerald-400">
                  {PERSONAL_INFO.title}
                </p>
                <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-sm font-medium text-slate-600 dark:text-slate-400 pt-1">
                  <span className="flex items-center gap-1.5 text-slate-700 dark:text-slate-300">
                    <GraduationCap className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
                    {PERSONAL_INFO.degree}
                  </span>
                  <span>•</span>
                  <span className="font-semibold text-indigo-700 dark:text-indigo-400">
                    {PERSONAL_INFO.honors}
                  </span>
                  <span>•</span>
                  <span>{PERSONAL_INFO.university}</span>
                </div>
              </div>
            </div>

            {/* Quick Bio */}
            <p className="text-base sm:text-lg text-slate-700 dark:text-slate-300 leading-relaxed font-normal max-w-3xl">
              {PERSONAL_INFO.bio}
            </p>

            {/* Action Buttons: Download CV & Contact / Research Inquiry */}
            <div className="flex flex-wrap items-center gap-3 pt-2">
              <button
                id="hero-cv-btn"
                onClick={() => {
                  setIsCVModalOpen(true);
                  logInteraction('Opened CV Modal', 'Hero Action Button', 'FileText');
                }}
                className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-emerald-600 hover:bg-emerald-700 active:scale-95 text-white font-semibold text-sm shadow-lg shadow-emerald-600/25 transition-all"
              >
                <FileText className="w-4 h-4" />
                <span>View & Download CV (PDF)</span>
              </button>

              <button
                id="hero-inquire-btn"
                onClick={() => {
                  setIsContactModalOpen(true);
                  logInteraction('Opened Faculty Inquiry Modal', 'Hero Action Button', 'Send');
                }}
                className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-slate-200 dark:bg-slate-800 hover:bg-slate-300 dark:hover:bg-slate-700 text-slate-800 dark:text-white font-semibold text-sm border border-slate-300 dark:border-slate-700 transition-all"
              >
                <Send className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
                <span>Faculty / Advisor Inquiry</span>
              </button>

              <a
                href="#research-pillars"
                className="inline-flex items-center gap-1.5 px-4 py-3 rounded-xl text-slate-600 dark:text-slate-400 hover:text-emerald-600 dark:hover:text-emerald-400 text-sm font-medium transition-colors"
              >
                <span>Explore Research Hook</span>
                <ArrowDown className="w-4 h-4" />
              </a>
            </div>

            {/* Quick Links: Icons for LinkedIn, GitHub, Google Scholar, ResearchGate, Email */}
            <div className="pt-4 border-t border-slate-200 dark:border-slate-800/80 flex flex-wrap items-center gap-4">
              <span className="text-xs uppercase tracking-wider font-bold text-slate-400 dark:text-slate-500">
                Academic & Social Profiles:
              </span>

              <div className="flex items-center space-x-2">
                {/* Email with copy tooltip */}
                <button
                  onClick={handleCopyEmail}
                  className="p-2.5 rounded-lg bg-slate-100 dark:bg-slate-800/80 hover:bg-emerald-500/10 hover:text-emerald-600 dark:hover:text-emerald-400 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-700 transition-all flex items-center gap-1.5 text-xs font-semibold cursor-pointer"
                  title="Click to copy primary email"
                >
                  <Mail className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
                  <span>{PERSONAL_INFO.email}</span>
                  {copiedEmail ? <Check className="w-3.5 h-3.5 text-emerald-500" /> : <Copy className="w-3.5 h-3.5 text-slate-400" />}
                </button>

                {/* Phone with copy tooltip */}
                <button
                  onClick={handleCopyPhone}
                  className="p-2.5 rounded-lg bg-slate-100 dark:bg-slate-800/80 hover:bg-emerald-500/10 hover:text-emerald-600 dark:hover:text-emerald-400 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-700 transition-all flex items-center gap-1.5 text-xs font-semibold cursor-pointer"
                  title="Click to copy phone number"
                >
                  <Phone className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
                  <span>{PERSONAL_INFO.phone}</span>
                  {copiedPhone ? <Check className="w-3.5 h-3.5 text-emerald-500" /> : <Copy className="w-3.5 h-3.5 text-slate-400" />}
                </button>

                {/* LinkedIn */}
                <a
                  href={PERSONAL_INFO.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 rounded-lg bg-slate-100 dark:bg-slate-800/80 hover:bg-blue-500/10 hover:text-blue-600 dark:hover:text-blue-400 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-700 transition-all"
                  title="LinkedIn Profile"
                >
                  <LinkedinIcon className="w-4 h-4" />
                </a>

                {/* GitHub */}
                <a
                  href={PERSONAL_INFO.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 rounded-lg bg-slate-100 dark:bg-slate-800/80 hover:bg-slate-300 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-700 transition-all"
                  title="GitHub Repositories"
                >
                  <GithubIcon className="w-4 h-4" />
                </a>

                {/* Google Scholar */}
                <a
                  href={PERSONAL_INFO.googleScholar}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-2.5 py-2 rounded-lg bg-slate-100 dark:bg-slate-800/80 hover:bg-emerald-500/10 hover:text-emerald-600 dark:hover:text-emerald-400 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-700 transition-all text-xs font-semibold flex items-center gap-1.5"
                  title="Google Scholar Profile"
                >
                  <GraduationCap className="w-4 h-4 text-emerald-600" />
                  <span>Scholar</span>
                </a>

                {/* ResearchGate */}
                <a
                  href={PERSONAL_INFO.researchGate}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-2.5 py-2 rounded-lg bg-slate-100 dark:bg-slate-800/80 hover:bg-teal-500/10 hover:text-teal-600 dark:hover:text-teal-400 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-700 transition-all text-xs font-semibold flex items-center gap-1.5"
                  title="ResearchGate Profile"
                >
                  <BookOpen className="w-4 h-4 text-teal-600" />
                  <span>RG</span>
                </a>
              </div>
            </div>

          </div>

          {/* Right Column: Professor Quick Scan Card (4 cols) */}
          <div className="lg:col-span-4">
            <div className="relative rounded-2xl p-6 bg-gradient-to-b from-white via-slate-50 to-slate-100/90 dark:from-slate-900 dark:via-slate-900/95 dark:to-slate-950 border border-slate-200 dark:border-slate-800 shadow-xl dark:shadow-2xl text-slate-900 dark:text-white transition-all">
              
              {/* Card Header Badge */}
              <div className="flex items-center justify-between pb-3 mb-4 border-b border-slate-200 dark:border-slate-800">
                <span className="text-xs font-bold uppercase tracking-wider text-emerald-700 dark:text-emerald-400 flex items-center gap-1.5">
                  <Award className="w-4 h-4" />
                  PhD Application Snapshot
                </span>
                <span className="text-[11px] font-mono px-2 py-0.5 rounded bg-emerald-500/10 dark:bg-emerald-500/20 text-emerald-700 dark:text-emerald-300 border border-emerald-500/20 dark:border-emerald-500/30">
                  Ready to Review
                </span>
              </div>

              {/* Convocation Photo Showcase Banner */}
              <div
                onClick={handleOpenConvocationPhoto}
                className="relative mb-5 rounded-xl overflow-hidden border border-slate-200 dark:border-slate-700 group cursor-pointer shadow-md bg-slate-100 dark:bg-slate-800"
                title="Click to view full Convocation 2025 ceremony photograph"
              >
                <div className="relative h-44 w-full">
                  <Image
                    src={PERSONAL_INFO.convocationPhotoUrl}
                    alt="General Convocation 2025 - University of Peradeniya"
                    fill
                    className="object-cover object-top group-hover:scale-105 transition-transform duration-500"
                    sizes="(max-width: 768px) 100vw, 400px"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/30 to-transparent flex items-end p-3 justify-between">
                  <div className="text-white">
                    <div className="text-xs font-bold leading-tight flex items-center gap-1.5">
                      <GraduationCap className="w-3.5 h-3.5 text-emerald-400" />
                      <span>General Convocation 2025</span>
                    </div>
                    <p className="text-[10px] text-slate-300">University of Peradeniya, Sri Lanka</p>
                  </div>
                  <span className="px-2 py-1 rounded bg-white/20 backdrop-blur-md text-[10px] text-white font-semibold flex items-center gap-1 group-hover:bg-emerald-600 transition-colors">
                    <Maximize2 className="w-3 h-3" />
                    <span>Zoom</span>
                  </span>
                </div>
              </div>

              {/* High-yield metric grid */}
              <div className="grid grid-cols-2 gap-3 mb-6">
                {PERSONAL_INFO.keyStats.map((stat, idx) => (
                  <div
                    key={idx}
                    className="p-3 rounded-xl bg-slate-100/80 dark:bg-slate-800/70 border border-slate-200 dark:border-slate-700/60 hover:border-emerald-500/40 transition-colors"
                  >
                    <div className="text-2xl font-black text-slate-900 dark:text-white tracking-tight">
                      {stat.value}
                    </div>
                    <div className="text-xs font-semibold text-slate-600 dark:text-slate-300 mt-0.5">
                      {stat.label}
                    </div>
                    <div className="text-[10px] text-emerald-600 dark:text-emerald-400 font-mono mt-0.5">
                      {stat.sub}
                    </div>
                  </div>
                ))}
              </div>

              {/* Research Core Focus bullet points */}
              <div className="space-y-2.5 text-xs text-slate-700 dark:text-slate-300">
                <div className="font-semibold text-slate-800 dark:text-slate-200 text-xs uppercase tracking-wider">
                  Primary Research Pillars:
                </div>
                <div className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 mt-1.5 shrink-0"></div>
                  <div>
                    <strong className="text-slate-900 dark:text-white">Operations Research:</strong> Mixed-Integer Programming, Queueing Preemption, Discrete-Event Simulation.
                  </div>
                </div>
                <div className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-cyan-500 mt-1.5 shrink-0"></div>
                  <div>
                    <strong className="text-slate-900 dark:text-white">Biostatistics:</strong> Multivariable Logistic & Cox PH Models, Biomarker (mGPS) Risk Stratification.
                  </div>
                </div>
              </div>

              {/* University Distinction Footer */}
              <div className="mt-6 pt-4 border-t border-slate-200 dark:border-slate-800 flex items-center justify-between text-[11px] text-slate-500 dark:text-slate-400">
                <span>Faculty of Science & Medicine</span>
                <span className="text-emerald-600 dark:text-emerald-400 font-semibold">Univ. of Peradeniya</span>
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* Convocation Photo Lightbox Modal */}
      {isPhotoModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-slate-950/85 backdrop-blur-md animate-in fade-in duration-200">
          <div className="relative w-full max-w-3xl rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-2xl p-4 sm:p-6 space-y-4 max-h-[95vh] overflow-y-auto">
            {/* Modal Header */}
            <div className="flex items-center justify-between pb-3 border-b border-slate-200 dark:border-slate-800">
              <div className="flex items-center gap-2">
                <Award className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />
                <div>
                  <h3 className="text-base font-bold text-slate-900 dark:text-white">
                    General Convocation 2025 Ceremony
                  </h3>
                  <p className="text-xs text-slate-500 dark:text-slate-400">
                    University of Peradeniya, Sri Lanka
                  </p>
                </div>
              </div>
              <button
                onClick={() => setIsPhotoModalOpen(false)}
                className="p-1.5 rounded-lg text-slate-400 hover:text-slate-900 dark:hover:text-white transition-colors border border-slate-200 dark:border-slate-700"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* High-Resolution Convocation Image */}
            <div className="relative w-full rounded-xl overflow-hidden border border-slate-200 dark:border-slate-800 shadow-md bg-black">
              <Image
                src={PERSONAL_INFO.convocationPhotoUrl}
                alt="Imesha Rajapaksha Convocation 2025 University of Peradeniya"
                width={1024}
                height={854}
                className="w-full h-auto object-contain max-h-[65vh]"
                priority
              />
            </div>

            {/* Credential Details Bar */}
            <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700/80 flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs">
              <div className="space-y-0.5">
                <div className="font-bold text-slate-900 dark:text-white flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
                  <span>B.Sc. (Honours) in Statistics & Operations Research</span>
                </div>
                <p className="text-slate-600 dark:text-slate-400">
                  Second Class Upper Division Honours • Faculty of Science, University of Peradeniya
                </p>
              </div>

              <button
                onClick={() => {
                  setIsPhotoModalOpen(false);
                  setIsCVModalOpen(true);
                }}
                className="px-4 py-2 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold shrink-0 transition-colors shadow-xs"
              >
                View Academic CV
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
