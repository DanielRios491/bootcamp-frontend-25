import { useEffect, useState } from 'react'
import './App.css'

function App() {
  const [countSec, setCountSec] = useState(0)
  const [countMin, setCountMin] = useState(0)
  const [ start, setStart ] = useState(false)

  useEffect(() => {
    if (start) {
      if (countSec < 60) {
        setCountMin(prev => prev + 1)
        setCountSec(0)
      }
      setInterval(() => {setCountSec(prev => prev+1)}, 1000)
    }
  }, [start]);

  return (
    <div>
      <h1>Timer</h1>
      <h6><span>{ countMin }</span>min <span>{ countSec }</span>secs</h6>
      <button onClick={() => {setStart(true)}}>Start</button>
      <button onClick={() => {setStart(false)}}>Stop</button>
      <button onClick={() => {setCountSec(0); setCountMin(0)}}>Reset</button>
    </div>
  )
}

export default App
