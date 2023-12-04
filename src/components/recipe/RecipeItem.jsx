import { Link } from "react-router-dom"
export default function RecipeItem({
    id,
    title,
    recipeType,
    calorien,
    imageUrl,
    cooking,
}){

    return(
        <div className="card">
            <Link to={`/recipes/${recipeType}/details/${id}`}>
                <div className="card-media">
                         <img src={imageUrl} alt="image" />
                </div>
                <div className="card-text">
                        <h4>{recipeType}</h4>
                        <h3>{title}</h3>
                        <p>Calorien per 100 grams: {calorien} cal</p>
                        <p className="durationP"><img src="/images/duration.png" alt="duration" className="duration"/>{cooking} min</p>
                        <div className="info">
                            <p>{'>>>'}</p>
                             <img src="/images/icons/info.svg" alt="info"/>
                             <p>{'<<<'}</p>
                        </div>
                </div>
                </Link>
        </div>

    )
}