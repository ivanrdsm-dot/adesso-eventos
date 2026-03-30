'use client';

import PageHero from '@/components/PageHero';
import { useLocale } from '@/lib/locale-context';
import { StaggerContainer, StaggerItem, FadeInUp } from '@/components/AnimatedSection';
import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation } from 'swiper/modules';
import { X, ZoomIn, ArrowRight } from 'lucide-react';
import 'swiper/css';
import 'swiper/css/navigation';

const WHATSAPP_NUMBER = '5215510703056';

const galleryItems = [
  {
    src: '/images/gala-led-screens.jpg',
    titleEs: 'Gala con Pantallas LED',
    titleEn: 'LED Screen Gala',
    descEs: 'Producción integral con pantallas LED gigantes P2.5 y escenografía personalizada',
    descEn: 'Full production with giant P2.5 LED screens and custom scenography',
    tags: ['LED', 'Escenografía', 'Gala'],
    category: 'corporativos',
  },
  {
    src: '/images/congreso-audience-full.jpg',
    titleEs: 'Congreso Médico Nacional',
    titleEn: 'National Medical Congress',
    descEs: 'Congreso con +500 asistentes, audio profesional y producción en vivo',
    descEn: 'Congress with +500 attendees, professional audio and live production',
    tags: ['Congreso', 'Audio', 'Médico'],
    category: 'congresos',
  },
  {
    src: '/images/banquet-gala-gold.jpg',
    titleEs: 'Banquete de Gala Premium',
    titleEn: 'Premium Gala Banquet',
    descEs: 'Montaje elegante con sillas Tiffany doradas, iluminación premium y centros de mesa',
    descEn: 'Elegant setup with gold Tiffany chairs, premium lighting and centerpieces',
    tags: ['Banquete', 'Gala', 'Premium'],
    category: 'corporativos',
  },
  {
    src: '/images/congreso-dermatologia-stage.jpg',
    titleEs: 'Congreso de Dermatología',
    titleEn: 'Dermatology Congress',
    descEs: 'Escenario con pantalla LED y producción audiovisual para el Colegio Mexicano de Dermatología',
    descEn: 'Stage with LED screen and audiovisual production for the Mexican College of Dermatology',
    tags: ['Dermatología', 'LED', 'Médico'],
    category: 'congresos',
  },
  {
    src: '/images/expo-hall-stands.jpg',
    titleEs: 'Expo Médica con Stands',
    titleEn: 'Medical Expo with Booths',
    descEs: 'Área de exposición con stands farmacéuticos y médicos de alto nivel',
    descEn: 'Exhibition area with high-level pharmaceutical and medical booths',
    tags: ['Expo', 'Stands', 'Farmacéutico'],
    category: 'congresos',
  },
  {
    src: '/images/gala-show-lights.jpg',
    titleEs: 'Show con Iluminación Profesional',
    titleEn: 'Professional Lighting Show',
    descEs: 'Producción de show con iluminación robótica, pantallas y efectos especiales',
    descEn: 'Show production with robotic lighting, screens and special effects',
    tags: ['Show', 'Iluminación', 'Efectos'],
    category: 'corporativos',
  },
  {
    src: '/images/stage-led-pediatric.jpg',
    titleEs: 'Congreso Pediatría - Escenario LED',
    titleEn: 'Pediatric Congress - LED Stage',
    descEs: 'Escenario con triple pantalla LED, escenografía personalizada y pista de baile iluminada',
    descEn: 'Triple LED screen stage, custom scenography and illuminated dance floor',
    tags: ['Pediatría', 'Triple LED', 'Escenario'],
    category: 'congresos',
  },
  {
    src: '/images/instalacion-led-art.jpg',
    titleEs: 'Instalación LED Artística',
    titleEn: 'Artistic LED Installation',
    descEs: 'Instalación LED interactiva de diseño para evento corporativo exclusivo',
    descEn: 'Interactive design LED installation for exclusive corporate event',
    tags: ['LED', 'Arte', 'Interactivo'],
    category: 'tecnologia',
  },
  {
    src: '/images/venue-night-pool.jpg',
    titleEs: 'Venue Nocturno Premium',
    titleEn: 'Premium Night Venue',
    descEs: 'Producción en venue de lujo con iluminación arquitectónica y ambientación especial',
    descEn: 'Production at luxury venue with architectural lighting and special ambiance',
    tags: ['Venue', 'Nocturno', 'Lujo'],
    category: 'corporativos',
  },
  {
    src: '/images/catering-canapes.jpg',
    titleEs: 'Catering Gourmet',
    titleEn: 'Gourmet Catering',
    descEs: 'Canapés gourmet premium para evento corporativo de alto nivel',
    descEn: 'Premium gourmet canapés for high-level corporate event',
    tags: ['Catering', 'Gourmet', 'Premium'],
    category: 'corporativos',
  },
  {
    src: '/images/catering-charcuterie.jpg',
    titleEs: 'Tablas de Charcutería Premium',
    titleEn: 'Premium Charcuterie Boards',
    descEs: 'Tablas gourmet con vinos premium para eventos exclusivos',
    descEn: 'Gourmet boards with premium wines for exclusive events',
    tags: ['Charcutería', 'Vinos', 'Exclusivo'],
    category: 'corporativos',
  },
  {
    src: '/images/congreso-audience-breakfast.jpg',
    titleEs: 'Congreso con Desayuno Ejecutivo',
    titleEn: 'Congress with Executive Breakfast',
    descEs: 'Congreso médico con servicio de desayuno para +300 asistentes',
    descEn: 'Medical congress with breakfast service for +300 attendees',
    tags: ['Congreso', 'Desayuno', 'Médico'],
    category: 'congresos',
  },
  {
    src: '/images/conference-room-blue.jpg',
    titleEs: 'Conferencia Ejecutiva',
    titleEn: 'Executive Conference',
    descEs: 'Sala de conferencias con producción audiovisual y audio profesional',
    descEn: 'Conference room with audiovisual production and professional audio',
    tags: ['Conferencia', 'Audio', 'AV'],
    category: 'corporativos',
  },
  {
    src: '/images/stand-fotofinder.jpg',
    titleEs: 'Stand FotoFinder - Expo Médica',
    titleEn: 'FotoFinder Stand - Medical Expo',
    descEs: 'Stand personalizado para marca internacional en congreso dermatológico',
    descEn: 'Custom stand for international brand at dermatology congress',
    tags: ['Stand', 'Expo', 'Internacional'],
    category: 'congresos',
  },
  {
    src: '/images/evento-outdoor-people.jpg',
    titleEs: 'Evento al Aire Libre',
    titleEn: 'Outdoor Event',
    descEs: 'Producción de evento social al aire libre con iluminación y sonido',
    descEn: 'Outdoor social event production with lighting and sound',
    tags: ['Outdoor', 'Social', 'Iluminación'],
    category: 'corporativos',
  },
  {
    src: '/images/congreso-angeles-screen.jpg',
    titleEs: 'Congreso Ángeles - Pantalla Gigante',
    titleEn: 'Angeles Congress - Giant Screen',
    descEs: 'Pantalla LED gigante con truss profesional para congreso hospitalario',
    descEn: 'Giant LED screen with professional truss for hospital congress',
    tags: ['Ángeles', 'LED Gigante', 'Truss'],
    category: 'congresos',
  },
];

const categories = {
  es: [
    { key: 'todos', label: 'Todos' },
    { key: 'congresos', label: 'Congresos Médicos' },
    { key: 'corporativos', label: 'Corporativos' },
    { key: 'tecnologia', label: 'Tecnología' },
  ],
  en: [
    { key: 'todos', label: 'All' },
    { key: 'congresos', label: 'Medical Congresses' },
    { key: 'corporativos', label: 'Corporate' },
    { key: 'tecnologia', label: 'Technology' },
  ],
};

export default function GaleriaPage() {
  const { locale } = useLocale();
  const [activeFilter, setActiveFilter] = useState('todos');
  const [lightboxImage, setLightboxImage] = useState<number | null>(null);
  const cats = categories[locale];

  const filtered = activeFilter === 'todos'
    ? galleryItems
    : galleryItems.filter((item) => item.category === activeFilter);

  return (
    <>
      <PageHero
        title={locale === 'es' ? 'Nuestro' : 'Our'}
        highlight={locale === 'es' ? 'Portafolio' : 'Portfolio'}
        subtitle={locale === 'es' ? 'Más de 35 años creando eventos memorables' : 'Over 35 years creating memorable events'}
      />

      {/* Featured Carousel */}
      <section className="relative py-12 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4">
          <Swiper
            modules={[Autoplay, Navigation]}
            slidesPerView={1}
            spaceBetween={20}
            navigation
            autoplay={{ delay: 4000, disableOnInteraction: false }}
            loop
            speed={800}
            breakpoints={{
              640: { slidesPerView: 1.5 },
              1024: { slidesPerView: 2.2 },
            }}
            className="!pb-12 gallery-swiper"
          >
            {galleryItems.slice(0, 8).map((item, i) => (
              <SwiperSlide key={i}>
                <div className="relative h-[350px] md:h-[400px] rounded-2xl overflow-hidden group cursor-pointer"
                  onClick={() => setLightboxImage(i)}
                >
                  <Image
                    src={item.src}
                    alt={locale === 'es' ? item.titleEs : item.titleEn}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-60 group-hover:opacity-100 transition-opacity duration-500" />
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="w-14 h-14 rounded-full bg-gold/20 backdrop-blur-md flex items-center justify-center border border-gold/30">
                      <ZoomIn className="w-6 h-6 text-gold" />
                    </div>
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <h3 className="text-lg font-bold text-white mb-1">{locale === 'es' ? item.titleEs : item.titleEn}</h3>
                    <div className="flex flex-wrap gap-2">
                      {item.tags.map((tag, j) => (
                        <span key={j} className="px-2 py-0.5 rounded-full bg-gold/15 text-gold text-xs backdrop-blur-sm">{tag}</span>
                      ))}
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </section>

      {/* Filterable Grid */}
      <section className="relative py-16">
        <div className="absolute inset-0 noise-overlay" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Filters */}
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {cats.map((cat) => (
              <motion.button
                key={cat.key}
                onClick={() => setActiveFilter(cat.key)}
                className={`px-6 py-2.5 rounded-full text-sm font-medium transition-all duration-300 ${
                  activeFilter === cat.key
                    ? 'bg-gradient-to-r from-gold-dark to-gold text-black shadow-lg shadow-gold/20'
                    : 'glass text-white/60 hover:text-white hover:border-gold/40'
                }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
              >
                {cat.label}
              </motion.button>
            ))}
          </div>

          {/* Grid */}
          <motion.div layout className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
            <AnimatePresence mode="popLayout">
              {filtered.map((item, i) => (
                <motion.div
                  key={item.src}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.4, delay: i * 0.03 }}
                  className="relative h-[260px] rounded-xl overflow-hidden group cursor-pointer"
                  onClick={() => setLightboxImage(galleryItems.indexOf(item))}
                >
                  <Image
                    src={item.src}
                    alt={locale === 'es' ? item.titleEs : item.titleEn}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-400" />
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="w-10 h-10 rounded-full bg-gold/20 backdrop-blur-md flex items-center justify-center">
                      <ZoomIn className="w-5 h-5 text-gold" />
                    </div>
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-400">
                    <p className="text-white text-sm font-semibold">{locale === 'es' ? item.titleEs : item.titleEn}</p>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative py-20 bg-dark-surface">
        <div className="relative max-w-4xl mx-auto px-4 text-center">
          <FadeInUp>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              {locale === 'es' ? '¿Quieres un Evento ' : 'Want an Event '}
              <span className="text-gradient-gold">{locale === 'es' ? 'Así de Impactante?' : 'This Impressive?'}</span>
            </h2>
            <a
              href={`https://wa.me/${WHATSAPP_NUMBER}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 px-8 py-4 mt-6 rounded-full bg-gradient-to-r from-gold-dark to-gold text-black font-bold text-lg hover:shadow-2xl hover:shadow-gold/25 transition-all duration-300 hover:scale-105"
            >
              {locale === 'es' ? 'Cotizar Ahora' : 'Get a Quote'}
              <ArrowRight className="w-5 h-5" />
            </a>
          </FadeInUp>
        </div>
      </section>

      {/* Lightbox */}
      <AnimatePresence>
        {lightboxImage !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-black/95 flex items-center justify-center p-4"
            onClick={() => setLightboxImage(null)}
          >
            <button
              onClick={() => setLightboxImage(null)}
              className="absolute top-6 right-6 w-12 h-12 rounded-full glass flex items-center justify-center text-white hover:text-gold z-10"
            >
              <X className="w-6 h-6" />
            </button>
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              className="relative max-w-5xl w-full h-[80vh] rounded-2xl overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              <Image
                src={galleryItems[lightboxImage].src}
                alt={locale === 'es' ? galleryItems[lightboxImage].titleEs : galleryItems[lightboxImage].titleEn}
                fill
                className="object-contain"
                sizes="100vw"
              />
              <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/80 to-transparent">
                <h3 className="text-xl font-bold text-white mb-1">
                  {locale === 'es' ? galleryItems[lightboxImage].titleEs : galleryItems[lightboxImage].titleEn}
                </h3>
                <p className="text-white/60 text-sm">
                  {locale === 'es' ? galleryItems[lightboxImage].descEs : galleryItems[lightboxImage].descEn}
                </p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
