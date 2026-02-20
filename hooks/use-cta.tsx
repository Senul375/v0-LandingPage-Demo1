"use client"

import { createContext, useContext, useState, ReactNode } from "react"
import { CTAModal } from "@/components/ui/cta-modal"

interface CTAContextType {
    openModal: () => void
}

const CTAContext = createContext<CTAContextType | undefined>(undefined)

export function CTAProvider({ children }: { children: ReactNode }) {
    const [modalOpen, setModalOpen] = useState(false)

    const openModal = () => setModalOpen(true)

    return (
        <CTAContext.Provider value={{ openModal }}>
            {children}
            <CTAModal open={modalOpen} onOpenChange={setModalOpen} />
        </CTAContext.Provider>
    )
}

export function useCTA() {
    const context = useContext(CTAContext)
    if (!context) {
        throw new Error("useCTA must be used within a CTAProvider")
    }
    return context
}
