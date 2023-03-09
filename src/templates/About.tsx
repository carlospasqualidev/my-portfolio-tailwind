'use client';

import Image from 'next/image';
import { images } from '@/assets';
import { motion } from 'framer-motion';
import { RedirectButton } from '@/components';

import { FaGithub, FaLinkedinIn, FaInstagram } from 'react-icons/fa';

export const About = () => {
  return (
    <div className="h-screen flex items-center justify-center gap-20">
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
        className="flex flex-col gap-5 pt-12"
      >
        <Image
          className="object-cover rounded-lg h-80 w-80"
          src={images.Me}
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
          <RedirectButton
            Icon={FaInstagram}
            href="https://www.instagram.com/carlos.pasquali.dev/"
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
        className="max-w-[50%] flex flex-col items-center justify-center gap-5"
      >
        <h4 className="text-3xl font-semibold text-center max-md:text-2xl">
          Um{' '}
          <span className="underline decoration-[#2dd4bf]/50 decoration-red-7">
            pouco
          </span>{' '}
          sobre mim
        </h4>

        <p>
          Acadêmico de Engenharia da Computação na UNISATC. Desenvolvedor Web
          Full Stack na Ada Ada Lovelace Software House, com conhecimento em
          Javascript, Typescript e nos frameworks ReactJS, Styled Components,
          Nodejs, Prisma e Sequelize, experiência em modelagem de banco de dados
          e SQL utilizando postgresSQL. Atuou também, como professor no projeto
          Programando a Vida. Apaixonado pela programação, busca excelência no
          que faz, é proativo, gosta do compartilhamento e da troca de
          conhecimento.
        </p>
      </motion.div>
    </div>
  );
};
