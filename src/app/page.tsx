'use client'

import { Grid } from '@giphy/react-components'
import { GiphyFetch } from '@giphy/js-fetch-api'

export default function Home() {

  const gf = new GiphyFetch('MENNrEjZGJ5LyNYOw35WZX0LkglQNUSl')

  const fetchGifs = (offset: number) => gf.trending({ offset, limit: 10 })

  return (
    <main className='flex justify-center my-2'>
      <Grid width={1800} columns={6} fetchGifs={fetchGifs} />
    </main>
  )
}
