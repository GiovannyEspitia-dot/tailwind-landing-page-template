export const metadata = {
    title: 'EunLim Kim',
    description: 'Hello! Im EunLim Kim, an aspiring Project Manager.',
  }
  
  import HeroTenPeaks from '@/components/hero-tenpeak'
  import Features from '@/components/features'
  import FeaturesBlocks from '@/components/features-blocks'
  import Testimonials from '@/components/testimonials'
  import Newsletter from '@/components/newsletter'
  
  export default function Home() {
    return (
      <>
        <HeroTenPeaks />
        {/* 
        <Features />
        <FeaturesBlocks />
        
        <Testimonials />
        <Newsletter />
        */}
      </>
    )
  }
  