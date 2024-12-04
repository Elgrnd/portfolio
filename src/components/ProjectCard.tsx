import React from 'react';
import { Github } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Project } from '../data/projects';

interface ProjectCardProps {
    project: Project;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
    return (
        <div className="bg-white rounded-lg shadow-md overflow-hidden transition-transform hover:scale-105">
            <img
                src={project.imageUrl}
                alt={project.title}
                className="w-full h-48 object-cover"
            />
            <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                <p className="text-gray-600 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech, index) => (
                        <span
                            key={index}
                            className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm"
                        >
              {tech}
            </span>
                    ))}
                </div>
                <div className="flex justify-between items-center">
                    <Link
                        to={`/portfolio/${project.id}`}
                        className="text-blue-600 hover:text-blue-800 font-medium"
                    >
                        Voir les détails
                    </Link>
                    <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center text-gray-700 hover:text-gray-900"
                    >
                        <Github className="mr-2" size={20} />
                        GitHub
                    </a>
                </div>
            </div>
        </div>
    );
};

export default ProjectCard;