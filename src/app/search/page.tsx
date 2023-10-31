"use client"

import { useSearchParams } from "next/navigation"

export default function page() {
  const search = useSearchParams()
  const searchQuery = search?.get("q")
  console.log(searchQuery)

  async function FetchGifs() {
    let res = await fetch(
      `https://api.giphy.com/v1/gifs/search?api_key=MENNrEjZGJ5LyNYOw35WZX0LkglQNUSl&q=${searchQuery}&limit=8&offset=0&rating=g&lang=en&bundle=messaging_non_clips`
    )

    const { data: gifs } = await res.json()

    let listGifs = gifs.map((gif: any) => (
      <li
        key={gif.id}
        className="text-white flex flex-col w-1/4 m-5 text-center"
      >
        {gif.title}
        <iframe
          src={gif.embed_url}
          width="480"
          height="270"
          frameBorder="0"
          className="giphy-embed"
          allowFullScreen
        />
        {gif.embed_url}
        {gif.url}
      </li>
    ))

    return <ul className="container m-5">{listGifs}</ul>
  }

  return (
    <>
      <h1 className="text-white font-bold text-2xl">Search Page</h1>
      <FetchGifs />
    </>
  )
}
