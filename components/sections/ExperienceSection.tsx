import { FaArrowLeft } from 'react-icons/fa';

interface ExperienceSectionProps {
  onBack: () => void;
}

export default function ExperienceSection({ onBack }: ExperienceSectionProps) {
  const content = [
    {
      role: 'AI Full Stack Engineer',
      company: 'RapidFlare, Inc.',
      period: 'Oct 2025 - Present',
      location: 'San Francisco, CA',
      technologies: ['Next.js', 'Python', 'LangChain', 'RAG', 'Elastic Cloud', 'GCP', 'Supabase', 'Git'],
      details: [
        'Architected versioned Elastic Cloud schema for RAG pipeline, enabling analytics, QA workflows, and interactive features.',
        'Implemented LangChain-driven reasoning chains to create customer-tailored RAG agents for smarter automation.',
      ],
    },
    {
      role: 'Research Assistant',
      company: 'ASU ARC LAB',
      period: 'Dec 2024 - Present',
      location: 'Tempe, AZ',
      technologies: ['HPC', 'Python', 'Linux', 'Data Mining', 'Huggingface'],
      details: [
        'Conducted research under Prof. Ben Zhou, enhancing multilingual capabilities of language models.',
        'Trained and deployed models in an HPC environment, optimizing efficiency and scalability.',
        'Led research design and analysis for data mining and model training.',
      ],
    },
    {
      role: 'Research Aide – Software Engineering Role',
      company: 'Arizona State University',
      period: 'May 2024 - Dec 2024',
      location: 'Tempe, AZ',
      technologies: ['Next.js', 'Flask', 'JavaScript', 'Supabase', 'AWS Textract', 'YOLOv8', 'Git'],
      details: [
        'Built a Full-Stack website leveraging Next.js, Flask, JavaScript, Supabase, AWS Textract API and YOLOv8.',
        'Reduced truck gate processing time from 5 minutes to 5-10 seconds by implementing an OCR-based system.',
      ],
    },
    {
      role: 'Python & AI Tutor',
      company: 'ELICE',
      period: 'Jan 2023 - July 2024',
      location: 'Seoul, South Korea',
      technologies: ['Machine Learning', 'AI', 'Python'],
      details: [
        'Taught Python and AI programming to high school students, focusing on foundational concepts and practical applications.',
        'Enhanced students\' problem-solving skills through real-world examples and projects.',
      ],
    },
    {
      role: 'Software Engineering Intern',
      company: 'NGL Transportation INC',
      period: 'Jan 2022 - Jan 2023',
      location: 'Phoenix, AZ',
      technologies: ['Machine Learning', 'Python', 'Automation', 'AWS', 'SQL'],
      details: [
        'Developed and optimized a Yard Management System (YMS) leveraging machine learning for real-time tracking.',
        'Managed 10,000+ daily data transactions using SQL and AWS S3, ensuring secure, scalable, and efficient data storage.',
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
                <p className="text-[clamp(1.1rem,1.5vw,1.3rem)] font-semibold text-gray-800">
                  {exp.role}
                </p>
                {exp.location && (
                  <p className="text-[clamp(0.9rem,1.2vw,1rem)] text-gray-600 mt-1">
                    📍 {exp.location}
                  </p>
                )}
              </div>
              <div className="bg-[#e3e9fc] px-4 py-2 rounded-4xl border border-blue-100">
                <span className="text-[clamp(1rem,1.2vw,1.1rem)] text-[#1877F2] font-medium">
                  {exp.period}
                </span>
              </div>
            </div>
            {exp.technologies && exp.technologies.length > 0 && (
              <div className="mb-4 flex flex-wrap gap-2">
                {exp.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="bg-gradient-to-r from-[#1877F2] to-[#4a9eff] text-white px-3 py-1 rounded-full text-[clamp(0.75rem,1vw,0.9rem)] font-medium shadow-sm"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            )}
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
