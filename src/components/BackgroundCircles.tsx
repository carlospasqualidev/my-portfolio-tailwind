'use client';
import { images } from '@/assets';
import { motion } from 'framer-motion';

import Image from 'next/image';
import { Typewriter } from './Typewriter';

export const BackgroundCircles = () => {
  return (
    <motion.div
      className="absolute mt-[102px] flex h-[80%] w-[100%] items-center justify-center"
      initial={{
        opacity: 0,
      }}
      animate={{
        scale: [0.4, 0.8, 1],
        opacity: [0.1, 0.2, 0.4, 0.8, 0.1, 1],
      }}
      transition={{
        duration: 2.5,
      }}
    >
      <div className="absolute h-[550px] w-[550px]  rounded-full border border-[#fffff] max-md:h-[300px] max-md:w-[300px]" />
      <div className="absolute h-[450px] w-[450px]  animate-pulse rounded-full border border-[#2dd4bf] max-md:h-[250px] max-md:w-[250px] " />
      <div className="absolute h-[350px] w-[350px]  rounded-full border border-[#fffff] max-md:h-[200px] max-md:w-[200px]" />
      <div className="absolute h-[250px] w-[250px]  rounded-full border border-[#fffff] max-md:h-[150px] max-md:w-[150px]" />
      <motion.div
        initial={{
          opacity: 0,
          scale: 0,
        }}
        animate={{
          scale: 1,
          opacity: 1,
        }}
        transition={{
          delay: 2.5,
          duration: 1.5,
        }}
        className="absolute"
      >
        <Image
          src={images.Me}
          alt=""
          className="h-[150px] w-[150px] rounded-full bg-cover max-md:h-[100px] max-md:w-[100px] "
        />
      </motion.div>
      <div className="absolute h-[150px] w-[150px]  animate-ping rounded-full border border-[#2dd4bf] max-md:h-[100px] max-md:w-[100px]"></div>
      <motion.div
        initial={{
          opacity: 0,
        }}
        animate={{
          opacity: 1,
        }}
        transition={{
          delay: 3.5,
          duration: 1.5,
        }}
        className="absolute z-20 ml-3 mt-[25%] flex flex-col items-center justify-center gap-5"
      >
        <h2 className="mt-[20%]font-bold text-xl uppercase tracking-[12px] max-md:mt-[30%] max-md:text-sm">
          Engenheiro da computação
        </h2>
        <Typewriter
          className="text-lg font-bold"
          words={[
            'Olá, Me chamo Carlos Pasquali :)',
            '<>Desenvolvedor Full Stack Junior</>',
            'Console.log("Bem vindo.")',
          ]}
        />
      </motion.div>
    </motion.div>
  );
};
