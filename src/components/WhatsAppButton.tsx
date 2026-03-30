'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import { useLocale } from '@/lib/locale-context';

const WHATSAPP_NUMBER = '5215510703056';

export default function WhatsAppButton() {
  const [isHovered, setIsHovered] = useState(false);
  const { locale } = useLocale();
  const message = locale === 'es'
    ? 'Hola, me interesa información sobre sus servicios de producción de eventos y congresos médicos.'
    : 'Hello, I am interested in information about your event production and medical congress services.';

  const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;

  return (
    <motion.div
      className="fixed bottom-6 right-6 z-50"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: 1, type: 'spring', stiffness: 200 }}
    >
      <a
        href={url}
        target="_blank"
        rel="noopener noreferrer"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        className="flex items-center gap-3"
      >
        <AnimatePresence>
          {isHovered && (
            <motion.span
              initial={{ opacity: 0, x: 20, scale: 0.8 }}
              animate={{ opacity: 1, x: 0, scale: 1 }}
              exit={{ opacity: 0, x: 20, scale: 0.8 }}
              className="glass-strong px-4 py-2 rounded-full text-sm font-medium text-white whitespace-nowrap"
            >
              {locale === 'es' ? '¡Escríbenos por WhatsApp!' : 'Message us on WhatsApp!'}
            </motion.span>
          )}
        </AnimatePresence>
        <motion.div
          className="w-16 h-16 rounded-full bg-[#25D366] flex items-center justify-center shadow-lg shadow-[#25D366]/30"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          animate={{ boxShadow: ['0 0 20px rgba(37,211,102,0.3)', '0 0 40px rgba(37,211,102,0.5)', '0 0 20px rgba(37,211,102,0.3)'] }}
          transition={{ boxShadow: { duration: 2, repeat: Infinity } }}
        >
          <svg viewBox="0 0 32 32" className="w-8 h-8 fill-white">
            <path d="M16.004 0h-.008C7.174 0 0 7.176 0 16c0 3.5 1.128 6.744 3.046 9.378L1.054 31.29l6.118-1.958A15.914 15.914 0 0016.004 32C24.826 32 32 24.822 32 16S24.826 0 16.004 0zm9.312 22.594c-.39 1.1-1.932 2.014-3.164 2.28-.844.18-1.946.324-5.656-1.216-4.746-1.97-7.8-6.79-8.036-7.104-.226-.314-1.9-2.532-1.9-4.83s1.202-3.428 1.63-3.896c.426-.47 .932-.586 1.242-.586.31 0 .62.002.89.016.286.014.67-.108 1.048.8.39.932 1.326 3.232 1.442 3.466.116.234.194.508.038.82-.156.314-.234.508-.468.784-.234.274-.492.614-.702.824-.234.234-.478.488-.206.958.274.468 1.216 2.006 2.612 3.25 1.794 1.598 3.306 2.094 3.774 2.328.468.234.742.196 1.016-.118.274-.314 1.174-1.37 1.488-1.838.312-.47.626-.39 1.056-.234.43.156 2.726 1.286 3.194 1.52.468.234.78.352.896.546.116.194.116 1.126-.274 2.226z"/>
          </svg>
        </motion.div>
      </a>
    </motion.div>
  );
}
