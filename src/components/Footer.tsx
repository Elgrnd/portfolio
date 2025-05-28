import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  Mail, MapPin, Github, Linkedin, Coffee, 
  Heart, ArrowUp 
} from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { href: 'https://github.com/elgrnd', icon: Github, label: 'GitHub' },
    { href: 'https://www.linkedin.com/in/galdric-desert-caparros-5869ab2aa/', icon: Linkedin, label: 'LinkedIn' },
    { href: 'https://www.buymeacoffee.com/elgrnd', icon: Coffee, label: 'Buy me a coffee' },
  ];

  const quickLinks = [
    { name: 'Accueil', path: '/', section: 'hero' },
    { name: 'Portfolio', path: '/#portfolio', section: 'portfolio' },
    { name: 'À propos', path: '/#about', section: 'about' },
    { name: 'Parcours', path: '/#journey', section: 'journey' },
  ];

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleLinkClick = (section: string) => {
    const element = document.getElementById(section);
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <footer className="relative bg-[rgb(var(--muted))] border-t border-[rgb(var(--border))]">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-[rgb(var(--primary))] rounded-full blur-3xl opacity-10" />
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-[rgb(var(--secondary))] rounded-full blur-3xl opacity-10" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* About Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="md:col-span-2"
          >
            <h3 className="text-2xl font-bold gradient-text mb-4">Portfolio</h3>
            <p className="text-[rgb(var(--muted-foreground))] mb-6 max-w-md">
              Étudiant passionné en informatique, je crée des expériences numériques 
              innovantes et cherche constamment à apprendre et progresser.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social) => {
                const Icon = social.icon;
                return (
                  <motion.a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.2, rotate: 5 }}
                    whileTap={{ scale: 0.9 }}
                    className="p-3 rounded-lg bg-[rgb(var(--card))] text-[rgb(var(--muted-foreground))] hover:text-[rgb(var(--primary))] hover:shadow-lg transition-all duration-300"
                    aria-label={social.label}
                  >
                    <Icon className="w-5 h-5" />
                  </motion.a>
                );
              })}
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <h4 className="font-semibold mb-4">Navigation</h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.path}
                    onClick={(e) => {
                      e.preventDefault();
                      handleLinkClick(link.section);
                    }}
                    className="text-[rgb(var(--muted-foreground))] hover:text-[rgb(var(--primary))] transition-colors duration-300"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h4 className="font-semibold mb-4">Contact</h4>
            <ul className="space-y-3">
              <li className="flex items-center gap-3 text-[rgb(var(--muted-foreground))]">
                <MapPin className="w-4 h-4 text-[rgb(var(--primary))]" />
                <span>Montpellier, France</span>
              </li>
              <li className="flex items-center gap-3 text-[rgb(var(--muted-foreground))]">
                <Mail className="w-4 h-4 text-[rgb(var(--primary))]" />
                <a href="mailto:contact@example.com" className="hover:text-[rgb(var(--primary))] transition-colors">
                  contact@example.com
                </a>
              </li>
            </ul>
          </motion.div>
        </div>

        {/* Divider */}
        <div className="mt-12 pt-8 border-t border-[rgb(var(--border))]">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-[rgb(var(--muted-foreground))] text-center md:text-left"
            >
              © {currentYear} - DESERT-CAPARROS Galdric. Créé avec{' '}
              <motion.span
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 1, repeat: Infinity }}
                className="inline-block"
              >
                <Heart className="w-4 h-4 inline text-red-500" fill="currentColor" />
              </motion.span>{' '}
              et React
            </motion.p>

            <motion.button
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              onClick={scrollToTop}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="p-3 rounded-full bg-[rgb(var(--primary))] text-white shadow-lg hover:shadow-xl transition-all duration-300"
              aria-label="Retour en haut"
            >
              <ArrowUp className="w-5 h-5" />
            </motion.button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;