'use client';

import { useLocale } from '@/lib/locale-context';
import SectionTitle from '../SectionTitle';
import { StaggerContainer, StaggerItem } from '../AnimatedSection';
import { motion } from 'framer-motion';
import { MapPin } from 'lucide-react';

const cityColors = [
  'border-gold/30 hover:bg-gold/10 hover:border-gold/50',
  'border-teal/30 hover:bg-teal/10 hover:border-teal/50',
  'border-accent-blue/30 hover:bg-accent-blue/10 hover:border-accent-blue/50',
  'border-gold/30 hover:bg-gold/10 hover:border-gold/50',
  'border-teal/30 hover:bg-teal/10 hover:border-teal/50',
  'border-accent-blue/30 hover:bg-accent-blue/10 hover:border-accent-blue/50',
  'border-gold/30 hover:bg-gold/10 hover:border-gold/50',
  'border-teal/30 hover:bg-teal/10 hover:border-teal/50',
  'border-accent-blue/30 hover:bg-accent-blue/10 hover:border-accent-blue/50',
];

const pinColors = ['text-gold', 'text-teal', 'text-accent-blue', 'text-gold', 'text-teal', 'text-accent-blue', 'text-gold', 'text-teal', 'text-accent-blue'];

export default function CoverageSection() {
  const { t } = useLocale();

  return (
    <section className="relative py-24 overflow-hidden section-gold">
      <div className="absolute inset-0 noise-overlay" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle title={t.coverage.title} highlight={t.coverage.titleHighlight} subtitle={t.coverage.subtitle} />

        <StaggerContainer className="flex flex-wrap justify-center gap-4 max-w-4xl mx-auto">
          {t.coverage.cities.map((city, i) => (
            <StaggerItem key={i}>
              <motion.div
                className={`rounded-full px-6 py-3 flex items-center gap-2 cursor-default bg-white/[0.03] border ${cityColors[i]} transition-all duration-300`}
                whileHover={{ scale: 1.08, y: -4 }}
              >
                <MapPin className={`w-4 h-4 ${pinColors[i]}`} />
                <span className="text-white/80 font-medium">{city}</span>
              </motion.div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
