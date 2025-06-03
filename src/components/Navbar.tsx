import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { Menu, X, User, Code, MessageSquare, Briefcase } from 'lucide-react';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // Handle scrolling for transparent to solid navbar transition
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav 
      className={`fixed w-full z-10 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <NavLink to="/" className="text-blue-600 font-bold text-xl flex items-center">
              <User className="mr-2" />
              <span>Portfolio</span>
            </NavLink>
          </div>
          
          {/* Desktop menu */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-center space-x-4">
              <NavLink 
                to="/" 
                className={({ isActive }) => 
                  isActive 
                    ? "text-blue-600 font-medium px-3 py-2 rounded-md" 
                    : "text-gray-700 hover:text-blue-600 font-medium px-3 py-2 rounded-md transition-colors"
                }
              >
                <span className="flex items-center">
                  <User className="mr-1 h-4 w-4" />
                  <span>À propos</span>
                </span>
              </NavLink>
              
              <NavLink 
                to="/projects" 
                className={({ isActive }) => 
                  isActive 
                    ? "text-blue-600 font-medium px-3 py-2 rounded-md" 
                    : "text-gray-700 hover:text-blue-600 font-medium px-3 py-2 rounded-md transition-colors"
                }
              >
                <span className="flex items-center">
                  <Code className="mr-1 h-4 w-4" />
                  <span>Projets</span>
                </span>
              </NavLink>
              
              <NavLink 
                to="/portfolio" 
                className={({ isActive }) => 
                  isActive 
                    ? "text-blue-600 font-medium px-3 py-2 rounded-md" 
                    : "text-gray-700 hover:text-blue-600 font-medium px-3 py-2 rounded-md transition-colors"
                }
              >
                <span className="flex items-center">
                  <Briefcase className="mr-1 h-4 w-4" />
                  <span>Compétences</span>
                </span>
              </NavLink>
              
              <NavLink 
                to="/contact" 
                className={({ isActive }) => 
                  isActive 
                    ? "text-blue-600 font-medium px-3 py-2 rounded-md" 
                    : "text-gray-700 hover:text-blue-600 font-medium px-3 py-2 rounded-md transition-colors"
                }
              >
                <span className="flex items-center">
                  <MessageSquare className="mr-1 h-4 w-4" />
                  <span>Contact</span>
                </span>
              </NavLink>
            </div>
          </div>
          
          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-blue-600 focus:outline-none"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>
      
      {/* Mobile menu */}
      <div className={`md:hidden ${isOpen ? 'block' : 'hidden'}`}>
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white shadow-lg">
          <NavLink 
            to="/" 
            className={({ isActive }) => 
              isActive 
                ? "text-blue-600 font-medium block px-3 py-2 rounded-md" 
                : "text-gray-700 hover:text-blue-600 font-medium block px-3 py-2 rounded-md"
            }
            onClick={() => setIsOpen(false)}
          >
            <span className="flex items-center">
              <User className="mr-2 h-4 w-4" />
              <span>About</span>
            </span>
          </NavLink>
          
          <NavLink 
            to="/projects" 
            className={({ isActive }) => 
              isActive 
                ? "text-blue-600 font-medium block px-3 py-2 rounded-md" 
                : "text-gray-700 hover:text-blue-600 font-medium block px-3 py-2 rounded-md"
            }
            onClick={() => setIsOpen(false)}
          >
            <span className="flex items-center">
              <Code className="mr-2 h-4 w-4" />
              <span>Projects</span>
            </span>
          </NavLink>
          
          <NavLink 
            to="/portfolio" 
            className={({ isActive }) => 
              isActive 
                ? "text-blue-600 font-medium block px-3 py-2 rounded-md" 
                : "text-gray-700 hover:text-blue-600 font-medium block px-3 py-2 rounded-md"
            }
            onClick={() => setIsOpen(false)}
          >
            <span className="flex items-center">
              <Briefcase className="mr-2 h-4 w-4" />
              <span>Competencies</span>
            </span>
          </NavLink>
          
          <NavLink 
            to="/contact" 
            className={({ isActive }) => 
              isActive 
                ? "text-blue-600 font-medium block px-3 py-2 rounded-md" 
                : "text-gray-700 hover:text-blue-600 font-medium block px-3 py-2 rounded-md"
            }
            onClick={() => setIsOpen(false)}
          >
            <span className="flex items-center">
              <MessageSquare className="mr-2 h-4 w-4" />
              <span>Contact</span>
            </span>
          </NavLink>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;