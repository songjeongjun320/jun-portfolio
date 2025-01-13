import { MilitaryService } from '@/types';

export default function MilitarySection({ content }: { content: MilitaryService[] }) {
    console.log('IntroSection content:', content);

  return (
    <div className="container mx-auto px-4 py-20">
      <h2 className="text-4xl font-bold text-white mb-12 text-center">Military Service</h2>
      <div className="space-y-8">
        {content.map((service, index) => (
          <div
            key={index}
            className="bg-gray-800 p-6 rounded-lg shadow-lg max-w-[80%] mx-auto"
          >
            <h3 className="text-3xl font-bold text-white mb-4">{service.title}</h3>
            <ul className="space-y-2 text-white">
              {service.content.map((detail, i) => (
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

