import React from 'react'

const Mapp = () => {
    let arr=[1,2,3,4,5,6];
  return (
    <div>
        {
            arr.map((item,index)=>{
                return <h1>{item}-&gt;{index}</h1>
            })
        }
    </div>
  )
}

export default Mapp