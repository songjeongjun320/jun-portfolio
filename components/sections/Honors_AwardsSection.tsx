'use client';

import { CSSTransition } from 'react-transition-group';

export default function Honors_AwardsSection() {
  const title = 'Honors & Awards';
  const content = [
    'ASU Dean’s List (2023 - 2024)',
    'ASU NamU Scholarship (2023 - 2025)',
    '2nd Prize, Ethical Hackathon (2024)',
    'Furi Research Presentation (2024)',
    'Participant of Amazon’s Campus Summer Series (2024)',
  ];

  return (
    <div className="container mx-auto px-6 py-24 min-h-screen flex flex-col items-center justify-center bg-gradient-to-r">
      <h2 className="text-5xl font-extrabold text-white mb-16 text-center tracking-tight uppercase">
        {title}
      </h2>
      <div className="space-y-8 w-full md:w-4/5 lg:w-3/5">
        {content.map((item, index) => (
          <CSSTransition
            key={index}
            in={true}
            timeout={500}
            classNames="fade"
            unmountOnExit
          >
            <div className="bg-gray-900 p-6 rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300 ease-in-out">
              <p className="text-lg text-gray-300 leading-relaxed">{item}</p>
            </div>
          </CSSTransition>
        ))}
      </div>
    </div>
  );
}
