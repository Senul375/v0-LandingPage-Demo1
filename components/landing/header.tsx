"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import { motion, AnimatePresence } from "framer-motion"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useCTA } from "@/hooks/use-cta"

const navLinks = [
  { label: "Philosophy", href: "#philosophy" },
  { label: "Program", href: "#program" },
  { label: "Pricing", href: "#pricing" },
  { label: "Apply", href: "/contact" },
]

export function Header() {
  const { openModal } = useCTA()
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [activeSection, setActiveSection] = useState("")

  useEffect(() => {
    function onScroll() {
      setScrolled(window.scrollY > 50)
      
      // Scrollspy: determine which section is currently in view
      const sections = navLinks
        .filter(link => link.href.startsWith("#"))
        .map(link => ({
          id: link.href.substring(1),
          element: document.querySelector(link.href),
        }))
        .filter(s => s.element !== null)

      const scrollPosition = window.scrollY + 100 // Offset for header

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i]
        if (section.element) {
          const rect = section.element.getBoundingClientRect()
          const top = rect.top + window.scrollY
          if (scrollPosition >= top) {
            setActiveSection(`#${section.id}`)
            break
          }
        }
      }
    }
    window.addEventListener("scroll", onScroll, { passive: true })
    onScroll() // Initial check
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = ""
    }
    return () => {
      document.body.style.overflow = ""
    }
  }, [mobileOpen])

  function handleNavClick(href: string) {
    setMobileOpen(false)
    if (href.startsWith("#")) {
      const el = document.querySelector(href)
      el?.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <>
      <header
        className={`fixed left-0 right-0 top-0 z-50 transition-all duration-300 ${scrolled ? "glass-strong py-3" : "bg-transparent py-5"
          }`}
      >
        <div className="mx-auto flex w-full max-w-7xl items-center justify-between px-4 md:px-8 lg:px-16">
          {/* Logo */}
          <Link
            href="/"
            className="font-mono text-sm font-bold uppercase tracking-[0.25em] text-foreground"
          >
            Jax Sterling
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden items-center gap-8 lg:flex" aria-label="Main navigation">
            {navLinks.map((link) =>
              link.href.startsWith("#") ? (
                <button
                  key={link.label}
                  onClick={() => handleNavClick(link.href)}
                  className={`font-mono text-xs uppercase tracking-widest transition-colors ${
                    activeSection === link.href
                      ? "text-primary font-semibold"
                      : "text-muted-foreground hover:text-foreground"
                  }`}
                >
                  {link.label}
                </button>
              ) : (
                <Link
                  key={link.label}
                  href={link.href}
                  className="font-mono text-xs uppercase tracking-widest text-muted-foreground transition-colors hover:text-foreground"
                >
                  {link.label}
                </Link>
              )
            )}
            <Button
              size="sm"
              className="rounded-lg font-mono text-xs uppercase tracking-wider"
              onClick={openModal}
            >
              Access Protocol
            </Button>
          </nav>

          {/* Mobile Burger */}
          <button
            className="flex h-10 w-10 items-center justify-center lg:hidden"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
          >
            {mobileOpen ? (
              <X className="h-6 w-6 text-foreground" />
            ) : (
              <Menu className="h-6 w-6 text-foreground" />
            )}
          </button>
        </div>
      </header>

      {/* Mobile Overlay */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ duration: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
            className="fixed inset-0 z-40 flex flex-col items-center justify-center gap-8 bg-background/98 backdrop-blur-md"
          >
            {navLinks.map((link) =>
              link.href.startsWith("#") ? (
                <button
                  key={link.label}
                  onClick={() => handleNavClick(link.href)}
                  className="font-mono text-2xl uppercase tracking-widest text-foreground transition-colors hover:text-primary"
                >
                  {link.label}
                </button>
              ) : (
                <Link
                  key={link.label}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className="font-mono text-2xl uppercase tracking-widest text-foreground transition-colors hover:text-primary"
                >
                  {link.label}
                </Link>
              )
            )}
            <div className="mt-8 flex flex-col items-center gap-3">
              <Button
                size="lg"
                className="rounded-lg font-mono uppercase tracking-wider"
                onClick={() => {
                  setMobileOpen(false)
                  openModal()
                }}
              >
                Start Training
              </Button>
              <p className="text-center text-xs text-muted-foreground">
                <span className="font-semibold text-primary">15 spots/month</span> • 30-day guarantee
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
