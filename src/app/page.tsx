'use client';

import HeroSection from '@/components/home/HeroSection';
import WhyUsSection from '@/components/home/WhyUsSection';
import ServicesPreview from '@/components/home/ServicesPreview';
import TechSection from '@/components/home/TechSection';
import StatsSection from '@/components/home/StatsSection';
import CoverageSection from '@/components/home/CoverageSection';
import TestimonialsSection from '@/components/home/TestimonialsSection';
import CTASection from '@/components/home/CTASection';
import ImageShowcase from '@/components/home/ImageShowcase';
import ParallaxBanner from '@/components/home/ParallaxBanner';

export default function Home() {
  return (
    <>
      <HeroSection />
      <StatsSection />
      <WhyUsSection />
      <ImageShowcase />
      <ServicesPreview />
      <ParallaxBanner />
      <TechSection />
      <CoverageSection />
      <TestimonialsSection />
      <CTASection />
    </>
  );
}
