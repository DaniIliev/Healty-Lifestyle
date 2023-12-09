import {Link} from 'react-router-dom'

export default function Home(){


    return(
        <>
        <section className="home">
            <div className="homeWrapp">
                <div className="homeImg">
                    <img src="./images/home.png" alt="" />
                </div>
                <div className="text">
                    <h1>Welcome to Healty Lifestyle</h1>
                    <h3>Here you will discover how to eat deliciously and healthily</h3>
                    <p>If you have a hidden culinary talent, the recipes on this site will make sure you develop it</p>

                    <div className='button'>
                        <p>
                            <Link to='/recipes/all'>Begint Your Colinary Journey</Link>
                            {/* <img src="/images/icons/computer-mouse.svg" alt="mouse" /> */}
                            <img src="/images/icons/plus.png" alt="plus" />
                        </p>

                    </div>
                </div>

            </div>  
            <div className="whyChoise">
                <h3>Why should you choose Healthy Lifestyle</h3>
                <img src="/images/love.png" alt="love" />
            </div>

            <div className="advantagesWrapp">
                <div className="advantage">
                    <h3>01</h3>
                    <div className="textContent">
                    <h4>
                        A wealth of healthy recipes
                    </h4>
                    <p>
                    Anyone registered on this site can share their experience in healthy eating by adding a recipe</p>
                    </div>
                </div>

                <div className="advantage">
                    <h3>02</h3>
                    <div className="textContent">
                    <h4>
                        A wealth of healthy recipes
                    </h4>
                    <p>Anyone registered on this site can share their experience in healthy eating by adding a recipe</p>
                    </div>
                </div>

                <div className="advantage">
                    <h3>03</h3>
                    <div className="textContent">
                    <h4>
                        Preparation of a personal healty food plan
                    </h4>
                    <p>By entering your weight, height, activity level and age, the calorie calculator will calculate your daily calorie intake based on your goal.</p>
                    </div>
                </div>

                <div className="advantage">
                    <h3>04</h3>
                    <div className="textContent">
                    <h4>
                        Constant Updates
                    </h4>
                    <p>New recipes are added daily.</p>
                    </div>
                </div>
            </div>
            <div className="join">
                    <div className="media">
                         <img src="/images/finger.png" alt="finger" />
                    </div>  
                    <div className="textJoin">
                        <h3>Hey you, join the Healthy Lifestyle team today</h3>
                        <h4>Start your healthy lifestyle</h4>
                        <h4>Unleash Your Inner Chef!</h4>
                        <p>
                            <Link to='/user/register'>Create an account</Link>
                            <img src="/images/icons/plus-solid.svg" alt="plus" />
                        </p>
                    </div>
            </div>
        </section>
        
        </>
    )
}