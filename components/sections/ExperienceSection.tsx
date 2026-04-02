import { FaArrowLeft } from 'react-icons/fa';

interface ExperienceSectionProps {
  onBack: () => void;
}

export default function ExperienceSection({ onBack }: ExperienceSectionProps) {
  const content = [
    {
      role: 'AI Full Stack Engineer',
      company: 'Rapidflare, Inc.',
      period: 'Oct 2025 - Present',
      location: 'San Francisco, CA',
      technologies: ['Next.js', 'Python', 'LangChain', 'RAG', 'Elastic Cloud', 'GCP', 'Supabase', 'Git'],
      details: [
        'Led end-to-end enterprise client engagements for major semiconductor and AI chip enterprise clients — from contract negotiation and customer onboarding to weekly stakeholder meetings, feedback integration, and iterative product delivery',
        'Architected a multi-tenant AI agent gateway serving 10+ enterprise customers across 3 interaction channels (Discord, Email, Web Copilot), with OAuth2 auth, multi-turn conversation threading, and distributed locking via Redis + Elasticsearch',
        'Designed a real-time AI content safety pipeline with zero-added-latency parallel execution, multi-turn jailbreak detection, and customer-configurable policies — adopted across all enterprise accounts',
        'Built an extensible cron job platform on GCP Cloud Run Jobs with automated Slack notification routing across 10+ customer channels, plus real-time data ingestion monitoring UX with cancellation workflows and progress tracking',
        'Designed Elasticsearch conversation schema evolution with zero-downtime migration tooling, custom AST linter for deprecated field detection, and dual-path aggregation support',
        'Built an automated AI QA pipeline detecting broken references and runtime errors in real-time, and integrated Gemini grounding API for web-search-enriched copilot responses with inline citations',
      ],
    },
    {
      role: 'Research Assistant',
      company: 'ARC Lab',
      period: 'Dec 2024 - Present',
      location: 'Tempe, AZ',
      technologies: ['HPC', 'Python', 'Linux', 'Data Mining', 'Huggingface'],
      details: [
        'Conducting research under Prof. Ben Zhou, enhancing multilingual capabilities of language models through data mining and model training in an HPC environment',
        'Leading research design and analysis for model training and evaluation, optimizing efficiency and scalability across distributed GPU clusters',
      ],
    },
    {
      role: 'Research Aide – Software Engineering Role',
      company: 'Arizona State University',
      period: 'May 2024 - Dec 2024',
      location: 'Tempe, AZ',
      technologies: ['Full-stack', 'Next.js', 'Supabase', 'YOLO', 'Git'],
      details: [
        'Built a Full-Stack OCR system using Next.js, Flask, AWS Textract, and YOLOv8, reducing truck gate processing time from 5 minutes to 5-10 seconds',
      ],
    },
    {
      role: 'Software Engineering Intern',
      company: 'NGL Transportation INC',
      period: 'Jan 2022 - Jan 2023',
      location: 'Phoenix, AZ',
      technologies: ['Machine Learning', 'Python', 'Automation', 'AWS'],
      details: [
        'Developed and optimized a Yard Management System (YMS) leveraging machine learning for real-time tracking, managing 1,000+ daily transactions via SQL and AWS S3',
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
                {exp.technologies.map((tech, techIndex) => (
                  <span
                    key={techIndex}
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
