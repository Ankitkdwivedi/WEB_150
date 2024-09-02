import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Memoo from './Components/Memoo'
import Callback from './Components/Callback'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      {/* <Memoo/> */}
      <Callback/>
    </>
  )
}

export default App
