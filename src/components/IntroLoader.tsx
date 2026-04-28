'use client';

import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import { useEffect, useState } from 'react';

const SESSION_KEY = 'adesso-intro-shown';

export default function IntroLoader() {
  const [show, setShow] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    if (typeof window === 'undefined') return;

    const alreadyShown = sessionStorage.getItem(SESSION_KEY);
    if (alreadyShown) return;

    setShow(true);
    document.body.style.overflow = 'hidden';

    const timer = setTimeout(() => {
      setShow(false);
      sessionStorage.setItem(SESSION_KEY, '1');
      document.body.style.overflow = '';
    }, 2400);

    return () => {
      clearTimeout(timer);
      document.body.style.overflow = '';
    };
  }, []);

  if (!mounted) return null;

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          className="fixed inset-0 z-[200] flex items-center justify-center bg-[#09090b]"
          initial={{ opacity: 1 }}
          exit={{
            opacity: 0,
            transition: { duration: 0.8, ease: 'easeInOut' },
          }}
        >
          {/* Background gradient orbs */}
          <motion.div
            className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full bg-gold/10 blur-[120px]"
            animate={{ scale: [1, 1.2, 1], opacity: [0.4, 0.7, 0.4] }}
            transition={{ duration: 2.4, ease: 'easeInOut' }}
          />
          <motion.div
            className="absolute bottom-1/4 right-1/4 w-96 h-96 rounded-full bg-gold/8 blur-[120px]"
            animate={{ scale: [1, 1.3, 1], opacity: [0.3, 0.6, 0.3] }}
            transition={{ duration: 2.4, ease: 'easeInOut', delay: 0.3 }}
          />

          {/* Logo container */}
          <div className="relative flex flex-col items-center">
            {/* Logo with reveal */}
            <motion.div
              initial={{ scale: 0.3, opacity: 0, rotate: -10 }}
              animate={{
                scale: 1,
                opacity: 1,
                rotate: 0,
              }}
              transition={{
                duration: 1,
                ease: [0.25, 0.46, 0.45, 0.94],
              }}
              className="relative"
            >
              {/* Pulsing glow behind */}
              <motion.div
                className="absolute inset-0 bg-gold/30 blur-[60px] rounded-full"
                animate={{ opacity: [0.4, 0.8, 0.4] }}
                transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut' }}
              />
              <Image
                src="/adesso-logo-full.webp"
                alt="ADESSO Eventos"
                width={300}
                height={450}
                priority
                className="relative w-48 md:w-64 h-auto object-contain drop-shadow-[0_0_30px_rgba(201,168,76,0.4)]"
              />
            </motion.div>

            {/* Loading bar */}
            <motion.div
              className="mt-8 w-48 h-px bg-white/10 overflow-hidden rounded-full"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6, duration: 0.4 }}
            >
              <motion.div
                className="h-full bg-gradient-to-r from-transparent via-gold to-transparent"
                initial={{ x: '-100%' }}
                animate={{ x: '100%' }}
                transition={{ duration: 1.5, delay: 0.6, ease: 'easeInOut' }}
              />
            </motion.div>

            {/* Tagline */}
            <motion.p
              className="mt-4 text-white/40 text-xs uppercase tracking-[0.3em] font-light"
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.9, duration: 0.6 }}
            >
              +35 Años de Excelencia
            </motion.p>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
