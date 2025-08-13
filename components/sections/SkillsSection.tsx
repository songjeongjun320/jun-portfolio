'use client';

import { CSSTransition } from 'react-transition-group';
import {
  SiPython,
  SiJavascript,
  SiTypescript,
  SiNextdotjs,
  SiReact,
  SiFlask,
  SiN8N,
  SiSupabase,
  SiGit,
  SiAmazon,
  SiLinux,
  SiOpenai,
  SiHuggingface,
} from 'react-icons/si';
import {
  FaRobot,
  FaArrowLeft,
  FaDatabase,
  FaCode,
  FaServer,
  FaCogs,
  FaUser,
  FaBrain,
  FaGem,
} from 'react-icons/fa';

interface SkillsSectionProps {
  onBack: () => void;
}

export default function SkillsSection({ onBack }: SkillsSectionProps) {
  const techStacks = {
    devops: {
      title: 'DevOps & Infrastructure',
      icon: <FaCogs className="text-2xl text-orange-500" />,
      skills: [
        {
          name: 'AWS',
          icon: (
            <SiAmazon className="text-[clamp(1.2rem,2.5vw,2rem)] text-[#FF9900]" />
          ),
        },
        {
          name: 'Git',
          icon: (
            <SiGit className="text-[clamp(1.2rem,2.5vw,2rem)] text-[#F05032]" />
          ),
        },
        {
          name: 'Linux',
          icon: (
            <SiLinux className="text-[clamp(1.2rem,2.5vw,2rem)] text-[#FCC624]" />
          ),
        },
      ],
    },
    frontend: {
      title: 'Frontend Tech Stacks',
      icon: <FaCode className="text-2xl text-blue-500" />,
      skills: [
        {
          name: 'Next.js',
          icon: (
            <SiNextdotjs className="text-[clamp(1.2rem,2.5vw,2rem)] text-black" />
          ),
        },
        {
          name: 'React',
          icon: (
            <SiReact className="text-[clamp(1.2rem,2.5vw,2rem)] text-[#61DAFB]" />
          ),
        },
        {
          name: 'TypeScript',
          icon: (
            <SiTypescript className="text-[clamp(1.2rem,2.5vw,2rem)] text-[#3178C6]" />
          ),
        },
        {
          name: 'JavaScript',
          icon: (
            <SiJavascript className="text-[clamp(1.2rem,2.5vw,2rem)] text-[#F7DF1E]" />
          ),
        },
      ],
    },
    backend: {
      title: 'Backend',
      icon: <FaServer className="text-2xl text-green-500" />,
      skills: [
        {
          name: 'Python',
          icon: (
            <SiPython className="text-[clamp(1.2rem,2.5vw,2rem)] text-[#3776AB]" />
          ),
        },
        {
          name: 'Flask',
          icon: (
            <SiFlask className="text-[clamp(1.2rem,2.5vw,2rem)] text-black" />
          ),
        },
        {
          name: 'REST API',
          icon: (
            <span className="text-[clamp(1.2rem,2.5vw,2rem)] text-gray-500">
              🌐
            </span>
          ),
        },
        {
          name: 'Node.js',
          icon: (
            <span className="text-[clamp(1.2rem,2.5vw,2rem)] text-green-600">
              ⬢
            </span>
          ),
        },
      ],
    },
    database: {
      title: 'Database Framework',
      icon: <FaDatabase className="text-2xl text-cyan-500" />,
      skills: [
        {
          name: 'Supabase',
          icon: (
            <SiSupabase className="text-[clamp(1.2rem,2.5vw,2rem)] text-[#3ECF8E]" />
          ),
        },
      ],
    },
    automation: {
      title: 'Automation & Integration',
      icon: <FaCogs className="text-2xl text-red-500" />,
      skills: [
        {
          name: 'AI Agent Tool',
          icon: (
            <FaRobot className="text-[clamp(1.2rem,2.5vw,2rem)] text-indigo-500" />
          ),
        },
        {
          name: 'n8n',
          icon: (
            <SiN8N className="text-[clamp(1.2rem,2.5vw,2rem)] text-[#EF7C28]" />
          ),
        },
        {
          name: 'Langchain',
          icon: (
            <span className="text-[clamp(1.2rem,2.5vw,2rem)] text-green-500">
              🔗
            </span>
          ),
        },
      ],
    },
    aiml: {
      title: 'AI & Machine Learning Stack',
      icon: <FaBrain className="text-2xl text-purple-500" />,
      skills: [
        {
          name: 'OpenAI',
          icon: (
            <SiOpenai className="text-[clamp(1.2rem,2.5vw,2rem)] text-black" />
          ),
        },
        {
          name: 'Claude AI',
          icon: (
            <FaBrain className="text-[clamp(1.2rem,2.5vw,2rem)] text-orange-500" />
          ),
        },
        {
          name: 'Gemini',
          icon: (
            <FaGem className="text-[clamp(1.2rem,2.5vw,2rem)] text-blue-500" />
          ),
        },
        {
          name: 'Llama',
          icon: (
            <FaRobot className="text-[clamp(1.2rem,2.5vw,2rem)] text-purple-600" />
          ),
        },
        {
          name: 'HuggingFace',
          icon: (
            <SiHuggingface className="text-[clamp(1.2rem,2.5vw,2rem)] text-yellow-500" />
          ),
        },
        {
          name: 'YOLOv5~10',
          icon: (
            <FaRobot className="text-[clamp(1.2rem,2.5vw,2rem)] text-blue-400" />
          ),
        },
      ],
    },
  };

  return (
    <div className="w-screen flex flex-col items-center justify-center bg-gradient-to-br from-[#f7faff] via-[#e7f0fd] to-[#e3e9fc] px-[clamp(0.5rem,2vw,1.5rem)] py-[clamp(1rem,6vw,4rem)] min-h-screen">
      {/* Back Button */}
      <button
        onClick={onBack}
        className="fixed top-6 left-6 z-50 bg-white shadow-lg rounded-4xl p-3 hover:shadow-xl transition-shadow duration-300 border border-blue-200"
      >
        <FaArrowLeft className="text-blue-600 text-xl" />
      </button>

      {/* Title */}
      <div className="text-center mb-[clamp(2rem,4vw,3rem)]">
        <h2 className="text-[clamp(2.5rem,6vw,4rem)] font-extrabold text-[#1877F2] mb-4 tracking-tight">
          Tech Stack Architecture
        </h2>
        <div className="h-1 w-32 bg-gradient-to-r from-[#1877F2] to-[#42A5F5] mx-auto rounded-full"></div>
      </div>

      {/* Full Width Responsive Grid Layout */}
      <div className="w-full max-w-7xl mx-auto px-[clamp(1rem,3vw,2rem)]">
        <div className="grid grid-cols-1 lg:grid-cols-8 gap-[clamp(0.8rem,1.5vw,1.5rem)]">
          {/* Row 1, Columns 1-8 - AI & Machine Learning Stack */}
          <div className="lg:col-span-8 order-1 lg:order-none">
            <TechStackCard
              title={techStacks.aiml.title}
              icon={techStacks.aiml.icon}
              skills={techStacks.aiml.skills}
              delay={0}
              layout="horizontal"
            />
          </div>

          {/* Row 2, Columns 1-4 - Frontend Tech Stacks */}
          <div className="lg:col-span-4 order-2 lg:order-none">
            <TechStackCard
              title={techStacks.frontend.title}
              icon={techStacks.frontend.icon}
              skills={techStacks.frontend.skills}
              delay={100}
              layout="grid"
            />
          </div>

          {/* Row 2, Columns 5-8 - Backend */}
          <div className="lg:col-span-4 order-3 lg:order-none">
            <TechStackCard
              title={techStacks.backend.title}
              icon={techStacks.backend.icon}
              skills={techStacks.backend.skills}
              delay={200}
              layout="grid"
            />
          </div>

          {/* Row 3, Columns 1-2 - Database Framework */}
          <div className="lg:col-span-2 order-4 lg:order-none">
            <TechStackCard
              title={techStacks.database.title}
              icon={techStacks.database.icon}
              skills={techStacks.database.skills}
              delay={300}
              layout="compact"
            />
          </div>

          {/* Row 3, Columns 3-5 - Automation & Integration (3/8 = 37.5%) */}
          <div className="lg:col-span-3 order-5 lg:order-none">
            <TechStackCard
              title={techStacks.automation.title}
              icon={techStacks.automation.icon}
              skills={techStacks.automation.skills}
              delay={400}
              layout="custom-2-1"
            />
          </div>

          {/* Row 3, Columns 6-8 - DevOps & Infrastructure (3/8 = 37.5%) */}
          <div className="lg:col-span-3 order-6 lg:order-none">
            <TechStackCard
              title={techStacks.devops.title}
              icon={techStacks.devops.icon}
              skills={techStacks.devops.skills}
              delay={500}
              layout="grid"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

function TechStackCard({
  title,
  icon,
  skills,
  delay = 0,
  layout = 'vertical',
}: {
  title: string;
  icon: JSX.Element;
  skills: { name: string; icon: JSX.Element }[];
  delay?: number;
  layout?: 'vertical' | 'horizontal' | 'grid' | 'compact' | 'custom-2-1';
}) {
  const getSkillsLayout = () => {
    switch (layout) {
      case 'horizontal':
        return 'flex flex-wrap gap-[clamp(0.3rem,0.8vw,0.6rem)]';
      case 'grid':
        return 'grid grid-cols-2 gap-[clamp(0.3rem,0.8vw,0.6rem)]';
      case 'compact':
        return 'space-y-[clamp(0.2rem,0.6vw,0.5rem)]';
      case 'custom-2-1':
        return 'grid grid-cols-2 gap-[clamp(0.3rem,0.8vw,0.6rem)]';
      default:
        return 'space-y-[clamp(0.3rem,1vw,1rem)]';
    }
  };

  const getSkillItemClasses = () => {
    switch (layout) {
      case 'horizontal':
        return 'flex items-center gap-2 p-[clamp(0.4rem,1vw,0.8rem)] bg-[#e3e9fc] rounded-2xl border border-blue-100 hover:border-[#1877F2] transition-all duration-300 group/item flex-shrink-0 h-[clamp(2.5rem,4vw,3rem)]';
      case 'grid':
        return 'flex items-center gap-2 p-[clamp(0.4rem,1vw,0.8rem)] bg-[#e3e9fc] rounded-2xl border border-blue-100 hover:border-[#1877F2] transition-all duration-300 group/item h-[clamp(2.5rem,4vw,3rem)]';
      case 'compact':
        return 'flex items-center gap-3 p-[clamp(0.3rem,0.8vw,0.6rem)] bg-[#e3e9fc] rounded-2xl border border-blue-100 hover:border-[#1877F2] transition-all duration-300 group/item w-full h-[clamp(2.5rem,4vw,3rem)]';
      case 'custom-2-1':
        return 'flex items-center gap-2 p-[clamp(0.4rem,1vw,0.8rem)] bg-[#e3e9fc] rounded-2xl border border-blue-100 hover:border-[#1877F2] transition-all duration-300 group/item h-[clamp(2.5rem,4vw,3rem)]';
      default:
        return 'flex items-center gap-4 p-[clamp(0.5rem,1.5vw,1.2rem)] bg-[#e3e9fc] rounded-4xl border border-blue-100 hover:border-[#1877F2] transition-all duration-300 group/item w-full h-[clamp(2.5rem,4vw,3rem)]';
    }
  };

  // Custom rendering for 2-1 layout
  if (layout === 'custom-2-1') {
    return (
      <CSSTransition
        in={true}
        timeout={500 + delay}
        classNames="fade"
        unmountOnExit
      >
        <div
          className="group bg-white/90 p-[clamp(0.8rem,2vw,1.5rem)] rounded-4xl shadow-2xl border-2 border-blue-100 hover:border-[#1877F2] transition-all duration-500 hover:shadow-2xl hover:scale-[1.02] flex flex-col items-center relative overflow-hidden w-full h-full"
          style={{ animationDelay: `${delay}ms` }}
        >
          {/* Background Pattern */}
          <div className="absolute inset-0 opacity-5 bg-gradient-to-br from-[#1877F2] to-[#42A5F5]"></div>

          {/* Header */}
          <div className="flex items-center gap-2 mb-[clamp(0.5rem,1.2vw,1rem)] z-10">
            <div className="p-1.5 bg-gradient-to-r from-[#1877F2]/10 to-[#42A5F5]/10 rounded-xl">
              {icon}
            </div>
            <h3 className="text-[clamp(0.9rem,1.5vw,1.3rem)] font-extrabold text-[#1877F2] text-center">
              {title}
            </h3>
          </div>

          {/* Skills - Custom 2-1 Layout */}
          <div className="w-full z-10 flex-1 space-y-[clamp(0.3rem,0.8vw,0.6rem)]">
            {/* Top row - 2 items */}
            <div className="grid grid-cols-2 gap-[clamp(0.3rem,0.8vw,0.6rem)]">
              {skills.slice(0, 2).map((skill, index) => (
                <div
                  key={index}
                  className="flex items-center gap-2 p-[clamp(0.4rem,1vw,0.8rem)] bg-[#e3e9fc] rounded-2xl border border-blue-100 hover:border-[#1877F2] transition-all duration-300 group/item h-[clamp(2.5rem,4vw,3rem)]"
                >
                  <div className="flex-shrink-0">{skill.icon}</div>
                  <span className="text-gray-800 font-medium group-hover/item:text-[#1877F2] transition-colors duration-300 text-[clamp(0.8rem,1.2vw,1rem)] truncate">
                    {skill.name}
                  </span>
                </div>
              ))}
            </div>

            {/* Bottom row - 1 item with 50% width */}
            <div className="grid grid-cols-2 gap-[clamp(0.3rem,0.8vw,0.6rem)]">
              {skills.slice(2).map((skill, index) => (
                <div
                  key={index + 2}
                  className="flex items-center gap-2 p-[clamp(0.4rem,1vw,0.8rem)] bg-[#e3e9fc] rounded-2xl border border-blue-100 hover:border-[#1877F2] transition-all duration-300 group/item h-[clamp(2.5rem,4vw,3rem)]"
                >
                  <div className="flex-shrink-0">{skill.icon}</div>
                  <span className="text-gray-800 font-medium group-hover/item:text-[#1877F2] transition-colors duration-300 text-[clamp(0.8rem,1.2vw,1rem)] truncate">
                    {skill.name}
                  </span>
                </div>
              ))}
              {/* Empty div to maintain grid structure */}
              <div></div>
            </div>
          </div>

          {/* Skill Count Badge */}
          <div className="absolute top-2 right-2 bg-[#1877F2] text-white text-xs font-bold px-1.5 py-0.5 rounded-full z-10">
            {skills.length}
          </div>
        </div>
      </CSSTransition>
    );
  }

  return (
    <CSSTransition
      in={true}
      timeout={500 + delay}
      classNames="fade"
      unmountOnExit
    >
      <div
        className="group bg-white/90 p-[clamp(0.8rem,2vw,1.5rem)] rounded-4xl shadow-2xl border-2 border-blue-100 hover:border-[#1877F2] transition-all duration-500 hover:shadow-2xl hover:scale-[1.02] flex flex-col items-center relative overflow-hidden w-full h-full"
        style={{ animationDelay: `${delay}ms` }}
      >
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5 bg-gradient-to-br from-[#1877F2] to-[#42A5F5]"></div>

        {/* Header */}
        <div className="flex items-center gap-2 mb-[clamp(0.5rem,1.2vw,1rem)] z-10">
          <div className="p-1.5 bg-gradient-to-r from-[#1877F2]/10 to-[#42A5F5]/10 rounded-xl">
            {icon}
          </div>
          <h3 className="text-[clamp(0.9rem,1.5vw,1.3rem)] font-extrabold text-[#1877F2] text-center">
            {title}
          </h3>
        </div>

        {/* Skills */}
        <div className={`${getSkillsLayout()} w-full z-10 flex-1`}>
          {skills.map((skill, index) => (
            <div key={index} className={getSkillItemClasses()}>
              <div className="flex-shrink-0">{skill.icon}</div>
              <span className="text-gray-800 font-medium group-hover/item:text-[#1877F2] transition-colors duration-300 text-[clamp(0.8rem,1.2vw,1rem)] truncate">
                {skill.name}
              </span>
            </div>
          ))}
        </div>

        {/* Skill Count Badge */}
        <div className="absolute top-2 right-2 bg-[#1877F2] text-white text-xs font-bold px-1.5 py-0.5 rounded-full z-10">
          {skills.length}
        </div>
      </div>
    </CSSTransition>
  );
}
