'use client';

import { Cursor, useTypewriter } from 'react-simple-typewriter';

interface ITypeWriter {
  words: string[];
  className?: string;
}

export const Typewriter = ({ words, className }: ITypeWriter) => {
  const [text] = useTypewriter({
    words,
    loop: true,
    delaySpeed: 2000,
  });

  return (
    <h1 className={className}>
      <span>{text}</span>
      <Cursor cursorColor="#2dd4bf" />
    </h1>
  );
};
