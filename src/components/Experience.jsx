import { useState } from 'react';
import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

const experiences = [
  {
    role: 'Senior Front-end Engineer',
    company: 'Acme Labs',
    time: '2022 — Present',
    impact: [
      'Led redesign with motion-first system, boosting demo-to-trial by 28%',
      'Built component library with accessibility baked-in (WCAG AA)',
      'Improved LCP by 35% via image/CDN strategy and code-splitting',
    ],
  },
  {
    role: 'Product Designer',
    company: 'Nimbus Cloud',
    time: '2020 — 2022',
    impact: [
      'Shipped dashboard with meaningful motion cues → -22% task time',
      'Co-led UX research; converted insights into design tokens and patterns',
      'Partnered with eng to implement Framer Motion micro-interactions',
    ],
  },
];

export default function Experience({ reducedMotion }) {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section id="experience" className="relative mx-auto max-w-5xl px-6 py-16 text-white">
      <h2 className="text-3xl font-bold">Experience</h2>
      <p className="mt-2 text-white/70">Timeline with expandable details.</p>

      <div className="mt-8 space-y-4">
        {experiences.map((job, idx) => {
          const open = openIndex === idx;
          return (
            <motion.div
              key={job.role + job.company}
              initial={reducedMotion ? { opacity: 0 } : { opacity: 0, y: 16 }}
              whileInView={reducedMotion ? { opacity: 1 } : { opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ type: 'spring', stiffness: 160, damping: 18 }}
              className="rounded-xl border border-white/10 bg-white/5 p-4 backdrop-blur"
            >
              <button
                onClick={() => setOpenIndex(open ? -1 : idx)}
                className="flex w-full items-center justify-between text-left"
                aria-expanded={open}
              >
                <div>
                  <div className="text-lg font-semibold">{job.role} · {job.company}</div>
                  <div className="text-sm text-white/60">{job.time}</div>
                </div>
                <ChevronDown className={`h-5 w-5 transition ${open ? 'rotate-180' : ''}`} />
              </button>

              <motion.div
                initial={false}
                animate={open ? 'open' : 'closed'}
                variants={{
                  open: { height: 'auto', opacity: 1, marginTop: 12 },
                  closed: { height: 0, opacity: 0, marginTop: 0 },
                }}
                className="overflow-hidden"
              >
                <ul className="space-y-2 pl-4">
                  {job.impact.map((item) => (
                    <li key={item} className="list-disc text-sm text-white/80">{item}</li>
                  ))}
                </ul>
              </motion.div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
