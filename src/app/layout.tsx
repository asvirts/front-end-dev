import type { Metadata } from "next"
import "./globals.css"
import SearchGifs from "./SearchGifs"
import Link from "next/link"

export const metadata: Metadata = {
  title: "GIPHY Search",
  description: "Search for your next favorite GIF",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="bg-slate-800">
        <div className="container mx-auto text-center my-2">
          <Link href="/" className="text-white">
            Home
          </Link>
          <SearchGifs />
          {children}
        </div>
      </body>
    </html>
  )
}
