
import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Menu, Sun, Moon, Download } from 'lucide-react';
import { cn } from '@/lib/utils';
import { useTheme } from '@/components/ThemeProvider';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }

      // Scroll spy functionality
      const sections = document.querySelectorAll('section[id]');
      const scrollPosition = window.scrollY + 100;

      sections.forEach((section) => {
        const sectionTop = (section as HTMLElement).offsetTop;
        const sectionHeight = section.clientHeight;
        const sectionId = section.getAttribute('id') as string;

        if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
          setActiveSection(sectionId);
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Projects', href: '#projects' },
    { name: 'Skills', href: '#skills' },
    { name: 'Experience', href: '#experience' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav 
      className={cn(
        'fixed top-0 left-0 w-full transition-all duration-300 z-50',
        isScrolled 
          ? 'backdrop-blur-lg bg-white/80 dark:bg-gray-900/80 shadow-md py-2' 
          : 'bg-transparent py-4'
      )}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        <a href="#home" className="font-bold text-2xl text-portfolio-darkGray dark:text-white">
          MH<span className="text-portfolio-highlight">.</span>
        </a>

        {/* Desktop Navigation */}
        <div className="hidden md:flex space-x-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className={cn(
                "font-medium transition-colors",
                activeSection === link.href.substring(1)
                  ? "text-portfolio-highlight"
                  : "text-portfolio-darkGray dark:text-gray-200 hover:text-portfolio-highlight dark:hover:text-portfolio-highlight"
              )}
            >
              {link.name}
            </a>
          ))}
        </div>
        
        {/* Actions - Desktop */}
        <div className="hidden md:flex items-center space-x-4">
          <Button 
            variant="ghost" 
            size="icon" 
            onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
            className="rounded-full"
            aria-label="Toggle theme"
          >
            {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
          </Button>

          <Button 
            variant="outline" 
            className="border-portfolio-highlight text-portfolio-highlight hover:bg-portfolio-highlight hover:text-white flex items-center gap-2"
          >
             <a 
                href="/assets/Mostafa_Habib(Frontend Developer).pdf" 
                download="Mostafa_Habib(Frontend Developer).pdf" 
              >
                 Resume
              </a>
            <Download size={16} />
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center space-x-2">
          <Button 
            variant="ghost" 
            size="icon" 
            onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
            className="rounded-full"
            aria-label="Toggle theme"
          >
            {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
          </Button>
          <Button variant="ghost" onClick={toggleMenu} aria-label="Toggle menu">
            <Menu size={24} />
          </Button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden bg-white/95 dark:bg-gray-900/95 backdrop-blur-md shadow-lg animate-fade-in">
          <div className="flex flex-col py-4">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className={cn(
                  "px-4 py-3 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors",
                  activeSection === link.href.substring(1)
                    ? "text-portfolio-highlight"
                    : "text-portfolio-darkGray dark:text-gray-200"
                )}
                onClick={() => setIsMenuOpen(false)}
              >
                {link.name}
              </a>
            ))}
            <div className="px-4 pt-4">
              <Button 
                variant="outline" 
                className="w-full border-portfolio-highlight text-portfolio-highlight hover:bg-portfolio-highlight hover:text-white flex items-center justify-center gap-2"
              >
                <Download size={16} />
                <a 
                href="/assets/Mostafa_Habib(Frontend Developer).pdf" 
                download="Mostafa_Habib(Frontend Developer).pdf" 
              >
                Download Resume
              </a>
              </Button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
