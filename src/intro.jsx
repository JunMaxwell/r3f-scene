import { cloneElement, useState } from "react"

export default function Intro({ children }) {
  const [clicked, setClicked] = useState(false)
  return (
    <>
      {cloneElement(children, { ready: clicked })}
      <div className={`fullscreen bg ready"} ${clicked && "clicked"}`}>
        <div className="stack">
          <a href="#" onClick={() => setClicked(true)}>
            {"Hello, welcome to my ping pong game! Click to start."}
          </a>
        </div>
      </div>
    </>
  )
}
