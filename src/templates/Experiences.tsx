'use client';

import { images, svgs } from '@/assets';
import { ExperiencesCard } from '@/components';

import {
  FaDev,
  FaJsSquare,
  FaReact,
  FaPython,
  FaLaptopCode,
  FaUserGraduate,
  FaMedal,
  FaSkull,
  FaUsers,
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
    title: 'Prof. temporário',
    subtTitle: 'Satc - prog. a vida',
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
  {
    image: images.Eb,
    title: 'Soldado',
    subtTitle: 'Exército Brasileiro',
    dateTime: {
      startDate: '01/03/2018',
      endDate: '01/03/2019',
    },
    summary: ['Honra ao mérito', 'Artilheiro', 'Espírito de corpo'],
    icons: [{ Icon: FaMedal }, { Icon: FaSkull }, { Icon: FaUsers }],
  },
];

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
