import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import * as recipeService from '../../services/recipeService'

const initialFormValues = {
    title: '',
    calorien: '',
    imageUrl: '',
    cooking: '',
    preparation:'',
    recipeType: '--',
    protein: '',
    carbs: '',
    fat: '',
    sugar: '',
    comentars: [],
    likes: [],
}

export default function EditRecipe() {
  const [editRecipe, setEditRecipe] = useState(initialFormValues)
const {type, id} = useParams()
const navigate = useNavigate()

useEffect(() => {
    recipeService.getOne(type,id)
        .then(data => setEditRecipe(data))
        .catch(err => console.log(err))
},[id])


const changeHandler = (e) => {
    let valueInputs = ''
    switch(e.target.type){
        case 'number':
            valueInputs = Number(e.target.value);
            break;
        case 'textarea':
            valueInputs = e.target.value;
            break;
        case 'checkbox':
            valueInputs = e.target.checked;
        break;
        default:
            valueInputs = e.target.value;
            break
    }

    setEditRecipe(state => ({
        ...state,
        [e.target.name]: valueInputs,
    }))
}

  const editHandler = (e) => {
    e.preventDefault()

    recipeService.patch(type,id, editRecipe)
            .then(res => navigate(`/recipes/${type}/details/${id}`))
            .catch(err => console.log(err))
  };

  return (
    <>
      <div className="editPost">
        <h1>
         <img src="/images/editIcon.png" alt="edit" className="editImg"/> Edit-post <img src="/images/edit.jpeg" alt="" className="editImg"/>
        </h1>

        <form className="editPostForm" onSubmit={editHandler}>
          <div className="inputWrapper">
            <label htmlFor="title">Title</label>
            <input
              className="formInput"
              type="text"
              id="text"
              name="title"
              placeholder="Type your post title"
              value={editRecipe.title}
              onChange={changeHandler}
            />
          </div>
          <div className="selectOptions">
            <label htmlFor="recipeType">Recipe type</label>
            <select
              name="recipeType"
              id="recipetype"
              className="recypetype"
              value={editRecipe.recipeType}
              onChange={changeHandler}
            >
              <option value="-">----</option>
              <option value="breakfast">Breakfast</option>
              <option value="lunch&dinner">Lunch & Dinner</option>
              <option value="salats">Salats</option>
              <option value="snacks">Snacks</option>
              <option value="deserts">Deserts</option>
            </select>
          </div>
          <div className="inputWrapper">
            <label htmlFor="calorien">Calorien</label>
            <input
              className="formInput"
              type="number"
              id="text"
              name="calorien"
              placeholder="Type your post calorien"
              value={editRecipe.calorien}
              onChange={changeHandler}
            />
          </div>
          <div className="calorienInhalt">
            <div>
              <label htmlFor="protein">Protein</label>
              <input
                className="calorienInhaltInput"
                type="number"
                id="text"
                name="protein"
                placeholder="Protein..."
                value={editRecipe.protein}
                onChange={changeHandler}
              />
            </div>

            <div>
              <label htmlFor="fat">Fat</label>
              <input
                className="calorienInhaltInput"
                type="number"
                id="text"
                name="fat"
                placeholder="Fat..."
                value={editRecipe.fat}
                onChange={changeHandler}
              />
            </div>

            <div>
              <label htmlFor="carbs">Carbs</label>
              <input
                className="calorienInhaltInput"
                type="number"
                id="text"
                name="carbs"
                placeholder="Carbs..."
                value={editRecipe.carbs}
                onChange={changeHandler}
              />
            </div>

            <div>
              <label htmlFor="sugar">Sugar</label>
              <input
                className="calorienInhaltInput"
                type="number"
                id="text"
                name="sugar"
                placeholder="Sugar..."
                value={editRecipe.sugar}
                onChange={changeHandler}
              />
            </div>
          </div>

          <div className="inputWrapper">
            <label htmlFor="imageUrl">Image</label>
            <input
              className="formInput"
              type="text"
              id="text"
              name="imageUrl"
              placeholder=""
              value={editRecipe.imageUrl}
              onChange={changeHandler}
            />
          </div>

          <div className="inputWrapper">
            <label htmlFor="cooking">Required cooking time (in minutes)</label>
            <input
              className="formInput"
              type="number"
              id="number"
              name="cooking"
              placeholder="Minutes"
              value={editRecipe.cooking}
              onChange={changeHandler}
            />
          </div>

          <div className="inputWrapper">
            <label htmlFor="preparation">Metod of preparation</label>
            <textarea
              className="formInput"
              type="text"
              id="text"
              name="preparation"
              value={editRecipe.preparation}
              onChange={changeHandler}
            />
          </div>

          <div className="buttons">
            <p>
              <Link to={`/recipes/${type}/details/${id}`}>Back</Link>
            </p>
            <button type="submit">Edit</button>
          </div>
        </form>
      </div>
    </>
  );
}
