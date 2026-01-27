'use client';
import Link from 'next/link';
import { useTranslations } from 'next-intl';
import dynamic from 'next/dynamic';
import { AppPath } from '@/i18n/routing';

const Lottie = dynamic(() => import('lottie-react'), { ssr: false });
import shoppingAnimation from '@/public/lottie/Ecommerce shopping lottie animation.json';

export default function Hero() {
  const t = useTranslations('Hero');

  return (
    <section className='curved-border--bottom has-background relative w-full min-h-[600px] overflow-hidden bg-[#EAF4F9] pt-28 md:pt-32 pb-20 flex flex-col justify-center'>
      {/* Background blobs */}
      <div className='pointer-events-none absolute inset-0'>
        <div className='absolute -left-40 bottom-[-120px] h-[320px] w-[360px] rounded-[55%] bg-linear-to-tr from-blue to-[#7fb7ff] opacity-70' />
        <div className='absolute -right-40 top-[-80px] h-[380px] w-[420px] rounded-[55%] bg-linear-to-bl from-blue to-[#7fb7ff] opacity-60' />
      </div>

      <div className='container relative mx-auto px-4 md:px-6 z-10 flex flex-col md:flex-row items-center gap-12'>
        {/* Left: Content */}
        <div className='flex-1 text-center md:text-left'>
          <h1 className='font-figtree font-sans text-navy text-3xl font-bold sm:text-4xl md:text-[40px] lg:text-[53px] leading-tight'>
            {t('title')}
            <br />
            <span className='text-[#0052cc]'>{t('titleSub')}</span>
          </h1>
          <p className='mt-6 text-base text-[#0a3256] text-[18px] max-w-2xl mx-auto md:mx-0'>
            {t('description')}
          </p>
          <div className='mt-8 flex flex-col items-center md:items-start md:flex-row gap-4'>
            <Link
              href={'/contact' as AppPath}
              className='inline-flex h-12 items-center text-[18px] justify-center rounded-full bg-[#FDB955] px-8 text-sm font-semibold text-[#05152F] shadow-sm transition hover:bg-[#e0a844] md:px-10'
            >
              {t('ctaText')}
            </Link>
            <Link
              href={'/about' as AppPath}
              className='inline-flex h-12 items-center text-[18px] justify-center rounded-full border-2 border-[#05152F]/20 bg-white/50 px-8 text-sm font-bold text-[#05152F] shadow-sm transition hover:bg-white hover:border-[#05152F] md:px-10'
            >
              {t('secondaryCtaText')}
            </Link>
          </div>
        </div>

        {/* Right: Lottie Animation (Shopping Context) */}
        <div className='flex-1 w-full max-w-[500px] flex justify-center items-center'>
            {/* The animation file is: Ecommerce shopping lottie animation.json */}
            <Lottie 
                animationData={shoppingAnimation} 
                loop={true} 
                className="w-full h-auto drop-shadow-xl"
            />
        </div>
      </div>
    </section>
  );
}
