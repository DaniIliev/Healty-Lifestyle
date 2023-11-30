import { useContext, useState } from "react"
import { Link } from "react-router-dom"
import { AuthContext } from "../../contexts/authContext"
import useForm from "../../hooks/useForm"

const initialFormValues = {
    email: '',
    password: '',
    rePassword: '',
}
export default function Register(){
    const {onRegisterSubmit} = useContext(AuthContext) 
    const {values, changeHandler, onSubmit} = useForm(initialFormValues, onRegisterSubmit)


    return(
        <div className="wrapper">
            <img src="/images/fruit.png" alt="fruit" className="fon"/>
        <div className="register">
            <div className="titleReg">
                    <div className="userIcon">
                        <img src="/images/icons/user-solid.svg" alt="user" />
                    </div>
                    <h3>+ Sign up</h3>
            </div>
        <form className="registerForm" onSubmit={onSubmit}>
            <div className="inputWrapper">
                <label htmlFor="email">Email</label>
                <div>
                    <img src="/images/icons/at-solid.svg"/>
                    <input type="text" name="email" placeholder= "Type your email" value={values.email} onChange={changeHandler}/>
                </div>
            </div>

            <div className="inputWrapper">
                <label htmlFor="email">Password</label>
                <div>
                    <img src="/images/icons/lock-solid.svg" alt="lock" />
                    <input type="password" name="password" placeholder="Type your password" value={values.password} onChange={changeHandler} />    
                </div>
            </div>
            
            
            <div className="inputWrapper">
                <label htmlFor="email">Repeat password</label>
                <div>
                    <img src="/images/icons/lock-solid.svg" alt="lock" />
                    <input type="password" name="rePassword" placeholder="Repeat your password" value={values.rePassword} onChange={changeHandler}/> 
                </div>
            </div>
            <button type="submit">Sign Up</button>
        </form>
        <div className="alreadyRegistered">
            <p>Already registered?</p>
            <Link to={'/user/login'}>Login</Link>
        </div>
     </div>
     <img src="/images/vegetables.png" alt="vegetables" className="fon"/>
        </div>


    )
}