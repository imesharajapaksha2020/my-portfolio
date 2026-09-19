'use client';

import React, { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import { usePortfolio } from '@/context/PortfolioContext';
import {
  FileText,
  Bookmark,
  Sun,
  Moon,
  Menu,
  X,
  GraduationCap,
  Palette,
  Check
} from 'lucide-react';

export default function Navbar() {
  const {
    starredIds,
    theme,
    toggleTheme,
    accentTheme,
    setAccentTheme,
    setIsCVModalOpen,
    setIsStarredDrawerOpen,
    isHydrated
  } = usePortfolio();

  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState<string>('');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [paletteMenuOpen, setPaletteMenuOpen] = useState(false);
  const paletteMenuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const sectionIds = [
      'research-pillars',
      'experience',
      'projects',
      'publications',
      'skills',
      'advisor-fit'
    ];

    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      const scrollPosition = window.scrollY + 100;

      // When scrolled near bottom of page, highlight last section
      const isAtBottom =
        window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 70;
      if (isAtBottom) {
        setActiveSection('advisor-fit');
        return;
      }

      // If in hero section at top of page
      const firstSection = document.getElementById(sectionIds[0]);
      if (firstSection && window.scrollY + 120 < firstSection.offsetTop) {
        setActiveSection('');
        return;
      }

      // Find current active section
      let current = '';
      for (let i = sectionIds.length - 1; i >= 0; i--) {
        const el = document.getElementById(sectionIds[i]);
        if (el && scrollPosition >= el.offsetTop - 30) {
          current = sectionIds[i];
          break;
        }
      }

      setActiveSection(current);
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const targetId = href.replace('#', '');
    const elem = document.getElementById(targetId);
    if (elem) {
      setActiveSection(targetId);
      const navbarOffset = 64;
      const elementPosition = elem.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - navbarOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
    setMobileMenuOpen(false);
  };

  // Close palette dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (paletteMenuRef.current && !paletteMenuRef.current.contains(event.target as Node)) {
        setPaletteMenuOpen(false);
      }
    };
    if (paletteMenuOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [paletteMenuOpen]);

  const navLinks = [
    { name: 'Research', href: '#research-pillars' },
    { name: 'Experience', href: '#experience' },
    { name: 'Projects', href: '#projects' },
    { name: 'Publications', href: '#publications' },
    { name: 'Skills', href: '#skills' },
    { name: 'Advisor Fit', href: '#advisor-fit' }
  ];

  const getActiveTabClasses = (isActive: boolean) => {
    if (!isActive) {
      return 'text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100/80 dark:hover:bg-slate-800/60';
    }

    if (accentTheme === 'ocean') {
      return 'text-sky-700 dark:text-sky-300 bg-sky-500/10 dark:bg-sky-500/20 border-sky-500/35 font-bold shadow-xs';
    }
    if (accentTheme === 'violet') {
      return 'text-violet-700 dark:text-violet-300 bg-violet-500/10 dark:bg-violet-500/20 border-violet-500/35 font-bold shadow-xs';
    }
    return 'text-emerald-700 dark:text-emerald-300 bg-emerald-500/10 dark:bg-emerald-500/20 border-emerald-500/35 font-bold shadow-xs';
  };

  const getActiveIndicatorColor = () => {
    if (accentTheme === 'ocean') return 'bg-sky-500';
    if (accentTheme === 'violet') return 'bg-violet-500';
    return 'bg-emerald-500';
  };

  const palettes = [
    {
      id: 'emerald' as const,
      name: 'Operations Research',
      tag: 'Emerald',
      color: 'bg-emerald-500',
      border: 'border-emerald-500'
    },
    {
      id: 'ocean' as const,
      name: 'Biostatistics',
      tag: 'Ocean Sapphire',
      color: 'bg-sky-500',
      border: 'border-sky-500'
    },
    {
      id: 'violet' as const,
      name: 'Pure Mathematics',
      tag: 'Royal Amethyst',
      color: 'bg-violet-500',
      border: 'border-violet-500'
    }
  ];

  return (
    <header
      className={`sticky top-0 z-40 transition-all duration-300 ${
        scrolled
          ? 'bg-white/95 dark:bg-[#070b14]/95 backdrop-blur-md shadow-md dark:shadow-2xl py-2 border-b border-slate-200/80 dark:border-slate-800/80'
          : 'bg-white/90 dark:bg-[#070b14]/90 backdrop-blur-md py-2.5 sm:py-3.5 border-b border-slate-200/50 dark:border-slate-800/50'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="flex items-center justify-between gap-2 sm:gap-4 w-full">
          
          {/* Brand / Academic Identity */}
          <a href="#" className="flex items-center space-x-2.5 sm:space-x-3 group shrink-0">
            <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl overflow-hidden border border-emerald-500/40 shadow-md shadow-emerald-500/20 group-hover:scale-105 transition-transform shrink-0 relative bg-emerald-700">
              <Image
                src="/imesha-portrait.jpg"
                alt="Imesha Rajapaksha"
                width={40}
                height={40}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="flex flex-col">
              <span className="font-bold text-sm sm:text-base tracking-tight text-slate-900 dark:text-white whitespace-nowrap">
                Imesha Rajapaksha
              </span>
              <p className="text-[11px] sm:text-xs text-slate-500 dark:text-slate-400 font-medium hidden md:block whitespace-nowrap">
                Operations Research & Biostatistics
              </p>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center space-x-1 xl:space-x-2 text-xs xl:text-sm font-medium shrink-0">
            {navLinks.map((link) => {
              const targetId = link.href.replace('#', '');
              const isActive = activeSection === targetId;

              return (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className={`px-2.5 xl:px-3 py-1.5 rounded-xl border transition-all duration-200 whitespace-nowrap relative cursor-pointer ${
                    isActive ? getActiveTabClasses(true) : 'border-transparent ' + getActiveTabClasses(false)
                  }`}
                  aria-current={isActive ? 'page' : undefined}
                >
                  <span>{link.name}</span>
                  {isActive && (
                    <span
                      className={`absolute bottom-0 left-2.5 right-2.5 xl:left-3 xl:right-3 h-0.5 ${getActiveIndicatorColor()} rounded-full transition-all duration-300`}
                    ></span>
                  )}
                </a>
              );
            })}
          </nav>

          {/* Action Bar (Theme, Palette, Bookmark, Download CV) */}
          <div className="flex items-center space-x-1.5 sm:space-x-2 shrink-0">
            {/* Academic Palette Customizer Dropdown - icon only */}
            <div className="relative hidden sm:block" ref={paletteMenuRef}>
              <button
                id="palette-toggle-btn"
                onClick={() => setPaletteMenuOpen(!paletteMenuOpen)}
                className="p-2 rounded-xl text-slate-600 dark:text-slate-300 bg-slate-100/80 dark:bg-slate-800/80 hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors border border-slate-200 dark:border-slate-700/80 flex items-center justify-center relative cursor-pointer"
                title={`Academic Theme Palette (${accentTheme})`}
                aria-label="Theme Palette"
              >
                <Palette className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
              </button>

              {paletteMenuOpen && (
                <div className="absolute right-0 mt-2 w-56 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-xl p-2 z-50 animate-in fade-in zoom-in-95 duration-150">
                  <div className="px-3 py-2 border-b border-slate-100 dark:border-slate-800">
                    <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-slate-400">
                      Academic Palette
                    </span>
                  </div>
                  <div className="space-y-1 pt-1">
                    {palettes.map((p) => (
                      <button
                        key={p.id}
                        onClick={() => {
                          setAccentTheme(p.id);
                          setPaletteMenuOpen(false);
                        }}
                        className={`w-full px-3 py-2 rounded-xl text-xs font-semibold flex items-center justify-between transition-colors ${
                          accentTheme === p.id
                            ? 'bg-slate-100 dark:bg-slate-800 text-slate-900 dark:text-white'
                            : 'text-slate-600 dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-slate-800/60'
                        }`}
                      >
                        <div className="flex items-center gap-2">
                          <span className={`w-3 h-3 rounded-full ${p.color}`}></span>
                          <span>{p.tag}</span>
                        </div>
                        {accentTheme === p.id && (
                          <Check className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400" />
                        )}
                      </button>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Dark / Light Mode Switcher */}
            <button
              id="theme-toggle-btn"
              onClick={toggleTheme}
              className="p-2 rounded-xl text-slate-600 dark:text-slate-300 bg-slate-100/80 dark:bg-slate-800/80 hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors border border-slate-200 dark:border-slate-700/80 cursor-pointer"
              title={isHydrated && theme === 'dark' ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
              aria-label="Toggle Dark/Light Theme"
            >
              {isHydrated && theme === 'dark' ? (
                <Sun className="w-4 h-4 text-amber-400" />
              ) : (
                <Moon className="w-4 h-4 text-indigo-600" />
              )}
            </button>

            {/* Starred Review Items Counter - icon with absolute badge */}
            <button
              id="navbar-starred-btn"
              onClick={() => setIsStarredDrawerOpen(true)}
              className="relative p-2 rounded-xl text-slate-600 dark:text-slate-300 bg-slate-100/80 dark:bg-slate-800/80 hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors border border-slate-200 dark:border-slate-700/80 flex items-center justify-center text-xs font-semibold cursor-pointer"
              title="View your starred research items for review"
            >
              <Bookmark className="w-4 h-4 text-emerald-600 dark:text-emerald-400 fill-emerald-500/20" />
              {isHydrated && starredIds.length > 0 && (
                <span className="absolute -top-1.5 -right-1.5 bg-emerald-500 text-white text-[10px] font-bold px-1.5 py-0.2 rounded-full min-w-[18px] text-center shadow-xs">
                  {starredIds.length}
                </span>
              )}
            </button>

            {/* Academic CV Download Button */}
            <button
              id="navbar-cv-download-btn"
              onClick={() => setIsCVModalOpen(true)}
              className="inline-flex items-center space-x-1.5 sm:space-x-2 px-3 sm:px-3.5 py-2 rounded-xl bg-emerald-600 hover:bg-emerald-700 active:scale-95 text-white text-xs sm:text-sm font-semibold shadow-md shadow-emerald-600/25 transition-all whitespace-nowrap cursor-pointer"
            >
              <FileText className="w-4 h-4 shrink-0" />
              <span className="hidden sm:inline">Academic CV</span>
              <span className="sm:hidden">CV</span>
            </button>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 rounded-xl text-slate-600 dark:text-slate-300 bg-slate-100/80 dark:bg-slate-800/80 hover:bg-slate-200 dark:hover:bg-slate-700 border border-slate-200 dark:border-slate-700/80 cursor-pointer"
              aria-label="Toggle Mobile Menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <div className="lg:hidden mt-3 pt-3 pb-3 border-t border-slate-200 dark:border-slate-800 space-y-2 text-sm font-medium bg-white/95 dark:bg-slate-900/95 rounded-2xl p-4 shadow-xl">
            {navLinks.map((link) => {
              const targetId = link.href.replace('#', '');
              const isActive = activeSection === targetId;

              return (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className={`flex items-center justify-between px-3.5 py-2.5 rounded-xl transition-all font-semibold ${
                    isActive
                      ? `${getActiveTabClasses(true)} border`
                      : 'text-slate-700 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800/80'
                  }`}
                >
                  <span>{link.name}</span>
                  {isActive && (
                    <span className={`w-2 h-2 rounded-full ${getActiveIndicatorColor()}`}></span>
                  )}
                </a>
              );
            })}

            {/* Mobile Theme Palette Selector */}
            <div className="pt-3 border-t border-slate-200 dark:border-slate-800 space-y-2">
              <div className="text-xs font-mono font-bold uppercase tracking-wider text-slate-400 px-1">
                Select Academic Palette:
              </div>
              <div className="grid grid-cols-3 gap-2">
                {palettes.map((p) => (
                  <button
                    key={p.id}
                    onClick={() => setAccentTheme(p.id)}
                    className={`px-2.5 py-1.5 rounded-lg text-xs font-semibold flex items-center justify-center gap-1.5 border transition-all ${
                      accentTheme === p.id
                        ? 'border-emerald-500 bg-emerald-500/10 text-emerald-700 dark:text-emerald-400'
                        : 'border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-400'
                    }`}
                  >
                    <span className={`w-2 h-2 rounded-full ${p.color}`}></span>
                    <span className="truncate">{p.id}</span>
                  </button>
                ))}
              </div>
            </div>

            <div className="pt-2 flex items-center justify-between px-1 text-xs text-slate-500">
              <span className="flex items-center gap-1">
                <GraduationCap className="w-3.5 h-3.5" /> University of Peradeniya
              </span>
              <span className="text-emerald-600 font-semibold">2nd Class Upper</span>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
