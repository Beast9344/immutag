"use client"

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { CheckCircle, Clock, Rocket } from "lucide-react"

const roadmapData = [
  {
    quarter: "Q3 2024",
    title: "Platform Launch",
    description: "The official launch of the Immutag platform, including core features for asset creation and management. The marketplace will go live with initial partner collections.",
    status: "completed",
  },
  {
    quarter: "Q4 2024",
    title: "Mobile App Beta",
    description: "Release of the beta version of our iOS and Android apps, allowing users to manage their digital assets on the go. Initial feedback will be collected for improvements.",
    status: "in-progress",
  },
  {
    quarter: "Q1 2025",
    title: "Advanced Creator Tools",
    description: "Introduction of advanced tools for creators, including customizable smart contracts, batch minting, and royalty management features.",
    status: "planned",
  },
  {
    quarter: "Q2 2025",
    title: "Decentralized Governance",
    description: "Implementation of a decentralized autonomous organization (DAO) to give the community a voice in the platform's future development and decision-making processes.",
    status: "planned",
  },
]

const statusConfig = {
  completed: {
    icon: CheckCircle,
    color: "text-green-500",
    bgColor: "bg-green-500",
  },
  "in-progress": {
    icon: Clock,
    color: "text-blue-500",
    bgColor: "bg-blue-500",
  },
  planned: {
    icon: Rocket,
    color: "text-gray-500",
    bgColor: "bg-gray-500",
  },
}

const RoadmapSection = () => {
  return (
    <section id="roadmap" className="py-16 md:py-24">
      <div className="container mx-auto max-w-7xl px-4 md:px-6">
        <div className="text-center">
          <h2 className="font-headline text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
            Our Development Roadmap
          </h2>
          <p className="mx-auto mt-4 max-w-3xl text-muted-foreground md:text-xl">
            Charting the course for the future of digital assets, one milestone at a time.
          </p>
        </div>

        <div className="relative mt-12 w-full max-w-3xl mx-auto">
          <div className="absolute left-1/2 -translate-x-1/2 h-full w-0.5 bg-border"></div>

          {roadmapData.map((item, index) => {
            const Icon = statusConfig[item.status as keyof typeof statusConfig].icon
            const isEven = index % 2 === 0

            return (
              <div
                key={item.quarter}
                className={`relative mb-8 flex w-full items-center ${
                  isEven ? "justify-start" : "justify-end"
                }`}
              >
                <div
                  className={`relative w-1/2 p-4 ${
                    isEven ? "pr-8 text-right" : "pl-8 text-left"
                  }`}
                >
                  <div className="absolute top-5 h-4 w-4 rounded-full bg-background border-2 border-primary left-1/2 -translate-x-1/2 -translate-y-1/2"></div>
                  <div className={`absolute top-5 h-0.5 w-8 ${statusConfig[item.status as keyof typeof statusConfig].bgColor} ${isEven ? 'right-0' : 'left-0'}`}></div>

                  <p className="text-sm font-semibold text-accent">{item.quarter}</p>
                  <h3 className="font-headline mt-1 text-xl font-bold">{item.title}</h3>
                  <Dialog>
                    <DialogTrigger asChild>
                      <Button variant="link" className="px-0 h-auto text-sm text-muted-foreground">
                        Learn more
                      </Button>
                    </DialogTrigger>
                    <DialogContent className="sm:max-w-[425px]">
                      <DialogHeader>
                        <DialogTitle className="font-headline text-2xl flex items-center gap-2">
                           <Icon className={`h-6 w-6 ${statusConfig[item.status as keyof typeof statusConfig].color}`} />
                          {item.title}
                        </DialogTitle>
                         <DialogDescription className="pt-2 text-left">
                          <strong>{item.quarter}</strong> - {item.description}
                        </DialogDescription>
                      </DialogHeader>
                    </DialogContent>
                  </Dialog>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default RoadmapSection
