
import { useState } from 'react';
import { Button } from '@/components/ui/button';

type ProjectFilterProps = {
  categories: string[];
  onFilterChange: (filter: string) => void;
  activeFilter: string;
};

const ProjectFilter = ({ categories, onFilterChange, activeFilter }: ProjectFilterProps) => {
  return (
    <div className="flex flex-wrap justify-center gap-2 mb-8">
      {['All', ...categories].map((category) => (
        <Button
          key={category}
          variant={activeFilter === category ? "default" : "outline"}
          onClick={() => onFilterChange(category)}
          className={`
            text-sm px-4 py-2 transition-all 
            ${activeFilter === category 
              ? 'bg-portfolio-highlight text-white' 
              : 'bg-transparent dark:bg-gray-800/50 dark:text-gray-300 border-gray-300 dark:border-gray-700 hover:border-portfolio-highlight hover:text-portfolio-highlight'
            }
          `}
        >
          {category}
        </Button>
      ))}
    </div>
  );
};

export default ProjectFilter;
