import { Gif } from "../../../types"
import Video from "@/app/components/video"

export default async function FetchTrendingGifs() {
  let res = await fetch(
    `https://api.giphy.com/v1/gifs/trending?api_key=MENNrEjZGJ5LyNYOw35WZX0LkglQNUSl&limit=3&offset=0&rating=g&bundle=messaging_non_clips`
  )

  const { data: gifs } = await res.json()

  let listGifs = gifs.map((gif: Gif) => (
    <div key={gif.id} className="text-white w-full text-center">
      <Video
        originalmp4={gif.images.original.mp4}
        originalurl={gif.images.original.url}
      />
    </div>
  ))

  return (
    <div className="m-5 grid grid-rows-1 grid-flow-col gap-4">{listGifs}</div>
  )
}
