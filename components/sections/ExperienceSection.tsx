import { Experience } from '@/types';

export default function ExperienceSection({
  content,
}: {
  content: Experience[];
}) {
  return (
    <div className="container mx-auto px-6 py-24 min-h-screen
     flex flex-col items-center justify-center bg-gradient-to-b bg-gradient-to-r from-gray-900">
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
