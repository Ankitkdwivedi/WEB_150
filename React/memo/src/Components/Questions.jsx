import React from 'react'
import { useState } from 'react'

function Questions() {
    let[count,setCount]=useState(0);
    console.log("rendering");
    function handleClick(){
        setCount(count+1);
        setCount(count+1);
        console.log("render");
    }
  return (
    <div>
        <button onClick={handleClick}>click here</button>
    </div>
  )
}

export default Questions