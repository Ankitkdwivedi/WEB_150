import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Hello from './Components/Hello'
import Mapp from './Components/Mapp'
import Perso from './Components/Perso'
import Count from './Components/Count'
import Todo from './Components/Todo'
import Better from './Components/Better'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      {/* <Hello/>
      <Mapp/> */}
      {/* <Perso/> */}
      {/* <Count/> */}
      {/* <Todo/> */}
      <Better/>
    </>
  )
}

export default App
