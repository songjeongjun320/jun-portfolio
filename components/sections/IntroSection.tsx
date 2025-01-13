'use client';

import { useState } from 'react';
import Image from 'next/image';
import { IntroContent } from '@/types';

export default function IntroSection({ content }: { content: IntroContent }) {
  const [isImageFlipped, setIsImageFlipped] = useState(false);

  return (
    <div
      className="container mx-auto px-6 py-24 min-h-screen
     flex flex-col items-center justify-center bg-gradient-to-b bg-gradient-to-r from-gray-900"
    >
      {' '}
      <h2 className="text-5xl font-extrabold text-white mb-16 text-center tracking-tight">
        Introduction
      </h2>
      <div className="flex flex-col md:flex-row items-center gap-12 md:gap-20">
        {/* Profile Image */}
        <div
          className="relative w-72 h-72 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-gray-700 shadow-2xl transform hover:scale-105 transition-transform duration-300 cursor-pointer"
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
            </div>
          </div>
        </div>

        {/* Text Content */}
        <div className="text-center md:text-left space-y-6">
          <h3 className="text-4xl font-bold text-white">{content.name}</h3>
          <p className="text-2xl font-medium text-teal-400">{content.title}</p>
          <p className="text-lg leading-relaxed text-gray-300 whitespace-pre-line">
            {content.description}
          </p>
          <ul className="space-y-2 text-lg text-gray-300">
            {content.details.map((item, index) => (
              <li key={index} className="flex items-start gap-3">
                <span className="w-2.5 h-2.5 bg-teal-400 rounded-full mt-2"></span>
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
