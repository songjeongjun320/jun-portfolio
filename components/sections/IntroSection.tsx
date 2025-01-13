'use client';

import { useState } from 'react';
import Image from 'next/image';
import { IntroContent } from '@/types';

export default function IntroSection({ content }: { content: IntroContent }) {
  const [isImageFlipped, setIsImageFlipped] = useState(false);
  console.log('IntroSection content:', content);


  return (
    <div className="container mx-auto px-4 py-20 min-h-screen flex flex-col items-center justify-center">
      <h2 className="text-5xl font-bold text-white mb-12">Introduction</h2>
      <div className="flex flex-col md:flex-row items-center gap-8 md:gap-16">
        <div className="flex flex-col items-center md:flex-row md:items-start gap-8 md:gap-16">
          <div
            className="relative w-64 h-64 rounded-full overflow-hidden border-4 border-white/20 shadow-xl cursor-pointer"
            style={{ perspective: '1000px' }}
            onMouseEnter={() => setIsImageFlipped(true)}
            onMouseLeave={() => setIsImageFlipped(false)}
          >
            <div
              className="absolute w-full h-full transition-transform duration-500 ease-in-out preserve-3d"
              style={{
                transform: isImageFlipped
                  ? 'rotateY(180deg)'
                  : 'rotateY(0)',
              }}
            >
              <div className="absolute w-full h-full backface-hidden">
                <Image
                  src="/img/whoami.jpg"
                  alt="Profile"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
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
          <div className="space-y-4 text-white text-center md:text-left">
            <h3 className="text-4xl font-bold text-white">{content.name}</h3>
            <p className="text-2xl font-semibold text-white">{content.title}</p>
            <p className="text-xl whitespace-pre-line text-white">{content.description}</p>
            <ul className="space-y-2 text-xl text-white">
              {content.details.map((item, index) => (
                <li key={index} className="flex items-center gap-2">
                  <span className="text-2xl">•</span> {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

