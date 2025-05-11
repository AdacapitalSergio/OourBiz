import { useState } from 'react'
import { Home } from './Page/home/Home/Home'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Home/>
    </>
  )
}

export default App
