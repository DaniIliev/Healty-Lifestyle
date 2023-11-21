

export const send = async (comment, id, type) => {
      const responce = await fetch(`https://react-demo-a5b29-default-rtdb.firebaseio.com/recipes/${type}/${id}/comentars.json`,{ 
        method: 'POST',
        headers:{
            'content-type': 'application.json'
        },
        body: JSON.stringify(comment)
      }
      )

      const result = await responce.json()

      return result

}

export const get = async (id, type) => {
  const responce = await fetch(`https://react-demo-a5b29-default-rtdb.firebaseio.com/recipes/${type}/${id}/comentars.json`)

  const result = await responce.json()

  return Object.values(result)

}