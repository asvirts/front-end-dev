import handleClick from "@/lib/handleClick"
import { Gif } from "../../../types"

export default async function FetchGifs(props: any) {
  let res = await fetch(
    `https://api.giphy.com/v1/gifs/search?api_key=MENNrEjZGJ5LyNYOw35WZX0LkglQNUSl&q=${props.query}&limit=9&offset=${props.page}&rating=g&lang=en&bundle=messaging_non_clips`
  )

  const { data: gifs } = await res.json()

  let listGifs = gifs.map((gif: Gif) => (
    <div key={gif.id} className="text-white text-center mb-4">
      <video
        src={gif.images.original.mp4}
        autoPlay
        loop
        onClick={() => handleClick(gif.images.original.url)}
        className="rounded-md w-full hover:ring-2 ring-blue-500 transition-all"
      ></video>
    </div>
  ))

  return (
    <div className="w-full columns-1 md:columns-3 justify-between">
      {listGifs}
    </div>
  )
}
