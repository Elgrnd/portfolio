import { Link } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';
import { projects } from '../data/projects';

const ProjectsPage: React.FC = () => {
  return (
    <div className="pt-20">
      {/* Header */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-400 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">Mes projets</h1>
          <p className="text-xl max-w-3xl mx-auto">
              Une bibliothèque de mes projets, qui incluent des projets académiques, personnels et collaboratifs.
          </p>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project) => (
              <div 
                key={project.id} 
                className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow"
              >
                <div className="relative">
                  <img 
                    src={project.image} 
                    alt={project.title} 
                    className="w-full h-60 object-cover"
                  />
                  <div className="absolute top-0 left-0 bg-blue-600 text-white px-3 py-1 rounded-br-lg">
                    {project.category}
                  </div>
                </div>
                
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-800 mb-2">{project.title}</h3>
                  <p className="text-gray-600 mb-4">{project.summary}</p>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.technologies.map((tech, index) => (
                      <span 
                        key={index} 
                        className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  <Link 
                    to={`/projects/${project.id}`} 
                    className="text-blue-600 font-medium flex items-center hover:text-blue-700 transition-colors"
                  >
                    Voir le projet
                    <ArrowUpRight className="ml-1 h-4 w-4" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default ProjectsPage;