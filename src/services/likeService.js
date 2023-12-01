export const like = async (type, postId, userId) => {
    const responce = await fetch(`https://react-demo-a5b29-default-rtdb.firebaseio.com/recipes/${type}/${postId}/likes.json`,{ 
        method: 'POST',
        headers:{
            'content-type': 'application.json'
        },
        body: JSON.stringify(userId)
      });

      const result = await responce.json()
      const newLike = {
        likeId: result.name, 
        likedUserID: userId
      }

        return newLike
}


export const unLike = async (type, postId, userId) => {
    const responce = await fetch(`https://react-demo-a5b29-default-rtdb.firebaseio.com/recipes/${type}/${postId}/likes/${userId}.json`,{ 
        method: 'DELETE',
      });

      const result = await responce.json()
      console.log(result)
    //   return result
}

export const getAll = async (type, id) => {
    const responce = await fetch(`https://react-demo-a5b29-default-rtdb.firebaseio.com/recipes/${type}/${id}/likes.json`,{
        method: 'GET',
    })

    const result = await responce.json()


    // if(result){
    //     return Object.values(result).length
    // }
    // return 0
    console.log(result)
    return result
}   