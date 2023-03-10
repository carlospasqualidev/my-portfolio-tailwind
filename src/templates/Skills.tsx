import { svgs } from '../assets/index';
import { SkillCircle, Typewriter } from '@/components';
import Image from 'next/image';

const iconsData = [
  {
    key: 1,
    Icon: svgs.Js,
    skillAvg: '89%',
    animDelay: 0,
  },
  {
    key: 2,
    Icon: svgs.Ts,
    skillAvg: '89%',
    animDelay: 0.25,
  },
  {
    key: 3,
    Icon: svgs.Css,
    skillAvg: '81%',
    animDelay: 0.5,
  },
  {
    key: 4,
    Icon: svgs.Html,
    skillAvg: '81%',
    animDelay: 0.75,
  },
  {
    key: 5,
    Icon: svgs.Git,
    skillAvg: '78%',
    animDelay: 1,
  },

  {
    key: 6,
    Icon: svgs.Next,
    skillAvg: '75%',
    animDelay: 1.25,
  },
  {
    key: 7,
    Icon: svgs.Node,
    skillAvg: '87%',
    animDelay: 1.5,
  },
  {
    key: 8,
    Icon: svgs.Prisma,
    skillAvg: '85%',
    animDelay: 1.75,
  },
  {
    key: 9,
    Icon: svgs.Postgresql,
    skillAvg: '75%',
    animDelay: 2,
  },
  {
    key: 10,
    Icon: svgs.React,
    skillAvg: '88%',
    animDelay: 2.25,
  },
  {
    key: 11,
    Icon: svgs.ReactNative,
    skillAvg: '77%',
    animDelay: 2.5,
  },
  {
    key: 12,
    Icon: svgs.Tailwind,
    skillAvg: '78%',
    animDelay: 2.75,
  },
  {
    key: 13,
    Icon: svgs.StyledComponents,
    skillAvg: '82%',
    animDelay: 3,
  },
  {
    key: 14,
    Icon: svgs.Python,
    skillAvg: '64%',
    animDelay: 3.25,
  },
  {
    key: 15,
    Icon: svgs.Csharp,
    skillAvg: '69%',
    animDelay: 3.5,
  },
  {
    key: 16,
    Icon: svgs.Unity,
    skillAvg: '59%',
    animDelay: 3.75,
  },
];

export const Skills = () => {
  return (
    <div className="h-screen flex items-center justify-center flex-wra flex-col gap-10">
      <Typewriter
        className="font-boid text-3xl text-center max-md:text-2xl z-20"
        words={[
          'Descubra mais sobre minhas habilidades',
          'interaja com os icones',
          'viu?, não foi tão difícil...',
        ]}
      />

      <div className="flex gap-6 items-center justify-center flex-wrap w-1/2 max-md:w-full">
        {iconsData.map((skill, i) => (
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
