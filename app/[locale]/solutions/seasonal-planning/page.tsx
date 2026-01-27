'use client';

import React from 'react';
import Image from 'next/image';
import { useTranslations } from 'next-intl';
import { Link } from '@/i18n/routing';
import dynamic from 'next/dynamic';

const Lottie = dynamic(() => import('lottie-react'), { ssr: false });
import packagingAnimation from '@/public/lottie/Packaging for Delivery.json';

export default function SeasonalPlanningPage() {
  const t = useTranslations('Solutions.seasonal-planning');

  return (
    <main className="flex min-h-screen flex-col items-center justify-start bg-white pt-24">
      
      {/* 1. HERO SECTION */}
      <section className="w-full max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-12 items-center py-12 md:py-24 overflow-hidden">
        <div className="space-y-8">
            <div className="text-xs font-bold tracking-widest text-slate-500 uppercase">
                {t('hero.badge')}
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#05152F] leading-tight">
              {t('hero.title')}
            </h1>
            <p className="text-lg text-[#05152F]/70 leading-relaxed">
              {t('hero.description')}
            </p>
            <div className="flex flex-wrap gap-4">
               <Link
                    href="/contact"
                    className="px-8 py-4 rounded-full bg-[#0077B6] text-white font-bold hover:bg-[#005f92] transition-colors shadow-lg"
               >
                   {t('hero.getStarted')}
               </Link>
               <Link
                    href="/contact"
                    className="px-8 py-4 rounded-full bg-white text-[#0077B6] border-2 border-[#0077B6] font-bold hover:bg-blue-50 transition-colors"
               >
                   {t('hero.requestDemo')}
               </Link>
            </div>
        </div>
        <div className="relative flex justify-center items-center">
             {/* Visual */}
             <div className="relative w-full max-w-md aspect-square rounded-full overflow-hidden border-8 border-white shadow-2xl bg-blue-50/50">
                  <div className="absolute inset-0 flex items-center justify-center p-8">
                        <Lottie 
                            animationData={packagingAnimation} 
                            loop={true} 
                            className="w-full h-full"
                        />
                   </div>
                   {/* Floating Chart Card logic removed as Lottie is complex enough */}
            </div>
        </div>
      </section>

      {/* 2. STATS SECTION (Circles) */}
      <section className="w-full bg-white py-16 text-center">
            <h2 className="text-2xl md:text-3xl font-bold text-[#05152F] mb-12 max-w-3xl mx-auto">
                 {t('stats.title')}
            </h2>
            <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-12">
                {/* Stat 1 */}
                <div className="flex flex-col items-center">
                    <div className="relative w-48 h-48 flex items-center justify-center mb-6">
                        <svg className="w-full h-full transform -rotate-90">
                            <circle cx="96" cy="96" r="80" stroke="#EAF4F9" strokeWidth="16" fill="transparent" />
                            <circle cx="96" cy="96" r="80" stroke="#0077B6" strokeWidth="16" fill="transparent" strokeDasharray="502" strokeDashoffset="0" />
                        </svg>
                        <span className="absolute text-4xl font-bold text-[#05152F]">{t('stats.accuracy.value')}</span>
                    </div>
                    <p className="text-[#05152F] font-bold">{t('stats.accuracy.label')}</p>
                </div>

                {/* Stat 2 */}
                <div className="flex flex-col items-center">
                    <div className="relative w-48 h-48 flex items-center justify-center mb-6">
                         <svg className="w-full h-full transform -rotate-90">
                            <circle cx="96" cy="96" r="80" stroke="#EAF4F9" strokeWidth="16" fill="transparent" />
                            <circle cx="96" cy="96" r="80" stroke="#FDB955" strokeWidth="16" fill="transparent" strokeDasharray="502" strokeDashoffset="281" />
                        </svg>
                        <span className="absolute text-4xl font-bold text-[#05152F]">{t('stats.reduction.value')}</span>
                    </div>
                    <p className="text-[#05152F] font-bold">{t('stats.reduction.label')}</p>
                </div>

                {/* Stat 3 */}
                <div className="flex flex-col items-center">
                    <div className="relative w-48 h-48 flex items-center justify-center mb-6">
                        <svg className="w-full h-full transform -rotate-90">
                            <circle cx="96" cy="96" r="80" stroke="#EAF4F9" strokeWidth="16" fill="transparent" />
                            <circle cx="96" cy="96" r="80" stroke="#0077B6" strokeWidth="16" fill="transparent" strokeDasharray="502" strokeDashoffset="125" />
                        </svg>
                        <span className="absolute text-4xl font-bold text-[#05152F]">{t('stats.timeSaved.value')}</span>
                    </div>
                    <p className="text-[#05152F] font-bold">{t('stats.timeSaved.label')}</p>
                </div>
            </div>
      </section>

      {/* 3. OPTIMIZATION FEATURE (Left Image, Right Text) */}
      <section className="w-full py-24 bg-white relative overflow-hidden">
        {/* Background blobs */}
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-50 rounded-full blur-3xl opacity-50 -z-10" />

        <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
             <div className="relative">
                 <div className="rounded-[40px] overflow-hidden shadow-2xl border-8 border-white relative z-10">
                     <Image src="/vectors/3.svg" alt="Clearance" width={600} height={500} className="w-full h-auto bg-slate-50" />
                 </div>
                 {/* Floating circular element */}
                 <div className="absolute -bottom-10 -right-10 w-32 h-32 bg-white rounded-full flex items-center justify-center shadow-xl z-20">
                     <div className="text-center">
                         <div className="text-2xl font-bold text-blue-600">AI</div>
                         <div className="text-xs text-slate-500">Optimized</div>
                     </div>
                 </div>
             </div>
             
             <div className="space-y-6">
                 <h2 className="text-3xl font-bold text-[#05152F] leading-tight">
                    {t('optimization.title')}
                 </h2>
                 <p className="text-[#05152F]/70 text-lg">
                     {t('optimization.description')}
                 </p>
                 <Link href="/contact" className="text-blue-600 font-bold hover:underline flex items-center gap-2">
                     {t('optimization.learnMore')} <span>→</span>
                 </Link>
             </div>
        </div>
      </section>

      {/* 4. RELEX/AI FEATURE (Center Focus) */}
      <section className="w-full bg-[#f8fbfe] py-24">
          <div className="max-w-7xl mx-auto px-4 text-center mb-16">
              <div className="text-sm font-bold text-blue-600 mb-2 uppercase tracking-wider">{t('featureHighlight.badge')}</div>
              <h2 className="text-3xl md:text-4xl font-bold text-[#05152F]">
                  {t('featureHighlight.title')}
              </h2>
          </div>
          
          <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
              <div className="bg-white p-8 rounded-3xl shadow-lg border border-slate-100">
                   <div className="flex items-center gap-4 mb-6 border-b border-slate-100 pb-4">
                       <div className="w-3 h-3 rounded-full bg-red-400" />
                       <div className="w-3 h-3 rounded-full bg-yellow-400" />
                       <div className="w-3 h-3 rounded-full bg-green-400" />
                       <span className="text-sm font-bold text-slate-400 ml-auto">{t('featureHighlight.dashboardTitle')}</span>
                   </div>
                   {/* Simplified Chart Visual */}
                   <div className="relative h-64 w-full">
                       <svg viewBox="0 0 100 50" className="w-full h-full overflow-visible">
                           {/* Grid lines */}
                           <line x1="0" y1="10" x2="100" y2="10" stroke="#f1f5f9" strokeWidth="0.5" />
                           <line x1="0" y1="30" x2="100" y2="30" stroke="#f1f5f9" strokeWidth="0.5" />
                           <line x1="0" y1="50" x2="100" y2="50" stroke="#f1f5f9" strokeWidth="0.5" />
                           
                           {/* Lines */}
                           <path d="M0,45 Q20,40 40,30 T80,10 T100,5" fill="none" stroke="#22c55e" strokeWidth="1" />
                           <path d="M0,10 Q30,20 50,35 T100,48" fill="none" stroke="#ef4444" strokeWidth="1" strokeDasharray="1,1" />
                       </svg>
                       <div className="absolute bottom-4 left-4 bg-white/90 p-2 rounded shadow text-xs">
                           <span className="text-green-600 font-bold">↑ Optimized</span>
                       </div>
                   </div>
              </div>

              <div className="space-y-8 text-left">
                   <div className="flex gap-4">
                       <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center shrink-0">
                           <div className="w-6 h-6 bg-blue-500 rounded-sm" />
                       </div>
                       <div>
                           <h3 className="text-xl font-bold text-[#05152F]">{t('featureHighlight.automated.title')}</h3>
                           <p className="text-[#05152F]/70">{t('featureHighlight.automated.desc')}</p>
                       </div>
                   </div>
                   <div className="flex gap-4">
                       <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center shrink-0">
                           <div className="w-6 h-6 bg-blue-500 rounded-sm" />
                       </div>
                       <div>
                           <h3 className="text-xl font-bold text-[#05152F]">{t('featureHighlight.margin.title')}</h3>
                           <p className="text-[#05152F]/70">{t('featureHighlight.margin.desc')}</p>
                       </div>
                   </div>
                   <div className="flex gap-4">
                       <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center shrink-0">
                           <div className="w-6 h-6 bg-blue-500 rounded-sm" />
                       </div>
                       <div>
                           <h3 className="text-xl font-bold text-[#05152F]">{t('featureHighlight.stock.title')}</h3>
                           <p className="text-[#05152F]/70">{t('featureHighlight.stock.desc')}</p>
                       </div>
                   </div>
              </div>
          </div>
      </section>
      
      {/* 5. GRID FEATURES (Proactively Identify) */}
      <section className="w-full bg-white py-24">
          <div className="max-w-7xl mx-auto px-4">
               <h2 className="text-3xl font-bold text-[#05152F] text-center mb-16">
                   {t('grid.title')}
               </h2>
               
               <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                   {[0, 1, 2, 3, 4, 5].map((i) => (
                       <div key={i} className="flex gap-6 p-6 rounded-2xl border border-slate-100 hover:shadow-md transition-shadow">
                           <div className="w-12 h-12 rounded-xl bg-blue-50 flex items-center justify-center shrink-0 text-blue-600">
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                                    <polyline points="22 4 12 14.01 9 11.01"></polyline>
                                </svg>
                           </div>
                           <div>
                               <h3 className="text-lg font-bold text-[#05152F] mb-2">{t(`grid.items.${i}.title`)}</h3>
                               <p className="text-[#05152F]/70 text-sm leading-relaxed">{t(`grid.items.${i}.desc`)}</p>
                           </div>
                       </div>
                   ))}
               </div>
          </div>
      </section>

      {/* 6. BLUE WAVE (Custom without specific content) */}
      <section className="w-full relative overflow-hidden bg-gradient-to-r from-[#05152F] to-[#1e3a66] py-24 text-white">
             {/* Abstract background shapes */}
            <div className="absolute top-0 right-0 w-full h-full opacity-10">
                <div className="absolute top-[-50%] right-[-20%] w-[80%] h-[200%] bg-blue-400 rounded-full blur-[100px]" />
                <div className="absolute bottom-[-20%] left-[-10%] w-[60%] h-[100%] bg-indigo-500 rounded-full blur-[80px]" />
            </div>

            <div className="max-w-4xl mx-auto px-4 relative z-10 text-center space-y-8">
                  <h2 className="text-3xl md:text-4xl font-bold">
                      {t('cta.title')}
                  </h2>
                   <p className="text-blue-100/80 text-lg max-w-2xl mx-auto">
                      {t('cta.description')}
                  </p>
                  <div className="flex justify-center gap-4 pt-4">
                        <Link
                            href="/contact"
                            className="bg-white text-[#05152F] px-8 py-3 rounded-full font-bold hover:bg-slate-100 transition-colors shadow-lg"
                        >
                            {t('cta.button')}
                        </Link>
                     </div>
            </div>
      </section>

    </main>
  );
}
