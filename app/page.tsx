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
    <div className="relative min-h-screen transition-all duration-500 ease-in-out">
      {/* Navigation Bar */}
      <NavBar activeSection={activeSection} setActiveSection={setActiveSection} />

      {/* SmoothScroll with Sections */}
      <SmoothScroll onSectionChange={handleSectionChange}>
        <div id="intro" className="min-h-screen w-full snap-start bg-black text-white">
          <IntroSection />
        </div>
        <div id="education" className="min-h-screen w-full snap-start bg-black text-white">
          <EducationSection />
        </div>
        <div id="experience" className="min-h-screen w-full snap-start bg-black text-white">
          <ExperienceSection />
        </div>
        <div id="research" className="min-h-screen w-full snap-start bg-black text-white">
          <ResearchInterestSection />
        </div>
        <div id="publication" className="min-h-screen w-full snap-start bg-black text-white">
          <PublicationSection />
        </div>
        <div id="projects" className="min-h-screen w-full snap-start bg-black text-white">
          <ProjectsSection />
        </div>
        <div id="leadership" className="min-h-screen w-full snap-start bg-black text-white">
          <Honors_AwardsSection />
        </div>
        <div id="skills" className="min-h-screen w-full snap-start bg-black text-white">
          <SkillsSection />
        </div>
        <div id="military" className="min-h-screen w-full snap-start bg-black text-white">
          <MilitarySection />
        </div>
        <div id="contact" className="min-h-screen w-full snap-start bg-black text-white">
          <ContactInfoSection />
        </div>
      </SmoothScroll>

      <style jsx global>{`
        .preserve-3d {
          transform-style: preserve-3d;
        }
        .backface-hidden {
          backface-visibility: hidden;
        }
      `}</style>
    </div>
  );
}
