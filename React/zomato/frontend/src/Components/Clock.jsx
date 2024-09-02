import React, { useEffect, useState } from 'react'

function Clock() {
    let [t,setT]=useState(0);
    function cl(){
        let id=setInterval(()=>{
          console.log(t);
          setT(t+1);
          return ()=> clearInterval(id);
        },1000);
      }
      useEffect(()=>{
        cl();
      },[t])
  return (
    <div>
        <p>time: {t}</p>
    </div>
  )
}

export default Clock