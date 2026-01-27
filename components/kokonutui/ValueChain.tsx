'use client';

import { useTranslations } from 'next-intl';
import { Link, AppPath } from '@/i18n/routing';
import Image from 'next/image';
import { ArrowRight, BarChart3, LineChart, PieChart, ShoppingCart, Truck } from 'lucide-react';

const icons = {
  'demandForecasting': LineChart,
  'inventoryPlanning': BarChart3,
  'pricingPromotion': PieChart,
  'seasonalPlanning': Truck, // Truck for seasonal as a placeholder or reuse existing logic
  'retail-ops': ShoppingCart,
  'distribution-supply': Truck,
};

const featuresPayload = [
    {
      id: 'demandForecasting',
      ctaLink: '/solutions/demand-forecasting',
      iconUrl: '/icons/market-purchase-svgrepo-com.svg'
    },
    {
      id: 'pricingPromotion',
      ctaLink: '/solutions/pricing-promotion',
      iconUrl: '/icons/shopping-pos-machine-svgrepo-com.svg'
    },
    {
      id: 'inventoryPlanning',
      ctaLink: '/solutions/end-to-end-inventory-planning',
      iconUrl: '/icons/square-dollar-chart-svgrepo-com.svg'
    },
    {
      id: 'seasonalPlanning',
      ctaLink: '/solutions/seasonal-planning',
      iconUrl: '/icons/building-retail-svgrepo-com.svg'
    }
  ];

export default function ValueChain() {
  const t = useTranslations('Features');
  const tValueChain = useTranslations('Home.ValueChain');

  return (
    <section className="py-20 bg-slate-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl font-bold tracking-tighter text-[#05152F] sm:text-4xl md:text-5xl mb-4">
            {tValueChain('title')}
          </h2>
          <p className="text-slate-600 text-lg">
            {tValueChain('description')}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {featuresPayload.map((feature) => {
             const Icon = icons[feature.id as keyof typeof icons] || LineChart;
             return (
              <Link 
                key={feature.id} 
                href={feature.ctaLink as AppPath}
                className="group relative bg-white rounded-2xl p-6 shadow-sm border border-slate-100 hover:shadow-xl hover:border-blue-100 transition-all duration-300 flex flex-col items-center text-center"
              >
                <div className="w-14 h-14 rounded-full bg-blue-50 flex items-center justify-center mb-6 group-hover:bg-blue-100 transition-colors">
                  {feature.iconUrl ? (
                    <Image 
                      src={feature.iconUrl} 
                      alt={t(`${feature.id}.title`)} 
                      width={32}
                      height={32}
                      className="w-8 h-8 object-contain" 
                    />
                  ) : (
                    <Icon className="w-7 h-7 text-[#05152F]" />
                  )}
                </div>
                
                <h3 className="font-bold text-[#05152F] mb-2 leading-tight">
                  {t(`${feature.id}.title`)}
                </h3>
                
                <div className="mt-auto pt-4 opacity-0 transform translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
                    <span className="text-sm font-semibold text-blue-600 flex items-center gap-1">
                        Learn more <ArrowRight className="w-4 h-4" />
                    </span>
                </div>
              </Link>
             );
          })}
        </div>
      </div>
    </section>
  );
}
