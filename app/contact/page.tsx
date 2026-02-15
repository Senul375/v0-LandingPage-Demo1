"use client"

import Link from "next/link"
import { useState } from "react"
import { ArrowLeft, Send, Mail, MapPin, Clock } from "lucide-react"
import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"
import { Footer } from "@/components/landing/footer"
import { CTABanner } from "@/components/landing/cta-banner"
import { CTAModal } from "@/components/ui/cta-modal"
import { LearnMoreModal } from "@/components/ui/learn-more-modal"

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false)
  const [ctaOpen, setCtaOpen] = useState(false)
  const [learnMoreOpen, setLearnMoreOpen] = useState(false)

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Simple header */}
      <header className="flex items-center justify-between px-4 py-6 md:px-8 lg:px-16">
        <Link
          href="/"
          className="font-mono text-sm font-bold uppercase tracking-[0.25em] text-foreground"
        >
          Jax Sterling
        </Link>
        <Link
          href="/"
          className="flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
        >
          <ArrowLeft className="h-4 w-4" />
          Back to Home
        </Link>
      </header>

      <main className="mx-auto max-w-5xl px-4 py-16 md:px-8 lg:px-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <p className="mb-3 font-mono text-xs uppercase tracking-[0.3em] text-primary">
            Get in Touch
          </p>
          <h1 className="text-balance text-3xl font-bold tracking-tight text-foreground md:text-4xl">
            Contact Marcus
          </h1>
          <p className="mt-4 max-w-xl text-muted-foreground">
            {
              "Have questions about the Executive Engine Protocol? Reach out and we'll get back to you within 24 hours."
            }
          </p>
        </motion.div>

        <div className="mt-12 grid grid-cols-1 gap-12 lg:grid-cols-5">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="lg:col-span-3"
          >
            {submitted ? (
              <div className="glass flex flex-col items-center gap-4 rounded-xl p-12 text-center">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
                  <Send className="h-8 w-8 text-primary" />
                </div>
                <h2 className="text-xl font-bold text-foreground">
                  Message Sent
                </h2>
                <p className="text-muted-foreground">
                  {
                    "Thanks for reaching out. We'll be in touch within 24 hours."
                  }
                </p>
                <Button
                  variant="outline"
                  className="mt-4"
                  onClick={() => setSubmitted(false)}
                >
                  Send Another Message
                </Button>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                className="glass flex flex-col gap-6 rounded-xl p-8"
              >
                <div className="flex flex-col gap-2">
                  <label
                    htmlFor="name"
                    className="font-mono text-xs uppercase tracking-widest text-muted-foreground"
                  >
                    Name
                  </label>
                  <input
                    id="name"
                    type="text"
                    required
                    className="rounded-lg border border-border bg-secondary/50 px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
                    placeholder="Your full name"
                  />
                </div>

                <div className="flex flex-col gap-2">
                  <label
                    htmlFor="email"
                    className="font-mono text-xs uppercase tracking-widest text-muted-foreground"
                  >
                    Email
                  </label>
                  <input
                    id="email"
                    type="email"
                    required
                    className="rounded-lg border border-border bg-secondary/50 px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
                    placeholder="you@company.com"
                  />
                </div>

                <div className="flex flex-col gap-2">
                  <label
                    htmlFor="message"
                    className="font-mono text-xs uppercase tracking-widest text-muted-foreground"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    required
                    rows={5}
                    className="rounded-lg border border-border bg-secondary/50 px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
                    placeholder="Tell us about your goals..."
                  />
                </div>

                <Button
                  type="submit"
                  size="lg"
                  className="rounded-lg font-mono text-sm uppercase tracking-wider"
                >
                  Send Message
                  <Send className="ml-2 h-4 w-4" />
                </Button>
              </form>
            )}
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-col gap-8 lg:col-span-2"
          >
            {[
              {
                icon: Mail,
                label: "Email",
                value: "marcus@jaxsterling.com",
              },
              {
                icon: MapPin,
                label: "Based In",
                value: "Los Angeles, CA",
              },
              {
                icon: Clock,
                label: "Response Time",
                value: "Within 24 hours",
              },
            ].map((item) => (
              <div key={item.label} className="flex gap-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/10">
                  <item.icon className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <p className="font-mono text-xs uppercase tracking-widest text-muted-foreground">
                    {item.label}
                  </p>
                  <p className="mt-1 text-sm text-foreground">{item.value}</p>
                </div>
              </div>
            ))}

            {/* Action Buttons */}
            <div className="flex flex-col gap-3 border-t border-border pt-8">
              <Button
                size="lg"
                className="w-full rounded-lg font-mono text-sm uppercase tracking-wider"
                onClick={() => setCtaOpen(true)}
              >
                Join Program
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="w-full rounded-lg font-mono text-sm uppercase tracking-wider"
                onClick={() => setLearnMoreOpen(true)}
              >
                Learn More
              </Button>
            </div>
          </motion.div>
        </div>
      </main>

      {/* CTA Section */}
      <CTABanner
        headline="Ready to Build Your Executive Engine?"
        buttonText="Get the Protocol"
        onCTAClick={() => setCtaOpen(true)}
      />

      <Footer />

      <CTAModal open={ctaOpen} onOpenChange={setCtaOpen} />
      <LearnMoreModal
        open={learnMoreOpen}
        onOpenChange={setLearnMoreOpen}
        onJoinClick={() => setCtaOpen(true)}
      />
    </div>
  )
}
