import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { WhatIDo } from './components/WhatIDo';
import { About } from './components/About';
import { Skills } from './components/Skills';
import { Projects } from './components/Projects';
import { Experience } from './components/Experience';
import { Education } from './components/Education';
import { Writing } from './components/Writing';
import { Contact } from './components/Contact';

export default function App() {
  return (
    <div className="bg-black min-h-screen">
      <Navbar />
      <Hero />
      <WhatIDo />
      <About />
      <Projects />
      <Experience />
      <Education />
      <Skills />
      <Writing />
      <Contact />
    </div>
  );
}