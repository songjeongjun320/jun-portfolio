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
      <NavBar
        activeSection={activeSection}
        setActiveSection={setActiveSection}
      />

      {/* SmoothScroll with Sections */}
      <SmoothScroll onSectionChange={handleSectionChange}>
        <div
          id="intro"
          className="min-h-screen w-full snap-start bg-black text-white bg-cover bg-fixed"
          style={{ backgroundImage: 'url(/img/BasicBackground.png)' }}
        >
          <IntroSection />
        </div>
        <div
          id="education"
          className="min-h-screen w-full snap-start bg-black text-white bg-cover bg-fixed"
          style={{ backgroundImage: 'url(/img/BasicBackground.png)' }}
        >
          <EducationSection />
        </div>
        <div
          id="experience"
          className="min-h-screen w-full snap-start bg-black text-white bg-cover bg-fixed"
          style={{ backgroundImage: 'url(/img/BasicBackground.png)' }}
        >
          <ExperienceSection />
        </div>
        <div
          id="research"
          className="min-h-screen w-full snap-start bg-black text-white bg-cover bg-fixed"
          style={{ backgroundImage: 'url(/img/BasicBackground.png)' }}
        >
          <ResearchInterestSection />
        </div>
        <div
          id="publication"
          className="min-h-screen w-full snap-start bg-black text-white bg-cover bg-fixed"
          style={{ backgroundImage: 'url(/img/BasicBackground.png)' }}
        >
          <PublicationSection />
        </div>
        <div
          id="projects"
          className="min-h-screen w-full snap-start bg-black text-white bg-cover bg-fixed"
          style={{ backgroundImage: 'url(/img/BasicBackground.png)' }}
        >
          <ProjectsSection />
        </div>
        <div
          id="honors"
          className="min-h-screen w-full snap-start bg-black text-white bg-cover bg-fixed"
          style={{ backgroundImage: 'url(/img/BasicBackground.png)' }}
        >
          <Honors_AwardsSection />
        </div>
        <div
          id="skills"
          className="min-h-screen w-full snap-start bg-black text-white bg-cover bg-fixed"
          style={{ backgroundImage: 'url(/img/BasicBackground.png)' }}
        >
          <SkillsSection />
        </div>
        <div
          id="military"
          className="min-h-screen w-full snap-start bg-black text-white bg-cover bg-fixed"
          style={{ backgroundImage: 'url(/img/BasicBackground.png)' }}
        >
          <MilitarySection />
        </div>
        <div
          id="contact"
          className="min-h-screen w-full snap-start bg-black text-white bg-cover bg-fixed"
          style={{ backgroundImage: 'url(/img/BasicBackground.png)' }}
        >
          <ContactInfoSection />
        </div>
      </SmoothScroll>

      {/* Footer */}
      <footer className="absolute bottom-0 w-full bg-black text-white py-4 text-center">
        <p className="text-sm mb-2">2025. Designed by Jun</p>
        <p className="text-sm italic">
          "You can not connect the dots looking forward, you can only connect
          them looking backward."
        </p>
      </footer>

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
