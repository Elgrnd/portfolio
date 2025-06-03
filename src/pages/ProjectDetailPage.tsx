import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, Github, ExternalLink, Calendar, Users, BookOpen } from 'lucide-react';
import { projects } from '../data/projects';

const ProjectDetailPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const project = projects.find(p => p.id === id);

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Project Not Found</h2>
          <p className="text-gray-600 mb-6">The project you're looking for doesn't seem to exist.</p>
          <Link 
            to="/projects" 
            className="bg-blue-600 text-white px-5 py-2 rounded-lg font-medium hover:bg-blue-700 transition-colors"
          >
            Retour aux projets
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="pt-20">
      {/* Header */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-400 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link 
            to="/projects" 
            className="inline-flex items-center text-white mb-6 hover:underline"
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Retour à tous les projets
          </Link>
          
          <h1 className="text-3xl md:text-4xl font-bold mb-4">{project.title}</h1>
          <p className="text-xl mb-6">{project.summary}</p>
          
          <div className="flex flex-wrap gap-3 mb-6">
            {project.technologies.map((tech, index) => (
              <span 
                key={index} 
                className="bg-white/20 text-white px-3 py-1 rounded-full text-sm"
              >
                {tech}
              </span>
            ))}
          </div>
          
          <div className="flex flex-wrap gap-6">
            {project.githubUrl && (
              <a 
                href={project.githubUrl} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="bg-gray-800 text-white px-4 py-2 rounded-lg font-medium inline-flex items-center hover:bg-gray-700 transition-colors"
              >
                <Github className="mr-2 h-5 w-5" />
                Code source
              </a>
            )}
            
            {project.liveUrl && (
              <a 
                href={project.liveUrl} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="bg-white text-blue-600 px-4 py-2 rounded-lg font-medium inline-flex items-center hover:bg-blue-50 transition-colors"
              >
                <ExternalLink className="mr-2 h-5 w-5" />
                Lien du site
              </a>
            )}
          </div>
        </div>
      </section>

      {/* Project Details */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Main Content */}
            <div className="lg:col-span-2">
              <div className="mb-10">
                <h2 className="text-2xl font-bold text-gray-800 mb-6">Vue générale du projet</h2>
                <div className="prose prose-lg max-w-none">
                  <p>{project.description}</p>
                </div>
              </div>
              
              <div>
                <h2 className="text-2xl font-bold text-gray-800 mb-6">Ce que j'ai appris</h2>
                <div className="prose prose-lg max-w-none">
                  <ul>
                    {project.learnings.map((learning, index) => (
                      <li key={index}>{learning}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
            
            {/* Sidebar */}
            <div>
              <div className="bg-gray-50 p-6 rounded-lg shadow-md mb-8">
                <h3 className="text-xl font-bold text-gray-800 mb-4">Informations sur le projet</h3>
                
                <div className="space-y-4">
                  <div className="flex items-center">
                    <Calendar className="h-5 w-5 text-blue-600 mr-3" />
                    <div>
                      <h4 className="text-sm font-medium text-gray-500">Date</h4>
                      <p className="text-gray-800">{project.date}</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center">
                    <Users className="h-5 w-5 text-blue-600 mr-3" />
                    <div>
                      <h4 className="text-sm font-medium text-gray-500">Équipe</h4>
                      <p className="text-gray-800">{project.team}</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center">
                    <BookOpen className="h-5 w-5 text-blue-600 mr-3" />
                    <div>
                      <h4 className="text-sm font-medium text-gray-500">Type de projet</h4>
                      <p className="text-gray-800">{project.category}</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="bg-gray-50 p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold text-gray-800 mb-4">Fonctionnalités clés</h3>
                <ul className="space-y-3">
                  {project.features.map((feature, index) => (
                    <li key={index} className="flex items-start">
                      <span className="text-blue-600 mr-2">•</span>
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ProjectDetailPage;