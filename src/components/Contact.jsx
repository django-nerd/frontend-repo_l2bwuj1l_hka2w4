import { useState } from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2, Mail } from 'lucide-react';

export default function Contact() {
  const [sent, setSent] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setTimeout(() => setSent(true), 500);
  };

  return (
    <section id="contact" className="relative mx-auto max-w-3xl px-6 py-16 text-white">
      <h2 className="text-3xl font-bold">Contact</h2>
      <p className="mt-2 text-white/70">Say hello. I reply within 1–2 business days.</p>

      <form onSubmit={handleSubmit} className="mt-6 space-y-4">
        <div>
          <label className="block text-sm text-white/70" htmlFor="name">Name</label>
          <input id="name" required className="mt-1 w-full rounded-lg border border-white/10 bg-white/5 px-3 py-2 text-white placeholder-white/40 outline-none focus:ring-2 focus:ring-teal-400" placeholder="Ada Lovelace" />
        </div>
        <div>
          <label className="block text-sm text-white/70" htmlFor="email">Email</label>
          <input id="email" type="email" required className="mt-1 w-full rounded-lg border border-white/10 bg-white/5 px-3 py-2 text-white placeholder-white/40 outline-none focus:ring-2 focus:ring-teal-400" placeholder="ada@example.com" />
        </div>
        <div>
          <label className="block text-sm text-white/70" htmlFor="message">Message</label>
          <textarea id="message" required rows="4" className="mt-1 w-full rounded-lg border border-white/10 bg-white/5 px-3 py-2 text-white placeholder-white/40 outline-none focus:ring-2 focus:ring-teal-400" placeholder="What can I build for you?" />
        </div>
        <button type="submit" className="inline-flex items-center gap-2 rounded-lg bg-teal-400 px-4 py-2 font-medium text-slate-900 shadow-lg shadow-teal-400/30 transition hover:translate-y-[-1px] hover:shadow-teal-400/40 focus:outline-none focus:ring-2 focus:ring-teal-300">
          <Mail className="h-4 w-4" /> Send Message
        </button>
      </form>

      <motion.div
        initial={{ opacity: 0, scale: 0.98 }}
        animate={sent ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.98 }}
        className="mt-6 inline-flex items-center gap-2 rounded-lg border border-emerald-300/30 bg-emerald-400/10 px-3 py-2 text-emerald-200"
        role="status"
        aria-live="polite"
      >
        <CheckCircle2 className="h-4 w-4" />
        Message sent! Thanks — I’ll get back to you shortly.
      </motion.div>

      <div className="mt-6">
        <a href="/resume.pdf" download className="rounded-lg border border-white/10 bg-white/5 px-4 py-2 text-white hover:bg-white/10">Download Resume (PDF)</a>
      </div>
    </section>
  );
}
