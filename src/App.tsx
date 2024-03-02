import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Ezio" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="Ezio Mobile React, iOS, Android" />
        </a>
      </div>
      <h1>Biography</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
        "Imagination is more important than knowledge."
        - Albert Einstein
        </p>
      </div>
      <p className="read-the-docs">
        Hi there, welcome to my biography.
      </p>
    </>
  )
}

export default App