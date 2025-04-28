
import { ArrowDown } from 'lucide-react';
import { Button } from '@/components/ui/button';

const HeroSection = () => {
  return (
    <section 
      id="home" 
      className="min-h-screen flex items-center bg-gradient-to-br from-white to-portfolio-softBlue pt-16"
    >
      <div className="container mx-auto px-4">
        <div className="flex flex-col-reverse lg:flex-row items-center justify-between gap-12">
          <div className="lg:w-1/2 animate-slide-in">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
              Hi, I'm <span className="text-portfolio-blue">Mostafa Habib</span>
            </h1>
            <h2 className="text-xl md:text-2xl lg:text-3xl text-portfolio-darkGray font-medium mb-6">
              Frontend Developer
            </h2>
            <p className="text-lg text-gray-600 mb-8 max-w-xl">
              Building modern and responsive experiences for the web with a focus on 
              performance, accessibility, and beautiful user interfaces.
            </p>
            
            <div className="flex flex-wrap gap-4">
              <Button 
                className="bg-portfolio-blue hover:bg-blue-600 text-white px-6 py-2"
                onClick={() => {
                  document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
                }}
              >
                Contact Me
              </Button>
              
              <Button variant="outline" className="border-portfolio-blue text-portfolio-blue hover:bg-portfolio-blue hover:text-white">
                Download Resume
              </Button>
            </div>
          </div>
          
          <div className="lg:w-1/2 flex justify-center animate-fade-in">
            <div className="relative w-64 h-64 md:w-80 md:h-80">
              <div className="absolute top-0 left-0 w-full h-full bg-portfolio-blue rounded-full opacity-20 transform -translate-x-4 -translate-y-4"></div>
              <div className="relative w-full h-full rounded-full overflow-hidden border-4 border-white shadow-xl">
                <img 
                  src="https://images.unsplash.com/photo-1607990283143-e81e7a2c9349?w=800&auto=format&fit=crop"
                  alt="Mostafa Habib" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
        
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 hidden md:block animate-bounce">
          <a 
            href="#about"
            aria-label="Scroll down"
            className="flex items-center justify-center w-10 h-10 rounded-full bg-white shadow-md"
          >
            <ArrowDown size={20} className="text-portfolio-blue" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
