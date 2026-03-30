'use client';

import { useLocale } from '@/lib/locale-context';
import SectionTitle from '../SectionTitle';
import { StaggerContainer, StaggerItem } from '../AnimatedSection';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

const serviceImages: Record<string, string> = {
  production: '/images/gala-show-lights.jpg',
  congress: '/images/congreso-audience-full.jpg',
  tech: '/images/stand-fotofinder.jpg',
  banquet: '/images/banquet-gala-gold.jpg',
  design: '/images/stage-led-pediatric.jpg',
  corporate: '/images/gala-led-screens.jpg',
};

export default function ServicesPreview() {
  const { t } = useLocale();

  return (
    <section className="relative py-24 bg-dark-surface overflow-hidden">
      <div className="absolute inset-0 noise-overlay" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle title={t.services.title} highlight={t.services.titleHighlight} subtitle={t.services.subtitle} />

        <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {t.services.items.map((item, i) => (
            <StaggerItem key={i}>
              <motion.div
                className="rounded-2xl overflow-hidden card-hover group cursor-pointer relative h-[380px]"
                whileHover={{ scale: 1.02 }}
              >
                {/* Background Image */}
                <Image
                  src={serviceImages[item.icon]}
                  alt={item.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />

                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/50 to-black/20 group-hover:from-black/98 group-hover:via-black/60 transition-all duration-500" />

                {/* Content */}
                <div className="absolute inset-0 p-6 flex flex-col justify-end">
                  <div className="transform transition-all duration-500 group-hover:-translate-y-2">
                    <h3 className="text-xl font-bold text-white mb-2">{item.title}</h3>
                    <p className="text-white/60 text-sm leading-relaxed mb-4 line-clamp-3 group-hover:line-clamp-none transition-all">{item.desc}</p>
                    <div className="flex items-center gap-2 text-gold text-sm font-medium opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0 transition-all duration-500">
                      <span>{t.services.cta}</span>
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </div>

                {/* Top-right gold accent */}
                <div className="absolute top-4 right-4 w-10 h-10 border-t-2 border-r-2 border-gold/0 group-hover:border-gold/50 transition-all duration-700 rounded-tr-lg" />
              </motion.div>
            </StaggerItem>
          ))}
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
