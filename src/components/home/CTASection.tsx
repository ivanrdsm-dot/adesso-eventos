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
      {/* Vibrant gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#1a0f05] via-[#0f1535] to-[#051a18]" />
      {/* Animated colorful orbs */}
      <div className="absolute top-10 left-10 w-48 h-48 rounded-full bg-gold/10 blur-[80px] animate-float" />
      <div className="absolute bottom-10 right-10 w-64 h-64 rounded-full bg-teal/10 blur-[100px]" style={{ animationDelay: '1.5s' }} />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 rounded-full bg-accent-blue/5 blur-[120px]" />
      {/* Top border */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/30 to-transparent" />

      {/* Decorative rings */}
      <div className="absolute top-10 left-10 w-40 h-40 rounded-full border border-gold/10 animate-pulse" />
      <div className="absolute bottom-10 right-10 w-56 h-56 rounded-full border border-teal/8" />

      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <FadeInUp>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            {t.cta.title}{' '}
            <span className="text-gradient-gold">{t.cta.titleHighlight}</span>
          </h2>
          <p className="text-white/55 text-lg mb-10">{t.cta.subtitle}</p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
            <motion.a
              href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(locale === 'es' ? 'Hola, quiero cotizar mi evento.' : 'Hello, I want to quote my event.')}`}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-3 px-8 py-4 rounded-full bg-[#25D366] text-white font-bold text-lg hover:shadow-2xl hover:shadow-[#25D366]/30 transition-all duration-300 hover:scale-105"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
            >
              <MessageCircle className="w-5 h-5" />
              {t.cta.whatsapp}
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </motion.a>
            <motion.a
              href="tel:+525510703056"
              className="flex items-center gap-3 px-8 py-4 rounded-full bg-gradient-to-r from-gold-dark to-gold text-black font-bold text-lg hover:shadow-2xl hover:shadow-gold/30 transition-all duration-300 hover:scale-105"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
            >
              <Phone className="w-5 h-5" />
              {t.cta.phone}
            </motion.a>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-8 text-sm text-white/40">
            <a href="tel:+525510703056" className="flex items-center gap-2 hover:text-teal transition-colors">
              <Phone className="w-4 h-4" />
              55.1070.3056
            </a>
            <a href="tel:+525555248542" className="flex items-center gap-2 hover:text-gold transition-colors">
              <Phone className="w-4 h-4" />
              55.5524.8542
            </a>
            <a href="mailto:asoto@adessomexico.com" className="flex items-center gap-2 hover:text-accent-blue transition-colors">
              <Mail className="w-4 h-4" />
              asoto@adessomexico.com
            </a>
          </div>
        </FadeInUp>
      </div>
    </section>
  );
}
