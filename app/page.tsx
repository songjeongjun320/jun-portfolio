'use client';

import { useState } from 'react';
import SmoothScroll from '@/components/SmoothScroll';
import IntroSection from '@/components/sections/IntroSection';
import EducationSection from '@/components/sections/EducationSection';
import ExperienceSection from '@/components/sections/ExperienceSection';
import ResearchInterestSection from '@/components/sections/ResearchInterestSection';
import PublicationSection from '@/components/sections/PublicationSection';
import ProjectsSection from '@/components/sections/ProjectsSection';
import Honors_AwardsSection from '@/components/sections/Honors_AwardsSection';
import SkillsSection from '@/components/sections/SkillsSection';
import MilitarySection from '@/components/sections/MilitarySection';
import ContactInfoSection from '@/components/sections/ContactInfoSection';
import NavBar from '@/components/NavBar';

export default function Portfolio() {
  const [activeSection, setActiveSection] = useState('intro');

  // Handle section change to update active section
  const handleSectionChange = (sectionId: string) => {
    setActiveSection(sectionId);
  };

  return (
    <div className="relative min-h-screen transition-all duration-500 ease-in-out bg-black">
      {/* Background overlay with gradient */}
      <div className="fixed inset-0 bg-gradient-to-br from-gray-900 via-black to-gray-800 opacity-95 z-0"></div>
      
      {/* Subtle animated background pattern */}
      <div className="fixed inset-0 z-0">
        <div className="absolute inset-0 bg-[url('/img/BasicBackground.png')] bg-cover bg-fixed opacity-10"></div>
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/10 via-transparent to-teal-900/10"></div>
      </div>

      {/* Navigation Bar */}
      <div className="relative z-40">
        <NavBar
          activeSection={activeSection}
          setActiveSection={setActiveSection}
        />
      </div>

      {/* SmoothScroll with Sections */}
      <div className="relative z-10">
        <SmoothScroll onSectionChange={handleSectionChange}>
          <div
            id="intro"
            className="min-h-screen w-full snap-start relative"
          >
            <IntroSection />
          </div>
          <div
            id="education"
            className="min-h-screen w-full snap-start relative"
          >
            <EducationSection />
          </div>
          <div
            id="experience"
            className="min-h-screen w-full snap-start relative"
          >
            <ExperienceSection />
          </div>
          <div
            id="research"
            className="min-h-screen w-full snap-start relative"
          >
            <ResearchInterestSection />
          </div>
          <div
            id="publication"
            className="min-h-screen w-full snap-start relative"
          >
            <PublicationSection />
          </div>
          <div
            id="projects"
            className="min-h-screen w-full snap-start relative"
          >
            <ProjectsSection />
          </div>
          <div
            id="honors"
            className="min-h-screen w-full snap-start relative"
          >
            <Honors_AwardsSection />
          </div>
          <div
            id="skills"
            className="min-h-screen w-full snap-start relative"
          >
            <SkillsSection />
          </div>
          <div
            id="military"
            className="min-h-screen w-full snap-start relative"
          >
            <MilitarySection />
          </div>
          <div
            id="contact"
            className="min-h-screen w-full snap-start relative"
          >
            <ContactInfoSection />
          </div>
        </SmoothScroll>
      </div>

      {/* Footer */}
      <footer className="relative z-30 bg-gradient-to-r from-gray-900/90 to-black/90 backdrop-blur-sm text-white py-8 border-t border-gray-700/30">
        <div className="container mx-auto px-6 text-center">
          <p className="text-lg font-medium mb-2 text-transparent bg-gradient-to-r from-teal-400 to-blue-400 bg-clip-text">
            2025. Designed by Jun
          </p>
          <p className="text-base italic text-gray-300 leading-relaxed">
            "You can not connect the dots looking forward, you can only connect
            them looking backward."
          </p>
        </div>
      </footer>

      <style jsx global>{`
        .preserve-3d {
          transform-style: preserve-3d;
        }
        .backface-hidden {
          backface-visibility: hidden;
        }
        
        /* Smooth scrolling and transitions */
        html {
          scroll-behavior: smooth;
        }
        
        /* Custom scrollbar */
        ::-webkit-scrollbar {
          width: 8px;
        }
        
        ::-webkit-scrollbar-track {
          background: rgba(0, 0, 0, 0.1);
        }
        
        ::-webkit-scrollbar-thumb {
          background: linear-gradient(to bottom, #4fd1c5, #4299e1);
          border-radius: 4px;
        }
        
        ::-webkit-scrollbar-thumb:hover {
          background: linear-gradient(to bottom, #38b2ac, #3182ce);
        }
        
        /* Fade animation for sections */
        .fade-enter {
          opacity: 0;
          transform: translateY(20px);
        }
        
        .fade-enter-active {
          opacity: 1;
          transform: translateY(0);
          transition: opacity 300ms, transform 300ms;
        }
        
        .fade-exit {
          opacity: 1;
          transform: translateY(0);
        }
        
        .fade-exit-active {
          opacity: 0;
          transform: translateY(-20px);
          transition: opacity 300ms, transform 300ms;
        }
      `}</style>
    </div>
  );
}
