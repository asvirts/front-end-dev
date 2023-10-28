import React from "react";
import { Children } from "react";
import ReactDOM from "react-dom";

async function getData() {
  const res = await fetch(
    "https://api.giphy.com/v1/gifs/search?api_key=MENNrEjZGJ5LyNYOw35WZX0LkglQNUSl&q=jewelry&limit=25&offset=0&rating=g&lang=en&bundle=messaging_non_clips"
  );

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json();
}

export default async function Page() {
  const data = await getData();

  return (
    <main>
      {Children.map(data, (child) => (
        <div className="Row">{child}</div>
      ))}
    </main>
  );
}
