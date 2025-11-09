import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, Github } from 'lucide-react';

const projects = [
  {
    title: 'Artificial Intelligence Crime',
    desc: 'Interactive research microsite exploring AI-enabled fraud patterns with visuals and case studies.',
    stack: ['Next.js', 'Three.js', 'Framer Motion'],
    demo: '#',
    repo: '#',
    media: 'https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExZm1rOHFqdnA1cHg4cXAzbWt2a3FqZ2ZyZjAyNTR5aDlzOHk1d2lqNyZlcD12MV9naWZzX3NlYXJjaCZjdD1n/3o6fJ8bQXoS2Z0E3KM/giphy.gif',
  },
  {
    title: 'Motion Component Kit',
    desc: 'Reusable motion primitives for dashboards and marketing sites.',
    stack: ['React', 'Framer Motion', 'Tailwind'],
    demo: '#',
    repo: '#',
    media: 'https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExa3A3cGd3M2R0N3NnMWNkaTg3eDk2Nmt1djNxZnNodGJ2aG1xY2JmMSZlcD12MV9naWZzX3NlYXJjaCZjdD1n/l0MYC0LajbaPoEADu/giphy.gif',
  },
];

export default function Projects({ reducedMotion }) {
  const [active, setActive] = useState(0);

  return (
    <section id="projects" className="relative mx-auto max-w-6xl px-6 py-16 text-white">
      <div className="flex items-end justify-between gap-4">
        <div>
          <h2 className="text-3xl font-bold">Projects</h2>
          <p className="mt-2 text-white/70">Interactive cards with reveal-on-hover and details on tap.</p>
        </div>
        <div className="hidden gap-2 md:flex">
          {projects.map((p, i) => (
            <button
              key={p.title}
              onClick={() => setActive(i)}
              className={`rounded-full px-3 py-1 text-sm ${active === i ? 'bg-teal-400 text-slate-900' : 'bg-white/5 text-white/80'}`}
            >
              {i + 1}
            </button>
          ))}
        </div>
      </div>

      <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-2">
        {projects.map((p, i) => (
          <motion.article
            key={p.title}
            initial={reducedMotion ? { opacity: 0 } : { opacity: 0, y: 20 }}
            whileInView={reducedMotion ? { opacity: 1 } : { opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 shadow-lg backdrop-blur"
          >
            <div className="relative h-52 overflow-hidden">
              <img src={p.media} alt="Project preview" className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105" />
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent" />
            </div>

            <div className="p-4">
              <div className="flex items-center justify-between">
                <h3 className="text-lg font-semibold">{p.title}</h3>
                <div className="flex gap-2">
                  <a href={p.demo} className="rounded-md bg-white/10 p-2 text-white/80 hover:bg-white/20" aria-label="Live demo"><ExternalLink className="h-4 w-4" /></a>
                  <a href={p.repo} className="rounded-md bg-white/10 p-2 text-white/80 hover:bg-white/20" aria-label="Source code"><Github className="h-4 w-4" /></a>
                </div>
              </div>
              <p className="mt-2 text-sm text-white/80">{p.desc}</p>
              <div className="mt-3 flex flex-wrap gap-2">
                {p.stack.map((s) => (
                  <span key={s} className="rounded-full border border-white/10 bg-white/5 px-2 py-0.5 text-xs text-white/70">{s}</span>
                ))}
              </div>
            </div>

            <AnimatePresence>
              <motion.div
                initial={false}
                animate={active === i ? 'show' : 'hide'}
                variants={{ show: { opacity: 1 }, hide: { opacity: 0 } }}
                className="pointer-events-none absolute inset-0 flex items-center justify-center bg-slate-900/20"
              >
                <motion.div
                  initial={{ scale: 0.95, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  exit={{ scale: 0.98, opacity: 0 }}
                  transition={{ type: 'spring', stiffness: 200, damping: 20 }}
                  className="rounded-xl border border-white/10 bg-slate-900/80 px-4 py-2 text-sm text-white shadow-2xl backdrop-blur"
                >
                  Active
                </motion.div>
              </motion.div>
            </AnimatePresence>
          </motion.article>
        ))}
      </div>
    </section>
  );
}
