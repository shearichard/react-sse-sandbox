import { useState } from 'react'
import logo from './logo.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <header className="App-header">
        <h1>React/server-sent-events Sandbox</h1>
        <h2>The SSE stuff</h2>
        <p>
            A placeholder for the SSE stuff.
        </p>
        <h2>The non-SSE stuff</h2>
        <p>
          <button type="button" onClick={() => setCount((count) => count + 1)}>
            count is: {count}
          </button>
        </p>
      </header>
    </div>
  )
}

export default App
