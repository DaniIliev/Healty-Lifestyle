

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