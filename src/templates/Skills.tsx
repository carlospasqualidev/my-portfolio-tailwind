import { SkillCircle, Typewriter } from '@/components';
import { skillsData } from '@/constants';

export const Skills = () => {
  return (
    <div className="h-screen flex items-center justify-center flex-wra flex-col gap-10">
      <Typewriter
        className="font-boid text-3xl text-center max-md:text-2xl z-20"
        words={[
          'Descubra mais sobre minhas habilidades',
          'Interaja com os icones',
        ]}
      />

      <div className="flex gap-6 items-center justify-center flex-wrap w-1/2 max-md:w-full">
        {skillsData.map((skill, i) => (
          <SkillCircle
            key={skill.key}
            Icon={skill.Icon}
            skillAvg={skill.skillAvg}
            animDelay={skill.animDelay}
          />
        ))}
      </div>
    </div>
  );
};
