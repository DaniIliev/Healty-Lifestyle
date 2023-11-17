import { Link, useNavigate } from "react-router-dom"
export default function Header(){
const navigation = useNavigate()

    return(
        <header className="site-header">
            <div className="wrapp-nav">
                    <img src="/images/logo.png" alt="logo" className="logo" />
                    <nav className="site-navigation">
                        <ul>
                            <li><Link to='/'>HOME</Link></li>
                            <li><Link to='/recipes'>RECIPES</Link></li>
                            {/* <li><Link to='/create'>CREATE</Link></li> */}
                            <li><Link to='/user/login'>LOGIN</Link></li>
                            <li><Link to='/user/register'>SIGN UP</Link></li>
                        </ul>
                    </nav>
            </div>

        </header>
    )
}