'use client';

import { useState } from 'react';
import { FaGraduationCap, FaBriefcase, FaCode, FaProjectDiagram, FaTrophy, FaEnvelope, FaMedal, FaArrowLeft, FaQuoteLeft, FaGithub, FaLinkedin } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';
import { SiGmail, SiNextdotjs, SiSupabase, SiN8N, SiPython, SiReact } from 'react-icons/si';
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
  const [showCardsOnly, setShowCardsOnly] = useState(true);
  
  // 공통 스타일 정의
  const imageContainerStyle = "flex items-center justify-center w-full";
  const cardContainerStyle = "flex flex-col items-center text-center h-full justify-center";
  const standardImageSize = {
    container: { height: '6vw' },
    image: { 
      width: '6vw', 
      height: '4.5vw', 
      objectFit: 'contain' as const,
      borderRadius: '0.5vw'
    }
  };
  const asuImageSize = {
    container: { height: '5vw' },
    image: { 
      width: '5vw', 
      height: '4vw', 
      objectFit: 'contain' as const,
      borderRadius: '0.5vw'
    }
  };
  const largeImageSize = {
    container: { height: '6vw' },
    image: { 
      width: '7.5vw', 
      height: '5vw', 
      objectFit: 'contain' as const,
      borderRadius: '0.5vw'
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
      <div className="min-h-screen bg-gradient-to-t from-purple-950 via-violet-950 via-indigo-950 to-blue-950 relative">
        {/* 추가 그라데이션 오버레이 */}
        <div className="absolute inset-0 bg-gradient-to-t from-purple-900/40 via-transparent to-blue-900/30 pointer-events-none"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-violet-950/30 via-transparent to-indigo-950/30 pointer-events-none"></div>
        <div className="relative z-10">
          {renderDetailView()}
        </div>
      </div>
    );
  }

  return (
    <div className="h-screen bg-gradient-to-t from-purple-950 via-violet-950 via-indigo-950 to-blue-950 p-[1vw] relative">
      {/* 추가 그라데이션 오버레이 */}
      <div className="absolute inset-0 bg-gradient-to-t from-purple-900/40 via-transparent to-blue-900/30 pointer-events-none"></div>
      <div className="absolute inset-0 bg-gradient-to-r from-violet-950/30 via-transparent to-indigo-950/30 pointer-events-none"></div>
      
      {/* Back Button - only show when cards are hidden */}
      {!showCardsOnly && (
        <button
          onClick={() => setShowCardsOnly(true)}
          className="fixed top-[1.5vw] left-[1.5vw] z-50 bg-white shadow-lg rounded-[1.5vw] p-[0.8vw] hover:shadow-xl transition-shadow duration-300 border-[0.1vw] border-blue-200"
        >
          <FaArrowLeft className="text-blue-600 text-[2vw]" />
        </button>
      )}
      
      {/* Grid Layout - 4x3 Grid */}
      <div className={`h-full grid grid-cols-4 grid-rows-3 gap-[1.5vw] w-full mx-auto relative z-10 transition-opacity duration-500 ${showCardsOnly ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}>
        {/* Row 1 */}
        {/* Education Card */}
        <div
          onClick={() => setCurrentView('education')}
          className="cursor-pointer bg-white rounded-[1.5vw] p-[2.5vw] shadow-2xl hover:shadow-2xl transition-all duration-300 hover:scale-[1.04] border-[0.2vw] border-[#1877F2]/20 backdrop-blur-sm flex flex-col items-center justify-center"
        >
          <div className={`${cardContainerStyle} space-y-1`}>
            <div className={imageContainerStyle} style={asuImageSize.container}>
              <Image src="/img/ASU_LOGO.png" alt="ASU Logo" width={0} height={0} sizes="100vw" style={asuImageSize.image} className="rounded-4xl" />
            </div>

            <div>
              <p className="text-[0.9vw] font-bold text-black mb-[0.1vw]">Arizona State University</p>
              <p className="text-[1vw] font-extrabold text-[#1877F2] mb-[0.1vw]">B.S. Computer Science </p>
              <p className="text-[1vw] font-extrabold text-[#1877F2] mb-[0.1vw]">GPA: 3.77/4.0</p>
            </div>
          </div>
        </div>

        {/* Projects Card - Top Center */}
        <div
          onClick={() => setCurrentView('projects')}
          className="cursor-pointer bg-white rounded-[1.5vw] p-[2vw] shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-[1.03] border-[0.1vw] border-[#1877F2]/20 backdrop-blur-sm flex flex-col items-center justify-center col-start-2 row-start-1"
        >
          <div className="flex flex-col items-center text-center space-y-[0.5vw] h-full justify-center">
            <div className="bg-white/90 rounded-[0.8vw] p-[0.5vw] shadow-md">
              <FaProjectDiagram className="text-[1.5vw] text-[#1877F2]" />
            </div>
            <div>
              <h3 className="text-[0.9vw] font-extrabold text-[#1877F2] mb-[0.3vw]">Projects</h3>
              <h3 className="text-[0.9vw] font-bold text-gray-800 mb-[0.1vw]">CarePilot AI Assistant</h3>
              <h3 className="text-[0.7vw] text-gray-600">6+ Projects</h3>
            </div>
          </div>
        </div>

        {/* Honors Card - Top Right */}
        <div
          onClick={() => setCurrentView('honors')}
          className="cursor-pointer bg-white rounded-[1.5vw] p-[2.5vw] shadow-2xl hover:shadow-2xl transition-all duration-300 hover:scale-[1.04] border-[0.2vw] border-[#1877F2]/20 backdrop-blur-sm flex flex-col items-center justify-center col-start-3 row-start-1"
        >
          <div className={`${cardContainerStyle} space-y-[0.2vw]`}>
            <div className={imageContainerStyle} style={largeImageSize.container}>
              <Image src="/img/ethical_hackathon.jpg" alt="Ethical Hackathon Logo" width={0} height={0} sizes="100vw" style={largeImageSize.image} className="rounded-[1vw]" />
            </div>
            <div>
              <h3 className="text-[0.9vw] font-bold text-gray-800 mb-[0.1vw]">🏆 2nd place in Hackathon</h3>
              <span className="text-[1vw] font-extrabold text-[#1877F2] mb-[0.3vw]">OpenAI + Next.js + Supabase</span>
            </div>
          </div>
        </div>

        {/* Main Card - Center, 2x1 */}
        <div 
          onClick={() => window.open('/pdf/JeongJun_Resume_V39.pdf', '_blank')}
          className="cursor-pointer col-start-2 col-end-4 row-start-2 row-end-3 bg-white rounded-[1.5vw] p-[4vw] shadow-2xl border-[0.2vw] border-[#1877F2]/20 backdrop-blur-sm flex flex-col items-center justify-center hover:shadow-2xl transition-all duration-300 hover:scale-[1.05] hover:animate-pulse-gentle">
          <h1 className="text-[1.8vw] font-extrabold text-[#1877F2] mb-[0.8vw]">JeongJun Song (Jun)</h1>
          <h2 className="text-[0.9vw] font-bold text-gray-800 mb-[1vw]">Full Stack Developer & AI Agent Platform Builder</h2>
          <div className="grid grid-cols-1 gap-[1.5vw] text-gray-700 text-[2.5vw]"></div>
        </div>

        {/* Tech Stack Card */}
        <div
          onClick={() => setCurrentView('skills')}
          className="cursor-pointer bg-white rounded-[1.5vw] p-[2vw] shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-[1.03] border-[0.1vw] border-[#1877F2]/20 backdrop-blur-sm flex flex-col items-center justify-center row-start-3 col-start-2"
        >
          <div className="flex items-start justify-center h-full w-full gap-[1.5vw]">
            {/* Left Side - Icons */}
            <div className="flex flex-col items-center space-y-[1vw]">
              {/* React Icon */}
              <div className="flex flex-col items-center">
                <SiReact className="text-[5vw] text-[#8B5CF6] mb-[0.3vw]" />
              </div>
              
              {/* n8n Icon */}
              <div className="flex flex-col items-center">
                <SiN8N className="text-[3vw] text-[#EF7C28]" />
              </div>
            </div>
            
            {/* Right Side - Text */}
            <div className="flex flex-col justify-start text-left space-y-[0.3vw] mt-[0.5vw]">
              <div className="text-[1vw] font-bold text-black">React</div>
              <div className="text-[1vw] font-bold text-black">
                TypeScript
              </div>
              <div className="text-[1vw] font-bold text-black mb-[1vw]">
                Tailwind CSS
              </div>
              <div className="text-[1vw] font-bold text-[#38BDF8]">
                n8n
              </div>
              <div className="text-[1vw] font-bold text-[#38BDF8]">
                AI Agent
              </div>
            </div>
          </div>
        </div>

        {/* Quote Card - Bottom Center, now 1x1 */}
        <div className="row-start-3 col-start-3 bg-white rounded-[1.5vw] p-[3vw] shadow-2xl border-[0.2vw] border-[#1877F2]/20 backdrop-blur-sm flex flex-col items-center justify-center transition-all duration-300 hover:scale-[1.05] hover:animate-pulse-gentle cursor-default">
          <div className="flex flex-col items-center text-center space-y-[0.8vw] h-full justify-center">
            <div>
              <h3 className="text-[1vw] font-extrabold text-[#1877F2] mb-[0.3vw]">2025. Designed by Jun</h3>
              <p className="text-[1vw] text-gray-600 italic leading-relaxed">
                "You can not connect the dots looking forward, you can only connect them looking backward."
              </p>
            </div>
          </div>
        </div>

        {/* Experience Card - Bottom Left */}
        <div
          onClick={() => setCurrentView('experience')}
          className="cursor-pointer bg-white rounded-[1.5vw] p-[2vw] shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-[1.03] border-[0.1vw] border-[#1877F2]/20 backdrop-blur-sm flex flex-col items-center justify-center"
        >
          <div className={`${cardContainerStyle} space-y-[0.2vw]`}>
            <div className={imageContainerStyle} style={largeImageSize.container}>
              <Image src="/img/MLOPS.jpg" alt="MLOps Logo" width={0} height={0} sizes="100vw" style={largeImageSize.image} className="rounded-[1vw]" />
            </div>
            <div>
              <h3 className="text-[0.9vw] font-bold text-gray-800 mb-[0.1vw]">+2 years of AI/ML Experience</h3>
              <p className="text-[1vw] font-extrabold text-[#1877F2] mb-[0.3vw]">Train, Optimize, Deploy</p>
            </div>
          </div>
        </div>

        {/* Military Card - Bottom Right */}
        <div
          onClick={() => setCurrentView('military')}
          className="cursor-pointer bg-white rounded-[1.5vw] p-[2vw] shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-[1.03] border-[0.1vw] border-[#1877F2]/20 backdrop-blur-sm flex flex-col items-center justify-center row-start-3 col-start-4"
        >
          <div className="flex flex-col items-center text-center space-y-[0.5vw] h-full justify-center">
            <div className="bg-white/90 rounded-[0.8vw] p-[0.5vw] shadow-md">
              <FaMedal className="text-[1.5vw] text-[#1877F2]" />
            </div>
            <div>
              <h3 className="text-[0.9vw] font-extrabold text-[#1877F2] mb-[0.3vw]">Military Service & Volunteer</h3>
              <p className="text-[0.9vw] font-bold text-gray-800 mb-[0.1vw]">UN Peacekeepers</p>
              <p className="text-[0.7vw] text-gray-600">South Sudan • Driver & Interpreter</p>
            </div>
          </div>
        </div>

        {/* 100 hrs/week Card - Left Middle, Responsive & Emphasized */}
        <div
          onClick={() => window.open('/pdf/Recommendation.pdf', '_blank')}
          className="bg-gradient-to-br from-yellow-200 via-orange-300 to-red-400 rounded-[1.5vw] shadow-2xl border-[0.4vw] border-yellow-400 animate-pulse-slow flex flex-col items-center justify-center row-start-2 col-start-1 row-span-2 cursor-pointer transition-transform duration-300 hover:scale-105 hover:shadow-[0_0_40px_10px_rgba(255,140,0,0.3)]"
        >
          <div className="flex flex-col items-center text-center space-y-[0.4vw] h-full justify-center w-full">
            <div className="bg-black rounded-[0.8vw] flex items-center justify-center mb-[0.3vw] shadow-lg border-[0.2vw] border-white"
              style={{ width: '9vw', height: '9vw' }}>
              <span className="text-white font-extrabold text-[4.5vw]">100</span>
            </div>
            <div className="flex flex-col items-center space-y-[0.1vw] w-full">
              <div className="bg-white/80 rounded-[0.8vw] px-[0.5vw] py-[0.1vw] shadow-md w-fit mx-auto">
                <h3 className="font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-red-600 via-orange-500 to-yellow-500 drop-shadow-md text-[1.5vw]">100 hrs/week</h3>
              </div>
              <div className="bg-white/70 rounded-[0.8vw] px-[0.5vw] py-[0.1vw] shadow-md w-fit mx-auto">
                <p className="font-extrabold text-orange-700 drop-shadow-md text-[1.3vw]">I am still hungry</p>
              </div>
              <div className="bg-white/60 rounded-[0.8vw] px-[0.4vw] py-[0.1vw] shadow w-fit mx-auto mt-[0.1vw] flex items-center justify-center">
                <span className="text-[1vw] mr-[0.3vw]">🔥</span>
                <span className="font-bold text-orange-800 drop-shadow-sm text-[1vw]">Relentless Passion</span>
              </div>
            </div>
          </div>
        </div>

        {/* Contact Card - Top Right */}
        <div
          onClick={() => setCurrentView('contact')}
          className="cursor-pointer bg-white rounded-[1.5vw] p-[2vw] shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-[1.03] border-[0.1vw] border-[#1877F2]/20 backdrop-blur-sm flex flex-col items-center justify-center row-start-1 col-start-4"
        >
          <div className="grid grid-cols-2 grid-rows-2 gap-[0.5vw] h-full w-full items-center justify-center">
            {/* GitHub */}
            <div className="bg-white/90 rounded-[0.8vw] p-[0.8vw] shadow-lg hover:shadow-xl flex items-center justify-center hover:bg-white transition-all duration-300 w-full h-full hover:-translate-y-1">
              <FaGithub className="text-[2vw] text-gray-800" />
            </div>
            {/* LinkedIn */}
            <div className="bg-white/90 rounded-[0.8vw] p-[0.8vw] shadow-lg hover:shadow-xl flex items-center justify-center hover:bg-white transition-all duration-300 w-full h-full hover:-translate-y-1">
              <FaLinkedin className="text-[2vw] text-blue-600" />
            </div>
            {/* Google G */}
            <div className="bg-white/90 rounded-[0.8vw] p-[0.8vw] shadow-lg hover:shadow-xl flex items-center justify-center hover:bg-white transition-all duration-300 w-full h-full hover:-translate-y-1">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" width="2vw" height="2vw">
                <g><path fill="#4285F4" d="M43.611 20.083H42V20H24v8h11.303C33.973 32.833 29.373 36 24 36c-6.627 0-12-5.373-12-12s5.373-12 12-12c2.69 0 5.164.957 7.104 2.53l6.062-6.062C33.984 5.16 29.284 3 24 3 12.954 3 4 11.954 4 23s8.954 20 20 20c10.477 0 19.477-7.615 19.477-19.477 0-1.305-.138-2.568-.366-3.773z"/><path fill="#34A853" d="M6.306 14.691l6.571 4.819C14.655 16.163 19.004 13 24 13c2.69 0 5.164.957 7.104 2.53l6.062-6.062C33.984 5.16 29.284 3 24 3c-7.732 0-14.41 4.41-17.694 11.691z"/><path fill="#FBBC05" d="M24 43c5.205 0 9.963-1.717 13.627-4.60l-6.293-5.146C29.373 36 24 36 24 36c-5.373 0-9.973-3.167-11.303-8H6.306C8.59 38.59 15.268 43 24 43z"/><path fill="#EA4335" d="M43.611 20.083H42V20H24v8h11.303c-1.13 3.833-5.73 8-11.303 8-2.69 0-5.164-.957-7.104-2.53l-6.062 6.062C14.016 42.84 18.716 45 24 45c7.732 0 14.41-4.41 17.694-11.691z"/></g>
              </svg>
            </div>
            {/* X/Twitter */}
            <div className="bg-white/90 rounded-[0.8vw] p-[0.8vw] shadow-lg hover:shadow-xl flex items-center justify-center hover:bg-white transition-all duration-300 w-full h-full hover:-translate-y-1">
              <FaXTwitter className="text-[2vw] text-black" />
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

@keyframes plasma-pulse {
  0%, 100% { opacity: 0.3; }
  50% { opacity: 0.7; }
}

@keyframes plasma-flow {
  0% { stroke-dashoffset: 1000; }
  100% { stroke-dashoffset: 0; }
}

.plasma-line {
  stroke-dasharray: 20 10;
  animation: plasma-flow 20s linear infinite, plasma-pulse 4s ease-in-out infinite;
}

.plasma-line-2 {
  animation-delay: 1s;
  animation-duration: 25s, 5s;
}

.plasma-line-3 {
  animation-delay: 2s;
  animation-duration: 18s, 3.5s;
}

.plasma-line-4 {
  animation-delay: 3s;
  animation-duration: 22s, 4.5s;
}

.energy-particle {
  opacity: 0.8;
  filter: drop-shadow(0 0 6px currentColor);
}

.particle-1 {
  animation: plasma-pulse 2s ease-in-out infinite;
}

.particle-2 {
  animation: plasma-pulse 2.5s ease-in-out infinite 0.5s;
}

.particle-3 {
  animation: plasma-pulse 3s ease-in-out infinite 1s;
}

.particle-4 {
  animation: plasma-pulse 2.2s ease-in-out infinite 1.5s;
}
*/
