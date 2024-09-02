import React from 'react'
import { Link } from 'react-router-dom'

const Nav = () => {
  return (
    <div>
        <h1 className='text-5xl text-center'>Twitter</h1>
        
        <Link className='text-5xl text-center'  to={'/login'}>Login</Link>
        <br />
        <Link className='text-5xl text-center' to ={'/signup'}>SignUp</Link>
    </div>
  )
}

export default Nav