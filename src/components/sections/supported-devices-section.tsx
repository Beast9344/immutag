import { Smartphone, Laptop, Bike, Watch, Gem } from "lucide-react";
import { Card } from "@/components/ui/card";

const devices = [
  {
    icon: Smartphone,
    name: "Smartphones & Tablets",
    description:
      "Protect your mobile devices against theft and loss. Verify ownership instantly, reduce resale fraud, and simplify the process of transferring your device.",
  },
  {
    icon: Laptop,
    name: "Laptops & Computers",
    description:
      "Securely tag and protect personal or corporate laptops. Facilitate insurance claims and deter theft by making it difficult to sell stolen devices.",
  },
  {
    icon: Watch,
    name: "Smartwatches & Wearables",
    description:
      "From high-end smartwatches to fitness trackers, Immutag helps owners prove authenticity, manage ownership transfers, and recover items in case of loss.",
  },
  {
    icon: Bike,
    name: "E-Bikes & Scooters",
    description:
      "Tag and track ownership of e-bikes and scooters, significantly reducing the likelihood of theft. Provide law enforcement with verifiable ownership details, simplifying recovery.",
  },
  {
    icon: Gem,
    name: "Luxury & High-Value Items",
    description:
      "Expanding soon into luxury watches, cameras, gaming consoles, and more. Immutag aims to protect all valuable assets, providing security and trust in every transaction.",
  },
];

const SupportedDevicesSection = () => {
  return (
    <section id="use-cases" className="py-16 md:py-24 bg-background">
      <div className="container mx-auto max-w-7xl px-4 md:px-6">
        <div className="text-center">
          <h2 className="font-headline text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
            Use Cases & Supported Devices
          </h2>
          <p className="mx-auto mt-4 max-w-3xl text-muted-foreground md:text-xl">
            Hover over a category to see how Immutag provides peace of mind
            across a range of valuable assets.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
          {devices.map((device) => {
            const Icon = device.icon;
            return (
              <Card
                key={device.name}
                className="group relative flex min-h-[240px] flex-col items-center justify-center overflow-hidden rounded-lg border bg-secondary p-6 text-center text-card-foreground transition-all duration-300 hover:-translate-y-2 hover:shadow-lg"
              >
                {/* Always visible content */}
                <div className="flex flex-col items-center transition-all duration-300 group-hover:scale-90 group-hover:opacity-0">
                  <Icon className="h-10 w-10 text-accent" />
                  <h3 className="mt-4 text-lg font-semibold">
                    {device.name}
                  </h3>
                </div>

                {/* Content visible on hover */}
                <div className="absolute inset-0 flex scale-90 flex-col items-center justify-center p-6 opacity-0 transition-all duration-300 group-hover:scale-100 group-hover:opacity-100">
                  <Icon className="h-8 w-8 text-accent" />
                  <h3 className="mt-2 font-headline text-lg font-bold">
                    {device.name}
                  </h3>
                  <p className="mt-2 text-sm text-muted-foreground">
                    {device.description}
                  </p>
                </div>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default SupportedDevicesSection;
