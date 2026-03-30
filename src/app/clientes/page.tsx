'use client';

import PageHero from '@/components/PageHero';
import { useLocale } from '@/lib/locale-context';
import SectionTitle from '@/components/SectionTitle';
import { FadeInUp, StaggerContainer, StaggerItem } from '@/components/AnimatedSection';
import { motion } from 'framer-motion';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import Image from 'next/image';
import { Quote, ArrowRight, Building2, Stethoscope, GraduationCap, Pill, Award } from 'lucide-react';
import 'swiper/css';

const WHATSAPP_NUMBER = '5215510703056';

interface ClientWithLogo {
  name: string;
  logo: string;
}

const clientCategories = [
  {
    titleEs: 'Sector Salud — Hospitales',
    titleEn: 'Healthcare — Hospitals',
    icon: Stethoscope,
    clients: [
      { name: 'ISSSTE', logo: '/logos/logo-01.webp' },
      { name: 'Hospital Angeles', logo: '/logos/logo-02.webp' },
      { name: 'IMSS', logo: '/logos/logo-03.webp' },
      { name: 'Hospital San Ángel Inn', logo: '/logos/logo-05.webp' },
      { name: 'Grupo Angeles', logo: '/logos/logo-06.webp' },
    ],
  },
  {
    titleEs: 'Sociedades y Colegios Médicos',
    titleEn: 'Medical Societies & Colleges',
    icon: Award,
    clients: [
      { name: 'Col. Mexicano de Anestesiología', logo: '/logos/logo-09.webp' },
      { name: 'Soc. Mex. de Radiología e Imagen', logo: '/logos/logo-10.webp' },
      { name: 'Col. Dermatología Pediátrica', logo: '/logos/logo-11.webp' },
      { name: 'Col. Cirugía Pediátrica', logo: '/logos/logo-12.webp' },
      { name: 'Soc. Médica H.A. Pedregal', logo: '/logos/logo-15.webp' },
      { name: 'SOMHAL', logo: '/logos/logo-16.webp' },
      { name: 'Soc. Médica H.A. Metropolitano', logo: '/logos/logo-17.webp' },
      { name: 'Soc. Médica H.A. Acoxpa', logo: '/logos/logo-18.webp' },
      { name: 'Asoc. Psicoanalítica Mexicana', logo: '/logos/logo-19.webp' },
      { name: 'Soc. Mex. de Trasplantes', logo: '/logos/logo-20.webp' },
      { name: 'AMEG', logo: '/logos/logo-21.webp' },
      { name: 'CEDIASA', logo: '/logos/logo-22.webp' },
      { name: 'Centro Diagnóstico Ángeles', logo: '/logos/logo-23.webp' },
      { name: 'FEMECOG', logo: '/logos/logo-25.webp' },
      { name: 'Aceleración Nuclear y RM', logo: '/logos/logo-24.webp' },
    ],
  },
  {
    titleEs: 'Farmacéuticas y Dispositivos Médicos',
    titleEn: 'Pharmaceuticals & Medical Devices',
    icon: Pill,
    clients: [
      { name: 'Pfizer', logo: '/logos/logo-29.webp' },
      { name: 'Bayer', logo: '/logos/logo-28.webp' },
      { name: 'MSD', logo: '/logos/logo-31.webp' },
      { name: 'Baxter', logo: '/logos/logo-30.webp' },
      { name: 'Novo Nordisk', logo: '/logos/logo-36.webp' },
      { name: 'AstraZeneca', logo: '/logos/logo-38.webp' },
      { name: 'Astellas', logo: '/logos/logo-37.webp' },
      { name: 'PiSA Farmacéutica', logo: '/logos/logo-33.webp' },
      { name: 'Laboratorios Carnot', logo: '/logos/logo-35.webp' },
      { name: 'Laboratorios Silanes', logo: '/logos/logo-39.webp' },
      { name: 'Laboratorios Columbia', logo: '/logos/logo-40.webp' },
      { name: 'IFA Celtics', logo: '/logos/logo-26.webp' },
      { name: 'BioMédicos', logo: '/logos/logo-27.webp' },
      { name: 'Medartis', logo: '/logos/logo-13.webp' },
      { name: 'IBRA', logo: '/logos/logo-14.webp' },
    ],
  },
  {
    titleEs: 'Corporativos y Marcas Globales',
    titleEn: 'Corporate & Global Brands',
    icon: Building2,
    clients: [
      { name: 'FEMSA', logo: '/logos/logo-08.webp' },
      { name: 'Garrigues', logo: '/logos/logo-07.webp' },
      { name: 'Groupe Clarins', logo: '/logos/logo-42.webp' },
      { name: 'Carlson Wagonlit Travel', logo: '/logos/logo-43.webp' },
      { name: 'Estée Lauder Companies', logo: '/logos/logo-46.webp' },
      { name: 'Industrial Polaris', logo: '/logos/logo-32.webp' },
      { name: 'Medical Corp. Group', logo: '/logos/logo-34.webp' },
      { name: 'Grupo Martí', logo: '/logos/logo-44.webp' },
      { name: 'Sport City', logo: '/logos/logo-45.webp' },
      { name: 'Trojan', logo: '/logos/logo-47.webp' },
    ],
  },
  {
    titleEs: 'Gobierno y Educación',
    titleEn: 'Government & Education',
    icon: GraduationCap,
    clients: [
      { name: 'Presidencia de la República', logo: '/logos/logo-04.webp' },
      { name: 'Universidad Panamericana', logo: '/logos/logo-41.webp' },
    ],
  },
];

// Marquee logos - top clients
const marqueeLogos = [
  '/logos/logo-29.webp', '/logos/logo-28.webp', '/logos/logo-31.webp', '/logos/logo-03.webp',
  '/logos/logo-01.webp', '/logos/logo-02.webp', '/logos/logo-36.webp', '/logos/logo-38.webp',
  '/logos/logo-30.webp', '/logos/logo-08.webp', '/logos/logo-46.webp', '/logos/logo-37.webp',
  '/logos/logo-33.webp', '/logos/logo-35.webp', '/logos/logo-04.webp', '/logos/logo-13.webp',
];

const testimonials = {
  es: [
    { quote: 'La precisión técnica fue impecable. ADESSO llevó nuestro congreso médico a un nivel completamente nuevo.', author: 'Director de Congreso', company: 'Congreso Médico Nacional' },
    { quote: 'La precisión técnica y la calidad visual superaron nuestras expectativas. Profesionalismo absoluto.', author: 'VP de Marketing', company: 'Empresa Multinacional' },
    { quote: 'La capacidad de producción nacional nos permitió replicar eventos en múltiples ciudades simultáneamente.', author: 'Director de Operaciones', company: 'Corporativo Nacional' },
  ],
  en: [
    { quote: 'The technical precision was impeccable. ADESSO took our medical congress to a completely new level.', author: 'Congress Director', company: 'National Medical Congress' },
    { quote: 'Technical precision and visual quality exceeded our expectations. Absolute professionalism.', author: 'VP of Marketing', company: 'Multinational Company' },
    { quote: 'National production capacity allowed us to replicate events in multiple cities simultaneously.', author: 'Operations Director', company: 'National Corporation' },
  ],
};

export default function ClientesPage() {
  const { locale } = useLocale();
  const testi = testimonials[locale];

  return (
    <>
      <PageHero
        title={locale === 'es' ? 'Clientes que' : 'Clients Who'}
        highlight={locale === 'es' ? 'Confían en Nosotros' : 'Trust Us'}
        subtitle={locale === 'es' ? 'Instituciones de salud, farmacéuticas globales, corporativos y gobierno' : 'Healthcare institutions, global pharmaceuticals, corporates and government'}
        metrics={[locale === 'es' ? '55+ Clientes' : '55+ Clients', locale === 'es' ? 'Farmacéuticas Globales' : 'Global Pharma', locale === 'es' ? 'Gobierno Federal' : 'Federal Government']}
      />

      {/* Logo Marquee - Infinite scroll */}
      <section className="relative py-8 overflow-hidden border-y border-white/[0.04]">
        <div className="absolute inset-0 bg-gradient-to-r from-[#0e0d08] via-[#09090b] to-[#0e0d08]" />
        <div className="relative">
          <Swiper
            modules={[Autoplay]}
            slidesPerView="auto"
            spaceBetween={60}
            autoplay={{ delay: 0, disableOnInteraction: false }}
            speed={4000}
            loop
            allowTouchMove={false}
          >
            {[...marqueeLogos, ...marqueeLogos].map((logo, i) => (
              <SwiperSlide key={i} className="!w-auto">
                <div className="relative w-[100px] h-[50px] opacity-30 hover:opacity-70 transition-opacity grayscale hover:grayscale-0">
                  <Image src={logo} alt="Client" fill className="object-contain" sizes="100px" />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </section>

      {/* Client Categories with Real Logos */}
      <section className="relative py-24">
        <div className="absolute inset-0 noise-overlay" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle
            title={locale === 'es' ? 'Nuestros' : 'Our'}
            highlight={locale === 'es' ? 'Clientes' : 'Clients'}
            subtitle={locale === 'es' ? '+55 organizaciones confían en ADESSO para sus eventos más importantes' : '+55 organizations trust ADESSO for their most important events'}
          />

          {clientCategories.map((category, i) => (
            <FadeInUp key={i} delay={i * 0.08} className="mb-20">
              {/* Category Header */}
              <div className="flex items-center gap-4 mb-10">
                <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-gold/15 to-gold/5 flex items-center justify-center">
                  <category.icon className="w-5 h-5 text-gold" />
                </div>
                <h3 className="text-xl font-bold text-white">{locale === 'es' ? category.titleEs : category.titleEn}</h3>
                <div className="flex-1 h-px bg-gradient-to-r from-gold/15 to-transparent ml-2" />
              </div>

              {/* Logo Grid */}
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 md:gap-5">
                {category.clients.map((client, j) => (
                  <motion.div
                    key={j}
                    initial={{ opacity: 0, y: 15 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: j * 0.04 }}
                  >
                    <motion.div
                      className="relative rounded-2xl bg-white/[0.04] border border-white/[0.06] hover:border-gold/25 hover:bg-white/[0.07] p-5 h-[130px] flex flex-col items-center justify-center text-center transition-all duration-500 group cursor-default"
                      whileHover={{ scale: 1.05, y: -4 }}
                    >
                      {/* Logo */}
                      <div className="relative w-full h-[60px] mb-3 grayscale opacity-60 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-500">
                        <Image
                          src={client.logo}
                          alt={client.name}
                          fill
                          className="object-contain"
                          sizes="(max-width: 640px) 40vw, 150px"
                        />
                      </div>
                      {/* Name */}
                      <p className="text-[10px] text-white/30 group-hover:text-white/60 font-medium uppercase tracking-wider transition-colors duration-500 line-clamp-1">
                        {client.name}
                      </p>
                    </motion.div>
                  </motion.div>
                ))}
              </div>
            </FadeInUp>
          ))}
        </div>
      </section>

      {/* Stats */}
      <section className="relative py-16 border-y border-white/[0.04]">
        <div className="absolute inset-0 bg-gradient-to-r from-[#0e0d08] via-[#09090b] to-[#0e0d08]" />
        <div className="relative max-w-5xl mx-auto px-4 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {[
            { value: '55+', label: locale === 'es' ? 'Clientes Activos' : 'Active Clients' },
            { value: '16+', label: locale === 'es' ? 'Farmacéuticas' : 'Pharmaceuticals' },
            { value: '16+', label: locale === 'es' ? 'Sociedades Médicas' : 'Medical Societies' },
            { value: '11+', label: locale === 'es' ? 'Hospitales' : 'Hospitals' },
          ].map((stat, i) => (
            <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}>
              <div className="text-3xl md:text-4xl font-bold text-gradient-gold">{stat.value}</div>
              <div className="text-white/40 text-xs mt-1 uppercase tracking-[0.15em] font-light">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Testimonials */}
      <section className="relative py-24 section-gold">
        <div className="absolute inset-0 noise-overlay" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle title={locale === 'es' ? 'Lo Que Dicen' : 'What Our'} highlight={locale === 'es' ? 'Nuestros Clientes' : 'Clients Say'} />
          <StaggerContainer className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testi.map((item, i) => (
              <StaggerItem key={i}>
                <motion.div className="glass rounded-2xl p-8 h-full card-hover relative border border-white/[0.04] hover:border-gold/15 transition-all" whileHover={{ scale: 1.02 }}>
                  <Quote className="w-10 h-10 text-gold/10 mb-4" />
                  <p className="text-white/55 italic leading-relaxed mb-6 font-light">&ldquo;{item.quote}&rdquo;</p>
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-gold/20 to-gold/5 flex items-center justify-center">
                      <span className="text-gold font-semibold text-lg">{item.author[0]}</span>
                    </div>
                    <div>
                      <div className="text-white font-medium text-sm">{item.author}</div>
                      <div className="text-gold/40 text-xs">{item.company}</div>
                    </div>
                  </div>
                </motion.div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* CTA */}
      <section className="relative py-20">
        <div className="absolute inset-0 bg-gradient-to-b from-[#09090b] via-[#100e08] to-[#09090b]" />
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/15 to-transparent" />
        <div className="relative max-w-4xl mx-auto px-4 text-center">
          <FadeInUp>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              {locale === 'es' ? 'Únete a +55 Organizaciones que ' : 'Join +55 Organizations that '}
              <span className="text-gradient-gold">{locale === 'es' ? 'Confían en ADESSO' : 'Trust ADESSO'}</span>
            </h2>
            <a href={`https://wa.me/${WHATSAPP_NUMBER}`} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-3 px-8 py-4 mt-6 rounded-full bg-gradient-to-r from-gold-dark to-gold text-black font-bold text-lg hover:shadow-2xl hover:shadow-gold/20 transition-all duration-300 hover:scale-105">
              {locale === 'es' ? 'Cotizar Ahora' : 'Get a Quote'} <ArrowRight className="w-5 h-5" />
            </a>
          </FadeInUp>
        </div>
      </section>
    </>
  );
}
