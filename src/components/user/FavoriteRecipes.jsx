import { useContext, useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import * as recipeService from '../../services/recipeService'
import { AuthContext } from "../../contexts/authContext"
import RecipeItem from "../recipe/RecipeItem"

export default function FavoriteRecipes(){
    const [favoriteRecipes, setFavoriteRecipes] = useState([])
    const {userId} = useContext(AuthContext)
    const {id} = useParams()

    useEffect(() => {
        recipeService.getFavoriteRecipes(id, userId)
                .then(res => setFavoriteRecipes(res))
    }, [id])


    return(
        <>
            <div className="containerUserRecipes">
            <div className="title2">
                <img src="/images/book.png" alt="" className="love-recipes" />
                <h2>My Favorite Recipes</h2>
                <img src="/images/love-recipes.png" alt="" className="love-recipes"/>
            </div>
            <div className="cardsWrapper user">
                {favoriteRecipes && (
                        favoriteRecipes.map(recipe => <RecipeItem key={recipe.id} {...recipe}/>)
                )}

                {!favoriteRecipes && (
                    <h3>I don't have Favorite Recipes :(</h3>
                )}
            </div>
            </div>
            
        </>
    )
}