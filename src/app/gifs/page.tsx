"use client"

import { Gif } from "../../../types"

export default async function Page() {
  async function FetchGifs() {
    let res = await fetch(
      `https://api.giphy.com/v1/gifs/trending?api_key=MENNrEjZGJ5LyNYOw35WZX0LkglQNUSl&limit=3&offset=0&rating=g&bundle=messaging_non_clips`
    )

    const { data: gifs } = await res.json()

    function handleClick(copy: any) {
      navigator.clipboard.writeText(copy)
      alert("GIF url copied to clipboard!")
    }

    let listGifs = gifs.map((gif: Gif) => (
      <div key={gif.id} className="text-white w-full m-5 text-center">
        <img
          src={gif.images.original.url}
          onClick={() => handleClick(gif.images.original.url)}
        />
      </div>
    ))

    return (
      <div className="m-5 grid grid-rows-1 grid-flow-col gap-4">{listGifs}</div>
    )
  }

  return (
    <>
      <h1 className="text-white font-bold text-2xl">
        This page renders as .gif instead of .mp4
      </h1>
      <FetchGifs />
    </>
  )
}
