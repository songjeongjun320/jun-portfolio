'use client';

import { CSSTransition } from 'react-transition-group';
import { SiPython, SiJavascript, SiTypescript, SiNextdotjs, SiReact, SiFlask, SiN8N, SiSupabase, SiGit, SiAmazon, SiLinux } from 'react-icons/si';
import { FaRobot, FaArrowLeft } from 'react-icons/fa';

interface SkillsSectionProps {
  onBack: () => void;
}

export default function SkillsSection({ onBack }: SkillsSectionProps) {
  const content = {
    languages: [
      { name: 'Python', icon: <SiPython className="text-[clamp(1.2rem,2.5vw,2rem)] text-[#3776AB]" /> },
      { name: 'JavaScript', icon: <SiJavascript className="text-[clamp(1.2rem,2.5vw,2rem)] text-[#F7DF1E]" /> },
      { name: 'TypeScript', icon: <SiTypescript className="text-[clamp(1.2rem,2.5vw,2rem)] text-[#3178C6]" /> },
    ],
    frameworks: [
      { name: 'Next.js', icon: <SiNextdotjs className="text-[clamp(1.2rem,2.5vw,2rem)] text-black" /> },
      { name: 'React', icon: <SiReact className="text-[clamp(1.2rem,2.5vw,2rem)] text-[#61DAFB]" /> },
      { name: 'Flask', icon: <SiFlask className="text-[clamp(1.2rem,2.5vw,2rem)] text-black" /> },
      { name: 'REST API', icon: <span className="text-[clamp(1.2rem,2.5vw,2rem)] text-gray-500">🌐</span> },
    ],
    tools: [
      { name: 'n8n', icon: <SiN8N className="text-[clamp(1.2rem,2.5vw,2rem)] text-[#EF7C28]" /> },
      { name: 'Supabase', icon: <SiSupabase className="text-[clamp(1.2rem,2.5vw,2rem)] text-[#3ECF8E]" /> },
      { name: 'Git', icon: <SiGit className="text-[clamp(1.2rem,2.5vw,2rem)] text-[#F05032]" /> },
      { name: 'AWS', icon: <SiAmazon className="text-[clamp(1.2rem,2.5vw,2rem)] text-[#FF9900]" /> },
      { name: 'YOLO', icon: <FaRobot className="text-[clamp(1.2rem,2.5vw,2rem)] text-blue-400" /> },
      { name: 'Linux', icon: <SiLinux className="text-[clamp(1.2rem,2.5vw,2rem)] text-[#FCC624]" /> },
    ],
  };

  return (
    <div className="w-screen flex flex-col items-center justify-center bg-gradient-to-br from-[#f7faff] via-[#e7f0fd] to-[#e3e9fc] px-[clamp(0.5rem,3vw,2.5rem)] py-[clamp(1rem,6vw,4rem)] min-h-screen">
      {/* Back Button */}
      <button
        onClick={onBack}
        className="fixed top-6 left-6 z-50 bg-white shadow-lg rounded-4xl p-3 hover:shadow-xl transition-shadow duration-300 border border-blue-200"
      >
        <FaArrowLeft className="text-blue-600 text-xl" />
      </button>
      
      <h2 className="text-[clamp(2rem,5vw,3.5rem)] font-extrabold text-[#1877F2] mb-[clamp(1rem,4vw,3rem)] text-center tracking-tight">
        Technical Skills
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-[clamp(0.5rem,2vw,2.5rem)] w-full max-w-6xl">
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
  items: { name: string; icon: JSX.Element }[];
}) {
  return (
    <CSSTransition in={true} timeout={500} classNames="fade" unmountOnExit>
                    <div className="group bg-white/90 p-[clamp(1rem,3vw,2.5rem)] rounded-4xl shadow-2xl border-2 border-blue-100 hover:border-[#1877F2] transition-all duration-500 hover:shadow-2xl hover:scale-[1.02] flex flex-col items-center">
        <h3 className="text-[clamp(1.1rem,2vw,1.7rem)] font-extrabold text-[#1877F2] mb-[clamp(0.7rem,2vw,1.5rem)] text-center">
          {title}
        </h3>
        <div className="space-y-[clamp(0.3rem,1vw,1rem)] w-full">
          {items.map((item, index) => (
            <div
              key={index}
                              className="flex items-center gap-4 p-[clamp(0.5rem,1.5vw,1.2rem)] bg-[#e3e9fc] rounded-4xl border border-blue-100 hover:border-[#1877F2] transition-all duration-300 group/item w-full"
            >
              <div>{item.icon}</div>
              <span className="text-gray-800 font-medium group-hover/item:text-[#1877F2] transition-colors duration-300 text-[clamp(0.95rem,1.5vw,1.15rem)]">
                {item.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </CSSTransition>
  );
}
