import { Navbar } from '@/components/Navbar';
import './globals.css';
import Image from 'next/image';
import { svgs } from '@/assets';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head />
      <body>
        <Image
          src={svgs.BackgroundParticles}
          alt=""
          className="fixed -z-10 h-screen"
        />

        <Navbar />
        {children}
      </body>
    </html>
  );
}
