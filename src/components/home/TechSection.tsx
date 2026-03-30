'use client';

import { useLocale } from '@/lib/locale-context';
import SectionTitle from '../SectionTitle';
import { FadeInLeft, FadeInRight, FadeInUp } from '../AnimatedSection';
import { motion } from 'framer-motion';
import { Fingerprint, Bot, Video } from 'lucide-react';

export default function TechSection() {
  const { t } = useLocale();

  const techs = [
    { icon: Fingerprint, ...t.tech.rfid, gradient: 'from-gold/20 via-gold/10 to-transparent', iconBg: 'from-gold to-gold-dark', borderColor: 'hover:border-gold/40', accentColor: 'bg-gold' },
    { icon: Bot, ...t.tech.robots, gradient: 'from-teal/15 via-teal/8 to-transparent', iconBg: 'from-teal to-teal-dark', borderColor: 'hover:border-teal/40', accentColor: 'bg-teal' },
    { icon: Video, ...t.tech.streaming, gradient: 'from-accent-blue/15 via-accent-blue/8 to-transparent', iconBg: 'from-accent-blue to-blue-700', borderColor: 'hover:border-accent-blue/40', accentColor: 'bg-accent-blue' },
  ];

  return (
    <section className="relative py-24 overflow-hidden section-teal">
      <div className="absolute inset-0 noise-overlay" />
      <div className="absolute bottom-0 right-0 w-96 h-96 rounded-full bg-teal/5 blur-[150px]" />
      <div className="absolute top-0 left-0 w-72 h-72 rounded-full bg-gold/5 blur-[120px]" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle title={t.tech.title} highlight={t.tech.titleHighlight} subtitle={t.tech.subtitle} />

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {techs.map((tech, i) => {
            const Wrapper = i === 0 ? FadeInLeft : i === 2 ? FadeInRight : FadeInUp;
            return (
              <Wrapper key={i} delay={i * 0.15}>
                <motion.div
                  className={`glass rounded-2xl p-8 h-full card-hover group relative overflow-hidden border border-white/5 ${tech.borderColor} transition-all`}
                  whileHover={{ scale: 1.03 }}
                >
                  {/* Colored top accent */}
                  <div className={`absolute top-0 left-0 right-0 h-1 ${tech.accentColor} opacity-40 group-hover:opacity-80 transition-opacity`} />
                  {/* Background tint on hover */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${tech.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl`} />

                  <div className="relative">
                    <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${tech.iconBg} flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 group-hover:animate-float transition-transform`}>
                      <tech.icon className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-4">{tech.title}</h3>
                    <p className="text-white/55 leading-relaxed">{tech.desc}</p>
                  </div>

                  {/* Decorative dots */}
                  <div className="absolute top-4 right-4 grid grid-cols-3 gap-1 opacity-15 group-hover:opacity-30 transition-opacity">
                    {Array.from({ length: 9 }).map((_, j) => (
                      <div key={j} className={`w-1 h-1 rounded-full ${tech.accentColor}`} />
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
