import type { Metadata } from 'next';
import { Geist, Geist_Mono, Figtree } from 'next/font/google';
import '../globals.css';
import { siteMeta } from '@/data/siteContent';

import PageDecorations from '@/components/PageDecorations';
import Header from '@/components/kokonutui/Header';
import AiChatWidget from '@/components/AiChatWidget';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

const figtree = Figtree({
  variable: '--font-figtree',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: siteMeta.title,
  description: siteMeta.description,
};

import { NextIntlClientProvider } from 'next-intl';
import { getMessages } from 'next-intl/server';
import { notFound } from 'next/navigation';
import { routing } from '@/i18n/routing';

export default async function RootLayout({
  children,
  params
}: Readonly<{
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}>) {
  const { locale } = await params;

  // Ensure that the incoming `locale` is valid
  if (!routing.locales.includes(locale as "en" | "tr" | "ar")) {
    notFound();
  }

  // Providing all messages to the client
  // side is the easiest way to get started
  const messages = await getMessages();

  return (
    <html lang={locale} dir={locale === 'ar' ? 'rtl' : 'ltr'}>
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${figtree.variable} antialiased relative overflow-x-hidden`}
      >
        <NextIntlClientProvider messages={messages}>
          <PageDecorations />
          <Header />
            {children}
          <AiChatWidget />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
