'use client';

import { images, svgs } from '@/assets';
import { Card } from '@/components/Card';

import {
  FaDev,
  FaJsSquare,
  FaReact,
  FaPython,
  FaLaptopCode,
  FaUserGraduate,
} from 'react-icons/fa';

const experiencesData = [
  {
    image: svgs.Ada,
    title: 'Desenvolvedor',
    subtTitle: 'Ada Software House',
    dateTime: {
      startDate: '01/06/2021',
      endDate: 'xx/xx/xxxx',
    },
    summary: ['Front-end', 'Back-end', '+5 Projetos profissionais'],
    icons: [{ Icon: FaDev }, { Icon: FaJsSquare }, { Icon: FaReact }],
  },
  {
    image: images.Satc,
    title: 'Professor temporário',
    subtTitle: 'Satc - programando a vida',
    dateTime: {
      startDate: '01/04/2021',
      endDate: '01/10/2021',
    },
    summary: ['Algoritmo', 'Python', 'Visual G'],
    icons: [
      { Icon: FaPython },
      { Icon: FaLaptopCode },
      { Icon: FaUserGraduate },
    ],
  },
];

export const Experiences = () => {
  return (
    <div className="h-screen flex flex-wrap items-center justify-center gap-6 max-md:overflow-x-auto max-md:flex-col">
      {experiencesData.map((experience) => (
        <Card
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
  );
};
