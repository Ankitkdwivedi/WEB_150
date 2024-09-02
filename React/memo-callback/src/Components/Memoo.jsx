import React, { useMemo, useState } from 'react'

function Memoo() {
    let[count,setCount]=useState(0);
    let[input,setInput]=useState('');
    function handleChange(e){
        setInput(e.target.value);
    }
    
    //re rendering this function again and agian 
    let memoAns=useMemo(
        ()=>{
            let ans=0;
            for(let i=1;i<=input;i++){
                console.log('hi');
                ans+=i;
            }
            return ans;
        },[input]
    )
  return (
    <div>
        <button onClick={()=>setCount(count+1)}>Count {count}</button>
        <input onChange={handleChange} type='number' value={input}/>
        <h1>sum is:{memoAns}</h1>
    </div>
  )
}

export default Memoo