
import { Briefcase, GraduationCap } from 'lucide-react';

interface BaseTimelineItem {
  id: number;
  title: string;
  period: string;
  description: string[];
  type: string;
}

interface WorkExperience extends BaseTimelineItem {
  company: string;
  type: "work";
}

interface Education extends BaseTimelineItem {
  institution: string;
  type: "education";
}

type TimelineItemType = WorkExperience | Education;

const experiences: WorkExperience[] = [
  {
    id: 1,
    title: "Frontend Developer",
    company: "Dirac Systems (Fawry)",
    period: "2022 - Present",
    description: [
      "Developed ERP system with HR and Accounting modules using React.js and Redux.",
      "Built a POS system for retail businesses with real-time inventory tracking.",
      "Created multiple mobile and web applications using React Native and React.js.",
      "Improved system performance by optimizing component rendering and network requests.",
      "Implemented security features to prevent vulnerabilities like SQL Injection."
    ],
    type: "work"
  }
];

const education: Education[] = [
  {
    id: 1,
    title: "Bachelor of Computer Science",
    institution: "Minufiya University",
    period: "2016 - 2020",
    description: [
      "Focused on software engineering, web development, and database design.",
      "Graduated with honors and completed several real-world projects."
    ],
    type: "education"
  }
];

const TimelineItem = ({ item }: { item: TimelineItemType }) => {
  return (
    <div className="relative pl-8 pb-8">
      <div className="absolute top-0 left-0 h-full w-0.5 bg-gray-800"></div>
      <div className="absolute top-0 left-0 w-8 h-8 -translate-x-1/2 flex items-center justify-center rounded-full bg-gray-900 border border-gray-800 text-white">
        {item.type === "work" ? <Briefcase size={16} className="text-portfolio-highlight" /> : <GraduationCap size={16} className="text-portfolio-highlight" />}
      </div>
      <div className="bg-gray-900/30 backdrop-blur-sm border border-gray-800 rounded-lg shadow-md p-6 hover:border-portfolio-highlight transition-colors">
        <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center mb-4">
          <h3 className="text-xl font-bold text-white">{item.title}</h3>
          <span className="text-sm bg-gray-800 text-portfolio-highlight px-3 py-1 rounded-full mt-2 sm:mt-0 border border-gray-700">
            {item.period}
          </span>
        </div>
        <p className="text-portfolio-highlight font-medium mb-4">
          {item.type === "work" ? item.company : item.institution}
        </p>
        <ul className="list-disc pl-5 space-y-2">
          {item.description.map((desc, index) => (
            <li key={index} className="text-gray-400">{desc}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

const ExperienceSection = () => {
  return (
    <section id="experience" className="py-20 bg-portfolio-dark relative">
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=800&auto=format&fit=crop')] opacity-[0.03] bg-fixed"></div>
      <div className="section-container relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">Experience & Education</h2>
          <div className="w-20 h-1 bg-portfolio-highlight mx-auto mb-6"></div>
          <p className="text-gray-400 max-w-2xl mx-auto">
            My professional journey and academic background that have shaped my skills and expertise.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <h3 className="text-2xl font-bold mb-6 flex items-center text-white">
              <Briefcase className="mr-2 text-portfolio-highlight" /> Work Experience
            </h3>
            
            <div className="mt-8">
              {experiences.map(experience => (
                <TimelineItem key={experience.id} item={experience} />
              ))}
            </div>
          </div>
          
          <div>
            <h3 className="text-2xl font-bold mb-6 flex items-center text-white">
              <GraduationCap className="mr-2 text-portfolio-highlight" /> Education
            </h3>
            
            <div className="mt-8">
              {education.map(edu => (
                <TimelineItem key={edu.id} item={edu} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
