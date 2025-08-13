'use client';

import { CSSTransition } from 'react-transition-group';
import { FaArrowLeft } from 'react-icons/fa';

interface Honors_AwardsSectionProps {
  onBack: () => void;
}

export default function Honors_AwardsSection({
  onBack,
}: Honors_AwardsSectionProps) {
  const content = [
    {
      title: "ASU Dean's List",
      period: '2023 - 2024',
      description: 'Academic excellence recognition for maintaining high GPA',
    },
    {
      title: 'ASU NamU Scholarship',
      period: '2023 - 2025',
      description:
        'Merit-based scholarship for outstanding academic performance',
    },
    {
      title: '2nd Prize, Ethical Hackathon',
      period: '2024',
      description: 'AI LLama and Sentient model implementation project',
    },
    {
      title: 'FURI Research Presentation',
      period: '2024',
      description:
        'Undergraduate research presentation at Arizona State University',
    },
    {
      title: 'Amazon Campus Summer Series',
      period: '2024',
      description: "Selected participant in Amazon's exclusive campus program",
    },
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

      <h2 className="text-[clamp(2rem,5vw,3.5rem)] font-extrabold text-[#1877F2] mb-[clamp(1rem,4vw,3rem)] text-center tracking-tight">
        Honors & Awards
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-6xl">
        {content.map((award, index) => (
          <div
            key={index}
            className="group bg-white/90 w-full p-[clamp(1rem,3vw,2.5rem)] rounded-4xl shadow-2xl border-2 border-blue-100 hover:border-[#1877F2] transition-all duration-500 hover:shadow-2xl hover:scale-[1.02] flex flex-col justify-between"
            style={{ animationDelay: `${index * 0.1}s` }}
          >
            <div>
              <h3 className="text-[clamp(1.3rem,2vw,2rem)] font-extrabold text-[#1877F2] mb-2">
                {award.title}
              </h3>
              <div className="bg-[#e3e9fc] px-4 py-2 rounded-4xl border border-blue-100 inline-block mb-4">
                <span className="text-[clamp(1rem,1.2vw,1.1rem)] text-[#1877F2] font-medium">
                  {award.period}
                </span>
              </div>
              <p className="text-[clamp(0.95rem,1.5vw,1.15rem)] text-gray-700 leading-relaxed group-hover:text-[#1877F2] transition-colors duration-300">
                {award.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
