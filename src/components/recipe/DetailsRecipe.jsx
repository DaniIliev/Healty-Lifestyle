import { useContext, useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import * as recipeService from '../../services/recipeService'
import * as commentService from '../../services/commentService'
import * as likeService from '../../services/likeService'
import { AuthContext } from "../../contexts/authContext"
import Comment from "./Comment"


export default function DetailsRecipe(){
    const {userId, userEmail} = useContext(AuthContext)
    const {type, id} = useParams()

    const [recipeDetails, setRecipeDetails] = useState([])
    const [showComents, setShowComents] = useState(false)
    const [isAlreadyLiked, setIsAlreadyLiked] = useState(false)
    const [comments, setComents] = useState([])

    const [coment, setComent] = useState({
        comment: '',
        name: userEmail,
        ownerId: userId
    })

    useEffect(() => {
        recipeService.getOne(type,id)
            .then(data => {
                if(data.likes){
                    let isLiked = Object.values(data?.likes).filter(id => id == userId);
                    if(isLiked){
                        setIsAlreadyLiked(state => !state)
                    }
                }
                setRecipeDetails(data)

            })
            .catch(err => console.log(err))
    }, [id])

    const onHandleChange = (e) => {
        setComent(state => ({
            ...state,
            [e.target.name]: e.target.value,
        }))
    }

    const showCommentsHandler = () => {
        console.log(showComents)
        if(showComents){
            return setShowComents(false)
        }
        commentService.get(id, type)
            .then((responce) => {
                setComents(responce)
                setShowComents(true)
            })
    }


    const sendComment = (e) => {
        e.preventDefault()

        commentService.send(coment, id, type)
            console.log(type)
            .then(() => setComent({
                comment: '',
                name: userEmail
            }))
            .catch(err => console.log(err))
    }

    const likeHandler = (e) => {
        e.preventDefault()

        likeService.like(type,id,userId)
            .then(responce => setIsAlreadyLiked(true))
            .catch(err => console.log(err))
    }

    const unLikeHandler = (e) => {
        e.preventDefault()

        likeService.unLike(type,id,userId)
                .then(() => setIsAlreadyLiked(false))
                .catch(err => console.log(err))
    }

    return(
        <>
        <div className="detailsPage">
             <h1 className="detailsTitle">Detailed recipe information</h1>
             <div className="wrappDetails">
                    <div className="wrappImgIcon">
                        <img src={recipeDetails.imageUrl} alt="" className="detailsImg"/>
                    <div className="imgCommentAreaWrap">
                        {isAlreadyLiked && <img src="/images/icons/unlike.png" alt="unlike" className="unLike" onClick={unLikeHandler}/>}
                        {!isAlreadyLiked &&  <img src="/images/icons/like.png" alt="likefsdafdsa" className="like" onClick={likeHandler}/>}
                        <div className="comentars">
                            <div className="write-comment">
                            {/* <label htmlFor="write-coment">Write a comment here</label> */}
                                <div className="buttonInput">
                                    <input name="comment" className="textarea" onChange={onHandleChange} placeholder="Write comment here..." />
                                    <button className='send' onClick={sendComment}>Send</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <button className="showComents" onClick={showCommentsHandler}> Show all Coments <img src="/images/icons/comment.svg"/></button>
                    {showComents && (
                    <div className="comments-list">
                        {comments.map((comment, index) => <Comment key={index} {...comment}/>)}
                  
                    </div>)}
                </div>

            <div className="card-details">
                <h4>{recipeDetails.recipeType}</h4>
                <h3>{recipeDetails.title}</h3>
                <p>Cooking time: {recipeDetails.cooking}</p>
                <p>Calorien per 100 grams:{recipeDetails.calorien} cal</p>
                <table className="table" name='table'>
                    <tr>
                        <th>Protein</th>
                        <th>Fat</th>
                        <th>Carbs</th>
                        <th>Sugar</th>
                    </tr>
                    <tr>
                        <td>{recipeDetails.protein} grams</td>
                        <td>{recipeService.fat} grams</td>
                        <td>{recipeDetails.carbs} grams</td>
                        <td>{recipeDetails.sugar} grams</td>
                    </tr>
                </table>
                <label htmlFor="preparation">Metod of preparation</label>
                <textarea className='formInput' type="text" id="text" name="preparation" defaultValue={recipeDetails.preparation}/> 
            </div>
             </div>

        </div>
        </>
    )
}