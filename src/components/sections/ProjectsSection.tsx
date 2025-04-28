import { useState, useEffect } from 'react';
import { ArrowRight, ExternalLink, Github } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import ProjectFilter from '@/components/ProjectFilter';

interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  tags: string[];
  categories: string[];
  codeLink: string | null;
  liveLink: string | null;
}

const projects: Project[] = [
  {
    id: 1,
    title: "Fawry Payday",
    description: "An HR automation platform for managing employee payroll, attendance, and benefits.",
    image: "https://www.fawrypayday.com/assets/images/hero/hero-image.jpg",
    tags: ["React", "Redux", "Material UI"],
    categories: ["Professional", "Frontend"],
    codeLink: null,
    liveLink: "https://www.fawrypayday.com/",
  },
  {
    id: 2,
    title: "POS System",
    description: "A web-based point-of-sale system for managing sales, inventory, and customer data.",
    image: "https://i.pinimg.com/736x/24/6e/17/246e17c437e6f132fe835cf8cd42e9ab.jpg",
    tags: ["React", "Redux", "Material UI"],
    categories: ["Professional", "Full Stack"],
    codeLink: null,
    liveLink: null,
  },
  {
    id: 3,
    title: "Wakeb (Freelance)",
    description: "Custom business solution for managing inventory and customer relationships.",
    image: "./assets/wakeb.png",
    tags: ["React", "TypeScript", "Bootstrap"],
    categories: ["Freelance", "Frontend"],
    codeLink: null,
    liveLink: "https://wakeb.tech/",
  },
  {
    id: 4,
    title: "Grocery App (Freelance)",
    description: "Mobile-responsive grocery shopping application with order tracking and delivery.",
    image: "./../assets/grocery.png",
    tags: ["React", "Redux", "Express.js"],
    categories: ["Freelance", "Mobile"],
    codeLink: "https://github.com/ahmedkhederali/Grocry",
    liveLink: null,
  },
  {
    id: 5,
    title: "Amazon Clone",
    description: "E-commerce site similar to Amazon with product listings, cart functionality, and user authentication.",
    image: "https://mostafahabib86.netlify.app/static/media/amazon.93d435fe2ebbe323ed13.png",
    tags: ["React", "Firebase", "CSS"],
    categories: ["Personal", "Full Stack"],
    codeLink: "https://github.com/mostafa-habib/Amazon-Clone",
    liveLink: "https://amazon-cloonee.netlify.app/",
  },
  {
    id: 6,
    title: "COVID-19",
    description: "Here you can show details about covid-19 and the ways to protect yourself and you will know the main symptoms.",
    image: "https://mostafahabib86.netlify.app/static/media/Covid-19.d26341c2ca750d301c49.png",
    tags: ["React", "Redux", "Express.js"],
    categories: ["Personal", "Mobile"],
    codeLink: "https://github.com/mostafa-habib/Covid-19",
    liveLink: "https://fmcovid-19.netlify.app/",
  },
  {
    id: 7,
    title: "Firegram",
    description: "Instagram-like photo gallery app with image uploading, filtering, and social features.",
    image: "https://mostafahabib86.netlify.app/static/media/firegram.b340747c38c4f424cad9.png",
    tags: ["React", "Firebase", "Tailwind CSS"],
    categories: ["Personal", "Frontend"],
    codeLink: "https://github.com/mostafa-habib/Firegram",
    liveLink: "https://mostafa-firgram.web.app/",
  },
  ,
  {
    id: 8,
    title: "Fullstack Realtime Chat App",
    description: "Fullstack Realtime Chat App that makes you sign-up or log in and chat with anyone.",
    image: "./assets/chat.png",
    tags: ["React", "TypeScript", "Bootstrap"],
    categories: ["Personal", "Frontend"],
    codeLink: "https://github.com/mostafa-habib/RealTime-Chat",
    liveLink: "https://fmrealtime-chat.000webhostapp.com/",
  }
];

const ProjectsSection = () => {
  const [activeFilter, setActiveFilter] = useState("All");
  const [filteredProjects, setFilteredProjects] = useState<Project[]>(projects);
  const [visibleProjects, setVisibleProjects] = useState<Project[]>([]);
  const [projectsToShow, setProjectsToShow] = useState(6);

  const categories = Array.from(new Set(projects.flatMap(project => project.categories)));

  useEffect(() => {
    if (activeFilter === "All") {
      setFilteredProjects(projects);
    } else {
      setFilteredProjects(projects.filter(project => 
        project.categories.includes(activeFilter)
      ));
    }
  }, [activeFilter]);

  useEffect(() => {
    setVisibleProjects(filteredProjects.slice(0, projectsToShow));
  }, [filteredProjects, projectsToShow]);

  const handleLoadMore = () => {
    setProjectsToShow(prev => prev + 6); // Load 6 more projects
  };

  return (
    <section id="projects" className="py-20 bg-gray-50 dark:bg-portfolio-dark relative overflow-hidden">
      <div className="absolute top-1/4 left-0 w-full h-96 bg-portfolio-darkBlue/5 -skew-y-6"></div>
      <div className="section-container relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-800 dark:text-white">My Projects</h2>
          <div className="w-20 h-1 bg-portfolio-highlight mx-auto mb-6"></div>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Here are some of the projects I've worked on. These showcase my skills in frontend development
            and my ability to create responsive, user-friendly web applications.
          </p>
        </div>
        
        <ProjectFilter 
          categories={categories} 
          onFilterChange={setActiveFilter} 
          activeFilter={activeFilter} 
        />
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {visibleProjects.map((project) => (
            <Card 
              key={project.id} 
              className="project-card overflow-hidden bg-white dark:bg-gray-900/30 backdrop-blur-sm transform transition-all duration-300 hover:-translate-y-2"
            >
              <div className="h-48 overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                  loading="lazy"
                />
              </div>
              
              <CardHeader className="border-b border-gray-200 dark:border-gray-800">
                <CardTitle className="text-gray-800 dark:text-white">{project.title}</CardTitle>
                <div className="flex flex-wrap gap-2 mt-2">
                  {project.tags.map((tag, index) => (
                    <span 
                      key={index} 
                      className="text-xs bg-gray-100 dark:bg-gray-800 text-portfolio-highlight px-2 py-1 rounded-full border border-gray-200 dark:border-gray-700"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </CardHeader>
              
              <CardContent className="pt-4">
                <CardDescription className="text-gray-600 dark:text-gray-400">
                  {project.description}
                </CardDescription>
              </CardContent>
              
              <CardFooter className="flex justify-between">
                {project.codeLink && (
                  <a 
                    href={project.codeLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center text-portfolio-highlight hover:text-blue-400"
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
                    className="flex items-center text-portfolio-highlight hover:text-blue-400"
                  >
                    <ExternalLink size={16} className="mr-1" />
                    Live Demo
                  </a>
                )}
                
                {!project.codeLink && !project.liveLink && (
                  <span className="text-gray-500 dark:text-gray-600 text-sm italic">Private Project</span>
                )}
              </CardFooter>
            </Card>
          ))}
        </div>
        
        {visibleProjects.length < filteredProjects.length && (
          <div className="mt-12 text-center">
            <Button 
              onClick={handleLoadMore}
              className="bg-gray-200 hover:bg-gray-300 dark:bg-gray-800 dark:hover:bg-gray-700 text-gray-800 dark:text-white border border-gray-300 dark:border-gray-700 inline-flex items-center gap-2 group"
            >
              See More Projects <ArrowRight size={16} className="transform transition-transform group-hover:translate-x-1" />
            </Button>
          </div>
        )}
      </div>
    </section>
  );
};

export default ProjectsSection;
