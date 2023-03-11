import { motion } from 'framer-motion';
import Image from 'next/image';

interface IProjectCard {
  image: any;
  title: string;
  description: string;
  projectNumber: number;
  totalProjectNumber: number;
}

//first chilend margin 0 auto
export const ProjectCard = ({
  image,
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
      className="min-w-[32%] max-md:min-w-[100%] flex flex-col items-center text-center"
    >
      <motion.div
        initial={{
          opacity: 0,
          y: -100,
        }}
        transition={{
          duration: 1,
          delay: 1,
        }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <Image
          src={image}
          alt=""
          className="w-24 h-24 bg-cover rounded-2xl mb-4 max-md:h-24 max-md:w-24"
        />
      </motion.div>

      <h1 className="mb-2 text-2xl font-bold max-md:text-xl">
        Projeto {projectNumber} de {totalProjectNumber}:{' '}
        <span className="underline decoration-[#2dd4bf]/50">{title}</span>
      </h1>
      <p>{description}</p>
    </motion.div>
  );
};
