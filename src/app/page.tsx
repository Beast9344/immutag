import HeroSection from '@/components/sections/hero-section';
import HowItWorksSection from '@/components/sections/how-it-works-section';
import WhyImmutagSection from '@/components/sections/why-immutag-section';
import SupportedDevicesSection from '@/components/sections/supported-devices-section';
import WhitepaperSection from '@/components/sections/whitepaper-section';
import AboutSection from '@/components/sections/about-section';
import RoadmapSection from '@/components/sections/roadmap-section';
import WaitlistSection from '@/components/sections/waitlist-section';

export default function Home() {
  return (
    <>
      <HeroSection />
      <HowItWorksSection />
      <WhyImmutagSection />
      <SupportedDevicesSection />
      <WhitepaperSection />
      <AboutSection />
      <RoadmapSection />
      <WaitlistSection />
    </>
  );
}
