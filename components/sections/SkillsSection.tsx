import { SkillsContent } from '@/types';

export default function SkillsSection({ content }: { content: SkillsContent }) {
  return (
    <div className="container mx-auto px-4 py-20">
      <h2 className="text-4xl font-bold text-white mb-12 text-center">Tech Stack</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
        <SkillCategory title="Languages" items={content.languages} />
        <SkillCategory title="Frameworks" items={content.frameworks} />
        <SkillCategory title="Tools" items={content.tools} />
        <SkillCategory title="Skills" items={content.skills} />
        <SkillCategory title="Methodologies" items={content.methodologies} />
        <SkillCategory title="Operating Systems" items={content.operatingSystems} />
      </div>
    </div>
  );
}

function SkillCategory({ title, items }: { title: string; items: string[] }) {
  return (
    <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
      <h3 className="text-2xl font-bold text-white mb-4">{title}</h3>
      <ul className="space-y-2">
        {items.map((item, index) => (
          <li key={index} className="text-white text-lg">{item}</li>
        ))}
      </ul>
    </div>
  );
}

