"use client"

import { motion } from "framer-motion"

export function AnimatedOrb() {
  return (
    <div className="absolute inset-0 overflow-hidden">
      {/* Main breathing orb */}
      <motion.div
        className="absolute right-1/4 top-1/4 h-96 w-96 rounded-full opacity-20 blur-3xl"
        style={{
          background:
            "radial-gradient(circle, var(--color-primary) 0%, transparent 70%)",
        }}
        animate={{
          scale: [1, 1.15, 1],
          opacity: [0.15, 0.25, 0.15],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Secondary floating orb (subtle) */}
      <motion.div
        className="absolute -right-32 bottom-1/4 h-80 w-80 rounded-full opacity-10 blur-3xl"
        style={{
          background:
            "radial-gradient(circle, var(--color-primary) 0%, transparent 70%)",
        }}
        animate={{
          x: [0, 40, 0],
          y: [0, -60, 0],
          opacity: [0.08, 0.15, 0.08],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Tertiary accent orb */}
      <motion.div
        className="absolute -left-20 top-1/3 h-72 w-72 rounded-full opacity-5 blur-3xl"
        style={{
          background:
            "radial-gradient(circle, var(--color-primary) 0%, transparent 70%)",
        }}
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.05, 0.12, 0.05],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1,
        }}
      />
    </div>
  )
}
