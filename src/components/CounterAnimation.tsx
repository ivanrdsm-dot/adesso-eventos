'use client';

import { useEffect, useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';

interface Props {
  end: number;
  suffix?: string;
  prefix?: string;
  duration?: number;
  label: string;
}

export default function CounterAnimation({ end, suffix = '', prefix = '', duration = 2, label }: Props) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-50px' });
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isInView) return;
    let startTime: number | null = null;
    const step = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / (duration * 1000), 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(eased * end));
      if (progress < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [isInView, end, duration]);

  return (
    <motion.div
      ref={ref}
      className="text-center group"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      <div className="text-4xl md:text-5xl font-bold text-gradient-vibrant counter-number drop-shadow-lg">
        {prefix}{count.toLocaleString()}{suffix}
      </div>
      <div className="text-white/60 text-sm mt-2 uppercase tracking-wider font-medium">{label}</div>
      {/* Decorative line under */}
      <div className="w-12 h-0.5 mx-auto mt-3 rounded-full bg-gradient-to-r from-gold to-teal opacity-40 group-hover:opacity-100 transition-opacity" />
    </motion.div>
  );
}
