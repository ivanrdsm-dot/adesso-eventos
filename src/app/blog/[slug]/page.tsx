'use client';

import { useLocale } from '@/lib/locale-context';
import { blogPosts, getPostBySlug } from '@/lib/blog-data';
import { useParams } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Calendar, Clock, ArrowLeft, ArrowRight, User, Share2, MessageCircle } from 'lucide-react';

const WHATSAPP_NUMBER = '5215510703056';

export default function BlogPostPage() {
  const { locale, t } = useLocale();
  const params = useParams();
  const slug = params.slug as string;
  const post = getPostBySlug(slug);

  if (!post) {
    return (
      <div className="min-h-screen flex items-center justify-center pt-24">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-white mb-4">404</h1>
          <p className="text-white/50 mb-8">{locale === 'es' ? 'Artículo no encontrado' : 'Article not found'}</p>
          <Link href="/blog" className="text-gold hover:underline">{locale === 'es' ? 'Volver al blog' : 'Back to blog'}</Link>
        </div>
      </div>
    );
  }

  const content = locale === 'es' ? post.contentEs : post.contentEn;
  const title = locale === 'es' ? post.titleEs : post.titleEn;
  const excerpt = locale === 'es' ? post.excerptEs : post.excerptEn;
  const category = locale === 'es' ? post.categoryEs : post.categoryEn;
  const date = locale === 'es' ? post.dateEs : post.dateEn;

  const currentIndex = blogPosts.findIndex((p) => p.slug === slug);
  const prevPost = currentIndex > 0 ? blogPosts[currentIndex - 1] : null;
  const nextPost = currentIndex < blogPosts.length - 1 ? blogPosts[currentIndex + 1] : null;

  const shareUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
    locale === 'es' ? `Hola, leí su artículo "${title}" y me interesa más información.` : `Hello, I read your article "${title}" and I'm interested in more information.`
  )}`;

  return (
    <>
      {/* Hero */}
      <section className="relative pt-24">
        <div className="relative h-[400px] md:h-[500px]">
          <Image
            src={post.image}
            alt={title}
            fill
            className="object-cover"
            sizes="100vw"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-black/50 to-black/30" />
        </div>

        <div className="relative max-w-4xl mx-auto px-4 -mt-32 z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <Link href="/blog" className="inline-flex items-center gap-2 text-gold/70 hover:text-gold mb-6 text-sm transition-colors">
              <ArrowLeft className="w-4 h-4" /> {locale === 'es' ? 'Volver al Blog' : 'Back to Blog'}
            </Link>

            <span className="inline-block px-4 py-1.5 rounded-full bg-gold/10 text-gold text-sm font-medium mb-4">
              {category}
            </span>

            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight">
              {title}
            </h1>

            <p className="text-white/60 text-lg mb-6">{excerpt}</p>

            <div className="flex flex-wrap items-center gap-6 text-white/40 text-sm border-b border-white/10 pb-6">
              <span className="flex items-center gap-2"><User className="w-4 h-4" /> {post.author}</span>
              <span className="flex items-center gap-2"><Calendar className="w-4 h-4" /> {date}</span>
              <span className="flex items-center gap-2"><Clock className="w-4 h-4" /> {post.readTime} {locale === 'es' ? 'de lectura' : 'read'}</span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Content */}
      <section className="relative py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <motion.article
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="prose prose-invert prose-lg max-w-none
              prose-headings:text-white prose-headings:font-bold
              prose-h2:text-2xl prose-h2:md:text-3xl prose-h2:mt-12 prose-h2:mb-6 prose-h2:text-gradient-gold
              prose-h3:text-xl prose-h3:mt-8 prose-h3:mb-4
              prose-p:text-white/65 prose-p:leading-relaxed
              prose-strong:text-white prose-strong:font-semibold
              prose-ul:text-white/60 prose-li:text-white/60
              prose-li:marker:text-gold
              prose-a:text-gold prose-a:no-underline hover:prose-a:underline"
          >
            {content.split('\n').map((line, i) => {
              const trimmed = line.trim();
              if (!trimmed) return <br key={i} />;
              if (trimmed.startsWith('## ')) return <h2 key={i}>{trimmed.slice(3)}</h2>;
              if (trimmed.startsWith('### ')) return <h3 key={i}>{trimmed.slice(4)}</h3>;
              if (trimmed.startsWith('- **')) {
                const match = trimmed.match(/^- \*\*(.+?)\*\*(.*)$/);
                if (match) return <li key={i}><strong>{match[1]}</strong>{match[2]}</li>;
              }
              if (trimmed.startsWith('- ')) return <li key={i}>{trimmed.slice(2)}</li>;
              if (trimmed.startsWith('1. ') || trimmed.startsWith('2. ') || trimmed.startsWith('3. ') || trimmed.startsWith('4. ') || trimmed.startsWith('5. ')) {
                const match = trimmed.match(/^\d+\.\s+\*\*(.+?)\*\*\s*(.*)$/);
                if (match) return <li key={i}><strong>{match[1]}</strong> {match[2]}</li>;
                return <li key={i}>{trimmed.replace(/^\d+\.\s+/, '')}</li>;
              }
              if (trimmed.startsWith('**') && trimmed.endsWith('**')) {
                return <p key={i} className="!text-gold font-semibold text-lg">{trimmed.slice(2, -2)}</p>;
              }
              if (trimmed.startsWith('**')) {
                const parts = trimmed.split('**');
                return (
                  <p key={i}>
                    {parts.map((part, j) =>
                      j % 2 === 1 ? <strong key={j}>{part}</strong> : <span key={j}>{part}</span>
                    )}
                  </p>
                );
              }
              return <p key={i}>{trimmed}</p>;
            })}
          </motion.article>

          {/* Tags */}
          <div className="mt-12 pt-8 border-t border-white/10">
            <div className="flex flex-wrap gap-2">
              {post.tags.map((tag, i) => (
                <span key={i} className="px-3 py-1.5 rounded-full bg-gold/10 text-gold/80 text-xs font-medium">
                  #{tag}
                </span>
              ))}
            </div>
          </div>

          {/* Share & CTA */}
          <div className="mt-8 glass rounded-2xl p-8 text-center">
            <h3 className="text-xl font-bold text-white mb-3">
              {locale === 'es' ? '¿Te interesó este artículo?' : 'Interested in this article?'}
            </h3>
            <p className="text-white/50 mb-6">
              {locale === 'es' ? 'Contáctanos para más información sobre nuestros servicios' : 'Contact us for more information about our services'}
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href={shareUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#25D366] text-white font-semibold hover:scale-105 transition-all"
              >
                <MessageCircle className="w-5 h-5" />
                WhatsApp
              </a>
              <a
                href="tel:+525510703056"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-gold-dark to-gold text-black font-semibold hover:scale-105 transition-all"
              >
                {locale === 'es' ? 'Llamar Ahora' : 'Call Now'}
              </a>
            </div>
          </div>

          {/* Navigation */}
          <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 gap-6">
            {prevPost && (
              <Link href={`/blog/${prevPost.slug}`} className="glass rounded-xl p-5 card-hover group">
                <span className="text-white/30 text-xs flex items-center gap-1 mb-2"><ArrowLeft className="w-3 h-3" /> {locale === 'es' ? 'Anterior' : 'Previous'}</span>
                <p className="text-white font-semibold text-sm group-hover:text-gold transition-colors">
                  {locale === 'es' ? prevPost.titleEs : prevPost.titleEn}
                </p>
              </Link>
            )}
            {nextPost && (
              <Link href={`/blog/${nextPost.slug}`} className="glass rounded-xl p-5 card-hover group text-right sm:col-start-2">
                <span className="text-white/30 text-xs flex items-center gap-1 justify-end mb-2">{locale === 'es' ? 'Siguiente' : 'Next'} <ArrowRight className="w-3 h-3" /></span>
                <p className="text-white font-semibold text-sm group-hover:text-gold transition-colors">
                  {locale === 'es' ? nextPost.titleEs : nextPost.titleEn}
                </p>
              </Link>
            )}
          </div>
        </div>
      </section>
    </>
  );
}
