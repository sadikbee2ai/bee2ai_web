import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { navItems } from '@/data/siteContent';
import { useTranslations } from 'next-intl';

// Icon Components (kept as is)
const ChevronDownIcon = ({ className = '' }: { className?: string }) => (
  <svg
    width='10'
    height='6'
    viewBox='0 0 10 6'
    fill='none'
    className={className}
    aria-hidden='true'
  >
    <path
      d='M1 1L5 5L9 1'
      stroke='currentColor'
      strokeWidth='1.5'
      strokeLinecap='round'
      strokeLinejoin='round'
    />
  </svg>
);

const SearchIcon = () => (
  <svg
    width='20'
    height='20'
    viewBox='0 0 24 24'
    fill='none'
    stroke='currentColor'
    strokeWidth='2'
    strokeLinecap='round'
    strokeLinejoin='round'
    aria-hidden='true'
  >
    <circle cx='11' cy='11' r='8' />
    <line x1='21' y1='21' x2='16.65' y2='16.65' />
  </svg>
);

const MenuIcon = () => (
  <svg
    width='24'
    height='24'
    viewBox='0 0 24 24'
    fill='none'
    stroke='currentColor'
    strokeWidth='2'
    strokeLinecap='round'
    strokeLinejoin='round'
    aria-hidden='true'
  >
    <line x1='3' y1='12' x2='21' y2='12' />
    <line x1='3' y1='6' x2='21' y2='6' />
    <line x1='3' y1='18' x2='21' y2='18' />
  </svg>
);

const CloseIcon = () => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
  >
    <line x1="18" y1="6" x2="6" y2="18" />
    <line x1="6" y1="6" x2="18" y2="18" />
  </svg>
);


export default function Header() {
  const t = useTranslations();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className='sticky top-0 z-50 w-full bg-white/95 backdrop-blur border-b border-gray-100'>
      <div className='container mx-auto px-4 lg:px-8 xl:px-12'>
        <div className='flex h-20 items-center justify-between'>
          {/* Logo and Navigation */}
          <div className='flex items-center gap-8 h-full'>
            <Link href='/' className='flex items-center shrink-0'>
              <Image
                src='/logo.jpg'
                alt='Bee2 AI Logo'
                width={120}
                height={40}
                className='h-10 w-auto object-contain'
                priority
              />
            </Link>

            <nav className='hidden xl:flex items-center h-full'>
              <ul className='flex items-center gap-6 h-full'>
                {navItems.map((item) => (
                  <li
                    key={item.label}
                    className='group relative h-full flex items-center'
                  >
                    <button
                      className='h-full flex items-center gap-1.5 text-sm font-medium text-navy hover:text-blue transition-colors focus:outline-none relative
                        after:absolute after:bottom-0 after:left-0 after:right-0 after:h-[2px] after:bg-blue after:scale-x-0 after:transition-transform after:duration-200
                        group-hover:after:scale-x-100'
                    >
                      {t(`Header.${item.label}`)}
                      {(item.dropdown || item.sections) && (
                        <ChevronDownIcon className='transition-transform group-hover:rotate-180' />
                      )}
                    </button>

                    {item.dropdown && (
                      <div className='absolute top-full mt-2 left-1/2 -translate-x-1/2 w-64 bg-white shadow-xl rounded-2xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 overflow-hidden'>
                        <ul className='p-3'>
                          {item.dropdown.map((subItem) => (
                            <li key={subItem.label} className=''>
                              <Link
                                href={subItem.href}
                                className='flex items-center gap-3 px-5 py-3 text-sm text-navy hover:bg-blue-50 hover:text-blue transition-colors'
                              >
                                {subItem.label}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}

                    {item.sections && (
                      <div className='absolute top-full mt-4 left-1/2 -translate-x-1/2 w-[980px] bg-white shadow-2xl rounded-2xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 overflow-hidden'>
                        <div className='grid grid-cols-4 gap-8 p-8'>
                          {item.sections.map((section) => (
                            <div key={section.title}>
                              <h3 className='text-sm font-bold text-navy mb-4'>
                                {section.title}
                              </h3>
                              <ul className='space-y-2.5'>
                                {section.items.map((subItem) => (
                                  <li key={subItem.label}>
                                    <Link
                                      href={subItem.href}
                                      className='flex items-center gap-2 text-sm text-gray-700 hover:text-blue transition-colors group/item'
                                    >
                                      <span className='w-4 h-4 flex items-center justify-center text-gray-400 group-hover/item:text-blue'>
                                        <svg
                                          width='12'
                                          height='12'
                                          viewBox='0 0 24 24'
                                          fill='none'
                                          stroke='currentColor'
                                          strokeWidth='2'
                                        >
                                          <circle cx='12' cy='12' r='2' />
                                        </svg>
                                      </span>
                                      {subItem.label}
                                    </Link>
                                  </li>
                                ))}
                              </ul>
                            </div>
                          ))}
                        </div>
                        <div className='border-t border-gray-100 px-8 py-4 bg-gray-50'>
                          <Link
                            href='/solutions-overview'
                            className='text-sm font-semibold text-blue hover:underline'
                          >
                            See all Solutions →
                          </Link>
                        </div>
                      </div>
                    )}
                  </li>
                ))}
              </ul>
            </nav>
          </div>

          {/* Right Side Actions */}
          <div className='flex items-center gap-4'>
            {/* Search Button */}
            <button
              className='p-2 text-navy hover:text-blue transition-colors'
              aria-label='Search'
            >
              <SearchIcon />
            </button>

            {/* Language Selector (Desktop) */}
            <button
              className='hidden md:inline-flex items-center gap-1 px-3 py-1 text-sm font-medium text-navy hover:text-blue transition-colors'
              aria-label='Select language'
            >
              <span className='mr-1'>
                <svg
                  width='16'
                  height='16'
                  viewBox='0 0 24 24'
                  fill='none'
                  xmlns='http://www.w3.org/2000/svg'
                  className='text-navy'
                >
                  <circle
                    cx='12'
                    cy='12'
                    r='9'
                    stroke='currentColor'
                    strokeWidth='1.5'
                  />
                  <path
                    d='M12 3C9.5 6.5 9.5 17.5 12 21C14.5 17.5 14.5 6.5 12 3Z'
                    stroke='currentColor'
                    strokeWidth='1.5'
                    strokeLinecap='round'
                    strokeLinejoin='round'
                  />
                  <path
                    d='M5 8H19M5 16H19'
                    stroke='currentColor'
                    strokeWidth='1.5'
                    strokeLinecap='round'
                  />
                </svg>
              </span>
              EN
            </button>

            {/* CTA Button */}
            <Link
              href='/contact'
              className='hidden md:inline-flex h-11 items-center justify-center rounded-full bg-[#FDB955] px-6 text-sm font-bold text-[#05152F] transition-all hover:bg-[#e0a844] hover:shadow-md'
            >
              {t('Header.getStarted')}
            </Link>

            {/* Mobile Menu Button */}
            <button
              className='xl:hidden p-2 text-navy hover:text-blue transition-colors'
              aria-label={isMobileMenuOpen ? 'Close menu' : 'Open menu'}
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <CloseIcon /> : <MenuIcon />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div className='fixed inset-0 top-20 z-40 bg-white xl:hidden overflow-y-auto'>
          <div className='p-6 space-y-6'>
            <nav>
              <ul className='flex flex-col space-y-4'>
                {navItems.map((item) => (
                  <li key={item.label} className='border-b border-gray-50 last:border-0 pb-4 last:pb-0'>
                    <Link
                      href={item.href || '#'}
                      className='text-lg font-medium text-navy block'
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      {t(`Header.${item.label}`)}
                    </Link>
                    {item.dropdown && (
                       <ul className="ml-4 mt-2 space-y-2">
                        {item.dropdown.map(sub => (
                           <li key={sub.label}>
                             <Link href={sub.href} onClick={() => setIsMobileMenuOpen(false)} className="text-gray-600 block py-1">
                                {sub.label}
                             </Link>
                           </li>
                        ))}
                       </ul>
                    )}
                  </li>
                ))}
              </ul>
            </nav>
            <div className='pt-6 border-t border-gray-100 flex flex-col gap-4'>
                 {/* Mobile Language Selector */}
                 <button className='flex items-center gap-2 text-navy font-medium'>
                    <span className='w-6 h-6 border border-gray-200 rounded-full flex items-center justify-center'>
                        TR
                    </span>
                    Türkçe (Değiştir)
                 </button>
                 
                 <Link
                    href='/contact'
                    className='h-12 w-full flex items-center justify-center rounded-full bg-[#FDB955] text-[#05152F] font-bold'
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {t('Header.getStarted')}
                  </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
