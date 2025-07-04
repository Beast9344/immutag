import { ArrowRightLeft, FileClock, ShieldCheck, ShieldOff, UserCheck } from "lucide-react"

const features = [
  {
    icon: ShieldCheck,
    title: "Proven Ownership",
    description: "Your tag is linked to a blockchain-verified NFT.",
  },
  {
    icon: ShieldOff,
    title: "Theft Deterrent",
    description: "Harder for thieves to profit from stolen goods.",
  },
  {
    icon: FileClock,
    title: "Faster Insurance Claims",
    description: "Verifiable history speeds up payouts.",
  },
  {
    icon: ArrowRightLeft,
    title: "Simplified Transfers",
    description: "Sell or gift your item with digital proof.",
  },
  {
    icon: UserCheck,
    title: "Law Enforcement Integration",
    description: "Streamlined checks for stolen assets.",
  },
]

const WhyImmutagSection = () => {
  return (
    <section id="why-immutag" className="py-16 md:py-24 bg-secondary">
      <div className="container mx-auto max-w-7xl px-4 md:px-6">
        <div className="text-center">
          <h2 className="font-headline text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
            Why Immutag?
          </h2>
          <p className="mx-auto mt-4 max-w-3xl text-muted-foreground md:text-xl">
            Experience the next generation of asset security and peace of mind.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-5">
           {features.map((feature) => {
            const Icon = feature.icon
            return (
               <div key={feature.title} className="text-center flex flex-col items-center">
                  <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary/10 text-primary border-2 border-primary/20">
                    <Icon className="h-8 w-8" />
                  </div>
                  <h3 className="font-headline mt-4 text-lg font-semibold">{feature.title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground">{feature.description}</p>
               </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default WhyImmutagSection
