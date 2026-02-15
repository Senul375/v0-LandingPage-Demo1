"use client"

import { motion } from "framer-motion"
import { Zap, Fingerprint, HeartPulse } from "lucide-react"
import { ScrollReveal, StaggerContainer, staggerChild } from "@/components/ui/scroll-reveal"

const pillars = [
  {
    icon: Zap,
    title: "Efficiency > Intensity",
    description:
      "Maximum output, minimum time. Every movement is programmed for the time-starved executive who refuses to waste a single rep.",
  },
  {
    icon: Fingerprint,
    title: "Bio-Individual Programming",
    description:
      "No cookie-cutter routines. Your protocol is built around your genetics, schedule, recovery data, and performance goals.",
  },
  {
    icon: HeartPulse,
    title: "Longevity Science",
    description:
      "Train for the next 40 years, not just the next 4 weeks. Every protocol is grounded in peer-reviewed longevity research.",
  },
]

export function Philosophy() {
  return (
    <section id="philosophy" className="w-full py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-4 md:px-8 lg:px-16">
        <ScrollReveal className="mb-16 text-center">
          <p className="mb-3 font-mono text-xs uppercase tracking-[0.3em] text-primary">
            The Foundation
          </p>
          <h2 className="text-balance text-3xl font-bold tracking-tight text-foreground md:text-4xl">
            The Philosophy
          </h2>
          <div className="mx-auto mt-4 h-px w-16 bg-primary" />
        </ScrollReveal>

        <StaggerContainer className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {pillars.map((pillar) => (
            <motion.div
              key={pillar.title}
              variants={staggerChild}
              className="glass group flex flex-col gap-4 rounded-xl p-8 transition-all duration-300 hover:bg-white/[0.05]"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                <pillar.icon className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-lg font-bold text-foreground">
                {pillar.title}
              </h3>
              <p className="leading-relaxed text-muted-foreground">
                {pillar.description}
              </p>
            </motion.div>
          ))}
        </StaggerContainer>
      </div>
    </section>
  )
}
