'use client';

import { ExperiencesCard } from '@/components';
import { experiencesData } from '@/constants';

export const Experiences = () => {
  return (
    <div className="h-screen flex items-center justify-center">
      <div className="flex gap-10 overflow-x-auto p-10 max-md:p-5">
        {experiencesData.map((experience) => (
          <ExperiencesCard
            key={experience.title}
            image={experience.image}
            title={experience.title}
            subTitle={experience.subtTitle}
            dateTime={experience.dateTime}
            summary={experience.summary}
            icons={experience.icons}
          />
        ))}
      </div>
    </div>
  );
};
