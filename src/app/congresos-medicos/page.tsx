'use client';

import PageHero from '@/components/PageHero';
import { useLocale } from '@/lib/locale-context';
import SectionTitle from '@/components/SectionTitle';
import { StaggerContainer, StaggerItem, FadeInUp } from '@/components/AnimatedSection';
import CounterAnimation from '@/components/CounterAnimation';
import { motion } from 'framer-motion';
import { ArrowRight, Stethoscope, Monitor, Fingerprint, Languages, LayoutGrid, Video, Users, ClipboardList } from 'lucide-react';
import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';

const WHATSAPP_NUMBER = '5215510703056';
const icons = [Stethoscope, Monitor, Fingerprint, Languages, LayoutGrid, Video, Users, ClipboardList];

const congressImages = [
  { src: '/images/congreso-audience-full.webp', label: 'Congreso con +500 asistentes' },
  { src: '/images/congreso-dermatologia-stage.webp', label: 'Escenario Dermatología' },
  { src: '/images/stage-led-pediatric.webp', label: 'Pediatría - Triple LED' },
  { src: '/images/congreso-angeles-screen.webp', label: 'Congreso Ángeles' },
  { src: '/images/expo-hall-stands.webp', label: 'Expo Médica' },
  { src: '/images/congreso-audience-breakfast.webp', label: 'Congreso con Desayuno' },
  { src: '/images/stand-fotofinder.webp', label: 'Stand FotoFinder' },
  { src: '/images/conference-room-blue.webp', label: 'Conferencia Ejecutiva' },
];

export default function CongresosMedicosPage() {
  const { locale, t } = useLocale();

  return (
    <>
      <PageHero
        title={t.congresses.heroTitle}
        highlight={t.congresses.heroHighlight}
        subtitle={t.congresses.heroSubtitle}
        metrics={[
          locale === 'es' ? '500+ Congresos Médicos' : '500+ Medical Congresses',
          locale === 'es' ? '1M+ Asistentes' : '1M+ Attendees',
          locale === 'es' ? 'Cobertura Nacional' : 'National Coverage',
        ]}
      />

      {/* Stats */}
      <section className="relative py-16 bg-dark-surface">
        <div className="max-w-6xl mx-auto px-4 grid grid-cols-2 md:grid-cols-4 gap-8">
          <CounterAnimation end={500} suffix="+" label={locale === 'es' ? 'Congresos Médicos' : 'Medical Congresses'} />
          <CounterAnimation end={35} suffix="+" label={locale === 'es' ? 'Años de Experiencia' : 'Years of Experience'} />
          <CounterAnimation end={50} suffix="+" label={locale === 'es' ? 'Especialidades' : 'Specialties'} />
          <CounterAnimation end={100} suffix="%" label={locale === 'es' ? 'Satisfacción' : 'Satisfaction'} />
        </div>
      </section>

      {/* Image Carousel */}
      <section className="relative py-16 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4">
          <Swiper
            modules={[Autoplay, Navigation]}
            slidesPerView={1}
            spaceBetween={16}
            navigation
            autoplay={{ delay: 3500, disableOnInteraction: false }}
            loop
            speed={800}
            breakpoints={{
              640: { slidesPerView: 1.5 },
              1024: { slidesPerView: 2.5 },
              1280: { slidesPerView: 3 },
            }}
            className="!pb-12"
          >
            {congressImages.map((img, i) => (
              <SwiperSlide key={i}>
                <div className="relative h-[280px] md:h-[320px] rounded-2xl overflow-hidden group">
                  <Image
                    src={img.src}
                    alt={img.label}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                  <div className="absolute bottom-4 left-4">
                    <span className="px-3 py-1.5 rounded-full bg-gold/20 backdrop-blur-md text-gold text-sm font-medium border border-gold/20">
                      {img.label}
                    </span>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </section>

      {/* Services Grid */}
      <section className="relative py-24">
        <div className="absolute inset-0 noise-overlay" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle
            title={t.congresses.servicesTitle}
            highlight={t.congresses.servicesHighlight}
          />

          <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {t.congresses.items.map((item, i) => {
              const Icon = icons[i];
              return (
                <StaggerItem key={i}>
                  <motion.div
                    className="glass rounded-2xl p-6 h-full card-hover group relative overflow-hidden"
                    whileHover={{ scale: 1.03 }}
                  >
                    <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-gold to-teal opacity-0 group-hover:opacity-100 transition-opacity" />
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-gold/20 to-gold/5 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                      <Icon className="w-6 h-6 text-gold" />
                    </div>
                    <h3 className="text-lg font-bold text-white mb-2">{item.title}</h3>
                    <p className="text-white/50 text-sm leading-relaxed">{item.desc}</p>
                  </motion.div>
                </StaggerItem>
              );
            })}
          </StaggerContainer>
        </div>
      </section>

      {/* Process */}
      <section className="relative py-24 bg-dark-surface">
        <div className="absolute inset-0 noise-overlay" />
        <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle
            title={locale === 'es' ? 'Nuestro' : 'Our'}
            highlight={locale === 'es' ? 'Proceso' : 'Process'}
            subtitle={locale === 'es' ? 'De la planificación a la ejecución impecable' : 'From planning to flawless execution'}
          />

          <div className="space-y-8">
            {(locale === 'es' ? [
              { step: '01', title: 'Consulta Inicial', desc: 'Entendemos tus objetivos, audiencia y requerimientos técnicos del congreso' },
              { step: '02', title: 'Propuesta Integral', desc: 'Diseñamos una propuesta personalizada con producción, tecnología y logística' },
              { step: '03', title: 'Pre-producción', desc: 'Coordinamos ponentes, agendas, proveedores y realizamos pruebas técnicas' },
              { step: '04', title: 'Ejecución Impecable', desc: 'Producción en vivo con staff experto, monitoreo 24/7 y resolución inmediata' },
              { step: '05', title: 'Post-evento', desc: 'Entrega de grabaciones, analítica de asistencia y reporte de resultados' },
            ] : [
              { step: '01', title: 'Initial Consultation', desc: 'We understand your objectives, audience and congress technical requirements' },
              { step: '02', title: 'Comprehensive Proposal', desc: 'We design a personalized proposal with production, technology and logistics' },
              { step: '03', title: 'Pre-production', desc: 'We coordinate speakers, agendas, vendors and perform technical tests' },
              { step: '04', title: 'Flawless Execution', desc: 'Live production with expert staff, 24/7 monitoring and immediate resolution' },
              { step: '05', title: 'Post-event', desc: 'Delivery of recordings, attendance analytics and results report' },
            ]).map((item, i) => (
              <FadeInUp key={i} delay={i * 0.1}>
                <div className="glass rounded-2xl p-6 flex items-center gap-6 card-hover">
                  <div className="w-16 h-16 rounded-full bg-gradient-to-br from-gold/30 to-gold/10 flex items-center justify-center shrink-0">
                    <span className="text-gold font-bold text-xl">{item.step}</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white mb-1">{item.title}</h3>
                    <p className="text-white/50 text-sm">{item.desc}</p>
                  </div>
                </div>
              </FadeInUp>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative py-20">
        <div className="absolute inset-0 bg-gradient-to-br from-gold/5 via-dark to-teal/5" />
        <div className="relative max-w-4xl mx-auto px-4 text-center">
          <FadeInUp>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">{t.congresses.ctaTitle}</h2>
            <p className="text-white/50 mb-8">{t.congresses.ctaSubtitle}</p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(locale === 'es' ? 'Hola, quiero producir un congreso médico.' : 'Hello, I want to produce a medical congress.')}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 px-8 py-4 rounded-full bg-gradient-to-r from-gold-dark to-gold text-black font-bold text-lg hover:shadow-2xl hover:shadow-gold/25 transition-all duration-300 hover:scale-105"
              >
                {t.cta.whatsapp}
                <ArrowRight className="w-5 h-5" />
              </a>
              <a
                href="tel:+525510703056"
                className="flex items-center gap-3 px-8 py-4 rounded-full border border-white/20 text-white hover:border-gold/40 transition-all"
              >
                {t.cta.phone}
              </a>
            </div>
          </FadeInUp>
        </div>
      </section>
    </>
  );
}
