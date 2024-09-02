import { useState } from 'react'
import './App.css'
import MainNavigation from './Components/mainNavigation/MainNavigation'
import { Route, Routes } from 'react-router-dom'
import AllQuotes from './Components/Pages/AllQuotes'
import AddQuote from './Components/Pages/AddQuote'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <MainNavigation/>
      <section>
        <Routes>
          <Route path="/" element={<AllQuotes />} />
          <Route path="/new" element={<AddQuote />} />
        </Routes>
      </section>
    </>
  )
}

export default App
