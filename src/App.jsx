import { useState } from 'react';
import Hero from './components/Hero';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Contact from './components/Contact';

function App() {
  const [reducedMotion, setReducedMotion] = useState(false);

  return (
    <div className="min-h-screen w-full bg-slate-950">
      <Hero
        reducedMotion={reducedMotion}
        onToggleReducedMotion={() => setReducedMotion((v) => !v)}
      />
      <main>
        <Projects reducedMotion={reducedMotion} />
        <Experience reducedMotion={reducedMotion} />
        <Contact />
      </main>
      <footer className="mx-auto max-w-6xl px-6 py-10 text-center text-xs text-white/60">
        © {new Date().getFullYear()} Shiva Dumpeti — Built with React, Tailwind, and Framer Motion.
      </footer>
    </div>
  );
}

export default App;
