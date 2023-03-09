'use client';
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
  },
  {
    Icon: FaUserTie,
    href: '#about',
  },
  {
    Icon: FaClipboardList,
    href: '#experiences',
  },
  {
    Icon: FaLaptopCode,
    href: '#skills',
  },
  {
    Icon: FaProjectDiagram,
    href: '#projects',
  },
];

export function Navbar() {
  const [urlHash, setUrlHash] = useState('#home');
  //TODO revisar break points
  return (
    <div className="flex justify-center item h-20 items-center fixed w-full z-50">
      <div className="w-fit h-full bg-black bg-opacity-80 flex justify-center items-center px-10 rounded-full max-sm:w-full max-sm:rounded-none">
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
              <a className="md:flex max-sm:hidden" href={data.href}>
                {<data.Icon size={48} />}
              </a>

              <a className="md:hidden sm:flex" href={data.href}>
                {<data.Icon size={28} />}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
