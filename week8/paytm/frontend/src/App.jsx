import { BrowserRouter, Route, Routes } from "react-router-dom"

import { Signup } from "./pages/Signup"
import { Login } from "./pages/Login"
import { Dashboard } from "./pages/Dashboard"
import { SendMoney } from "./pages/SendMoney"

function App() {

  return (
    <BrowserRouter>
    <Routes>
      <Route path="/signup" element={<Signup />}></Route>
      <Route path="/login" element={<Login />}></Route>
      <Route path="/dashboard" element={<Dashboard />}></Route>
      <Route path="/send" element={<SendMoney />}></Route>
    </Routes>
    </BrowserRouter>
  )
}

export default App
