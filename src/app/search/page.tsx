"use client"

import { useSearchParams } from "next/navigation"
import FetchGifs from "../components/FetchGifs"

export default function Page() {
  const search = useSearchParams()
  const searchQuery = search?.get("q")

  return (
    <>
      <h1 className="text-white font-bold text-2xl">Search Page</h1>
      <FetchGifs query={searchQuery} />
    </>
  )
}
