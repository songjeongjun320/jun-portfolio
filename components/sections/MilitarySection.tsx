import { MilitaryService } from '@/types';

export default function MilitarySection({ content }: { content: MilitaryService[] }) {
  return (
    <div className="container mx-auto px-4 py-20 bg-gradient-to-r from-gray-900">
      <h2 className="text-4xl font-extrabold text-white mb-16 text-center tracking-tight">
        Military Service
      </h2>
      <div className="space-y-12">
        {content.map((service, index) => (
          <div
            key={index}
            className="bg-gray-800 p-8 rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300 max-w-4xl mx-auto"
          >
            <h3 className="text-3xl font-semibold text-white mb-6 border-b-2 border-gray-600 pb-2">
              {service.title}
            </h3>
            <ul className="space-y-4 text-gray-300">
              {service.content.map((detail, i) => (
                <li key={i} className="flex items-start gap-3">
                  <span className="text-xl text-blue-400 font-bold">•</span>
                  <p className="text-lg leading-relaxed">{detail}</p>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}
