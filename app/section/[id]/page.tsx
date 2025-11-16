'use client';

import { useParams, useRouter, notFound } from 'next/navigation';
import EducationSection from '@/components/sections/EducationSection';
import ExperienceSection from '@/components/sections/ExperienceSection';
import ProjectsSection from '@/components/sections/ProjectsSection';
import Honors_AwardsSection from '@/components/sections/Honors_AwardsSection';
import SkillsSection from '@/components/sections/SkillsSection';
import MilitarySection from '@/components/sections/MilitarySection';
import ContactInfoSection from '@/components/sections/ContactInfoSection';
import DevelopmentLogSection from '@/components/sections/DevelopmentLogSection';

// Component map for section routing
const sectionComponentMap = {
  education: EducationSection,
  experience: ExperienceSection,
  skills: SkillsSection,
  projects: ProjectsSection,
  honors: Honors_AwardsSection,
  military: MilitarySection,
  contact: ContactInfoSection,
  devlog: DevelopmentLogSection,
} as const;

type SectionId = keyof typeof sectionComponentMap;

export default function SectionPage() {
  const params = useParams();
  const router = useRouter();

  // Validate params.id type and value
  const sectionId = params.id;
  if (typeof sectionId !== 'string' || !(sectionId in sectionComponentMap)) {
    notFound();
  }

  const handleBack = () => {
    router.push('/');
  };

  // Get the component from the map
  const SectionComponent = sectionComponentMap[sectionId as SectionId];

  return (
    <div className="min-h-screen bg-gradient-to-t from-purple-950 via-violet-950 via-indigo-950 to-blue-950 relative">
      {/* 추가 그라데이션 오버레이 */}
      <div className="absolute inset-0 bg-gradient-to-t from-purple-900/40 via-transparent to-blue-900/30 pointer-events-none"></div>
      <div className="absolute inset-0 bg-gradient-to-r from-violet-950/30 via-transparent to-indigo-950/30 pointer-events-none"></div>
      <div className="relative z-10">
        <SectionComponent onBack={handleBack} />
      </div>
    </div>
  );
}
