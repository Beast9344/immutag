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
import { CheckCircle, Clock, Rocket, Check } from "lucide-react"

const roadmapData = [
  {
    quarter: "Completed",
    title: "Completed Milestones",
    status: "completed",
    details: [
        "LOX Network foundation established",
        "Initial blockchain integration",
        "Partnerships with key manufacturers and insurers",
        "Successful proof-of-concept deployment"
    ]
  },
  {
    quarter: "Q3/Q4 2025",
    title: "Rebranding & Beta Launch",
    status: "in-progress",
    details: [
        "Completion of Immutag rebranding",
        "Token swap launch",
        "Beta testing of mobile and web applications",
        "Expansion of supported device categories"
    ]
  },
  {
    quarter: "Q1/Q2 2026",
    title: "Official Launch & API",
    status: "planned",
    details: [
        "Official app launch",
        "Global partnership announcements",
        "Launch of developer APIs (immutag.link)",
        "Enhanced law enforcement and insurance integrations"
    ]
  },
  {
    quarter: "Future Goals",
    title: "Future Goals",
    status: "planned",
    details: [
        "Introduction of AI-driven theft detection",
        "Expansion into luxury goods and collectibles",
        "Continuous platform improvements based on user feedback",
        "Establishment of a global DAO for governance"
    ]
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
                key={item.title}
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
                      <Button variant="link" className="px-0 h-auto text-sm text-muted-foreground neon-link">
                        View Details
                      </Button>
                    </DialogTrigger>
                    <DialogContent className="sm:max-w-[425px]">
                      <DialogHeader>
                        <DialogTitle className="font-headline text-2xl flex items-center gap-2">
                           <Icon className={`h-6 w-6 ${statusConfig[item.status as keyof typeof statusConfig].color}`} />
                          {item.title}
                        </DialogTitle>
                         <DialogDescription className="pt-2 text-left">
                          {item.quarter}
                        </DialogDescription>
                      </DialogHeader>
                      <ul className="mt-4 space-y-2">
                        {item.details.map((detail, i) => (
                            <li key={i} className="flex items-start gap-3">
                                <Check className="h-5 w-5 mt-1 text-primary flex-shrink-0" />
                                <span className="text-muted-foreground">{detail}</span>
                            </li>
                        ))}
                    </ul>
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
