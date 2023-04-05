'use client';

import { ProjectCard } from '@/components';
import { projectsData } from '@/constants';

export const Projects = () => {
  return (
    <div className="h-screen flex justify-center items-center">
      <div className="flex overflow-x-scroll pb-5 gap-10">
        {projectsData.map((project, i) => (
          <ProjectCard
            key={project.title + i}
            ProjectIcon={project.Icon}
            linkIcons={project.linkIcons}
            description={project.description}
            title={project.title}
            projectNumber={i + 1}
            totalProjectNumber={projectsData.length}
          />
        ))}
      </div>
    </div>
  );
};
