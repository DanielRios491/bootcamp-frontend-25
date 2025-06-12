import { useState } from 'react'
import './App.css'
import WeatherPage from './components/page/WeatherPage'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <WeatherPage />
    </>
  )
}

export default App
