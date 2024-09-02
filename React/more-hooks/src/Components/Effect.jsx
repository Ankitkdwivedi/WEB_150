import React, { useState } from 'react'

function Effect() {

    let [d,setD]=useState(null);
    // https://api.tvmaze.com/search/shows?q=girls
    fetch('https://api.tvmaze.com/search/shows?q=girls')
    .then(async function(res){
        let data=await res.json();
        setD(data);
        //change in state means component rerender so again fetch and will go in infinite loop
    })


  return (
    <div></div>
  )
}

export default Effect