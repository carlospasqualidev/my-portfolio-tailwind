'use client';

// import { Inter } from '@next/font/google';
import { About, Hero, Experiences, Skills, Projects } from '@/templates';

// const inter = Inter({ subsets: ['latin'] });

export default function Root() {
  return (
    <>
      <section id="home" className="h-screen">
        <Hero />
      </section>
      <section id="about" className="h-screen px-10 max-md:px-5">
        <About />
      </section>

      <section id="experiences" className="h-screen px-10 max-md:px-5">
        <Experiences />
      </section>

      <section id="skills" className="h-screen px-10 max-md:px-5">
        <Skills />
      </section>

      <section id="projects" className="h-screen px-10 max-md:px-5">
        <Projects />
      </section>
    </>
  );
}
