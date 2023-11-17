

export const createRecipe = async (type, data) => {
    console.log(type)
    const responce = await fetch(`https://react-demo-a5b29-default-rtdb.firebaseio.com/recipes/${type}.json`,{
        method: 'POST',
        headers:{
            'content-type': 'application.json'
        },
        body: JSON.stringify(data)
    })
    const result = responce.json()

    return result
}

export const getRecipes = async (type, data) => {
    const responce = await fetch(`https://react-demo-a5b29-default-rtdb.firebaseio.com/recipes.json`)
    const result = await responce.json()

    return result
}