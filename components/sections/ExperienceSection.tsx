import { Experience } from '@/types';

export default function ExperienceSection({ content }: { content: Experience[] }) {
    console.log('ExperienceSection content:', content);
  return (
    <div className="max-w-4xl mx-auto space-y-6">
      {content.map((exp, index) => (
        <div
          key={index}
          className="experience-box bg-gray-800 p-6 rounded-lg shadow-md"
        >
          <h3 className="experience-title text-2xl font-bold mb-2">{exp.company}</h3>
          <div className="experience-subtitle text-lg flex items-center mb-4">
            <span>{exp.role}</span>
            <span className="text-gray-400 mx-2">|</span>
            <span>{exp.period}</span>
          </div>
          <ul className="experience-details list-disc list-inside space-y-2">
            {exp.details.map((detail, i) => (
              <li key={i} className="experience-detail-item text-base">
                <span>{detail}</span>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}

