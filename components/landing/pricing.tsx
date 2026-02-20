"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import { Check, Shield } from "lucide-react"
import { Button } from "@/components/ui/button"
import { ScrollReveal } from "@/components/ui/scroll-reveal"
import { useCTA } from "@/hooks/use-cta"

const included = [
  "12-week personalised training protocol",
  "Bi-weekly 1:1 video coaching calls",
  "Bio-data performance reviews (monthly)",
  "Zero-prep nutrition framework",
  "24/7 Slack/WhatsApp concierge access",
  "Hotel gym & travel protocols",
  "Progress tracking dashboard access",
]

export function Pricing() {
  const { openModal } = useCTA()
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="pricing" className="w-full py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-4 md:px-8 lg:px-16">
        <ScrollReveal className="mb-16 text-center">
          <p className="mb-3 font-mono text-xs uppercase tracking-[0.3em] text-primary">
            Investment
          </p>
          <h2 className="text-balance text-3xl font-bold tracking-tight text-foreground md:text-4xl">
            One Protocol. Total Transformation.
          </h2>
        </ScrollReveal>

        <div className="mx-auto max-w-lg" ref={ref}>
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={
              isInView
                ? { opacity: 1, scale: 1 }
                : { opacity: 0, scale: 0.95 }
            }
            transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
            className="glass-lime glow-lime relative overflow-hidden rounded-2xl border-primary/20"
          >
            {/* Premium Badge */}
            <div className="absolute right-0 top-0 bg-primary px-3 py-1 font-mono text-[10px] font-bold uppercase tracking-wider text-background">
              Most Selected
            </div>
            {/* Header */}
            <div className="border-b border-white/10 px-8 pb-8 pt-10 text-center">
              <p className="mb-2 font-mono text-[10px] uppercase tracking-[0.2em] text-primary">
                15 SPOTS AVAILABLE PER MONTH
              </p>
              <p className="mb-1 font-mono text-xs uppercase tracking-widest text-muted-foreground">
                The Executive Engine Protocol
              </p>
              <div className="mt-4 flex items-baseline justify-center gap-3">
                <div className="flex flex-col items-end">
                  <span className="text-xs text-muted-foreground">Total Value: $3,500</span>
                  <span className="text-lg text-muted-foreground line-through">
                    $1,200
                  </span>
                </div>
                <span className="text-5xl font-bold text-primary">$599</span>
              </div>
              <p className="mt-2 text-sm text-muted-foreground">
                One-time investment. Total Transformation.
              </p>
            </div>

            {/* Features */}
            <div className="flex flex-col gap-3 px-8 py-8">
              {included.map((item) => (
                <div key={item} className="flex items-start gap-3">
                  <Check className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                  <span className="text-sm text-foreground">{item}</span>
                </div>
              ))}
            </div>

            {/* CTA */}
            <div className="px-8 pb-10">
              <Button
                size="lg"
                className="w-full rounded-lg font-mono text-sm uppercase tracking-wider"
                onClick={openModal}
              >
                Get the Protocol
              </Button>
            </div>
          </motion.div>

          {/* Guarantee */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="mt-8 flex flex-col items-center gap-3 text-center"
          >
            <div className="flex items-center gap-2">
              <Shield className="h-5 w-5 text-primary" />
              <span className="font-mono text-sm font-semibold uppercase tracking-wider text-foreground">
                The Ironclad Resilience Guarantee
              </span>
            </div>
            <p className="max-w-md text-sm leading-relaxed text-muted-foreground">
              {
                "Try the full protocol for 30 days. If you don't feel sharper, stronger, and more energised, we'll refund every penny. No questions asked."
              }
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
