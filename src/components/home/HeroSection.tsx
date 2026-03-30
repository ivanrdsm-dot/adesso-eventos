'use client';

import { motion } from 'framer-motion';
import { useLocale } from '@/lib/locale-context';
import { ArrowRight, Play } from 'lucide-react';

const WHATSAPP_NUMBER = '5215510703056';

export default function HeroSection() {
  const { locale, t } = useLocale();
  const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(locale === 'es' ? 'Hola, quiero cotizar un evento.' : 'Hello, I want to quote an event.')}`;

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 gradient-bg" />
      <div className="absolute inset-0 noise-overlay" />

      {/* Decorative Elements */}
      <div className="absolute top-1/4 left-10 w-72 h-72 rounded-full bg-gold/5 blur-[120px]" />
      <div className="absolute bottom-1/4 right-10 w-96 h-96 rounded-full bg-teal/5 blur-[120px]" />

      {/* Grid pattern */}
      <div className="absolute inset-0 opacity-[0.03]" style={{
        backgroundImage: 'linear-gradient(rgba(200,164,93,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(200,164,93,0.3) 1px, transparent 1px)',
        backgroundSize: '60px 60px',
      }} />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24">
        <div className="text-center max-w-5xl mx-auto">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-5 py-2 rounded-full border border-gold/30 bg-gold/5 mb-8"
          >
            <span className="w-2 h-2 rounded-full bg-gold animate-pulse" />
            <span className="text-gold text-sm font-medium tracking-wide">{t.hero.badge}</span>
          </motion.div>

          {/* Title */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6"
          >
            {t.hero.title}{' '}
            <br className="hidden sm:block" />
            <span className="text-gradient-gold">{t.hero.titleHighlight}</span>
            <br />
            <span className="text-white/80">{t.hero.titleEnd}</span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-lg md:text-xl text-white/50 max-w-3xl mx-auto mb-10 leading-relaxed"
          >
            {t.hero.subtitle}
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16"
          >
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-3 px-8 py-4 rounded-full bg-gradient-to-r from-gold-dark to-gold text-black font-bold text-lg hover:shadow-2xl hover:shadow-gold/25 transition-all duration-300 hover:scale-105"
            >
              {t.hero.cta1}
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>
            <button className="group flex items-center gap-3 px-8 py-4 rounded-full border border-white/20 text-white hover:border-gold/40 hover:bg-gold/5 transition-all duration-300">
              <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center group-hover:bg-gold/20 transition-colors">
                <Play className="w-4 h-4 ml-0.5" />
              </div>
              {t.hero.cta2}
            </button>
          </motion.div>

          {/* Stats Row */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto"
          >
            {[
              { value: '35+', label: t.hero.stat1 },
              { value: '2,000+', label: t.hero.stat2 },
              { value: '500+', label: t.hero.stat3 },
              { value: '100%', label: t.hero.stat4 },
            ].map((stat, i) => (
              <motion.div
                key={i}
                className="glass rounded-2xl p-6 text-center card-hover"
                whileHover={{ scale: 1.05 }}
              >
                <div className="text-3xl md:text-4xl font-bold text-gradient-gold mb-1">{stat.value}</div>
                <div className="text-white/40 text-xs uppercase tracking-wider">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <div className="w-6 h-10 rounded-full border-2 border-white/20 flex items-start justify-center p-1.5">
          <motion.div
            className="w-1.5 h-1.5 rounded-full bg-gold"
            animate={{ y: [0, 16, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          />
        </div>
      </motion.div>
    </section>
  );
}
