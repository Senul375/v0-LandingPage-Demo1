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
    highlight: "Recalibrated every 4 weeks",
  },
  {
    icon: Activity,
    title: "Bio-Data Integration",
    description:
      "Monthly deep-dives into your Oura, Whoop, or Apple Watch data. We track HRV, sleep architecture, and recovery to auto-adjust your training load.",
    highlight: "auto-adjust your training load",
  },
  {
    icon: Utensils,
    title: "Zero-Prep Nutrition",
    description:
      "A minimalist meal framework designed for execs who eat out, travel, and don't meal-prep. No calorie counting. No stress.",
    highlight: "No calorie counting. No stress",
  },
  {
    icon: MessageCircle,
    title: "Concierge Access",
    description:
      "Direct line to Jax via Slack or WhatsApp. Real-time troubleshooting, hotel gym protocols, and travel adjustments within 60 minutes.",
    highlight: "within 60 minutes",
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
          <p className="mx-auto mt-2 max-w-2xl font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
            Four integrated systems working in tactical precision
          </p>
          <div className="mx-auto mt-6 h-px w-16 bg-primary" />
        </ScrollReveal>

        {/* Timeline Indicator */}
        <div className="mb-12 flex items-center justify-center gap-2">
          {features.map((_, index) => (
            <div key={index} className="flex items-center gap-2">
              <div className="flex h-8 w-8 items-center justify-center rounded-full border-2 border-primary bg-primary/10">
                <span className="font-mono text-xs font-bold text-primary">{index + 1}</span>
              </div>
              {index < features.length - 1 && (
                <div className="h-px w-8 bg-primary/30 md:w-16" />
              )}
            </div>
          ))}
        </div>

        <StaggerContainer className="grid grid-cols-1 gap-6 md:grid-cols-2">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              variants={staggerChild}
              className="glass group relative flex gap-5 rounded-xl p-8 transition-all duration-300 hover:bg-white/[0.05] hover:shadow-lg hover:-translate-y-1 focus-within:ring-2 focus-within:ring-primary/50"
              tabIndex={0}
            >
              {/* Step number badge */}
              <div className="absolute -left-3 -top-3 flex h-8 w-8 items-center justify-center rounded-full border-2 border-primary bg-background">
                <span className="font-mono text-xs font-bold text-primary">{index + 1}</span>
              </div>
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-primary/10 transition-colors group-hover:bg-primary/20">
                <feature.icon className="h-6 w-6 text-primary" />
              </div>
              <div className="flex flex-col gap-2">
                <h3 className="text-lg font-bold text-foreground">
                  {feature.title}
                </h3>
                <p className="text-sm leading-relaxed text-muted-foreground">
                  {feature.description.includes(feature.highlight) ? (
                    <>
                      {feature.description.split(feature.highlight)[0]}
                      <strong className="font-semibold text-foreground">{feature.highlight}</strong>
                      {feature.description.split(feature.highlight)[1]}
                    </>
                  ) : (
                    feature.description
                  )}
                </p>
              </div>
            </motion.div>
          ))}
        </StaggerContainer>
      </div>
    </section>
  )
}
