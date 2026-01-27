'use client';

import { useTranslations } from 'next-intl';
import { Link, AppPath } from '@/i18n/routing';
import Image from 'next/image';
import dynamic from 'next/dynamic';

const Lottie = dynamic(() => import('lottie-react'), { ssr: false });
import shoppingAnimation from '@/public/lottie/Ecommerce shopping lottie animation.json';

const featuresPayload = [
  {
    id: 'demandForecasting',
    ctaLink: '/solutions/demand-forecasting',
    illustration: '/vectors/feature-1.svg',
    reverse: false,
    icon: '📊' 
  },
  {
    id: 'pricingPromotion',
    ctaLink: '/solutions/pricing-promotion',
    illustration: '/vectors/feature-2.svg',
    reverse: true,
    icon: '🏷️'
  },
  {
    id: 'inventoryPlanning',
    ctaLink: '/solutions/end-to-end-inventory-planning',
    illustration: '/vectors/feature-4.svg',
    reverse: false,
    icon: '📦'
  },
  {
    id: 'seasonalPlanning',
    ctaLink: '/solutions/seasonal-planning',
    illustration: '/vectors/feature-3.svg',
    reverse: true,
    icon: '🗓️'
  }
];

export default function FeatureSection() {
  const t = useTranslations('Features');

  return (
    <section className='w-full bg-white py-16 md:py-24'>
      <div className='container mx-auto px-4 md:px-6 space-y-24'>
        {featuresPayload.map((section) => (
          <div
            key={section.id}
            className={`flex flex-col gap-12 items-center ${
              section.reverse ? 'md:flex-row-reverse' : 'md:flex-row'
            }`}
          >
            <div className='flex-1 space-y-6 relative z-10'>
              <h2 className='text-3xl md:text-4xl font-bold text-[#05152F] font-sans'>
                {t(`${section.id}.title`)}
              </h2>
              <p className='text-lg text-[#05152F]/80 leading-relaxed font-figtree'>
                {t(`${section.id}.description`)}
              </p>
              <div>
                <Link
                  href={section.ctaLink as AppPath}
                  className='inline-flex items-center justify-center rounded-full bg-[#FDB955] px-8 py-3 text-sm font-bold text-[#05152F] transition-all hover:bg-[#e0a844] hover:shadow-md'
                >
                  {t(`${section.id}.ctaText`)}
                </Link>
              </div>
            </div>
            <div className='flex-1 w-full'>
              <div className='aspect-video relative rounded-2xl overflow-hidden bg-[#EAF4F9] shadow-lg flex items-center justify-center group hover:shadow-xl transition-all'>
                 {/* Placeholder for service visuals - using icons or simple text for now */}
                 {section.id === 'pricingPromotion' ? (
                    <div className="w-full h-full p-4">
                        <Lottie animationData={shoppingAnimation} loop={true} className="w-full h-full" />
                    </div>
                 ) : section.illustration ? (
                    <Image 
                      src={section.illustration} 
                      alt={t(`${section.id}.title`)}
                      fill
                      className="object-contain p-8 transform group-hover:scale-105 transition-transform duration-500" 
                    />
                 ) : (
                    <span className='text-6xl'>{section.icon}</span>
                 )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
