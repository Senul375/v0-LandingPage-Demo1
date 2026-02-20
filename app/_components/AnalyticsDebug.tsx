"use client"

import { useEffect } from "react"
import { usePathname, useSearchParams } from "next/navigation"

/**
 * Temporary debug component to verify Analytics mounting and route tracking.
 * 
 * TO REMOVE: 
 * 1. Delete this file: app/_components/AnalyticsDebug.tsx
 * 2. Remove import and usage in app/layout.tsx
 */
export default function AnalyticsDebug() {
    const pathname = usePathname()
    const searchParams = useSearchParams()

    useEffect(() => {
        console.log("[AnalyticsDebug] Component mounted")
    }, [])

    useEffect(() => {
        const url = `${pathname}${searchParams.toString() ? `?${searchParams.toString()}` : ""}`
        console.log(`[AnalyticsDebug] Route changed to: ${url}`)
    }, [pathname, searchParams])

    return null
}
