import { useContext } from "react";
import { AuthContext } from "../../contexts/authContext";
import { Navigate, Outlet, useNavigate } from "react-router-dom";


export default function GuestGuard(){

    const {isAuthenticated} = useContext(AuthContext)
    const navigate = useNavigate()

    if(isAuthenticated){
       return <Navigate to={'/'}/>
    }

    return <Outlet/>
}