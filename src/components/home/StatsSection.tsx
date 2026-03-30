'use client';

import { useLocale } from '@/lib/locale-context';
import CounterAnimation from '../CounterAnimation';

export default function StatsSection() {
  const { t } = useLocale();

  return (
    <section className="relative py-20 overflow-hidden">
      {/* Vibrant gradient background */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#1a0f05] via-[#0f1535] to-[#051a18]" />
      {/* Colorful orbs */}
      <div className="absolute top-0 left-1/4 w-64 h-64 rounded-full bg-gold/10 blur-[100px]" />
      <div className="absolute bottom-0 right-1/4 w-64 h-64 rounded-full bg-teal/10 blur-[100px]" />
      {/* Top and bottom borders */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/30 to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-teal/30 to-transparent" />

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          <CounterAnimation end={2000} suffix="+" label={t.stats.events} />
          <CounterAnimation end={24} prefix="<" label={t.stats.response} />
          <CounterAnimation end={100} suffix="%" label={t.stats.satisfaction} />
          <CounterAnimation end={35} suffix="+" label={t.stats.experience} />
        </div>
      </div>
    </section>
  );
}
