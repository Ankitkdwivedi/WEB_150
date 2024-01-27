const Hello = () => {
    // let num=Math.floor(Math.random()*10);
    // let lucky7=7;
    // let ele;
    // if(num==lucky7){
    //     ele=<h1>this is lucky number</h1>
    // }
    // else{
    //     ele=<h1>try again</h1>
    // }
  return (
      <>
      <div>this is hello component and num is</div>
      {Math.floor(Math.random()*10)===7?<h1>number is 7</h1>:<h1>try again</h1>}
      </>
  )
}

export default Hello