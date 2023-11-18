import { useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import * as userService from '../../services/userService'

export default function Register(){
    // podobrenie 
    const navigation = useNavigate()
    // const [user, setUser] = useState({})
    const [formValues,setFormValues] = useState({
        email: '',
        password: '',
        rePassword: '',
    })

    const onHandleChange = (e) => {
        setFormValues(state => ({
            ...state,
            [e.target.name]: e.target.value,
        }))
    }

    const submitHandler = (e) => {
        e.preventDefault()
        let user = {}
        userService.register(formValues)
                .then(responce => {
                    user = {
                        email: responce.email,
                        userId: responce.localId
                    }
                    localStorage.setItem('user', JSON.stringify(user))
                    navigation('/')
                })
                .catch(err => console.log(err))
    }


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
        <form className="registerForm" onSubmit={submitHandler}>
            <div className="inputWrapper">
                <label htmlFor="email">Email</label>
                <div>
                    <img src="/images/icons/at-solid.svg"/>
                    <input type="text" name="email" placeholder= "Type your email" value={formValues.email} onChange={onHandleChange}/>
                </div>
            </div>

            <div className="inputWrapper">
                <label htmlFor="email">Password</label>
                <div>
                    <img src="/images/icons/lock-solid.svg" alt="lock" />
                    <input type="password" name="password" placeholder="Type your password" value={formValues.password} onChange={onHandleChange} />    
                </div>
            </div>
            
            
            <div className="inputWrapper">
                <label htmlFor="email">Repeat password</label>
                <div>
                    <img src="/images/icons/lock-solid.svg" alt="lock" />
                    <input type="password" name="rePassword" placeholder="Repeat your password" value={formValues.rePassword} onChange={onHandleChange}/> 
                </div>
            </div>
            <button type="submit">Sign Up</button>
        </form>
        <div className="alreadyRegistered">
            <p>Already registered?</p>
            <Link>Login</Link>
        </div>
     </div>
     <img src="/images/vegetables.png" alt="vegetables" className="fon"/>
        </div>


    )
}