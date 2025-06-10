'use client';

import { CSSTransition } from 'react-transition-group';

export default function SkillsSection() {
  const content = {
    languages: ['Python', 'Java', 'JavaScript', 'C++', 'TypeScript', 'HTML', 'CSS'],
    frameworks: ['Next.js', 'React', 'React Query', 'Flask', 'REST API'],
    tools: ['n8n', 'Supabase', 'Git', 'AWS', 'YOLO', 'Jira', 'Linux'],
  };

  return (
    <div className="container mx-auto px-6 py-24 min-h-screen flex flex-col items-center justify-center">
      <h2 className="text-6xl font-extrabold text-white mb-20 text-center tracking-tight bg-gradient-to-r from-white via-gray-100 to-white bg-clip-text text-transparent">
        Technical Skills
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full max-w-6xl">
        {/* Languages */}
        <SkillCategory title="Languages" items={content.languages} />
        
        {/* Frameworks */}
        <SkillCategory title="Frameworks" items={content.frameworks} />
        
        {/* Tools */}
        <SkillCategory title="Tools" items={content.tools} />
      </div>
    </div>
  );
}

function SkillCategory({
  title,
  items,
}: {
  title: string;
  items: string[];
}) {
  return (
    <CSSTransition in={true} timeout={500} classNames="fade" unmountOnExit>
      <div className="group bg-gradient-to-br from-gray-900/80 to-gray-800/60 backdrop-blur-sm p-8 rounded-2xl shadow-xl border border-gray-700/30 hover:border-teal-400/30 transition-all duration-500 hover:shadow-2xl hover:scale-[1.02]">
        <h3 className="text-2xl font-bold text-transparent bg-gradient-to-r from-teal-400 via-blue-400 to-green-400 bg-clip-text mb-6 text-center">
          {title}
        </h3>
        <div className="space-y-3">
          {items.map((item, index) => (
            <div
              key={index}
              className="flex items-center gap-3 p-3 bg-gray-800/40 backdrop-blur-sm rounded-lg border border-gray-700/20 hover:border-teal-400/30 transition-all duration-300 group/item"
            >
              <div className="w-2 h-2 bg-gradient-to-r from-teal-400 to-blue-400 rounded-full group-hover/item:scale-125 transition-transform duration-300"></div>
              <span className="text-gray-200 font-medium group-hover/item:text-white transition-colors duration-300">
                {item}
              </span>
            </div>
          ))}
        </div>
      </div>
    </CSSTransition>
  );
}
