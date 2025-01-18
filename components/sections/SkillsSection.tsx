'use client';

import { CSSTransition } from 'react-transition-group';

export default function SkillsSection() {
  const content = {
    languages: [
      { name: 'Python', icon: '' },
      { name: 'Java', icon: '' },
      { name: 'JavaScript', icon: '' },
      { name: 'C++', icon: '' },
      { name: 'TypeScript', icon: '' },
      { name: 'HTML', icon: '' },
      { name: 'CSS', icon: '' },
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
    nlpTech: [
      'Transformer Models (BERT, GPT, etc.)',
      'Data Mining',
      'Fine Tuning',
      'Text Classification',
      'Named Entity Recognition (NER)',
      'Sentiment Analysis',
    ],
  };

  return (
    <div className="container mx-auto px-6 py-24 min-h-screen">
      <h2 className="text-5xl font-extrabold text-white mb-16 text-center tracking-tight uppercase">
        Tech Stack & NLP Expertise
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
        {/* NLP & Machine Learning */}
        <SkillCategory
          title="NLP & Machine Learning"
          items={content.nlpTech.map((tech) => ({ name: tech, icon: '' }))}
        />
        {/* Languages */}
        <SkillCategory title="Languages" items={content.languages} />
        {/* Frameworks */}
        <SkillCategory
          title="Frameworks"
          items={content.frameworks.map((framework) => ({
            name: framework,
            icon: '',
          }))}
        />
        {/* Tools */}
        <SkillCategory
          title="Tools"
          items={content.tools.map((tool) => ({ name: tool, icon: '' }))}
        />
        {/* Skills */}
        <SkillCategory
          title="Skills"
          items={content.skills.map((skill) => ({ name: skill, icon: '' }))}
        />
        {/* Methodologies */}
        <SkillCategory
          title="Methodologies"
          items={content.methodologies.map((methodology) => ({
            name: methodology,
            icon: '',
          }))}
        />
        {/* Operating Systems */}
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
    <CSSTransition in={true} timeout={500} classNames="fade" unmountOnExit>
      <div className="bg-gray-900 p-8 rounded-xl shadow-md hover:shadow-2xl transition-shadow duration-300 ease-in-out">
        <h3 className="text-2xl font-bold text-teal-400 mb-6 border-b border-gray-700 pb-3">
          {title}
        </h3>
        <ul className="space-y-3">
          {items.map((item, index) => (
            <li
              key={index}
              className="text-lg text-gray-300 flex items-center gap-3 hover:text-white transition-colors duration-200"
            >
              {item.icon && (
                <img src={item.icon} alt={item.name} className="w-6 h-6" />
              )}
              <span className="font-semibold">{item.name}</span>
            </li>
          ))}
        </ul>
      </div>
    </CSSTransition>
  );
}
