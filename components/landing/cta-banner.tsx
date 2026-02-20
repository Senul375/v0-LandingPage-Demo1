"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import { ScrollReveal } from "@/components/ui/scroll-reveal"
import { useCTA } from "@/hooks/use-cta"

interface CTABannerProps {
  headline: string
  buttonText: string
}

export function CTABanner({ headline, buttonText }: CTABannerProps) {
  const { openModal } = useCTA()
  return (
    <ScrollReveal>
      <div className="mx-auto max-w-7xl px-4 py-12 md:px-8 md:py-16 lg:px-16">
        <div className="glass-lime flex flex-col items-center gap-6 rounded-2xl px-8 py-12 text-center md:px-16">
          <h3 className="text-balance text-2xl font-bold tracking-tight text-foreground md:text-3xl">
            {headline}
          </h3>
          <Button
            size="lg"
            className="glow-lime rounded-lg px-8 font-mono text-sm uppercase tracking-wider"
            onClick={openModal}
          >
            {buttonText}
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </div>
    </ScrollReveal>
  )
}
