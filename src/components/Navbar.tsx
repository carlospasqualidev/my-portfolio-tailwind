'use client';
import { IUrl } from '@/app/layout';

import { navbarData } from '@/constants/navbarData';
import { motion } from 'framer-motion';

export function Navbar({ setUrl, url }: IUrl) {
  return (
    <div className="item fixed z-50 mt-1 flex h-16 w-full items-center justify-center max-md:mt-0">
      <motion.div
        initial={{
          opacity: 0,
          y: -100,
        }}
        animate={{ opacity: 100, y: 0 }}
        transition={{
          duration: 1,
        }}
        className="flex h-full w-fit items-center justify-center rounded-full bg-black bg-opacity-80 px-6 max-sm:w-full max-sm:rounded-none"
      >
        <ul className="flex gap-8">
          {navbarData.map((data, i) => (
            <li
              className={
                data.href === url.hash
                  ? ' scale-125 cursor-pointer text-teal-400 transition-all ease-in'
                  : '  cursor-pointer text-teal-800 transition-all ease-in hover:scale-125 hover:text-teal-400'
              }
              onClick={() => setUrl({ hash: data.href, position: i })}
              key={data.href}
            >
              <motion.a
                initial={{
                  opacity: 0,
                  y: -100,
                }}
                animate={{ opacity: 100, y: 0 }}
                transition={{
                  duration: 1,
                  delay: data.delay,
                }}
                className="max-md:hidden md:flex"
                href={data.href}
              >
                {<data.Icon size={32} />}
              </motion.a>

              <motion.a
                initial={{
                  opacity: 0,
                  y: -100,
                }}
                animate={{ opacity: 100, y: 0 }}
                transition={{
                  duration: 1,
                  delay: data.delay,
                }}
                className="sm:flex md:hidden"
                href={data.href}
              >
                {<data.Icon size={28} />}
              </motion.a>
            </li>
          ))}
        </ul>
      </motion.div>
    </div>
  );
}
