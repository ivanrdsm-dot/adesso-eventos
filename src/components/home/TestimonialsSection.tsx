'use client';

import { useLocale } from '@/lib/locale-context';
import SectionTitle from '../SectionTitle';
import { StaggerContainer, StaggerItem } from '../AnimatedSection';
import { motion } from 'framer-motion';
import { Quote } from 'lucide-react';

const cardAccents = [
  { border: 'border-gold/20 hover:border-gold/40', avatar: 'from-gold to-gold-dark', quote: 'text-gold/25', stars: 'text-gold' },
  { border: 'border-teal/20 hover:border-teal/40', avatar: 'from-teal to-teal-dark', quote: 'text-teal/25', stars: 'text-teal' },
  { border: 'border-accent-blue/20 hover:border-accent-blue/40', avatar: 'from-accent-blue to-blue-700', quote: 'text-accent-blue/25', stars: 'text-gold' },
];

export default function TestimonialsSection() {
  const { t } = useLocale();

  return (
    <section className="relative py-24 overflow-hidden section-mixed">
      <div className="absolute inset-0 noise-overlay" />
      <div className="absolute top-1/2 left-0 w-72 h-72 rounded-full bg-gold/4 blur-[150px]" />
      <div className="absolute top-1/3 right-0 w-72 h-72 rounded-full bg-teal/4 blur-[150px]" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle title={t.testimonials.title} highlight={t.testimonials.titleHighlight} />

        <StaggerContainer className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {t.testimonials.items.map((item, i) => {
            const accent = cardAccents[i];
            return (
              <StaggerItem key={i}>
                <motion.div
                  className={`glass rounded-2xl p-8 h-full card-hover relative border ${accent.border} transition-all`}
                  whileHover={{ scale: 1.02 }}
                >
                  <Quote className={`w-10 h-10 ${accent.quote} mb-4`} />
                  <p className="text-white/70 italic leading-relaxed mb-6">&ldquo;{item.quote}&rdquo;</p>
                  <div className="flex items-center gap-3">
                    <div className={`w-12 h-12 rounded-full bg-gradient-to-br ${accent.avatar} flex items-center justify-center shadow-lg`}>
                      <span className="text-white font-bold text-lg">{item.author[0]}</span>
                    </div>
                    <div>
                      <div className="text-white font-semibold text-sm">{item.author}</div>
                      <div className="text-white/40 text-xs">{item.company}</div>
                    </div>
                  </div>

                  {/* Star rating */}
                  <div className="absolute top-8 right-8 flex gap-0.5">
                    {Array.from({ length: 5 }).map((_, j) => (
                      <svg key={j} className={`w-4 h-4 ${accent.stars}`} fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
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
