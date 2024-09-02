import React from 'react'

const Todo = () => {
  return (
    <div>
        <ShowTodo titl="gym" desc="kal se gym"/>
        <button></button>
        <ShowTodo titl="asd" desc="kal sdfsdfsdf gym"/>
        <ShowTodo titl="dfsdfdf" desc="kfsdafsfdgym"/>
    </div>
  )
}

function ShowTodo({titl,desc}){
    return(
        <div>
            <h1>Title is :{titl}</h1>
            <h1>desc is :{desc}</h1>
        </div>
    )
}

export default Todo