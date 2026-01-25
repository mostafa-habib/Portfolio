
import { Briefcase, Code, User } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const AboutSection = () => {
  return (
    <section id="about" className="py-20 bg-white dark:bg-portfolio-darkBg">
      <div className="section-container">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900 dark:text-white">About Me</h2>
          <div className="w-20 h-1 bg-portfolio-highlight mx-auto"></div>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
          <Card className="bg-white/90 dark:bg-gray-900/40 border-gray-200 dark:border-gray-800 hover:border-portfolio-highlight transition-colors shadow-lg hover:shadow-portfolio-highlight/10">
            <CardContent className="p-6 flex flex-col items-center text-center">
              <div className="w-16 h-16 rounded-full bg-gray-100 dark:bg-gray-800/80 flex items-center justify-center mb-4">
                <User className="text-portfolio-highlight w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold mb-2 text-gray-900 dark:text-white">Who I Am</h3>
              <p className="text-gray-600 dark:text-gray-400">
                Frontend Developer with 3+ years of experience building responsive, 
                interactive, and user-friendly web applications.
              </p>
            </CardContent>
          </Card>
          
          <Card className="bg-white/90 dark:bg-gray-900/40 border-gray-200 dark:border-gray-800 hover:border-portfolio-highlight transition-colors shadow-lg hover:shadow-portfolio-highlight/10">
            <CardContent className="p-6 flex flex-col items-center text-center">
              <div className="w-16 h-16 rounded-full bg-gray-100 dark:bg-gray-800/80 flex items-center justify-center mb-4">
                <Code className="text-portfolio-highlight w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold mb-2 text-gray-900 dark:text-white">What I Do</h3>
              <p className="text-gray-600 dark:text-gray-400">
                I specialize in modern JavaScript frameworks like React.js, Next.js, and Angular 
                to create beautiful, performant user interfaces.
              </p>
            </CardContent>
          </Card>
          
          <Card className="bg-white/90 dark:bg-gray-900/40 border-gray-200 dark:border-gray-800 hover:border-portfolio-highlight transition-colors shadow-lg hover:shadow-portfolio-highlight/10">
            <CardContent className="p-6 flex flex-col items-center text-center">
              <div className="w-16 h-16 rounded-full bg-gray-100 dark:bg-gray-800/80 flex items-center justify-center mb-4">
                <Briefcase className="text-portfolio-highlight w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold mb-2 text-gray-900 dark:text-white">My Experience</h3>
              <p className="text-gray-600 dark:text-gray-400">
                Currently working at Dirac Systems (a subsidiary of Fawry), 
                contributing to HR automation and enterprise software.
              </p>
            </CardContent>
          </Card>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h3 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">Professional Summary</h3>
            <p className="text-gray-600 dark:text-gray-400 mb-4">
              Frontend Developer with 3+ years of experience building production-ready web applications 
              using React.js, Next.js, and Angular. I create responsive, accessible, and performance-optimized 
              interfaces that delight users and solve real problems.
            </p>
            <p className="text-gray-600 dark:text-gray-400 mb-4">
              I collaborate closely with designers, backend engineers, and product teams to turn complex 
              requirements into intuitive user experiences.
            </p>
            <p className="text-gray-600 dark:text-gray-400">
              Passionate about clean code, continuous learning, and delivering products that make a real impact.
            </p>
          </div>
          
          <div className="grid grid-cols-2 gap-4">
            <div className="bg-white/80 dark:glass-effect p-6 rounded-lg border border-gray-200 dark:border-transparent">
              <h4 className="font-bold text-2xl mb-2 text-portfolio-highlight">3+</h4>
              <p className="text-gray-600 dark:text-gray-400">Years of Experience</p>
            </div>
            <div className="bg-white/80 dark:glass-effect p-6 rounded-lg border border-gray-200 dark:border-transparent">
              <h4 className="font-bold text-2xl mb-2 text-portfolio-highlight">20+</h4>
              <p className="text-gray-600 dark:text-gray-400">Projects Completed</p>
            </div>
            <div className="bg-white/80 dark:glass-effect p-6 rounded-lg border border-gray-200 dark:border-transparent">
              <h4 className="font-bold text-2xl mb-2 text-portfolio-highlight">Frontend</h4>
              <p className="text-gray-600 dark:text-gray-400">Development Focus</p>
            </div>
            <div className="bg-white/80 dark:glass-effect p-6 rounded-lg border border-gray-200 dark:border-transparent">
              <h4 className="font-bold text-2xl mb-2 text-portfolio-highlight">UI/UX</h4>
              <p className="text-gray-600 dark:text-gray-400">Design Passion</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
