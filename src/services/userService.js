import { envirenment } from "../envirenment/envirenment"

export const register = async (user) => {
    const responce = await fetch(`${envirenment.apiUrl}:signUp?key=${envirenment.webApiKey}`,{
        method: "POST",
        headers:{
            'Content-Type': 'application.json'
        },
        body: JSON.stringify(user)
    })
    const result = await responce.json()
    return result
}  
