import { useMemo, useState } from 'react';
import { motion } from 'framer-motion';

const allSkills = [
  { name: 'React', cat: 'Frameworks' },
  { name: 'TypeScript', cat: 'Languages' },
  { name: 'Framer Motion', cat: 'Tools' },
  { name: 'Tailwind CSS', cat: 'Tools' },
  { name: 'Three.js', cat: 'Frameworks' },
  { name: 'Node.js', cat: 'Languages' },
  { name: 'GraphQL', cat: 'Languages' },
  { name: 'Accessibility', cat: 'Tools' },
];

const categories = ['All', 'Languages', 'Frameworks', 'Tools'];

export default function Skills({ reducedMotion }) {
  const [active, setActive] = useState('All');
  const filtered = useMemo(
    () => (active === 'All' ? allSkills : allSkills.filter((s) => s.cat === active)),
    [active]
  );

  return (
    <section id="skills" className="relative mx-auto max-w-5xl px-6 py-16 text-white">
      <div className="flex flex-wrap items-end justify-between gap-4">
        <div>
          <h2 className="text-3xl font-bold">Skills</h2>
          <p className="mt-2 text-white/70">Filterable tag cloud with gentle motion.</p>
        </div>
        <div className="flex gap-2">
          {categories.map((c) => (
            <button
              key={c}
              onClick={() => setActive(c)}
              className={`rounded-full px-3 py-1 text-sm ${active === c ? 'bg-teal-400 text-slate-900' : 'bg-white/5 text-white/80'}`}
            >
              {c}
            </button>
          ))}
        </div>
      </div>

      <div className="mt-6 flex flex-wrap gap-3">
        {filtered.map((s, i) => (
          <motion.span
            key={s.name}
            initial={reducedMotion ? { opacity: 0 } : { opacity: 0, y: 8, rotate: -1 }}
            animate={reducedMotion ? { opacity: 1 } : { opacity: 1, y: 0, rotate: 0 }}
            transition={{ delay: i * 0.03, type: 'spring', stiffness: 220, damping: 18 }}
            className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-sm text-white/90"
          >
            {s.name}
          </motion.span>
        ))}
      </div>
    </section>
  );
}
