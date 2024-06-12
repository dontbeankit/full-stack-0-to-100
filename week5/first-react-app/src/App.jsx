import { useState } from 'react'
import './App.css'




function App() {
  const [count, setCount] = useState(0)
  
  
  
  
  return (
    <div>
      <CustomButton count={count} setCount={setCount}></CustomButton>
    </div>
  )
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
