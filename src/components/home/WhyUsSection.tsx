'use client';

import { useLocale } from '@/lib/locale-context';
import SectionTitle from '../SectionTitle';
import { StaggerContainer, StaggerItem } from '../AnimatedSection';
import { motion } from 'framer-motion';
import { Award, Settings, Cpu, Globe2, Stethoscope, Sparkles } from 'lucide-react';

const icons = [Award, Settings, Cpu, Globe2, Stethoscope, Sparkles];

export default function WhyUsSection() {
  const { t } = useLocale();

  return (
    <section className="relative py-24 overflow-hidden">
      <div className="absolute inset-0 noise-overlay" />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/20 to-transparent" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle title={t.whyUs.title} highlight={t.whyUs.titleHighlight} subtitle={t.whyUs.subtitle} />

        <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {t.whyUs.items.map((item, i) => {
            const Icon = icons[i];
            return (
              <StaggerItem key={i}>
                <motion.div
                  className="glass rounded-2xl p-8 h-full card-hover group"
                  whileHover={{ scale: 1.02 }}
                >
                  <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-gold/20 to-gold/5 flex items-center justify-center mb-5 group-hover:gold-glow transition-all duration-500">
                    <Icon className="w-7 h-7 text-gold" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">{item.title}</h3>
                  <p className="text-white/50 text-sm leading-relaxed mb-4">{item.desc}</p>
                  <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gold/10 text-gold text-xs font-medium">
                    {item.stat}
                  </span>
                </motion.div>
              </StaggerItem>
            );
          })}
        </StaggerContainer>
      </div>
    </section>
  );
}
