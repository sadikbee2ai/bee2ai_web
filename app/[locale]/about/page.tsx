'use client';

import React from 'react';
import Image from 'next/image';
import { useTranslations } from 'next-intl';
import { Link } from '@/i18n/routing';
import dynamic from 'next/dynamic';

const Lottie = dynamic(() => import('lottie-react'), { ssr: false });
import animationData from '@/components/lotties/data-animation.json';
import connectionAnimation from '@/public/lottie/E-commerce connection.json';

export default function AboutPage() {
  const t = useTranslations('About');

  return (
    <main className="flex min-h-screen flex-col items-center justify-start bg-white pt-24">
      
      {/* 1. HERO SECTION */}
      <section className="w-full max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-12 items-center py-16 md:py-24">
        <div className="space-y-6">
            <h1 className="text-4xl md:text-6xl font-bold text-[#05152F] leading-tight">
              {t('Hero.title')} <br/>
              <span className="text-[#6388A8]">{t('Hero.titleAccent')}</span>
            </h1>
             <p className="text-lg text-[#05152F]/70 leading-relaxed max-w-lg">
              {t('Hero.description')}
            </p>
             <div className="flex flex-wrap gap-4 pt-4">
               <Link
                    href="/contact"
                    className="px-8 py-3 rounded-full bg-white text-[#05152F] border-2 border-[#E5E7EB] font-bold hover:bg-slate-50 transition-colors"
               >
                   {t('Hero.contactUs')}
               </Link>
               <Link
                    href="/contact"
                    className="px-8 py-3 rounded-full bg-[#0077B6] text-white font-bold hover:bg-[#005f92] transition-colors shadow-lg"
               >
                   {t('Hero.requestDemo')}
               </Link>
            </div>
        </div>
        <div className="relative flex justify-center items-center">
             {/* Visual Placeholder for Hero Image */}
             <div className="relative w-full max-w-lg aspect-[4/3] rounded-[3rem] overflow-hidden bg-slate-100 shadow-2xl">
                 <div className="absolute inset-0 bg-gradient-to-tr from-blue-100 to-white flex items-center justify-center">
                      {/* You can replace this with a real team/office image */}
                      <Image 
                        src="/vectors/1.svg" 
                        alt="Team working" 
                        width={400} 
                        height={400} 
                        className="opacity-20"
                      />
                 </div>
                 {/* Floating circular cards */}
                 <div className="absolute top-8 left-8 p-4 bg-white rounded-2xl shadow-lg border border-slate-100 animate-float-slow">
                     <div className="flex items-center gap-3">
                         <div className="w-10 h-10 bg-red-100 rounded-full flex items-center justify-center text-red-500 font-bold">%</div>
                         <div>
                             <div className="text-xs text-slate-500">{t('Hero.stats.waste')}</div>
                             <div className="font-bold text-[#05152F]">-40%</div>
                         </div>
                     </div>
                 </div>
                 <div className="absolute bottom-12 right-12 p-4 bg-[#05152F] rounded-2xl shadow-lg animate-float-medium">
                     <div className="flex items-center gap-3">
                         <div className="w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center text-white font-bold">AI</div>
                         <div className="text-white">
                             <div className="text-xs text-white/70">{t('Hero.stats.accuracy')}</div>
                             <div className="font-bold">99.1%</div>
                         </div>
                     </div>
                 </div>
            </div>
        </div>
      </section>

      {/* 2. SUSTAINABILITY HIGHLIGHT */}
      <section className="w-full bg-white py-20 text-center">
          <div className="max-w-4xl mx-auto px-4 mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-[#05152F] mb-6">
                 {t('Sustainability.title')}
              </h2>
              <p className="text-[#05152F]/70">
                  {t('Sustainability.description')}
              </p>
          </div>
          
           {/* Stats Row (Reusing style from Seasonal Planning) */}
            <div className="max-w-5xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8">
                {/* Stat 1 */}
                <div className="flex flex-col items-center">
                    <div className="relative w-32 h-32 flex items-center justify-center mb-4">
                        <svg className="w-full h-full transform -rotate-90">
                            <circle cx="64" cy="64" r="56" stroke="#EAF4F9" strokeWidth="8" fill="transparent" />
                            <circle cx="64" cy="64" r="56" stroke="#0077B6" strokeWidth="8" fill="transparent" strokeDasharray="351" strokeDashoffset="0" />
                        </svg>
                        <span className="absolute text-2xl font-bold text-[#05152F]">100%</span>
                    </div>
                    <p className="text-[#05152F] font-bold text-sm">{t('Sustainability.forecastAccuracy')}</p>
                </div>

                {/* Stat 2 */}
                <div className="flex flex-col items-center">
                    <div className="relative w-32 h-32 flex items-center justify-center mb-4">
                         <svg className="w-full h-full transform -rotate-90">
                            <circle cx="64" cy="64" r="56" stroke="#EAF4F9" strokeWidth="8" fill="transparent" />
                            <circle cx="64" cy="64" r="56" stroke="#FDB955" strokeWidth="8" fill="transparent" strokeDasharray="351" strokeDashoffset="100" />
                        </svg>
                        <span className="absolute text-2xl font-bold text-[#05152F]">30%</span>
                    </div>
                    <p className="text-[#05152F] font-bold text-sm">{t('Sustainability.inventoryReduction')}</p>
                </div>

                {/* Stat 3 */}
                <div className="flex flex-col items-center">
                    <div className="relative w-32 h-32 flex items-center justify-center mb-4">
                        <svg className="w-full h-full transform -rotate-90">
                            <circle cx="64" cy="64" r="56" stroke="#EAF4F9" strokeWidth="8" fill="transparent" />
                            <circle cx="64" cy="64" r="56" stroke="#0077B6" strokeWidth="8" fill="transparent" strokeDasharray="351" strokeDashoffset="75" />
                        </svg>
                        <span className="absolute text-2xl font-bold text-[#05152F]">40%</span>
                    </div>
                    <p className="text-[#05152F] font-bold text-sm">{t('Sustainability.wasteReduction')}</p>
                </div>
            </div>
      </section>

      {/* 3. LAPTOP FEATURE (Credit for predicted inventory) */}
      <section className="w-full bg-[#FAFCFE] py-24">
          <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div className="space-y-6">
                  <h2 className="text-3xl font-bold text-[#05152F]">
                      {t('Laptop.title')}
                  </h2>
                  <p className="text-[#05152F]/70 text-lg">
                      {t('Laptop.description')}
                  </p>
                   <ul className="space-y-3 pt-4">
                       {[t('Laptop.features.replenishment'), t('Laptop.features.optimization'), t('Laptop.features.dataDriven')].map((item, i) => (
                           <li key={i} className="flex items-center gap-3">
                               <div className="w-5 h-5 rounded-full bg-green-100 flex items-center justify-center text-green-600 text-xs">✓</div>
                               <span className="text-[#05152F] font-medium">{item}</span>
                           </li>
                       ))}
                   </ul>
              </div>
              <div className="relative">
                   {/* Laptop Placeholder */}
                   <div className="w-full aspect-[16/10] bg-white rounded-xl shadow-2xl border-4 border-slate-200 flex items-center justify-center p-2 relative overflow-hidden">
                        <Lottie animationData={animationData} loop={true} className="w-full h-full" />
                   </div>
              </div>
          </div>
      </section>

      {/* 4. TEAM SECTION */}
      <section className="w-full bg-white py-24">
         <div className="max-w-7xl mx-auto px-4">
             <div className="text-center mb-16">
                 <h2 className="text-3xl md:text-4xl font-bold text-[#05152F] mb-4">{t('Team.title')}</h2>
                 <p className="text-[#05152F]/70 max-w-2xl mx-auto">
                     {t('Team.description')}
                 </p>
             </div>

             <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                 {[
                     { name: 'Muhammed Murat Özbek', role: t('Team.roles.founder'), color: 'bg-blue-600', linkedin: 'https://www.linkedin.com/in/muraatozbek/', image: '/team/murat.svg' },
                     { name: 'Tayfun Açıcı', role: t('Team.roles.fullstack'), color: 'bg-indigo-500', linkedin: 'https://www.linkedin.com/in/tyfnacici/', image: '/team/tayfun.svg' },
                     { name: 'Muhammed Sadık Türkmen', role: t('Team.roles.developer'), color: 'bg-blue-500', linkedin: 'https://www.linkedin.com/in/muhammed-sad%C4%B1k-t%C3%BCrkmen-51a371246/', image: '/team/sadik.svg' },
                     { name: 'Omar Abdelhamed', role: t('Team.roles.developer'), color: 'bg-sky-500', linkedin: 'https://www.linkedin.com/in/omarabdelhamed/', image: '/team/omar.svg' }
                 ].map((member, i) => (
                     <div key={i} className="group flex flex-col items-center p-6 rounded-2xl border border-slate-100 hover:shadow-xl transition-all duration-300 bg-white">
                         <div className={`w-32 h-32 rounded-full ${member.color} mb-6 flex items-center justify-center text-white text-3xl font-bold shadow-lg group-hover:scale-105 transition-transform overflow-hidden relative`}>
                             {member.image ? (
                                <Image 
                                    src={member.image} 
                                    alt={member.name} 
                                    fill 
                                    className="object-cover"
                                />
                              ) : (
                                <span>{member.name.split(' ')[0][0]}{member.name.split(' ').length > 1 ? member.name.split(' ')[1][0] : ''}</span>
                              )}
                         </div>
                         <h3 className="text-lg font-bold text-[#05152F] text-center mb-1">{member.name}</h3>
                         <p className="text-slate-500 text-sm font-medium mb-4">{member.role}</p>
                                                  {/* LinkedIn Icon */}
                          {member.linkedin ? (
                              <a href={member.linkedin} target="_blank" rel="noopener noreferrer" className="w-8 h-8 rounded bg-slate-100 flex items-center justify-center text-slate-400 hover:bg-blue-100 hover:text-blue-600 transition-colors cursor-pointer">
                                  <span className="font-bold text-xs">in</span>
                              </a>
                          ) : (
                               <div className="w-8 h-8 rounded bg-slate-100 flex items-center justify-center text-slate-300 cursor-not-allowed" title="No LinkedIn profile available">
                                  <span className="font-bold text-xs">in</span>
                              </div>
                          )}
                     </div>
                 ))}
             </div>
         </div>
      </section>



      {/* 6. ORIGINS SECTION */}
      <section className="w-full bg-white py-24 text-center">
           <div className="max-w-3xl mx-auto px-4 space-y-8">
               <h2 className="text-3xl font-bold text-[#05152F]">{t('Origins.title')}</h2>
               <p className="text-lg text-[#05152F]/70 leading-relaxed">
                   {t('Origins.p1')} 
                   <br/><br/>
                   {t.rich('Origins.p2', {
                        strong: (chunks) => <strong>{chunks}</strong>
                    })}
                   <br/>
                   {t('Origins.p3')}
               </p>
           </div>
      </section>



      {/* 8. SUSTAINABILITY CIRCLE */}
      <section className="w-full bg-white py-24 relative overflow-hidden">
           <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
               <div className="relative order-2 md:order-1">
                    <div className="w-full aspect-square rounded-full bg-green-50 overflow-hidden relative border-8 border-green-100">
                         {/* Placeholder for nature image */}
                         <div className="absolute inset-0 bg-gradient-to-br from-green-200 to-green-500 opacity-20" />
                         <Image 
                            src="/vectors/3.svg" 
                            alt="Nature"
                            fill
                            className="object-cover opacity-50"
                         />
                         <div className="absolute bottom-10 right-10 p-4 bg-white rounded-2xl shadow-lg">
                              <div className="text-green-600 font-bold">{t('SustainabilityCircle.title')}</div>
                         </div>
                    </div>
               </div>
               <div className="space-y-6 order-1 md:order-2">
                   <h2 className="text-3xl font-bold text-[#05152F]">{t('SustainabilityCircle.title')}</h2>
                   <div className="w-20 h-1 bg-green-500 rounded-full" />
                   <p className="text-[#05152F]/70 text-lg">
                       {t('SustainabilityCircle.description')}
                   </p>
                   <Link href="/contact" className="inline-flex items-center text-green-600 font-bold hover:underline gap-2">
                       {t('SustainabilityCircle.cta')} <span>→</span>
                   </Link>
               </div>
           </div>
      </section>

      {/* 9. FOOTER CTA */}
      <section className="w-full relative overflow-hidden bg-gradient-to-r from-[#05152F] to-[#1e3a66] py-24 text-white">
            <div className="absolute top-0 right-0 w-full h-full opacity-10">
                <div className="absolute top-[-50%] right-[-20%] w-[80%] h-[200%] bg-blue-400 rounded-full blur-[100px]" />
            </div>
            
            <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
                 <h2 className="text-3xl md:text-5xl font-bold mb-8">
                     {t('FooterCTA.title')}
                 </h2>
                 <p className="text-blue-100/80 text-lg mb-12 max-w-2xl mx-auto">
                     {t('FooterCTA.description')}
                 </p>
                 <div className="flex flex-col sm:flex-row justify-center gap-4">
                        <Link
                            href="/contact"
                            className="bg-blue-500 text-white px-8 py-4 rounded-full font-bold hover:bg-blue-400 transition-colors shadow-lg w-full sm:w-auto flex items-center justify-center text-center"
                        >
                            {t('FooterCTA.contactUs')}
                        </Link>
                        <Link
                             href="/contact"
                             className="bg-white text-[#05152F] px-8 py-4 rounded-full font-bold hover:bg-slate-100 transition-colors w-full sm:w-auto flex items-center justify-center text-center"
                        >
                            {t('FooterCTA.requestDemo')}
                        </Link>
                 </div>
            </div>
      </section>

    </main>
  );
}
