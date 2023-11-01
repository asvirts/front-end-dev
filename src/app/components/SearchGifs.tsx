"use client"

import { useRouter } from "next/navigation"
import React, { useState } from "react"

export default function SearchGifs() {
  const [input, setInput] = useState("")
  const router = useRouter()

  console.log(router)

  function onSearch(e: React.FormEvent) {
    e.preventDefault()

    const encodedInput = encodeURI(input)

    router.push(`/search?q=${encodedInput}`)
  }

  return (
    <form onSubmit={onSearch}>
      <input
        type="text"
        placeholder="Search here"
        onChange={(e) => setInput(e.target.value)}
        value={input}
        className="m-5 block w-full rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
      />
    </form>
  )
}
