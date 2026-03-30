'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import Image from 'next/image';
import { useRef } from 'react';
import { useLocale } from '@/lib/locale-context';
import { ArrowRight } from 'lucide-react';

const WHATSAPP_NUMBER = '5215510703056';

export default function ParallaxBanner() {
  const ref = useRef(null);
  const { locale } = useLocale();
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] });
  const y = useTransform(scrollYProgress, [0, 1], ['-10%', '10%']);
  const opacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0.4, 1, 1, 0.4]);

  const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(locale === 'es' ? 'Hola, quiero cotizar un congreso médico.' : 'Hello, I want to quote a medical congress.')}`;

  return (
    <section ref={ref} className="relative h-[500px] md:h-[600px] overflow-hidden">
      <motion.div style={{ y }} className="absolute inset-0 scale-125">
        <Image
          src="/images/congreso-angeles-screen.webp"
          alt="Congreso ADESSO"
          fill
          className="object-cover"
          sizes="100vw"
        />
      </motion.div>

      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/60 to-black/85" />
      <div className="absolute inset-0 noise-overlay" />

      {/* Gold lines */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/30 to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/30 to-transparent" />

      <motion.div
        style={{ opacity }}
        className="relative h-full flex items-center justify-center"
      >
        <div className="text-center px-4 max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              {locale === 'es' ? 'Especialistas en ' : 'Specialists in '}
              <span className="text-gradient-gold">{locale === 'es' ? 'Congresos Médicos' : 'Medical Congresses'}</span>
            </h2>
            <p className="text-white/70 text-lg md:text-xl mb-8 max-w-2xl mx-auto">
              {locale === 'es'
                ? 'Más de 500 congresos médicos producidos con éxito. Producción técnica, escenografía, RFID, streaming y coordinación total.'
                : 'Over 500 medical congresses produced successfully. Technical production, scenography, RFID, streaming and total coordination.'}
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-3 px-8 py-4 rounded-full bg-gradient-to-r from-gold-dark to-gold text-black font-bold text-lg hover:shadow-2xl hover:shadow-gold/30 transition-all duration-300 hover:scale-105"
              >
                {locale === 'es' ? 'Cotizar Congreso' : 'Quote Congress'}
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>
              <a
                href="/congresos-medicos"
                className="inline-flex items-center gap-3 px-8 py-4 rounded-full border border-white/20 text-white hover:border-gold/40 hover:bg-white/5 backdrop-blur-sm transition-all"
              >
                {locale === 'es' ? 'Ver Más' : 'Learn More'}
              </a>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
