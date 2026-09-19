import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';
import { PortfolioProvider } from '@/context/PortfolioContext';
import ProjectModal from '@/components/ProjectModal';
import BibtexModal from '@/components/BibtexModal';
import CVModal from '@/components/CVModal';
import StarredDrawer from '@/components/StarredDrawer';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'Imesha Rajapaksha | Academic Portfolio & Aspiring PhD Candidate (Operations Research, Statistics, Biostatistics)',
  description:
    'Academic Portfolio of Imesha Rajapaksha. Statistics & Operations Research Graduate (Second Class Upper, University of Peradeniya), Temporary Lecturer & Research Assistant. Specializing in Mathematical Programming, Queueing Theory, and Clinical Predictive Modeling.',
  keywords: [
    'Imesha Rajapaksha',
    'Operations Research',
    'Biostatistics',
    'Statistics PhD Candidate',
    'University of Peradeniya',
    'Mixed Integer Linear Programming',
    'Queueing Theory',
    'The Sri Lanka Journal of Surgery',
    'mGPS Prognostic Score'
  ],
  authors: [{ name: 'Imesha Rajapaksha' }]
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
      suppressHydrationWarning
    >
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              try {
                const savedTheme = localStorage.getItem('imesha_theme');
                const theme = savedTheme ? JSON.parse(savedTheme) : 'dark';
                const savedAccent = localStorage.getItem('imesha_accent_theme');
                const accent = savedAccent ? JSON.parse(savedAccent) : 'emerald';
                if (theme === 'dark') {
                  document.documentElement.classList.add('dark');
                  document.documentElement.classList.remove('light');
                } else {
                  document.documentElement.classList.remove('dark');
                  document.documentElement.classList.add('light');
                }
                document.documentElement.setAttribute('data-accent', accent);
              } catch (e) {}
            `,
          }}
        />
      </head>
      <body className="min-h-full flex flex-col bg-slate-50 dark:bg-[#070b14] text-slate-900 dark:text-slate-100 selection:bg-emerald-500/30 selection:text-emerald-600 dark:selection:text-emerald-400 transition-colors duration-200">
        <PortfolioProvider>
          {children}
          <ProjectModal />
          <BibtexModal />
          <CVModal />
          <StarredDrawer />
        </PortfolioProvider>
      </body>
    </html>
  );
}
