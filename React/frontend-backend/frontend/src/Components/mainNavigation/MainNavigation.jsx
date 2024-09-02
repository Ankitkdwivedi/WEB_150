import React from 'react'
import { Link } from 'react-router-dom'

function MainNavigation() {
  return (
    <div>
        <div>
            <h1>Quotes App</h1>
            <ul>
                <li><Link to="/">All Quotes</Link></li>
                <li><Link to="/new">New Quotes</Link></li>
            </ul>
        </div>
    </div>
  )
}

export default MainNavigation