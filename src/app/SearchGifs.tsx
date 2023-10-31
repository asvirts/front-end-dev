"use client";

import React, { useState } from "react";
import FetchGifs from "./FetchGifs";

export default function SearchGifs() {
  const [input, setInput] = useState("Search here");

  const handleChange = (value: string) => {
    setInput(value);
    FetchGifs(value);
  };

  return (
    <div className="flex flex-col justify-center">
      <input
        type="text"
        name="name"
        onChange={(e) => handleChange(e.target.value)}
        value={input}
        className="m-5 block w-1/2 rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
      />
      <FetchGifs term={input} />
    </div>
  );
}
