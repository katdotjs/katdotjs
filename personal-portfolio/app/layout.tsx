import type React from "react"
import type { Metadata } from "next"
import { Geist } from "next/font/google"
import "./globals.css"
import BlobCursor from '../components/BlobCursor'

const geist = Geist({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-geist",
})

export const metadata: Metadata = {
  title: "Kat Terranova - M Science frontend Developer",
  description: "Frontend Developer from Rochester, NY with 5 years of experience.",
  generator: "v0.app",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${geist.variable}`}>
      <body className="font-sans antialiased">
        <BlobCursor
          blobType="circle"
          fillColor="oklch(79.2% 0.209 151.711)"
          trailCount={3}
          sizes={[30, 60, 40]}
          innerSizes={[8, 12, 10]}
          innerColor="rgba(255,255,255,0.8)"
          opacities={[0.6, 0.6, 0.6]}
          shadowColor="rgba(0,0,0,0.75)"
          shadowBlur={1}
          shadowOffsetX={10}
          shadowOffsetY={10}
          filterStdDeviation={10}
          useFilter={true}
          fastDuration={0.1}
          slowDuration={0.5}
          zIndex={100}
        />
        {children}
      </body>
    </html>
  )
}
