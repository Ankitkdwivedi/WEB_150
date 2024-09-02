import React from 'react'
import { Link } from 'react-router-dom'

function Home() {
  return (
    <div>
      <h1>This is Home Page</h1>
      <Link to='/'>Home</Link>
      <Link to='/admin'>Admin</Link>
      <Link to='/product'>Product</Link>
    </div>
  )
}

export default Home