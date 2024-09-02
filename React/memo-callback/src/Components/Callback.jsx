import React, { memo, useState } from 'react'

function Callback() {
    let[count,setCount]=useState(0);
    let a=10;
  return (
    <div>
        <Memo a={a}/>
        {/* <button count={count} setCount={setCount} /> */}
    <button onClick={()=>setCount(count+1)}>{count}</button>
    </div>
  )
}


//if this func is not in memo the change between 2 renrenders will change this funct so use memo function
let Memo=memo(({a})=>{
   return <p>{a}</p>;
});

export default Callback