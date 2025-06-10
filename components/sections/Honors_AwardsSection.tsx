'use client';

import { CSSTransition } from 'react-transition-group';

export default function Honors_AwardsSection() {
  const content = [
    {
      title: "ASU Dean's List",
      period: "2023 - 2024",
      description: "Academic excellence recognition for maintaining high GPA"
    },
    {
      title: "ASU NamU Scholarship",
      period: "2023 - 2025",
      description: "Merit-based scholarship for outstanding academic performance"
    },
    {
      title: "2nd Prize, Ethical Hackathon",
      period: "2024",
      description: "AI LLama and Sentient model implementation project"
    },
    {
      title: "FURI Research Presentation",
      period: "2024",
      description: "Undergraduate research presentation at Arizona State University"
    },
    {
      title: "Amazon Campus Summer Series",
      period: "2024",
      description: "Selected participant in Amazon's exclusive campus program"
    },
  ];

  return (
    <div className="container mx-auto px-6 py-24 min-h-screen flex flex-col items-center justify-center">
      <h2 className="text-6xl font-extrabold text-white mb-20 text-center tracking-tight bg-gradient-to-r from-white via-gray-100 to-white bg-clip-text text-transparent">
        Honors & Awards
      </h2>
      <div className="space-y-6 w-full max-w-4xl">
        {content.map((award, index) => (
          <CSSTransition
            key={index}
            in={true}
            timeout={500 + index * 100}
            classNames="fade"
            unmountOnExit
          >
            <div 
              className="group bg-gradient-to-br from-gray-900/80 to-gray-800/60 backdrop-blur-sm p-8 rounded-2xl shadow-xl border border-gray-700/30 hover:border-teal-400/30 transition-all duration-500 hover:shadow-2xl hover:scale-[1.02]"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                <h3 className="text-2xl font-bold text-transparent bg-gradient-to-r from-teal-400 via-blue-400 to-green-400 bg-clip-text mb-2 md:mb-0">
                  {award.title}
                </h3>
                <div className="bg-gray-800/60 backdrop-blur-sm px-4 py-2 rounded-lg border border-gray-600/30">
                  <span className="text-lg text-gray-300 font-medium">{award.period}</span>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="w-2 h-2 bg-gradient-to-r from-teal-400 to-blue-400 rounded-full mt-2.5 group-hover:scale-125 transition-transform duration-300"></div>
                <p className="text-lg text-gray-200 leading-relaxed group-hover:text-white transition-colors duration-300">
                  {award.description}
                </p>
              </div>
            </div>
          </CSSTransition>
        ))}
      </div>
    </div>
  );
}
