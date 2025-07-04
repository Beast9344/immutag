import HeroSection from '@/components/sections/hero-section';
import HowItWorksSection from '@/components/sections/how-it-works-section';
import SupportedDevicesSection from '@/components/sections/supported-devices-section';
import WaitlistSection from '@/components/sections/waitlist-section';
import WhitepaperSection from '@/components/sections/whitepaper-section';
import WhyImmutagSection from '@/components/sections/why-immutag-section';

export default function Home() {
  return (
    <>
      <HeroSection />
      <HowItWorksSection />
      <WhyImmutagSection />
      <SupportedDevicesSection />
      <WhitepaperSection />
      <WaitlistSection />
    </>
  );
}
