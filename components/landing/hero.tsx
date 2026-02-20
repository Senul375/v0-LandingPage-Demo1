"use client"

import Image from "next/image"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { ArrowRight, ChevronDown } from "lucide-react"
import { AnimatedOrb } from "@/components/ui/animated-orb"
import { useCTA } from "@/hooks/use-cta"

export function Hero() {
  const { openModal } = useCTA()
  return (
    <section className="relative flex min-h-screen w-full items-center overflow-hidden tactical-grid">
      {/* Animated Orb Background */}
      <AnimatedOrb />

      {/* Background image for mobile */}
      <div className="absolute inset-0 lg:hidden">
        <Image
          src="/images/hero-jax.jpg"
          alt="Jax Sterling - Elite Performance Trainer"
          fill
          className="object-cover object-top"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/80 to-background/40" />
      </div>

      <div className="relative z-10 mx-auto flex w-full max-w-7xl flex-col items-center gap-12 px-4 pt-24 md:px-8 lg:flex-row lg:gap-16 lg:px-16 lg:pt-0">
        {/* Text Content */}
        <div className="flex flex-1 flex-col gap-6 lg:gap-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.25, 0.1, 0.25, 1] }}
          >
            <div className="flex items-center gap-3 mb-4">
              <p className="font-mono text-xs uppercase tracking-[0.3em] text-primary">
                The Engine Protocol
              </p>
              <div className="rounded-full bg-primary/20 border border-primary/30 px-3 py-1">
                <span className="font-mono text-[10px] font-bold uppercase tracking-wider text-primary">
                  500+ Executives Trained
                </span>
              </div>
            </div>
            <h1 className="text-balance text-4xl font-bold leading-tight tracking-tight text-foreground md:text-5xl lg:text-7xl">
              Build a high-performance body that works as hard as your business.
            </h1>
            <p className="mt-2 font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
              A tactical, data-driven protocol engineered for precision
            </p>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.15, ease: [0.25, 0.1, 0.25, 1] }}
            className="max-w-lg text-pretty text-lg leading-relaxed text-muted-foreground md:text-xl"
          >
            Three 30-minute sessions per week. 12 weeks total. No missed board meetings.
            Reclaim your focus, strength, and longevity without sacrificing your calendar.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
            className="flex flex-col gap-4 sm:flex-row sm:items-center"
          >
            <Button
              size="lg"
              className="glow-lime rounded-lg px-8 font-mono text-sm uppercase tracking-wider"
              onClick={openModal}
            >
              Access the Protocol
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
            <div className="flex flex-col">
              <span className="text-xs font-semibold text-primary uppercase tracking-wider">
                Limited to 15 spots/month
              </span>
              <span className="text-[10px] text-muted-foreground">
                30-day ironclad guarantee
              </span>
            </div>
          </motion.div>

          {/* Quick stats */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.5 }}
            className="mt-4 flex gap-8 border-t border-border pt-6 lg:mt-8"
          >
            {[
              { value: "500+", label: "Executives Trained" },
              { value: "12 Weeks", label: "Protocol Duration" },
              { value: "30 Min", label: "Daily Sessions" },
            ].map((stat) => (
              <div key={stat.label} className="flex flex-col">
                <span className="font-mono text-xl font-bold text-primary md:text-2xl">
                  {stat.value}
                </span>
                <span className="text-xs text-muted-foreground">{stat.label}</span>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Scroll Down Indicator */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.8 }}
          className="absolute bottom-8 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 lg:flex"
        >
          <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
            Scroll to explore
          </span>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
          >
            <ChevronDown className="h-5 w-5 text-muted-foreground" />
          </motion.div>
        </motion.div>

        {/* Hero Image - Desktop */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9, delay: 0.2, ease: [0.25, 0.1, 0.25, 1] }}
          className="hidden flex-1 lg:block"
        >
          <div className="relative aspect-[3/4] w-full max-w-lg overflow-hidden rounded-2xl">
            <Image
              src="/images/hero-jax.jpg"
              alt="Jax Sterling - Elite Performance Trainer"
              fill
              className="object-cover object-top"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background/60 via-transparent to-transparent" />
          </div>
        </motion.div>
      </div>
    </section>
  )
}
