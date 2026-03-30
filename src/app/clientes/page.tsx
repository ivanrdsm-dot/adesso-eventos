'use client';

import PageHero from '@/components/PageHero';
import { useLocale } from '@/lib/locale-context';
import SectionTitle from '@/components/SectionTitle';
import { StaggerContainer, StaggerItem, FadeInUp } from '@/components/AnimatedSection';
import { motion } from 'framer-motion';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import { Quote, ArrowRight, Building2, Stethoscope, GraduationCap, Pill, Award } from 'lucide-react';
import 'swiper/css';

const WHATSAPP_NUMBER = '5215510703056';

interface ClientLogo {
  name: string;
  short: string;
  tier?: 'platinum' | 'gold' | 'standard';
}

const clientCategories = {
  es: [
    {
      title: 'Sector Salud — Hospitales',
      icon: Stethoscope,
      clients: [
        { name: 'Hospital Angeles Pedregal', short: 'HA', tier: 'platinum' as const },
        { name: 'Hospital Angeles Lindavista', short: 'HA', tier: 'gold' as const },
        { name: 'Hospital Angeles Metropolitano', short: 'HA', tier: 'gold' as const },
        { name: 'Hospital Angeles Acoxpa', short: 'HA', tier: 'gold' as const },
        { name: 'Hospital Angeles México', short: 'HA', tier: 'gold' as const },
        { name: 'Hospital Angeles Mocel', short: 'HA', tier: 'standard' as const },
        { name: 'Hospital Angeles Universidad', short: 'HA', tier: 'standard' as const },
        { name: 'Hospital San Ángel Inn', short: 'SAI', tier: 'gold' as const },
        { name: 'Grupo Angeles Servicios de Salud', short: 'GA', tier: 'platinum' as const },
        { name: 'ISSSTE', short: 'ISSSTE', tier: 'platinum' as const },
        { name: 'IMSS', short: 'IMSS', tier: 'platinum' as const },
      ],
    },
    {
      title: 'Sociedades y Colegios Médicos',
      icon: Award,
      clients: [
        { name: 'Col. Mexicano de Anestesiología', short: 'CMA', tier: 'gold' as const },
        { name: 'Soc. Mexicana de Anestesiología', short: 'SMA', tier: 'standard' as const },
        { name: 'Soc. Mexicana de Radiología', short: 'SMR', tier: 'gold' as const },
        { name: 'Col. Mex. Dermatología Pediátrica', short: 'CMDP', tier: 'gold' as const },
        { name: 'Soc. Mex. Cirugía Pediátrica', short: 'SMCP', tier: 'standard' as const },
        { name: 'Soc. Médica H.A. Pedregal', short: 'SMP', tier: 'standard' as const },
        { name: 'SOMHAL', short: 'SOMHAL', tier: 'standard' as const },
        { name: 'Soc. Médica H.A. Metropolitano', short: 'SMM', tier: 'standard' as const },
        { name: 'Soc. Médica H.A. Acoxpa', short: 'SMHA', tier: 'standard' as const },
        { name: 'Asoc. Psicoanalítica Mexicana', short: 'APM', tier: 'standard' as const },
        { name: 'Soc. Mex. de Trasplantes', short: 'SMT', tier: 'gold' as const },
        { name: 'AMEG', short: 'AMEG', tier: 'gold' as const },
        { name: 'CEDIASA', short: 'CEDIASA', tier: 'standard' as const },
        { name: 'Centro Diagnóstico Ángeles', short: 'CDA', tier: 'standard' as const },
        { name: 'FEMECOG', short: 'FEMECOG', tier: 'gold' as const },
        { name: 'Asoc. Nal. Hospitales Privados', short: 'ANHP', tier: 'platinum' as const },
      ],
    },
    {
      title: 'Farmacéuticas y Dispositivos Médicos',
      icon: Pill,
      clients: [
        { name: 'Pfizer', short: 'Pfizer', tier: 'platinum' as const },
        { name: 'Bayer', short: 'BAYER', tier: 'platinum' as const },
        { name: 'MSD', short: 'MSD', tier: 'platinum' as const },
        { name: 'Baxter', short: 'Baxter', tier: 'platinum' as const },
        { name: 'Novo Nordisk', short: 'NN', tier: 'platinum' as const },
        { name: 'AstraZeneca', short: 'AZ', tier: 'platinum' as const },
        { name: 'Astellas', short: 'Astellas', tier: 'gold' as const },
        { name: 'PiSA Farmacéutica', short: 'PiSA', tier: 'gold' as const },
        { name: 'Laboratorios Carnot', short: 'CARNOT', tier: 'gold' as const },
        { name: 'Laboratorios Silanes', short: 'Silanes', tier: 'gold' as const },
        { name: 'Laboratorios Columbia', short: 'Columbia', tier: 'standard' as const },
        { name: 'IFA Celtics', short: 'IFA', tier: 'standard' as const },
        { name: 'BioMédicos', short: 'BioMed', tier: 'standard' as const },
        { name: 'Medartis', short: 'Medartis', tier: 'gold' as const },
        { name: 'IBRA', short: 'IBRA', tier: 'standard' as const },
      ],
    },
    {
      title: 'Corporativos y Marcas Globales',
      icon: Building2,
      clients: [
        { name: 'FEMSA', short: 'FEMSA', tier: 'platinum' as const },
        { name: 'Garrigues', short: 'G', tier: 'gold' as const },
        { name: 'Groupe Clarins', short: 'CLARINS', tier: 'gold' as const },
        { name: 'Carlson Wagonlit Travel', short: 'CWT', tier: 'standard' as const },
        { name: 'Estée Lauder Companies', short: 'EL', tier: 'platinum' as const },
        { name: 'Industrial Polaris', short: 'POLARIS', tier: 'standard' as const },
        { name: 'Medical Corp. Group', short: 'MCG', tier: 'standard' as const },
        { name: 'Grupo Martí', short: 'Martí', tier: 'gold' as const },
        { name: 'Sport City', short: 'SC', tier: 'gold' as const },
      ],
    },
    {
      title: 'Gobierno y Educación',
      icon: GraduationCap,
      clients: [
        { name: 'Presidencia de la República', short: 'GOB', tier: 'platinum' as const },
        { name: 'Universidad Panamericana', short: 'UP', tier: 'gold' as const },
      ],
    },
  ],
  en: [
    {
      title: 'Healthcare — Hospitals',
      icon: Stethoscope,
      clients: [
        { name: 'Hospital Angeles Pedregal', short: 'HA', tier: 'platinum' as const },
        { name: 'Hospital Angeles Lindavista', short: 'HA', tier: 'gold' as const },
        { name: 'Hospital Angeles Metropolitano', short: 'HA', tier: 'gold' as const },
        { name: 'Hospital Angeles Acoxpa', short: 'HA', tier: 'gold' as const },
        { name: 'Hospital Angeles México', short: 'HA', tier: 'gold' as const },
        { name: 'Hospital Angeles Mocel', short: 'HA', tier: 'standard' as const },
        { name: 'Hospital Angeles Universidad', short: 'HA', tier: 'standard' as const },
        { name: 'Hospital San Ángel Inn', short: 'SAI', tier: 'gold' as const },
        { name: 'Grupo Angeles Health Services', short: 'GA', tier: 'platinum' as const },
        { name: 'ISSSTE', short: 'ISSSTE', tier: 'platinum' as const },
        { name: 'IMSS', short: 'IMSS', tier: 'platinum' as const },
      ],
    },
    {
      title: 'Medical Societies & Colleges',
      icon: Award,
      clients: [
        { name: 'Mexican College of Anesthesiology', short: 'CMA', tier: 'gold' as const },
        { name: 'Mexican Society of Anesthesiology', short: 'SMA', tier: 'standard' as const },
        { name: 'Mexican Society of Radiology', short: 'SMR', tier: 'gold' as const },
        { name: 'Col. of Pediatric Dermatology', short: 'CMDP', tier: 'gold' as const },
        { name: 'Soc. of Pediatric Surgery', short: 'SMCP', tier: 'standard' as const },
        { name: 'H.A. Pedregal Medical Society', short: 'SMP', tier: 'standard' as const },
        { name: 'SOMHAL', short: 'SOMHAL', tier: 'standard' as const },
        { name: 'H.A. Metropolitano Med. Society', short: 'SMM', tier: 'standard' as const },
        { name: 'H.A. Acoxpa Medical Society', short: 'SMHA', tier: 'standard' as const },
        { name: 'Mexican Psychoanalytic Assoc.', short: 'APM', tier: 'standard' as const },
        { name: 'Mexican Society of Transplants', short: 'SMT', tier: 'gold' as const },
        { name: 'AMEG', short: 'AMEG', tier: 'gold' as const },
        { name: 'CEDIASA', short: 'CEDIASA', tier: 'standard' as const },
        { name: 'Angeles Diagnostic Center', short: 'CDA', tier: 'standard' as const },
        { name: 'FEMECOG', short: 'FEMECOG', tier: 'gold' as const },
        { name: 'Natl. Assoc. Private Hospitals', short: 'ANHP', tier: 'platinum' as const },
      ],
    },
    {
      title: 'Pharmaceuticals & Medical Devices',
      icon: Pill,
      clients: [
        { name: 'Pfizer', short: 'Pfizer', tier: 'platinum' as const },
        { name: 'Bayer', short: 'BAYER', tier: 'platinum' as const },
        { name: 'MSD', short: 'MSD', tier: 'platinum' as const },
        { name: 'Baxter', short: 'Baxter', tier: 'platinum' as const },
        { name: 'Novo Nordisk', short: 'NN', tier: 'platinum' as const },
        { name: 'AstraZeneca', short: 'AZ', tier: 'platinum' as const },
        { name: 'Astellas', short: 'Astellas', tier: 'gold' as const },
        { name: 'PiSA Pharmaceuticals', short: 'PiSA', tier: 'gold' as const },
        { name: 'Carnot Laboratories', short: 'CARNOT', tier: 'gold' as const },
        { name: 'Silanes Laboratories', short: 'Silanes', tier: 'gold' as const },
        { name: 'Columbia Laboratories', short: 'Columbia', tier: 'standard' as const },
        { name: 'IFA Celtics', short: 'IFA', tier: 'standard' as const },
        { name: 'BioMédicos', short: 'BioMed', tier: 'standard' as const },
        { name: 'Medartis', short: 'Medartis', tier: 'gold' as const },
        { name: 'IBRA', short: 'IBRA', tier: 'standard' as const },
      ],
    },
    {
      title: 'Corporate & Global Brands',
      icon: Building2,
      clients: [
        { name: 'FEMSA', short: 'FEMSA', tier: 'platinum' as const },
        { name: 'Garrigues', short: 'G', tier: 'gold' as const },
        { name: 'Groupe Clarins', short: 'CLARINS', tier: 'gold' as const },
        { name: 'Carlson Wagonlit Travel', short: 'CWT', tier: 'standard' as const },
        { name: 'Estée Lauder Companies', short: 'EL', tier: 'platinum' as const },
        { name: 'Industrial Polaris', short: 'POLARIS', tier: 'standard' as const },
        { name: 'Medical Corp. Group', short: 'MCG', tier: 'standard' as const },
        { name: 'Grupo Martí', short: 'Martí', tier: 'gold' as const },
        { name: 'Sport City', short: 'SC', tier: 'gold' as const },
      ],
    },
    {
      title: 'Government & Education',
      icon: GraduationCap,
      clients: [
        { name: 'Presidency of Mexico', short: 'GOB', tier: 'platinum' as const },
        { name: 'Universidad Panamericana', short: 'UP', tier: 'gold' as const },
      ],
    },
  ],
};

function LogoCard({ client }: { client: ClientLogo }) {
  const tierStyles = {
    platinum: 'border-gold/30 bg-gradient-to-br from-gold/10 to-gold/[0.03] hover:border-gold/50 hover:from-gold/15',
    gold: 'border-gold/15 bg-gold/[0.04] hover:border-gold/35 hover:bg-gold/[0.08]',
    standard: 'border-white/10 bg-white/[0.03] hover:border-gold/25 hover:bg-gold/[0.06]',
  };
  const textSizes = {
    platinum: 'text-xl md:text-2xl',
    gold: 'text-lg md:text-xl',
    standard: 'text-base md:text-lg',
  };

  return (
    <motion.div
      className={`relative rounded-2xl border p-5 md:p-6 flex flex-col items-center justify-center text-center h-[130px] md:h-[150px] transition-all duration-500 group cursor-default ${tierStyles[client.tier || 'standard']}`}
      whileHover={{ scale: 1.05, y: -4 }}
    >
      <div className={`font-bold tracking-widest text-gold/50 group-hover:text-gold transition-all duration-500 ${textSizes[client.tier || 'standard']}`}>
        {client.short}
      </div>
      <div className="text-[10px] md:text-xs text-white/40 group-hover:text-white/70 mt-2 font-medium tracking-wide uppercase transition-colors duration-500 line-clamp-2 leading-tight px-1">
        {client.name}
      </div>
      {client.tier === 'platinum' && (
        <div className="absolute top-2.5 right-2.5 w-2 h-2 rounded-full bg-gold/50 group-hover:bg-gold transition-colors" />
      )}
    </motion.div>
  );
}

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
  const categories = clientCategories[locale];
  const testi = testimonials[locale];

  // Featured clients for the top marquee
  const featured = ['Pfizer', 'Bayer', 'MSD', 'IMSS', 'ISSSTE', 'Hospital Angeles', 'Novo Nordisk', 'AstraZeneca', 'Baxter', 'FEMSA', 'Estée Lauder', 'Astellas', 'PiSA', 'Carnot', 'Silanes', 'Medartis', 'Clarins', 'Sport City', 'Grupo Martí', 'Presidencia MX'];

  return (
    <>
      <PageHero
        title={locale === 'es' ? 'Clientes que' : 'Clients Who'}
        highlight={locale === 'es' ? 'Confían en Nosotros' : 'Trust Us'}
        subtitle={locale === 'es' ? 'Instituciones de salud, farmacéuticas globales, corporativos y gobierno' : 'Healthcare institutions, global pharmaceuticals, corporates and government'}
        metrics={[locale === 'es' ? '55+ Clientes' : '55+ Clients', locale === 'es' ? 'Farmacéuticas Globales' : 'Global Pharma', locale === 'es' ? 'Gobierno Federal' : 'Federal Government']}
      />

      {/* Infinite Marquee */}
      <section className="relative py-8 overflow-hidden border-y border-white/[0.04]">
        <div className="absolute inset-0 bg-gradient-to-r from-[#0e0d08] via-[#09090b] to-[#0e0d08]" />
        <div className="relative">
          <Swiper modules={[Autoplay]} slidesPerView="auto" spaceBetween={50} autoplay={{ delay: 0, disableOnInteraction: false }} speed={4000} loop allowTouchMove={false}>
            {[...featured, ...featured].map((name, i) => (
              <SwiperSlide key={i} className="!w-auto">
                <span className="text-white/15 text-lg font-bold tracking-[0.2em] uppercase whitespace-nowrap">{name}</span>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </section>

      {/* Client Categories with Logo Cards */}
      <section className="relative py-24">
        <div className="absolute inset-0 noise-overlay" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle
            title={locale === 'es' ? 'Nuestros' : 'Our'}
            highlight={locale === 'es' ? 'Clientes' : 'Clients'}
            subtitle={locale === 'es' ? '+55 organizaciones confían en ADESSO para sus eventos más importantes' : '+55 organizations trust ADESSO for their most important events'}
          />

          {categories.map((category, i) => (
            <FadeInUp key={i} delay={i * 0.08} className="mb-16">
              {/* Category Header */}
              <div className="flex items-center gap-4 mb-8">
                <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-gold/15 to-gold/5 flex items-center justify-center">
                  <category.icon className="w-5 h-5 text-gold" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white">{category.title}</h3>
                  <p className="text-gold/40 text-xs mt-0.5">{category.clients.length} {locale === 'es' ? 'clientes' : 'clients'}</p>
                </div>
                <div className="flex-1 h-px bg-gradient-to-r from-gold/10 to-transparent ml-4" />
              </div>

              {/* Logo Grid */}
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-3 md:gap-4">
                {category.clients.map((client, j) => (
                  <motion.div
                    key={j}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: j * 0.03 }}
                  >
                    <LogoCard client={client} />
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
            <p className="text-white/40 mb-8 font-light">{locale === 'es' ? 'Pfizer, Bayer, Hospital Angeles, IMSS y más confían en nosotros' : 'Pfizer, Bayer, Hospital Angeles, IMSS and more trust us'}</p>
            <a href={`https://wa.me/${WHATSAPP_NUMBER}`} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-gradient-to-r from-gold-dark to-gold text-black font-bold text-lg hover:shadow-2xl hover:shadow-gold/20 transition-all duration-300 hover:scale-105">
              {locale === 'es' ? 'Cotizar Ahora' : 'Get a Quote'} <ArrowRight className="w-5 h-5" />
            </a>
          </FadeInUp>
        </div>
      </section>
    </>
  );
}
