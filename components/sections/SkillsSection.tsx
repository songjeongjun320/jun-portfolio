export default function SkillsSection() {
  const content = {
    languages: [
      { name: 'Python', icon: 'python-icon' },
      { name: 'Java', icon: 'java-icon' },
      { name: 'JavaScript', icon: 'javascript-icon' },
      { name: 'C++', icon: 'cpp-icon' },
      { name: 'TypeScript', icon: 'typescript-icon' },
      { name: 'HTML', icon: 'html-icon' },
      { name: 'CSS', icon: 'css-icon' },
    ],
    frameworks: ['Next.js', 'React', 'React Query', 'Flask'],
    tools: ['Supabase', 'Git', 'AWS', 'YOLO', 'Jira', 'Linux'],
    skills: [
      'Full Stack Development',
      'Agile Development',
      'Data Structures and Algorithms',
      'Software Engineering',
      'QA Testing',
      'Computer Architecture',
    ],
    methodologies: ['REST API', 'Agile'],
    operatingSystems: ['Linux'],
  };

  return (
    <div className="container mx-auto px-6 py-24">
      <h2 className="text-5xl font-extrabold text-white mb-16 text-center tracking-tight">
        Tech Stack
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        <SkillCategory title="Languages" items={content.languages} />
        <SkillCategory
          title="Frameworks"
          items={content.frameworks.map((framework) => ({
            name: framework,
            icon: '',
          }))}
        />
        <SkillCategory
          title="Tools"
          items={content.tools.map((tool) => ({ name: tool, icon: '' }))}
        />
        <SkillCategory
          title="Skills"
          items={content.skills.map((skill) => ({ name: skill, icon: '' }))}
        />
        <SkillCategory
          title="Methodologies"
          items={content.methodologies.map((methodology) => ({
            name: methodology,
            icon: '',
          }))}
        />
        <SkillCategory
          title="Operating Systems"
          items={content.operatingSystems.map((os) => ({ name: os, icon: '' }))}
        />
      </div>
    </div>
  );
}

function SkillCategory({
  title,
  items,
}: {
  title: string;
  items: { name: string; icon: string }[];
}) {
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
            <img src={item.icon} alt={item.name} className="w-6 h-6" />
            {item.name}
          </li>
        ))}
      </ul>
    </div>
  );
}
