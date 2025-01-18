import { ProjectCard } from '../project-card';
import { projects } from '../../data/projects';
import { CSSTransition } from 'react-transition-group';

export default function ProjectsSection() {
  return (
    <div
      className="container mx-auto px-6 py-24 min-h-screen
     flex flex-col items-center justify-center bg-gradient-to-r"
    >
      <h2 className="text-5xl font-extrabold text-white mb-16 text-center tracking-tight uppercase">
        Projects
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 w-full max-w-6xl">
        {projects.map((project) => (
          <CSSTransition
            key={project.id}
            in={true}
            timeout={500}
            classNames="fade"
            unmountOnExit
          >
            <div className="flex justify-center">
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
