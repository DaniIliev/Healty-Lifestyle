import { useState } from 'react'
import Header from './components/header/Header'
import {Routes, Route} from 'react-router-dom'
import Home from './components/home/Home'
import Footer from './components/footer/Footer'

function App() {
  const [count, setCount] = useState(0)

  return (
<>
      <Header/>

      <Routes>
        <Route path='/' element={<Home/>}/>
      </Routes>

      <Footer/>
</>
  )
}

export default App
