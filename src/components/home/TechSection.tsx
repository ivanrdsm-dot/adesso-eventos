'use client';

import { useLocale } from '@/lib/locale-context';
import SectionTitle from '../SectionTitle';
import { FadeInLeft, FadeInRight, FadeInUp } from '../AnimatedSection';
import { motion } from 'framer-motion';
import { Fingerprint, Bot, Video } from 'lucide-react';

export default function TechSection() {
  const { t } = useLocale();

  const techs = [
    { icon: Fingerprint, ...t.tech.rfid },
    { icon: Bot, ...t.tech.robots },
    { icon: Video, ...t.tech.streaming },
  ];

  return (
    <section className="relative py-24 overflow-hidden section-gold">
      <div className="absolute inset-0 noise-overlay" />
      <div className="absolute bottom-0 right-0 w-96 h-96 rounded-full bg-gold/[0.02] blur-[150px]" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle title={t.tech.title} highlight={t.tech.titleHighlight} subtitle={t.tech.subtitle} />

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {techs.map((tech, i) => {
            const Wrapper = i === 0 ? FadeInLeft : i === 2 ? FadeInRight : FadeInUp;
            return (
              <Wrapper key={i} delay={i * 0.15}>
                <motion.div
                  className="glass rounded-2xl p-8 h-full card-hover group relative overflow-hidden border border-white/[0.04] hover:border-gold/15 transition-all"
                  whileHover={{ scale: 1.03 }}
                >
                  <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/15 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />

                  <div className="relative">
                    <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-gold/15 to-gold/5 flex items-center justify-center mb-6 group-hover:from-gold/25 group-hover:to-gold/10 transition-all duration-500">
                      <tech.icon className="w-8 h-8 text-gold" />
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-4">{tech.title}</h3>
                    <p className="text-white/45 leading-relaxed">{tech.desc}</p>
                  </div>

                  <div className="absolute top-4 right-4 grid grid-cols-3 gap-1 opacity-[0.06] group-hover:opacity-[0.12] transition-opacity">
                    {Array.from({ length: 9 }).map((_, j) => (
                      <div key={j} className="w-1 h-1 rounded-full bg-gold" />
                    ))}
                  </div>
                </motion.div>
              </Wrapper>
            );
          })}
        </div>
      </div>
    </section>
  );
}
