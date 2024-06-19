import { CreateTodo } from "../components/CreateTodo";
import { TodoList } from "../components/Todolist";
import { useEffect, useState } from 'react'
import './home.css'
import React from "react";


export const Home = React.memo(function Home(){
    const [todos, setTodos] = useState([])
    
    useEffect(()=> {
    let list = async()=>{
      const response = await fetch("http://localhost:4000/todos")
      const json = await response.json()
      //console.log(json)
      setTodos(json)
    }
    list()
    }, [])
    
    function updateTodos(newTodo){
        console.log("re-rendering UT")
        setTodos([newTodo,...todos])
    }

    function changeDoneTodos(todo){
        //const modtodos = todos
        //todo.done = !todo.done
        //const foundIndex = todos.findIndex(x => x._id == todo._id);
        //modtodos[foundIndex].done = !modtodos[foundIndex].done
        //console.log("re-rendering CDT"+modtodos[foundIndex].done)
        //setTodos(modtodos)
    }

    function removeTodo(newTodo){
        console.log("re-rendering RT")
        const modtodos = todos.filter((todo)=>{
            if(todo._id==newTodo._id){
                return false
            }
            else{
                return true
            }
        })
        setTodos(modtodos)
        
    }

    return(
        <div className="container-body">
            <CreateTodo  todos={todos} updateTodos={updateTodos}/>
            <TodoList todos={todos} removeTodo={removeTodo} changeDoneTodos={changeDoneTodos}/>
        </div>
    )
})