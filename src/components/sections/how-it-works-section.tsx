import { Card, CardContent } from "@/components/ui/card"

const steps = [
  {
    title: "Tag Your Device",
    description: "Apply a tamper-proof Immutag to your valuable item, physically linking it to the blockchain.",
  },
  {
    title: "Register It Securely",
    description: "Scan the tag with our app to create a unique digital identity (NFT) for your asset, immutably recorded.",
  },
  {
    title: "Prove & Transfer",
    description: "Easily prove, transfer, or even report your asset as stolen through the app, backed by blockchain verification.",
  },
]

const HowItWorksSection = () => {
  return (
    <section id="how-it-works" className="py-16 md:py-24">
      <div className="container mx-auto max-w-7xl px-4 md:px-6">
        <div className="text-center">
          <h2 className="font-headline text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
            How It Works
          </h2>
          <p className="mx-auto mt-4 max-w-3xl text-muted-foreground md:text-xl">
            Immutag links a tamper-proof tag on your device with a unique digital identity stored on the blockchain. Once tagged, your item becomes verifiable, transferable, and harder to steal or resell.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-3">
          {steps.map((step, index) => (
            <Card
              key={index}
              className="animate-in fade-in-50 slide-in-from-bottom-5"
              style={{ animationDelay: `${index * 150}ms`, animationFillMode: "both" }}
            >
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary text-primary-foreground font-bold text-xl shrink-0">
                      {index + 1}
                    </div>
                    <div>
                      <h3 className="font-headline text-lg font-semibold">{step.title}</h3>
                      <p className="mt-1 text-muted-foreground">{step.description}</p>
                    </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

export default HowItWorksSection
