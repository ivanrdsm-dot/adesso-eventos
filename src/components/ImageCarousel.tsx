'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, EffectFade, Navigation, Pagination, EffectCoverflow } from 'swiper/modules';
import Image from 'next/image';
import { motion } from 'framer-motion';
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/effect-coverflow';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

interface CarouselImage {
  src: string;
  alt: string;
  title?: string;
  subtitle?: string;
  tags?: string[];
}

interface Props {
  images: CarouselImage[];
  variant?: 'fade' | 'coverflow' | 'slide';
  height?: string;
  showOverlay?: boolean;
  autoplay?: boolean;
}

export default function ImageCarousel({
  images,
  variant = 'slide',
  height = 'h-[500px]',
  showOverlay = true,
  autoplay = true,
}: Props) {
  const swiperModules = [Autoplay, Navigation, Pagination];
  if (variant === 'fade') swiperModules.push(EffectFade);
  if (variant === 'coverflow') swiperModules.push(EffectCoverflow);

  return (
    <div className={`relative ${height} w-full rounded-2xl overflow-hidden group`}>
      <Swiper
        modules={swiperModules}
        effect={variant === 'slide' ? undefined : variant}
        spaceBetween={variant === 'coverflow' ? 30 : 0}
        slidesPerView={variant === 'coverflow' ? 'auto' : 1}
        centeredSlides={variant === 'coverflow'}
        coverflowEffect={variant === 'coverflow' ? {
          rotate: 0,
          stretch: 0,
          depth: 150,
          modifier: 2.5,
          slideShadows: false,
        } : undefined}
        navigation={{
          nextEl: '.carousel-next',
          prevEl: '.carousel-prev',
        }}
        pagination={{
          clickable: true,
          bulletActiveClass: 'swiper-pagination-bullet-active !bg-gold !w-8',
          bulletClass: 'swiper-pagination-bullet !bg-white/30 !w-3 !h-1.5 !rounded-full mx-1 transition-all duration-300',
        }}
        autoplay={autoplay ? { delay: 4000, disableOnInteraction: false, pauseOnMouseEnter: true } : false}
        loop
        speed={800}
        className="h-full w-full"
      >
        {images.map((img, i) => (
          <SwiperSlide key={i} className={variant === 'coverflow' ? '!w-[80%] md:!w-[60%]' : ''}>
            <div className="relative h-full w-full">
              <Image
                src={img.src}
                alt={img.alt}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
                sizes="(max-width: 768px) 100vw, 80vw"
              />
              {showOverlay && (
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent">
                  <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8">
                    {img.title && (
                      <motion.h3
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        className="text-xl md:text-2xl font-bold text-white mb-2"
                      >
                        {img.title}
                      </motion.h3>
                    )}
                    {img.subtitle && (
                      <p className="text-white/70 text-sm md:text-base">{img.subtitle}</p>
                    )}
                    {img.tags && (
                      <div className="flex flex-wrap gap-2 mt-3">
                        {img.tags.map((tag, j) => (
                          <span key={j} className="px-3 py-1 rounded-full bg-gold/20 text-gold text-xs font-medium backdrop-blur-sm">
                            {tag}
                          </span>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              )}
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Custom Navigation */}
      <button className="carousel-prev absolute left-3 top-1/2 -translate-y-1/2 z-10 w-10 h-10 rounded-full glass flex items-center justify-center text-white/60 hover:text-gold hover:border-gold/40 transition-all opacity-0 group-hover:opacity-100">
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" /></svg>
      </button>
      <button className="carousel-next absolute right-3 top-1/2 -translate-y-1/2 z-10 w-10 h-10 rounded-full glass flex items-center justify-center text-white/60 hover:text-gold hover:border-gold/40 transition-all opacity-0 group-hover:opacity-100">
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
      </button>
    </div>
  );
}
