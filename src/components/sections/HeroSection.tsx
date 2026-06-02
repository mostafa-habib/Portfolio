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
                <a 
                href="/assets/Mostafa_Habib_Frontend_Developer_CV.pdf" 
                download="Mostafa_Habib_Frontend_Developer_CV.pdf" 
              >
                Download Resume
              </a>
              </Button>
            </div>
          </div>
          
          <div className="lg:w-1/2 relative">
            <div className="floating-cards-container relative w-[400px] h-[400px]">
              <div className="floating-card absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 rounded-full overflow-hidden shadow-xl">
                <img 
                  src="/assets/mostafa-habib.jfif"
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
                <svg
                  width="100%"
                  height="100%"
                  viewBox="0 0 256 154"
                  xmlns="http://www.w3.org/2000/svg"
                  preserveAspectRatio="xMidYMid"
                >
                  <defs>
                    <linearGradient x1="-2.77777778%" y1="32%" x2="100%" y2="67.5555556%" id="linearGradient-1">
                      <stop stopColor="#2298BD" offset="0%"></stop>
                      <stop stopColor="#0ED7B5" offset="100%"></stop>
                    </linearGradient>
                  </defs>
                  <g>
                    <path
                      d="M128,-1.0658141e-14 C93.8666667,-1.0658141e-14 72.5333333,17.0666667 64,51.2 C76.8,34.1333333 91.7333333,27.7333333 108.8,32 C118.537481,34.4343704 125.497363,41.4985481 133.201067,49.3184 C145.750756,62.0567704 160.275437,76.8 192,76.8 C226.133333,76.8 247.466667,59.7333333 256,25.6 C243.2,42.6666667 228.266667,49.0666667 211.2,44.8 C201.462519,42.3656296 194.502637,35.3014519 186.798933,27.4816 C174.249244,14.7432296 159.724563,-1.0658141e-14 128,-1.0658141e-14 Z M64,76.8 C29.8666667,76.8 8.53333333,93.8666667 0,128 C12.8,110.933333 27.7333333,104.533333 44.8,108.8 C54.5374815,111.23437 61.497363,118.298548 69.2010667,126.1184 C81.7507556,138.85677 96.275437,153.6 128,153.6 C162.133333,153.6 183.466667,136.533333 192,102.4 C179.2,119.466667 164.266667,125.866667 147.2,121.6 C137.462519,119.16563 130.502637,112.101452 122.798933,104.2816 C110.249244,91.5432296 95.724563,76.8 64,76.8 Z"
                      fill="url(#linearGradient-1)"
                    ></path>
                  </g>
                </svg>
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
