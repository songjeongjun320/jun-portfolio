'use client';

import { CSSTransition } from 'react-transition-group';

export default function PublicationSection() {
  const content = [
    '"ML-based YMS (Yard Management System) Automation: Can Technology Replace Human Labor?" To be submitted to arXiv, expected (2025)',
  ];

  return (
    <div className="container mx-auto px-6 py-24 min-h-screen flex flex-col items-center justify-center">
      <h2 className="text-5xl font-extrabold text-white mb-16 text-center tracking-tight uppercase">
        Publications
      </h2>
      <div className="space-y-10 w-full md:w-4/5 lg:w-3/5">
        {content.map((publication, index) => (
          <CSSTransition
            key={index}
            in={true}
            timeout={500}
            classNames="fade"
            unmountOnExit
          >
            <div className="bg-gray-900 p-8 rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300 ease-in-out">
              <p className="text-lg md:text-xl text-gray-300 whitespace-pre-line leading-relaxed">
                {publication}
              </p>
            </div>
          </CSSTransition>
        ))}
      </div>
    </div>
  );
}
