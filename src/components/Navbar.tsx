'use client';
import { motion } from 'framer-motion';
import { useState } from 'react';
import {
  FaHome,
  FaLaptopCode,
  FaUserTie,
  FaClipboardList,
  FaProjectDiagram,
} from 'react-icons/fa';

const data = [
  {
    Icon: FaHome,
    href: '#home',
    delay: 0.5,
  },
  {
    Icon: FaUserTie,
    href: '#about',
    delay: 0.75,
  },
  {
    Icon: FaClipboardList,
    href: '#experiences',
    delay: 1,
  },
  {
    Icon: FaLaptopCode,
    href: '#skills',
    delay: 1.25,
  },
  {
    Icon: FaProjectDiagram,
    href: '#projects',
    delay: 1.5,
  },
];

export function Navbar() {
  const [urlHash, setUrlHash] = useState('#home');
  //TODO revisar break points
  return (
    <div className="flex justify-center item h-16 items-center fixed w-full z-50 mt-1">
      <motion.div
        initial={{
          opacity: 0,
          y: -100,
        }}
        animate={{ opacity: 100, y: 0 }}
        transition={{
          duration: 1,
        }}
        className="w-fit h-full bg-black bg-opacity-80 flex justify-center items-center px-6 rounded-full max-sm:w-full max-sm:rounded-none"
      >
        <ul className="flex gap-8">
          {data.map((data) => (
            <li
              className={
                data.href === urlHash
                  ? ' scale-125 text-teal-400 transition-all ease-in cursor-pointer'
                  : '  hover:text-teal-400 transition-all ease-in cursor-pointer hover:scale-125 text-teal-800'
              }
              onClick={() => setUrlHash(data.href)}
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
                className="md:flex max-md:hidden"
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
                className="md:hidden sm:flex"
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
