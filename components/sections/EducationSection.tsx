'use client';

import { CSSTransition } from 'react-transition-group';
import { FaArrowLeft } from 'react-icons/fa';

interface EducationSectionProps {
  onBack: () => void;
}

export default function EducationSection({ onBack }: EducationSectionProps) {
  const title = 'Education';
  const content = [
    'Arizona State University, Ira A. Fulton Schools of Engineering | GPA: 3.81 / 4.0 (Overall), 3.78 / 4.0 (Major)',
    'B.S. Computer Science (Expected December 2025)',
    "Dean's List (2023 - 2025) | NamU Scholarship (2023-2025)",
    'Relevant Coursework: Data Structures, Algorithms, Machine Learning, AI, Natural Language Processing, and more!',
  ];

  return (
    <div className="w-screen flex flex-col items-center justify-center bg-gradient-to-br from-[#f7faff] via-[#e7f0fd] to-[#e3e9fc] px-[clamp(0.5rem,3vw,2.5rem)] py-[clamp(1rem,6vw,4rem)] min-h-screen">
      {/* Back Button */}
      <button
        onClick={onBack}
        className="fixed top-6 left-6 z-50 bg-white shadow-lg rounded-4xl p-3 hover:shadow-xl transition-shadow duration-300 border border-blue-200"
      >
        <FaArrowLeft className="text-blue-600 text-xl" />
      </button>
      
      <h2 className="text-[clamp(2rem,5vw,3.5rem)] font-extrabold text-[#1877F2] mb-[clamp(1rem,4vw,3rem)] text-center tracking-wide uppercase leading-tight">
        {title}
      </h2>
      <ul className="w-full min-w-[clamp(250px,40vw,700px)] max-w-[clamp(300px,90vw,1200px)] space-y-[clamp(0.7rem,2vw,1.5rem)] text-[clamp(1.1rem,2vw,1.5rem)] md:text-2xl text-gray-800">
        {content.map((item, index) => (
          <CSSTransition
            key={index}
            in={true}
            timeout={500}
            classNames="fade"
            unmountOnExit
          >
                          <li className="flex items-center gap-4 p-[clamp(0.7rem,2vw,1.5rem)] rounded-4xl bg-white/90 hover:bg-[#e3e9fc] transition-all duration-300 ease-in-out border-2 border-blue-100">
              <span className="text-[clamp(1.2rem,2vw,2rem)] text-[#1877F2] font-bold">&#8226;</span>
              <span>{item}</span>
            </li>
          </CSSTransition>
        ))}
      </ul>
    </div>
  );
}
