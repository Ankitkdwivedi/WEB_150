import { Suspense, useState } from 'react'
import React from 'react';
import './App.css'
import {BrowserRouter, Route, Routes } from'react-router-dom';
import Dashboard from './Components/Dashboard';
import { v4 as uuidv4 } from 'uuid';

const Home=React.lazy(()=>import('./Components/Home'))
function App() {
  const myBlogs=[
    {
      id:uuidv4(),
      author:'ankit',
      text:"good morning"
    },
    {
      id:uuidv4(),
      author:'ang',
      text:"ract"
    },
    {
      id:uuidv4(),
      author:'aman',
      text:"hi "
    },
    {
      id:uuidv4(),
      author:'rohit',
      text:"good night"
    },
    
  ]
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Dashboard />}/>
      <Route path="/home" element={
              <Suspense fallback="loading please wait .......">
                <Home myBlogs={myBlogs}/>
              </Suspense>
            }/>
    </Routes>
      
    </BrowserRouter>
  )
}

export default App
