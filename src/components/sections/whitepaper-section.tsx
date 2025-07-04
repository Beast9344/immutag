"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { FileText, Shield, Zap, BarChart } from "lucide-react"
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
  ChartLegend,
  ChartLegendContent,
} from "@/components/ui/chart"
import { Bar, XAxis, YAxis, CartesianGrid, BarChart as RechartsBarChart } from "recharts"

const highlights = [
  {
    icon: Shield,
    title: "Immutable Security",
    description: "Leveraging cutting-edge cryptography to ensure your digital assets are tamper-proof and secure forever.",
  },
  {
    icon: Zap,
    title: "Scalable Architecture",
    description: "Designed for high-throughput and low-latency transactions, ensuring a seamless user experience.",
  },
  {
    icon: BarChart,
    title: "Tokenomics",
    description: "A robust economic model designed to foster long-term growth and incentivize platform participation.",
  },
]

const chartData = [
  { phase: "Seed", allocation: 15 },
  { phase: "Private", allocation: 20 },
  { phase: "Public", allocation: 10 },
  { phase: "Team", allocation: 15 },
  { phase: "Ecosystem", allocation: 40 },
]

const chartConfig = {
  allocation: {
    label: "Allocation (%)",
    color: "hsl(var(--accent))",
  },
}

const WhitepaperSection = () => {
  return (
    <section id="whitepaper" className="py-16 md:py-24 bg-secondary">
      <div className="container mx-auto max-w-7xl px-4 md:px-6">
        <div className="text-center">
          <h2 className="font-headline text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
            Dive Into Our Technology
          </h2>
          <p className="mx-auto mt-4 max-w-3xl text-muted-foreground md:text-xl">
            Explore the technical foundations of Immutag. Our whitepaper provides a detailed look at our innovative approach.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {highlights.map((item) => {
            const Icon = item.icon
            return (
              <Card key={item.title} className="transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
                <CardHeader className="flex flex-row items-center gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-primary text-primary-foreground">
                    <Icon className="h-6 w-6" />
                  </div>
                  <div>
                    <CardTitle className="font-headline text-xl">{item.title}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{item.description}</p>
                </CardContent>
              </Card>
            )
          })}
        </div>

        <div className="mt-16 grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
            <div>
                 <h3 className="font-headline text-2xl font-bold tracking-tighter sm:text-3xl">
                    Token Allocation
                 </h3>
                 <p className="mt-4 text-muted-foreground">
                    Our token distribution is strategically planned to ensure the long-term sustainability and growth of the Immutag ecosystem. Funds are allocated to development, marketing, community rewards, and the team.
                 </p>
                 <Button asChild className="mt-6">
                    <a href="#" download>
                      <FileText className="mr-2 h-4 w-4" />
                      Download Full Whitepaper
                    </a>
                 </Button>
            </div>
            <Card>
                <CardHeader>
                    <CardTitle>Distribution Overview</CardTitle>
                </CardHeader>
                <CardContent>
                    <ChartContainer config={chartConfig} className="h-[250px] w-full">
                        <RechartsBarChart data={chartData} accessibilityLayer>
                            <CartesianGrid vertical={false} />
                            <XAxis
                              dataKey="phase"
                              tickLine={false}
                              tickMargin={10}
                              axisLine={false}
                            />
                            <YAxis
                               tickLine={false}
                               axisLine={false}
                               tickMargin={10}
                               domain={[0, 50]}
                            />
                            <ChartTooltip content={<ChartTooltipContent />} />
                             <ChartLegend content={<ChartLegendContent />} />
                            <Bar dataKey="allocation" fill="var(--color-allocation)" radius={4} />
                        </RechartsBarChart>
                    </ChartContainer>
                </CardContent>
            </Card>
        </div>
      </div>
    </section>
  )
}

export default WhitepaperSection
