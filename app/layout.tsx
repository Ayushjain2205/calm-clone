import type React from "react"
import "./globals.css"
import "../styles/fonts.css"

export const metadata = {
  title: "Calm: Meditation, Sleep, Relaxation",
  description:
    "Find your calm with guided meditations, sleep stories, breathing programs, stretching exercises, and relaxing music. Calm is the #1 app for sleep and meditation.",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        
      </head>
      <body>{children}</body>
    </html>
  )
}
