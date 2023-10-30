'use client'

import React from 'react'
import { useState, useRef } from 'react';
import Image from 'next/image';

async function QueryGifs(props: any) {

  let res = await fetch(`https://api.giphy.com/v1/gifs/search?api_key=${process.env.GIPHY_API_KEY}&q=${props.searchTerm}&limit=5&offset=0&rating=g&lang=en&bundle=messaging_non_clips`)

  const { data: gifs } = await res.json()
  const listGifs = gifs.map(gif => <li key={gif.id}>{gif.title} <Image src={gif.url} width={200} height={200} alt={gif.title} /></li>)

  return (
    <ul className='m-5'>{listGifs}</ul>
  )
  }

export default function SearchGifs() {
  const [search, setSearch] = useState("Search here");
  const inputRef = useRef()

  function onSubmit(e: any) {
    e.preventDefault()

    const value = inputRef.current.value

    if (value === "") return
    setSearch(value)
    inputRef.current.value = ""
  }

  return (
    <div className='m-5'>
      <form onSubmit={onSubmit}>
        <input
          ref={inputRef}
          className='m-2'
          type="search"
          value={search}
        />
        <button type="submit" className='bg-slate-700 text-white py-2 px-3 rounded'>Search</button>
      </form>
      <QueryGifs searchTerm={search} />
    </div>
  )
  }

