"use client"

import { useState } from "react"
import { Header } from "@/components/landing/header"
import { Hero } from "@/components/landing/hero"
import { Philosophy } from "@/components/landing/philosophy"
import { SocialProof } from "@/components/landing/social-proof"
import { Program } from "@/components/landing/program"
import { Pricing } from "@/components/landing/pricing"
import { FAQ } from "@/components/landing/faq"
import { CTABanner } from "@/components/landing/cta-banner"
import { Footer } from "@/components/landing/footer"
import { CTAModal } from "@/components/ui/cta-modal"
import { BackToTop } from "@/components/ui/back-to-top"

export default function Page() {
  const [modalOpen, setModalOpen] = useState(false)

  function openModal() {
    setModalOpen(true)
  }

  return (
    <>
      <Header onCTAClick={openModal} />

      <main>
        <Hero onCTAClick={openModal} />

        <CTABanner
          headline="Ready to operate at your peak?"
          buttonText="Access the Protocol"
          onCTAClick={openModal}
        />

        <Philosophy />

        <CTABanner
          headline="Join the executives who refuse to slow down."
          buttonText="Claim My Spot"
          onCTAClick={openModal}
        />

        <SocialProof />

        <Program />

        <CTABanner
          headline="Your body is your most valuable asset."
          buttonText="Get Started Now"
          onCTAClick={openModal}
        />

        <Pricing onCTAClick={openModal} />

        <FAQ />
      </main>

      <Footer />

      <BackToTop />
      <CTAModal open={modalOpen} onOpenChange={setModalOpen} />
    </>
  )
}
