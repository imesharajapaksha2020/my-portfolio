import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import ProfessorDashboard from '@/components/ProfessorDashboard';
import ResearchPillars from '@/components/ResearchPillars';
import ExperienceSection from '@/components/ExperienceSection';
import ProjectsSection from '@/components/ProjectsSection';
import PublicationsSection from '@/components/PublicationsSection';
import SkillsMatrix from '@/components/SkillsMatrix';
import AdvisorMatch from '@/components/AdvisorMatch';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Navigation Header */}
      <Navbar />

      {/* Main Content Sections */}
      <main className="flex-grow">
        {/* 1. Hero Section */}
        <HeroSection />

        {/* 2. Interactive Professor Review & Engagement Hub */}
        <ProfessorDashboard />

        {/* 3. Academic & Research Profile (The Hook) */}
        <ResearchPillars />

        {/* 4. Research & Teaching Experience */}
        <ExperienceSection />

        {/* 5. Selected Quantitative Research Projects */}
        <ProjectsSection />

        {/* 6. Publications in The Sri Lanka Journal of Surgery (Sep 2026) */}
        <PublicationsSection />

        {/* 7. Categorized Technical Skills & Coursework */}
        <SkillsMatrix />

        {/* 8. Prospective PhD Advisor Alignment */}
        <AdvisorMatch />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
