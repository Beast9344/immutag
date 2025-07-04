import { Card, CardContent } from "@/components/ui/card"
import { Shield, Lock, Database } from "lucide-react"

const WhitepaperSection = () => {
  return (
    <section id="trust" className="py-16 md:py-24 bg-secondary">
      <div className="container mx-auto max-w-7xl px-4 md:px-6">
        <div className="lg:grid lg:grid-cols-2 lg:items-center lg:gap-16">
          <div>
            <h2 className="font-headline text-3xl font-bold tracking-tighter sm:text-4xl">
              Trust in Technology
            </h2>
            <p className="mt-4 text-muted-foreground md:text-lg">
              We’re building with transparency, security, and compliance at the core. Your ownership record is encrypted, immutable, and verifiable — anytime, anywhere.
            </p>
            <div className="mt-8 space-y-6">
               <div className="flex items-start gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary text-primary-foreground">
                    <Shield className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="font-semibold">Immutable Ledger</h3>
                    <p className="text-muted-foreground">Built on proven blockchain technology for a permanent, unalterable record of ownership.</p>
                  </div>
                </div>
                 <div className="flex items-start gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary text-primary-foreground">
                    <Lock className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="font-semibold">Encrypted & Secure</h3>
                    <p className="text-muted-foreground">Your data is protected with end-to-end encryption, ensuring privacy and security.</p>
                  </div>
                </div>
                 <div className="flex items-start gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary text-primary-foreground">
                    <Database className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="font-semibold">Decentralized by Design</h3>
                    <p className="text-muted-foreground">No single point of failure. Your ownership data is distributed and resilient.</p>
                  </div>
                </div>
            </div>
          </div>
           <div className="mt-10 lg:mt-0">
             <Card className="overflow-hidden">
               <CardContent className="p-0">
                  <img src="https://placehold.co/600x500.png" alt="Abstract network graphic" data-ai-hint="abstract network" className="w-full h-auto object-cover" />
               </CardContent>
             </Card>
           </div>
        </div>
      </div>
    </section>
  )
}

export default WhitepaperSection
