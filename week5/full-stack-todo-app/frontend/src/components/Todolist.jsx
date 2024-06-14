import React from "react"
import { TodoItem } from "./TodoItem"
import "./todolist.css"

export const TodoList = React.memo(function TodoList(props){
    //const todos = props.todos
    console.log(props.todos)

    

    return ( 
    <div> 
        {props.todos && props.todos.map((todo)=>{
            return <TodoItem todo={todo} deleteContent={props.removeTodo} />
        })}
        {!props.todos && <div>Network Error</div>}
    </div>
        
    )
})