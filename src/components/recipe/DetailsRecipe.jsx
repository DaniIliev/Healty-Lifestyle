import { useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import * as recipeService from "../../services/recipeService";
import * as commentService from "../../services/commentService";
import * as likeService from "../../services/likeService";
import { AuthContext } from "../../contexts/authContext";
import Comment from "./Comment";
import { responceDataStructure } from "../../utils/structureData";
import { Link } from "react-router-dom";
import SpinnerComponent from "../spinner/SpinnerComponent";
import { deleteRecipe } from "./deleteRecipe";


export default function DetailsRecipe() {
  const { userId, userEmail } = useContext(AuthContext);
  const { type, id } = useParams();
  const navigate = useNavigate()

  const [recipeDetails, setRecipeDetails] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [showComents, setShowComents] = useState(false);
  const [isAlreadyLiked, setIsAlreadyLiked] = useState(false);
  const [comments, setComents] = useState([]);
  const [coment, setComent] = useState({
    comment: "",
    name: userEmail,
    ownerId: userId,
  });

  useEffect(() => {
    setIsLoading(true);
    recipeService.getOne(type, id)
      .then((data) => {
        if (data.likes) {
          let isLiked = Object.values(data?.likes).filter((id) => id == userId);
          if (isLiked) {
            setIsAlreadyLiked((state) => !state);
          }
        }
        setRecipeDetails(data);
        setIsLoading(false);
      })
      .catch((err) => console.log(err));
  }, [id]);

  const onHandleChange = (e) => {
    setComent((state) => ({
      ...state,
      [e.target.name]: e.target.value,
    }));
  };

  const showCommentsHandler = () => {
    if (showComents) {
      return setShowComents(false);
    }
    commentService.get(id, type).then((responce) => {
      let result;
      if (responce) {
        result = responceDataStructure(responce, type);
      } else {
        result = undefined;
      }
      setComents(result);
      setShowComents(true);
    });
  };

  const sendComment = (e) => {
    e.preventDefault();

    commentService
      .send(coment, id, type)
      .then((responce) => {
        const newComment = {
          ...coment,
          id: responce.name,
        };
        if (comments) {
          setComents((state) => [...state, newComment]);
        } else {
          setComents([newComment]);
        }
        setComent((state) => ({
          ...state,
          comment: "",
        }));
        setShowComents(true);
      })
      .catch((err) => console.log(err));
  };

  const likeHandler = (e) => {
    e.preventDefault();

    likeService.like(type, id, userId)
      .then((responce) => setIsAlreadyLiked(true))
      .catch((err) => console.log(err));
  };

  const unLikeHandler = (e) => {
    e.preventDefault();

    likeService.unLike(type, id, userId)
      .then(() => setIsAlreadyLiked(false))
      .catch((err) => console.log(err));
  };

  const deleteRecipeHandler = (e) => {
    e.preventDefault()
    deleteRecipe(type,id, recipeDetails.title, navigate)
  }

  const isOwner = recipeDetails.ownerId == userId ? true : false;

  return (
    <>
      {isLoading && <SpinnerComponent />}

      {!isLoading && (
        <div className="detailsPage">
          <h1 className="detailsTitle">Detailed recipe information</h1>
          <div className="wrappDetails">
            <div className="wrappImgIcon">
              <img src={recipeDetails.imageUrl} alt="" className="detailsImg" />
              <div className="imgCommentAreaWrap">
                {isAlreadyLiked && (
                  <img
                    src="/images/icons/unlike.png"
                    alt="unlike"
                    className="unLike"
                    onClick={unLikeHandler}
                  />
                )}
                {!isAlreadyLiked && (
                  <img
                    src="/images/icons/like.png"
                    alt="likefsdafdsa"
                    className="like"
                    onClick={likeHandler}
                  />
                )}
                <div className="comentars">
                  <div className="write-comment">
                    {/* <label htmlFor="write-coment">Write a comment here</label> */}
                    <div className="buttonInput">
                      <input
                        name="comment"
                        className="textarea"
                        onChange={onHandleChange}
                        placeholder="Write comment here..."
                        value={coment.comment}
                      />
                      <button
                        className="send"
                        onClick={sendComment}
                        disabled={
                          coment.comment == undefined || coment.comment == ""
                            ? true
                            : undefined
                        }
                      >
                        Send
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <button className="showComents" onClick={showCommentsHandler}>
                {/* {" "} */}
                {showComents ? "Hide all Coments" : "Show all Coments"}{" "}
                <img src="/images/icons/comment.svg" />
              </button>
              {showComents && (
                <div className="comments-list">
                  {comments ? (
                    comments.map((comment) => (
                      <Comment
                        key={comment.id}
                        {...comment}
                        recipeId={id}
                        type={type}
                        showCommentsHandler={showCommentsHandler}
                      />
                    ))
                  ) : (
                    <p>No comments available!</p>
                  )}
                </div>
              )}
            </div>

            <div className="card-details">
              <h4>{recipeDetails.recipeType}</h4>
              <h3>{recipeDetails.title}</h3>
              <p>Cooking time: {recipeDetails.cooking}</p>
              <p>Calorien per 100 grams:{recipeDetails.calorien} cal</p>
              <table className="table" name="table">
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
              <textarea
                className="formInput"
                type="text"
                id="text"
                name="preparation"
                defaultValue={recipeDetails.preparation}
              />
            </div>
            {isOwner && (
              <div className="editDeleteButtons">
                <button>
                  <Link>Edit</Link>
                </button>
                <button>
                  <Link onClick={deleteRecipeHandler}>Delete</Link>
                </button>
                <button>
                  <Link>Back</Link>
                </button>
              </div>
            )}

            {!isOwner && (
              <div className="editDeleteButtons">
                <button><Link to={'/recipes/all'}>Back</Link></button>
              </div>
            )}
          </div>
        </div>
      )}
    </>
  );
}
