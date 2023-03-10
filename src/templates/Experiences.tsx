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
    title: 'Prof. temporário',
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
  {
    image: images.Satc,
    title: 'Prof. temporário',
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
  {
    image: images.Satc,
    title: 'Prof. temporário',
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
  {
    image: images.Satc,
    title: 'Prof. temporário',
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
    <div className="h-screen flex items-center justify-center">
      <div className="flex gap-10 snap-x snap-mandatory overflow-x-auto p-10 max-md:p-5">
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
    </div>
  );
};
