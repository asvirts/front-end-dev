// import Image from 'next/image';

// export default async function QueryGifs() {
 
//   let res = await fetch(`https://api.giphy.com/v1/gifs/search?api_key=${process.env.GIPHY_API_KEY}&q=${search}&limit=5&offset=0&rating=g&lang=en&bundle=messaging_non_clips`)

//   const { data: gifs } = await res.json()
//   const listGifs = gifs.map(gif => <li key={gif.id}>{gif.title} <Image src={gif.url} width={200} height={200} alt={gif.title} /></li>)

//   return (
//     <div className='m-5'>
//       <ul>{listGifs}</ul>
//     </div>
//   )
//   }