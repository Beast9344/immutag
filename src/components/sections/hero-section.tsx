import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import Image from 'next/image';

const HeroSection = () => {
  return (
    <section id="home" className="relative h-[90vh] min-h-[700px] w-full">
      <div className="absolute inset-0 bg-grid-white/[0.05]"></div>
      <div className="absolute inset-0 overflow-hidden">
        <Image
          src="/hero.jpeg"
          alt="Background"
          fill
          className="object-cover object-center"
          quality={100}
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/80 to-transparent" />
      </div>

      <div className="relative z-10 flex h-full items-center justify-center">
        <div className="container mx-auto max-w-4xl px-4 text-center text-foreground">
          <h1 className="font-headline text-5xl font-bold tracking-tighter sm:text-6xl md:text-7xl lg:text-8xl">
            Own it. Prove it. Protect it.
          </h1>
          <p className="mt-4 font-headline text-2xl text-foreground/90 sm:text-3xl">
            The future of secure ownership starts here.
          </p>
          <div className="mt-8 flex flex-col items-center gap-4">
            <p className="text-sm text-accent">
              App coming soon – Join the waitlist and be the first to experience a smarter way to secure and verify ownership.
            </p>
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