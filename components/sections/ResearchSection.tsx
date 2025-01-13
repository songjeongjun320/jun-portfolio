import { Research } from '@/types';

export default function ResearchSection({ content }: { content: Research[] }) {
  return (
    <div
      className="container mx-auto px-6 py-24 min-h-screen
     flex flex-col items-center justify-center bg-gradient-to-b bg-gradient-to-r from-gray-900"
    >
      {' '}
      <h2 className="text-5xl font-extrabold text-white mb-16 text-center tracking-tight">
        Research Interests
      </h2>
      <div className="space-y-10 w-full md:w-4/5 lg:w-3/5">
        {content.map((research, index) => (
          <div
            key={index}
            className="bg-gray-900 p-8 rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300"
          >
            <h3 className="text-3xl text-teal-400 font-semibold mb-6">
              {research.title}
            </h3>
            <ul className="space-y-4 text-gray-300 list-inside">
              {research.details.map((detail, i) => (
                <li key={i} className="flex items-start gap-4">
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
