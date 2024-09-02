import React, { useEffect, useState } from 'react'

const Timeout = () => {
    let [t,setT]=useState(0);
        useEffect(function(){
            let id=setInterval(()=>{
                console.log(t);
                setT(t+1);

                //cleanup functions (it works in between 2 renders so we can return from it )
            },1000)
            return () => {
                clearInterval(id);
            }
        },[t])
  return (
    <div>Timeout</div>
  )
}

export default Timeout