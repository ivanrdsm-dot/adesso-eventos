'use client';

import { useLocale } from '@/lib/locale-context';
import SectionTitle from '../SectionTitle';
import { StaggerContainer, StaggerItem } from '../AnimatedSection';
import { motion } from 'framer-motion';
import { Award, Settings, Cpu, Globe2, Stethoscope, Sparkles } from 'lucide-react';

const icons = [Award, Settings, Cpu, Globe2, Stethoscope, Sparkles];
const cardColors = [
  { bg: 'from-gold/15 to-transparent', icon: 'from-gold/30 to-gold/10', glow: 'group-hover:shadow-gold/20', border: 'group-hover:border-gold/30' },
  { bg: 'from-teal/10 to-transparent', icon: 'from-teal/30 to-teal/10', glow: 'group-hover:shadow-teal/20', border: 'group-hover:border-teal/30' },
  { bg: 'from-accent-blue/10 to-transparent', icon: 'from-accent-blue/30 to-accent-blue/10', glow: 'group-hover:shadow-accent-blue/20', border: 'group-hover:border-accent-blue/30' },
  { bg: 'from-gold/12 to-transparent', icon: 'from-gold/25 to-teal/10', glow: 'group-hover:shadow-gold/15', border: 'group-hover:border-gold/25' },
  { bg: 'from-teal/12 to-transparent', icon: 'from-teal/25 to-gold/10', glow: 'group-hover:shadow-teal/15', border: 'group-hover:border-teal/25' },
  { bg: 'from-accent-purple/10 to-transparent', icon: 'from-accent-purple/30 to-accent-purple/10', glow: 'group-hover:shadow-accent-purple/20', border: 'group-hover:border-accent-purple/30' },
];

export default function WhyUsSection() {
  const { t } = useLocale();

  return (
    <section className="relative py-24 overflow-hidden section-blue">
      <div className="absolute inset-0 noise-overlay" />
      {/* Colorful orbs */}
      <div className="absolute top-20 left-10 w-80 h-80 rounded-full bg-gold/5 blur-[120px]" />
      <div className="absolute bottom-20 right-10 w-80 h-80 rounded-full bg-teal/5 blur-[120px]" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 rounded-full bg-accent-blue/3 blur-[150px]" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle title={t.whyUs.title} highlight={t.whyUs.titleHighlight} subtitle={t.whyUs.subtitle} />

        <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {t.whyUs.items.map((item, i) => {
            const Icon = icons[i];
            const color = cardColors[i];
            return (
              <StaggerItem key={i}>
                <motion.div
                  className={`glass rounded-2xl p-8 h-full card-hover group relative overflow-hidden border border-white/5 ${color.border} transition-all`}
                  whileHover={{ scale: 1.02 }}
                >
                  {/* Colored gradient on top */}
                  <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${color.bg} opacity-60 group-hover:opacity-100 transition-opacity`} />
                  {/* Background tint */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${color.bg} opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl`} />

                  <div className="relative">
                    <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${color.icon} flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-500`}>
                      <Icon className="w-7 h-7 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-white mb-3">{item.title}</h3>
                    <p className="text-white/55 text-sm leading-relaxed mb-4">{item.desc}</p>
                    <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 text-gold text-xs font-medium border border-gold/15">
                      {item.stat}
                    </span>
                  </div>
                </motion.div>
              </StaggerItem>
            );
          })}
        </StaggerContainer>
      </div>
    </section>
  );
}
