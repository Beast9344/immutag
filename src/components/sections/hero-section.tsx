import { Button } from '@/components/ui/button';
import Link from 'next/link';

const HeroSection = () => {
  return (
    <section className="relative h-[80vh] min-h-[600px] w-full">
      <div className="absolute inset-0 bg-primary/10 bg-grid-white/[0.05]"></div>
      <div
        className="absolute inset-0 bg-cover bg-center bg-fixed"
        style={{ backgroundImage: "url('https://placehold.co/1600x900.png')" }}
        data-ai-hint="abstract technology background"
      >
        <div className="absolute inset-0 bg-primary opacity-80" />
      </div>

      <div className="relative z-10 flex h-full items-center justify-center">
        <div className="container mx-auto max-w-4xl px-4 text-center text-primary-foreground">
          <h1 className="font-headline text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl">
            Redefining Digital Ownership
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-primary-foreground/80 md:text-xl">
            Immutag provides a decentralized platform for creating, managing, and
            trading unique digital assets with unparalleled security and
            transparency.
          </p>
          <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <Button size="lg" asChild className="bg-accent hover:bg-accent/90 text-accent-foreground">
              <Link href="#how-it-works">Explore Platform</Link>
            </Button>
            <Button size="lg" variant="outline" asChild className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary">
              <Link href="#whitepaper">Read Whitepaper</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
