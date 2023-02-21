'use client';

import Image from 'next/image';
import { images } from '@/assets';
import { motion } from 'framer-motion';

export const About = () => {
  return (
    <div className="h-screen flex items-center justify-center">
      <div className="flex gap-5 max-md:flex-col">
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
          className="flex items-center justify-center min-w-[35%]"
        >
          <Image
            className="w-80 h-80 object-cover rounded-lg max-md:w-40 max-md:h-40"
            src={images.Me}
            alt=""
          />
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
          className="flex flex-col gap-5 items-center justify-center"
        >
          <h4 className="text-4xl font-semibold text-center">
            Um{' '}
            <span className="underline decoration-[#b91c1c]/50 decoration-red-7">
              pouco
            </span>{' '}
            sobre mim
          </h4>

          <p>
            Acadêmico de Engenharia da Computação na UNISATC. Desenvolvedor Web
            Full Stack na Ada Ada Lovelace Software House, com conhecimento em
            Javascript, Typescript e nos frameworks ReactJS, Styled Components,
            Nodejs, Prisma e Sequelize, experiência em modelagem de banco de
            dados e SQL utilizando postgresSQL. Atuou também, como professor no
            projeto Programando a Vida. Apaixonado pela programação, busca
            excelência no que faz, é proativo, gosta do compartilhamento e da
            troca de conhecimento.
          </p>
        </motion.div>
      </div>
    </div>
  );
};
