
import { ArrowDown } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useEffect } from 'react';

const HeroSection = () => {
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const cards = document.querySelectorAll('.floating-card');
      cards.forEach((card) => {
        const rect = (card as HTMLElement).getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        
        (card as HTMLElement).style.setProperty('--mouse-x', `${x}px`);
        (card as HTMLElement).style.setProperty('--mouse-y', `${y}px`);
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <section 
      id="home" 
      className="min-h-screen flex items-center bg-white dark:bg-portfolio-dark pt-16 relative overflow-hidden"
    >
      <div className="absolute top-20 left-10 w-60 h-60 bg-portfolio-highlight/20 dark:bg-portfolio-highlight/20 rounded-full filter blur-3xl"></div>
      <div className="absolute bottom-10 right-10 w-80 h-80 bg-portfolio-darkBlue/20 dark:bg-portfolio-darkBlue/20 rounded-full filter blur-3xl"></div>
      
      <div className="container mx-auto px-4 z-10 pt-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          <div className="lg:w-1/2 animate-slide-in">
            <h1 className="text-3xl md:text-4xl lg:text-6xl font-bold mb-4 text-gray-900 dark:text-white">
              Hi, I'm <span className="text-portfolio-highlight">Mostafa Habib</span>
            </h1>
            <h2 className="text-xl md:text-2xl lg:text-3xl text-gray-700 dark:text-portfolio-darkText font-medium mb-6">
              Frontend Developer
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 mb-8 max-w-xl">
              Building modern and responsive experiences for the web with a focus on 
              performance, accessibility, and beautiful user interfaces.
            </p>
            
            <div className="flex flex-wrap gap-4">
              <Button 
                className="bg-portfolio-highlight hover:bg-blue-500 text-black dark:text-white font-medium px-6 py-6"
                onClick={() => {
                  document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
                }}
              >
                Contact Me
              </Button>
              
              <Button 
                variant="outline" 
                className="border-gray-300 dark:border-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 py-6"
              >
                Download Resume
              </Button>
            </div>
          </div>
          
          <div className="lg:w-1/2 relative">
            <div className="floating-cards-container relative w-[400px] h-[400px]">
              <div className="floating-card absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 rounded-full overflow-hidden shadow-xl">
                <img 
                  src="/lovable-uploads/fcce9f3b-8fe9-4d31-9729-a8588cfd07cd.png"
                  alt="Mostafa Habib" 
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-tr from-portfolio-highlight/20 to-transparent opacity-75"></div>
              </div>
              
              <div className="floating-card absolute w-20 h-20 bg-white dark:bg-gray-800 rounded-lg shadow-lg p-4 animate-float"
                   style={{ top: '10%', left: '20%', animationDelay: '0.2s' }}>
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" alt="React" />
              </div>
              
              <div className="floating-card absolute w-20 h-20 bg-white dark:bg-gray-800 rounded-lg shadow-lg p-4 animate-float"
                   style={{ top: '70%', left: '10%', animationDelay: '0.4s' }}>
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" alt="TypeScript" />
              </div>
              
              <div className="floating-card absolute w-20 h-20 bg-white dark:bg-gray-800 rounded-lg shadow-lg p-4 animate-float"
                   style={{ top: '20%', right: '10%', animationDelay: '0.6s' }}>
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain.svg" className="dark:invert" alt="Tailwind" />
              </div>
              
              <div className="floating-card absolute w-20 h-20 bg-white dark:bg-gray-800 rounded-lg shadow-lg p-4 animate-float"
                   style={{ bottom: '20%', right: '20%', animationDelay: '0.8s' }}>
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg" className="dark:invert" alt="Next.js" />
              </div>
            </div>
          </div>
        </div>
        
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 hidden md:block animate-bounce">
          <a 
            href="#about"
            aria-label="Scroll down"
            className="flex items-center justify-center w-10 h-10 rounded-full bg-white dark:bg-gray-800/80 border border-gray-200 dark:border-gray-700"
          >
            <ArrowDown size={20} className="text-portfolio-highlight" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
