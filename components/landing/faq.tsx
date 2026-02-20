"use client"

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { ScrollReveal } from "@/components/ui/scroll-reveal"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import { useCTA } from "@/hooks/use-cta"

const faqs = [
  {
    q: "How much time do I need per day?",
    a: "Each session is designed to take 30 minutes or less. We optimise for efficiency over volume. Most clients complete their training during a lunch break or before their first call. This fits seamlessly into your executive schedule.",
  },
  {
    q: "What if I travel frequently?",
    a: "The protocol includes hotel gym adaptations and bodyweight-only alternatives for every session. You also get real-time travel adjustments via concierge access. Your training never stops, even on the road.",
  },
  {
    q: "I've tried other programs before and failed. How is this different?",
    a: "Unlike generic fitness programs, every element is personalised to your biometrics, schedule, and recovery data. We integrate with your wearable devices and adapt weekly. Plus, you get direct access to Jax for real-time adjustments. This isn't a one-size-fits-all approach—it's built specifically for your body and schedule.",
  },
  {
    q: "What about injuries or physical limitations?",
    a: "Every protocol starts with a comprehensive movement screen. We design your program around your current capabilities and any limitations. If something doesn't feel right, you have immediate concierge access to adjust. Your safety and longevity are our top priorities.",
  },
  {
    q: "How is my biometric data used and protected?",
    a: "Your data is used exclusively to personalize your training protocol and track progress. We integrate with your existing devices (Oura, Whoop, Apple Watch) via secure APIs. Your data is never shared, sold, or used for any purpose beyond optimizing your protocol. Full privacy policy available upon request.",
  },
  {
    q: "Who is this program designed for?",
    a: "The Executive Engine Protocol is built exclusively for high-performance professionals, founders, and executives who demand peak physical output but have minimal time. If you have 30 minutes a day and want results without the guesswork, this is for you.",
  },
  {
    q: "What's included in the $599?",
    a: "Full 12-week protocol, bi-weekly coaching calls, bio-data reviews, nutrition framework, 24/7 concierge access, and all future protocol updates during your cycle. Everything you need for a complete transformation.",
  },
  {
    q: "How does the guarantee work?",
    a: "Try the complete protocol for 30 days. If you don't see measurable improvements in energy, performance, and body composition, contact us for a full refund. Zero risk. No questions asked.",
  },
  {
    q: "What happens after I apply?",
    a: "Step 1: You'll receive a brief intake form and movement screen questionnaire. Step 2: Within 48 hours, we'll schedule your initial 1:1 call with Jax to discuss your goals and current state. Step 3: Your personalized protocol is delivered within 5 business days, and you begin your transformation. The entire onboarding process takes less than a week.",
  },
]

export function FAQ() {
  return (
    <section className="w-full py-24 md:py-32">
      <div className="mx-auto max-w-3xl px-4 md:px-8 lg:px-16">
        <ScrollReveal className="mb-12 text-center">
          <p className="mb-3 font-mono text-xs uppercase tracking-[0.3em] text-primary">
            Common Questions
          </p>
          <h2 className="text-balance text-3xl font-bold tracking-tight text-foreground md:text-4xl">
            Frequently Asked Questions
          </h2>
          <p className="mx-auto mt-3 max-w-xl font-mono text-[10px] uppercase tracking-[0.2em] text-calm">
            Everything you need to know about the protocol
          </p>
        </ScrollReveal>

        <ScrollReveal>
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, i) => (
              <AccordionItem
                key={i}
                value={`faq-${i}`}
                className="border-calm/20"
              >
                <AccordionTrigger className="text-left text-base text-foreground hover:no-underline hover:text-primary">
                  {faq.q}
                </AccordionTrigger>
                <AccordionContent className="leading-relaxed text-muted-foreground">
                  {faq.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </ScrollReveal>

        {/* Final CTA */}
        <ScrollReveal className="mt-12 text-center">
          <div className="glass rounded-xl p-8">
            <h3 className="mb-4 text-xl font-bold text-foreground">
              Ready to transform your performance?
            </h3>
            <p className="mb-6 text-sm text-muted-foreground">
              Join the executives who refuse to slow down. Limited to 15 spots per month.
            </p>
            <FAQCTA />
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}

function FAQCTA() {
  const { openModal } = useCTA()
  return (
    <Button
      size="lg"
      className="rounded-lg font-mono text-sm uppercase tracking-wider"
      onClick={openModal}
    >
      Access the Protocol
      <ArrowRight className="ml-2 h-4 w-4" />
    </Button>
  )
}
