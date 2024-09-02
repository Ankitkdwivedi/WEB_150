import React, { useEffect, useState } from 'react'
import Nav from './Nav'
import Card from './Card'
import axios from 'axios'
import {  useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

function Home() {
  const navigate = useNavigate();
  const user=localStorage.getItem('user');
  useEffect(()=>{
    if(user==null){
      toast.error('Please Login First')
      navigate('/login')
    }
  },[user])
  console.log(user);
  const [allg,setg]=useState([]);
  useEffect(()=>{
   const f=async()=>{
    const response=await axios.get('http://localhost:8080/');
    setg(response.data)
   }
   f();
  },[allg.length])
  return (
    <div>
      <Nav/>
      <div>
        {
          allg.map((item,key)=>{
            return <Card key={key} item={item}></Card>
          })
        }
      </div>
    </div>
  )
}

export default Home