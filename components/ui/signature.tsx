import React from "react"

export function Signature({ className }: { className?: string }) {
    return (
        <svg
            viewBox="0 0 200 60"
            className={className}
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path
                d="M20 40C35 35 45 20 60 25C75 30 80 45 95 40C110 35 120 15 135 25C150 35 155 50 170 45"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
            <path
                d="M40 20C45 25 35 45 30 50"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
            />
        </svg>
    )
}
