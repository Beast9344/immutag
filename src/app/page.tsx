import AboutSection from '@/components/sections/about-section';
import HeroSection from '@/components/sections/hero-section';
import HowItWorksSection from '@/components/sections/how-it-works-section';
import RoadmapSection from '@/components/sections/roadmap-section';
import WhitepaperSection from '@/components/sections/whitepaper-section';

export default function Home() {
  return (
    <>
      <HeroSection />
      <AboutSection />
      <RoadmapSection />
      <WhitepaperSection />
      <HowItWorksSection />
    </>
  );
}
