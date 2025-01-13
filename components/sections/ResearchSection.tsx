import { Research } from '@/types';

export default function ResearchSection({ content }: { content: Research[] }) {
  return (
    <div className="container mx-auto px-2 py-32">
      <h2 className="text-4xl font-bold text-white mb-12 text-center">Research Interests</h2>
      <div className="space-y-8">
        {content.map((research, index) => (
          <div
            key={index}
            className="bg-gray-800 p-6 rounded-lg shadow-lg max-w-[70%] mx-auto"
          >
            <h3 className="text-3xl font-bold text-white mb-4">{research.title}</h3>
            <ul className="space-y-2 text-white">
              {research.details.map((detail, i) => (
                <li key={i} className="flex items-start gap-2">
                  <span className="text-xl">•</span>
                  <p className="text-lg">{detail}</p>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}
