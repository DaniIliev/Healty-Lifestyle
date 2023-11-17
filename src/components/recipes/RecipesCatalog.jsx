import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import CreatePost from "../create/CreatePost"
import * as recipeService from '../../services/recipeService'
import RecipeItem from "./RecipeItem"

export default function RecipesCatalog(){
    const [recipes, setRecipes] = useState([])
    const [showCreateModal, setShowCreateModal] = useState(false)

    useEffect(() => {
        recipeService.getRecipes()
                .then(responce => {
                    const result = []

                    for (let i = 0; i < Object.values(responce).length; i++) {
                        let recipe = Object.values(Object.values(responce)[i])[0]
                        let id = Object.keys(Object.values(responce)[i])[0]
                        result.push({...recipe, id: id})
                    }
                    setRecipes(result)
                })
    }, [])

    const hideModal = () => {
        setShowCreateModal(false)
    }
    const onCreateHandleClick = (e) => {
        e.preventDefault()  
        setShowCreateModal(true)
    }
    return(
        <div className="catalog">
            <div className="content">
            <h3>Are you out of healthy food ideas? Here you can find many and varied recipes</h3>
            <div className="idea">
                <img src="/images/chef.png" alt="chef" />
                <div className="idea-text">
                <h4>You have an idea that you want to share with our team?</h4>
                <p><Link onClick={onCreateHandleClick}>Click here to create recipe!</Link></p>
                </div>
            </div>
            </div>
            {showCreateModal && <CreatePost hide={hideModal}/>}
            <div className="cardsWrapper">
                {recipes.map(recipe => <RecipeItem key={recipe.id} {...recipe}/>)}
            </div>
        </div>

    )
}