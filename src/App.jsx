import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h2> Hello World!!! </h2>
      <h2 onClick={() => setCount(count + 1)}> Count {count} </h2>
      <button> New Added </button>
    </>
  )
}

export default App
