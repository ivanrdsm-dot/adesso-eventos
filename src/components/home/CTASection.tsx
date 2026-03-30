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
      <div className="absolute inset-0 bg-gradient-to-b from-[#09090b] via-[#100e08] to-[#09090b]" />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/15 to-transparent" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full bg-gold/[0.03] blur-[200px]" />

      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <FadeInUp>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            {t.cta.title}{' '}
            <span className="text-gradient-gold">{t.cta.titleHighlight}</span>
          </h2>
          <p className="text-white/40 text-lg mb-10 font-light">{t.cta.subtitle}</p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
            <motion.a
              href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(locale === 'es' ? 'Hola, quiero cotizar mi evento.' : 'Hello, I want to quote my event.')}`}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-3 px-8 py-4 rounded-full bg-gradient-to-r from-gold-dark to-gold text-black font-bold text-lg hover:shadow-2xl hover:shadow-gold/20 transition-all duration-400"
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.98 }}
            >
              <MessageCircle className="w-5 h-5" />
              {t.cta.whatsapp}
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </motion.a>
            <motion.a
              href="tel:+525510703056"
              className="flex items-center gap-3 px-8 py-4 rounded-full border border-gold/20 text-gold hover:bg-gold/[0.05] hover:border-gold/30 transition-all duration-400"
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.98 }}
            >
              <Phone className="w-5 h-5" />
              {t.cta.phone}
            </motion.a>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-8 text-sm text-white/30">
            <a href="tel:+525510703056" className="flex items-center gap-2 hover:text-gold/70 transition-colors">
              <Phone className="w-4 h-4" />
              55.1070.3056
            </a>
            <a href="tel:+525555248542" className="flex items-center gap-2 hover:text-gold/70 transition-colors">
              <Phone className="w-4 h-4" />
              55.5524.8542
            </a>
            <a href="mailto:asoto@adessomexico.com" className="flex items-center gap-2 hover:text-gold/70 transition-colors">
              <Mail className="w-4 h-4" />
              asoto@adessomexico.com
            </a>
          </div>
        </FadeInUp>
      </div>
    </section>
  );
}
