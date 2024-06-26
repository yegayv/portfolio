import { ThemeProvider } from '@/components/theme-provider'
import { cn } from '@/lib/utils'
import '@/styles/globals.css'
import type { Metadata } from 'next'
import { Inter as FontSans } from "next/font/google"
 

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
})

export const metadata: Metadata = {
  title: 'YEGAYV | PORTFOLIO',
  description: "Vadim Yegay's Next.js Portfolio",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body  className={cn(
          "min-h-screen bg-background font-sans antialiased",
          fontSans.variable
        )}>
      <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            
            {children}
          </ThemeProvider>
      </body>
    </html>
  )
}
