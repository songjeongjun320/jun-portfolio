export default function ExperienceSection() {
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
    <div className="container mx-auto px-6 py-24 min-h-screen flex flex-col items-center justify-center">
      <h2 className="text-6xl font-extrabold text-white mb-20 text-center tracking-tight bg-gradient-to-r from-white via-gray-100 to-white bg-clip-text text-transparent">
        Professional Experience
      </h2>
      <div className="space-y-8 w-full max-w-5xl">
        {content.map((exp, index) => (
          <div
            key={index}
            className="group bg-gradient-to-br from-gray-900/80 to-gray-800/60 backdrop-blur-sm p-8 rounded-2xl shadow-xl border border-gray-700/30 hover:border-teal-400/30 transition-all duration-500 hover:shadow-2xl hover:scale-[1.02]"
          >
            <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6">
              <div className="mb-4 md:mb-0">
                <h3 className="text-3xl font-bold text-transparent bg-gradient-to-r from-teal-400 via-blue-400 to-green-400 bg-clip-text mb-2">
                  {exp.company}
                </h3>
                <p className="text-xl font-semibold text-white">{exp.role}</p>
              </div>
              <div className="bg-gray-800/60 backdrop-blur-sm px-4 py-2 rounded-lg border border-gray-600/30">
                <span className="text-lg text-gray-300 font-medium">{exp.period}</span>
              </div>
            </div>
            
            <div className="space-y-4">
              {exp.details.map((detail, i) => (
                <div key={i} className="flex items-start gap-4 group/item">
                  <div className="w-2 h-2 bg-gradient-to-r from-teal-400 to-blue-400 rounded-full mt-2.5 group-hover/item:scale-125 transition-transform duration-300"></div>
                  <p className="text-lg text-gray-200 leading-relaxed group-hover/item:text-white transition-colors duration-300">
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
