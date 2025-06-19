import { FaArrowLeft } from 'react-icons/fa';

interface ExperienceSectionProps {
  onBack: () => void;
}

export default function ExperienceSection({ onBack }: ExperienceSectionProps) {
  const content = [
    {
      role: 'Research Assistant in NLP/ML',
      company: 'ASU ARC LAB',
      period: 'Dec 2024 - Present',
      details: [
        'Participating in ARC Research Lab under Assistant Professor Ben Zhou at Arizona State University.',
        'Leading research on whether Large Language Models (LLMs) can independently learn and infer human language when provided with contextual and auditory information.'
      ],
    },
    {
      role: 'Research Aide',
      company: 'Arizona State University',
      period: 'May 2024 - Dec 2024',
      details: [
        'Leading ML Insights project: Optimizing object detection and developing cost-effective OCR solutions',
        'Building Full-Stack website using Next.js, Flask, Supabase, and AWS',
        'Achieved 95% code coverage through automated unit testing implementation',
      ],
    },
    {
      role: 'Software Engineering Intern',
      company: 'NGL Transportation INC',
      period: 'Jan 2022 - Jan 2023',
      details: [
        'Reduced truck gate processing time from 5 min to 5-10 sec by implementing OCR system',
        'Improved image detection accuracy by 20% through YOLOv5 model refinement',
        'Managed 10,000+ daily data transactions using PostgreSQL and AWS S3',
      ],
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
        Professional Experience
      </h2>
      <div className="flex flex-col items-center gap-[clamp(0.7rem,2vw,1.5rem)] w-full">
        {content.map((exp, index) => (
          <div
            key={index}
            className="group bg-white/90 w-full min-w-[clamp(250px,40vw,700px)] max-w-[clamp(300px,90vw,1200px)] p-[clamp(1rem,3vw,2.5rem)] rounded-4xl shadow-2xl border-2 border-blue-100 hover:border-[#1877F2] transition-all duration-500 hover:shadow-2xl hover:scale-[1.02]"
          >
            <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6 gap-[clamp(0.5rem,2vw,1.5rem)]">
              <div className="mb-4 md:mb-0">
                <h3 className="text-[clamp(1.3rem,2vw,2rem)] font-extrabold text-[#1877F2] mb-2">
                  {exp.company}
                </h3>
                <p className="text-[clamp(1.1rem,1.5vw,1.3rem)] font-semibold text-gray-800">{exp.role}</p>
              </div>
                              <div className="bg-[#e3e9fc] px-4 py-2 rounded-4xl border border-blue-100">
                <span className="text-[clamp(1rem,1.2vw,1.1rem)] text-[#1877F2] font-medium">{exp.period}</span>
              </div>
            </div>
            <div className="space-y-[clamp(0.3rem,1vw,1rem)]">
              {exp.details.map((detail, i) => (
                <div key={i} className="flex items-start gap-4 group/item">
                  <div className="w-2 h-2 bg-[#1877F2] rounded-full mt-2.5 group-hover/item:scale-125 transition-transform duration-300"></div>
                  <p className="text-[clamp(0.95rem,1.5vw,1.15rem)] text-gray-700 leading-relaxed group-hover/item:text-[#1877F2] transition-colors duration-300">
                    {detail}
                  </p>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
