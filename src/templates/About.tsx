'use client';

import Image from 'next/image';
import { images } from '@/assets';
import { motion } from 'framer-motion';
import { RedirectButton } from '@/components';

import { FaGithub, FaLinkedinIn } from 'react-icons/fa';

export const About = () => {
  return (
    <div className="h-screen flex items-center justify-center gap-20 max-md:flex-col max-md:gap-2">
      <motion.div
        initial={{
          x: -200,
          opacity: 0,
        }}
        transition={{
          duration: 1.5,
        }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        className="flex flex-col gap-2 pt-12 max-md:pt-0"
      >
        <Image
          className="object-cover rounded-lg h-80 w-80 max-md:w-36 max-md:h-36"
          src={images.Me2}
          alt=""
        />

        <div className="flex items-center justify-center gap-5">
          <RedirectButton
            Icon={FaLinkedinIn}
            href="https://www.linkedin.com/in/carlos-pasquali-48aa49207/?originalSubdomain=br"
          />
          <RedirectButton
            Icon={FaGithub}
            href="https://github.com/carlospasqualidev"
          />
        </div>
      </motion.div>

      <motion.div
        initial={{
          y: 200,
          opacity: 0,
        }}
        transition={{
          duration: 1.5,
        }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="max-w-[50%] flex flex-col items-center justify-center gap-2 max-md:max-w-[100%]  "
      >
        <h4 className="text-3xl font-semibold text-center max-md:text-2xl">
          Um{' '}
          <span className="underline decoration-[#2dd4bf]/50 decoration-red-7">
            pouco
          </span>{' '}
          sobre mim
        </h4>

        <p className="text-center">
          Acadêmico de Engenharia da Computação na UNISATC, desenvolvedor Web
          Full Stack na Ada Lovelace Software House. Possuo conhecimento em
          Javascript, Typescript e nos frameworks ReactJS, Nextjs, Nodejs,
          Prisma e Sequelize. Experiência na modelagem de banco de dados e SQL
          utilizando PostgresSQL. Atuei como professor no projeto Programando a
          Vida. Apaixonado pela programação, busco a excelência em tudo o que
          faço, sou proativo e gosto de compartilhar meu conhecimento.
        </p>
      </motion.div>
    </div>
  );
};
