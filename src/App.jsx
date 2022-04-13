import { useState } from 'react'
import logo from './logo.svg'
import './App.css'
import AppWrapper from './AppWrapper.jsx'

function App() {
  const [count, setCount] = useState(0)
  const [productId, setProductId] = useState("99")

  return (
    <div className="App">
      <AppWrapper productId={productId} setProductId={setProductId}>
      <header className="App-header">
        <h1>React/server-sent-events Sandbox</h1>
        <h2>The SSE stuff</h2>
        <p>
            Product Id is {productId}
        </p>
        <h2>The non-SSE stuff</h2>
        <p>
          <button type="button" onClick={() => setCount((count) => count + 1)}>
            count is: {count}
          </button>
        </p>
      </header>
      </AppWrapper>
    </div>
  )
}

export default App
