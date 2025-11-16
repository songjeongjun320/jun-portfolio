'use client';

import { useParams, useRouter } from 'next/navigation';
import EducationSection from '@/components/sections/EducationSection';
import ExperienceSection from '@/components/sections/ExperienceSection';
import ProjectsSection from '@/components/sections/ProjectsSection';
import Honors_AwardsSection from '@/components/sections/Honors_AwardsSection';
import SkillsSection from '@/components/sections/SkillsSection';
import MilitarySection from '@/components/sections/MilitarySection';
import ContactInfoSection from '@/components/sections/ContactInfoSection';
import DevelopmentLogSection from '@/components/sections/DevelopmentLogSection';
import { useEffect } from 'react';

// Valid section IDs
const VALID_SECTIONS = [
  'education',
  'experience',
  'skills',
  'projects',
  'honors',
  'military',
  'contact',
  'devlog',
];

export default function SectionPage() {
  const params = useParams();
  const router = useRouter();
  const sectionId = params.id as string;

  // Redirect to home if invalid section
  useEffect(() => {
    if (!VALID_SECTIONS.includes(sectionId)) {
      router.push('/');
    }
  }, [sectionId, router]);

  const handleBack = () => {
    router.push('/');
  };

  const renderSection = () => {
    switch (sectionId) {
      case 'education':
        return <EducationSection onBack={handleBack} />;
      case 'experience':
        return <ExperienceSection onBack={handleBack} />;
      case 'skills':
        return <SkillsSection onBack={handleBack} />;
      case 'projects':
        return <ProjectsSection onBack={handleBack} />;
      case 'honors':
        return <Honors_AwardsSection onBack={handleBack} />;
      case 'military':
        return <MilitarySection onBack={handleBack} />;
      case 'contact':
        return <ContactInfoSection onBack={handleBack} />;
      case 'devlog':
        return <DevelopmentLogSection onBack={handleBack} />;
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-t from-purple-950 via-violet-950 via-indigo-950 to-blue-950 relative">
      {/* 추가 그라데이션 오버레이 */}
      <div className="absolute inset-0 bg-gradient-to-t from-purple-900/40 via-transparent to-blue-900/30 pointer-events-none"></div>
      <div className="absolute inset-0 bg-gradient-to-r from-violet-950/30 via-transparent to-indigo-950/30 pointer-events-none"></div>
      <div className="relative z-10">{renderSection()}</div>
    </div>
  );
}
