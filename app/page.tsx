import { Header } from "@/components/landing/header"
import { Hero } from "@/components/landing/hero"
import { Philosophy } from "@/components/landing/philosophy"
import { SocialProof } from "@/components/landing/social-proof"
import { Program } from "@/components/landing/program"
import { Pricing } from "@/components/landing/pricing"
import { FAQ } from "@/components/landing/faq"
import { CTABanner } from "@/components/landing/cta-banner"
import { Footer } from "@/components/landing/footer"
import { BackToTop } from "@/components/ui/back-to-top"
import { CTAProvider } from "@/hooks/use-cta"

export default function Page() {
  return (
    <CTAProvider>
      <Header />

      <main>
        <Hero />

        <CTABanner
          headline="Ready to operate at your peak?"
          buttonText="Access the Protocol"
        />

        <Philosophy />

        <CTABanner
          headline="Join the executives who refuse to slow down."
          buttonText="Claim My Spot"
        />

        <SocialProof />

        <Program />

        <CTABanner
          headline="Your body is your most valuable asset."
          buttonText="Get Started Now"
        />

        <Pricing />

        <FAQ />
      </main>

      <Footer />

      <BackToTop />
    </CTAProvider>
  )
}
