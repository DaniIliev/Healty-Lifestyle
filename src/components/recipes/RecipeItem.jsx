import { Link } from "react-router-dom"
export default function RecipeItem({
    id,
    titel,
    recipeType,
    calorien,
    imageUrl,
}){



    return(
        <div className="card">
            <div className="card-media">
                <img src={imageUrl} alt="image" />
            </div>
            <div className="card-text">
                <h4>{recipeType}</h4>
                <h3>{titel}</h3>
                <p>Calorien per 100 grams: {calorien} cal</p>
            </div>
            <p className="buttonDetails"><Link>Details</Link></p>
        </div>
    )
}