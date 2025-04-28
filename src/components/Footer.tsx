
import { Github, Linkedin, Mail, Phone } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-portfolio-darkGray text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">Mostafa Habib</h3>
            <p className="text-gray-300 mb-4">
              Building modern and responsive experiences for the web.
            </p>
            <div className="flex space-x-4">
              <a 
                href="https://github.com/mostafa-habib" 
                target="_blank" 
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="text-white hover:text-portfolio-blue transition-colors"
              >
                <Github size={20} />
              </a>
              <a 
                href="https://linkedin.com/in/mostafahabibb" 
                target="_blank" 
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="text-white hover:text-portfolio-blue transition-colors"
              >
                <Linkedin size={20} />
              </a>
              <a 
                href="mailto:mostafahabib866@gmail.com"
                aria-label="Email"
                className="text-white hover:text-portfolio-blue transition-colors"
              >
                <Mail size={20} />
              </a>
              <a 
                href="tel:+201207300696"
                aria-label="Phone"
                className="text-white hover:text-portfolio-blue transition-colors"
              >
                <Phone size={20} />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="#about" className="text-gray-300 hover:text-portfolio-blue transition-colors">About</a></li>
              <li><a href="#projects" className="text-gray-300 hover:text-portfolio-blue transition-colors">Projects</a></li>
              <li><a href="#skills" className="text-gray-300 hover:text-portfolio-blue transition-colors">Skills</a></li>
              <li><a href="#experience" className="text-gray-300 hover:text-portfolio-blue transition-colors">Experience</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4">Contact</h3>
            <ul className="space-y-2">
              <li className="flex items-center space-x-2">
                <Mail size={16} />
                <a href="mailto:mostafahabib866@gmail.com" className="text-gray-300 hover:text-portfolio-blue transition-colors">
                  mostafahabib866@gmail.com
                </a>
              </li>
              <li className="flex items-center space-x-2">
                <Phone size={16} />
                <a href="tel:+201207300696" className="text-gray-300 hover:text-portfolio-blue transition-colors">
                  +201207300696
                </a>
              </li>
              <li className="flex items-center space-x-2">
                <Github size={16} />
                <a href="https://github.com/mostafa-habib" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-portfolio-blue transition-colors">
                  github.com/mostafa-habib
                </a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; {currentYear} Mostafa Habib. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
