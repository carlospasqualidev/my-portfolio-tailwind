'use client';

import { IUrl } from '@/app/layout';
import { motion } from 'framer-motion';
import { FaArrowAltCircleUp, FaArrowAltCircleDown } from 'react-icons/fa';

import { navbarData } from '../constants';

export function NavigateButton({ url, setUrl }: IUrl) {
  return (
    <div className="fixed bottom-10 right-10 z-50 flex flex-col gap-2 max-md:hidden">
      <div className="h-12">
        <a
          href={navbarData[url.position].href}
          onClick={() => {
            setUrl((prevState) => ({
              hash: navbarData[prevState.position - 1].href,
              position: prevState.position - 1,
            }));
          }}
        >
          <FaArrowAltCircleUp
            size={48}
            className={`text-teal-800 transition-all ease-in hover:scale-125 hover:text-teal-400  hover:opacity-100 ${
              url.position === 0 && 'hidden'
            }`}
          />
        </a>
      </div>

      <motion.div
        initial={{
          y: -100,
          opacity: 0,
        }}
        transition={{
          duration: 1,
          delay: 2,
        }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="h-12"
      >
        <a
          href={navbarData[url.position].href}
          onClick={() => {
            setUrl((prevState) => ({
              hash: navbarData[prevState.position + 1].href,
              position: prevState.position + 1,
            }));
          }}
        >
          <FaArrowAltCircleDown
            size={48}
            className={` text-teal-800 transition-all ease-in hover:scale-125 hover:text-teal-400    hover:opacity-100 ${
              navbarData.length - 1 === url.position && 'hidden'
            }`}
          />
        </a>
      </motion.div>
    </div>
  );
}
