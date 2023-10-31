export default async function Page() {
  async function FetchGifs() {
    let res = await fetch(
      `https://api.giphy.com/v1/gifs/random?api_key=MENNrEjZGJ5LyNYOw35WZX0LkglQNUSl&tag=&rating=g`
    )

    const { data: gifs } = await res.json()

    let listGifs = gifs.map((gif: any) => <li key={gif.id}>{gif.title}</li>)

    return <ul className="m-5">{listGifs}</ul>
  }

  return (
    <>
      <h1 className="text-white font-bold text-2xl">
        Find your next favorite GIF!
      </h1>
    </>
  )
}
