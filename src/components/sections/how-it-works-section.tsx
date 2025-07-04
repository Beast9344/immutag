"use client"

import { useState } from "react"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import { explainPlatformAction } from "@/app/actions"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent } from "@/components/ui/card"
import { useToast } from "@/hooks/use-toast"
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Loader2 } from "lucide-react"

const formSchema = z.object({
  aspect: z.string().min(10, {
    message: "Please describe the aspect you want to know about in more detail.",
  }),
})

const HowItWorksSection = () => {
  const [explanation, setExplanation] = useState<string[] | null>(null)
  const [isLoading, setIsLoading] = useState(false)
  const { toast } = useToast()

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      aspect: "how assets are minted and secured on the platform",
    },
  })

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    setIsLoading(true)
    setExplanation(null)
    try {
      const result = await explainPlatformAction({
        platformName: "Immutag",
        aspect: values.aspect,
      })
      if (result.explanation) {
        const steps = result.explanation
          .split(/\d+\.\s/)
          .filter((s) => s.trim() !== "")
          .map((s) => s.trim())
        setExplanation(steps)
      } else {
         toast({
          variant: "destructive",
          title: "Error",
          description: "Failed to get an explanation. Please try again.",
        })
      }
    } catch (error) {
       toast({
        variant: "destructive",
        title: "An unexpected error occurred",
        description: "Please check the console for more details or try again later.",
      })
      console.error(error)
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <section id="how-it-works" className="py-16 md:py-24">
      <div className="container mx-auto max-w-7xl px-4 md:px-6">
        <div className="text-center">
          <h2 className="font-headline text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
            How Immutag Works
          </h2>
          <p className="mx-auto mt-4 max-w-3xl text-muted-foreground md:text-xl">
            Understand our platform's core mechanics. Ask our AI to explain any aspect you're curious about.
          </p>
        </div>

        <Card className="mt-12 max-w-3xl mx-auto">
          <CardContent className="p-6">
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                <FormField
                  control={form.control}
                  name="aspect"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="font-semibold">What would you like to understand?</FormLabel>
                      <FormControl>
                        <Input placeholder="e.g., How are digital assets traded securely?" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <Button type="submit" disabled={isLoading} className="w-full neon-primary">
                  {isLoading ? (
                    <>
                      <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                      Generating Explanation...
                    </>
                  ) : (
                    "Explain It To Me"
                  )}
                </Button>
              </form>
            </Form>
          </CardContent>
        </Card>

        {isLoading && (
          <div className="mt-8 grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
             {[...Array(3)].map((_, i) => (
               <Card key={i} className="animate-pulse">
                 <CardContent className="p-6">
                   <div className="h-4 w-1/4 bg-muted rounded"></div>
                   <div className="h-20 mt-2 bg-muted rounded"></div>
                 </CardContent>
               </Card>
             ))}
          </div>
        )}
        
        {explanation && (
          <div className="mt-8">
            <h3 className="text-center font-headline text-2xl font-bold">Step-by-Step Guide</h3>
             <div className="mt-6 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {explanation.map((step, index) => (
                <Card
                  key={index}
                  className="animate-in fade-in-50 slide-in-from-bottom-5"
                  style={{ animationDelay: `${index * 150}ms`, animationFillMode: "both" }}
                >
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                        <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary text-primary-foreground font-bold text-lg shrink-0">
                          {index + 1}
                        </div>
                        <p className="text-muted-foreground">{step}</p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  )
}

export default HowItWorksSection
