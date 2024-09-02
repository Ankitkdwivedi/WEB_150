import React, { useState } from 'react'

function Todo() {
  return (
    <>
    <Show titl ="jevan mein " />
    <BadaShow titl ="khi kuch nhi rkha " />
    
    </>
  )
}

function Show({titl}){
    return (
        <>
            <h1>title: {titl}</h1>
    
        </>
    )
}

function BadaShow({titl}){
    let [t , setT] =useState(titl);

    function handleClick(){
        setT(Math.floor(Math.random()*10));
    }

    return(
        <>
        <Show titl={t} />  
        {/* upar {t} ka mtlb evaluate ho rha hai  */}
        <button onClick={handleClick}> click me!</button>
        
        </>
    )

}

export default Todo
