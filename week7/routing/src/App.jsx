import React, { useState, Suspense } from "react"
import { BrowserRouter, Route, Routes, useNavigate } from 'react-router-dom'
import './App.css'
const Dashboard = React.lazy(()=> import("./components/Dashboard"))
const Landing = React.lazy(()=> import("./components/Landing"))

function App() {
  const [count, setCount] = useState(0)
  
  //suspense API
  return (
    <div>
      <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/dashboard" element={<Suspense fallback={"loading..."}>
          <Dashboard/>
          </Suspense>}/>
        <Route path="/" element={<Suspense fallback={"loading..."}>
          <Landing/>
          </Suspense>}/>
      </Routes>
    </BrowserRouter>
    </div>
    
  )
}

function Header(){
  const navigate = useNavigate()

  return (
      <div style={{ color:"white", background: "black"}}>
        Header
        <button onClick={()=>{
          navigate("/Dashboard")
        }}>Dashboard</button>
        <button onClick={()=>{
          navigate("/")
        }}>Landing</button>
      </div>
  )}

export default App
