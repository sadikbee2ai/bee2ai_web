'use client';

import React from 'react';
import Image from 'next/image';
import Lottie from 'lottie-react';
import graphAnimation from '@/public/lotties/graph.json';
import { useTranslations } from 'next-intl';
import { Link } from '@/i18n/routing';

export default function DemandForecastingPage() {
  const t = useTranslations('DemandForecasting');

  return (
    <main className="flex min-h-screen flex-col items-center justify-start bg-white pt-24">
      
      {/* 1. HERO SECTION */}
      <section className="relative w-full max-w-7xl mx-auto px-4 md:px-8 pt-10 pb-20 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center overflow-hidden">
        {/* Text Content */}
        <div className="space-y-6 z-10">
          <div className="inline-block px-3 py-1 rounded-full bg-blue-50 text-[#6388A8] text-sm font-semibold mb-2">
            {t('hero.badge')}
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#05152F] leading-tight">
            {t.rich('hero.title', {
                highlight: (chunks) => <span className="text-[#6388A8]">{chunks}</span>
            })}
          </h1>
          <p className="text-lg text-[#05152F]/70 leading-relaxed max-w-lg">
            {t('hero.description')}
          </p>
          <div className="flex gap-4 pt-4">
             <Link
              href="/contact"
              className="inline-flex items-center justify-center h-12 px-8 rounded-full bg-[#05152F] text-white font-bold transition-transform hover:scale-105 shadow-lg"
            >
              {t('hero.getStarted')}
            </Link>
             <a 
              href="#features"
              className="inline-flex items-center justify-center h-12 px-8 rounded-full border-2 border-[#EAF4F9] text-[#05152F] font-bold hover:bg-[#EAF4F9] transition-colors"
            >
              {t('hero.learnMore')}
            </a>
          </div>
        </div>

        {/* Visual Content */}
        <div className="relative z-10">
            {/* Abstract Background Blob */}
             <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-[#EAF4F9] rounded-full opacity-60 blur-3xl -z-10" />
             
             {/* Main Image/Lottie */}
             <div className="relative bg-white rounded-2xl shadow-xl border border-slate-100 p-2 transform rotate-1 hover:rotate-0 transition-transform duration-500">
                <Lottie animationData={graphAnimation} loop={true} className="w-full h-auto" />
             </div>
             
             {/* Floating Badge */}
             <div className="absolute -bottom-6 -left-6 bg-white p-4 rounded-xl shadow-lg border border-slate-50 flex items-center gap-3 animate-float-slow">
                <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center text-green-600 font-bold">
                    {t('hero.accuracy.value')}
                </div>
                <div>
                    <div className="text-xs text-gray-500">{t('hero.accuracy.label')}</div>
                    <div className="text-sm font-bold text-[#05152F]">{t('hero.accuracy.status')}</div>
                </div>
             </div>
        </div>
      </section>

      {/* 2. STATS SECTION */}
      <section className="w-full bg-white py-20">
        <div className="max-w-7xl mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold text-[#05152F] mb-16">{t('stats.title')}</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {/* Stat 1 */}
                <div className="flex flex-col items-center group">
                    <div className="relative w-40 h-40 flex items-center justify-center mb-6">
                        <svg className="w-full h-full transform -rotate-90">
                            <circle cx="80" cy="80" r="70" stroke="#EAF4F9" strokeWidth="12" fill="transparent" />
                            <circle cx="80" cy="80" r="70" stroke="#6388A8" strokeWidth="12" fill="transparent" strokeDasharray="440" strokeDashoffset="100" className="transition-all duration-1000 ease-out group-hover:stroke-[#05152F]" />
                        </svg>
                        <span className="absolute text-3xl font-bold text-[#05152F]">{t('stats.accuracy.value')}</span>
                    </div>
                    <p className="text-[#05152F] font-semibold text-lg">{t('stats.accuracy.label')}</p>
                </div>

                 {/* Stat 2 */}
                 <div className="flex flex-col items-center group">
                    <div className="relative w-40 h-40 flex items-center justify-center mb-6">
                        <svg className="w-full h-full transform -rotate-90">
                            <circle cx="80" cy="80" r="70" stroke="#EAF4F9" strokeWidth="12" fill="transparent" />
                            {/* Adjusted offset to 240 (~45% fill) to match visual request (extended to ~5 o'clock) */}
                            <circle cx="80" cy="80" r="70" stroke="#FDB955" strokeWidth="12" fill="transparent" strokeDasharray="440" strokeDashoffset="300" className="transition-all duration-1000 ease-out" />
                        </svg>
                        <span className="absolute text-3xl font-bold text-[#05152F]">{t('stats.stockOuts.value')}</span>
                    </div>
                    <p className="text-[#05152F] font-semibold text-lg">{t('stats.stockOuts.label')}</p>
                </div>

                 {/* Stat 3 */}
                 <div className="flex flex-col items-center group">
                    <div className="relative w-40 h-40 flex items-center justify-center mb-6">
                        <svg className="w-full h-full transform -rotate-90">
                            <circle cx="80" cy="80" r="70" stroke="#EAF4F9" strokeWidth="12" fill="transparent" />
                            {/* Adjusted offset to 198 (~55% fill) to match visual request (extended to ~5 o'clock) */}
                            <circle cx="80" cy="80" r="70" stroke="#05152F" strokeWidth="12" fill="transparent" strokeDasharray="440" strokeDashoffset="250" className="transition-all duration-1000 ease-out" />
                        </svg>
                        <span className="absolute text-3xl font-bold text-[#05152F]">{t('stats.spoilage.value')}</span>
                    </div>
                    <p className="text-[#05152F] font-semibold text-lg">{t('stats.spoilage.label')}</p>
                </div>
            </div>
        </div>
      </section>

      {/* 3. DASHBOARD HIGHLIGHT */}
      <section className="w-full bg-[#FAFCFE] py-24 overflow-hidden" id="features">
         <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Visual */}
            <div className="order-2 lg:order-1 relative">
                <div className="bg-white rounded-2xl shadow-xl border border-slate-100 p-4 transition-transform hover:scale-[1.02] duration-500">
                    <div className="flex items-center gap-2 mb-4 border-b border-gray-100 pb-2">
                         <div className="w-3 h-3 rounded-full bg-red-400" />
                         <div className="w-3 h-3 rounded-full bg-yellow-400" />
                         <div className="w-3 h-3 rounded-full bg-green-400" />
                    </div>
                    {/* Replaced Lottie with requested Image */}
                    <Image 
                        src="/vectors/10.svg" 
                        alt="Demand Planning Dashboard" 
                        width={600} 
                        height={400} 
                        className="w-full h-auto"
                    />
                </div>
                 {/* Decorative Elements */}
                 <div className="absolute -z-10 top-10 -left-10 w-24 h-24 bg-blue-100 rounded-full blur-xl" />
                 <div className="absolute -z-10 bottom-10 -right-10 w-32 h-32 bg-yellow-50 rounded-full blur-xl" />
            </div>

            {/* Content */}
             <div className="order-1 lg:order-2 space-y-6">
                 <h2 className="text-3xl md:text-4xl font-bold text-[#05152F]">
                    {t('dashboard.title')}
                </h2>
                <div className="prose prose-lg text-[#05152F]/70">
                    <p>
                        {t('dashboard.description')}
                    </p>
                    <ul className="space-y-4 pt-4 list-none pl-0">
                        {['0', '1', '2'].map((key) => (
                            <li key={key} className="flex items-center gap-3">
                                <span className="flex-shrink-0 w-6 h-6 rounded-full bg-[#EAF4F9] flex items-center justify-center text-[#6388A8]">✓</span>
                                {t(`dashboard.features.${key}`)}
                            </li>
                        ))}
                    </ul>
                </div>
             </div>
         </div>
      </section>

      {/* 4. SMARTER PLANNING TAB SECTION */}
      <section className="w-full bg-white py-24">
         <div className="max-w-7xl mx-auto px-4 relative z-10">
             <div className="text-center mb-16">
                 <h2 className="text-3xl md:text-4xl font-bold text-[#05152F]">{t('smarterPlanning.title')}</h2>
                 <p className="mt-4 text-lg text-[#05152F]/60">{t('smarterPlanning.subtitle')}</p>
             </div>

             <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                 {/* Card 1 */}
                 <div className="p-8 rounded-2xl bg-white border border-slate-100 shadow-lg hover:shadow-xl transition-all group">
                     <div className="w-14 h-14 rounded-xl bg-blue-50 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                        <svg className="w-8 h-8 text-[#6388A8]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                           <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                        </svg>
                     </div>
                     <h3 className="text-xl font-bold text-[#05152F] mb-3">{t('smarterPlanning.cards.pattern.title')}</h3>
                     <p className="text-[#05152F]/70">
                         {t('smarterPlanning.cards.pattern.desc')}
                     </p>
                 </div>

                  {/* Card 2 */}
                  <div className="p-8 rounded-2xl bg-white border border-slate-100 shadow-lg hover:shadow-xl transition-all group">
                     <div className="w-14 h-14 rounded-xl bg-yellow-50 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                        <svg className="w-8 h-8 text-[#FDB955]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                           <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.384-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                        </svg>
                     </div>
                     <h3 className="text-xl font-bold text-[#05152F] mb-3">{t('smarterPlanning.cards.probabilistic.title')}</h3>
                     <p className="text-[#05152F]/70">
                         {t('smarterPlanning.cards.probabilistic.desc')}
                     </p>
                 </div>

                  {/* Card 3 */}
                  <div className="p-8 rounded-2xl bg-white border border-slate-100 shadow-lg hover:shadow-xl transition-all group">
                     <div className="w-14 h-14 rounded-xl bg-indigo-50 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                        <svg className="w-8 h-8 text-[#05152F]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                           <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                        </svg>
                     </div>
                     <h3 className="text-xl font-bold text-[#05152F] mb-3">{t('smarterPlanning.cards.anomaly.title')}</h3>
                     <p className="text-[#05152F]/70">
                         {t('smarterPlanning.cards.anomaly.desc')}
                     </p>
                 </div>
             </div>
         </div>
      </section>

      {/* 5. BLUE CTA SECTION */}
      <section className="w-full relative overflow-hidden bg-[#05152F] py-24 text-center">
         <div className="absolute top-0 left-0 w-full h-full opacity-20">
             <div className="absolute top-[-50%] left-[-20%] w-[80%] h-[200%] bg-blue-500 rounded-full blur-[100px]" />
         </div>
         <div className="max-w-4xl mx-auto relative z-10 px-4">
             <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
                 {t('cta.title')}
             </h2>
             <p className="text-xl text-blue-100/80 mb-10 leading-relaxed">
                 {t('cta.description')}
             </p>
             <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center h-14 px-8 rounded-full bg-[#FDB955] text-[#05152F] font-bold text-lg hover:bg-[#FAB040] transition-all shadow-lg hover:scale-105"
                >
                  {t('cta.bookDemo')}
                </Link>
                <Link
                  href="/solutions/pricing-promotion"
                  className="inline-flex items-center justify-center h-14 px-8 rounded-full bg-transparent border-2 border-white/20 text-white font-bold text-lg hover:bg-white/10 transition-all"
                >
                  {t('cta.explore')}
                </Link>
             </div>
         </div>
      </section>

    </main>
  );
}
