'use client';

import { motion } from 'framer-motion';

interface Props {
  title: string;
  highlight: string;
  subtitle: string;
  metrics?: string[];
}

export default function PageHero({ title, highlight, subtitle, metrics }: Props) {
  return (
    <section className="relative pt-32 pb-20 overflow-hidden">
      <div className="absolute inset-0 gradient-bg" />
      <div className="absolute inset-0 noise-overlay" />
      <div className="absolute top-1/3 left-10 w-72 h-72 rounded-full bg-gold/5 blur-[120px]" />
      <div className="absolute bottom-1/4 right-10 w-96 h-96 rounded-full bg-teal/5 blur-[120px]" />

      {/* Grid pattern */}
      <div className="absolute inset-0 opacity-[0.02]" style={{
        backgroundImage: 'linear-gradient(rgba(200,164,93,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(200,164,93,0.3) 1px, transparent 1px)',
        backgroundSize: '60px 60px',
      }} />

      <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6"
        >
          {title}{' '}
          <span className="text-gradient-gold">{highlight}</span>
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-lg md:text-xl text-white/50 max-w-3xl mx-auto mb-8"
        >
          {subtitle}
        </motion.p>

        {metrics && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-wrap justify-center gap-6"
          >
            {metrics.map((metric, i) => (
              <div key={i} className="glass rounded-full px-6 py-3 text-sm font-medium text-gold">
                {metric}
              </div>
            ))}
          </motion.div>
        )}

        <div className="line-gold w-32 mx-auto mt-10" />
      </div>
    </section>
  );
}
