import {defineRouting} from 'next-intl/routing';
import {createNavigation} from 'next-intl/navigation';

export const routing = defineRouting({
  // A list of all locales that are supported
  locales: ['en', 'tr', 'ar'],

  // Used when no locale matches
  defaultLocale: 'en',
  
  // Localized pathnames
  pathnames: {
    '/': '/',
    '/about': {
      en: '/about',
      tr: '/hakkimizda',
      ar: '/about'
    },
    '/contact': {
      en: '/contact',
      tr: '/iletisim',
      ar: '/contact'
    },
    '/solutions/demand-forecasting': {
      en: '/solutions/demand-forecasting',
      tr: '/cozumler/talep-tahminleme',
      ar: '/solutions/demand-forecasting'
    },
    '/solutions/end-to-end-inventory-planning': {
      en: '/solutions/end-to-end-inventory-planning',
      tr: '/cozumler/uctan-uca-envanter-planlama',
      ar: '/solutions/end-to-end-inventory-planning'
    },
    '/solutions/pricing-promotion': {
      en: '/solutions/pricing-promotion',
      tr: '/cozumler/fiyat-promosyon',
      ar: '/solutions/pricing-promotion'
    },
    '/solutions/seasonal-planning': {
      en: '/solutions/seasonal-planning',
      tr: '/cozumler/sezon-planlama',
      ar: '/solutions/seasonal-planning'
    }
  }
});

// Lightweight wrappers around Next.js' navigation APIs
// that will consider the routing configuration
export const {Link, redirect, usePathname, useRouter} =
  createNavigation(routing);

export type AppPath = keyof typeof routing.pathnames;
