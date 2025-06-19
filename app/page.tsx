'use client';

import { useState } from 'react';
import { FaGraduationCap, FaBriefcase, FaCode, FaProjectDiagram, FaTrophy, FaEnvelope, FaMedal, FaArrowLeft, FaQuoteLeft, FaGithub, FaLinkedin } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';
import { SiGmail, SiNextdotjs, SiSupabase, SiN8N, SiPython } from 'react-icons/si';
import IntroSection from '@/components/sections/IntroSection';
import EducationSection from '@/components/sections/EducationSection';
import ExperienceSection from '@/components/sections/ExperienceSection';
import ProjectsSection from '@/components/sections/ProjectsSection';
import Honors_AwardsSection from '@/components/sections/Honors_AwardsSection';
import SkillsSection from '@/components/sections/SkillsSection';
import MilitarySection from '@/components/sections/MilitarySection';
import ContactInfoSection from '@/components/sections/ContactInfoSection';
import Image from 'next/image';

export default function Portfolio() {
  const [currentView, setCurrentView] = useState('dashboard');
  
  // 공통 스타일 정의
  const imageContainerStyle = "flex items-center justify-center w-full";
  const cardContainerStyle = "flex flex-col items-center text-center h-full justify-center";
  const standardImageSize = {
    container: { height: 'clamp(140px, 14vw, 220px)' },
    image: { 
      width: 'clamp(140px, 14vw, 220px)', 
      height: 'clamp(140px, 10vw, 220px)', 
      objectFit: 'contain' as const,
      borderRadius: '2rem'
    }
  };
  const largeImageSize = {
    container: { height: 'clamp(120px, 12vw, 220px)' },
    image: { 
      width: 'clamp(200px, 28vw, 480px)', 
      height: 'clamp(120px, 10vw, 220px)', 
      objectFit: 'contain' as const,
      borderRadius: '2rem'
    }
  };

  const renderDetailView = () => {
    const handleBack = () => setCurrentView('dashboard');
    
    switch (currentView) {
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
      default:
        return null;
    }
  };

  if (currentView !== 'dashboard') {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-sky-50">
        {renderDetailView()}
      </div>
    );
  }

  return (
    <div className="h-screen bg-gradient-to-br from-[#f7f7f7] via-white to-[#e7f0fd] p-4">
      {/* Grid Layout - 4x3 Grid */}
      <div className="h-full grid grid-cols-4 grid-rows-3 gap-6 w-full mx-auto">
        {/* Row 1 */}
        {/* Education Card */}
        <div
          onClick={() => setCurrentView('education')}
          className="cursor-pointer bg-gradient-to-br from-[#f0f4ff] via-white to-[#e6efff] rounded-4xl p-10 shadow-2xl hover:shadow-2xl transition-all duration-300 hover:scale-[1.04] border-2 border-[#1877F2]/20 backdrop-blur-sm flex flex-col items-center justify-center"
        >
          <div className={`${cardContainerStyle} space-y-1`}>
            <div className={imageContainerStyle} style={standardImageSize.container}>
              <Image src="/img/ASU_LOGO.png" alt="ASU Logo" width={0} height={0} sizes="100vw" style={standardImageSize.image} className="rounded-4xl" />
            </div>
            <div>
              <h3 className="text-[clamp(0.9rem,1.8vw,1.6rem)] font-extrabold text-[#1877F2] mb-2">Arizona State University</h3>
              <p className="text-[clamp(0.875rem,1.5vw,1.125rem)] text-gray-600">B.S. Computer Science • GPA: 3.77/4.0</p>
            </div>
          </div>
        </div>

        {/* Projects Card - Top Center */}
        <div
          onClick={() => setCurrentView('projects')}
          className="cursor-pointer bg-gradient-to-br from-[#f0f4ff] via-white to-[#e6efff] rounded-4xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-[1.03] border border-[#1877F2]/20 backdrop-blur-sm flex flex-col items-center justify-center col-start-2 row-start-1"
        >
          <div className="flex flex-col items-center text-center space-y-4 h-full justify-center">
            <div className="bg-white/90 rounded-4xl p-4 shadow-md">
              <FaProjectDiagram className="text-[clamp(1.5rem,3vw,3rem)] text-[#1877F2]" />
            </div>
            <div>
              <h3 className="text-[clamp(1rem,2vw,1.6rem)] font-extrabold text-[#1877F2] mb-2">Projects</h3>
              <p className="text-[clamp(1rem,1.8vw,1.125rem)] font-bold text-gray-800 mb-1">CarePilot AI Assistant</p>
              <p className="text-[clamp(0.875rem,1.4vw,1rem)] text-gray-600">HackAgent 2025 Winner • 7+ Projects</p>
            </div>
          </div>
        </div>

        {/* Honors Card - Top Right */}
        <div
          onClick={() => setCurrentView('honors')}
          className="cursor-pointer bg-gradient-to-br from-[#f0f4ff] via-white to-[#e6efff] rounded-4xl p-10 shadow-2xl hover:shadow-2xl transition-all duration-300 hover:scale-[1.04] border-2 border-[#1877F2]/20 backdrop-blur-sm flex flex-col items-center justify-center col-start-3 row-start-1"
        >
                                <div className={`${cardContainerStyle} space-y-1`}>
            <div className={imageContainerStyle} style={largeImageSize.container}>
              <Image src="/img/ethical_hackathon.jpg" alt="Ethical Hackathon Logo" width={0} height={0} sizes="100vw" style={largeImageSize.image} className="rounded-4xl" />
            </div>
            <div>
              <h3 className="text-[clamp(1.2rem,1.8vw,1.6rem)] font-extrabold text-[#1877F2] mb-2">🏆 2nd place in Hackathon</h3>
              <span className="text-[clamp(1rem,1.8vw,1.125rem)] text-gray-600">OpenAI + Next.js + Supabase</span>
            </div>
          </div>
        </div>

        {/* Main Card - Center, 2x1 */}
        <div className="col-start-2 col-end-4 row-start-2 row-end-3 bg-gradient-to-br from-[#f0f4ff] via-white to-[#e6efff] rounded-4xl p-16 shadow-2xl border-2 border-[#1877F2]/20 backdrop-blur-sm flex flex-col items-center justify-center">
          <h1 className="text-[clamp(2rem,4vw,4rem)] font-extrabold text-[#1877F2] mb-6">JeongJun Song (Jun)</h1>
          <h2 className="text-[clamp(1rem,2vw,2rem)] font-bold text-gray-800 mb-8">Full Stack Developer & AI Agent Platform Builder</h2>
          <div className="grid grid-cols-1 gap-6 text-gray-700 text-[clamp(1.25rem,2.5vw,2rem)]"></div>
        </div>

        {/* Tech Stack Card */}
        <div
          onClick={() => setCurrentView('skills')}
          className="cursor-pointer bg-gradient-to-br from-[#f0f4ff] via-white to-[#e6efff] rounded-4xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-[1.03] border border-[#1877F2]/20 backdrop-blur-sm flex flex-col items-center justify-center row-start-3 col-start-2"
        >
          <div className="flex flex-col items-center text-center space-y-4 h-full justify-center w-full">
            <div>
              <div className="grid grid-cols-2 grid-rows-2 gap-3 w-full items-center justify-center mt-2">
                {/* Next.js */}
                <div className="bg-white/90 rounded-4xl p-5 shadow-md flex flex-col items-center justify-center w-full h-full">
                  <SiNextdotjs className="text-[3rem] text-black mb-1" />
                  <span className="font-bold text-base md:text-lg lg:text-xl text-gray-800">Next.js</span>
                </div>
                {/* Python */}
                <div className="bg-white/90 rounded-4xl p-5 shadow-md flex flex-col items-center justify-center w-full h-full">
                  <SiPython className="text-[3rem] text-[#3776AB] mb-1" />
                  <span className="font-bold text-base md:text-lg lg:text-xl text-gray-800">Python</span>
                </div>
                {/* n8n */}
                <div className="bg-white/90 rounded-4xl p-5 shadow-md flex flex-col items-center justify-center w-full h-full">
                  <SiN8N className="text-[3rem] text-[#EF7C28] mb-1" />
                  <span className="font-bold text-base md:text-lg lg:text-xl text-gray-800">n8n</span>
                </div>
                {/* More */}
                <div className="bg-white/90 rounded-4xl p-5 shadow-md flex flex-col items-center justify-center w-full h-full">
                  <span className="mb-1 md:mb-2 text-2xl md:text-3xl lg:text-4xl font-extrabold text-gray-400"> more.. </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Quote Card - Bottom Center, now 1x1 */}
        <div className="row-start-3 col-start-3 bg-gradient-to-br from-[#f0f4ff] via-white to-[#e6efff] rounded-4xl p-12 shadow-2xl border-2 border-[#1877F2]/20 backdrop-blur-sm flex flex-col items-center justify-center">
          <div className="flex flex-col items-center text-center space-y-6 h-full justify-center">
            <div>
              <h3 className="text-[clamp(1rem,2vw,1.6rem)] font-extrabold text-[#1877F2] mb-2">2025. Designed by Jun</h3>
              <p className="text-[clamp(1rem,2vw,1.25rem)] text-gray-600 italic leading-relaxed">
                "You can not connect the dots looking forward, you can only connect them looking backward."
              </p>
            </div>
          </div>
        </div>

        {/* Experience Card - Bottom Left */}
        <div
          onClick={() => setCurrentView('experience')}
          className="cursor-pointer bg-gradient-to-br from-[#f0f4ff] via-white to-[#e6efff] rounded-4xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-[1.03] border border-[#1877F2]/20 backdrop-blur-sm flex flex-col items-center justify-center"
        >
                                <div className={`${cardContainerStyle} space-y-1`}>
            <div className={imageContainerStyle} style={largeImageSize.container}>
              <Image src="/img/MLOPS.jpg" alt="MLOps Logo" width={0} height={0} sizes="100vw" style={largeImageSize.image} className="rounded-4xl" />
            </div>
            <div>
              <h3 className="text-[clamp(1rem,2vw,1.6rem)] font-extrabold text-[#1877F2] mb-2">+3 years of ML Engineer</h3>
              <p className="text-[clamp(1rem,1.8vw,1.125rem)] font-bold text-gray-800 mb-1">Train, Optimize, Deploy</p>
            </div>
          </div>
        </div>

        {/* Military Card - Bottom Right */}
        <div
          onClick={() => setCurrentView('military')}
          className="cursor-pointer bg-gradient-to-br from-[#f0f4ff] via-white to-[#e6efff] rounded-4xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-[1.03] border border-[#1877F2]/20 backdrop-blur-sm flex flex-col items-center justify-center row-start-3 col-start-4"
        >
          <div className="flex flex-col items-center text-center space-y-4 h-full justify-center">
            <div className="bg-white/90 rounded-4xl p-4 shadow-md">
              <FaMedal className="text-[clamp(1.5rem,3vw,3rem)] text-[#1877F2]" />
            </div>
            <div>
              <h3 className="text-[clamp(1rem,2vw,1.6rem)] font-extrabold text-[#1877F2] mb-2">Military Service</h3>
              <p className="text-[clamp(1rem,1.8vw,1.125rem)] font-bold text-gray-800 mb-1">UN Peacekeepers</p>
              <p className="text-[clamp(0.875rem,1.4vw,1rem)] text-gray-600">South Sudan • Driver & Interpreter</p>
            </div>
          </div>
        </div>

        {/* 100 hrs/week Card - Left Middle, Responsive & Emphasized */}
        <div
          className="bg-gradient-to-br from-yellow-200 via-orange-300 to-red-400 rounded-4xl shadow-2xl border-4 border-yellow-400 animate-pulse-slow flex flex-col items-center justify-center row-start-2 col-start-1 row-span-2 cursor-default transition-transform duration-300 hover:scale-105 hover:shadow-[0_0_40px_10px_rgba(255,140,0,0.3)]"
          style={{ minHeight: 'clamp(180px, 30vw, 340px)', minWidth: 'clamp(180px, 22vw, 340px)' }}
        >
          <div className="flex flex-col items-center text-center space-y-3 h-full justify-center w-full">
            <div className="bg-black rounded-4xl flex items-center justify-center mb-2 shadow-lg border-4 border-white"
              style={{ width: 'clamp(180px, 20vw, 300px)', height: 'clamp(180px, 20vw, 300px)' }}>
              <span className="text-white font-extrabold" style={{ fontSize: 'clamp(4rem, 10vw, 8rem)' }}>100</span>
            </div>
            <div className="flex flex-col items-center space-y-1 w-full">
              <div className="bg-white/80 rounded-4xl px-4 py-1 shadow-md w-fit mx-auto">
                <h3 className="font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-red-600 via-orange-500 to-yellow-500 drop-shadow-md" style={{ fontSize: 'clamp(1.5rem, 3vw, 2.5rem)' }}>100 hrs/week</h3>
              </div>
              <div className="bg-white/70 rounded-4xl px-4 py-1 shadow-md w-fit mx-auto">
                <p className="font-extrabold text-orange-700 drop-shadow-md" style={{ fontSize: 'clamp(1.2rem, 2.5vw, 2rem)' }}>I am still hungry</p>
              </div>
              <div className="bg-white/60 rounded-4xl px-3 py-1 shadow w-fit mx-auto mt-1 flex items-center justify-center">
                <span className="text-xl md:text-2xl lg:text-3xl mr-2">🔥</span>
                <span className="font-bold text-orange-800 drop-shadow-sm" style={{ fontSize: 'clamp(1.1rem, 2vw, 1.5rem)' }}>Relentless Passion</span>
              </div>
            </div>
          </div>
        </div>

        {/* Contact Card - Top Right */}
        <div
          onClick={() => setCurrentView('contact')}
          className="cursor-pointer bg-gradient-to-br from-[#f0f4ff] via-white to-[#e6efff] rounded-4xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-[1.03] border border-[#1877F2]/20 backdrop-blur-sm flex flex-col items-center justify-center row-start-1 col-start-4"
        >
          <div className="grid grid-cols-2 grid-rows-2 gap-4 h-full w-full items-center justify-center">
            {/* GitHub */}
            <div className="bg-white/90 rounded-4xl p-6 shadow-md flex items-center justify-center hover:bg-white transition-colors duration-300 w-full h-full">
              <FaGithub className="text-[4rem] text-gray-800" />
            </div>
            {/* LinkedIn */}
            <div className="bg-white/90 rounded-4xl p-6 shadow-md flex items-center justify-center hover:bg-white transition-colors duration-300 w-full h-full">
              <FaLinkedin className="text-[4rem] text-blue-600" />
            </div>
            {/* Google G */}
            <div className="bg-white/90 rounded-4xl p-6 shadow-md flex items-center justify-center hover:bg-white transition-colors duration-300 w-full h-full">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" width="64" height="64">
                <g><path fill="#4285F4" d="M43.611 20.083H42V20H24v8h11.303C33.973 32.833 29.373 36 24 36c-6.627 0-12-5.373-12-12s5.373-12 12-12c2.69 0 5.164.957 7.104 2.53l6.062-6.062C33.984 5.16 29.284 3 24 3 12.954 3 4 11.954 4 23s8.954 20 20 20c10.477 0 19.477-7.615 19.477-19.477 0-1.305-.138-2.568-.366-3.773z"/><path fill="#34A853" d="M6.306 14.691l6.571 4.819C14.655 16.163 19.004 13 24 13c2.69 0 5.164.957 7.104 2.53l6.062-6.062C33.984 5.16 29.284 3 24 3c-7.732 0-14.41 4.41-17.694 11.691z"/><path fill="#FBBC05" d="M24 43c5.205 0 9.963-1.717 13.627-4.60l-6.293-5.146C29.373 36 24 36 24 36c-5.373 0-9.973-3.167-11.303-8H6.306C8.59 38.59 15.268 43 24 43z"/><path fill="#EA4335" d="M43.611 20.083H42V20H24v8h11.303c-1.13 3.833-5.73 8-11.303 8-2.69 0-5.164-.957-7.104-2.53l-6.062 6.062C14.016 42.84 18.716 45 24 45c7.732 0 14.41-4.41 17.694-11.691z"/></g>
              </svg>
            </div>
            {/* X/Twitter */}
            <div className="bg-white/90 rounded-4xl p-6 shadow-md flex items-center justify-center hover:bg-white transition-colors duration-300 w-full h-full">
              <FaXTwitter className="text-[4rem] text-black" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

/* Add this to your global CSS or Tailwind config for custom animation */
/*
@keyframes pulse-slow {
  0%, 100% { box-shadow: 0 0 40px 10px rgba(255,140,0,0.15); }
  50% { box-shadow: 0 0 60px 20px rgba(255,140,0,0.35); }
}
.animate-pulse-slow {
  animation: pulse-slow 2.5s infinite;
}
*/
