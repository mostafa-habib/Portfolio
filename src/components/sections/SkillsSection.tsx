
import { Card, CardContent } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';

const frontendSkills = [
  "React.js", "Next.js", "Angular", "JavaScript", "TypeScript", "Redux", "Material UI", "Tailwind CSS", "HTML5", "CSS3", "SASS/SCSS"
];

const otherSkills = [
  "Responsive Design", "Performance Optimization", "Jest", "React Testing Library", "Node.js", "Express.js", "MongoDB", "PostgreSQL", "Git", "RESTful APIs"
];

const SkillsSection = () => {
  return (
    <section id="skills" className="py-20 bg-gray-50 dark:bg-portfolio-darkBg relative">
      <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-portfolio-highlight/5 rounded-bl-full"></div>
      <div className="absolute bottom-0 left-0 w-1/3 h-1/3 bg-portfolio-darkBlue/5 rounded-tr-full"></div>
      
      <div className="section-container relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900 dark:text-white">My Skills</h2>
          <div className="w-20 h-1 bg-portfolio-highlight mx-auto mb-6"></div>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            I've acquired a diverse set of skills throughout my career,
            focusing primarily on frontend development technologies.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <Card className="bg-white/90 dark:bg-gray-900/30 border-gray-200 dark:border-gray-800 backdrop-blur-sm shadow-lg">
            <CardContent className="pt-6">
              <h3 className="text-xl font-bold mb-6 text-gray-900 dark:text-white">Frontend Development</h3>
              <div className="space-y-6">
                <div>
                  <div className="flex justify-between mb-1">
                    <span className="font-medium text-gray-800 dark:text-gray-300">React.js</span>
                    <span className="text-portfolio-highlight">90%</span>
                  </div>
                  <Progress value={90} className="h-2 bg-gray-200 dark:bg-gray-800">
                    <div className="h-full bg-portfolio-highlight rounded-full"></div>
                  </Progress>
                </div>
                <div>
                  <div className="flex justify-between mb-1">
                    <span className="font-medium text-gray-800 dark:text-gray-300">Next.js</span>
                    <span className="text-portfolio-highlight">85%</span>
                  </div>
                  <Progress value={85} className="h-2 bg-gray-200 dark:bg-gray-800">
                    <div className="h-full bg-portfolio-highlight rounded-full"></div>
                  </Progress>
                </div>
                <div>
                  <div className="flex justify-between mb-1">
                    <span className="font-medium text-gray-800 dark:text-gray-300">Angular</span>
                    <span className="text-portfolio-highlight">75%</span>
                  </div>
                  <Progress value={75} className="h-2 bg-gray-200 dark:bg-gray-800">
                    <div className="h-full bg-portfolio-highlight rounded-full"></div>
                  </Progress>
                </div>
                <div>
                  <div className="flex justify-between mb-1">
                    <span className="font-medium text-gray-800 dark:text-gray-300">JavaScript/TypeScript</span>
                    <span className="text-portfolio-highlight">90%</span>
                  </div>
                  <Progress value={90} className="h-2 bg-gray-200 dark:bg-gray-800">
                    <div className="h-full bg-portfolio-highlight rounded-full"></div>
                  </Progress>
                </div>
                <div>
                  <div className="flex justify-between mb-1">
                    <span className="font-medium text-gray-800 dark:text-gray-300">CSS & UI Libraries</span>
                    <span className="text-portfolio-highlight">85%</span>
                  </div>
                  <Progress value={85} className="h-2 bg-gray-200 dark:bg-gray-800">
                    <div className="h-full bg-portfolio-highlight rounded-full"></div>
                  </Progress>
                </div>
              </div>
              
              <div className="mt-8">
                <h4 className="font-medium mb-4 text-gray-800 dark:text-gray-300">All Frontend Skills</h4>
                <div className="flex flex-wrap gap-2">
                  {frontendSkills.map((skill, index) => (
                    <span key={index} className="bg-gray-100/60 dark:bg-gray-800/60 text-gray-800 dark:text-gray-300 rounded-full px-4 py-2 text-sm font-medium border border-gray-200 dark:border-gray-700 hover:bg-gray-200 dark:hover:bg-gray-700">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>
          
          <Card className="bg-white/90 dark:bg-gray-900/30 border-gray-200 dark:border-gray-800 backdrop-blur-sm shadow-lg">
            <CardContent className="pt-6">
              <h3 className="text-xl font-bold mb-6 text-gray-900 dark:text-white">Other Skills</h3>
              <div className="space-y-6">
                <div>
                  <div className="flex justify-between mb-1">
                    <span className="font-medium text-gray-800 dark:text-gray-300">UI/UX Design</span>
                    <span className="text-portfolio-highlight">80%</span>
                  </div>
                  <Progress value={80} className="h-2 bg-gray-200 dark:bg-gray-800">
                    <div className="h-full bg-portfolio-highlight rounded-full"></div>
                  </Progress>
                </div>
                <div>
                  <div className="flex justify-between mb-1">
                    <span className="font-medium text-gray-800 dark:text-gray-300">Testing</span>
                    <span className="text-portfolio-highlight">75%</span>
                  </div>
                  <Progress value={75} className="h-2 bg-gray-200 dark:bg-gray-800">
                    <div className="h-full bg-portfolio-highlight rounded-full"></div>
                  </Progress>
                </div>
                <div>
                  <div className="flex justify-between mb-1">
                    <span className="font-medium text-gray-800 dark:text-gray-300">Backend Basics</span>
                    <span className="text-portfolio-highlight">70%</span>
                  </div>
                  <Progress value={70} className="h-2 bg-gray-200 dark:bg-gray-800">
                    <div className="h-full bg-portfolio-highlight rounded-full"></div>
                  </Progress>
                </div>
                <div>
                  <div className="flex justify-between mb-1">
                    <span className="font-medium text-gray-800 dark:text-gray-300">Databases</span>
                    <span className="text-portfolio-highlight">65%</span>
                  </div>
                  <Progress value={65} className="h-2 bg-gray-200 dark:bg-gray-800">
                    <div className="h-full bg-portfolio-highlight rounded-full"></div>
                  </Progress>
                </div>
                <div>
                  <div className="flex justify-between mb-1">
                    <span className="font-medium text-gray-800 dark:text-gray-300">Performance Optimization</span>
                    <span className="text-portfolio-highlight">80%</span>
                  </div>
                  <Progress value={80} className="h-2 bg-gray-200 dark:bg-gray-800">
                    <div className="h-full bg-portfolio-highlight rounded-full"></div>
                  </Progress>
                </div>
              </div>
              
              <div className="mt-8">
                <h4 className="font-medium mb-4 text-gray-800 dark:text-gray-300">Additional Skills</h4>
                <div className="flex flex-wrap gap-2">
                  {otherSkills.map((skill, index) => (
                    <span key={index} className="bg-gray-100/60 dark:bg-gray-800/60 text-gray-800 dark:text-gray-300 rounded-full px-4 py-2 text-sm font-medium border border-gray-200 dark:border-gray-700 hover:bg-gray-200 dark:hover:bg-gray-700">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
