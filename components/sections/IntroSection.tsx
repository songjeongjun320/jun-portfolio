'use client';

import { useState } from 'react';
import Image from 'next/image';
import { CSSTransition } from 'react-transition-group';

export default function IntroSection() {
  const content = {
    title: 'Full Stack Developer & AI Agent Platform Builder',
    description: [
      '· Build platforms with LLM agents and workflow automation.',
      '· Database integration for agent-driven user experiences.',
    ],
    details: [
      'Next.js',
      'React',
      'Supabase',
      'FPython',
      'n8n',
      'AI Agent Platforms',
    ],
  };

  const [isImageFlipped, setIsImageFlipped] = useState(false);
  const [inSection, setInSection] = useState(true);

  return (
    <CSSTransition
      in={inSection}
      timeout={500}
      classNames="fade"
      unmountOnExit
      onEntered={() => setInSection(true)}
      onExit={() => setInSection(false)}
    >
      <div className="w-screen flex flex-col items-center justify-center bg-gradient-to-br from-[#f7faff] via-[#e7f0fd] to-[#e3e9fc] px-[clamp(0.5rem,3vw,2.5rem)] py-[clamp(1rem,6vw,4rem)] min-h-screen">
        <h2 className="text-6xl font-extrabold text-white mb-20 text-center tracking-tight bg-gradient-to-r from-white via-gray-100 to-white bg-clip-text text-transparent">
          (Jun) JeongJun Song
        </h2>
        <div className="flex flex-col md:flex-row items-center gap-16 md:gap-24">
          {/* Profile Image */}
          <div
            className="relative w-80 h-80 md:w-96 md:h-96 rounded-4xl overflow-hidden border-2 border-gray-700/30 shadow-2xl transform hover:scale-105 transition-all duration-500 cursor-pointer backdrop-blur-sm"
            style={{ perspective: '1000px' }}
            onMouseEnter={() => setIsImageFlipped(true)}
            onMouseLeave={() => setIsImageFlipped(false)}
          >
            <div
              className="absolute w-full h-full transition-transform duration-700 ease-in-out preserve-3d"
              style={{
                transform: isImageFlipped ? 'rotateY(180deg)' : 'rotateY(0)',
              }}
            >
              {/* Front Side */}
              <div className="absolute w-full h-full backface-hidden">
                <Image
                  src="/img/whoami.jpg"
                  alt="Profile"
                  fill
                  className="object-cover rounded-4xl"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
              </div>
              {/* Back Side */}
              <div
                className="absolute w-full h-full backface-hidden"
                style={{ transform: 'rotateY(180deg)' }}
              >
                <Image
                  src="/img/jun-square-2.jpg"
                  alt="Alternative Profile"
                  fill
                  className="object-cover rounded-4xl"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
              </div>
            </div>
          </div>

          {/* Text Content */}
          <div className="text-center md:text-left space-y-8 max-w-2xl">
            <p className="text-3xl font-medium text-transparent bg-gradient-to-r from-blue-400 via-teal-400 to-green-400 bg-clip-text">
              {content.title}
            </p>
            <div className="bg-gray-900/60 backdrop-blur-sm rounded-4xl p-6 border border-gray-700/30">
              <ul className="text-2xl leading-relaxed text-gray-200 space-y-2">
                {content.description.map((line, idx) => (
                  <li key={idx}>
                    <span className="font-bold">{line}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="grid grid-cols-2 gap-4 mt-8">
              {content.details.map((item, index) => (
                <div
                  key={index}
                  className="flex items-center gap-3 bg-gray-800/40 backdrop-blur-sm rounded-4xl p-4 border border-gray-700/20 hover:border-teal-400/30 transition-colors duration-300"
                >
                  <div className="w-3 h-3 bg-gradient-to-r from-teal-400 to-blue-400 rounded-full"></div>
                  <span className="text-gray-200 font-medium">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </CSSTransition>
  );
}
