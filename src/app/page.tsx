'use client';

import { Inter } from '@next/font/google';
import { About, Hero, Experiences, Skills, Projects } from '@/templates';
import { useEffect, useState } from 'react';

const inter = Inter({ subsets: ['latin'] });

export default function Root() {
  return (
    <>
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

      <section id="projects" className="h-screen">
        <Projects />
      </section>
    </>
  );
}
