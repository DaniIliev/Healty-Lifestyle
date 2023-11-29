import { useContext, useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import * as recipeService from '../../services/recipeService'
import { AuthContext } from "../../contexts/authContext"
import RecipeItem from "../recipe/RecipeItem"
import SpinnerComponent from "../spinner/SpinnerComponent"
import { Pagination } from "../pagination/Pagination"

export default function FavoriteRecipes(){
    const [favoriteRecipes, setFavoriteRecipes] = useState([])
    const [currentPage, setCurrentPage] = useState(1)
    const [postsPerPage, setPostsPerPage] = useState(4)
    const [isLoading, setIsLoading] = useState(false)
    const {userId} = useContext(AuthContext)
    const {id} = useParams()

    useEffect(() => {
        setIsLoading(true)
        recipeService.getFavoriteRecipes(id, userId)
                .then(res => {
                    setFavoriteRecipes(res)
                    setIsLoading(false)
                })
    }, [id])


    const lastPostIndex = currentPage * postsPerPage;
    const firstPostIndex = lastPostIndex - postsPerPage;
    const currentPosts = favoriteRecipes.slice(firstPostIndex, lastPostIndex)

    return(
        <>  
        {isLoading && <SpinnerComponent />}

        {!isLoading && (
            <div className="containerUserRecipes">
            <div className="title2">
                <img src="/images/book.png" alt="" className="love-recipes" />
                <h2>My Favorite Recipes</h2>
                <img src="/images/love-recipes.png" alt="" className="love-recipes"/>
            </div>
            <div className="cardsWrapper user">
                {favoriteRecipes && (
                        currentPosts.map(recipe => <RecipeItem key={recipe.id} {...recipe}/>)
                )}

                {!favoriteRecipes && (
                    <h3>I don't have Favorite Recipes :(</h3>
                )}
            </div>
            <Pagination totalPosts={favoriteRecipes.length} postsPerPage={postsPerPage} setCurrentPage={setCurrentPage} />
            </div>
        )}
        </>
    )
}