export default async function FetchGifs(props: any) {
  let res = await fetch(
    `https://api.giphy.com/v1/gifs/search?api_key=${process.env.GIPHY_API_KEY}&q=${props.term}&limit=5&offset=0&rating=g&lang=en&bundle=messaging_non_clips`
  );

  const { data: gifs } = await res.json();

  let listGifs = gifs.map((gif: any) => (
    <li key={gif.id}>
      {gif.title}
    </li>
  ));

  return <ul className="m-5">{listGifs}</ul>;
}
