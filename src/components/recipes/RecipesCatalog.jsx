import { useEffect, useState } from "react"
import { Link, useParams } from "react-router-dom"
import CreatePost from "../create/CreatePost"
import * as recipeService from '../../services/recipeService'
import RecipeItem from "../recipe/RecipeItem"
import { responceDataStructure } from "../../utils/structureData"
import SpinnerComponent from "../spinner/SpinnerComponent"
import { Pagination } from "../pagination/Pagination"

export default function RecipesCatalog(){
    const [recipes, setRecipes] = useState([])
    const [showCreateModal, setShowCreateModal] = useState(false)
    const [loading, setLoading] = useState(false)
    const [currentPage, setCurrentPage] = useState(1)
    const [postsPerPage, setPostsPerPage] = useState(8)

    const {type} = useParams()

    useEffect(() => {
        setLoading(true)
        recipeService.getRecipes(type)
                .then(responce => {
                    let result = responceDataStructure(responce, type)
                    setRecipes(result)
                    setLoading(false)
                })
                .catch(err => console.log(err))
    }, [type])

    const hideModal = () => {
        setShowCreateModal(false)
    }
    const onCreateHandleClick = (e) => {
        e.preventDefault()  
        setShowCreateModal(true)
    }

    const lastPostIndex = currentPage * postsPerPage;
    const firstPostIndex = lastPostIndex - postsPerPage;
    const currentPosts = recipes.slice(firstPostIndex, lastPostIndex)
    return(
        
        <>
        {loading == true ? 
                <SpinnerComponent/>
                        :
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
            {showCreateModal && <CreatePost hide={hideModal} setRecipes={setRecipes}/>}
            <img src="/images/filter.png" alt="filter" className="filter"/>
            <div className="cardsWrapper">
                {currentPosts.map(recipe => <RecipeItem key={recipe.id} {...recipe}/>)}
            </div>
            <Pagination totalPosts={recipes.length} postsPerPage={postsPerPage} setCurrentPage={setCurrentPage} /> 
        </div>
        }
        </>


    )
}