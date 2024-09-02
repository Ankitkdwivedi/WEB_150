import React from 'react'
import LoginSignup from './LoginSignup'
import { Link } from 'react-router-dom'

function Dashboard() {
  return (
    <div>
        <Link to="/home">Home</Link>
        <LoginSignup/>
    </div>
  )
}

export default Dashboard