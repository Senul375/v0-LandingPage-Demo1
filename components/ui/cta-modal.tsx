"use client"

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Check } from "lucide-react"

interface CTAModalProps {
  open: boolean
  onOpenChange: (open: boolean) => void
}

const features = [
  "12-week personalised protocol",
  "Bi-weekly 1:1 coaching calls",
  "Bio-data integration (Oura/Whoop/Apple Watch)",
  "Zero-prep nutrition framework",
  "24/7 Slack/WhatsApp concierge access",
  "30-day ironclad guarantee",
]

export function CTAModal({ open, onOpenChange }: CTAModalProps) {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="glass-strong rounded-lg border-border sm:max-w-md">
        <DialogHeader>
          <DialogTitle className="font-mono text-xl uppercase tracking-widest text-foreground">
            The Executive Engine Protocol
          </DialogTitle>
          <DialogDescription className="text-muted-foreground">
            Precision performance for high-stakes lives.
          </DialogDescription>
        </DialogHeader>

        <div className="flex flex-col gap-4 py-4">
          <div className="flex items-baseline gap-3">
            <span className="text-sm text-muted-foreground line-through">
              $1,200
            </span>
            <span className="text-4xl font-bold text-primary">$599</span>
            <span className="text-sm text-muted-foreground">one-time</span>
          </div>

          <ul className="flex flex-col gap-2.5">
            {features.map((feature) => (
              <li key={feature} className="flex items-start gap-2.5 text-sm text-foreground">
                <Check className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                {feature}
              </li>
            ))}
          </ul>

          <Button
            size="lg"
            className="mt-2 w-full rounded-lg font-mono text-sm uppercase tracking-wider"
            onClick={() => onOpenChange(false)}
          >
            Proceed to Checkout
          </Button>

          <p className="text-center text-xs text-muted-foreground">
            Protected by our 30-day Ironclad Resilience Guarantee
          </p>
        </div>
      </DialogContent>
    </Dialog>
  )
}
