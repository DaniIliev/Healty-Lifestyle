import { useEffect, useState } from "react";
import RecipeItem from "../recipe/RecipeItem";
import * as recipeService from "../../services/recipeService";
import { Link, useParams } from "react-router-dom";
import SpinnerComponent from "../spinner/SpinnerComponent";
import { Pagination } from "../pagination/Pagination";

export default function UserRecipes() {
  const [myRecipes, setMyRecipes] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1)
  const [postsPerPage, setPostsPerPage] = useState(4)
  const { id } = useParams();

  useEffect(() => {
    setIsLoading(true);
    recipeService
      .getUserRecipes(id)
      .then((responce) => {
        setMyRecipes(responce);
        setIsLoading(false)
      })
      .catch((err) => console.log(err));
  }, []);


  const lastPostIndex = currentPage * postsPerPage;
  const firstPostIndex = lastPostIndex - postsPerPage;
  const currentPosts = myRecipes.slice(firstPostIndex, lastPostIndex)
  return (
    <>
      {isLoading && <SpinnerComponent />}
      {!isLoading && (
        <div className="containerUserRecipes">
          <div className="title">
            {/* <h2>My Recipes</h2> */}
            <img src="/images/my-recipes.png" alt="my-recipes" />
          </div>

          <div className="cardsWrapper user">
            {myRecipes &&
              currentPosts.map((recipe) => (
                <RecipeItem key={recipe.id} {...recipe} />
              ))}
            {currentPosts.length == 0 && (
              <div className="wrappNoContent">
                  <p className="noRecipesAvailable">No recipes available! :(</p>
                  <div className="idea-text">
                      <p><Link to={'/recipes/all'}>Recipe Catalog</Link></p>
                  </div>
              </div>
            )}
          </div>
          <Pagination totalPosts={myRecipes.length} postsPerPage={postsPerPage} setCurrentPage={setCurrentPage} />
        </div>
      )}
    </>
  );
}
