'use client';

import { useState } from 'react';
import SmoothScroll from '@/components/SmoothScroll';
import { sections } from '@/data/sections';
import IntroSection from '@/components/sections/IntroSection';
import ProjectsSection from '@/components/sections/ProjectsSection';
import PublicationSection from '@/components/sections/PublicationSection';
import MilitarySection from '@/components/sections/MilitarySection';
import SkillsSection from '@/components/sections/SkillsSection';
import ResearchSection from '@/components/sections/ResearchSection';
import ExperienceSection from '@/components/sections/ExperienceSection';
import DefaultSection from '@/components/sections/DefaultSection';
import { SkillsContent, MilitaryService, Research, Experience } from '@/types';

export default function Portfolio() {
  const [activeSection, setActiveSection] = useState('intro');

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="relative min-h-screen transition-all duration-500 ease-in-out">
      {/* Navigation Bar */}
      <div className="fixed right-8 top-1/2 -translate-y-1/2 z-50 bg-black/30 rounded-lg">
        <div className="flex flex-col">
          {sections.map((section) => (
            <button
              key={section.id}
              onClick={() => scrollToSection(section.id)}
              className={`group flex items-center justify-end py-2 px-4 transition-all duration-300 ${
                activeSection === section.id
                  ? 'bg-white/20'
                  : 'hover:bg-white/10'
              }`}
              aria-label={`Navigate to ${section.title}`}
            >
              <span className="text-white text-base mr-2">{section.title}</span>
              <span
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  activeSection === section.id
                    ? 'bg-white scale-125'
                    : 'bg-white/50 group-hover:bg-white/75'
                }`}
              />
            </button>
          ))}
        </div>
      </div>
      {/* Sections */}
      <SmoothScroll sections={sections} onSectionChange={setActiveSection}>
        {sections.map((section) => (
          <section
            key={section.id}
            id={section.id}
            className="min-h-screen w-full snap-start bg-black text-white"
          >
            {section.id === 'intro' &&
              section.content &&
              !Array.isArray(section.content) &&
              'name' in section.content &&
              'title' in section.content &&
              'description' in section.content &&
              'details' in section.content && (
                <IntroSection content={section.content} />
              )}
            {section.id === 'projects' && <ProjectsSection />}
            {section.id === 'publication' &&
              Array.isArray(section.content) &&
              section.content.every((item) => typeof item === 'string') && (
                <PublicationSection content={section.content as string[]} />
              )}
            {section.id === 'military' &&
              Array.isArray(section.content) &&
              section.content.every((item) => typeof item === 'object') && (
                <MilitarySection
                  content={section.content as MilitaryService[]}
                />
              )}
            {section.id === 'skills' &&
              section.content &&
              'languages' in section.content &&
              'frameworks' in section.content &&
              'tools' in section.content &&
              'skills' in section.content && (
                <SkillsSection content={section.content as SkillsContent} />
              )}
            {section.id === 'research' &&
              Array.isArray(section.content) &&
              section.content.every((item) => typeof item === 'object') && (
                <ResearchSection content={section.content as Research[]} />
              )}
            {section.id === 'experience' &&
              Array.isArray(section.content) &&
              section.content.every((item) => typeof item === 'object') && (
                <ExperienceSection content={section.content as Experience[]} />
              )}
            {![
              'intro',
              'projects',
              'publication',
              'military',
              'skills',
              'research',
              'experience',
            ].includes(section.id) &&
              Array.isArray(section.content) &&
              section.content.every((item) => typeof item === 'string') && (
                <DefaultSection
                  title={section.title}
                  content={section.content as string[]}
                />
              )}
          </section>
        ))}
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
