import { Link } from "react-router-dom"
export default function Footer(){



    return(
        <footer className="footer">
            <div className="footerWrapp">
            <div className="healtyLifestyleFooter">
                <img src="/images/logo.png" alt="logo" className="logo"/>
                <nav className="site-navigation-footer">
                        <ul>
                            <li><Link to='/'>HOME</Link></li>
                            <li><Link to='recipes'>RECIPES</Link></li>
                            <li><Link to='/user/login'>LOGIN</Link></li>
                            <li><Link to='/user/register'>SIGN UP</Link></li>
                        </ul>
                    </nav>
            </div>


            <div className="contacts-footer">
                <h3>Contacts</h3>
                <p>(+359) 899 235 444</p>
                <p>danieljivkov04@abv.bg</p>
                <p>9300 Dobrich Bulgaria</p>
            </div>

            <div className="icons">
                <h3>Social Medias</h3>
                <div className="medias">
                    <img src="/images/icons/facebook.svg" alt="facebook" />
                    <img src="/images/icons/instagram.svg" alt="instagram" />
                    <img src="/images/icons/github.svg" alt="github" />
                    <img src="/images/icons/discord.svg" alt="diskord" />
                    <img src="/images/icons/linkedin.svg" alt="linkedin" />
                </div>

            </div>
            </div>
        
            <p>© 2023 - HealtyLifestyle - All Rights Reserved.</p>
        </footer>
    )
}