import { CreateTodo } from "../components/CreateTodo";
import { TodoList } from "../components/Todolist";
import { useEffect, useState } from 'react'
import './home.css'


export function Home(){
    const [todos, setTodos] = useState([])
    
    useEffect(()=> {
    let list = async()=>{
      const response = await fetch("http://localhost:4000/todos")
      const json = await response.json()
      //console.log(json)
      setTodos(json)
    }
    list()
    }, [todos])

    return(
        <div className="container-body">
            <CreateTodo  todos={todos} updateTodos={setTodos}/>
            <TodoList todos={todos}/>
        </div>
    )
}