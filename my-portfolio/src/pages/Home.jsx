import React from 'react';
import HeroSection from '@/components/portfolio/HeroSection';
import ExperienceSection from '@/components/portfolio/ExperienceSection';
import ExpertiseSection from '@/components/portfolio/ExpertiseSection';
import ProjectsSection from '@/components/portfolio/ProjectSection';
import ContactSection from '@/components/portfolio/ContactSection';
import AvailabilitySection from '@/components/portfolio/AvailabilitySection';

export default function Home() {
  return (
    <div className="min-h-screen bg-black">
      <HeroSection />
      <ExperienceSection />
      <ExpertiseSection />
      <ProjectsSection />
      <ContactSection />
      <AvailabilitySection />
      
      {/* Footer */}
      <footer className="py-8 bg-black border-t border-zinc-900 text-center relative">
        <p className="text-zinc-500 text-sm font-light">
          © {new Date().getFullYear()} Siddharth Kenia. All rights reserved.
        </p>
      </footer>
    </div>
  );
}
