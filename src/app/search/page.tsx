"use client"

import { useSearchParams } from "next/navigation"
import FetchGifs from "../components/FetchGifs"

export default async function Page() {
  const search = useSearchParams()
  const searchQuery = search.get("q")
  const page = useSearchParams()
  const pageNum = page.get("p")
  let pageNumber = Number(pageNum)

  console.log(typeof pageNumber)

  return (
    <>
      <h1 className="text-white font-bold text-2xl">Search Page</h1>
      <FetchGifs query={searchQuery} page={pageNum} />
    </>
  )
}
