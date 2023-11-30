import useClickOutside from "../../hooks/useClickOutside"
import { Link } from "react-router-dom"
import { useContext } from "react"
import { AuthContext } from "../../contexts/authContext"

export default function UserDropDown({
    showUserDropDownHandler,
    showUserDropDown
}){
    const {logout, userId, userEmail} = useContext(AuthContext)
    
    const reg = /@[a-z]+.[a-z]+/
    const username = userEmail.replace(reg, '');

    const logoutHandler = () => {
        logout()
    }


    return(
        <li className="dropHover"  onClick={showUserDropDownHandler}>
        <img src="/images/userIcon.png" alt="userIcon" className="userIcon" />
        {showUserDropDown && 
            <ul className="userDropDown">
                <li><Link to={`/user/info/${userId}`}>Info about {username}</Link></li>
                <li><Link to={`/user/${userId}/recipes`}>My recipes</Link></li>
                <li><Link to={`/user/${userId}/favorite-recipes`}>Favorite recipes</Link></li>
                <li><Link onClick={logoutHandler}>Logout</Link></li>
            </ul>
            } 
    </li>
    )
}