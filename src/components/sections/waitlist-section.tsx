"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { useToast } from "@/hooks/use-toast"
import { Loader2, Mail } from "lucide-react"

const WaitlistSection = () => {
  const [email, setEmail] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const { toast } = useToast()

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!email) {
      toast({
        variant: "destructive",
        title: "Email required",
        description: "Please enter your email address.",
      })
      return
    }
    setIsLoading(true)

    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500));

    setIsLoading(false)
    setIsSubmitted(true)
    toast({
      title: "Success!",
      description: "You've been added to the waitlist. We'll be in touch!",
    })
  }

  if (isSubmitted) {
    return (
        <section id="waitlist" className="py-16 md:py-24">
            <div className="container mx-auto max-w-7xl px-4 md:px-6">
                <div className="mx-auto max-w-2xl text-center">
                    <h2 className="font-headline text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                        You're on the list!
                    </h2>
                    <p className="mx-auto mt-4 max-w-3xl text-muted-foreground md:text-xl">
                        Thank you for joining. Keep an eye on your inbox for early access, news, and exclusive offers.
                    </p>
                </div>
            </div>
        </section>
    )
  }

  return (
    <section id="waitlist" className="py-16 md:py-24">
      <div className="container mx-auto max-w-7xl px-4 md:px-6">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="font-headline text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
            Stay Ahead of the Curve
          </h2>
          <p className="mx-auto mt-4 max-w-3xl text-muted-foreground md:text-xl">
            Be the first to protect what’s yours. Sign up below to get early access, news updates, and exclusive launch offers.
          </p>

          <form onSubmit={handleSubmit} className="mt-8 flex w-full max-w-md mx-auto items-center space-x-2">
            <div className="relative flex-1">
                <Mail className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                <Input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="pl-10"
                />
            </div>
            <Button type="submit" disabled={isLoading} className="neon-primary">
              {isLoading ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  Joining...
                </>
              ) : (
                "Join the Waitlist"
              )}
            </Button>
          </form>
        </div>
      </div>
    </section>
  )
}

export default WaitlistSection
