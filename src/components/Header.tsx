'use client';

import { useEffect, useState } from 'react';
import { RedirectButton } from './RedirectButton';
import { FaGithub, FaLinkedinIn, FaWhatsapp, FaEnvelope } from 'react-icons/fa';

const data = [
  {
    label: 'Home',
    href: '#home',
  },
  {
    label: 'Sobre',
    href: '#sobre',
  },
  {
    label: 'Experiências',
    href: '#experiências',
  },
  {
    label: 'Habilidades',
    href: '#habilidades',
  },
];

export const Header = () => {
  const [urlHash, setUrlHash] = useState('#home');
  useEffect(() => {
    setUrlHash(window.location.hash);
  }, []);

  return (
    <header className="flex justify-between space h-16 fixed w-full z-50">
      <div className="bg-black opacity-40 w-full absolute h-16" />

      <div className="w-[20%] flex items-center pl-6 z-50">
        <RedirectButton
          Icon={FaGithub}
          href="https://github.com/carlospasqualidev"
        />

        <RedirectButton
          Icon={FaLinkedinIn}
          href="https://www.linkedin.com/in/carlos-pasquali-48aa49207/?originalSubdomain=br"
        />
      </div>

      <ul className="flex items-center gap-12 ">
        {data.map((data) => (
          <li
            onClick={() => setUrlHash(data.href)}
            key={data.href}
            className={
              data.href === urlHash
                ? 'scale-125 opacity-100 transition-all duration-200 ease-in text-sm uppercase text-gray-500  tracking-[6px] font-bold'
                : 'hover:scale-125 transition-all duration-200 ease-in opacity-75 text-sm uppercase text-gray-500  tracking-[6px]'
            }
          >
            <a href={data.href}>{data.label}</a>
          </li>
        ))}
      </ul>

      <div className="w-[20%] flex justify-end items-center pr-6 z-50">
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
