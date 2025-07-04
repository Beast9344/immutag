import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Check, Download } from 'lucide-react';

const discoverItems = [
    { text: "Technical Overview – Understand our blockchain-based verification system." },
    { text: "Token Economics – Detailed insights into the TAGX/IMTG token ecosystem." },
    { text: "Use Cases – Real-world scenarios demonstrating the Immutag solution." },
    { text: "Strategic Roadmap – Milestones, future development, and expansion plans." },
];

const WhitepaperPageSection = () => {
  return (
    <section id="whitepaper-page" className="py-16 md:py-24 bg-background">
      <div className="container mx-auto max-w-4xl px-4 md:px-6">
        <div className="text-center">
          <h1 className="font-headline text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
            Immutag Whitepaper
          </h1>
        </div>

        <Card className="mt-12 bg-secondary">
            <CardHeader>
                <CardTitle className="font-headline text-2xl">About the Whitepaper</CardTitle>
            </CardHeader>
            <CardContent>
                <p className="text-muted-foreground">
                    Our whitepaper provides an in-depth look into Immutag's technology, tokenomics, business model, and strategic roadmap. It outlines how we’re transforming asset ownership, tracking, and verification through blockchain innovation.
                </p>
            </CardContent>
        </Card>

        <Card className="mt-8 bg-secondary">
            <CardHeader>
                <CardTitle className="font-headline text-2xl">What You'll Discover</CardTitle>
            </CardHeader>
            <CardContent>
                <ul className="space-y-4">
                    {discoverItems.map((item, index) => (
                        <li key={index} className="flex items-start gap-3">
                            <Check className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
                            <span className="text-muted-foreground">{item.text}</span>
                        </li>
                    ))}
                </ul>
            </CardContent>
        </Card>

        <Card className="mt-8 text-center bg-secondary">
            <CardHeader>
                <CardTitle className="font-headline text-2xl">Download the Whitepaper</CardTitle>
            </CardHeader>
            <CardContent>
                <p className="text-muted-foreground mb-6">
                    Click the button below to download the latest version of the Immutag whitepaper.
                </p>
                <Button asChild className="bg-accent hover:bg-accent/90 text-accent-foreground neon-accent">
                    <a href="#" download>
                        <Download className="mr-2 h-5 w-5" />
                        Download Whitepaper
                    </a>
                </Button>
            </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default WhitepaperPageSection;
