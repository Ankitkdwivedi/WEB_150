import React, { useState ,Fragment} from 'react'

const Count = () => {
    const [count, setCount] = React.useState(0) ;
  return (
    <Fragment>
        <button onClick={()=>setCount(count+1)}>click here {count}</button>
    </Fragment>
  )
}

export default Count