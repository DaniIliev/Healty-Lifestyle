import { useContext } from "react"
import { AuthContext } from "../../contexts/authContext"
import * as commentService from '../../services/commentService'
import { useNavigate } from "react-router-dom"
export default function Comment({
    id,
    recipeId,
    type,
    name,
    comment,
    ownerId,
    showCommentsHandler
}){
    const {userId} = useContext(AuthContext)
    const isOwner = userId == ownerId ? true : false;

    const deleteClickHandler = () => {

        const hasConfirm = confirm('Are you sure you want to delete the comment?')

        if(hasConfirm){
            commentService.del(type, recipeId, id)
                    .then(res => {
                        showCommentsHandler()
                    })
        }
    }
    return(
        <div className="commmentContent">
            <div className="textContent">
                 <h6><strong>Name:</strong> {name}</h6>
                <p><strong>Content:</strong> {comment}</p>
            </div>
            {isOwner && (
            <div className="buttonsEditDelete">
                <img src="/images/icons/trash.svg" alt="delete" className="delete" onClick={deleteClickHandler} />
                <img src="/images/icons/pencil-solid.svg" alt="edit" className="edit"/>
            </div>
            )}
        </div>
    )
}