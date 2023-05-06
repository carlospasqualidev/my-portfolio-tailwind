'use client';
import { Navbar } from '@/components/Navbar';
import './globals.css';
import Image from 'next/image';
import { svgs } from '@/assets';
import { NavigateButton } from '@/components/NavigateButtons';
import { Dispatch, SetStateAction, useState } from 'react';
import { useRouter } from 'next/navigation';

export interface IUrl {
  url: {
    hash: string;
    position: number;
  };

  setUrl: Dispatch<
    SetStateAction<{
      hash: string;
      position: number;
    }>
  >;
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [url, setUrl] = useState({ hash: '#home', position: 0 });

  return (
    <html lang="en">
      <head />
      <body className="overflow-y-hidden">
        <NavigateButton url={url} setUrl={setUrl} />
        <Image
          src={svgs.BackgroundParticles}
          alt=""
          className="fixed -z-10 h-screen w-full max-sm:hidden"
        />

        <Navbar url={url} setUrl={setUrl} />
        {children}
      </body>
    </html>
  );
}
