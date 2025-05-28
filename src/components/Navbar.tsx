import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Sun, Moon, Home, Briefcase, User, Heart, Route, Github, Linkedin, FileText, Coffee } from 'lucide-react';
import { useTheme } from '../hooks/useTheme';
import { useScrollSpy } from '../hooks/useScrollSpy';
import cv from '../../assets/CV_website.pdf';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const { theme, toggleTheme } = useTheme();
  const activeSection = useScrollSpy(['hero', 'portfolio', 'about', 'interests', 'journey']);

  const navLinks = [
    { name: 'Accueil', path: '/', icon: Home, section: 'hero' },
    { name: 'Portfolio', path: '/#portfolio', icon: Briefcase, section: 'portfolio' },
    { name: 'À propos', path: '/#about', icon: User, section: 'about' },
    { name: 'Intérêts', path: '/#interests', icon: Heart, section: 'interests' },
    { name: 'Parcours', path: '/#journey', icon: Route, section: 'journey' },
  ];

  const socialLinks = [
    { href: 'https://github.com/elgrnd', icon: Github, label: 'GitHub' },
    { href: 'https://www.linkedin.com/in/galdric-desert-caparros-5869ab2aa/', icon: Linkedin, label: 'LinkedIn' },
    { href: 'https://www.buymeacoffee.com/elgrnd', icon: Coffee, label: 'Buy me a coffee' },
    { href: cv, icon: FileText, label: 'CV' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
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

  const handleNavClick = (path: string, section: string) => {
    setIsOpen(false);
    if (path.includes('#')) {
      if (location.pathname !== '/') {
        window.location.href = path;
      } else {
        scrollToSection(section);
      }
    }
  };

  const isActive = (section: string) => {
    return activeSection === section || (section === 'hero' && activeSection === '' && location.pathname === '/');
  };

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled ? 'glass shadow-xl' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20">
          {/* Logo */}
          <motion.div 
            className="flex items-center"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Link 
              to="/" 
              className="text-2xl font-bold gradient-text"
              onClick={() => scrollToSection('hero')}
            >
              Portfolio
            </Link>
          </motion.div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1">
            {navLinks.map((link) => {
              const Icon = link.icon;
              const active = isActive(link.section);
              
              return (
                <motion.div
                  key={link.name}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Link
                    to={link.path}
                    onClick={() => handleNavClick(link.path, link.section)}
                    className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-all duration-300 ${
                      active
                        ? 'bg-[rgb(var(--primary))] text-white shadow-lg'
                        : 'text-[rgb(var(--foreground))] hover:bg-[rgb(var(--muted))]'
                    }`}
                  >
                    <Icon size={18} />
                    <span className="font-medium">{link.name}</span>
                  </Link>
                </motion.div>
              );
            })}
          </div>

          {/* Social Links & Theme Toggle */}
          <div className="hidden md:flex items-center space-x-3">
            {/* Social Links */}
            <div className="flex items-center space-x-2 mr-2">
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
                    className="p-2 rounded-lg text-[rgb(var(--muted-foreground))] hover:text-[rgb(var(--primary))] hover:bg-[rgb(var(--muted))] transition-all duration-300"
                    aria-label={social.label}
                  >
                    <Icon size={20} />
                  </motion.a>
                );
              })}
            </div>
            
            {/* Theme Toggle */}
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={toggleTheme}
              className="p-2 rounded-lg bg-[rgb(var(--muted))] text-[rgb(var(--foreground))] hover:bg-[rgb(var(--muted-foreground))/0.2] transition-all duration-300"
              aria-label="Toggle theme"
            >
              <AnimatePresence mode="wait">
                {theme === 'light' ? (
                  <motion.div
                    key="moon"
                    initial={{ rotate: -90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: 90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Moon size={20} />
                  </motion.div>
                ) : (
                  <motion.div
                    key="sun"
                    initial={{ rotate: 90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: -90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Sun size={20} />
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center gap-2">
            {/* Mobile Theme Toggle */}
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={toggleTheme}
              className="p-2 rounded-lg bg-[rgb(var(--muted))] text-[rgb(var(--foreground))] hover:bg-[rgb(var(--muted-foreground))/0.2] transition-all duration-300"
              aria-label="Toggle theme"
            >
              {theme === 'light' ? <Moon size={20} /> : <Sun size={20} />}
            </motion.button>
            
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-lg bg-[rgb(var(--muted))] text-[rgb(var(--foreground))] hover:bg-[rgb(var(--muted-foreground))/0.2] transition-all duration-300"
              aria-label="Toggle menu"
            >
              <AnimatePresence mode="wait">
                {isOpen ? (
                  <motion.div
                    key="close"
                    initial={{ rotate: -90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: 90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <X size={24} />
                  </motion.div>
                ) : (
                  <motion.div
                    key="menu"
                    initial={{ rotate: 90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: -90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Menu size={24} />
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden glass border-t border-[rgb(var(--border))]"
          >
            <div className="px-4 py-4 space-y-2">
              {navLinks.map((link, index) => {
                const Icon = link.icon;
                const active = isActive(link.section);
                
                return (
                  <motion.div
                    key={link.name}
                    initial={{ x: -20, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <Link
                      to={link.path}
                      onClick={() => handleNavClick(link.path, link.section)}
                      className={`flex items-center gap-3 px-4 py-3 rounded-lg transition-all duration-300 ${
                        active
                          ? 'bg-[rgb(var(--primary))] text-white shadow-lg'
                          : 'text-[rgb(var(--foreground))] hover:bg-[rgb(var(--muted))]'
                      }`}
                    >
                      <Icon size={20} />
                      <span className="font-medium">{link.name}</span>
                    </Link>
                  </motion.div>
                );
              })}
              
              {/* Mobile Social Links */}
              <motion.div
                initial={{ x: -20, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: navLinks.length * 0.1 }}
                className="flex items-center justify-center space-x-4 pt-4 border-t border-[rgb(var(--border))]"
              >
                {socialLinks.map((social) => {
                  const Icon = social.icon;
                  return (
                    <motion.a
                      key={social.label}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.2 }}
                      whileTap={{ scale: 0.9 }}
                      className="p-2 rounded-lg text-[rgb(var(--muted-foreground))] hover:text-[rgb(var(--primary))] hover:bg-[rgb(var(--muted))] transition-all duration-300"
                      aria-label={social.label}
                    >
                      <Icon size={20} />
                    </motion.a>
                  );
                })}
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;