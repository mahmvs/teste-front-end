import { useState } from 'react'
import { Header } from './Components/Header';
import { Banner } from './Components/Banner';


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Header/>
    <Banner/>
    </>
  )
}

export default App