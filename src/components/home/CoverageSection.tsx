'use client';

import { useLocale } from '@/lib/locale-context';
import SectionTitle from '../SectionTitle';
import { StaggerContainer, StaggerItem } from '../AnimatedSection';
import { motion } from 'framer-motion';
import { MapPin } from 'lucide-react';

export default function CoverageSection() {
  const { t } = useLocale();

  return (
    <section className="relative py-24 overflow-hidden">
      <div className="absolute inset-0 noise-overlay" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle title={t.coverage.title} highlight={t.coverage.titleHighlight} subtitle={t.coverage.subtitle} />

        <StaggerContainer className="flex flex-wrap justify-center gap-4 max-w-4xl mx-auto">
          {t.coverage.cities.map((city, i) => (
            <StaggerItem key={i}>
              <motion.div
                className="glass rounded-full px-6 py-3 flex items-center gap-2 card-hover cursor-default"
                whileHover={{ scale: 1.08, borderColor: 'rgba(200,164,93,0.4)' }}
              >
                <MapPin className="w-4 h-4 text-gold" />
                <span className="text-white/80 font-medium">{city}</span>
              </motion.div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
