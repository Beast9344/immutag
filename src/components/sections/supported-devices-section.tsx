import { Smartphone, Laptop, Bike, Watch, MoreHorizontal } from "lucide-react"

const devices = [
  { icon: Smartphone, name: "Smartphones" },
  { icon: Laptop, name: "Laptops" },
  { icon: Bike, name: "E-bikes" },
  { icon: Watch, name: "Smartwatches" },
  { icon: MoreHorizontal, name: "More launching soon" },
]

const SupportedDevicesSection = () => {
  return (
    <section id="devices" className="py-16 md:py-24">
      <div className="container mx-auto max-w-7xl px-4 md:px-6">
        <div className="text-center">
          <h2 className="font-headline text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
            Supported Devices
          </h2>
          <p className="mx-auto mt-4 max-w-3xl text-muted-foreground md:text-xl">
            Immutag is being developed to support a growing range of valuable assets.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-5 md:gap-6">
          {devices.map((device) => {
            const Icon = device.icon
            return (
              <div key={device.name} className="flex flex-col items-center justify-center gap-4 rounded-lg border bg-card p-6 text-card-foreground transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
                <Icon className="h-10 w-10 text-accent" />
                <p className="text-center font-semibold">{device.name}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default SupportedDevicesSection
