'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, EffectCoverflow } from 'swiper/modules';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { FadeInUp } from '../AnimatedSection';
import { useLocale } from '@/lib/locale-context';
import 'swiper/css';
import 'swiper/css/effect-coverflow';

const showcaseImages = [
  { src: '/images/gala-led-screens.jpg', label: 'Galas con Pantallas LED' },
  { src: '/images/congreso-audience-full.jpg', label: 'Congresos Médicos' },
  { src: '/images/banquet-gala-gold.jpg', label: 'Banquetes de Gala' },
  { src: '/images/expo-hall-stands.jpg', label: 'Exposiciones Médicas' },
  { src: '/images/gala-show-lights.jpg', label: 'Shows con Iluminación' },
  { src: '/images/venue-night-pool.jpg', label: 'Venues Premium' },
  { src: '/images/instalacion-led-art.jpg', label: 'Instalaciones LED' },
  { src: '/images/catering-canapes.jpg', label: 'Catering Premium' },
  { src: '/images/congreso-dermatologia-stage.jpg', label: 'Escenarios Médicos' },
  { src: '/images/evento-outdoor-people.jpg', label: 'Eventos al Aire Libre' },
];

const showcaseImagesEN = [
  { src: '/images/gala-led-screens.jpg', label: 'LED Screen Galas' },
  { src: '/images/congreso-audience-full.jpg', label: 'Medical Congresses' },
  { src: '/images/banquet-gala-gold.jpg', label: 'Gala Banquets' },
  { src: '/images/expo-hall-stands.jpg', label: 'Medical Exhibitions' },
  { src: '/images/gala-show-lights.jpg', label: 'Light Shows' },
  { src: '/images/venue-night-pool.jpg', label: 'Premium Venues' },
  { src: '/images/instalacion-led-art.jpg', label: 'LED Installations' },
  { src: '/images/catering-canapes.jpg', label: 'Premium Catering' },
  { src: '/images/congreso-dermatologia-stage.jpg', label: 'Medical Stages' },
  { src: '/images/evento-outdoor-people.jpg', label: 'Outdoor Events' },
];

export default function ImageShowcase() {
  const { locale } = useLocale();
  const images = locale === 'es' ? showcaseImages : showcaseImagesEN;

  return (
    <section className="relative py-20 overflow-hidden">
      <div className="absolute inset-0 noise-overlay" />

      <FadeInUp className="text-center mb-12 px-4">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold">
          {locale === 'es' ? 'Momentos que ' : 'Moments that '}
          <span className="text-gradient-gold">{locale === 'es' ? 'Transforman' : 'Transform'}</span>
        </h2>
        <p className="text-white/50 mt-4 text-lg">
          {locale === 'es' ? 'Una muestra de nuestras producciones más memorables' : 'A showcase of our most memorable productions'}
        </p>
        <div className="line-gold w-24 mx-auto mt-6" />
      </FadeInUp>

      <div className="relative">
        <Swiper
          modules={[Autoplay, EffectCoverflow]}
          effect="coverflow"
          grabCursor
          centeredSlides
          slidesPerView="auto"
          coverflowEffect={{
            rotate: 0,
            stretch: 0,
            depth: 200,
            modifier: 2,
            slideShadows: false,
          }}
          autoplay={{ delay: 3000, disableOnInteraction: false, pauseOnMouseEnter: true }}
          loop
          speed={1000}
          className="!py-8"
        >
          {images.map((img, i) => (
            <SwiperSlide key={i} className="!w-[85%] sm:!w-[70%] md:!w-[55%] lg:!w-[45%]">
              <motion.div
                className="relative h-[300px] sm:h-[400px] md:h-[450px] rounded-2xl overflow-hidden group cursor-grab"
                whileHover={{ y: -8 }}
                transition={{ duration: 0.4 }}
              >
                <Image
                  src={img.src}
                  alt={img.label}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                  sizes="(max-width: 768px) 85vw, 45vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-60 group-hover:opacity-90 transition-opacity duration-500" />
                <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-2 group-hover:translate-y-0 transition-transform duration-500">
                  <span className="inline-block px-4 py-1.5 rounded-full bg-gold/20 backdrop-blur-md text-gold text-sm font-medium border border-gold/20">
                    {img.label}
                  </span>
                </div>
                {/* Gold corner accents */}
                <div className="absolute top-4 left-4 w-8 h-8 border-t-2 border-l-2 border-gold/0 group-hover:border-gold/40 transition-all duration-500 rounded-tl-lg" />
                <div className="absolute bottom-4 right-4 w-8 h-8 border-b-2 border-r-2 border-gold/0 group-hover:border-gold/40 transition-all duration-500 rounded-br-lg" />
              </motion.div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
