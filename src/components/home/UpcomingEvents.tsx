'use client';

import { useLocale } from '@/lib/locale-context';
import SectionTitle from '../SectionTitle';
import { StaggerContainer, StaggerItem } from '../AnimatedSection';
import { motion } from 'framer-motion';
import { Calendar, MapPin, Users, ArrowRight, Stethoscope, Building2, Sparkles } from 'lucide-react';
import Link from 'next/link';

const WHATSAPP_NUMBER = '5215510703056';

const events = {
  es: [
    {
      title: 'XVI Congreso Nacional de Dermatología Pediátrica',
      date: 'Octubre 2025',
      location: 'Monterrey, N.L.',
      attendees: '800+',
      icon: Stethoscope,
      color: 'from-teal to-teal-dark',
      borderColor: 'border-teal/20 hover:border-teal/40',
      tag: 'Congreso Médico',
      status: 'Confirmado',
    },
    {
      title: 'Congreso Ángeles de Salud Hospitalaria',
      date: 'Noviembre 2025',
      location: 'CDMX',
      attendees: '1,200+',
      icon: Building2,
      color: 'from-gold to-gold-dark',
      borderColor: 'border-gold/20 hover:border-gold/40',
      tag: 'Convención',
      status: 'Confirmado',
    },
    {
      title: 'Expo Farmacéutica Internacional',
      date: 'Enero 2026',
      location: 'Guadalajara, Jal.',
      attendees: '2,000+',
      icon: Sparkles,
      color: 'from-accent-blue to-blue-700',
      borderColor: 'border-accent-blue/20 hover:border-accent-blue/40',
      tag: 'Exposición',
      status: 'En Planeación',
    },
  ],
  en: [
    {
      title: 'XVI National Pediatric Dermatology Congress',
      date: 'October 2025',
      location: 'Monterrey, N.L.',
      attendees: '800+',
      icon: Stethoscope,
      color: 'from-teal to-teal-dark',
      borderColor: 'border-teal/20 hover:border-teal/40',
      tag: 'Medical Congress',
      status: 'Confirmed',
    },
    {
      title: 'Angeles Hospital Health Congress',
      date: 'November 2025',
      location: 'CDMX',
      attendees: '1,200+',
      icon: Building2,
      color: 'from-gold to-gold-dark',
      borderColor: 'border-gold/20 hover:border-gold/40',
      tag: 'Convention',
      status: 'Confirmed',
    },
    {
      title: 'International Pharmaceutical Expo',
      date: 'January 2026',
      location: 'Guadalajara, Jal.',
      attendees: '2,000+',
      icon: Sparkles,
      color: 'from-accent-blue to-blue-700',
      borderColor: 'border-accent-blue/20 hover:border-accent-blue/40',
      tag: 'Exhibition',
      status: 'In Planning',
    },
  ],
};

export default function UpcomingEvents() {
  const { locale } = useLocale();
  const items = events[locale];

  return (
    <section className="relative py-24 overflow-hidden section-gold">
      <div className="absolute inset-0 noise-overlay" />
      <div className="absolute top-10 right-10 w-64 h-64 rounded-full bg-gold/5 blur-[100px]" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle
          title={locale === 'es' ? 'Próximos' : 'Upcoming'}
          highlight={locale === 'es' ? 'Eventos' : 'Events'}
          subtitle={locale === 'es' ? 'Congresos y eventos que estamos produciendo próximamente' : 'Congresses and events we are producing soon'}
        />

        <StaggerContainer className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {items.map((event, i) => (
            <StaggerItem key={i}>
              <motion.div
                className={`glass rounded-2xl p-6 h-full card-hover group border ${event.borderColor} transition-all relative overflow-hidden`}
                whileHover={{ scale: 1.02 }}
              >
                {/* Top color accent */}
                <div className={`absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r ${event.color} opacity-60 group-hover:opacity-100 transition-opacity`} />

                <div className="flex items-start justify-between mb-4">
                  <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${event.color} flex items-center justify-center shadow-lg`}>
                    <event.icon className="w-6 h-6 text-white" />
                  </div>
                  <span className="px-3 py-1 rounded-full bg-white/5 text-white/60 text-xs font-medium border border-white/10">
                    {event.status}
                  </span>
                </div>

                <span className="inline-block px-2.5 py-0.5 rounded-full bg-gold/10 text-gold text-xs font-medium mb-3">
                  {event.tag}
                </span>

                <h3 className="text-lg font-bold text-white mb-4 leading-tight">{event.title}</h3>

                <div className="space-y-2.5 text-sm">
                  <div className="flex items-center gap-2 text-white/50">
                    <Calendar className="w-4 h-4 text-gold shrink-0" />
                    <span>{event.date}</span>
                  </div>
                  <div className="flex items-center gap-2 text-white/50">
                    <MapPin className="w-4 h-4 text-teal shrink-0" />
                    <span>{event.location}</span>
                  </div>
                  <div className="flex items-center gap-2 text-white/50">
                    <Users className="w-4 h-4 text-accent-blue shrink-0" />
                    <span>{event.attendees} {locale === 'es' ? 'asistentes' : 'attendees'}</span>
                  </div>
                </div>
              </motion.div>
            </StaggerItem>
          ))}
        </StaggerContainer>

        <div className="text-center">
          <a
            href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(locale === 'es' ? 'Hola, quiero producir un evento con ADESSO.' : 'Hello, I want to produce an event with ADESSO.')}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-gradient-to-r from-gold-dark to-gold text-black font-bold hover:shadow-2xl hover:shadow-gold/25 transition-all duration-300 hover:scale-105"
          >
            {locale === 'es' ? '¿Quieres que Produzcamos tu Evento?' : 'Want Us to Produce Your Event?'}
            <ArrowRight className="w-5 h-5" />
          </a>
        </div>
      </div>
    </section>
  );
}
