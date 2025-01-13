import { ProjectCard } from '../project-card';
import { projects } from '../../data/projects';

export default function ProjectsSection() {
  return (
    <div className="container mx-auto px-4 py-20">
      <h2 className="text-4xl font-bold text-white mb-12 text-center">
        Projects
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
        {projects.map((project) => (
          <ProjectCard
            key={project.id}
            title={project.title}
            description={project.description}
            image={project.image}
            views={project.views}
            date={project.date}
            href={project.href}
          />
        ))}
      </div>
    </div>
  );
}
