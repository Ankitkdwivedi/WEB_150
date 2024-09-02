import React from 'react'
import { memo } from 'react'
import { useState } from 'react'

function Memoo() {
    let [t,setT]=useState('sandesha aaya h')
    // if you are using empty or fragment memo will not work 
  return (
    <div> 
        <Mymemo titl={t}/>
        <button onClick={()=>setT(Math.floor(Math.random()*10))}>Click here</button>
        <Mymemo titl="two "/>
        <Mymemo titl="three "/>
    </div>
  )
}

// function Mymemo({titl}) {
//   return (
//     <div>
//         <h1>My memo is this:{titl}</h1>
//     </div>
//   )
// }

//mymemo ki jagah bna rha hu
let Mymemo=memo(function ({titl}) {
    return (
      <div>
          <h1>My memo is this:{titl}</h1>
      </div>
    )
  })
export default Memoo