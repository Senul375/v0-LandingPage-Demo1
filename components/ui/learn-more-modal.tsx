"use client"

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Zap, Shield, Brain, TrendingUp, Clock, Users } from "lucide-react"

interface LearnMoreModalProps {
  open: boolean
  onOpenChange: (open: boolean) => void
  onJoinClick: () => void
}

const reasons = [
  {
    icon: Zap,
    title: "Peak Physical Output",
    description:
      "Train like the top 1% of executives. Workouts engineered around your schedule, not a gym's.",
  },
  {
    icon: Brain,
    title: "Cognitive Edge",
    description:
      "Nutrition and recovery protocols designed to sharpen focus and eliminate brain fog.",
  },
  {
    icon: Clock,
    title: "Time-Efficient",
    description:
      "45-minute sessions, zero meal prep. Built for leaders who bill by the hour.",
  },
  {
    icon: TrendingUp,
    title: "Compounding Results",
    description:
      "A 12-week system that builds on itself. Week 8 you will feel like a different person.",
  },
  {
    icon: Shield,
    title: "Risk-Free Guarantee",
    description:
      "30-day Ironclad Resilience Guarantee. If it doesn't work, you pay nothing.",
  },
  {
    icon: Users,
    title: "Elite Community",
    description:
      "Join a private network of high-performing founders, VPs, and operators optimizing their bodies.",
  },
]

export function LearnMoreModal({
  open,
  onOpenChange,
  onJoinClick,
}: LearnMoreModalProps) {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="glass-strong max-h-[90vh] overflow-y-auto rounded-lg border-border sm:max-w-lg">
        <DialogHeader>
          <DialogTitle className="font-mono text-xl uppercase tracking-widest text-foreground">
            Why the Executive Engine?
          </DialogTitle>
          <DialogDescription className="text-muted-foreground">
            Six reasons high-performers choose this protocol.
          </DialogDescription>
        </DialogHeader>

        <div className="flex flex-col gap-5 py-4">
          {reasons.map((reason) => (
            <div key={reason.title} className="flex gap-4">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/10">
                <reason.icon className="h-5 w-5 text-primary" />
              </div>
              <div>
                <p className="text-sm font-semibold text-foreground">
                  {reason.title}
                </p>
                <p className="mt-0.5 text-sm leading-relaxed text-muted-foreground">
                  {reason.description}
                </p>
              </div>
            </div>
          ))}

          <Button
            size="lg"
            className="mt-2 w-full rounded-lg font-mono text-sm uppercase tracking-wider"
            onClick={() => {
              onOpenChange(false)
              onJoinClick()
            }}
          >
            Join the Program
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  )
}
