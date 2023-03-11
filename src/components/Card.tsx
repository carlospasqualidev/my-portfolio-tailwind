import { motion } from 'framer-motion';
import Image from 'next/image';
import { images } from '../assets';

interface ICard {
  image: any;
  title: string;
  subTitle: string;
  icons: { Icon: any }[];
  dateTime: {
    startDate: string;
    endDate: string;
  };
  summary: string[];
}

export const Card = ({
  image,
  title,
  icons,
  subTitle,
  dateTime,
  summary,
}: ICard) => {
  return (
    <motion.article
      initial={{
        opacity: 0,
        x: -100,
      }}
      transition={{
        duration: 1,
      }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      className="flex flex-col items-center justify-center rounded-lg p-6 bg-black bg-opacity-80 min-w-[350px] relative  max-sm:min-w-[100%] max-md:min-w-[50%]"
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
        <Image src={image} alt="" className="w-24 h-24 bg-cover rounded-full" />
      </motion.div>

      <div>
        <h4 className="text-4xl font-light max-md:text-3xl">{title}</h4>
        <p className="font-bold text-2xl mt-1 max-md:text-xl">{subTitle}</p>
        <div className="flex space-x-2 my-2">
          {icons.map((icon, i) => (
            <motion.div
              key={icon.Icon}
              initial={{
                opacity: 0,
                y: -50,
              }}
              transition={{
                duration: 1,
                delay: 1 + (0.7 + i / 2),
              }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <icon.Icon size={24} key={icon} />
            </motion.div>
          ))}
        </div>

        <p className="uppercase py-5">
          {`${dateTime.startDate} - ${dateTime.endDate}`}
        </p>

        <ul className="list-disc space-y-4 ml-5 text-lg">
          {summary.map((label) => (
            <li key={label}>{label}</li>
          ))}
        </ul>
      </div>
    </motion.article>
  );
};
