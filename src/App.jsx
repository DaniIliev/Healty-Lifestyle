import { useState } from 'react'
import Header from './components/header/Header'
import {Routes, Route} from 'react-router-dom'
import Home from './components/home/Home'
import Footer from './components/footer/Footer'
import Register from './components/register/Register'
import RecipesCatalog from './components/recipes/RecipesCatalog'
import CreatePost from './components/create/CreatePost'
import DetailsRecipe from './components/recipe/DetailsRecipe'
import UserInfoComponent from './components/user/UserInfoConponent'
import Login from './components/login/Login'
import { AuthProvider } from './contexts/authContext'
import UserRecipes from './components/user/UserRecipes'
import FavoriteRecipes from './components/user/FavoriteRecipes'
import CreateUserInfo from './components/user/CreateUserInfo'
import EditRecipe from './components/recipe/EditRecipe'
import AuthGuard from './components/guards/AuthGuard'
import GuestGuard from './components/guards/GuestGuard'
import EditUserInfo from './components/user/EditUserInfo'

function App() {
  const [count, setCount] = useState(0)

  
  return (
<>  
<AuthProvider>

<div className="main">
<Header/>

<Routes>
      <Route path='/' element={<Home/>}/>
      <Route element={<AuthGuard/>}>
            <Route path='/create' element={<CreatePost/>}/>
            <Route path = '/recipes/:type/details/:id' element={<DetailsRecipe/>}/>
            <Route path='/recipes/:type/edit/:id' element={<EditRecipe/>}/>
            <Route path='/user/info/:id' element={<UserInfoComponent/>}/>
            <Route path='/user/info/edit/:userId' element={<EditUserInfo/>}/>
            <Route path='/user/:id/recipes' element={<UserRecipes/>}/>
            <Route path='/user/:id/favorite-recipes' element={<FavoriteRecipes/>}/> 
            <Route path='/user/:id/createDetails' element={<CreateUserInfo/>} />
      </Route> 

      <Route element={<GuestGuard/>}>
            <Route path='/user/register' element={<Register/>}/> 
            <Route path='/user/login' element={<Login/>}/> 
      </Route>
      <Route path='/recipes/:type' element={<RecipesCatalog/>}/>
</Routes>

<Footer/>
</div>
</AuthProvider>
</>
  )
}

export default App


