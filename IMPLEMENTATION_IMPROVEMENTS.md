## Frontend Improvements Implementation Plan

This document tracks implementation of the landing page frontend improvements. Each task group is designed to fit into one or more small, reviewable PRs.

Legend: `[ ]` not started, `[~]` in progress, `[x]` done (update manually as you work).

---

## 1. Overall Structure & Flow

- [ ] **Clarify narrative arc across sections**
  - [ ] Ensure each main section (`Hero`, `Philosophy`, `Program`, `Pricing`, `FAQ`) opens with a clear "what / who / why now" line.
  - [ ] Add or refine bridging copy between sections so the story flows logically (hero → philosophy → proof → program → pricing → FAQ).
  - [ ] Confirm headings follow a logical semantic hierarchy (`h1` in hero, `h2` per major section, `h3` for subsections).

- [ ] **Rationalize CTA placements and labels**
  - [ ] Audit all CTAs on the page and list their labels and targets.
  - [ ] Define one **primary CTA** per major viewport (e.g. hero, mid‑page, pricing) and downgrade others to secondary/tertiary styles.
  - [ ] Adjust CTA labels so they reflect funnel stage (e.g. "See How It Works", "Apply for a Spot", "Get the Protocol").

- [ ] **Improve scrolling wayfinding**
  - [ ] Add a subtle "scroll down" affordance in the hero (e.g. arrow + label).
  - [ ] Consider a section progress indicator (e.g. dots or small sidebar progress) on desktop.
  - [ ] Verify section IDs and anchor links all work smoothly on desktop and mobile.

---

## 2. Hero & First Impression

- [ ] **Refine hero copy hierarchy**
  - [ ] Tighten the hero subheading to be more concrete (time commitment, duration, constraints).
  - [ ] Elevate one key proof point (e.g. "500+ executives trained") into a high‑contrast badge near the primary headline or CTA.
  - [ ] Confirm line length and font sizes are optimal on mobile and desktop.

- [ ] **Enhance hero visuals**
  - [ ] Design an overlay data card on the desktop hero image (e.g. HRV, sleep, "session in progress") that ties into bio‑data story.
  - [ ] Ensure hero image cropping and focal points look good on common mobile sizes.
  - [ ] Check that gradients and overlays maintain legibility for all text.

- [ ] **Optimize hero responsiveness**
  - [ ] Simplify hero copy for smaller screens (shorter paragraphs, less line wrapping).
  - [ ] Rebalance spacing (padding/margins) so the hero feels appropriately dense on small screens and more spacious on large screens.
  - [ ] Confirm stats layout remains readable and non‑overflowing on small devices.

---

## 3. Navigation & Header

- [ ] **Add active nav state / scrollspy**
  - [ ] Map nav items to section IDs (`#philosophy`, `#program`, `#pricing`, etc.).
  - [ ] Implement scrollspy behavior to highlight the active section in the header as the user scrolls.
  - [ ] Ensure active state works correctly on both light and dark backgrounds and does not conflict with hover/focus styles.

- [ ] **Clarify navigation intent**
  - [ ] Decide whether `Contact` is support, sales, or application and rename if needed (e.g. "Apply" / "Book a Call").
  - [ ] Ensure navigation labels and CTA language are consistent (no conflicting verbs like "Start Training" vs "Access the Protocol" if they do the same thing).
  - [ ] Validate that the `/contact` page experience matches the landing page tone and expectations (frontend only).

- [ ] **Polish mobile menu experience**
  - [ ] Visually distinguish the main CTA in the mobile overlay (color, size, or placement).
  - [ ] Add a short urgency or proof line under the CTA (e.g. "15 spots/month. 30‑day guarantee.").
  - [ ] Confirm that opening/closing the mobile menu correctly restores body scroll and preserves scroll position.

---

## 4. Program Section (“What You Get”)

- [ ] **Communicate program as a system**
  - [ ] Introduce a small timeline or step indicator above the program cards (e.g. 1–4).
  - [ ] Visually connect the cards (subtle connecting line, gradient, or shared frame) to suggest a cohesive protocol.
  - [ ] Align headings and body text across cards for consistent visual rhythm.

- [ ] **Improve scannability**
  - [ ] Shorten feature titles where possible; avoid wrapping to three lines on mobile.
  - [ ] Bold one key phrase in each description (e.g. "no calorie counting") to support fast scanning.
  - [ ] Check that card layout remains readable on very narrow screens.

- [ ] **Add interaction polish**
  - [ ] Refine hover and focus states for cards (lift, shadow, icon highlight) while respecting design language.
  - [ ] Ensure cards are fully keyboard focusable if interactive, or clearly non‑interactive otherwise.
  - [ ] Verify `ScrollReveal`/`framer-motion` animations do not cause layout shifts or jank as cards enter view.

---

## 5. Pricing & Offer Clarity

- [ ] **Make pricing logic obvious**
  - [ ] Clarify the "value vs price" section (strikethrough, labels) with a short reason for current pricing (e.g. cohort, founder‑led).
  - [ ] Check that price, session length, and total duration are all visible at a glance.
  - [ ] Ensure price typography and emphasis are consistent across devices.

- [ ] **Elevate guarantee messaging**
  - [ ] Surface a one‑line guarantee statement inside the main pricing card, near the CTA.
  - [ ] Keep the detailed guarantee section below, but ensure typography makes it easy to read.
  - [ ] Confirm that guarantee copy aligns with any other mention of refunds/timeframes.

- [ ] **Support decision‑making**
  - [ ] Add a short "Is this for you?" list (2–3 bullets) near the CTA.
  - [ ] Consider a tooltip or small link clarifying what happens after 12 weeks (ongoing support, alumni, etc.).
  - [ ] Verify keyboard and screen‑reader access to any tooltips or explanatory UI.

---

## 6. Social Proof & FAQ

- [ ] **Diversify social proof**
  - [ ] Audit existing testimonials/logos and identify gaps (roles, industries, outcomes).
  - [ ] Mix short testimonials, logos, and at least one “micro‑case” (concise before/after story).
  - [ ] Align visual treatment of proof components with the rest of the brand (no visual noise).

- [ ] **Reprioritize FAQ content**
  - [ ] Move high‑anxiety questions (time, travel, previous failures, data privacy, injuries) to the top of the FAQ.
  - [ ] Ensure each answer ends with a clear reassurance or next step.
  - [ ] Add a final FAQ entry “What happens after I apply?” that outlines the 2–3 step onboarding process.

- [ ] **Link FAQ back to CTA**
  - [ ] Add a small CTA near the end of the FAQ (button or link) that routes back to the main action.
  - [ ] Ensure FAQ accordions are accessible (ARIA attributes, keyboard control, focus states).
  - [ ] Confirm that motion/animations don't interfere with screen readers or keyboard navigation.

---

## 7. Motion, Micro‑Interactions & Feel

- [ ] **Rationalize motion usage**
  - [ ] Inventory all `framer-motion` / `ScrollReveal` usage across sections.
  - [ ] Reduce redundant fade‑in animations so each section has a clear, purposeful motion pattern.
  - [ ] Implement `prefers-reduced-motion` handling to simplify animations for motion‑sensitive users.

- [ ] **Improve CTA behavior**
  - [ ] Ensure CTAs that open modals have clear loading/open states so users understand something is happening.
  - [ ] Optionally show a small toast or inline confirmation after the CTA action completes (frontend only).
  - [ ] Test CTA interactions across devices (tap targets, feedback timing).

- [ ] **Enhance scroll‑based feedback**
  - [ ] Calibrate when the `BackToTop` component appears (e.g. after a certain scroll depth).
  - [ ] Add an accessible label or text for the `BackToTop` button.
  - [ ] Verify smooth scroll behavior and ensure it does not conflict with other scroll handlers.

---

## 8. Visual & Brand Cohesion

- [x] **Align brand story with visuals**
  - [ ] Review copy to ensure the "engine/protocol/tactical" vocabulary aligns with the visual style (grid, orbs, lime accents).
  - [ ] Add a few strategic phrases that explicitly tie visuals to story (e.g. “tactical, data‑driven protocol”).
  - [ ] Confirm that imagery, icons, and illustrations all reflect the same brand personality.

- [ ] **Refine color usage**
  - [ ] Audit where the primary lime color is used and reserve it primarily for CTAs and key metrics.
  - [ ] Define and apply a secondary “calm” color for reassurances and support content (e.g. guarantee, FAQ).
  - [ ] Run a contrast check on key text/background pairs, especially over glass and gradients.

- [x] **Tighten typography system**
  - [x] Limit the number of font sizes visible per viewport (max 3–4) for cohesion.
  - [x] Adjust line height and spacing for longer body text, especially on mobile.
  - [x] Verify heading weight and style hierarchy is consistent across sections.

---

## 9. Accessibility & Usability

- [ ] **Keyboard navigation & focus**
  - [ ] Ensure all interactive elements (buttons, links, cards if clickable, FAQ items, modals) are reachable via keyboard.
  - [ ] Implement clear, on‑brand focus outlines for all focusable elements.
  - [ ] Verify no animation or scroll behavior traps the user or causes unexpected focus jumps.

- [ ] **Screen reader & semantics**
  - [ ] Check that section headings and landmarks are logically structured for screen readers.
  - [ ] Ensure content revealed by animation is still present in the DOM and announced properly.
  - [ ] Add or refine ARIA attributes on complex components (accordions, dialogs, tooltips) as needed.

- [ ] **Performance & perceived performance (frontend only)**
  - [ ] Audit large images and ensure they are optimized and properly sized for their containers.
  - [ ] Verify that animations do not significantly impact scroll performance on mid‑range mobile devices.
  - [ ] Consider small skeletons or shimmer placeholders for any above‑the‑fold async UI (if applicable).

---

## 10. Rollout & QA

- [ ] **Planning & sequencing**
  - [ ] Group tasks into small PRs (e.g. "Nav & Header polish", "Program & Pricing upgrades", "Social Proof & FAQ refinements").
  - [ ] For each PR, copy the relevant checklist items into the PR description and check them off as you go.
  - [ ] Keep at least one area of the page stable per release to simplify visual QA.

- [ ] **Cross‑device QA**
  - [ ] Test on common desktop resolutions (e.g. 1440px, 1920px).
  - [ ] Test on common mobile breakpoints (e.g. 375×667, 390×844).
  - [ ] Verify interactions in both light/dark (if applicable) and with reduced motion enabled.

- [ ] **Post‑launch monitoring (frontend‑only perspective)**
  - [ ] Decide on key UX metrics to observe (e.g. scroll depth to pricing, CTA click rates; implementation can come later).
  - [ ] Add TODOs or comments in relevant components where instrumentation might later be added (no backend now).
  - [ ] Schedule a follow‑up review to revisit the checklist and identify any new UX opportunities.

