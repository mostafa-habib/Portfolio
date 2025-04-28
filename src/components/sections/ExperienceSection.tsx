
import { Briefcase, GraduationCap } from 'lucide-react';

const experiences = [
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

const education = [
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

const TimelineItem = ({ item }: { item: typeof experiences[0] | typeof education[0] }) => {
  return (
    <div className="relative pl-8 pb-8">
      <div className="absolute top-0 left-0 h-full w-0.5 bg-portfolio-blue" />
      <div className="absolute top-0 left-0 w-8 h-8 -translate-x-1/2 flex items-center justify-center rounded-full bg-portfolio-blue text-white">
        {item.type === "work" ? <Briefcase size={16} /> : <GraduationCap size={16} />}
      </div>
      <div className="bg-white rounded-lg shadow-md p-6">
        <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center mb-4">
          <h3 className="text-xl font-bold">{item.title}</h3>
          <span className="text-sm bg-portfolio-softBlue text-portfolio-darkGray px-3 py-1 rounded-full mt-2 sm:mt-0">
            {item.period}
          </span>
        </div>
        <p className="text-portfolio-blue font-medium mb-4">
          {item.company || item.institution}
        </p>
        <ul className="list-disc pl-5 space-y-2">
          {item.description.map((desc, index) => (
            <li key={index} className="text-gray-600">{desc}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

const ExperienceSection = () => {
  return (
    <section id="experience" className="py-20 bg-portfolio-lightGray">
      <div className="section-container">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Experience & Education</h2>
          <div className="w-20 h-1 bg-portfolio-blue mx-auto mb-6"></div>
          <p className="text-gray-600 max-w-2xl mx-auto">
            My professional journey and academic background that have shaped my skills and expertise.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <h3 className="text-2xl font-bold mb-6 flex items-center">
              <Briefcase className="mr-2 text-portfolio-blue" /> Work Experience
            </h3>
            
            <div className="mt-8">
              {experiences.map(experience => (
                <TimelineItem key={experience.id} item={experience} />
              ))}
            </div>
          </div>
          
          <div>
            <h3 className="text-2xl font-bold mb-6 flex items-center">
              <GraduationCap className="mr-2 text-portfolio-blue" /> Education
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
