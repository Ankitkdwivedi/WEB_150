import React from 'react'
import { Link } from 'react-router-dom'

function Nav() {
  return (
    <div className="bg-blue-300 border border-x-fuchsia-500">
      <div className="container mx-auto flex justify-between items-center h-20">
        {/* Logo */}
        <Link to="/" className="text-2xl font-bold text-purple-900 ml-10">
          ConnectSphere
        </Link>

        {/* Search Form */}
        <form className="max-w-md mx-auto flex items-center">
          <input
            type="search"
            id="default-search"
            className="block w-full p-2 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Search ..."
            required
          />
          <button
            type="submit"
            className="text-white bg-blue-700 hover:bg-blue-800 focus:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 ml-2"
          >
            Search
          </button>
        </form>


        <div className="flex items-center space-x-2">
          <Link to={'/profile'}><img className="w-10 rounded-full" src="https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?q=80&w=2048&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="sara" /></Link>
          <h2 className="text-gray-800 font-bold cursor-pointer">Ankit</h2>
        </div>
        {/* Login Button */}
        <button type="button" class="text-white bg-gradient-to-r from-cyan-500 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 ml-5">

          <Link to="/">Home</Link>
        </button>
        <button type="button" class="text-white bg-gradient-to-r from-cyan-500 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 ml-5">

          <Link to="/login">Login</Link>
        </button>
      </div>
    </div>
  );
}

export default Nav