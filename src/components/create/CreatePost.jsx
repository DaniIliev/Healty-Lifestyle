import { useState } from "react"
import * as recipeService from '../../services/recipeService'
import { Form } from "react-router-dom"


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
    sugar: ''
}
export default function CreatePost({
    hide
}){
    const [formValues, setFormValues] = useState(initialFormValues)

    const onHandleChange = (e) => {
        let valueInputs = ''
        switch(e.target.type){
            case 'number':
                valueInputs = Number(e.target.value);
                break;
            case 'textarea':
                valueInputs = e.target.value;
            default:
                valueInputs = e.target.value;
                break
        }

        setFormValues(state => ({
            ...state,
            [e.target.name]: valueInputs,
        }))
    }

    const onCreateHandler = (e) => {
        e.preventDefault()
        let type = ''
        if(formValues.recipeType == 'breakfast'){
            console.log(formValues.breakfast)
            type = 'Breakfast';
        }else if(formValues.recipeType == 'snacks'){
            type = 'Snacks';
        }else if(formValues.recipeType == 'lunchdinner'){
            type = 'Lunch & Dinner'
        }else if(formValues.recipeType == 'salats'){
            type = 'Salats'
        }
        else{
            type = 'deserts';
        }
        console.log(type, formValues)
        recipeService.createRecipe(type, formValues)
                .then(() =>{
                    setFormValues(initialFormValues)
                    hide()
                })
                .catch(err => console.log(err))
    }


    return(
        <>
        <div className="createPost">
            <h1>Create-post</h1>

            <form className="createPostForm" onSubmit={onCreateHandler}>
            <div className="inputWrapper">
                <label htmlFor="title">Title</label>
                <input className='formInput' type="text" id="text" name="title" placeholder= "Type your post title" value={formValues.title} onChange={onHandleChange}/>
            </div>
            <div className="selectOptions">
                <label htmlFor="recipeType">Recipe type</label>
                <select name="recipeType" id="recipetype" className="recypetype" onChange={onHandleChange} value={formValues.recipeType}>
                    <option value="-">----</option>
                    <option value="breakfast">Breakfast</option>
                    <option value="lunchdinner">Lunch & Dinner</option>
                    <option value="salats">Salats</option>
                    <option value="snacks">Snacks</option>
                    <option value="deserts">Deserts</option>
                </select>
            </div>
            <div className="inputWrapper">
                <label htmlFor="calorien">Calorien</label>
                <input className='formInput' type="number" id="text" name="calorien" placeholder="Type your post calorien" value={formValues.calorien} onChange={onHandleChange}/>    
            </div>
            <div className="calorienInhalt">
                <div>
                    <label htmlFor="protein">Protein</label>
                    <input className='calorienInhaltInput' type="number" id="text" name="protein" placeholder="Protein..." value={formValues.protein} onChange={onHandleChange}/>
                </div>

                <div>
                <label htmlFor="fat">Fat</label>
                <input className='calorienInhaltInput' type="number" id="text" name="fat" placeholder="Fat..." value={formValues.fat} onChange={onHandleChange}/>
                </div>

                <div>
                <label htmlFor="carbs">Carbs</label>
                <input className='calorienInhaltInput' type="number" id="text" name="carbs" placeholder="Carbs..." value={formValues.carbs} onChange={onHandleChange}/>
                </div>

                <div>
                <label htmlFor="sugar">Sugar</label>
                <input className='calorienInhaltInput' type="number" id="text" name="sugar" placeholder="Sugar..." value={formValues.sugar} onChange={onHandleChange}/>
                </div>
            </div>

            <div className="inputWrapper">
                <label htmlFor="imageUrl">Image</label>
                <input className='formInput' type="text" id="text" name="imageUrl" placeholder="" value={formValues.imageUrl} onChange={onHandleChange}/>    
            </div>
            
            <div className="inputWrapper">
                <label htmlFor="cooking">Required cooking time (in minutes)</label>
                <input className='formInput' type="number" id="number" name="cooking" placeholder="Minutes" value={formValues.cooking} onChange={onHandleChange}/> 
            </div>

            <div className="inputWrapper">
                <label htmlFor="preparation">Metod of preparation</label>
                <textarea className='formInput' type="text" id="text" name="preparation" value={formValues.preparation} onChange={onHandleChange}/> 
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