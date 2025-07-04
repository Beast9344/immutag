import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

const HeroSection = () => {
  return (
    <section id="home" className="relative h-[90vh] min-h-[700px] w-full">
      <div className="absolute inset-0 bg-grid-white/[0.05]"></div>
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: "url('https://placehold.co/1600x900.png')" }}
        data-ai-hint="abstract technology background"
      >
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/80 to-transparent" />
      </div>

      <div className="relative z-10 flex h-full items-center justify-center">
        <div className="container mx-auto max-w-4xl px-4 text-center text-foreground">
          <h1 className="font-headline text-5xl font-bold tracking-tighter sm:text-6xl md:text-7xl lg:text-8xl">
            Own it. Prove it. Protect it.
          </h1>
          <p className="mt-4 font-headline text-2xl text-foreground/90 sm:text-3xl">The future of secure ownership starts here.</p>
          <p className="mx-auto mt-6 max-w-3xl text-lg text-foreground/80 md:text-xl">
            Immutag is building a new standard in asset protection — combining blockchain technology with physical tagging to give you irrefutable proof of ownership for your most valuable devices. From smartphones and laptops to watches and e-bikes, Immutag is designed to reduce theft, streamline transfers, and give peace of mind.
          </p>
          <div className="mt-8 flex flex-col items-center gap-4">
             <p className="text-sm text-accent">App coming soon – Join the waitlist and be the first to experience a smarter way to secure and verify ownership.</p>
            <Button size="lg" asChild className="bg-accent hover:bg-accent/90 text-accent-foreground neon-accent">
              <Link href="#waitlist">
                Join the Waitlist
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
