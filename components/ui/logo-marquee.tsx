"use client"

const logos = [
  "FORBES",
  "MEN'S HEALTH",
  "GQ",
  "WIRED",
  "BLOOMBERG",
  "FAST COMPANY",
]

export function LogoMarquee() {
  return (
    <div className="relative w-full overflow-hidden py-6">
      <p className="mb-4 text-center font-mono text-xs uppercase tracking-widest text-muted-foreground">
        As Featured In
      </p>
      <div className="relative flex overflow-hidden">
        {/* Fade edges */}
        <div className="pointer-events-none absolute left-0 top-0 z-10 h-full w-24 bg-gradient-to-r from-background to-transparent" />
        <div className="pointer-events-none absolute right-0 top-0 z-10 h-full w-24 bg-gradient-to-l from-background to-transparent" />

        <div className="animate-marquee flex shrink-0 items-center gap-16">
          {logos.map((logo) => (
            <span
              key={logo}
              className="whitespace-nowrap font-mono text-lg font-semibold uppercase tracking-widest text-muted-foreground/50"
            >
              {logo}
            </span>
          ))}
          {/* Duplicate for seamless loop */}
          {logos.map((logo) => (
            <span
              key={`dup-${logo}`}
              className="whitespace-nowrap font-mono text-lg font-semibold uppercase tracking-widest text-muted-foreground/50"
            >
              {logo}
            </span>
          ))}
        </div>
      </div>
    </div>
  )
}
