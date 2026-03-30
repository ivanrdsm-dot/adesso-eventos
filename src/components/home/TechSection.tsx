'use client';

import { useLocale } from '@/lib/locale-context';
import SectionTitle from '../SectionTitle';
import { FadeInLeft, FadeInRight, FadeInUp } from '../AnimatedSection';
import { motion } from 'framer-motion';
import { Fingerprint, Bot, Video } from 'lucide-react';

export default function TechSection() {
  const { t } = useLocale();

  const techs = [
    { icon: Fingerprint, ...t.tech.rfid, color: 'from-gold/20 to-gold/5' },
    { icon: Bot, ...t.tech.robots, color: 'from-teal/20 to-teal/5' },
    { icon: Video, ...t.tech.streaming, color: 'from-gold/20 to-teal/10' },
  ];

  return (
    <section className="relative py-24 overflow-hidden">
      <div className="absolute inset-0 noise-overlay" />
      <div className="absolute bottom-0 right-0 w-96 h-96 rounded-full bg-teal/5 blur-[150px]" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle title={t.tech.title} highlight={t.tech.titleHighlight} subtitle={t.tech.subtitle} />

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {techs.map((tech, i) => {
            const Wrapper = i === 0 ? FadeInLeft : i === 2 ? FadeInRight : FadeInUp;
            return (
              <Wrapper key={i} delay={i * 0.15}>
                <motion.div
                  className="glass rounded-2xl p-8 h-full card-hover group relative overflow-hidden"
                  whileHover={{ scale: 1.03 }}
                >
                  {/* Animated border gradient */}
                  <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                    style={{ background: 'linear-gradient(135deg, rgba(200,164,93,0.1), transparent, rgba(0,180,166,0.1))' }}
                  />

                  <div className="relative">
                    <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${tech.color} flex items-center justify-center mb-6 group-hover:animate-float`}>
                      <tech.icon className="w-8 h-8 text-gold" />
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-4">{tech.title}</h3>
                    <p className="text-white/50 leading-relaxed">{tech.desc}</p>
                  </div>

                  {/* Decorative dots */}
                  <div className="absolute top-4 right-4 grid grid-cols-3 gap-1 opacity-20">
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
