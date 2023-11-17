import { useState } from 'react'
import Header from './components/header/Header'
import {Routes, Route} from 'react-router-dom'
import Home from './components/home/Home'
import Footer from './components/footer/Footer'
import Register from './components/register/Register'
import RecipesCatalog from './components/recipes/RecipesCatalog'
import CreatePost from './components/create/CreatePost'

function App() {
  const [count, setCount] = useState(0)

  
  return (
<>  
<div className="main">
<Header/>

<Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/create' element={<CreatePost/>}/>
      <Route path='/user/register' element={<Register/>}/> 
      <Route path='/recipes' element={<RecipesCatalog/>}/>
</Routes>

<Footer/>
</div>

</>
  )
}

export default App
