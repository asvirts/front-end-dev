'use client'

import React from 'react'
import { useState } from 'react';

export default async function SearchGifs() {
  const [search, setSearch] = useState('Enter a search term');
  
  const res = await fetch(`https://api.giphy.com/v1/gifs/search?api_key=${process.env.GIPHY_API_KEY}&q=${search}&limit=5&offset=0&rating=g&lang=en&bundle=messaging_non_clips`)

  const { data: gifs } = await res.json()
  const listItems = gifs.map(gif => <li key={gif.id}>{gif.title}</li>)

  return (
    <>
      <form>
        <input
          type="text"
          value={search}
          onChange={setSearch}
        />
        <button type="submit">Search</button>
      </form>
      <ul>{listItems}</ul>
    </>
    
  )
  }