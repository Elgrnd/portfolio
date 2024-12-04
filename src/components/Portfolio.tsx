import ProjectCard from './ProjectCard';
import { projects } from '../data/projects';

const Portfolio = () => {
  return (
      <div className="min-h-screen pt-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 py-16">
          <h1 className="text-4xl font-bold mb-8">Portfolio</h1>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project) => (
                <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        </div>
      </div>
  );
};

export default Portfolio;