'use client';

import { useState } from 'react';
import Image from 'next/image';
import { CSSTransition } from 'react-transition-group';

export default function IntroSection() {
  const content = {
    name: '(Jun) JeongJun Song',
    title: 'Full Stack Developer & NLP ML Researcher',
    description: `As a Full Stack Developer:
I pursue simplicity in web design and strive to create clean, intuitive interfaces. 
My goal is to develop solutions that are easily understandable for both users and developers, 
focusing on maintainable and efficient code across the entire stack.

As a Researcher:
I explore whether LLMs can learn new languages not pre-trained within their models, 
and pursue Define Tuning techniques to remove unnecessary components within LLMs 
instead of traditional fine-tuning methods.`,
    details: [
      'Full-stack Development',
      'NLP/ML Research',
      'Clean Code Advocate',
      'Problem Solver',
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
      <div className="container mx-auto px-6 py-24 min-h-screen flex flex-col items-center justify-center">
        <h2 className="text-6xl font-extrabold text-white mb-20 text-center tracking-tight bg-gradient-to-r from-white via-gray-100 to-white bg-clip-text text-transparent">
          Introduction
        </h2>
        <div className="flex flex-col md:flex-row items-center gap-16 md:gap-24">
          {/* Profile Image */}
          <div
            className="relative w-80 h-80 md:w-96 md:h-96 rounded-2xl overflow-hidden border-2 border-gray-700/30 shadow-2xl transform hover:scale-105 transition-all duration-500 cursor-pointer backdrop-blur-sm"
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
                  className="object-cover"
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
                  className="object-cover"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
              </div>
            </div>
          </div>

          {/* Text Content */}
          <div className="text-center md:text-left space-y-8 max-w-2xl">
            <h3 className="text-5xl font-bold text-white leading-tight">{content.name}</h3>
            <p className="text-2xl font-medium text-transparent bg-gradient-to-r from-blue-400 via-teal-400 to-green-400 bg-clip-text">
              {content.title}
            </p>
            <div className="bg-gray-900/60 backdrop-blur-sm rounded-xl p-6 border border-gray-700/30">
              <p className="text-lg leading-relaxed text-gray-200 whitespace-pre-line">
                {content.description}
              </p>
            </div>
            <div className="grid grid-cols-2 gap-4 mt-8">
              {content.details.map((item, index) => (
                <div key={index} className="flex items-center gap-3 bg-gray-800/40 backdrop-blur-sm rounded-lg p-4 border border-gray-700/20 hover:border-teal-400/30 transition-colors duration-300">
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
