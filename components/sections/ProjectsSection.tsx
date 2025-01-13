import { ProjectCard } from '../project-card';
import { projects } from '../../data/projects';

export default function ProjectsSection() {
  return (
    <div
      className="container mx-auto px-6 py-24 min-h-screen
     flex flex-col items-center justify-center bg-gradient-to-b bg-gradient-to-r from-gray-900"
    >
      {' '}
      <h2 className="text-5xl font-extrabold text-white mb-16 text-center tracking-tight">
        Projects
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 w-full max-w-6xl">
        {projects.map((project) => (
          <div key={project.id} className="flex justify-center">
            <ProjectCard
              title={project.title}
              description={project.description}
              image={project.image}
              views={project.views}
              date={project.date}
              href={project.href}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
