import { useContext, useState } from "react"
import * as recipeService from '../../services/recipeService'
import { Form } from "react-router-dom"
import { recipeType } from "../../utils/structureData"
import {AuthContext} from '../../contexts/authContext'
import UseForm from "../../hooks/useForm"
import useClickOutside from "../../hooks/useClickOutside"

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
    hide
}){
    const {userId} = useContext(AuthContext)

    const onCreateHandler = () => {
        let type = recipeType(values)
        const data = {
            ...values,
            ownerId: userId,
            comentars: [],
            likes: [],
        }
        recipeService.createRecipe(type, data)
                .then(() =>{
                    hide()
                })
                .catch(err => console.log(err))
    }

    const {values, changeHandler, onSubmit} = UseForm(initialFormValues, onCreateHandler)
    const domNode = useClickOutside(hide)



    return(
        <>
        <div className="createPost" ref={domNode}>
            <h1>Create-post</h1>

            <form className="createPostForm" onSubmit={onSubmit}>
            <div className="inputWrapper">
                <label htmlFor="title">Title</label>
                <input className='formInput' type="text" id="text" name="title" placeholder= "Type your post title" value={values.title} onChange={changeHandler}/>
            </div>
            <div className="selectOptions">
                <label htmlFor="recipeType">Recipe type</label>
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
                <label htmlFor="calorien">Calorien</label>
                <input className='formInput' type="number" id="text" name="calorien" placeholder="Type your post calorien" value={values.calorien} onChange={changeHandler}/>    
            </div>
            <div className="calorienInhalt">
                <div>
                    <label htmlFor="protein">Protein</label>
                    <input className='calorienInhaltInput' type="number" id="text" name="protein" placeholder="Protein..." value={values.protein} onChange={changeHandler}/>
                </div>

                <div>
                <label htmlFor="fat">Fat</label>
                <input className='calorienInhaltInput' type="number" id="text" name="fat" placeholder="Fat..." value={values.fat} onChange={changeHandler}/>
                </div>

                <div>
                <label htmlFor="carbs">Carbs</label>
                <input className='calorienInhaltInput' type="number" id="text" name="carbs" placeholder="Carbs..." value={values.carbs} onChange={changeHandler}/>
                </div>

                <div>
                <label htmlFor="sugar">Sugar</label>
                <input className='calorienInhaltInput' type="number" id="text" name="sugar" placeholder="Sugar..." value={values.sugar} onChange={changeHandler}/>
                </div>
            </div>

            <div className="inputWrapper">
                <label htmlFor="imageUrl">Image</label>
                <input className='formInput' type="text" id="text" name="imageUrl" placeholder="" value={values.imageUrl} onChange={changeHandler}/>    
            </div>
            
            <div className="inputWrapper">
                <label htmlFor="cooking">Required cooking time (in minutes)</label>
                <input className='formInput' type="number" id="number" name="cooking" placeholder="Minutes" value={values.cooking} onChange={changeHandler}/> 
            </div>

            <div className="inputWrapper">
                <label htmlFor="preparation">Metod of preparation</label>
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