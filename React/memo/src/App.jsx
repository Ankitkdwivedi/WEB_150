import { useState } from 'react'
import Todo from './Components/Todo'
import Memoo from './Components/Memoo'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      {/* <Todo/> */}
      <Memoo/>
    </>
  )
}

export default App
