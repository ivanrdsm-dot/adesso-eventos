'use client';

import PageHero from '@/components/PageHero';
import { useLocale } from '@/lib/locale-context';
import SectionTitle from '@/components/SectionTitle';
import { FadeInUp, FadeInLeft, FadeInRight, StaggerContainer, StaggerItem } from '@/components/AnimatedSection';
import CounterAnimation from '@/components/CounterAnimation';
import { motion } from 'framer-motion';
import { Target, Eye, Lightbulb, Award, Shield, Cpu, Heart, Handshake, CheckCircle, ArrowRight } from 'lucide-react';
import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';

const WHATSAPP_NUMBER = '5215510703056';
const valueIcons = [Lightbulb, Award, Shield, Target, Cpu, Handshake, Heart, CheckCircle];

export default function NosotrosPage() {
  const { locale, t } = useLocale();

  return (
    <>
      <PageHero
        title={t.about.heroTitle}
        highlight={t.about.heroHighlight}
        subtitle={t.about.heroSubtitle}
        metrics={[
          locale === 'es' ? '35+ Años' : '35+ Years',
          locale === 'es' ? '10K+ Eventos' : '10K+ Events',
          locale === 'es' ? '500+ Congresos' : '500+ Congresses',
        ]}
      />

      {/* Stats */}
      <section className="relative py-16 bg-dark-surface">
        <div className="max-w-6xl mx-auto px-4 grid grid-cols-2 md:grid-cols-4 gap-8">
          <CounterAnimation end={35} suffix="+" label={locale === 'es' ? 'Años de Trayectoria' : 'Years of Experience'} />
          <CounterAnimation end={10000} suffix="+" label={locale === 'es' ? 'Eventos Producidos' : 'Events Produced'} />
          <CounterAnimation end={500} suffix="+" label={locale === 'es' ? 'Congresos Médicos' : 'Medical Congresses'} />
          <CounterAnimation end={9} suffix="+" label={locale === 'es' ? 'Ciudades' : 'Cities'} />
        </div>
      </section>

      {/* History */}
      <section className="relative py-24">
        <div className="absolute inset-0 noise-overlay" />
        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle title={t.about.historyTitle} highlight={t.about.historySubtitle} />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <FadeInLeft>
              <div className="space-y-6">
                <p className="text-white/60 leading-relaxed text-lg">{t.about.history1}</p>
                <p className="text-white/60 leading-relaxed text-lg">{t.about.history2}</p>

                {/* Timeline */}
                <div className="mt-8 space-y-4">
                  {(locale === 'es' ? [
                    { year: '1989', text: 'Fundación de ADESSO' },
                    { year: '2000', text: 'Expansión a producción técnica integral' },
                    { year: '2010', text: 'Líderes en congresos médicos' },
                    { year: '2020', text: 'Tecnología RFID y eventos híbridos' },
                    { year: '2025', text: '+35 años de excelencia continua' },
                  ] : [
                    { year: '1989', text: 'ADESSO Founded' },
                    { year: '2000', text: 'Expansion to full technical production' },
                    { year: '2010', text: 'Medical congress leaders' },
                    { year: '2020', text: 'RFID technology and hybrid events' },
                    { year: '2025', text: '+35 years of continued excellence' },
                  ]).map((item, i) => (
                    <div key={i} className="flex items-center gap-4">
                      <span className="text-gold font-bold text-lg w-16">{item.year}</span>
                      <div className="w-3 h-3 rounded-full bg-gold shrink-0" />
                      <span className="text-white/60">{item.text}</span>
                    </div>
                  ))}
                </div>
              </div>
            </FadeInLeft>

            <FadeInRight>
              <div className="glass rounded-3xl p-8 gold-glow">
                <div className="grid grid-cols-2 gap-6">
                  <div className="text-center p-4 rounded-xl bg-white/[0.03]">
                    <div className="text-3xl font-bold text-gradient-gold">1989</div>
                    <div className="text-white/40 text-sm mt-1">{locale === 'es' ? 'Fundación' : 'Founded'}</div>
                  </div>
                  <div className="text-center p-4 rounded-xl bg-white/[0.03]">
                    <div className="text-3xl font-bold text-gradient-gold">CDMX</div>
                    <div className="text-white/40 text-sm mt-1">{locale === 'es' ? 'Sede Central' : 'Headquarters'}</div>
                  </div>
                  <div className="text-center p-4 rounded-xl bg-white/[0.03]">
                    <div className="text-3xl font-bold text-gradient-gold">360°</div>
                    <div className="text-white/40 text-sm mt-1">{locale === 'es' ? 'Servicio Integral' : 'Full Service'}</div>
                  </div>
                  <div className="text-center p-4 rounded-xl bg-white/[0.03]">
                    <div className="text-3xl font-bold text-gradient-gold">24/7</div>
                    <div className="text-white/40 text-sm mt-1">{locale === 'es' ? 'Soporte' : 'Support'}</div>
                  </div>
                </div>
              </div>
            </FadeInRight>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="relative py-24 bg-dark-surface">
        <div className="absolute inset-0 noise-overlay" />
        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <FadeInLeft>
              <motion.div className="glass rounded-3xl p-8 h-full card-hover" whileHover={{ scale: 1.02 }}>
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-gold/20 to-gold/5 flex items-center justify-center mb-6">
                  <Target className="w-7 h-7 text-gold" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">{t.about.mission}</h3>
                <p className="text-white/60 leading-relaxed">{t.about.missionText}</p>
              </motion.div>
            </FadeInLeft>
            <FadeInRight>
              <motion.div className="glass rounded-3xl p-8 h-full card-hover" whileHover={{ scale: 1.02 }}>
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-teal/20 to-teal/5 flex items-center justify-center mb-6">
                  <Eye className="w-7 h-7 text-teal" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">{t.about.vision}</h3>
                <p className="text-white/60 leading-relaxed">{t.about.visionText}</p>
              </motion.div>
            </FadeInRight>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="relative py-24">
        <div className="absolute inset-0 noise-overlay" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle title={t.about.values} highlight="" />

          <StaggerContainer className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {t.about.valuesList.map((value, i) => {
              const Icon = valueIcons[i];
              return (
                <StaggerItem key={i}>
                  <motion.div
                    className="glass rounded-2xl p-6 text-center card-hover group"
                    whileHover={{ scale: 1.05, y: -5 }}
                  >
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-gold/20 to-gold/5 flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                      <Icon className="w-6 h-6 text-gold" />
                    </div>
                    <h4 className="text-white font-bold mb-1">{value.title}</h4>
                    <p className="text-white/40 text-sm">{value.desc}</p>
                  </motion.div>
                </StaggerItem>
              );
            })}
          </StaggerContainer>
        </div>
      </section>

      {/* Image Strip */}
      <section className="relative py-16 bg-dark-surface overflow-hidden">
        <Swiper
          modules={[Autoplay]}
          slidesPerView={2}
          spaceBetween={8}
          autoplay={{ delay: 0, disableOnInteraction: false }}
          speed={4000}
          loop
          allowTouchMove={false}
          breakpoints={{
            640: { slidesPerView: 3 },
            1024: { slidesPerView: 4 },
            1280: { slidesPerView: 5 },
          }}
        >
          {[
            '/images/gala-led-screens.jpg',
            '/images/congreso-audience-full.jpg',
            '/images/banquet-gala-gold.jpg',
            '/images/expo-hall-stands.jpg',
            '/images/gala-show-lights.jpg',
            '/images/venue-night-pool.jpg',
            '/images/catering-canapes.jpg',
            '/images/stage-led-pediatric.jpg',
            '/images/congreso-dermatologia-stage.jpg',
            '/images/evento-outdoor-people.jpg',
          ].map((src, i) => (
            <SwiperSlide key={i}>
              <div className="relative h-[200px] rounded-xl overflow-hidden">
                <Image src={src} alt={`ADESSO evento ${i + 1}`} fill className="object-cover" sizes="20vw" />
                <div className="absolute inset-0 bg-black/20" />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </section>

      {/* CTA */}
      <section className="relative py-20 bg-dark-surface">
        <div className="relative max-w-4xl mx-auto px-4 text-center">
          <FadeInUp>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              {locale === 'es' ? '¿Listo para Trabajar con los ' : 'Ready to Work with the '}
              <span className="text-gradient-gold">{locale === 'es' ? 'Expertos?' : 'Experts?'}</span>
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
