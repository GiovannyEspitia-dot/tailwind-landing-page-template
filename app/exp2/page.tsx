export const metadata = {
    title: 'EunLim Kim',
    description: 'Hello! Im EunLim Kim, an aspiring Project Manager.',
  }
  
  import HeroGenAccess from '@/components/hero-genacess'
  import Features from '@/components/features'
  import FeaturesBlocks from '@/components/features-blocks'
  import Testimonials from '@/components/testimonials'
  import Newsletter from '@/components/newsletter'
  
  export default function Home() {
    return (
      <>
        <HeroGenAccess />
        {/* 
        <Features />
        <FeaturesBlocks />
        
        <Testimonials />
        <Newsletter />
        */}
      </>
    )
  }
  