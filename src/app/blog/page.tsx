'use client';

import PageHero from '@/components/PageHero';
import { useLocale } from '@/lib/locale-context';
import { StaggerContainer, StaggerItem } from '@/components/AnimatedSection';
import { motion } from 'framer-motion';
import { Calendar, Clock, ArrowRight, Stethoscope, Cpu, TrendingUp } from 'lucide-react';

const blogPosts = {
  es: [
    {
      title: 'Tendencias en Congresos Médicos 2025',
      excerpt: 'Descubre las últimas innovaciones en producción de congresos médicos: desde eventos híbridos hasta tecnología RFID.',
      date: '15 Mar 2025',
      readTime: '5 min',
      icon: Stethoscope,
      category: 'Congresos Médicos',
    },
    {
      title: 'Tecnología RFID: El Futuro del Control de Acceso',
      excerpt: 'Cómo los brazaletes RFID/NFC están revolucionando la experiencia de los asistentes en eventos corporativos.',
      date: '10 Mar 2025',
      readTime: '4 min',
      icon: Cpu,
      category: 'Tecnología',
    },
    {
      title: 'Cómo Planificar un Evento Corporativo Exitoso',
      excerpt: 'Guía completa para organizar eventos empresariales de alto impacto con producción profesional.',
      date: '5 Mar 2025',
      readTime: '6 min',
      icon: TrendingUp,
      category: 'Eventos Corporativos',
    },
  ],
  en: [
    {
      title: 'Medical Congress Trends 2025',
      excerpt: 'Discover the latest innovations in medical congress production: from hybrid events to RFID technology.',
      date: 'Mar 15, 2025',
      readTime: '5 min',
      icon: Stethoscope,
      category: 'Medical Congresses',
    },
    {
      title: 'RFID Technology: The Future of Access Control',
      excerpt: 'How RFID/NFC wristbands are revolutionizing the attendee experience at corporate events.',
      date: 'Mar 10, 2025',
      readTime: '4 min',
      icon: Cpu,
      category: 'Technology',
    },
    {
      title: 'How to Plan a Successful Corporate Event',
      excerpt: 'Complete guide to organizing high-impact business events with professional production.',
      date: 'Mar 5, 2025',
      readTime: '6 min',
      icon: TrendingUp,
      category: 'Corporate Events',
    },
  ],
};

export default function BlogPage() {
  const { locale, t } = useLocale();
  const posts = blogPosts[locale];

  return (
    <>
      <PageHero
        title={t.blog.title}
        highlight={t.blog.titleHighlight}
        subtitle={t.blog.subtitle}
      />

      <section className="relative py-24">
        <div className="absolute inset-0 noise-overlay" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.map((post, i) => (
              <StaggerItem key={i}>
                <motion.article
                  className="glass rounded-2xl overflow-hidden card-hover group cursor-pointer h-full flex flex-col"
                  whileHover={{ scale: 1.02 }}
                >
                  {/* Header */}
                  <div className="h-48 bg-gradient-to-br from-gold/10 to-teal/5 relative flex items-center justify-center">
                    <post.icon className="w-16 h-16 text-gold/20 group-hover:text-gold/30 transition-colors" />
                    <span className="absolute top-4 left-4 px-3 py-1 rounded-full bg-gold/10 text-gold text-xs font-medium">
                      {post.category}
                    </span>
                  </div>

                  <div className="p-6 flex flex-col flex-1">
                    <div className="flex items-center gap-4 text-white/30 text-xs mb-3">
                      <span className="flex items-center gap-1"><Calendar className="w-3 h-3" /> {post.date}</span>
                      <span className="flex items-center gap-1"><Clock className="w-3 h-3" /> {post.readTime}</span>
                    </div>
                    <h3 className="text-lg font-bold text-white mb-2 group-hover:text-gradient-gold transition-all">{post.title}</h3>
                    <p className="text-white/50 text-sm leading-relaxed flex-1">{post.excerpt}</p>
                    <div className="flex items-center gap-2 mt-4 text-gold text-sm font-medium group-hover:gap-3 transition-all">
                      {t.blog.readMore}
                      <ArrowRight className="w-4 h-4" />
                    </div>
                  </div>
                </motion.article>
              </StaggerItem>
            ))}
          </StaggerContainer>

          <div className="text-center mt-16">
            <p className="text-white/30 text-lg italic">{t.blog.comingSoon}</p>
          </div>
        </div>
      </section>
    </>
  );
}
