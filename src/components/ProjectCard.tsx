import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, Github, Clock, Code2 } from 'lucide-react';
import { Project } from '../data/projects';

interface ProjectCardProps {
  project: Project;
  index: number;
}

const ProjectCard = ({ project, index }: ProjectCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ y: -10 }}
      className="group relative h-full"
    >
      <div className="card h-full flex flex-col overflow-hidden">
        {/* Image Container */}
        <div className="relative h-48 overflow-hidden">
          <motion.img
            src={project.imageUrl}
            alt={project.title}
            className="w-full h-full object-cover"
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.3 }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          
          {/* GitHub Link */}
          <motion.a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="absolute top-4 right-4 p-2 rounded-full bg-white/90 dark:bg-black/90 text-gray-800 dark:text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300"
            whileHover={{ scale: 1.1, rotate: 360 }}
            whileTap={{ scale: 0.9 }}
            onClick={(e) => e.stopPropagation()}
          >
            <Github className="w-5 h-5" />
          </motion.a>
        </div>

        {/* Content */}
        <div className="flex-1 p-6 flex flex-col">
          <h3 className="text-xl font-bold mb-2 gradient-text">{project.title}</h3>
          <p className="text-[rgb(var(--muted-foreground))] mb-4 flex-1">
            {project.description}
          </p>

          {/* Technologies */}
          <div className="flex flex-wrap gap-2 mb-4">
            {project.technologies.slice(0, 3).map((tech) => (
              <span
                key={tech}
                className="px-3 py-1 text-xs font-medium rounded-full bg-[rgb(var(--primary))/0.1] text-[rgb(var(--primary))]"
              >
                {tech}
              </span>
            ))}
            {project.technologies.length > 3 && (
              <span className="px-3 py-1 text-xs font-medium rounded-full bg-[rgb(var(--muted))] text-[rgb(var(--muted-foreground))]">
                +{project.technologies.length - 3}
              </span>
            )}
          </div>

          {/* Stats */}
          <div className="flex items-center gap-4 text-sm text-[rgb(var(--muted-foreground))] mb-4">
            <div className="flex items-center gap-1">
              <Code2 className="w-4 h-4" />
              <span>{project.features.length} features</span>
            </div>
            <div className="flex items-center gap-1">
              <Clock className="w-4 h-4" />
              <span>{project.competences.length} compétences</span>
            </div>
          </div>

          {/* View Details Link */}
          <Link
            to={`/project/${project.id}`}
            className="inline-flex items-center gap-2 text-[rgb(var(--primary))] font-medium group/link"
          >
            <span className="animated-underline">Voir le projet</span>
            <motion.div
              animate={{ x: [0, 5, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            >
              <ArrowRight className="w-4 h-4" />
            </motion.div>
          </Link>
        </div>

        {/* Decorative Elements */}
        <div className="absolute -top-20 -right-20 w-40 h-40 bg-[rgb(var(--primary))] rounded-full blur-3xl opacity-20 group-hover:opacity-30 transition-opacity duration-300" />
        <div className="absolute -bottom-20 -left-20 w-40 h-40 bg-[rgb(var(--secondary))] rounded-full blur-3xl opacity-20 group-hover:opacity-30 transition-opacity duration-300" />
      </div>
    </motion.div>
  );
};

export default ProjectCard;