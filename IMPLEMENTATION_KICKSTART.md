# IMPLEMENTATION KICKSTART: Jax Sterling - The Engine

## Project Overview

Premium, high-conversion landing page + contact page for **Jax Sterling: The Engine** - a longevity-focused personal trainer for high-performance executives. Dark-mode, athletic-luxury aesthetic. Prototype-stage with placeholder content.

---

## 1. Design Token System

### Color Palette (4 Colors)

| Token       | Hex       | HSL                  | Usage                                      |
| ----------- | --------- | -------------------- | ------------------------------------------ |
| Matte Black | `#0C0C0C` | `0 0% 4.7%`         | Background, base                           |
| Electric Lime (Accent) | `#C6FF5E` | `86 100% 68%` | CTAs, highlights, active states, links     |
| Off-White   | `#E8E8E8` | `0 0% 91%`          | Primary text, headings                     |
| Muted Gray  | `#7A7A7A` | `0 0% 48%`          | Secondary/muted text, borders, subtle UI   |

### CSS Variable Mapping

```
:root (dark-first, single theme)
--background:        0 0% 4.7%         /* #0C0C0C - Matte Black */
--foreground:        0 0% 91%          /* #E8E8E8 - Off-White */
--card:              0 0% 7%           /* Slightly lighter black for glass cards */
--card-foreground:   0 0% 91%          /* Off-White */
--popover:           0 0% 7%
--popover-foreground:0 0% 91%
--primary:           86 100% 68%       /* #C6FF5E - Electric Lime */
--primary-foreground:0 0% 4.7%         /* Dark text on lime buttons */
--secondary:         0 0% 12%          /* Dark gray surfaces */
--secondary-foreground: 0 0% 91%
--muted:             0 0% 12%
--muted-foreground:  0 0% 48%          /* #7A7A7A */
--accent:            86 100% 68%       /* Electric Lime for accent elements */
--accent-foreground: 0 0% 4.7%
--destructive:       0 84% 60%
--destructive-foreground: 0 0% 98%
--border:            0 0% 15%          /* Subtle borders */
--input:             0 0% 15%
--ring:              86 100% 68%       /* Lime focus ring */
--radius:            0.75rem
```

### Glass Card Effect

```css
.glass {
  background: rgba(255, 255, 255, 0.03);
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
  border: 1px solid rgba(255, 255, 255, 0.06);
}
```

### Typography

- **Font Family**: Geist (sans) + Geist Mono (mono) - already in project
- **Headings**: Geist, bold/extrabold, tracking-tight
- **Body**: Geist, regular weight, leading-relaxed
- **Accent/Labels**: Geist Mono for stats, prices, badge labels

---

## 2. File Architecture

```
app/
  layout.tsx              # Root layout (Geist fonts, SEO metadata, smooth scroll)
  page.tsx                # Landing page (imports all section components)
  contact/
    page.tsx              # Contact Marcus page
  globals.css             # Design tokens, glass utilities, animations

components/
  landing/
    header.tsx            # Sticky nav + mobile burger menu + CTA
    hero.tsx              # Hero section with headline, subheadline, CTA
    philosophy.tsx        # 3-column philosophy feature cards
    social-proof.tsx      # Logo marquee + testimonial cards
    program.tsx           # Executive Engine program details
    pricing.tsx           # Pricing card with anchor pricing
    faq.tsx               # Accordion FAQ section
    cta-banner.tsx        # Reusable mid-page CTA banner (used 3+ times)
    footer.tsx            # Trust & Authority footer (Option A)
  
  ui/
    cta-modal.tsx         # Modal triggered by all "GET THE PROTOCOL" CTAs
    back-to-top.tsx       # Smooth scroll back-to-top button
    scroll-reveal.tsx     # Reusable Framer Motion scroll animation wrapper
    logo-marquee.tsx      # Infinite scrolling logo ticker

public/
  images/
    hero-jax.jpg          # Generated hero image
    testimonial-mark.jpg  # Generated avatar
    testimonial-sarah.jpg # Generated avatar
```

### Component Size Rule

Each file targets ~200-400 lines max, hard cap ~600. If a section grows beyond, split into sub-components.

---

## 3. Section Breakdown

### 3.1 Header (`components/landing/header.tsx`)
- Sticky top nav, full-width, glass background on scroll
- Left: "JAX STERLING" wordmark (Geist Mono, uppercase, tracking-widest)
- Right (Desktop): Nav links (Philosophy, Program, Pricing, Contact) + "START TRAINING" CTA button (Electric Lime)
- Right (Mobile): Burger menu icon (Lucide `Menu` / `X`) toggling a full-screen overlay nav
- Scroll behavior: transparent at top, glass effect after scroll threshold

### 3.2 Hero (`components/landing/hero.tsx`)
- Full viewport height, F-pattern layout
- Left: Headline, subheadline, CTA button
  - H1: "Build a body that works as hard as your brain does."
  - Subtitle: "Precision performance for high-stakes lives. 30-minute functional protocols for the elite."
  - CTA: "GET THE PROTOCOL" (Electric Lime, opens modal)
- Right: Generated hero image of Jax (athletic, professional, looking toward CTA)
- Mobile: Stacked layout, image behind text with overlay gradient
- Animation: Fade-in + slide-up on load

### 3.3 CTA Banner (`components/landing/cta-banner.tsx`)
- Reusable component placed **between sections** (minimum 3 placements)
- Short punchy line + Electric Lime CTA button
- Variants for different copy:
  1. After Philosophy: "Ready to operate at your peak?" + "ACCESS THE PROTOCOL"
  2. After Social Proof: "Join the executives who refuse to slow down." + "CLAIM MY SPOT"
  3. After Pricing: "Your body is your most valuable asset." + "GET STARTED NOW"
- Glass card background with lime border accent

### 3.4 Philosophy (`components/landing/philosophy.tsx`)
- Section title: "THE PHILOSOPHY" (Geist Mono, uppercase, lime accent underline)
- 3-column grid (desktop), stacked (mobile)
- Glass cards with icons:
  1. `Zap` icon - "Efficiency > Intensity" - Brief description
  2. `Fingerprint` icon - "Bio-Individual Programming" - Brief description
  3. `HeartPulse` icon - "Longevity Science" - Brief description
- Scroll-reveal animation (stagger children)

### 3.5 Social Proof (`components/landing/social-proof.tsx`)
- **Logo Marquee**: Infinite horizontal scroll of "Featured In" logos (Forbes, Men's Health, GQ, Wired, Bloomberg) - text-based placeholders with `logo-marquee.tsx`
- **Testimonial Cards**: 2 glass cards with:
  - Small generated avatar
  - Name, role
  - Quote text
  - 5-star rating (Lucide `Star` filled in lime)
- Scroll-reveal animation

### 3.6 Program (`components/landing/program.tsx`)
- Section: "THE EXECUTIVE ENGINE PROTOCOL"
- 12-week transformation details in a 2x2 grid of glass feature cards:
  1. "The Blueprint" - Personalized metabolic conditioning
  2. "Bio-Data Integration" - Oura/Whoop/Apple Watch monthly reviews
  3. "Zero-Prep Nutrition" - Minimalist meal framework
  4. "Concierge Access" - 24/7 Slack/WhatsApp support
- Each card: icon + title + short description
- Scroll-reveal with stagger

### 3.7 Pricing (`components/landing/pricing.tsx`)
- Single large glass pricing card, centered
- Price anchor: ~~$1,200~~ crossed out "Retail Value"
- Investment price: "$599" large, bold, lime accent
- "One-time Access" subtitle
- Feature checklist (checkmarks in lime)
- CTA button: "GET THE PROTOCOL" (opens modal)
- Guarantee text below: "The Ironclad Resilience Guarantee" - 30-day refund copy
- Entrance animation: scale + fade

### 3.8 FAQ (`components/landing/faq.tsx`)
- Section: "FREQUENTLY ASKED QUESTIONS"
- Shadcn Accordion component, 5-6 placeholder items:
  1. "Who is this program designed for?"
  2. "How much time do I need per day?"
  3. "What if I travel frequently?"
  4. "How is this different from other programs?"
  5. "What's included in the $599?"
  6. "How does the guarantee work?"
- Placeholder answers (to be replaced)

### 3.9 Footer (`components/landing/footer.tsx`)
- Option A: Trust & Authority
- Full-width, slightly lighter dark surface
- 3-column layout:
  - Left: "JAX STERLING" wordmark + short bio line
  - Center: Certification badges (NASM-PES, Precision Nutrition) - text-based placeholders
  - Right: Social links (Instagram, LinkedIn icons) + "Contact Marcus" link to `/contact`
- Bottom row: Copyright + "Back to top" link (smooth scroll) + Privacy/Terms placeholder links

---

## 4. Pages

### Landing Page (`app/page.tsx`)
- Imports and composes all section components in order:
  1. Header
  2. Hero
  3. CTA Banner #1
  4. Philosophy
  5. CTA Banner #2
  6. Social Proof
  7. Program
  8. CTA Banner #3
  9. Pricing
  10. FAQ
  11. Footer
  12. Back-to-top button
  13. CTA Modal (rendered at root level, toggled via state)

### Contact Page (`app/contact/page.tsx`)
- Dark themed, consistent with landing
- Simple contact form: Name, Email, Message, Submit button
- No backend - placeholder form submission
- "Back to Home" link
- Shared Header and Footer

---

## 5. Interactions & Animations

### Framer Motion

**Package**: `framer-motion` (to be installed)

| Element              | Animation                    | Trigger         |
| -------------------- | ---------------------------- | --------------- |
| Hero content         | Fade up + slide (y: 30)     | Page load       |
| Section headings     | Fade in                      | Scroll into view |
| Glass cards          | Fade up, stagger 0.1s       | Scroll into view |
| Pricing card         | Scale from 0.95 + fade      | Scroll into view |
| Logo marquee         | CSS infinite scroll          | Always running  |
| CTA Modal            | Fade + scale overlay         | Button click    |
| Mobile nav overlay   | Slide from right             | Burger toggle   |
| Back-to-top          | Fade in after 400px scroll   | Scroll position |

### Scroll Behavior
- `scroll-behavior: smooth` on `<html>`
- `scroll-reveal.tsx` wrapper: reusable component using `framer-motion` `useInView` + `motion.div`
- Nav links use `scrollIntoView({ behavior: 'smooth' })` with section IDs

### CTA Modal (`components/ui/cta-modal.tsx`)
- Shadcn Dialog/Modal component
- Content: Program summary, price, "Proceed" button (placeholder action)
- Triggered by all CTA buttons across the page

---

## 6. Responsive Strategy

| Breakpoint | Layout Changes                                         |
| ---------- | ------------------------------------------------------ |
| Mobile (<640px) | Single column, stacked hero, burger menu, full-width cards, floating CTA consideration |
| Tablet (640-1024px) | 2-column grids, adjusted spacing, burger menu until lg |
| Desktop (>1024px) | Full layout, 3-column philosophy, side-by-side hero, sticky nav with links |

- All images: `object-cover` with responsive sizing
- Typography scales: `text-3xl md:text-4xl lg:text-6xl` for hero heading
- Card grids: `grid-cols-1 md:grid-cols-2 lg:grid-cols-3`
- Padding: `px-4 md:px-8 lg:px-16`

---

## 7. SEO Strategy

### Metadata (`app/layout.tsx`)
```ts
metadata = {
  title: "Jax Sterling | The Engine - Elite Performance Training for Executives",
  description: "12-week precision performance protocols for high-performance executives. Build a body that works as hard as your brain. 30-minute functional training by Jax Sterling.",
  keywords: ["executive fitness", "longevity training", "performance coaching", "Jax Sterling", "executive health"],
  openGraph: { ... },
  twitter: { ... }
}
```

### On-Page SEO
- Semantic HTML: `<header>`, `<main>`, `<section>`, `<footer>`, `<nav>`
- H1 on hero only, H2 for section titles, H3 for card headings
- Alt text on all generated images
- `aria-label` on interactive elements
- Structured heading hierarchy
- `text-balance` / `text-pretty` on headlines

### Viewport
```ts
viewport = {
  themeColor: "#0C0C0C",
  width: "device-width",
  initialScale: 1,
}
```

---

## 8. Generated Images

| Image | Prompt | Path |
| ----- | ------ | ---- |
| Hero | Athletic male trainer, professional studio portrait, dark background, dramatic side lighting, wearing black athletic wear, confident pose looking slightly right, fitness/luxury aesthetic | `public/images/hero-jax.jpg` |
| Avatar - Mark | Professional headshot, male SaaS founder, 40s, confident, dark background, business casual | `public/images/testimonial-mark.jpg` |
| Avatar - Sarah | Professional headshot, female VC partner, 30s-40s, polished, dark background, business attire | `public/images/testimonial-sarah.jpg` |

---

## 9. Dependencies to Install

```json
{
  "framer-motion": "^11.0.0"
}
```

All other dependencies (Next.js 16, Tailwind, Shadcn, Lucide, Radix) are already in `package.json`.

---

## 10. Implementation Order

1. **Design Tokens & Globals** - Update `globals.css` with dark theme tokens, glass utilities, smooth scroll. Update `tailwind.config.ts` if needed.
2. **Layout & Fonts** - Update `app/layout.tsx` with SEO metadata, viewport, Geist font configuration.
3. **Generate Images** - Create hero portrait and testimonial avatars.
4. **Shared UI Components** - Build `scroll-reveal.tsx`, `cta-modal.tsx`, `back-to-top.tsx`, `logo-marquee.tsx`.
5. **Landing Page Sections** - Build each section component top-to-bottom: header, hero, philosophy, social-proof, program, pricing, faq, cta-banner, footer.
6. **Landing Page Assembly** - Wire all sections into `app/page.tsx`.
7. **Contact Page** - Build `app/contact/page.tsx` with shared header/footer.
8. **Animations & Polish** - Add Framer Motion scroll reveals, entrance animations, mobile nav transitions.

---

## 11. Out of Scope (for this prototype)

- Payment/checkout integration
- Email capture / newsletter
- Backend API / database
- Authentication
- Analytics / tracking pixels
- Blog / content pages
- A/B testing

---

## 12. Notes

- All content is placeholder and editable post-build
- Color contrast between Electric Lime `#C6FF5E` on Matte Black `#0C0C0C` has not been audited - will adjust if needed
- CTA modal is UI-only, no form submission logic
- Contact form is presentational only
- "Back to top" uses native smooth scrolling
- Footer social links are `#` placeholder hrefs
