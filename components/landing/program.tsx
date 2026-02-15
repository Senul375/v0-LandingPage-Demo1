"use client"

import { motion } from "framer-motion"
import { Target, Activity, Utensils, MessageCircle } from "lucide-react"
import { ScrollReveal, StaggerContainer, staggerChild } from "@/components/ui/scroll-reveal"

const features = [
  {
    icon: Target,
    title: "The Blueprint",
    description:
      "Personalised metabolic conditioning built around your body composition, movement screen, and performance benchmarks. Recalibrated every 4 weeks.",
  },
  {
    icon: Activity,
    title: "Bio-Data Integration",
    description:
      "Monthly deep-dives into your Oura, Whoop, or Apple Watch data. We track HRV, sleep architecture, and recovery to auto-adjust your training load.",
  },
  {
    icon: Utensils,
    title: "Zero-Prep Nutrition",
    description:
      "A minimalist meal framework designed for execs who eat out, travel, and don't meal-prep. No calorie counting. No stress.",
  },
  {
    icon: MessageCircle,
    title: "Concierge Access",
    description:
      "Direct line to Jax via Slack or WhatsApp. Real-time troubleshooting, hotel gym protocols, and travel adjustments within 60 minutes.",
  },
]

export function Program() {
  return (
    <section id="program" className="w-full py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-4 md:px-8 lg:px-16">
        <ScrollReveal className="mb-16 text-center">
          <p className="mb-3 font-mono text-xs uppercase tracking-[0.3em] text-primary">
            What You Get
          </p>
          <h2 className="text-balance text-3xl font-bold tracking-tight text-foreground md:text-4xl">
            The Executive Engine Protocol
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-pretty text-muted-foreground">
            A 12-week transformation system engineered for the way you actually
            live, work, and travel.
          </p>
          <div className="mx-auto mt-6 h-px w-16 bg-primary" />
        </ScrollReveal>

        <StaggerContainer className="grid grid-cols-1 gap-6 md:grid-cols-2">
          {features.map((feature) => (
            <motion.div
              key={feature.title}
              variants={staggerChild}
              className="glass group flex gap-5 rounded-xl p-8 transition-all duration-300 hover:bg-white/[0.05]"
            >
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-primary/10">
                <feature.icon className="h-6 w-6 text-primary" />
              </div>
              <div className="flex flex-col gap-2">
                <h3 className="text-lg font-bold text-foreground">
                  {feature.title}
                </h3>
                <p className="leading-relaxed text-muted-foreground">
                  {feature.description}
                </p>
              </div>
            </motion.div>
          ))}
        </StaggerContainer>
      </div>
    </section>
  )
}
