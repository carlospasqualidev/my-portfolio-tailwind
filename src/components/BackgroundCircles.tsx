'use client';
import { images } from '@/assets';
import { motion } from 'framer-motion';
import { Cursor, useTypewriter } from 'react-simple-typewriter';

import Image from 'next/image';
import { Typewriter } from './Typewriter';

export const BackgroundCircles = () => {
  const [text, count] = useTypewriter({
    words: [
      'Olá, Me chamo Carlos Pasquali :)',
      '<>Junior Full Stack Developer</>',
      'Console.log("Bem vindo.")',
    ],
    loop: true,
    delaySpeed: 2000,
  });

  return (
    <motion.div
      className="flex items-center justify-center h-[80%] absolute w-full mt-[102px] "
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
      <div className="absolute border border-[#333333]  w-[550px] h-[550px] rounded-full" />
      <div className="absolute border border-[#b91c1c]  w-[450px] h-[450px] rounded-full animate-pulse  " />
      <div className="absolute border border-[#333333]  w-[350px] h-[350px] rounded-full" />
      <div className="absolute border border-[#333333]  w-[250px] h-[250px] rounded-full" />
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
          width={150}
          height={150}
          src={images.Me}
          style={{ objectFit: 'cover', borderRadius: '100%' }}
          alt=""
        />
      </motion.div>
      <div className="absolute border border-[#b91c1c]  w-[150px] h-[150px] rounded-full animate-ping "></div>
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
        className="absolute mt-72 ml-3 flex flex-col items-center justify-center z-20"
      >
        <h2 className="text-sm uppercase text-gray-500 pb-2 tracking-[12px]">
          Computer Engineer
        </h2>
        <Typewriter
          className="font-bold"
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
