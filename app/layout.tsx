import './globals.css'
import { Inter as FontSans } from "next/font/google"

import { cn } from "@/lib/utils"
import React from "react"
import { Metadata } from 'next'

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
})

export const metadata : Metadata = {
  title:'LiveDocs',
  description:'Your go-to collabrative editor'
}



export default function RootLayout({ children }:{children:React.ReactNode}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={cn(
          "min-h-screen  font-sans antialiased",
          fontSans.variable
        )}
      >
       {children}
      </body>
    </html>
  )
}
