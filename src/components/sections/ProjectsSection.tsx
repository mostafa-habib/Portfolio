
import { ArrowRight, ExternalLink, Github } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';

const projects = [
  {
    id: 1,
    title: "Fawry Payday",
    description: "An HR automation platform for managing employee payroll, attendance, and benefits.",
    image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=800&auto=format&fit=crop",
    tags: ["React", "Redux", "Material UI"],
    codeLink: null,
    liveLink: null,
  },
  {
    id: 2,
    title: "Amazon Clone",
    description: "E-commerce site similar to Amazon with product listings, cart functionality, and user authentication.",
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=800&auto=format&fit=crop",
    tags: ["React", "Firebase", "CSS"],
    codeLink: "#",
    liveLink: "#",
  },
  {
    id: 3,
    title: "Firegram",
    description: "Instagram-like photo gallery app with image uploading, filtering, and social features.",
    image: "https://images.unsplash.com/photo-1531297484001-80022131f5a1?w=800&auto=format&fit=crop",
    tags: ["React", "Firebase", "Tailwind CSS"],
    codeLink: "#",
    liveLink: "#",
  },
  {
    id: 4,
    title: "NextJS Meetups",
    description: "Browse and register for local community meetups with location-based filtering.",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&auto=format&fit=crop",
    tags: ["Next.js", "MongoDB", "Tailwind CSS"],
    codeLink: "#",
    liveLink: "#",
  },
  {
    id: 5,
    title: "Wakeb (Freelance)",
    description: "Custom business solution for managing inventory and customer relationships.",
    image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=800&auto=format&fit=crop",
    tags: ["Angular", "TypeScript", "Bootstrap"],
    codeLink: null,
    liveLink: null,
  },
  {
    id: 6,
    title: "Grocery App (Freelance)",
    description: "Mobile-responsive grocery shopping application with order tracking and delivery.",
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=800&auto=format&fit=crop",
    tags: ["React Native", "Redux", "Express.js"],
    codeLink: null,
    liveLink: null,
  },
];

const ProjectsSection = () => {
  return (
    <section id="projects" className="py-20 bg-portfolio-lightGray">
      <div className="section-container">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">My Projects</h2>
          <div className="w-20 h-1 bg-portfolio-blue mx-auto mb-6"></div>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Here are some of the projects I've worked on. These showcase my skills in frontend development
            and my ability to create responsive, user-friendly web applications.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <Card key={project.id} className="project-card overflow-hidden">
              <div className="h-48 overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                />
              </div>
              
              <CardHeader>
                <CardTitle>{project.title}</CardTitle>
                <div className="flex flex-wrap gap-2 mt-2">
                  {project.tags.map((tag, index) => (
                    <span 
                      key={index} 
                      className="text-xs bg-portfolio-softBlue text-portfolio-darkGray px-2 py-1 rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </CardHeader>
              
              <CardContent>
                <CardDescription className="text-gray-600">
                  {project.description}
                </CardDescription>
              </CardContent>
              
              <CardFooter className="flex justify-between">
                {project.codeLink && (
                  <a 
                    href={project.codeLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center text-portfolio-blue hover:underline"
                  >
                    <Github size={16} className="mr-1" />
                    Code
                  </a>
                )}
                
                {project.liveLink && (
                  <a 
                    href={project.liveLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center text-portfolio-blue hover:underline"
                  >
                    <ExternalLink size={16} className="mr-1" />
                    Live Demo
                  </a>
                )}
                
                {!project.codeLink && !project.liveLink && (
                  <span className="text-gray-500 text-sm italic">Private Project</span>
                )}
              </CardFooter>
            </Card>
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <Button className="bg-portfolio-blue hover:bg-blue-600 inline-flex items-center gap-2">
            See More Projects <ArrowRight size={16} />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
