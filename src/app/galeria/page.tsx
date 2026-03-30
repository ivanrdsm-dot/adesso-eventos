'use client';

import PageHero from '@/components/PageHero';
import { useLocale } from '@/lib/locale-context';
import { StaggerContainer, StaggerItem } from '@/components/AnimatedSection';
import { motion } from 'framer-motion';
import { useState } from 'react';
import { Tv, Users, Building2, Wifi, Languages, Award } from 'lucide-react';

const icons = [Tv, Building2, Users, Wifi, Languages, Award];
const gradients = [
  'from-gold/20 to-teal/10',
  'from-teal/20 to-gold/10',
  'from-gold/15 to-gold/5',
  'from-teal/15 to-teal/5',
  'from-gold/20 to-teal/5',
  'from-teal/10 to-gold/20',
];

export default function GaleriaPage() {
  const { locale, t } = useLocale();
  const [activeFilter, setActiveFilter] = useState('all');

  const filters = locale === 'es'
    ? ['Todos', 'Congresos', 'Corporativos', 'Tecnología']
    : ['All', 'Congresses', 'Corporate', 'Technology'];

  return (
    <>
      <PageHero
        title={t.gallery.title}
        highlight={t.gallery.titleHighlight}
        subtitle={t.gallery.subtitle}
      />

      <section className="relative py-24">
        <div className="absolute inset-0 noise-overlay" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Filters */}
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {filters.map((filter, i) => (
              <motion.button
                key={i}
                onClick={() => setActiveFilter(i === 0 ? 'all' : filter.toLowerCase())}
                className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                  (i === 0 && activeFilter === 'all') || activeFilter === filter.toLowerCase()
                    ? 'bg-gradient-to-r from-gold-dark to-gold text-black'
                    : 'glass text-white/60 hover:text-white hover:border-gold/40'
                }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
              >
                {filter}
              </motion.button>
            ))}
          </div>

          {/* Gallery Grid */}
          <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {t.gallery.items.map((item, i) => {
              const Icon = icons[i];
              return (
                <StaggerItem key={i}>
                  <motion.div
                    className="glass rounded-2xl overflow-hidden card-hover group cursor-pointer"
                    whileHover={{ scale: 1.03 }}
                    layout
                  >
                    {/* Image placeholder with gradient */}
                    <div className={`h-64 bg-gradient-to-br ${gradients[i]} relative overflow-hidden`}>
                      <div className="absolute inset-0 flex items-center justify-center">
                        <Icon className="w-16 h-16 text-white/10 group-hover:text-white/20 group-hover:scale-110 transition-all duration-500" />
                      </div>
                      {/* Overlay on hover */}
                      <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
                        <div className="text-center px-4">
                          <h3 className="text-xl font-bold text-white mb-2">{item.title}</h3>
                          <p className="text-white/70 text-sm">{item.desc}</p>
                        </div>
                      </div>
                    </div>
                    {/* Tags */}
                    <div className="p-5">
                      <h3 className="text-lg font-bold text-white mb-2">{item.title}</h3>
                      <p className="text-white/50 text-sm mb-3">{item.desc}</p>
                      <div className="flex flex-wrap gap-2">
                        {item.tags.map((tag, j) => (
                          <span key={j} className="px-3 py-1 rounded-full bg-gold/10 text-gold text-xs font-medium">
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                </StaggerItem>
              );
            })}
          </StaggerContainer>
        </div>
      </section>
    </>
  );
}
