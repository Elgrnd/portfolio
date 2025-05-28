import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  ChevronDown, Code, Sparkles, GraduationCap, 
  Briefcase, Target, Calendar, MapPin, Award,
  Coffee, Gamepad2, Music, Book, Camera, Bike
} from 'lucide-react';
import Portfolio from './Portfolio';

const Home = () => {
  const interests = [
    { icon: Coffee, label: 'Café', description: "Amateur de bon café" },
    { icon: Gamepad2, label: 'Gaming', description: "Passionné de jeux vidéo" },
    { icon: Music, label: 'Musique', description: "Mélomane éclectique" },
    { icon: Book, label: 'Lecture', description: "Lecteur assidu" },
    { icon: Camera, label: 'Photo', description: "Photographe amateur" },
    { icon: Bike, label: 'Sport', description: "Cycliste du dimanche" }
  ];

  const journey = [
    {
      year: "2023-2025",
      title: "BUT Informatique 2ème et 3ème année",
      institution: "IUT Montpellier-Sète",
      icon: GraduationCap,
      color: "from-blue-500 to-purple-500",
      details: ["Développement web avancé", "Architecture logicielle", "Gestion de projet"]
    },
    {
      year: "2022-2023",
      title: "BUT Informatique 1ère année",
      institution: "IUT Montpellier-Sète",
      icon: Code,
      color: "from-green-500 to-blue-500",
      details: ["Algorithmique", "Bases de données", "Programmation orientée objet"]
    },
    {
      year: "2022",
      title: "Baccalauréat Général",
      institution: "Lycée Jean Monnet",
      icon: Award,
      color: "from-yellow-500 to-orange-500",
      details: ["Spécialités: Mathématiques, NSI", "Mention Bien"]
    }
  ];

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
    <div className="min-h-screen">
      {/* Hero Section */}
      <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0 -z-10">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob" />
          <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-yellow-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000" />
          <div className="absolute bottom-1/4 left-1/3 w-96 h-96 bg-pink-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000" />
        </div>

        <div className="text-center px-4 z-10">
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="mb-8"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass mb-6">
              <Sparkles className="w-4 h-4 text-[rgb(var(--primary))]" />
              <span className="text-sm font-medium">Étudiant en informatique</span>
            </div>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="text-5xl md:text-7xl font-bold mb-6"
          >
            Bonjour, je suis{' '}
            <span className="gradient-text">Killian</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="text-xl md:text-2xl text-[rgb(var(--muted-foreground))] mb-8 max-w-2xl mx-auto"
          >
            Passionné par le développement web et la création d'expériences numériques innovantes
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Link to="#portfolio" className="btn-primary" onClick={(e) => {
              e.preventDefault();
              document.getElementById('portfolio')?.scrollIntoView({ behavior: 'smooth' });
            }}>
              <Briefcase className="w-5 h-5 mr-2 inline" />
              Voir mes projets
            </Link>
            <Link to="#about" className="btn-secondary" onClick={(e) => {
              e.preventDefault();
              document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
            }}>
              En savoir plus
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 1 }}
            className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          >
            <ChevronDown className="w-8 h-8 text-[rgb(var(--muted-foreground))] animate-bounce" />
          </motion.div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section id="portfolio" className="py-20 px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-7xl mx-auto"
        >
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Mes <span className="gradient-text">Projets</span>
            </h2>
            <p className="text-lg text-[rgb(var(--muted-foreground))] max-w-2xl mx-auto">
              Découvrez mes réalisations universitaires et personnelles
            </p>
          </div>
          <Portfolio />
        </motion.div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-4 bg-[rgb(var(--muted))]">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-7xl mx-auto"
        >
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                À propos de <span className="gradient-text">moi</span>
              </h2>
              <div className="space-y-4 text-lg text-[rgb(var(--muted-foreground))]">
                <p>
                  Je suis étudiant en 3ème année de BUT Informatique à l'IUT de Montpellier-Sète. 
                  Passionné par le développement web et les nouvelles technologies, je m'efforce 
                  constamment d'apprendre et de créer des solutions innovantes.
                </p>
                <p>
                  Mon parcours universitaire m'a permis de développer des compétences solides en 
                  programmation, gestion de projet et travail d'équipe. Je suis particulièrement 
                  intéressé par le développement full-stack et l'UX/UI design.
                </p>
                <p>
                  En dehors du code, j'aime explorer de nouvelles technologies, participer à des 
                  hackathons et contribuer à des projets open source.
                </p>
              </div>
              <div className="mt-8 flex flex-wrap gap-4">
                <div className="flex items-center gap-2 px-4 py-2 rounded-lg glass">
                  <MapPin className="w-5 h-5 text-[rgb(var(--primary))]" />
                  <span>Montpellier, France</span>
                </div>
                <div className="flex items-center gap-2 px-4 py-2 rounded-lg glass">
                  <Calendar className="w-5 h-5 text-[rgb(var(--primary))]" />
                  <span>21 ans</span>
                </div>
              </div>
            </div>
            <div className="relative">
              <motion.div
                animate={{ 
                  y: [0, -20, 0],
                }}
                transition={{
                  duration: 6,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
                className="relative z-10"
              >
                <div className="aspect-square rounded-2xl gradient-bg p-1">
                  <img
                    src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop"
                    alt="Profile"
                    className="w-full h-full rounded-2xl object-cover"
                  />
                </div>
              </motion.div>
              <div className="absolute inset-0 gradient-bg rounded-2xl blur-3xl opacity-30" />
            </div>
          </div>
        </motion.div>
      </section>

      {/* Interests Section */}
      <section id="interests" className="py-20 px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-7xl mx-auto"
        >
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Centres d'<span className="gradient-text">intérêt</span>
            </h2>
            <p className="text-lg text-[rgb(var(--muted-foreground))] max-w-2xl mx-auto">
              En dehors du code, voici ce qui me passionne
            </p>
          </div>

          <motion.div 
            variants={stagger}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4"
          >
            {interests.map((interest) => {
              const Icon = interest.icon;
              return (
                <motion.div
                  key={interest.label}
                  variants={fadeInUp}
                  whileHover={{ scale: 1.05, rotate: 5 }}
                  whileTap={{ scale: 0.95 }}
                  className="card p-6 text-center cursor-pointer group"
                >
                  <motion.div
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.5 }}
                  >
                    <Icon className="w-12 h-12 mx-auto mb-4 text-[rgb(var(--primary))] group-hover:text-[rgb(var(--secondary))] transition-colors" />
                  </motion.div>
                  <h3 className="font-semibold mb-2">{interest.label}</h3>
                  <p className="text-sm text-[rgb(var(--muted-foreground))]">
                    {interest.description}
                  </p>
                </motion.div>
              );
            })}
          </motion.div>
        </motion.div>
      </section>

      {/* Journey Section */}
      <section id="journey" className="py-20 px-4 bg-[rgb(var(--muted))]">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-7xl mx-auto"
        >
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Mon <span className="gradient-text">parcours</span>
            </h2>
            <p className="text-lg text-[rgb(var(--muted-foreground))] max-w-2xl mx-auto">
              Les étapes clés de ma formation académique
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            {journey.map((step, index) => {
              const Icon = step.icon;
              return (
                <motion.div
                  key={step.year}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  className="relative mb-12 last:mb-0"
                >
                  <div className={`flex items-center gap-8 ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}>
                    <div className="flex-1">
                      <motion.div
                        whileHover={{ scale: 1.02 }}
                        className="card p-6"
                      >
                        <div className="flex items-center gap-4 mb-4">
                          <div className={`p-3 rounded-lg bg-gradient-to-br ${step.color} text-white`}>
                            <Icon className="w-6 h-6" />
                          </div>
                          <div>
                            <h3 className="text-xl font-bold">{step.title}</h3>
                            <p className="text-[rgb(var(--muted-foreground))]">{step.institution}</p>
                          </div>
                        </div>
                        <div className="space-y-2">
                          {step.details.map((detail, i) => (
                            <motion.div
                              key={i}
                              initial={{ opacity: 0, x: -20 }}
                              whileInView={{ opacity: 1, x: 0 }}
                              viewport={{ once: true }}
                              transition={{ delay: 0.1 * i }}
                              className="flex items-center gap-2"
                            >
                              <Target className="w-4 h-4 text-[rgb(var(--primary))]" />
                              <span className="text-sm">{detail}</span>
                            </motion.div>
                          ))}
                        </div>
                      </motion.div>
                    </div>
                    <div className="hidden md:block">
                      <div className="px-6 py-2 rounded-full gradient-bg text-white font-bold">
                        {step.year}
                      </div>
                    </div>
                    <div className="flex-1 hidden md:block" />
                  </div>
                  {index < journey.length - 1 && (
                    <div className="absolute left-1/2 transform -translate-x-1/2 w-0.5 h-16 bg-gradient-to-b from-[rgb(var(--primary))] to-transparent" />
                  )}
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </section>
    </div>
  );
};

export default Home;