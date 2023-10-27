type Search = {
  data: {
    id: string,
    title: string
  }
}

export default async function GetData() {
    const res = await fetch('https://api.giphy.com/v1/gifs/search?api_key=MENNrEjZGJ5LyNYOw35WZX0LkglQNUSl&q=jewelry&limit=25&offset=0&rating=g&lang=en&bundle=messaging_non_clips')
    const data: Search = res.json()

    return (
      <ul>
        <li>{data.data.title}</li>
      </ul>
    )
  }