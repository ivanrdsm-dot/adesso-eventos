'use client';

import PageHero from '@/components/PageHero';
import { useLocale } from '@/lib/locale-context';
import { StaggerContainer, StaggerItem, FadeInUp } from '@/components/AnimatedSection';
import { motion } from 'framer-motion';
import { ArrowRight, Tv, Users, Wifi, UtensilsCrossed, Palette, Building2, Sparkles, Settings, Headphones, Monitor, Truck, Crown } from 'lucide-react';

const WHATSAPP_NUMBER = '5215510703056';

const serviceDetails = {
  es: [
    {
      icon: Headphones,
      title: 'Producción Audiovisual Profesional',
      items: ['Audio profesional para auditorios grandes', 'Mezcla en vivo y micrófonos inalámbricos premium', 'Moving heads, spotlights, wash y beam', 'Pantallas LED gigantes P2.5/P3.9', 'Proyección HD/4K multicámara', 'Grabación 4K y fotografía profesional'],
      cta: 'Producir mi Escenario',
    },
    {
      icon: Palette,
      title: 'Diseño Escenográfico Personalizado',
      items: ['Diseño 2D/3D con renders fotorrealistas', 'Construcción de escenarios custom', 'Stands corporativos y pasarelas', 'Salas Lounge Premium', 'Mobiliario corporativo (Tiffany, periqueras)', 'Pistas iluminadas y pisos LED'],
      cta: 'Diseñar mi Escenografía',
    },
    {
      icon: Truck,
      title: 'Gestión Total — Logística y Operación',
      items: ['Coordinación total de planificación a ejecución', 'Staff operativo capacitado y uniformado', 'Transporte nacional de equipo', 'Dirección de show y control de tiempos', 'Control de proveedores y backstage', 'Atención VIP y cobertura internacional'],
      cta: 'Coordinar mi Evento',
    },
    {
      icon: UtensilsCrossed,
      title: 'Banquetes & Hospitalidad',
      items: ['Coffee breaks corporativos básicos a premium', 'Box lunch ejecutivos', 'Cenas empresariales y banquetes de gala', 'Estaciones premium especializadas', 'Credencialización + alimentos integrados', 'Menús personalizados por evento'],
      cta: 'Solicitar Catering',
    },
    {
      icon: Crown,
      title: 'Eventos Corporativos Premium',
      items: ['Escenografías de marca personalizadas', 'Iluminación cinematográfica de alto nivel', 'Pantallas gigantes LED', 'Lanzamientos de producto de alto impacto', 'Montajes masivos en hoteles y centros', 'Branding inmersivo y gráficos animados'],
      cta: 'Producir mi Convención',
    },
    {
      icon: Sparkles,
      title: 'Eventos de Marca e Inmersivos',
      items: ['Robots interactivos para activaciones', 'Pantallas LED creativas (curvas, 360°)', 'Tecnología interactiva (apps, QR, tracking)', 'Mapping y contenido visual', 'Stands y escenografía custom', 'Momentos instagrameables'],
      cta: 'Crear mi Evento de Marca',
    },
    {
      icon: Wifi,
      title: 'Tecnología para Eventos',
      items: ['Brazaletes RFID/NFC con check-in express', 'Apps de registro personalizadas', 'Robots de servicio y asistencia', 'Analítica de eventos y mapas de calor', 'Streaming y eventos híbridos', 'Integración de plataformas digitales'],
      cta: 'Integrar Tecnología',
    },
  ],
  en: [
    {
      icon: Headphones,
      title: 'Professional Audiovisual Production',
      items: ['Professional audio for large auditoriums', 'Live mixing and premium wireless microphones', 'Moving heads, spotlights, wash and beam', 'Giant LED screens P2.5/P3.9', 'HD/4K multicamera projection', '4K recording and professional photography'],
      cta: 'Produce my Stage',
    },
    {
      icon: Palette,
      title: 'Custom Scenic Design',
      items: ['2D/3D design with photorealistic renders', 'Custom stage construction', 'Corporate stands and runways', 'Premium Lounge Rooms', 'Corporate furniture (Tiffany, bar stools)', 'Illuminated floors and LED floors'],
      cta: 'Design my Scenography',
    },
    {
      icon: Truck,
      title: 'Total Management — Logistics & Operations',
      items: ['Full coordination from planning to execution', 'Trained and uniformed operational staff', 'National equipment transportation', 'Show direction and time control', 'Vendor and backstage control', 'VIP attention and international coverage'],
      cta: 'Coordinate my Event',
    },
    {
      icon: UtensilsCrossed,
      title: 'Catering & Hospitality',
      items: ['Basic to premium corporate coffee breaks', 'Executive box lunches', 'Corporate dinners and gala banquets', 'Premium specialized stations', 'Integrated accreditation + catering', 'Custom menus per event'],
      cta: 'Request Catering',
    },
    {
      icon: Crown,
      title: 'Premium Corporate Events',
      items: ['Custom brand scenography', 'High-level cinematic lighting', 'Giant LED screens', 'High-impact product launches', 'Massive hotel and expo center setups', 'Immersive branding and animated graphics'],
      cta: 'Produce my Convention',
    },
    {
      icon: Sparkles,
      title: 'Brand & Immersive Events',
      items: ['Interactive robots for activations', 'Creative LED screens (curved, 360°)', 'Interactive technology (apps, QR, tracking)', 'Mapping and visual content', 'Custom stands and scenography', 'Instagrammable moments'],
      cta: 'Create my Brand Event',
    },
    {
      icon: Wifi,
      title: 'Event Technology',
      items: ['RFID/NFC wristbands with express check-in', 'Custom registration apps', 'Service and assistance robots', 'Event analytics and heat maps', 'Streaming and hybrid events', 'Digital platform integration'],
      cta: 'Integrate Technology',
    },
  ],
};

export default function ServiciosPage() {
  const { locale, t } = useLocale();
  const details = serviceDetails[locale];

  return (
    <>
      <PageHero
        title={t.servicesPage.heroTitle}
        highlight={t.servicesPage.heroHighlight}
        subtitle={t.servicesPage.heroSubtitle}
        metrics={t.servicesPage.metrics}
      />

      <section className="relative py-24">
        <div className="absolute inset-0 noise-overlay" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <StaggerContainer className="space-y-16">
            {details.map((service, i) => (
              <StaggerItem key={i}>
                <motion.div
                  className={`glass rounded-3xl p-8 md:p-12 card-hover relative overflow-hidden ${
                    i % 2 === 0 ? '' : 'ml-0 md:ml-12'
                  }`}
                  whileHover={{ scale: 1.01 }}
                >
                  <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-gold via-gold/50 to-transparent" />

                  <div className="flex flex-col md:flex-row gap-8">
                    <div className="md:w-1/3">
                      <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-gold/20 to-gold/5 flex items-center justify-center mb-4">
                        <service.icon className="w-8 h-8 text-gold" />
                      </div>
                      <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">{service.title}</h3>
                      <a
                        href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
                          locale === 'es'
                            ? `Hola, me interesa el servicio de: ${service.title}`
                            : `Hello, I'm interested in: ${service.title}`
                        )}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-gold-dark to-gold text-black font-semibold text-sm hover:shadow-lg hover:shadow-gold/25 transition-all duration-300 hover:scale-105"
                      >
                        {service.cta}
                        <ArrowRight className="w-4 h-4" />
                      </a>
                    </div>
                    <div className="md:w-2/3">
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        {service.items.map((item, j) => (
                          <div key={j} className="flex items-start gap-3 p-4 rounded-xl bg-white/[0.02] hover:bg-white/[0.05] transition-colors">
                            <div className="w-2 h-2 rounded-full bg-gold mt-2 shrink-0" />
                            <span className="text-white/70 text-sm">{item}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </motion.div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Final CTA */}
      <section className="relative py-20 bg-dark-surface">
        <div className="absolute inset-0 noise-overlay" />
        <div className="relative max-w-4xl mx-auto px-4 text-center">
          <FadeInUp>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              {locale === 'es' ? '+35 Años de' : '+35 Years of'}{' '}
              <span className="text-gradient-gold">{locale === 'es' ? 'Experiencia Comprobada' : 'Proven Experience'}</span>
            </h2>
            <p className="text-white/50 mb-8">{locale === 'es' ? 'Tu evento merece una producción de clase mundial' : 'Your event deserves world-class production'}</p>
            <a
              href={`https://wa.me/${WHATSAPP_NUMBER}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-gradient-to-r from-gold-dark to-gold text-black font-bold text-lg hover:shadow-2xl hover:shadow-gold/25 transition-all duration-300 hover:scale-105"
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
