export const like = async (type, postId, userId) => {
    const responce = await fetch(`https://react-demo-a5b29-default-rtdb.firebaseio.com/recipes/${type}/${postId}/likes.json`,{ 
        method: 'POST',
        headers:{
            'content-type': 'application.json'
        },
        body: JSON.stringify(userId)
      });

      const result = responce.json()
      return result
}


export const unLike = async (type, postId, userId) => {
    const responce = await fetch(`https://react-demo-a5b29-default-rtdb.firebaseio.com/recipes/${type}/${postId}/likes.json`,{ 
        method: 'DELETE',
        headers:{
            'content-type': 'application.json'
        },
        body: JSON.stringify(userId)
      });

      const result = responce.json()
      return result
}