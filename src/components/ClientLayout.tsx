'use client';

import { LocaleProvider } from '@/lib/locale-context';
import Navbar from './Navbar';
import Footer from './Footer';
import WhatsAppButton from './WhatsAppButton';
import IntroLoader from './IntroLoader';
import ScrollProgress from './ScrollProgress';
import BackToTop from './BackToTop';
import { ReactNode } from 'react';

export default function ClientLayout({ children }: { children: ReactNode }) {
  return (
    <LocaleProvider>
      <IntroLoader />
      <ScrollProgress />
      <Navbar />
      <main className="flex-1">{children}</main>
      <Footer />
      <WhatsAppButton />
      <BackToTop />
    </LocaleProvider>
  );
}
