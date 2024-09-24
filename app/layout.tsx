import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import "../css/style.css"

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Investi da programmatore',
  description: 'Investi da programmatore',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com"/>
        <link rel="preconnect" href="https://fonts.gstatic.com"/>
        <link href="https://fonts.googleapis.com/css2?family=Anton&display=swap" rel="stylesheet"/>
        <link rel="icon" type="image/png" sizes="16x16" href="https://ionevision.com/lightLogo?size=16x16"></link>
        <link rel="icon" type="image/png" sizes="32x32" href="https://ionevision.com/lightLogo?size=32x32"></link>
        <link rel="icon" type="image/png" sizes="96x96" href="https://ionevision.com/lightLogo?size=96x96"></link>
        <link rel="icon" type="image/png" sizes="192x192" href="https://ionevision.com/lightLogo?size=192x192"></link>
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  )
}
