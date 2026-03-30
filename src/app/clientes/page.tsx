'use client';

import PageHero from '@/components/PageHero';
import { useLocale } from '@/lib/locale-context';
import SectionTitle from '@/components/SectionTitle';
import { StaggerContainer, StaggerItem, FadeInUp } from '@/components/AnimatedSection';
import { motion } from 'framer-motion';
import { Building2, GraduationCap, Stethoscope, Globe, Quote, ArrowRight } from 'lucide-react';

const WHATSAPP_NUMBER = '5215510703056';
const categoryIcons = [Stethoscope, GraduationCap, Building2, Globe];

export default function ClientesPage() {
  const { locale, t } = useLocale();

  return (
    <>
      <PageHero
        title={t.clientsPage.title}
        highlight={t.clientsPage.titleHighlight}
        subtitle={t.clientsPage.subtitle}
      />

      {/* Client Categories */}
      <section className="relative py-24">
        <div className="absolute inset-0 noise-overlay" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {t.clientsPage.categories.map((category, i) => {
              const Icon = categoryIcons[i];
              return (
                <StaggerItem key={i}>
                  <motion.div
                    className="glass rounded-2xl p-8 h-full card-hover"
                    whileHover={{ scale: 1.02 }}
                  >
                    <div className="flex items-center gap-4 mb-6">
                      <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-gold/20 to-gold/5 flex items-center justify-center">
                        <Icon className="w-7 h-7 text-gold" />
                      </div>
                      <h3 className="text-xl font-bold text-white">{category.title}</h3>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      {category.items.map((item, j) => (
                        <div key={j} className="flex items-center gap-2 p-3 rounded-xl bg-white/[0.02] hover:bg-white/[0.05] transition-colors">
                          <div className="w-2 h-2 rounded-full bg-gold shrink-0" />
                          <span className="text-white/60 text-sm">{item}</span>
                        </div>
                      ))}
                    </div>
                  </motion.div>
                </StaggerItem>
              );
            })}
          </StaggerContainer>
        </div>
      </section>

      {/* Testimonials */}
      <section className="relative py-24 bg-dark-surface">
        <div className="absolute inset-0 noise-overlay" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle title={t.testimonials.title} highlight={t.testimonials.titleHighlight} />

          <StaggerContainer className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {t.testimonials.items.map((item, i) => (
              <StaggerItem key={i}>
                <motion.div
                  className="glass rounded-2xl p-8 h-full card-hover"
                  whileHover={{ scale: 1.02 }}
                >
                  <Quote className="w-8 h-8 text-gold/20 mb-4" />
                  <p className="text-white/70 italic leading-relaxed mb-6">&ldquo;{item.quote}&rdquo;</p>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-gradient-to-br from-gold/30 to-gold/10 flex items-center justify-center">
                      <span className="text-gold font-bold">{item.author[0]}</span>
                    </div>
                    <div>
                      <div className="text-white font-semibold text-sm">{item.author}</div>
                      <div className="text-gold/60 text-xs">{item.company}</div>
                    </div>
                  </div>
                </motion.div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* CTA */}
      <section className="relative py-20">
        <div className="absolute inset-0 bg-gradient-to-br from-gold/5 via-dark to-teal/5" />
        <div className="relative max-w-4xl mx-auto px-4 text-center">
          <FadeInUp>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              {locale === 'es' ? 'Únete a Nuestros' : 'Join Our'}{' '}
              <span className="text-gradient-gold">{locale === 'es' ? 'Clientes Satisfechos' : 'Satisfied Clients'}</span>
            </h2>
            <a
              href={`https://wa.me/${WHATSAPP_NUMBER}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 px-8 py-4 mt-6 rounded-full bg-gradient-to-r from-gold-dark to-gold text-black font-bold text-lg hover:shadow-2xl hover:shadow-gold/25 transition-all duration-300 hover:scale-105"
            >
              {t.cta.quote}
              <ArrowRight className="w-5 h-5" />
            </a>
          </FadeInUp>
        </div>
      </section>
    </>
  );
}
