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
                className="rounded-full px-6 py-3 flex items-center gap-2 cursor-default bg-white/[0.02] border border-white/[0.06] hover:border-gold/20 hover:bg-gold/[0.04] transition-all duration-400"
                whileHover={{ scale: 1.06, y: -3 }}
              >
                <MapPin className="w-4 h-4 text-gold/60" />
                <span className="text-white/70 font-medium text-sm">{city}</span>
              </motion.div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
