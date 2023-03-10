'use client';
import { images } from '@/assets';
import { motion } from 'framer-motion';

import Image from 'next/image';
import { Typewriter } from './Typewriter';

export const BackgroundCircles = () => {
  return (
    <motion.div
      className="flex items-center justify-center h-[80%] absolute w-[100%] mt-[102px]"
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
      <div className="absolute border border-[#fffff]  w-[550px] h-[550px] rounded-full max-md:w-[300px] max-md:h-[300px]" />
      <div className="absolute border border-[#2dd4bf]  w-[450px] h-[450px] rounded-full animate-pulse max-md:w-[250px] max-md:h-[250px] " />
      <div className="absolute border border-[#fffff]  w-[350px] h-[350px] rounded-full max-md:w-[200px] max-md:h-[200px]" />
      <div className="absolute border border-[#fffff]  w-[250px] h-[250px] rounded-full max-md:w-[150px] max-md:h-[150px]" />
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
          className="w-[150px] h-[150px] bg-cover rounded-full max-md:w-[100px] max-md:h-[100px] "
        />
      </motion.div>
      <div className="absolute border border-[#2dd4bf]  w-[150px] h-[150px] rounded-full animate-ping max-md:w-[100px] max-md:h-[100px]"></div>
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
        className="absolute mt-[25%] ml-3 gap-5 flex flex-col items-center justify-center z-20"
      >
        <h2 className="text-xl uppercase tracking-[12px] mt-[20%]font-bold max-md:text-sm max-md:mt-[30%]">
          Computer Engineer
        </h2>
        <Typewriter
          className="font-bold text-lg"
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
