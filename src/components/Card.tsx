import { motion } from 'framer-motion';
import Image from 'next/image';
import { images } from '../assets';

interface ICard {
  image: any;
  title: string;
  subTitle: string;
  dateTime: {
    startDate: string;
    endDate: string;
  };
  summary: string[];
}

export const Card = ({ image, title, subTitle, dateTime, summary }: ICard) => {
  return (
    <motion.article
      initial={{
        opacity: 0,
        y: -100,
      }}
      transition={{
        duration: 1,
      }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="flex flex-col rounded-lg items-center bg-[#292929] p-6 min-w-[30%] hover:scale-105 transition-all duration-200 ease-in"
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
          <Image
            src={images.Me}
            style={{ objectFit: 'cover', borderRadius: '100%' }}
            alt=""
            className="h-10 w-10 roudend-full"
          />
          <Image
            src={images.Me}
            style={{ objectFit: 'cover', borderRadius: '100%' }}
            alt=""
            className="h-10 w-10 roudend-full"
          />
          <Image
            src={images.Me}
            style={{ objectFit: 'cover', borderRadius: '100%' }}
            alt=""
            className="h-10 w-10 roudend-full"
          />
        </div>

        <p className="uppercase py-5 text-gray-300">
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
