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
              className="glass flex flex-col gap-5 rounded-xl p-8"
            >
              {/* Stars */}
              <div className="flex gap-1">
                {Array.from({ length: t.rating }).map((_, i) => (
                  <Star
                    key={i}
                    className="h-4 w-4 fill-primary text-primary"
                  />
                ))}
              </div>

              {/* Quote */}
              <p className="text-pretty leading-relaxed text-foreground">
                {`"${t.quote}"`}
              </p>

              {/* Author */}
              <div className="mt-auto flex items-center gap-3">
                <div className="relative h-10 w-10 overflow-hidden rounded-full">
                  <Image
                    src={t.avatar}
                    alt={`${t.name} testimonial`}
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <p className="text-sm font-semibold text-foreground">
                    {t.name}
                  </p>
                  <p className="text-xs text-muted-foreground">{t.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </StaggerContainer>
      </div>
    </section>
  )
}
