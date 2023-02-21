'use client';
import { motion } from 'framer-motion';
import Image from 'next/image';

interface ISkillCircle {
  Icon: any;
  skillAvg: string;
  animDelay?: number;
}

export const SkillCircle = ({
  Icon,
  skillAvg,
  animDelay = 0,
}: ISkillCircle) => {
  return (
    <motion.div
      initial={{
        y: -100,
        opacity: 0,
      }}
      transition={{
        duration: 1,
        delay: animDelay,
      }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className=" bg-[#292929] rounded-full h-[68px] w-[68px] flex items-center justify-center hover:scale-110 transition-all duration-200 ease-in"
    >
      <div className="flex flex-col items-center cursor-pointer justify-center  opacity-0 absolute bg-black rounded-full z-20  h-[68px] w-[68px] transition-all duration-200 ease-in hover:opacity-80">
        <p>{skillAvg}</p>
      </div>

      <Image src={Icon} alt="" className="w-[48px] h-[48px]  " />
    </motion.div>
  );
};
