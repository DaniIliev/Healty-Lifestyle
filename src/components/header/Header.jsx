import { useContext, useRef, useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import useClickOutside from '../../hooks/useClickOutside'
import UserDropDown from "../dropdownMenu/UserDropdown"
import { AuthContext } from "../../contexts/authContext"

export default function Header(){
    const [showUserDropDown, setShowUserDropDown] = useState(false)
    const [showRecipesDropDown, setShowRecipesDropDown] = useState(false)
    const {isAuthenticated} = useContext(AuthContext)


const showUserDropDownHandler = () => {
    if(showRecipesDropDown == true){
        setShowRecipesDropDown(false)
    }
    setShowUserDropDown(state => !state)
}
const showRecipesTypeDropDownHandler = () => {
    if(showUserDropDown == true){
        setShowUserDropDown(false)
    }
    setShowRecipesDropDown(state => !state)
}

const hide = () => {
    setShowUserDropDown(false)
    setShowRecipesDropDown(false)
}



let domNode = useClickOutside(hide)
// const logout = () => {

//   console.log(logout)
// }
    return(
        <header className="site-header">
            <div className="wrapp-nav">
                    <img src="/images/logo.png" alt="logo" className="logo" />
                    <nav className="site-navigation">
                        <ul className="site-navigation-ul" ref={domNode}>
                            <li><Link to='/'>HOME</Link></li>
                            <li  onClick={showRecipesTypeDropDownHandler}>
                                <Link>RECIPES</Link>
                                {showRecipesDropDown && 
                                    <ul className="recipesDropDown">
                                        <li><Link to={'/recipes/all'} onClick={hide}>All recipes types</Link></li>
                                        <li><Link to={'/recipes/breakfast'} onClick={hide}>Breakfast</Link></li>
                                        <li><Link to={'/recipes/lunch&dinner'} onClick={hide}>Lunch & Dinner</Link></li>
                                        <li><Link to={'/recipes/salats'}onClick={hide}>Salats</Link></li>
                                        <li><Link to={'/recipes/dessert'} onClick={hide}>Deserts</Link></li>
                                        <li><Link to={'recipes/snacks'} onClick={hide}>Snacks</Link></li>
                                    </ul>
                                    } 
                            </li>
                            {isAuthenticated == true ? 
                                   <UserDropDown 
                                   hide={hide} 
                                   showUserDropDownHandler={showUserDropDownHandler} 
                                   showUserDropDown={showUserDropDown} />
                                :
                                <>
                                <li><Link to='/user/login'>LOGIN</Link></li>
                                <li className="last"><Link to='/user/register'>SIGN UP</Link></li>
                                </>
                            }
                 
                     
                        </ul>
                    </nav>
            </div>


                       
        </header>
    )
}