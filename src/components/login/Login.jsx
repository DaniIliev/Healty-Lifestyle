import { useContext, useState } from "react"
import { Link } from "react-router-dom"
import { AuthContext } from "../../contexts/authContext"
import useForm from "../../hooks/useForm"

const initialFormValues = {
    email: '',
    password: ''
}

export default function Login(){
    const {onLoginSubmit} = useContext(AuthContext)
    const {values, changeHandler, onSubmit} = useForm(initialFormValues, onLoginSubmit)

    return(
        <div className="wrapper">
        <img src="/images/fruit.png" alt="fruit" className="fon"/>
    <div className="register">
    {values?.errors?.type && <p className="errorOnLogin">{values?.errors?.type}</p>}
        <div className="titleLog">
            <div className="userIcon">
                <img src="/images/icons/user-solid.svg" alt="user" />
            </div>
                <h3>Sign in</h3>
                <div className="userIcon">
                    <img src="/images/icons/login.svg" alt="login" />
                </div>
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
                <img src="/images/icons/key.svg" alt="lock" />
                <input type="password" name="password" placeholder="Type your password" value={values.password} onChange={changeHandler} />    
            </div>
        </div>
        
        <button type="submit">Login</button>
    </form>
    <div className="alreadyRegistered">
        <p>You don't have an account yet?</p>
        <Link to={'/user/register'}>Register</Link>
    </div>
 </div>
 <img src="/images/vegetables.png" alt="vegetables" className="fon"/>
    </div>
    )
}