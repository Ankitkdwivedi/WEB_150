import React, { useState } from 'react'

const Better = () => {
    return (
        <div>
            <ChangeTodos titl="don't speak"/>
            <Todos titl="react is game"/>
            <Todos titl="bbb"/>
            <Todos titl="ccccc"/>
        </div>
    )
}

function Todos({titl}) {
    return (
        <h1>Title:{titl}</h1>
    )
}
function ChangeTodos({titl}) {
    let [t,setT]=useState(titl);
    function handleClick(){
        setT(Math.floor(Math.random()*10));
    }
    return (
        <>
            <Todos titl={t} />
            <button onClick={handleClick}>click</button>
        </>
    )
}

export default Better