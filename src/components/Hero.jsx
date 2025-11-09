import { useState } from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import Spline from '@splinetool/react-spline';
import { Download, Mail, Rocket } from 'lucide-react';

export default function Hero({ reducedMotion, onToggleReducedMotion }) {
  const prefersReducedMotion = useReducedMotion();
  const actuallyReduce = reducedMotion ?? prefersReducedMotion;
  const [loaded, setLoaded] = useState(false);

  const titleVariants = actuallyReduce
    ? { hidden: { opacity: 0 }, visible: { opacity: 1 } }
    : {
        hidden: { opacity: 0, y: 20 },
        visible: {
          opacity: 1,
          y: 0,
          transition: { type: 'spring', stiffness: 120, damping: 16 },
        },
      };

  const chipVariants = actuallyReduce
    ? { hidden: { opacity: 0 }, visible: { opacity: 1 } }
    : {
        hidden: { opacity: 0, scale: 0.9 },
        visible: (i) => ({
          opacity: 1,
          scale: 1,
          transition: { delay: 0.15 + i * 0.07, type: 'spring', stiffness: 180 },
        }),
      };

  return (
    <section id="home" className="relative min-h-screen w-full overflow-hidden bg-gradient-to-b from-slate-900 via-slate-900 to-slate-950 text-white">
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/VJLoxp84lCdVfdZu/scene.splinecode"
          onLoad={() => setLoaded(true)}
          style={{ width: '100%', height: '100%' }}
        />
      </div>
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-slate-950/60 via-slate-950/40 to-slate-950/80" />

      <div className="relative mx-auto flex min-h-screen max-w-6xl flex-col items-center justify-center px-6 text-center">
        <motion.div
          variants={titleVariants}
          initial="hidden"
          animate={loaded ? 'visible' : 'hidden'}
          className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/80 backdrop-blur"
        >
          <Rocket className="h-3.5 w-3.5 text-teal-300" />
          <span>Animated Developer Portfolio</span>
        </motion.div>

        <motion.h1
          variants={titleVariants}
          initial="hidden"
          animate={loaded ? 'visible' : 'hidden'}
          className="mt-5 text-4xl font-bold leading-[1.1] sm:text-6xl"
        >
          Building playful, high-performance web experiences
        </motion.h1>

        <motion.p
          variants={titleVariants}
          initial="hidden"
          animate={loaded ? 'visible' : 'hidden'}
          className="mx-auto mt-4 max-w-2xl text-white/80"
        >
          Front-end engineer + product designer focused on meaningful motion, accessibility, and measurable outcomes.
        </motion.p>

        <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
          {['React', 'TypeScript', 'Framer Motion', 'Three.js', 'Tailwind'].map((tag, i) => (
            <motion.span
              key={tag}
              custom={i}
              variants={chipVariants}
              initial="hidden"
              animate={loaded ? 'visible' : 'hidden'}
              className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/80 backdrop-blur"
            >
              {tag}
            </motion.span>
          ))}
        </div>

        <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
          <a
            href="#projects"
            className="inline-flex items-center gap-2 rounded-lg bg-teal-400 px-4 py-2 font-medium text-slate-900 shadow-lg shadow-teal-400/30 transition hover:translate-y-[-1px] hover:shadow-teal-400/40 focus:outline-none focus:ring-2 focus:ring-teal-300"
          >
            <Rocket className="h-4 w-4" />
            See Projects
          </a>
          <a
            href="/resume.pdf"
            download
            className="inline-flex items-center gap-2 rounded-lg border border-white/10 bg-white/5 px-4 py-2 font-medium text-white transition hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-white/20"
          >
            <Download className="h-4 w-4" />
            Download Resume
          </a>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 rounded-lg border border-white/10 bg-white/5 px-4 py-2 font-medium text-white transition hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-white/20"
          >
            <Mail className="h-4 w-4" />
            Contact
          </a>
          <button
            onClick={onToggleReducedMotion}
            aria-pressed={actuallyReduce}
            className="inline-flex items-center gap-2 rounded-lg border border-white/10 bg-white/5 px-4 py-2 text-sm text-white/80 transition hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-white/20"
          >
            {actuallyReduce ? 'Enable Motion' : 'Reduce Motion'}
          </button>
        </div>
      </div>
    </section>
  );
}
