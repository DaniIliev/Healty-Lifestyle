import { useContext, useEffect, useState } from "react"
import { Link, useNavigate, useParams } from "react-router-dom"
import CreatePost from "../create/CreatePost"
import * as recipeService from '../../services/recipeService'
import RecipeItem from "../recipe/RecipeItem"
import { responceDataStructure } from "../../utils/structureData"
import SpinnerComponent from "../spinner/SpinnerComponent"
import { Pagination } from "../pagination/Pagination"
import { AuthContext } from "../../contexts/authContext"
import FilterComponent from "../filter/FilterComponent"

export default function RecipesCatalog(){
    const {isAuthenticated} = useContext(AuthContext)
    const navigate = useNavigate()
    const [recipes, setRecipes] = useState([])
    const [showCreateModal, setShowCreateModal] = useState(false)
    const [loading, setLoading] = useState(false)
    const [showFilter, setShowFilter] = useState(false)
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
        if(isAuthenticated){
            setShowCreateModal(true)
        }else{
            navigate('/user/login')
            setShowCreateModal(false)
        }
    }

    const recipeFilter = (filteredRecipes) => {
        setRecipes(filteredRecipes)
    }

    const lastPostIndex = currentPage * postsPerPage;
    const firstPostIndex = lastPostIndex - postsPerPage;
    const currentPosts = recipes.slice(firstPostIndex, lastPostIndex)
    return(
        
        <>
        {loading == true ? 
                <SpinnerComponent/>
                        :
        <div className="catalog" id="blur">
            <div className="content">
            <h3>Are you out of healthy food ideas? Here you can find many and varied recipes</h3>
            {isAuthenticated && (
                    <div className="idea">
                         <img src="/images/chef.png" alt="chef" />
                         <div className="idea-text">
                         <h4>You have an idea that you want to share with our team?</h4>
                         <p><Link onClick={onCreateHandleClick} id="open-popup">Click here to create recipe!</Link></p>
                         </div>
                     </div>
            )}
            {!isAuthenticated && (
                <div className="idea">
                    <img src="/images/joinTeam.png" alt="chef" />
                    <div className="idea-text">
                    <h4>After registration, you will become part of our team and will be able to share your recipes with us</h4>
                    <p><Link to={'/user/register'}>Click here to join!</Link></p>
                    </div>
                </div> 
            )}
            </div>
            <div className="filter">
            <img src="/images/filter.png" alt="filter" className="filterImg"/>
            {<FilterComponent filter={recipeFilter} />}
            </div>
            <div className="cardsWrapper">
                {currentPosts.map(recipe => <RecipeItem key={recipe.id} {...recipe}/>)}
            </div>
            <Pagination totalPosts={recipes.length} postsPerPage={postsPerPage} setCurrentPage={setCurrentPage} /> 
        </div>
        
        }
            {showCreateModal && <CreatePost hide={hideModal} setRecipes={setRecipes}/>}
        </>
    )
}