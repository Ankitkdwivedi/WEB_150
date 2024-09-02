import React, { useEffect, useState } from 'react'
import axios from 'axios';
const AxiosEffect = () => {
    let [d,setD]=useState(null);
    useEffect(function(){
        axios.get('https://api.tvmaze.com/search/shows?q=girls')
    .then(function(data){
        console.log(data);
        setD(data);
    })
    },[]);
  return (
    <div>AxiosEffect</div>
  )
}

export default AxiosEffect