import Image from 'next/image';
import { Inter } from '@next/font/google';
import { About, Hero, Experiences, Skills } from '@/templates';

const inter = Inter({ subsets: ['latin'] });

export default function Root() {
  return (
    <div className="h-full">
      <section id="home" className="h-screen">
        <Hero />
      </section>
      <section id="about" className="h-screen">
        <About />
      </section>

      <section id="experiences" className="h-screen">
        <Experiences />
      </section>

      <section id="skills" className="h-screen">
        <Skills />
      </section>
    </div>
  );
}
