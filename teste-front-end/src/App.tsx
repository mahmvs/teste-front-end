import { useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import { Header } from './Components/Header';


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Header/>
    </>
  )
}

export default App