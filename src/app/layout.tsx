import type { Metadata } from "next"
import "./globals.css"
import SearchGifs from "./components/SearchGifs"
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
          <Link href="/" className="text-white mx-2">
            Home
          </Link>
          <Link href="/gifs" className="text-white mx-2">
            Gifs
          </Link>
          <SearchGifs />
          {children}
        </div>
      </body>
    </html>
  )
}
