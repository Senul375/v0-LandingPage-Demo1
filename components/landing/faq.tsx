"use client"

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { ScrollReveal } from "@/components/ui/scroll-reveal"

const faqs = [
  {
    q: "Who is this program designed for?",
    a: "The Executive Engine Protocol is built exclusively for high-performance professionals, founders, and executives who demand peak physical output but have minimal time. If you have 30 minutes a day, this is for you.",
  },
  {
    q: "How much time do I need per day?",
    a: "Each session is designed to take 30 minutes or less. We optimise for efficiency over volume. Most clients complete their training during a lunch break or before their first call.",
  },
  {
    q: "What if I travel frequently?",
    a: "The protocol includes hotel gym adaptations and bodyweight-only alternatives for every session. You also get real-time travel adjustments via concierge access.",
  },
  {
    q: "How is this different from other programs?",
    a: "Unlike generic fitness programs, every element is personalised to your biometrics, schedule, and recovery data. We integrate with your wearable devices and adapt weekly.",
  },
  {
    q: "What's included in the $599?",
    a: "Full 12-week protocol, bi-weekly coaching calls, bio-data reviews, nutrition framework, 24/7 concierge access, and all future protocol updates during your cycle.",
  },
  {
    q: "How does the guarantee work?",
    a: "Try the complete protocol for 30 days. If you don't see measurable improvements in energy, performance, and body composition, contact us for a full refund. Zero risk.",
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
        </ScrollReveal>

        <ScrollReveal>
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, i) => (
              <AccordionItem
                key={i}
                value={`faq-${i}`}
                className="border-border"
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
      </div>
    </section>
  )
}
