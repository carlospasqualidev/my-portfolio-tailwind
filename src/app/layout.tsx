import { Navbar } from '@/components/Navbar';
import './globals.css';
import Image from 'next/image';
import { svgs } from '@/assets';
import { url } from 'inspector';

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
          className="fixed -z-10 h-screen w-full max-sm:hidden"
        />

        <Navbar />
        {children}
      </body>
    </html>
  );
}
