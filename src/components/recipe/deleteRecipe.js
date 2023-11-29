
import * as recipeService from '../../services/recipeService'

export function deleteRecipe(type,id, title, navigate){
    const hasConfirm = confirm(`Are you sure you want to delete the recipe with a name ${title}?`)
    if(hasConfirm){
      recipeService.del(type, id)
      .then(() => {
        navigate(`/recipes/all`)
    })
    }
}