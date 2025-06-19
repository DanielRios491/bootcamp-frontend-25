import { useState } from 'react'
import './App.css'
import ToDoListPage from './components/pages/ToDoListPage'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <ToDoListPage />
    </>
  )
}

export default App
