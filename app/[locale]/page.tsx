


import CentralHero from '@/components/CentralHero';
import ValueChain from '@/components/kokonutui/ValueChain';
import FeatureSection from '@/components/FeatureSection';

export default function Home() {


  return (
    <div className='flex min-h-screen flex-col bg-white'>

      <main className='flex-1'>
        <CentralHero />
        <ValueChain />

        <FeatureSection />
      </main>
    </div>
  );
}
