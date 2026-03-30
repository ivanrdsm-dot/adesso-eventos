'use client';

import { useLocale } from '@/lib/locale-context';
import SectionTitle from '../SectionTitle';
import { StaggerContainer, StaggerItem } from '../AnimatedSection';
import { motion } from 'framer-motion';
import { Tv, Users, Wifi, UtensilsCrossed, Palette, Building2 } from 'lucide-react';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

const iconMap: Record<string, React.ElementType> = {
  production: Tv,
  congress: Users,
  tech: Wifi,
  banquet: UtensilsCrossed,
  design: Palette,
  corporate: Building2,
};

export default function ServicesPreview() {
  const { t } = useLocale();

  return (
    <section className="relative py-24 bg-dark-surface overflow-hidden">
      <div className="absolute inset-0 noise-overlay" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-gold/3 blur-[200px]" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle title={t.services.title} highlight={t.services.titleHighlight} subtitle={t.services.subtitle} />

        <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {t.services.items.map((item, i) => {
            const Icon = iconMap[item.icon] || Tv;
            return (
              <StaggerItem key={i}>
                <motion.div
                  className="glass rounded-2xl p-8 h-full card-hover group cursor-pointer relative overflow-hidden"
                  whileHover={{ scale: 1.02 }}
                >
                  {/* Gradient overlay on hover */}
                  <div className="absolute inset-0 bg-gradient-to-br from-gold/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                  <div className="relative">
                    <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-gold/20 to-teal/10 flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-500">
                      <Icon className="w-7 h-7 text-gold" />
                    </div>
                    <h3 className="text-xl font-bold text-white mb-3 group-hover:text-gradient-gold transition-all">
                      {item.title}
                    </h3>
                    <p className="text-white/50 text-sm leading-relaxed">{item.desc}</p>

                    <div className="mt-5 flex items-center gap-2 text-gold/60 group-hover:text-gold text-sm font-medium transition-colors">
                      <span>{t.services.cta}</span>
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </motion.div>
              </StaggerItem>
            );
          })}
        </StaggerContainer>

        <div className="text-center">
          <Link
            href="/servicios"
            className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-gradient-to-r from-gold-dark to-gold text-black font-bold hover:shadow-2xl hover:shadow-gold/25 transition-all duration-300 hover:scale-105"
          >
            {t.services.cta}
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </div>
    </section>
  );
}
