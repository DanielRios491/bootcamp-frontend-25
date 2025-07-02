import { useEffect, useState } from 'react';
import ButtomAtom from './components/atoms/ButtomAtom';
import './App.css'

function App() {
  const [countSec, setCountSec] = useState(0)
  const [countMin, setCountMin] = useState(0)
  const [ start, setStart ] = useState(false)

  useEffect(() => {
    const interval = setInterval(() => {
      if (start) {
        setCountSec(prev => {
          if (prev+1 === 60) {
            return 0;
          }
          return prev+1;
        })
      }
    }, 1000)

    return () => clearInterval(interval)
  }, [start]);

  useEffect(() => {
    if (countSec === 0 && start) { 
      setCountMin(prevMin => prevMin + 1)
    }
  },[countSec])

  return (
    <div>
      <h1>Timer</h1>
      <h6><span>{ countMin }</span> min <span>{ countSec }</span> secs</h6>
      <ButtomAtom color={"green"} onClick={() => {setStart(true)}}>Start</ButtomAtom>
      <ButtomAtom color={"yellow"} onClick={() => {setStart(false)}}>Stop</ButtomAtom>
      <ButtomAtom color={"red"} onClick={() => {setCountSec(0); setCountMin(0); setStart(false)}}>Reset</ButtomAtom>
    </div>
  )
}

export default App
