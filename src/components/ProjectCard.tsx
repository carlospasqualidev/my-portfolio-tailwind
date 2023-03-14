import { motion } from 'framer-motion';
import Image from 'next/image';

interface IProjectCard {
  Icon: any;
  title: string;
  description: string;
  projectNumber: number;
  totalProjectNumber: number;
}

//first chilend margin 0 auto
export const ProjectCard = ({
  Icon,
  title,
  description,
  projectNumber,
  totalProjectNumber,
}: IProjectCard) => {
  return (
    <motion.div
      initial={{
        opacity: 0,
        x: -100,
      }}
      transition={{
        duration: 1,
      }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      className="min-w-[32%] max-md:min-w-[100%] flex flex-col items-center text-center gap-1"
    >
      <motion.div
        initial={{
          opacity: 0,
          y: -100,
        }}
        animate={{ opacity: 100, y: 0 }}
        transition={{
          duration: 1,
          delay: 1,
        }}
      >
        <Icon size={80} />
      </motion.div>

      <h1 className="mb-2 text-2xl font-bold max-md:text-xl">
        Projeto {projectNumber} de {totalProjectNumber}:{' '}
        <span className="underline decoration-[#2dd4bf]/50">{title}</span>
      </h1>
      <p>{description}</p>
    </motion.div>
  );
};
