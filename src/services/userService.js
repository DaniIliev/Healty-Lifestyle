import { envirenment } from "../envirenment/envirenment"
import { responceDataStructure } from "../utils/structureData"

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

export const login = async (user) => {
    const responce = await fetch(`${envirenment.apiUrl}:signInWithPassword?key=${envirenment.webApiKey}`, {
        method: 'POST',
        headers:{
            'Content-type': 'application.json'
        },
        body: JSON.stringify(user)
    })

    const result = await responce.json()
    return result
}


export const postDetails = async (data) => {

    const responce = await fetch(`https://react-demo-a5b29-default-rtdb.firebaseio.com/user.json`,{
        method: 'POST',
        headers:{
            'content-type': 'application.json'
        },
        body: JSON.stringify(data)
    })
    const result = responce.json()

    return result
}

export const getDetails = async (userId) => {
    const responce = await fetch('https://react-demo-a5b29-default-rtdb.firebaseio.com/user.json')
    const resultArr = await responce.json();
    const result = responceDataStructure(resultArr)
                        .filter(element => element.ownerId == userId )

    return result
}

export const patch = async (id, values) => {
    const responce = await fetch(`https://react-demo-a5b29-default-rtdb.firebaseio.com/user/${id}.json`,{
        method: 'PATCH',
        headers: {
            'Content-Type': 'application.json'
        },
        body: JSON.stringify(values)
    })
    const result = await responce.json()

    console.log(result)
    return result
}