import { ProjectCard } from '../project-card';
import { projects } from '../../data/projects';
import { CSSTransition } from 'react-transition-group';

export default function ProjectsSection() {
  return (
    <div className="container mx-auto px-6 py-24 min-h-screen flex flex-col items-center justify-center">
      <h2 className="text-6xl font-extrabold text-white mb-20 text-center tracking-tight bg-gradient-to-r from-white via-gray-100 to-white bg-clip-text text-transparent">
        Projects
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 w-full max-w-7xl">
        {projects.map((project, index) => (
          <CSSTransition
            key={project.id}
            in={true}
            timeout={500 + index * 100}
            classNames="fade"
            unmountOnExit
          >
            <div className="flex justify-center animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
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
