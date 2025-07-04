import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Smartphone, Laptop, Watch, Bike, Gem } from 'lucide-react';

const useCases = [
  {
    icon: Smartphone,
    title: "Smartphones & Tablets",
    description: "Protect your mobile devices against theft and loss. Verify ownership instantly, reduce resale fraud, and simplify the process of transferring your device."
  },
  {
    icon: Laptop,
    title: "Laptops & Computers",
    description: "Securely tag and protect personal or corporate laptops. Facilitate insurance claims and deter theft by making it difficult to sell stolen devices."
  },
  {
    icon: Watch,
    title: "Smartwatches & Wearables",
    description: "From high-end smartwatches to fitness trackers, Immutag helps owners prove authenticity, manage ownership transfers, and recover items in case of loss."
  },
  {
    icon: Bike,
    title: "E-Bikes & Scooters",
    description: "Tag and track ownership of e-bikes and scooters, significantly reducing the likelihood of theft. Provide law enforcement with verifiable ownership details, simplifying recovery."
  },
  {
    icon: Gem,
    title: "Luxury & High-Value Items (Coming Soon)",
    description: "Expanding soon into luxury watches, cameras, gaming consoles, and more. Immutag aims to protect all valuable assets, providing security and trust in every transaction."
  }
];

const UseCasesSection = () => {
  return (
    <section id="use-cases" className="py-16 md:py-24 bg-background">
      <div className="container mx-auto max-w-7xl px-4 md:px-6">
        <div className="text-center">
          <h2 className="font-headline text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
            Immutag Use Cases
          </h2>
          <p className="mx-auto mt-4 max-w-3xl text-muted-foreground md:text-xl">
            Discover how Immutag provides peace of mind across a range of valuable assets.
          </p>
        </div>
        <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {useCases.map((useCase) => {
            const Icon = useCase.icon;
            return (
              <Card key={useCase.title} className="flex flex-col transition-all duration-300 hover:shadow-lg hover:-translate-y-1 bg-secondary">
                <CardHeader className="flex-row items-center gap-4 space-y-0">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
                    <Icon className="h-6 w-6" />
                  </div>
                  <CardTitle className="font-headline text-xl">{useCase.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{useCase.description}</p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default UseCasesSection;
