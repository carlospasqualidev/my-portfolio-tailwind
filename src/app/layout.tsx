import { Navbar } from '@/components/Navbar';
import './globals.css';
import Image from 'next/image';
import { svgs } from '@/assets';
import { NavigateButton } from '@/components/NavigateButtons';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head />
      <body>
        <NavigateButton />
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
