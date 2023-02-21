import Image from 'next/image';

import { svgs } from '../assets/index';
import { SkillCircle, Typewriter } from '@/components';

export const Skills = () => {
  return (
    <div className="h-screen flex items-center justify-center pt-16 gap-12">
      <div className="w-1/4">
        <Typewriter
          className="font-boid text-2xl"
          words={[
            'Descubra mais sobre minhas habilidades',
            'Flutue o mouse sobre os icones',
            'viu?, não foi tão difícil...',
          ]}
        />
      </div>

      <div className="flex gap-6 flex-wrap w-1/2">
        <SkillCircle Icon={svgs.Css} skillAvg="81%" />
        <SkillCircle Icon={svgs.Html} animDelay={0.25} skillAvg="81%" />
        <SkillCircle Icon={svgs.Git} animDelay={0.5} skillAvg="78%" />
        <SkillCircle Icon={svgs.Js} animDelay={0.75} skillAvg="89%" />
        <SkillCircle Icon={svgs.Ts} animDelay={1} skillAvg="89%" />
        <SkillCircle Icon={svgs.Next} animDelay={1.25} skillAvg="75%" />
        <SkillCircle Icon={svgs.Node} animDelay={1.5} skillAvg="87%" />
        <SkillCircle Icon={svgs.Postgresql} animDelay={1.75} skillAvg="75%" />
        <SkillCircle Icon={svgs.React} animDelay={2} skillAvg="88%" />
        <SkillCircle Icon={svgs.ReactNative} animDelay={2.25} skillAvg="70%" />
        <SkillCircle Icon={svgs.Tailwind} animDelay={2.5} skillAvg="75%" />
        <SkillCircle Icon={svgs.Csharp} animDelay={2.75} skillAvg="69%" />
        <SkillCircle Icon={svgs.Unity} animDelay={3} skillAvg="67%" />
        <SkillCircle Icon={svgs.Python} animDelay={3.25} skillAvg="61%" />
        <SkillCircle Icon={svgs.Prisma} animDelay={3.5} skillAvg="85%" />
        <SkillCircle
          Icon={svgs.StyledComponents}
          animDelay={3.75}
          skillAvg="82%"
        />
      </div>
    </div>
  );
};
