
import { ArrowDown } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useEffect, useState } from 'react';

const createSpherePositions = (count: number) => {
  const positions = [];
  const phi = Math.PI * (3 - Math.sqrt(5)); // golden angle
  
  for (let i = 0; i < count; i++) {
    const y = 1 - (i / (count - 1)) * 2; // y goes from 1 to -1
    const radius = Math.sqrt(1 - y * y); // radius at y
    const theta = phi * i; // golden angle increment
    
    const x = Math.cos(theta) * radius;
    const z = Math.sin(theta) * radius;
    
    positions.push({
      x: x * 240,
      y: y * 240,
      z: z * 240,
      rotateX: Math.random() * 360,
      rotateY: Math.random() * 360,
      rotateZ: Math.random() * 360
    });
  }
  
  return positions;
};

const images = [
  "/lovable-uploads/8fd6e517-106d-4d96-9f73-63ab4eb072ac.png",
  "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=200&h=200&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=200&h=200&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=200&h=200&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=200&h=200&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1531297484001-80022131f5a1?w=200&h=200&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1607706189992-eae578626c86?w=200&h=200&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1605379399642-870262d3d051?w=200&h=200&auto=format&fit=crop"
];

const HeroSection = () => {
  const [positions, setPositions] = useState<any[]>([]);

  useEffect(() => {
    setPositions(createSpherePositions(12));
  }, []);

  return (
    <section 
      id="home" 
      className="min-h-screen flex items-center bg-portfolio-dark pt-16 relative overflow-hidden"
    >
      <div className="absolute top-20 left-10 w-60 h-60 bg-portfolio-highlight/20 rounded-full filter blur-3xl"></div>
      <div className="absolute bottom-10 right-10 w-80 h-80 bg-portfolio-darkBlue/20 rounded-full filter blur-3xl"></div>
      
      <div className="container mx-auto px-4 z-10 pt-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          <div className="lg:w-1/2 animate-slide-in">
            <h1 className="text-3xl md:text-4xl lg:text-6xl font-bold mb-4 text-white">
              Hi, I'm <span className="text-portfolio-highlight">Mostafa Habib</span>
            </h1>
            <h2 className="text-xl md:text-2xl lg:text-3xl text-portfolio-darkText font-medium mb-6">
              Frontend Developer
            </h2>
            <p className="text-lg text-gray-400 mb-8 max-w-xl">
              Building modern and responsive experiences for the web with a focus on 
              performance, accessibility, and beautiful user interfaces.
            </p>
            
            <div className="flex flex-wrap gap-4">
              <Button 
                className="bg-portfolio-highlight hover:bg-blue-500 text-black font-medium px-6 py-6"
                onClick={() => {
                  document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
                }}
              >
                Contact Me
              </Button>
              
              <Button variant="outline" className="border-gray-700 text-gray-300 hover:bg-gray-800 hover:text-white py-6">
                Download Resume
              </Button>
            </div>
          </div>
          
          <div className="lg:w-1/2 h-[500px] flex justify-center items-center">
            <div className="sphere relative w-[400px] h-[400px] animate-[spin_20s_linear_infinite]">
              {positions.map((pos, i) => (
                <div 
                  key={i} 
                  className="sphere-item"
                  style={{
                    transform: `translate3d(${pos.x}px, ${pos.y}px, ${pos.z}px) rotateX(${pos.rotateX}deg) rotateY(${pos.rotateY}deg) rotateZ(${pos.rotateZ}deg)`,
                  }}
                >
                  <img 
                    src={images[i % images.length]} 
                    alt="Project visual" 
                    className="w-full h-full object-cover"
                  />
                </div>
              ))}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-24 h-24 rounded-full overflow-hidden z-10">
                <img 
                  src="https://images.unsplash.com/photo-1607990283143-e81e7a2c9349?w=200&h=200&auto=format&fit=crop"
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
            className="flex items-center justify-center w-10 h-10 rounded-full bg-gray-800/80 border border-gray-700"
          >
            <ArrowDown size={20} className="text-portfolio-highlight" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
