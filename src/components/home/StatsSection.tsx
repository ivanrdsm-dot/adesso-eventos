'use client';

import { useLocale } from '@/lib/locale-context';
import CounterAnimation from '../CounterAnimation';

export default function StatsSection() {
  const { t } = useLocale();

  return (
    <section className="relative py-20 bg-dark-surface overflow-hidden">
      <div className="absolute inset-0 noise-overlay" />
      <div className="absolute inset-0 bg-gradient-to-r from-gold/5 via-transparent to-teal/5" />

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
