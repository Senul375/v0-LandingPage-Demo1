"use client"

import Image from "next/image"
import { Star } from "lucide-react"
import { LogoMarquee } from "@/components/ui/logo-marquee"
import { ScrollReveal, StaggerContainer, staggerChild } from "@/components/ui/scroll-reveal"
import { motion } from "framer-motion"

const testimonials = [
  {
    name: "Mark T.",
    role: "CEO, SaaS Startup",
    avatar: "/images/testimonial-mark.jpg",
    quote:
      "I went from skipping workouts to completing 5 sessions a week without touching my calendar. My focus during deep work has doubled.",
    rating: 5,
  },
  {
    name: "Sarah K.",
    role: "Managing Partner, VC Fund",
    avatar: "/images/testimonial-sarah.jpg",
    quote:
      "The bio-integration changed everything. My HRV increased by 22% in 6 weeks. This isn't just fitness; it's operational optimization.",
    rating: 5,
  },
]

export function SocialProof() {
  return (
    <section className="w-full py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-4 md:px-8 lg:px-16">
        {/* Logo Marquee */}
        <ScrollReveal>
          <LogoMarquee />
        </ScrollReveal>

        {/* Testimonials */}
        <ScrollReveal className="mb-12 mt-16 text-center">
          <p className="mb-3 font-mono text-xs uppercase tracking-[0.3em] text-primary">
            Results Speak
          </p>
          <h2 className="text-balance text-3xl font-bold tracking-tight text-foreground md:text-4xl">
            Trusted by the Best
          </h2>
        </ScrollReveal>

        <StaggerContainer className="grid grid-cols-1 gap-6 md:grid-cols-2">
          {testimonials.map((t) => (
            <motion.div
              key={t.name}
              variants={staggerChild}
              className="glass relative flex flex-col gap-5 rounded-xl p-8 border-border hover:border-calm/30 transition-colors"
            >
              {/* Technical Header */}
              <div className="flex justify-between items-start mb-2">
                <div className="flex flex-col gap-1">
                  <span className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
                    Testimonial
                  </span>
                  <span className="font-mono text-[8px] text-muted-foreground/60 uppercase">
                    Ref: {t.name.split('').map(c => c.charCodeAt(0)).join('').substring(0, 6)}
                  </span>
                </div>
                <div className="flex items-center gap-1.5 px-2 py-0.5 rounded-full bg-calm border border-calm/30">
                  <div className="h-1 w-1 rounded-full bg-calm animate-pulse" />
                  <span className="font-mono text-[9px] font-bold text-calm uppercase">Verified</span>
                </div>
              </div>

              {/* Stars */}
              <div className="flex gap-1">
                {Array.from({ length: t.rating }).map((_, i) => (
                  <Star
                    key={i}
                    className="h-3 w-3 fill-calm text-calm"
                  />
                ))}
              </div>

              {/* Quote */}
              <p className="text-pretty leading-relaxed text-foreground italic border-l-2 border-calm/30 pl-4 py-1">
                {`"${t.quote}"`}
              </p>

              {/* Author */}
              <div className="mt-auto flex items-center gap-3 pt-4 border-t border-white/5">
                <div className="relative h-12 w-12 overflow-hidden rounded-lg border border-white/10">
                  <Image
                    src={t.avatar}
                    alt={`${t.name} testimonial`}
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <p className="font-mono text-sm font-bold text-foreground uppercase tracking-tight">
                    {t.name}
                  </p>
                  <p className="font-mono text-[10px] text-muted-foreground uppercase tracking-wider">{t.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </StaggerContainer>
      </div>
    </section>
  )
}
