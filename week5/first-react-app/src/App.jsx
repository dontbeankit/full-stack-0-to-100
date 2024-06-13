import { useState } from 'react'
import './App.css'


function App() {
  const dlist = [{
    title: "Welcome to the first react app",
    description: "This is being printed using an iteration",
    completed: true
  },
  {
    title: "second",
    description: "third",
    completed: false
  }
]
  const [list, setList] = useState(dlist)
  const [count, setCount] = useState(0)
  
  function addTodo(){
    setList([...list, {
      title: "Third",
      description: "This was done using the spread command. \"...list\" means adding all elements of list",
      completed: false
    }])
  }

  return (
    <div>
      <button onClick={addTodo}>Add Random Todo</button>
      {list.map((todo)=>{
      return <Todo title={todo.title} description={todo.description}></Todo>
    })}
      
    </div>
    
  )
}

function Todo(props){
  return <div>
    <h1>{props.title}</h1>
    <h4>{props.description}</h4>
  </div>
}

//btn component
function CustomButton(props){
  function handleClick(){
    props.setCount(props.count+1)
    //alert('not working')
  }
  return <button>Counter {props.counter}</button>
}


export default App
