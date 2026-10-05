import { ProjectCard } from '../project-card';
import { projects } from '../../data/projects';
import { CSSTransition } from 'react-transition-group';
import { FaArrowLeft } from 'react-icons/fa';

interface ProjectsSectionProps {
  onBack: () => void;
}

const articles = [
  {
    title: 'Proving It: Evaluating Enterprise AI Without a Trusted Answer Key',
    date: 'Aug 18, 2026',
    description: 'How we evaluate enterprise agents when answer keys are missing or unreliable.',
    href: 'https://blog.rapidflare.ai/blog/proving-it-without-a-trusted-answer-key/',
  },
  {
    title: 'The Rapidflare Fire Shield, Part I: The AI Safety Filter',
    date: 'Apr 8, 2026',
    description: 'The safety filter that classifies messages before retrieval and answer generation.',
    href: 'https://blog.rapidflare.ai/blog/responsible-ai-safety-filter/',
  },
  {
    title: 'Inline Citations for AI Agents',
    date: 'Feb 11, 2026',
    description: 'Built source-backed answers with inline citations so users can verify technical claims against the original documentation.',
    href: 'https://blog.rapidflare.ai/blog/introducing-inline-citations/',
  },
  {
    title: 'Building Scalable Technical Support for Engineering Communities',
    date: 'Jan 22, 2026',
    description: 'Engineering a secure Discord integration for developer support.',
    href: 'https://blog.rapidflare.ai/blog/building-scalable-discord-integration/',
  },
];

export default function ProjectsSection({ onBack }: ProjectsSectionProps) {
  return (
    <div className="w-screen flex flex-col items-center justify-center bg-gradient-to-br from-gray-900 via-blue-950 to-indigo-950 px-[clamp(0.5rem,3vw,2.5rem)] py-[clamp(1rem,6vw,4rem)] min-h-screen">
      {/* Back Button */}
      <button
        onClick={onBack}
        className="fixed top-6 left-6 z-50 bg-white shadow-lg rounded-4xl p-3 hover:shadow-xl transition-shadow duration-300 border border-blue-200"
      >
        <FaArrowLeft className="text-blue-600 text-xl" />
      </button>

      <h2 className="text-6xl font-extrabold text-[#1877F2] mb-20 text-center tracking-tight">
        Projects
      </h2>
      <div className="w-full max-w-7xl space-y-16">
        <section aria-labelledby="rapidflare-writing">
          <h3 id="rapidflare-writing" className="text-3xl font-bold text-white mb-6">
            Engineering at Rapidflare
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {articles.map((article) => (
              <a
                key={article.href}
                href={article.href}
                target="_blank"
                rel="noopener noreferrer"
                className="block rounded-3xl bg-white/95 p-6 border-2 border-blue-100 hover:border-[#1877F2] hover:shadow-xl transition-all"
              >
                <p className="text-sm font-semibold text-blue-600 mb-2">Rapidflare Blog · {article.date}</p>
                <h4 className="text-xl font-bold text-gray-900 mb-2">{article.title}</h4>
                <p className="text-gray-700">{article.description}</p>
                <span className="inline-block mt-4 text-blue-600 font-semibold">Read article →</span>
              </a>
            ))}
          </div>
        </section>
        <section aria-labelledby="other-projects">
          <h3 id="other-projects" className="text-3xl font-bold text-white mb-6">
            Other Projects
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
            {projects.map((project, index) => (
              <CSSTransition
                key={project.id}
                in={true}
                timeout={500 + index * 100}
                classNames="fade"
                unmountOnExit
              >
                <div
                  className="flex justify-center animate-fade-in"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <ProjectCard
                    title={project.title}
                    description={project.description}
                    image={project.image}
                    views={project.views}
                    date={project.date}
                    href={project.href}
                  />
                </div>
              </CSSTransition>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
