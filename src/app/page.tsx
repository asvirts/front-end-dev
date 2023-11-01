export default async function Page() {
  async function FetchGifs() {
    let res = await fetch(
      `https://api.giphy.com/v1/gifs/trending?api_key=MENNrEjZGJ5LyNYOw35WZX0LkglQNUSl&limit=3&offset=0&rating=g&bundle=messaging_non_clips`
    )

    const { data: gifs } = await res.json()

    let listGifs = gifs.map((gif: any) => (
      <li key={gif.id} className="text-white m-5 text-center">
        <iframe
          src={gif.embed_url}
          className="aspect-square giphy-embed inline-grid"
          allowFullScreen
        />
      </li>
    ))

    return (
      <ul className="m-5 grid grid-rows-3 grid-flow-col gap-4">{listGifs}</ul>
    )
  }

  return (
    <>
      <h1 className="text-white font-bold text-2xl">
        Find your next favorite GIF!
      </h1>
      <FetchGifs />
    </>
  )
}
