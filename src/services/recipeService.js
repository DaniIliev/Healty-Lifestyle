import { responceDataStructure } from "../utils/structureData" 

export const createRecipe = async (type, data) => {
    console.log(type)
    const responce = await fetch(`https://react-demo-a5b29-default-rtdb.firebaseio.com/recipes/${type}.json`,{
        method: 'POST',
        headers:{
            'content-type': 'application.json'
        },
        body: JSON.stringify(data)
    })
    const result = await responce.json()
    const newRecipe = {
        ...data,
        id: Object.values(result)
    }
    return newRecipe
}

export const getRecipes = async (type) => {
    let responce;
    if(type == 'all'){
        responce = await fetch(`https://react-demo-a5b29-default-rtdb.firebaseio.com/recipes.json`)
    }else{
        responce = await fetch(`https://react-demo-a5b29-default-rtdb.firebaseio.com/recipes/${type}.json`)
    }


    const result = await responce.json()
    return result
}


export const getOne = async (type,id) => {

    const responce = await fetch(`https://react-demo-a5b29-default-rtdb.firebaseio.com/recipes/${type}/${id}.json`)
    const result = await responce.json()

    return result 
}

export const getUserRecipes = async(id) => {
    const responce = await fetch(`https://react-demo-a5b29-default-rtdb.firebaseio.com/recipes.json`)

    const data = await responce.json()

    const result = responceDataStructure(data, 'all')
                    .filter(r => r?.ownerId == id)

    return result
}

export const getFavoriteRecipes = async(id, userId) => {
    const responce = await fetch(`https://react-demo-a5b29-default-rtdb.firebaseio.com/recipes.json`)

    const data = await responce.json()
    
    const result = responceDataStructure(data, 'all')
                .filter(r => {
                    if(r.likes != undefined){
                        return Object.values(r?.likes)?.includes(id)
                    }
                })

    return result
}

export const del = async(type, id) => {
    const responce = await fetch(`https://react-demo-a5b29-default-rtdb.firebaseio.com/recipes/${type}/${id}.json`, {
        method: 'DELETE',
    })

    const result = await responce.json()
}

export const patch = async(type, id, data) => {
    const responce = await fetch(`https://react-demo-a5b29-default-rtdb.firebaseio.com/recipes/${type}/${id}.json`,{
        method: 'PATCH',
        headers:{
            'Content-Type': 'application.json'
        },
        body: JSON.stringify(data)
    })
}