"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import { Check, Shield } from "lucide-react"
import { Button } from "@/components/ui/button"
import { ScrollReveal } from "@/components/ui/scroll-reveal"
import { useCTA } from "@/hooks/use-cta"
import { Signature } from "@/components/ui/signature"

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
                  <span className="font-mono text-[9px] text-primary/60 uppercase tracking-tighter">ESTIMATED VALUE: $3,500</span>
                  <span className="text-lg text-muted-foreground line-through decoration-primary/30">
                    $1,200
                  </span>
                </div>
                <span className="text-5xl font-bold text-primary tracking-tighter transition-all group-hover:scale-105">$599</span>
              </div>
              <p className="mt-2 text-sm text-muted-foreground">
                One-time investment. Total Transformation.
              </p>
              <p className="mt-1 text-xs text-calm italic">
                Founder-led cohort pricing for Q2 2026
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

            {/* Decision aids */}
            <div className="px-8 pb-4 border-t border-white/10 pt-6">
              <p className="mb-3 text-xs font-semibold text-foreground uppercase tracking-wider text-center">
                Ideal if you:
              </p>
              <ul className="flex flex-col gap-2 text-xs text-muted-foreground">
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-0.5">✓</span>
                  <span>You're a founder, exec, or high-stakes professional</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-0.5">✓</span>
                  <span>You can commit 30 minutes/day, 3x per week</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-0.5">✓</span>
                  <span>You're comfortable sharing biometric data (Oura/Whoop/Apple Watch)</span>
                </li>
              </ul>
            </div>

            {/* Guarantee line inside card */}
            <div className="px-8 pb-4">
              <p className="text-center text-xs text-calm">
                <span className="font-semibold">30-day guarantee</span> • Full refund if not satisfied
              </p>
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
            <div className="flex flex-col items-center gap-4">
              <div className="flex items-center gap-2">
                <Shield className="h-5 w-5 text-calm" />
                <span className="font-mono text-sm font-semibold uppercase tracking-wider text-calm">
                  Ironclad Resilience Guarantee
                </span>
              </div>
              <Signature className="h-12 w-auto text-calm/40" />
            </div>
            <p className="max-w-md text-xs leading-relaxed text-muted-foreground italic">
              "Try the full protocol for 30 days. If you don't feel sharper, stronger, and more energised, we'll refund every penny. No questions asked."
            </p>
            <span className="font-mono text-[8px] uppercase tracking-[0.4em] text-calm/60">
              Personal Commitment from Jax Sterling
            </span>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
