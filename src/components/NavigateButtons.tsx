'use client';

import { useState } from 'react';
import { FaArrowAltCircleUp, FaArrowAltCircleDown } from 'react-icons/fa';

import { navbarData } from '../constants';

export function NavigateButton() {
  const [section, setSection] = useState<number>(0);

  return (
    <div className="fixed bottom-10 right-10 z-50">
      <a
        href={navbarData[section].href}
        onClick={() => setSection((prevState) => prevState - 1)}
      >
        <FaArrowAltCircleUp
          size={32}
          className={`hover:scale-125 hover:opacity-100 ease-in transition-all ${
            section === 0 && 'hidden'
          }`}
        />
      </a>
      <a
        href={navbarData[section].href}
        onClick={() => setSection((prevState) => prevState + 1)}
      >
        <FaArrowAltCircleDown
          size={32}
          className={`hover:scale-125 hover:opacity-100 ease-in transition-all ${
            navbarData.length - 1 === section && 'hidden'
          }`}
        />
      </a>
    </div>
  );
}
