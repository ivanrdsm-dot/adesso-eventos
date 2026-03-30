'use client';

import { FadeInUp } from './AnimatedSection';

interface Props {
  title: string;
  highlight: string;
  subtitle?: string;
  centered?: boolean;
}

export default function SectionTitle({ title, highlight, subtitle, centered = true }: Props) {
  return (
    <FadeInUp className={`mb-16 ${centered ? 'text-center' : ''}`}>
      <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
        {title}{' '}
        <span className="text-gradient-gold">{highlight}</span>
      </h2>
      {subtitle && (
        <p className="text-white/50 text-lg max-w-2xl mx-auto">{subtitle}</p>
      )}
      <div className="line-gold w-24 mx-auto mt-6" />
    </FadeInUp>
  );
}
