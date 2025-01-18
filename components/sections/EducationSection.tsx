'use client';

import { CSSTransition } from 'react-transition-group';

export default function EducationSection() {
  const title = 'Education';
  const content = [
    'Arizona State University, Ira A. Fulton Schools of Engineering | GPA: 3.81 / 4.0 (Overall), 3.78 / 4.0 (Major)',
    'B.S. Computer Science (Expected December 2025)',
    "Dean's List (2023 - Expected until graduation) | NamU Scholarship (2023-2025)",
    'Relevant Coursework: Data Structures, Algorithms, Machine Learning, AI',
  ];

  return (
    <div className="container mx-auto px-6 py-24 min-h-screen flex flex-col items-center justify-center bg-gradient-to-r">
      <h2 className="text-5xl font-extrabold text-white mb-8 text-center tracking-wide uppercase leading-tight">
        {title}
      </h2>
      <ul className="space-y-6 text-lg md:text-xl text-gray-200">
        {content.map((item, index) => (
          <CSSTransition
            key={index}
            in={true} // Always animate the items when they are rendered
            timeout={500}
            classNames="fade"
            unmountOnExit
          >
            <li className="flex items-center gap-3 p-4 rounded-lg bg-black bg-opacity-60 hover:bg-opacity-80 transition-all duration-300 ease-in-out">
              <span className="text-xl text-teal-400 font-bold">&#8226;</span> {/* Bullet icon */}
              <span>{item}</span>
            </li>
          </CSSTransition>
        ))}
      </ul>
    </div>
  );
}
