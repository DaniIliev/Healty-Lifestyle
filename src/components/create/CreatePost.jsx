import { useContext, useState } from "react"
import * as recipeService from '../../services/recipeService'
import { recipeType } from "../../utils/structureData"
import {AuthContext} from '../../contexts/authContext'
import useForm from "../../hooks/useForm"
import useClickOutside from "../../hooks/useClickOutside"
import { createRecipeFormValidation } from "../../utils/inputValidation"
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
export default function CreatePost({
    hide,
    setRecipes
}){
    const {userId} = useContext(AuthContext)
    const [errors, setErrors] = useState([]) 
    const onCreateHandler = () => {

        let type = recipeType(values)
        const errorsArray = createRecipeFormValidation(values)

        if(Object.values(errorsArray).length > 0){

            return setErrors(errorsArray)
        }
        const data = {
            ...values,
            ownerId: userId,
            comentars: [],
            likes: [],
        }
        recipeService.createRecipe(type, data)
                .then((newRecipe) =>{

                    setRecipes(state => [...state,newRecipe])
                    hide()
                })
                .catch(err => console.log(err))
    if(newRecipe){
        return newRecipe
    }
    }

    const {values, changeHandler, onSubmit} = useForm(initialFormValues, onCreateHandler)
    const domNode = useClickOutside(hide)



    return(
        <>
        <div className="createPost" ref={domNode}>
            <h1>Create-post</h1>

            <form className="createPostForm" onSubmit={onSubmit}>
            <div className="inputWrapper">
                <label htmlFor="title">Title</label>
                {errors?.title && <p className="error">{errors?.title}</p>}
                <input className='formInput' type="text" id="text" name="title" placeholder= "Type your post title" value={values.title} onChange={changeHandler}/>
            </div>
            <div className="selectOptions">
                <label htmlFor="recipeType">Recipe type</label>
                {errors?.recipeType && <p className="error">{errors?.recipeType}</p>}
                <select name="recipeType" id="recipetype" className="recypetype" onChange={changeHandler} value={values.recipeType}>
                    <option value="-">----</option>
                    <option value="breakfast">Breakfast</option>
                    <option value="lunch&dinner">Lunch & Dinner</option>
                    <option value="salats">Salats</option>
                    <option value="snacks">Snacks</option>
                    <option value="deserts">Deserts</option>
                </select>
            </div>
            <div className="inputWrapper">
                <label htmlFor="calorien">Calorien per 100 grams</label>
                {errors?.calorien &&  <p className="error">{errors?.calorien}</p>}
                <input className='formInput' type="number" id="text" name="calorien" placeholder="Type your post calorien" value={values.calorien} onChange={changeHandler}/>    
            </div>
            <div className="calorienInhalt">
                <div>
                    <label htmlFor="protein">Protein</label>
                     {errors?.protein && <p className="error">{errors?.protein}</p>}
                    <input className='calorienInhaltInput' type="number" id="text" name="protein" placeholder="Protein..." value={values.protein} onChange={changeHandler}/>
                </div>

                <div>
                <label htmlFor="fat">Fat</label>
                {errors?.fat && <p className="error">{errors?.fat}</p>}
                <input className='calorienInhaltInput' type="number" id="text" name="fat" placeholder="Fat..." value={values.fat} onChange={changeHandler}/>
                </div>

                <div>
                <label htmlFor="carbs">Carbs</label>
                {errors?.carbs && <p className="error">{errors?.carbs}</p>}
                <input className='calorienInhaltInput' type="number" id="text" name="carbs" placeholder="Carbs..." value={values.carbs} onChange={changeHandler}/>
                </div>

                <div>
                <label htmlFor="sugar">Sugar</label>
                {errors?.sugar && <p className="error">{errors?.sugar}</p>}
                <input className='calorienInhaltInput' type="number" id="text" name="sugar" placeholder="Sugar..." value={values.sugar} onChange={changeHandler}/>
                </div>
            </div>

            <div className="inputWrapper">
                <label htmlFor="imageUrl">Image</label>
                {errors?.imageUrl && <p className="error">{errors?.imageUrl}</p>}
                <input className='formInput' type="text" id="text" name="imageUrl" placeholder="" value={values.imageUrl} onChange={changeHandler}/>    
            </div>
            
            <div className="inputWrapper">
                <label htmlFor="cooking">Required cooking time (in minutes)</label>
                {errors?.cooking && <p className="error">{errors?.cooking}</p>}
                <input className='formInput' type="number" id="number" name="cooking" placeholder="Minutes" value={values.cooking} onChange={changeHandler}/> 
            </div>

            <div className="inputWrapper">
                <label htmlFor="preparation">Metod of preparation</label>
                {errors?.preparation && <p className="error">{errors?.preparation}</p>}
                <textarea className='formInput' type="text" id="text" name="preparation" value={values.preparation} onChange={changeHandler}/> 
            </div>

        <div className="buttons">
            <button type="button" onClick={hide}>Cansel</button>
            <button type="submit">Create</button>
        </div>
        </form>
        </div>
        </>
    )
}