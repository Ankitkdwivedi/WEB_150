import React, { useState } from 'react'

function PropDrilling() {
    let [count,setCount]=useState(0);
  return (
    <div>
        <Counting count={count}/>
        <Button click={()=> setCount(c => c +1)} label="In"/>
    </div>
  )
}
function Counting(){
    return (

    )
}
function Buttons(){
    return (

    )
}

export default PropDrilling