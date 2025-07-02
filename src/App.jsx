import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [countSec, setCountSec] = useState(0)
  const [countMin, setCountMin] = useState(0)

  return (
    <>
      <h1>Timer</h1>
      <h6><span></span>min <span></span>secs</h6>
    </>
  )
}

export default App
