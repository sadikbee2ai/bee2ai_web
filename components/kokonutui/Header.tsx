
"use client"

import { useState, useRef, useEffect } from "react"
import { Link, usePathname, AppPath } from '@/i18n/routing'; // Use i18n Link
import Image from 'next/image';
import { navItems } from '@/data/siteContent';
import { ChevronDown, Menu, X } from "lucide-react";
import LanguagePicker from '@/components/LanguagePicker';
import { useTranslations } from 'next-intl';

export default function Header() {
  const t = useTranslations('Header');
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)
  const [hoverStyle, setHoverStyle] = useState({})
  const tabRefs = useRef<(HTMLLIElement | null)[]>([])
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    if (hoveredIndex !== null) {
      const hoveredElement = tabRefs.current[hoveredIndex]
      if (hoveredElement) {
        const { offsetLeft, offsetWidth } = hoveredElement
        setHoverStyle({
          left: `${offsetLeft}px`,
          width: `${offsetWidth}px`,
        })
      }
    }
  }, [hoveredIndex])

  return (
    <header className="fixed top-0 left-0 z-50 w-full bg-white/80 backdrop-blur-md border-b border-gray-100">
      <div className="container mx-auto px-4 lg:px-8 xl:px-12">
        <div className="flex h-20 items-center justify-between">
            {/* Logo */}
            <Link href='/' className='flex items-center shrink-0 mr-8'>
              <Image
                src='/logo.svg'
                alt='Bee2 AI Logo'
                width={140}
                height={40}
                className='h-10 w-auto object-contain'
                priority
              />
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden 2xl:block relative flex-1">
                <nav className="relative">
                    {/* Hover Highlight */}
                    <div
                        className="absolute h-[32px] transition-all duration-300 ease-out bg-gray-100 rounded-md -z-10 top-1/2 -translate-y-1/2"
                        style={{
                            ...hoverStyle,
                            opacity: hoveredIndex !== null ? 1 : 0,
                        }}
                    />

                     <ul className='flex items-center gap-1 relative z-10'>
                        {navItems.map((item, index) => (
                            <li
                                key={item.label}
                                ref={(el: HTMLLIElement | null) => { tabRefs.current[index] = el }}
                                className='group relative px-4 py-2 cursor-pointer'
                                onMouseEnter={() => setHoveredIndex(index)}
                                onMouseLeave={() => setHoveredIndex(null)}
                            >
                                {item.href ? (
                                    <Link 
                                        href={item.href as AppPath}
                                        className="flex items-center gap-1.5 text-[15px] font-medium text-slate-600 group-hover:text-slate-900 transition-colors whitespace-nowrap"
                                    >
                                        {t(item.label)}
                                    </Link>
                                ) : (
                                    <div className="flex items-center gap-1.5 text-[15px] font-medium text-slate-600 group-hover:text-slate-900 transition-colors whitespace-nowrap">
                                        {t(item.label)}
                                        {(item.dropdown || item.sections) && (
                                            <ChevronDown className="w-4 h-4 text-slate-400 group-hover:text-slate-600 transition-transform group-hover:rotate-180" />
                                        )}
                                    </div>
                                )}

                                {/* Dropdown Menus */}
                                {item.dropdown && (
                                    <div className='absolute top-full mt-2 left-0 w-56 bg-white border border-gray-100 shadow-xl rounded-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 overflow-hidden transform origin-top-left z-50'>
                                        <ul className='p-1'>
                                        {item.dropdown.map((subItem) => (
                                            <li key={subItem.label}>
                                                <Link
                                                    href={subItem.href as AppPath}
                                                    className='block px-3 py-2 text-sm text-slate-600 hover:text-slate-900 hover:bg-gray-50 rounded-lg transition-colors'
                                                >
                                                    {subItem.label}
                                                </Link>
                                            </li>
                                        ))}
                                        </ul>
                                    </div>
                                )}

                                {item.sections && (
                                    <div className='absolute top-full mt-2 left-0 w-[800px] bg-white border border-gray-100 shadow-xl rounded-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 overflow-hidden transform origin-top-left z-50'>
                                        <div className='grid grid-cols-3 gap-6 p-6'>
                                        {item.sections.map((section) => (
                                            <div key={section.title}>
                                                <h3 className='text-xs font-semibold text-slate-900 uppercase tracking-wider mb-3'>
                                                    {section.title}
                                                </h3>
                                                <ul className='space-y-2'>
                                                    {section.items.map((subItem) => (
                                                    <li key={subItem.label}>
                                                        <Link
                                                            href={subItem.href as AppPath}
                                                            className='text-sm text-slate-500 hover:text-blue-600 transition-colors block'
                                                        >
                                                            {subItem.label}
                                                        </Link>
                                                    </li>
                                                    ))}
                                                </ul>
                                            </div>
                                        ))}
                                        </div>
                                    </div>
                                )}
                            </li>
                        ))}
                    </ul>
                </nav>
            </div>

             {/* Right Side Actions */}
            <div className='flex items-center gap-2'>
                <LanguagePicker className="hidden lg:flex scale-90 origin-right" />
                
                
                <Link
                    href='/contact'
                    className='hidden md:inline-flex h-9 items-center justify-center rounded-full bg-[#05152F] px-5 text-sm font-medium text-white shadow-sm hover:bg-[#05152F]/90 transition-all ml-2'
                >
                    {t('getStarted')}
                </Link>
                {/* Mobile Menu Button */}
                <button
                    className='2xl:hidden p-2 text-slate-500 hover:text-slate-900'
                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                >
                    {isMobileMenuOpen ? <X /> : <Menu />}
                </button>
            </div>
        </div>
      </div>

       {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div className="absolute top-20 left-0 w-full bg-white border-b border-gray-100 p-4 shadow-lg 2xl:hidden flex flex-col gap-4 max-h-[calc(100vh-80px)] overflow-y-auto">
             {navItems.map((item) => (
                 <div key={item.label} className="py-2 border-b border-gray-50 last:border-0">
                      {item.href ? (
                          <Link href={item.href as AppPath} className="font-medium text-slate-900 block mb-2" onClick={() => setIsMobileMenuOpen(false)}>
                              {t(item.label)}
                          </Link>
                      ) : (
                          <span className="font-medium text-slate-900 block mb-2">{t(item.label)}</span>
                      )}

                     {(item.dropdown || (item.sections?.flatMap(s => s.items))) && (
                         <div className="pl-4 space-y-2">
                             {(item.dropdown || item.sections?.flatMap(s => s.items))?.map(sub => (
                                 <Link key={sub.label} href={sub.href as AppPath} className="block text-sm text-slate-500" onClick={() => setIsMobileMenuOpen(false)}>
                                     {sub.label}
                                 </Link>
                             ))}
                         </div>
                     )}
                 </div>
             ))}
             
             <div className="pt-4 border-t border-gray-100 flex flex-col gap-4">
                <div className="flex items-center justify-between">
                    <span className="text-sm font-medium text-slate-600">Dil / Language:</span>
                    <LanguagePicker />
                </div>
                
                <Link
                    href='/contact'
                    className='flex h-10 items-center justify-center rounded-full bg-[#05152F] px-5 text-sm font-medium text-white shadow-sm hover:bg-[#05152F]/90 transition-all'
                    onClick={() => setIsMobileMenuOpen(false)}
                >
                    {t('getStarted')}
                </Link>
             </div>
        </div>
      )}
    </header>
  )
}
