"use client"

import Link from "next/link"
import { Instagram, Linkedin } from "lucide-react"

export function Footer() {
  const currentYear = new Date().getFullYear()

  function scrollToTop() {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  return (
    <footer className="w-full border-t border-border bg-secondary/30">
      <div className="mx-auto max-w-7xl px-4 py-16 md:px-8 lg:px-16">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-3">
          {/* Brand */}
          <div className="flex flex-col gap-3">
            <span className="font-mono text-sm font-bold uppercase tracking-[0.25em] text-foreground">
              Jax Sterling
            </span>
            <p className="max-w-xs text-sm leading-relaxed text-muted-foreground">
              Precision performance training for high-stakes executives. Build a
              body that matches your ambition.
            </p>
          </div>

          {/* Certifications */}
          <div className="flex flex-col gap-3">
            <p className="font-mono text-xs uppercase tracking-widest text-muted-foreground">
              Certifications
            </p>
            <div className="flex flex-col gap-2">
              <span className="text-sm text-foreground">NASM-PES</span>
              <span className="text-sm text-foreground">
                Precision Nutrition L2
              </span>
              <span className="text-sm text-foreground">
                FMS Certified
              </span>
            </div>
          </div>

          {/* Links */}
          <div className="flex flex-col gap-3">
            <p className="font-mono text-xs uppercase tracking-widest text-muted-foreground">
              Connect
            </p>
            <div className="flex flex-col gap-2">
              <Link
                href="/contact"
                className="text-sm text-foreground transition-colors hover:text-primary"
              >
                Contact Marcus
              </Link>
              <div className="flex gap-4">
                <a
                  href="#"
                  className="text-muted-foreground transition-colors hover:text-primary"
                  aria-label="Instagram"
                >
                  <Instagram className="h-5 w-5" />
                </a>
                <a
                  href="#"
                  className="text-muted-foreground transition-colors hover:text-primary"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="h-5 w-5" />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom row */}
        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-border pt-8 text-xs text-muted-foreground md:flex-row">
          <p>{`\u00A9 ${currentYear} Jax Sterling. All rights reserved.`}</p>
          <div className="flex gap-6">
            <a href="#" className="transition-colors hover:text-foreground">
              Privacy Policy
            </a>
            <a href="#" className="transition-colors hover:text-foreground">
              Terms of Service
            </a>
            <button
              onClick={scrollToTop}
              className="transition-colors hover:text-primary"
            >
              Back to Top
            </button>
          </div>
        </div>
      </div>
    </footer>
  )
}
