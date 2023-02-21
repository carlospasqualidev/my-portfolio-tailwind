'use client';

import { useEffect, useState } from 'react';
import { RedirectButton } from './RedirectButton';
import {
  FaGithub,
  FaLinkedinIn,
  FaWhatsapp,
  FaEnvelope,
  FaTimes,
  FaBars,
} from 'react-icons/fa';

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
];

export const Header = () => {
  const [mobileMenuIsOpen, setMobileMenuIsOpen] = useState(false);

  const [urlHash, setUrlHash] = useState('#home');
  useEffect(() => {
    setUrlHash(window.location.hash);
  }, []);

  const toggleMobileMenu = () => {
    setMobileMenuIsOpen((prevState) => !prevState);
  };

  return (
    <header className="flex justify-between h-16 fixed w-full z-50">
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

      <div className="w-[20%] flex items-center pl-6 z-50 max-md:hidden">
        <RedirectButton
          Icon={FaGithub}
          href="https://github.com/carlospasqualidev"
        />

        <RedirectButton
          Icon={FaLinkedinIn}
          href="https://www.linkedin.com/in/carlos-pasquali-48aa49207/?originalSubdomain=br"
        />
      </div>

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
                : 'hover:scale-125 transition-all duration-200 ease-in opacity-75 text-sm uppercase text-white  tracking-[6px]'
            }
          >
            <a href={data.href}>{data.label}</a>
          </li>
        ))}
      </ul>

      <div className="w-[20%] flex justify-end items-center pr-6 z-50 max-md:hidden">
        <RedirectButton
          Icon={FaWhatsapp}
          href="https://api.whatsapp.com/send/?phone=05148998223154&text&type=phone_number&app_absent=0"
        />
        <RedirectButton
          Icon={FaEnvelope}
          href="https://mail.google.com/mail/?view=cm&fs=1&to=email@carlos.pasquali.dev@gmail.com"
        />
      </div>
    </header>
  );
};
