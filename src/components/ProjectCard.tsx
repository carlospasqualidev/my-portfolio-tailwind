import { motion } from 'framer-motion';
import { RedirectButton } from './RedirectButton';

interface IProjectCard {
  ProjectIcon: any;
  title: string;
  description: string;
  linkIcons: { href: string; Icon: any }[];
  projectNumber: number;
  totalProjectNumber: number;
}

export const ProjectCard = ({
  ProjectIcon,
  title,
  linkIcons,
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
        viewport={{ once: true }}
        className="flex items-center justify-center gap-2 my-[2px] "
      >
        <ProjectIcon size={80} />
        <div className="flex flex-col gap-1">
          {linkIcons.map((icon, i) => (
            <RedirectButton size={24} Icon={icon.Icon} href={icon.href} />
          ))}
        </div>
      </motion.div>

      <h1 className="mb-2 text-2xl font-bold max-md:text-xl">
        Projeto {projectNumber} de {totalProjectNumber}:{' '}
        <span className="underline decoration-[#2dd4bf]/50">{title}</span>
      </h1>
      <p>{description}</p>
    </motion.div>
  );
};
