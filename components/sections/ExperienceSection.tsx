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
      <h2 className="text-5xl font-extrabold text-white mb-16 text-center tracking-tight">
        Professional Experience
      </h2>
      <div className="space-y-8 w-full md:w-4/5 lg:w-3/5">
        {content.map((exp, index) => (
          <div
            key={index}
            className="bg-gray-900 p-8 rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300"
          >
            <h3 className="text-3xl font-semibold text-teal-400 mb-3">{exp.company}</h3>
            <div className="text-lg text-gray-400 flex items-center mb-6 space-x-4">
              <span className="font-semibold text-white">{exp.role}</span>
              <span className="text-gray-500">|</span>
              <span className="text-gray-500">{exp.period}</span>
            </div>
            <ul className="list-disc list-inside space-y-3 text-gray-300">
              {exp.details.map((detail, i) => (
                <li key={i} className="text-base">
                  {detail}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}
