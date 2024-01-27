import React from 'react'

const Perso = () => {
    function hadleClick(item){
        console.log(`button clicked ${item}`);
    }
    function hadleClick2(item){
        console.log(`button clicked ${item}`);
    }//to catch the argument use callback function
  return (
    <div>
        {/* <button onClick={hadleClick(1223)}>Press</button> */}
        <button onClick={()=>hadleClick2(34)}>Press</button>
        {/* agr argument send krna ho to callback function se bhej skte h */}
    </div>
  )
}

export default Perso