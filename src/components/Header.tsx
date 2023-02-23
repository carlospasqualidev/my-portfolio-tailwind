'use client';

import { useState } from 'react';

import { FaTimes, FaBars } from 'react-icons/fa';

const data = [
  {
    label: 'Home',
    href: '#home',
  },
  {
    label: 'Sobre',
    href: '#about',
  },
  {
    label: 'Experiências',
    href: '#experiences',
  },
  {
    label: 'Habilidades',
    href: '#skills',
  },
  {
    label: 'Projetos',
    href: '#projects',
  },
];

export const Header = (children: any) => {
  const [mobileMenuIsOpen, setMobileMenuIsOpen] = useState(false);

  const [urlHash, setUrlHash] = useState('#home');
  // useEffect(() => {
  //   setUrlHash(window.location.hash);
  // }, [urlHash]);

  const toggleMobileMenu = () => {
    setMobileMenuIsOpen((prevState) => !prevState);
  };

  return (
    <header className="flex  justify-center h-16 sticky top-0 w-full z-50 max-md:justify-start">
      <div
        className={
          mobileMenuIsOpen
            ? 'bg-black opacity-80 w-full absolute h-screen transition-all ease-in z-20 '
            : 'bg-black opacity-80 w-full absolute h-16 transition-all ease-in'
        }
      />

      <button
        className=" hidden h-16 px-6 z-50 max-md:block"
        onClick={() => {
          toggleMobileMenu();
        }}
      >
        {mobileMenuIsOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
      </button>

      <ul
        className={
          mobileMenuIsOpen
            ? 'absolute flex items-center justify-center flex-col gap-12 w-full h-screen z-30 '
            : 'flex items-center gap-12 max-md:hidden'
        }
      >
        {data.map((data) => (
          <li
            onClick={() => setUrlHash(data.href)}
            key={data.href}
            className={
              data.href === urlHash
                ? 'scale-125 opacity-100 transition-all duration-200 ease-in text-sm uppercase text-white  tracking-[6px] font-bold'
                : 'hover:scale-125 transition-all duration-200 ease-in opacity-75 text-sm uppercase text-white tracking-[6px]'
            }
          >
            <a href={data.href}>{data.label}</a>
          </li>
        ))}
      </ul>
    </header>
  );
};
