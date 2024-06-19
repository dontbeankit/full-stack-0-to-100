
import './App.css'
import { Home } from './pages/Home'

function App() {

  return (
    <div>
      <Header />
      <Home/>
    </div>
    
  )
}

function Header(){
  return (<header>
    <div className='container'>
      <h2>Procastinot</h2>
    </div>
    
  </header>)
}

export default App
