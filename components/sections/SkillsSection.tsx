import { SkillsContent } from '@/types';

export default function SkillsSection({ content }: { content: SkillsContent }) {
  console.log('SkillsSection content:', content); // 값 확인
  return (
    <div className="container mx-auto px-6 py-24">
      <h2 className="text-5xl font-extrabold text-white mb-16 text-center tracking-tight">
        Tech Stack
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        <SkillCategory title="Languages" items={content.languages} />
        <SkillCategory title="Frameworks" items={content.frameworks} />
        <SkillCategory title="Tools" items={content.tools} />
        <SkillCategory title="Skills" items={content.skills} />
        <SkillCategory title="Methodologies" items={content.methodologies} />
        <SkillCategory
          title="Operating Systems"
          items={content.operatingSystems}
        />
      </div>
    </div>
  );
}

function SkillCategory({ title, items }: { title: string; items: string[] }) {
  return (
    <div className="bg-gray-900 p-8 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 ease-in-out">
      <h3 className="text-2xl font-bold text-teal-400 mb-6 border-b border-gray-700 pb-3">
        {title}
      </h3>
      <ul className="space-y-3">
        {items.map((item, index) => (
          <li
            key={index}
            className="text-lg text-gray-300 flex items-center gap-3 hover:text-white transition-colors duration-200"
          >
            <span className="text-xl font-bold">•</span>
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}
