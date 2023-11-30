import { useContext } from "react";
import { AuthContext } from "../../contexts/authContext";
import { Navigate, Outlet } from "react-router-dom";


export default function AuthGuard(){

    const {isAuthenticated} = useContext(AuthContext)


    console.log(isAuthenticated)
    if(!isAuthenticated){
        console.log('navigate!!')
       return <Navigate to={'/user/login'}/>
    }

    return <Outlet/>
}