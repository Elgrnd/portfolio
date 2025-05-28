import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  ArrowLeft, Github, CheckCircle, 
  Target, Award, Code2, Layers,
  AlertCircle, BookOpen
} from 'lucide-react';
import { projects } from '../data/projects';

const ProjectDetail = () => {
  const { id } = useParams();
  const project = projects.find(p => p.id === id);

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <AlertCircle className="w-16 h-16 mx-auto mb-4 text-[rgb(var(--error))]" />
          <h2 className="text-2xl font-bold mb-2">Projet non trouvé</h2>
          <p className="text-[rgb(var(--muted-foreground))] mb-4">
            Le projet que vous recherchez n'existe pas.
          </p>
          <Link to="/" className="btn-primary">
            Retour à l'accueil
          </Link>
        </div>
      </div>
    );
  }

  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

  const stagger = {
    animate: {
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen pt-24 pb-16"
    >
      {/* Hero Section */}
      <section className="relative overflow-hidden pb-16">
        <div className="absolute inset-0 -z-10">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-[rgb(var(--primary))] rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob" />
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-[rgb(var(--secondary))] rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000" />
        </div>

        <div className="max-w-7xl mx-auto px-4">
          <motion.div {...fadeInUp}>
            <Link 
              to="/" 
              className="inline-flex items-center gap-2 text-[rgb(var(--muted-foreground))] hover:text-[rgb(var(--foreground))] mb-8 transition-colors"
            >
              <ArrowLeft className="w-5 h-5" />
              <span>Retour aux projets</span>
            </Link>

            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <motion.div
                  initial={{ scale: 0.8, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 0.8 }}
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass mb-6"
                >
                  <Code2 className="w-4 h-4 text-[rgb(var(--primary))]" />
                  <span className="text-sm font-medium">Projet universitaire</span>
                </motion.div>

                <h1 className="text-4xl md:text-5xl font-bold mb-6">
                  <span className="gradient-text">{project.title}</span>
                </h1>
                
                <p className="text-xl text-[rgb(var(--muted-foreground))] mb-8 leading-relaxed">
                  {project.fullDescription}
                </p>

                <div className="flex flex-wrap gap-4">
                  <motion.a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="btn-primary inline-flex items-center gap-2"
                  >
                    <Github className="w-5 h-5" />
                    Voir sur GitHub
                  </motion.a>
                </div>
              </div>

              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.2, duration: 0.8 }}
                className="relative"
              >
                <div className="rounded-2xl overflow-hidden shadow-2xl">
                  <img 
                    src={project.imageUrl} 
                    alt={project.title}
                    className="w-full h-auto"
                  />
                </div>
                <div className="absolute -inset-4 gradient-bg rounded-2xl blur-3xl opacity-20 -z-10" />
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Technologies Section */}
      <section className="py-16 bg-[rgb(var(--muted))]">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl font-bold mb-8 flex items-center gap-3">
              <Layers className="w-8 h-8 text-[rgb(var(--primary))]" />
              Technologies utilisées
            </h2>
            <div className="flex flex-wrap gap-3">
              {project.technologies.map((tech, index) => (
                <motion.span
                  key={tech}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ scale: 1.1 }}
                  className="px-6 py-3 rounded-full gradient-bg text-white font-medium shadow-lg"
                >
                  {tech}
                </motion.span>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl font-bold mb-8 flex items-center gap-3">
              <CheckCircle className="w-8 h-8 text-[rgb(var(--success))]" />
              Fonctionnalités principales
            </h2>
            <motion.div 
              variants={stagger}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              className="grid md:grid-cols-2 gap-4"
            >
              {project.features.map((feature, index) => (
                <motion.div
                  key={index}
                  variants={fadeInUp}
                  whileHover={{ scale: 1.02 }}
                  className="card p-6 flex items-start gap-4"
                >
                  <div className="p-2 rounded-lg bg-[rgb(var(--success))/0.1]">
                    <CheckCircle className="w-5 h-5 text-[rgb(var(--success))]" />
                  </div>
                  <p className="flex-1">{feature}</p>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Challenges & Outcomes */}
      <section className="py-16 bg-[rgb(var(--muted))]">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Challenges */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl font-bold mb-8 flex items-center gap-3">
                <Target className="w-8 h-8 text-[rgb(var(--warning))]" />
                Défis relevés
              </h2>
              <div className="space-y-4">
                {project.challenges.map((challenge, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-start gap-3"
                  >
                    <div className="p-1 rounded-full bg-[rgb(var(--warning))/0.2] mt-1">
                      <div className="w-2 h-2 rounded-full bg-[rgb(var(--warning))]" />
                    </div>
                    <p className="flex-1">{challenge}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Outcomes */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl font-bold mb-8 flex items-center gap-3">
                <Award className="w-8 h-8 text-[rgb(var(--primary))]" />
                Résultats obtenus
              </h2>
              <div className="space-y-4">
                {project.outcomes.map((outcome, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-start gap-3"
                  >
                    <div className="p-1 rounded-full bg-[rgb(var(--primary))/0.2] mt-1">
                      <div className="w-2 h-2 rounded-full bg-[rgb(var(--primary))]" />
                    </div>
                    <p className="flex-1">{outcome}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Competences Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl font-bold mb-8 flex items-center gap-3">
              <BookOpen className="w-8 h-8 text-[rgb(var(--secondary))]" />
              Compétences développées
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              {project.competences.map((competence, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05 }}
                  whileHover={{ scale: 1.05 }}
                  className="card p-4 text-center"
                >
                  <p className="font-medium">{competence}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Apprentissages critiques */}
          {project.apprcritique.length > 0 && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="mt-16"
            >
              <h3 className="text-2xl font-bold mb-8">Apprentissages critiques</h3>
              <div className="space-y-6">
                {project.apprcritique.map((critique, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="card p-6"
                  >
                    <h4 className="font-semibold mb-2 text-[rgb(var(--primary))]">
                      {critique}
                    </h4>
                    {project.apprcritiqueDescription[index] && (
                      <p className="text-[rgb(var(--muted-foreground))]">
                        {project.apprcritiqueDescription[index]}
                      </p>
                    )}
                  </motion.div>
                ))}
              </div>
            </motion.div>
          )}
        </div>
      </section>

      {/* Navigation */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex justify-between items-center">
            <Link 
              to="/" 
              className="btn-secondary inline-flex items-center gap-2"
            >
              <ArrowLeft className="w-5 h-5" />
              Retour aux projets
            </Link>
            
            <div className="flex gap-4">
              {projects.indexOf(project) > 0 && (
                <Link
                  to={`/project/${projects[projects.indexOf(project) - 1].id}`}
                  className="btn-secondary"
                >
                  Projet précédent
                </Link>
              )}
              {projects.indexOf(project) < projects.length - 1 && (
                <Link
                  to={`/project/${projects[projects.indexOf(project) + 1].id}`}
                  className="btn-primary"
                >
                  Projet suivant
                </Link>
              )}
            </div>
          </div>
        </div>
      </section>
    </motion.div>
  );
};

export default ProjectDetail;