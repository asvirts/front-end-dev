import { Gif } from "../../../types"

export default async function FetchGifs(props: any) {
  let res = await fetch(
    `https://api.giphy.com/v1/gifs/search?api_key=MENNrEjZGJ5LyNYOw35WZX0LkglQNUSl&q=${props.query}&limit=9&offset=0&rating=g&lang=en&bundle=messaging_non_clips`
  )

  const { data: gifs } = await res.json()

  function handleClick(copy: any) {
    navigator.clipboard.writeText(copy)
    alert("GIF url copied to clipboard!")
  }

  let listGifs = gifs.map((gif: Gif) => (
    <div key={gif.id} className="text-white w-full text-center">
      <video
        src={gif.images.original.mp4}
        autoPlay
        loop
        onClick={() => handleClick(gif.images.original.url)}
      ></video>
    </div>
  ))

  return (
    <div className="m-5 grid grid-rows-3 grid-flow-col gap-4">{listGifs}</div>
  )
}
