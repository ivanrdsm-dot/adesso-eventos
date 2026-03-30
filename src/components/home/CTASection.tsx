'use client';

import { useLocale } from '@/lib/locale-context';
import { FadeInUp } from '../AnimatedSection';
import { motion } from 'framer-motion';
import { MessageCircle, Phone, Mail, ArrowRight } from 'lucide-react';

const WHATSAPP_NUMBER = '5215510703056';

export default function CTASection() {
  const { locale, t } = useLocale();

  return (
    <section className="relative py-24 overflow-hidden">
      <div className="absolute inset-0 noise-overlay" />
      <div className="absolute inset-0 bg-gradient-to-br from-gold/5 via-dark to-teal/5" />

      {/* Decorative circles */}
      <div className="absolute top-10 left-10 w-32 h-32 rounded-full border border-gold/10" />
      <div className="absolute bottom-10 right-10 w-48 h-48 rounded-full border border-gold/5" />

      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <FadeInUp>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            {t.cta.title}{' '}
            <span className="text-gradient-gold">{t.cta.titleHighlight}</span>
          </h2>
          <p className="text-white/50 text-lg mb-10">{t.cta.subtitle}</p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
            <motion.a
              href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(locale === 'es' ? 'Hola, quiero cotizar mi evento.' : 'Hello, I want to quote my event.')}`}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-3 px-8 py-4 rounded-full bg-[#25D366] text-white font-bold text-lg hover:shadow-2xl hover:shadow-[#25D366]/25 transition-all duration-300 hover:scale-105"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
            >
              <MessageCircle className="w-5 h-5" />
              {t.cta.whatsapp}
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </motion.a>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-8 text-sm text-white/40">
            <a href="tel:+525510703056" className="flex items-center gap-2 hover:text-gold transition-colors">
              <Phone className="w-4 h-4" />
              55.1070.3056
            </a>
            <a href="tel:+525555248542" className="flex items-center gap-2 hover:text-gold transition-colors">
              <Phone className="w-4 h-4" />
              55.5524.8542
            </a>
            <a href="mailto:asoto@adessomexico.com" className="flex items-center gap-2 hover:text-gold transition-colors">
              <Mail className="w-4 h-4" />
              asoto@adessomexico.com
            </a>
          </div>
        </FadeInUp>
      </div>
    </section>
  );
}
