'use client';

import React, { useState, useRef } from 'react';
import emailjs from '@emailjs/browser';
import { useTranslations } from 'next-intl';

export default function ContactPage() {
  const t = useTranslations('Contact');
  const formRef = useRef<HTMLFormElement>(null);
  const [isPending, setIsPending] = useState(false);
  const [status, setStatus] = useState<{ type: 'success' | 'error' | null; message: string }>({ type: null, message: '' });

  const sendEmail = (e: React.FormEvent) => {
    e.preventDefault();
    setIsPending(true);
    setStatus({ type: null, message: '' });

    if (!formRef.current) return;

    emailjs
      .sendForm(
        'service_m9524vb',
        'template_539x6t7',
        formRef.current,
        'nuJj3xRrrdRJveN7E'
      )
      .then(
        () => {
          setStatus({
            type: 'success',
            message: t('form.success'),
          });
          setIsPending(false);
          formRef.current?.reset();
        },
        (error) => {
          console.error('FAILED...', error.text);
          setStatus({
            type: 'error',
            message: t('form.error'),
          });
          setIsPending(false);
        }
      );
  };

  return (
    <main className="flex min-h-screen flex-col items-center justify-start bg-white pt-32 pb-20">
      
      {/* Background Ambience */}
      <div className="absolute top-0 right-0 w-full h-[60vh] overflow-hidden pointer-events-none">
        <div className="absolute top-[-20%] right-[-10%] w-[50%] h-[120%] bg-[#EAF4F9] rounded-bl-[40%] rounded-tl-[20%] opacity-60 blur-3xl transform rotate-6" />
      </div>

      <div className="container relative z-10 px-4 md:px-6">
        
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24">
          
          {/* Info Side */}
          <div className="space-y-10">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold text-[#05152F] tracking-tight mb-6">
                {t('title')}
              </h1>
              <p className="text-lg text-[#05152F]/70 leading-relaxed">
                {t('description')}
              </p>
            </div>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-[#EAF4F9] flex items-center justify-center shrink-0">
                  <svg className="w-6 h-6 text-[#05152F]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-bold text-[#05152F] text-lg">{t('emailUs')}</h3>
                  <p className="text-[#05152F]/70">{t('emailResponse')}</p>
                  <a href="mailto:murat@bee2.ai" className="text-[#6388A8] font-medium hover:underline text-lg">
                    murat@bee2.ai
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-[#EAF4F9] flex items-center justify-center shrink-0">
                    <svg className="w-6 h-6 text-[#05152F]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                </div>
                <div>
                    <h3 className="font-bold text-[#05152F] text-lg">{t('phone')}</h3>
                    <a href="tel:+905537785420" className="text-[#6388A8] font-medium hover:underline text-lg">
                        +90 553 778 54 20
                    </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-[#EAF4F9] flex items-center justify-center shrink-0">
                  <svg className="w-6 h-6 text-[#05152F]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-bold text-[#05152F] text-lg">{t('office')}</h3>
                  <p className="text-[#05152F]/70 whitespace-pre-line">
                    {t('officeAddress')}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Form Side */}
          <div className="bg-white rounded-3xl p-8 shadow-xl border border-slate-100">
            <form className="space-y-6" ref={formRef} onSubmit={sendEmail}>
              <h2 className="text-2xl font-bold text-[#05152F] mb-6">{t('form.title')}</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-semibold text-[#05152F]" htmlFor="name">{t('form.fullName')}</label>
                  <input 
                    type="text" 
                    id="name"
                    name="name"
                    required
                    className="w-full h-12 px-4 rounded-xl border border-slate-200 focus:border-[#6388A8] focus:ring-2 focus:ring-[#6388A8]/20 outline-none transition-all placeholder:text-gray-400 text-[#05152F] font-medium"
                    placeholder={t('form.placeholders.fullName')}
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-semibold text-[#05152F]" htmlFor="email">{t('form.workEmail')}</label>
                  <input 
                    type="email" 
                    id="email"
                    name="email"
                    required
                    className="w-full h-12 px-4 rounded-xl border border-slate-200 focus:border-[#6388A8] focus:ring-2 focus:ring-[#6388A8]/20 outline-none transition-all placeholder:text-gray-400 text-[#05152F] font-medium"
                    placeholder={t('form.placeholders.workEmail')}
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-semibold text-[#05152F]" htmlFor="company">{t('form.company')}</label>
                <input 
                  type="text" 
                  id="company"
                  name="company"
                  className="w-full h-12 px-4 rounded-xl border border-slate-200 focus:border-[#6388A8] focus:ring-2 focus:ring-[#6388A8]/20 outline-none transition-all placeholder:text-gray-400 text-[#05152F] font-medium"
                  placeholder={t('form.placeholders.company')}
                />
              </div>

              <div className="space-y-2">
                <label className="text-sm font-semibold text-[#05152F]" htmlFor="message">{t('form.message')}</label>
                <textarea 
                  id="message"
                  name="message"
                  required
                  className="w-full h-32 p-4 rounded-xl border border-slate-200 focus:border-[#6388A8] focus:ring-2 focus:ring-[#6388A8]/20 outline-none transition-all resize-none placeholder:text-gray-400 text-[#05152F] font-medium"
                  placeholder={t('form.placeholders.message')}
                />
              </div>

               {/* Status Messages */}
               {status.type === 'error' && (
                  <div className="p-4 rounded-xl bg-red-50 text-red-600 text-sm font-medium">
                      {status.message}
                  </div>
              )}
               {status.type === 'success' && (
                  <div className="p-4 rounded-xl bg-green-50 text-green-600 text-sm font-medium">
                      {status.message}
                  </div>
              )}

              <button 
                type="submit"
                disabled={isPending}
                className="w-full h-14 bg-[#05152F] text-white font-bold rounded-xl text-lg hover:bg-[#0a2a5c] transition-colors shadow-lg shadow-blue-900/10 disabled:opacity-70 disabled:cursor-not-allowed"
              >
                {isPending ? t('form.sending') : t('form.submit')}
              </button>
            </form>
          </div>

        </div>
      </div>
    </main>
  );
}
