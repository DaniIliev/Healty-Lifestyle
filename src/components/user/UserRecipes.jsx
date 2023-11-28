import { useEffect, useState } from "react";
import RecipeItem from "../recipe/RecipeItem";
import * as recipeService from '../../services/recipeService'
import { useParams } from "react-router-dom";

export default function UserRecipes(){
    const [myRecipes, setMyRecipes] = useState([])
    const {id} = useParams()

    useEffect(() => {
        recipeService.getUserRecipes(id)
            .then(responce => setMyRecipes(responce))
            .catch(err => console.log(err))
    }, [])


// console.log(...myre)

    return(
        <>
        <h2>My Recipes</h2>
        <div className="cardsWrapper">

            {myRecipes && (
                myRecipes.map(recipe => <RecipeItem key={recipe.id} {...recipe}/>)
                )
            }
        </div>
        </>
    )
}