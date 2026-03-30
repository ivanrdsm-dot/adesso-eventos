'use client';

import Link from 'next/link';
import { useLocale } from '@/lib/locale-context';
import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, ExternalLink } from 'lucide-react';

export default function Footer() {
  const { t } = useLocale();

  const links = [
    { href: '/', label: t.nav.home },
    { href: '/nosotros', label: t.nav.about },
    { href: '/servicios', label: t.nav.services },
    { href: '/congresos-medicos', label: t.nav.congresses },
    { href: '/galeria', label: t.nav.gallery },
    { href: '/clientes', label: t.nav.clients },
    { href: '/contacto', label: t.nav.contact },
  ];

  return (
    <footer className="relative bg-dark-surface border-t border-white/5">
      <div className="absolute inset-0 noise-overlay" />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Link href="/" className="inline-block mb-4">
              <span className="text-3xl font-bold text-gradient-gold tracking-wider">ADESSO</span>
            </Link>
            <p className="text-white/50 text-sm leading-relaxed mb-6">
              {t.footer.description}
            </p>
            <div className="flex gap-3">
              {['FB', 'IG', 'IN', 'YT'].map((label, i) => (
                <motion.a
                  key={i}
                  href="#"
                  whileHover={{ scale: 1.1, y: -2 }}
                  className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-white/40 hover:text-gold hover:border-gold/40 transition-colors text-xs font-bold"
                >
                  {label}
                </motion.a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-semibold mb-4 text-sm uppercase tracking-wider">{t.footer.quickLinks}</h4>
            <ul className="space-y-3">
              {links.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-white/50 hover:text-gold text-sm transition-colors duration-300"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-semibold mb-4 text-sm uppercase tracking-wider">{t.footer.contactTitle}</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-gold mt-0.5 shrink-0" />
                <span className="text-white/50 text-sm">{t.footer.address}</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-gold shrink-0" />
                <div className="text-white/50 text-sm">
                  <div>55.5524.8542</div>
                  <div>55.5524.9680</div>
                </div>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-gold shrink-0" />
                <div className="text-white/50 text-sm">
                  <div>asoto@adessomexico.com</div>
                  <div>mherrero@adessomexico.com</div>
                </div>
              </li>
            </ul>
          </div>

          {/* CTA */}
          <div>
            <h4 className="text-white font-semibold mb-4 text-sm uppercase tracking-wider">WhatsApp</h4>
            <p className="text-white/50 text-sm mb-4">
              {t.contact.info.whatsapp}
            </p>
            <a
              href="https://wa.me/5215510703056"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#25D366] text-white font-semibold text-sm hover:bg-[#20bd5a] transition-all duration-300 hover:scale-105"
            >
              <svg viewBox="0 0 32 32" className="w-5 h-5 fill-white">
                <path d="M16.004 0h-.008C7.174 0 0 7.176 0 16c0 3.5 1.128 6.744 3.046 9.378L1.054 31.29l6.118-1.958A15.914 15.914 0 0016.004 32C24.826 32 32 24.822 32 16S24.826 0 16.004 0zm9.312 22.594c-.39 1.1-1.932 2.014-3.164 2.28-.844.18-1.946.324-5.656-1.216-4.746-1.97-7.8-6.79-8.036-7.104-.226-.314-1.9-2.532-1.9-4.83s1.202-3.428 1.63-3.896c.426-.47.932-.586 1.242-.586.31 0 .62.002.89.016.286.014.67-.108 1.048.8.39.932 1.326 3.232 1.442 3.466.116.234.194.508.038.82-.156.314-.234.508-.468.784-.234.274-.492.614-.702.824-.234.234-.478.488-.206.958.274.468 1.216 2.006 2.612 3.25 1.794 1.598 3.306 2.094 3.774 2.328.468.234.742.196 1.016-.118.274-.314 1.174-1.37 1.488-1.838.312-.47.626-.39 1.056-.234.43.156 2.726 1.286 3.194 1.52.468.234.78.352.896.546.116.194.116 1.126-.274 2.226z"/>
              </svg>
              55.1070.3056
            </a>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-12 pt-8 border-t border-white/5 text-center">
          <p className="text-white/30 text-sm">{t.footer.rights}</p>
        </div>
      </div>
    </footer>
  );
}
