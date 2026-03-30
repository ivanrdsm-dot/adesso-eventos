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

const clientCategories = {
  es: [
    { title: 'Sector Salud — Hospitales', icon: Stethoscope, clients: ['Hospital Angeles Pedregal','Hospital Angeles Lindavista','Hospital Angeles Metropolitano','Hospital Angeles Acoxpa','Hospital Angeles México','Hospital Angeles Mocel','Hospital Angeles Universidad','Hospital San Ángel Inn','Grupo Angeles Servicios de Salud','ISSSTE','IMSS'] },
    { title: 'Sociedades y Colegios Médicos', icon: Award, clients: ['Colegio Mexicano de Anestesiología','Sociedad Mexicana de Anestesiología','Sociedad Mexicana de Radiología e Imagen','Colegio Mexicano de Dermatología Pediátrica','Sociedad Mexicana de Cirugía Pediátrica','Sociedad Médica Hospital Angeles Pedregal','SOMHAL — Soc. Médica H. Angeles Lindavista','Sociedad Médica H. Angeles Metropolitano','Sociedad Médica H. Angeles Acoxpa','Asociación Psicoanalítica Mexicana A.C.','Sociedad Mexicana de Trasplantes A.C.','AMEG — Asoc. Mexicana de Endoscopia GI','CEDIASA — Centro Diagnóstico Ángeles','Centro Diagnóstico Ángeles','FEMECOG','Asociación Nacional de Hospitales Privados'] },
    { title: 'Farmacéuticas y Dispositivos Médicos', icon: Pill, clients: ['Pfizer','Bayer','MSD','Baxter','Novo Nordisk','AstraZeneca','Astellas','PiSA Farmacéutica','Laboratorios Carnot','Laboratorios Silanes','Laboratorios Columbia','IFA Celtics','BioMédicos','Medartis','IBRA — International Bone Research Assoc.','Aceleración Nuclear y Resonancia Magnética'] },
    { title: 'Corporativos y Marcas Globales', icon: Building2, clients: ['FEMSA','Garrigues','Groupe Clarins','Carlson Wagonlit Travel','Estée Lauder Companies','Trojan','Industrial Polaris','Medical Corporation Group','Grupo Martí','Sport City'] },
    { title: 'Gobierno y Educación', icon: GraduationCap, clients: ['Presidencia de la República','Universidad Panamericana'] },
  ],
  en: [
    { title: 'Healthcare — Hospitals', icon: Stethoscope, clients: ['Hospital Angeles Pedregal','Hospital Angeles Lindavista','Hospital Angeles Metropolitano','Hospital Angeles Acoxpa','Hospital Angeles México','Hospital Angeles Mocel','Hospital Angeles Universidad','Hospital San Ángel Inn','Grupo Angeles Health Services','ISSSTE','IMSS'] },
    { title: 'Medical Societies & Colleges', icon: Award, clients: ['Mexican College of Anesthesiology','Mexican Society of Anesthesiology','Mexican Society of Radiology & Imaging','Mexican College of Pediatric Dermatology','Mexican Society of Pediatric Surgery','H. Angeles Pedregal Medical Society','SOMHAL — H. Angeles Lindavista Medical Society','H. Angeles Metropolitano Medical Society','H. Angeles Acoxpa Medical Society','Mexican Psychoanalytic Association','Mexican Society of Transplants','AMEG — Mexican Assoc. of GI Endoscopy','CEDIASA — Angeles Diagnostic Center','Angeles Diagnostic Center','FEMECOG','National Assoc. of Private Hospitals'] },
    { title: 'Pharmaceuticals & Medical Devices', icon: Pill, clients: ['Pfizer','Bayer','MSD','Baxter','Novo Nordisk','AstraZeneca','Astellas','PiSA Pharmaceuticals','Carnot Laboratories','Silanes Laboratories','Columbia Laboratories','IFA Celtics','BioMédicos','Medartis','IBRA — International Bone Research Assoc.','Nuclear Acceleration & Magnetic Resonance'] },
    { title: 'Corporate & Global Brands', icon: Building2, clients: ['FEMSA','Garrigues','Groupe Clarins','Carlson Wagonlit Travel','Estée Lauder Companies','Trojan','Industrial Polaris','Medical Corporation Group','Grupo Martí','Sport City'] },
    { title: 'Government & Education', icon: GraduationCap, clients: ['Presidency of Mexico','Universidad Panamericana'] },
  ],
};

const allClients = ['ISSSTE','IMSS','Hospital Angeles','Grupo Angeles','San Ángel Inn','Pfizer','Bayer','MSD','Baxter','Novo Nordisk','AstraZeneca','Astellas','FEMSA','Garrigues','Estée Lauder','PiSA','Carnot','Silanes','Columbia','Clarins','Medartis','IBRA','Sport City','Grupo Martí','Presidencia MX','Universidad Panamericana','IFA Celtics','BioMédicos','Polaris','Trojan'];

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

  return (
    <>
      <PageHero
        title={locale === 'es' ? 'Clientes que' : 'Clients Who'}
        highlight={locale === 'es' ? 'Confían en Nosotros' : 'Trust Us'}
        subtitle={locale === 'es' ? 'Instituciones de salud, farmacéuticas globales, corporativos y gobierno' : 'Healthcare institutions, global pharmaceuticals, corporates and government'}
        metrics={[locale === 'es' ? '55+ Clientes' : '55+ Clients', locale === 'es' ? 'Farmacéuticas Globales' : 'Global Pharma', locale === 'es' ? 'Gobierno Federal' : 'Federal Government']}
      />

      {/* Infinite Scroll Client Names */}
      <section className="relative py-10 overflow-hidden border-y border-white/[0.04]">
        <div className="absolute inset-0 bg-gradient-to-r from-[#0e0d08] via-[#09090b] to-[#0e0d08]" />
        <div className="relative">
          <Swiper modules={[Autoplay]} slidesPerView="auto" spaceBetween={40} autoplay={{ delay: 0, disableOnInteraction: false }} speed={3000} loop allowTouchMove={false}>
            {[...allClients, ...allClients].map((name, i) => (
              <SwiperSlide key={i} className="!w-auto">
                <div className="flex items-center gap-3 px-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-gold/40" />
                  <span className="text-white/30 text-sm font-medium whitespace-nowrap tracking-wide">{name}</span>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </section>

      {/* Client Categories */}
      <section className="relative py-24">
        <div className="absolute inset-0 noise-overlay" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle title={locale === 'es' ? 'Nuestros' : 'Our'} highlight={locale === 'es' ? 'Clientes' : 'Clients'} subtitle={locale === 'es' ? '+55 organizaciones confían en ADESSO para sus eventos más importantes' : '+55 organizations trust ADESSO for their most important events'} />

          <div className="space-y-8">
            {categories.map((category, i) => (
              <FadeInUp key={i} delay={i * 0.1}>
                <div className="glass rounded-2xl p-6 md:p-8 card-hover border border-white/[0.04] hover:border-gold/15 transition-all">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-gold/15 to-gold/5 flex items-center justify-center">
                      <category.icon className="w-6 h-6 text-gold" />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-white">{category.title}</h3>
                      <p className="text-gold/50 text-xs">{category.clients.length} {locale === 'es' ? 'clientes' : 'clients'}</p>
                    </div>
                  </div>

                  <Swiper modules={[Autoplay]} slidesPerView="auto" spaceBetween={8} autoplay={{ delay: 2500 + i * 500, disableOnInteraction: false, pauseOnMouseEnter: true }} speed={800} loop={category.clients.length > 4}>
                    {category.clients.map((client, j) => (
                      <SwiperSlide key={j} className="!w-auto">
                        <motion.div className="px-4 py-2.5 rounded-xl bg-white/[0.03] border border-white/[0.06] hover:border-gold/20 hover:bg-gold/[0.04] text-white/60 hover:text-white text-sm font-medium whitespace-nowrap transition-all duration-300 cursor-default" whileHover={{ scale: 1.05, y: -2 }}>
                          {client}
                        </motion.div>
                      </SwiperSlide>
                    ))}
                  </Swiper>
                </div>
              </FadeInUp>
            ))}
          </div>
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
