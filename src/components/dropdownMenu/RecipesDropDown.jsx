import useClickOutside from "../../hooks/useClickOutside"
import { Link } from "react-router-dom"
export default function UserDropDown({
    hide,
    showUserDropDownHandler,
    showUserDropDown
}){

// let domNodeUser = useClickOutside(hide)



    return(
        <li className="dropHover"  onClick={showUserDropDownHandler}>
        <img src="/images/userIcon.png" alt="userIcon" className="userIcon" />
        {showUserDropDown && 
            <ul className="userDropDown">
                <li><Link to={'/user/info/1'}>Info about user</Link></li>
                <li >Logout</li>
            </ul>
            } 
    </li>
    )
}