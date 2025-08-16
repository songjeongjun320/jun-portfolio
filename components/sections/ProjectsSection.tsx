import { ProjectCard } from '../project-card';
import { projects } from '../../data/projects';
import { CSSTransition } from 'react-transition-group';
import { FaArrowLeft } from 'react-icons/fa';

interface ProjectsSectionProps {
  onBack: () => void;
}

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
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 w-full max-w-7xl">
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
    </div>
  );
}
