import { Github as GitHub, Linkedin, Mail } from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-gray-800 text-white">
      <div className="max-w-7xl mx-auto px-4 py-8 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="text-center md:text-left mb-4 md:mb-0">
            <p className="text-sm">&copy; {currentYear} Portfolio. All rights reserved.</p>
          </div>
          
          <div className="flex space-x-4">
            <a 
              href="https://github.com/Elgrnd"
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gray-300 hover:text-white transition-colors"
              aria-label="GitHub Profile"
            >
              <GitHub className="h-5 w-5" />
            </a>
            <a 
              href="https://www.linkedin.com/in/galdric-desert-caparros-5869ab2aa/"
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gray-300 hover:text-white transition-colors"
              aria-label="LinkedIn Profile"
            >
              <Linkedin className="h-5 w-5" />
            </a>
            <a 
              href="mailto:galdric.dc@laposte.net"
              className="text-gray-300 hover:text-white transition-colors"
              aria-label="Email Contact"
            >
              <Mail className="h-5 w-5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;