import FetchTrendingGifs from "./components/FetchTrendingGifs"

export default async function Page() {
  return (
    <>
      <h1 className="text-white font-bold text-2xl">
        Find your next favorite GIF!
      </h1>
      <FetchTrendingGifs />
    </>
  )
}
