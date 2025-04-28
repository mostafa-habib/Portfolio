
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
    <section id="skills" className="py-20 bg-white">
      <div className="section-container">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">My Skills</h2>
          <div className="w-20 h-1 bg-portfolio-blue mx-auto mb-6"></div>
          <p className="text-gray-600 max-w-2xl mx-auto">
            I've acquired a diverse set of skills throughout my career,
            focusing primarily on frontend development technologies.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <Card className="shadow-lg">
            <CardContent className="pt-6">
              <h3 className="text-xl font-bold mb-6">Frontend Development</h3>
              <div className="space-y-6">
                <div>
                  <div className="flex justify-between mb-1">
                    <span className="font-medium">React.js</span>
                    <span>90%</span>
                  </div>
                  <Progress value={90} className="h-2" />
                </div>
                <div>
                  <div className="flex justify-between mb-1">
                    <span className="font-medium">Next.js</span>
                    <span>85%</span>
                  </div>
                  <Progress value={85} className="h-2" />
                </div>
                <div>
                  <div className="flex justify-between mb-1">
                    <span className="font-medium">Angular</span>
                    <span>75%</span>
                  </div>
                  <Progress value={75} className="h-2" />
                </div>
                <div>
                  <div className="flex justify-between mb-1">
                    <span className="font-medium">JavaScript/TypeScript</span>
                    <span>90%</span>
                  </div>
                  <Progress value={90} className="h-2" />
                </div>
                <div>
                  <div className="flex justify-between mb-1">
                    <span className="font-medium">CSS & UI Libraries</span>
                    <span>85%</span>
                  </div>
                  <Progress value={85} className="h-2" />
                </div>
              </div>
              
              <div className="mt-8">
                <h4 className="font-medium mb-4">All Frontend Skills</h4>
                <div className="flex flex-wrap gap-2">
                  {frontendSkills.map((skill, index) => (
                    <span key={index} className="skill-item">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>
          
          <Card className="shadow-lg">
            <CardContent className="pt-6">
              <h3 className="text-xl font-bold mb-6">Other Skills</h3>
              <div className="space-y-6">
                <div>
                  <div className="flex justify-between mb-1">
                    <span className="font-medium">UI/UX Design</span>
                    <span>80%</span>
                  </div>
                  <Progress value={80} className="h-2" />
                </div>
                <div>
                  <div className="flex justify-between mb-1">
                    <span className="font-medium">Testing</span>
                    <span>75%</span>
                  </div>
                  <Progress value={75} className="h-2" />
                </div>
                <div>
                  <div className="flex justify-between mb-1">
                    <span className="font-medium">Backend Basics</span>
                    <span>70%</span>
                  </div>
                  <Progress value={70} className="h-2" />
                </div>
                <div>
                  <div className="flex justify-between mb-1">
                    <span className="font-medium">Databases</span>
                    <span>65%</span>
                  </div>
                  <Progress value={65} className="h-2" />
                </div>
                <div>
                  <div className="flex justify-between mb-1">
                    <span className="font-medium">Performance Optimization</span>
                    <span>80%</span>
                  </div>
                  <Progress value={80} className="h-2" />
                </div>
              </div>
              
              <div className="mt-8">
                <h4 className="font-medium mb-4">Additional Skills</h4>
                <div className="flex flex-wrap gap-2">
                  {otherSkills.map((skill, index) => (
                    <span key={index} className="skill-item">
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
