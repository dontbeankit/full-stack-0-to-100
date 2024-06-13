import { useEffect, useState } from 'react'
import './App.css'
import { Home } from './pages/Home'

function App() {
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
  
  
  

  return (
    <div>
      <Home todos={todos}/>
    </div>
    
  )
}

export default App
