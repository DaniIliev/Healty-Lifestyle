import { createContext, useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import * as userService from '../services/userService'
import { useLocalStorage } from "../hooks/useLocalStorage";
import * as inputValidation from '../utils/inputValidation'
export const AuthContext = createContext()

export const AuthProvider = ({children}) => {
    const [auth, setAuth] = useLocalStorage('user', {})
    const navigate = useNavigate()

    const onRegisterSubmit = async (values) => {
        const {rePassword, ...registerData} = values
        registerData.rePassword = rePassword
        try{
            const errors = inputValidation.register_loginFormValidation(registerData)
            if(Object.values(errors).length > 0){

                return {errors: {...errors}}
            }
            const result = await userService.register(registerData)
            setAuth({email:result.email, localId: result.localId})
            navigate('/')
        }catch(error){
            console.log(error)
        }
    }

    const onLoginSubmit = async (values) => {

        try{
            const result = await userService.login(values)
            if(result.error){
                return {errors: {type: 'Email or password don\'t match!'}}
            }
            setAuth({email:result.email, localId: result.localId})
            navigate('/')
        }catch(err){
            console.log(err)
        }
    }

    const logout = () => {
        try{
            setAuth({})
            document.location.reload()
            navigate('/')
        }catch(error){
            console.log(error)
        }
    }

    const reg = /@[a-z]+.[a-z]+/

    const contextValues = {
        onRegisterSubmit,
        logout,
        onLoginSubmit,
        userEmail: auth.email,
        userId: auth.localId,
        username: auth.email?.replace(reg, ''),
        isAuthenticated: !!auth.localId
    }

    return(
        <>
        <AuthContext.Provider value={contextValues} >
            {children}
        </AuthContext.Provider>
        </>
    )
}

export const useAuthContext = () => {
    const context = useContext(AuthContext)
    return context
}