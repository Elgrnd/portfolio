import React from 'react';
import { Menu, X, Github, Linkedin, FileText, Coffee } from 'lucide-react';
import { useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-gray-900 text-white fixed w-full z-10">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <Link to="/" className="text-xl font-bold">Portfolio</Link>
          
          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8">
            <Link to="/" className="hover:text-gray-300">Accueil</Link>
            <Link to="/portfolio" className="hover:text-gray-300">Portfolio</Link>
            <Link to="/projets" className="hover:text-gray-300">Projets</Link>
          </div>

          {/* Social Links */}
          <div className="hidden md:flex items-center space-x-4">
            <a href="https://github.com/votre-username" target="_blank" rel="noopener noreferrer" className="hover:text-gray-300">
              <Github size={20} />
            </a>
            <a href="https://linkedin.com/in/votre-profil" target="_blank" rel="noopener noreferrer" className="hover:text-gray-300">
              <Linkedin size={20} />
            </a>
            <a href="https://www.buymeacoffee.com/votre-profil" target="_blank" rel="noopener noreferrer" className="hover:text-gray-300">
              <Coffee size={20} />
            </a>
            <a href="/votre-cv.pdf" target="_blank" rel="noopener noreferrer" className="hover:text-gray-300">
              <FileText size={20} />
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden pb-4">
            <div className="flex flex-col space-y-3">
              <Link to="/" className="hover:text-gray-300">Accueil</Link>
              <Link to="/portfolio" className="hover:text-gray-300">Portfolio</Link>
              <Link to="/projets" className="hover:text-gray-300">Projets</Link>
              <div className="flex space-x-4 pt-2">
                <a href="https://github.com/votre-username" target="_blank" rel="noopener noreferrer" className="hover:text-gray-300">
                  <Github size={20} />
                </a>
                <a href="https://linkedin.com/in/votre-profil" target="_blank" rel="noopener noreferrer" className="hover:text-gray-300">
                  <Linkedin size={20} />
                </a>
                <a href="https://www.buymeacoffee.com/votre-profil" target="_blank" rel="noopener noreferrer" className="hover:text-gray-300">
                  <Coffee size={20} />
                </a>
                <a href="/votre-cv.pdf" target="_blank" rel="noopener noreferrer" className="hover:text-gray-300">
                  <FileText size={20} />
                </a>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;