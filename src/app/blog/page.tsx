'use client';

import PageHero from '@/components/PageHero';
import { useLocale } from '@/lib/locale-context';
import { StaggerContainer, StaggerItem } from '@/components/AnimatedSection';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { Calendar, Clock, ArrowRight } from 'lucide-react';
import { blogPosts } from '@/lib/blog-data';

export default function BlogPage() {
  const { locale, t } = useLocale();

  const featured = blogPosts[0];
  const rest = blogPosts.slice(1);

  return (
    <>
      <PageHero
        title={t.blog.title}
        highlight={t.blog.titleHighlight}
        subtitle={t.blog.subtitle}
      />

      {/* Featured Post */}
      <section className="relative py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link href={`/blog/${featured.slug}`}>
            <motion.div
              className="glass rounded-3xl overflow-hidden group cursor-pointer card-hover"
              whileHover={{ scale: 1.01 }}
            >
              <div className="grid grid-cols-1 lg:grid-cols-2">
                <div className="relative h-[300px] lg:h-[450px]">
                  <Image
                    src={featured.image}
                    alt={locale === 'es' ? featured.titleEs : featured.titleEn}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    priority
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent to-black/40 lg:hidden" />
                </div>
                <div className="p-8 lg:p-12 flex flex-col justify-center">
                  <span className="inline-block px-4 py-1.5 rounded-full bg-gold/10 text-gold text-sm font-medium w-fit mb-4">
                    {locale === 'es' ? featured.categoryEs : featured.categoryEn}
                  </span>
                  <h2 className="text-2xl lg:text-3xl font-bold text-white mb-4 group-hover:text-gradient-gold transition-all">
                    {locale === 'es' ? featured.titleEs : featured.titleEn}
                  </h2>
                  <p className="text-white/50 leading-relaxed mb-6">
                    {locale === 'es' ? featured.excerptEs : featured.excerptEn}
                  </p>
                  <div className="flex items-center gap-6 text-white/30 text-sm mb-6">
                    <span className="flex items-center gap-1.5"><Calendar className="w-4 h-4" /> {locale === 'es' ? featured.dateEs : featured.dateEn}</span>
                    <span className="flex items-center gap-1.5"><Clock className="w-4 h-4" /> {featured.readTime}</span>
                  </div>
                  <div className="flex items-center gap-2 text-gold font-medium group-hover:gap-3 transition-all">
                    {t.blog.readMore}
                    <ArrowRight className="w-4 h-4" />
                  </div>
                </div>
              </div>
            </motion.div>
          </Link>
        </div>
      </section>

      {/* Post Grid */}
      <section className="relative py-16">
        <div className="absolute inset-0 noise-overlay" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {rest.map((post, i) => (
              <StaggerItem key={post.slug}>
                <Link href={`/blog/${post.slug}`}>
                  <motion.article
                    className="glass rounded-2xl overflow-hidden card-hover group cursor-pointer h-full flex flex-col"
                    whileHover={{ scale: 1.02 }}
                  >
                    <div className="relative h-[220px]">
                      <Image
                        src={post.image}
                        alt={locale === 'es' ? post.titleEs : post.titleEn}
                        fill
                        className="object-cover transition-transform duration-700 group-hover:scale-110"
                        sizes="(max-width: 768px) 100vw, 33vw"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                      <span className="absolute top-4 left-4 px-3 py-1 rounded-full bg-gold/15 backdrop-blur-md text-gold text-xs font-medium border border-gold/20">
                        {locale === 'es' ? post.categoryEs : post.categoryEn}
                      </span>
                    </div>
                    <div className="p-6 flex flex-col flex-1">
                      <div className="flex items-center gap-4 text-white/30 text-xs mb-3">
                        <span className="flex items-center gap-1"><Calendar className="w-3 h-3" /> {locale === 'es' ? post.dateEs : post.dateEn}</span>
                        <span className="flex items-center gap-1"><Clock className="w-3 h-3" /> {post.readTime}</span>
                      </div>
                      <h3 className="text-lg font-bold text-white mb-3 group-hover:text-gradient-gold transition-all leading-tight">
                        {locale === 'es' ? post.titleEs : post.titleEn}
                      </h3>
                      <p className="text-white/50 text-sm leading-relaxed flex-1">
                        {locale === 'es' ? post.excerptEs : post.excerptEn}
                      </p>
                      <div className="flex items-center gap-2 mt-4 text-gold text-sm font-medium group-hover:gap-3 transition-all">
                        {t.blog.readMore}
                        <ArrowRight className="w-4 h-4" />
                      </div>
                    </div>
                  </motion.article>
                </Link>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>
    </>
  );
}
