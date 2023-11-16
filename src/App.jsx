import { useState } from 'react'
import Header from './components/header/Header'
import {Routes, Route} from 'react-router-dom'
import Home from './components/home/Home'
import Footer from './components/footer/Footer'
import Register from './components/register/Register'

function App() {
  const [count, setCount] = useState(0)

  return (
<>  
<div className="main">
<Header/>

<Routes>
  <Route path='/' element={<Home/>}/>
  <Route path='/user/register' element={<Register/>}/> 
</Routes>

<Footer/>
</div>

</>
  )
}

export default App
