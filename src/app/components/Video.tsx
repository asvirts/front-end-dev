import handleClick from "@/lib/handleClick"
import React from "react"

export default function Video(props: any) {
  return (
    <>
      <video
        src={props.originalmp4}
        autoPlay
        loop
        onClick={() => handleClick(props.originalurl)}
        className="rounded-md w-full hover:ring-2 ring-blue-500 transition-all"
      ></video>
    </>
  )
}
