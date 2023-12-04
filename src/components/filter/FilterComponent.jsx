import { useParams } from "react-router-dom"
import useForm from "../../hooks/useForm"
import { Link } from "react-router-dom"
import * as recipeService from '../../services/recipeService'

const initialFormValues = {
    criteria: ''
}
export default function FilterComponent({filter}){

    const {type} = useParams()

    const onSubmitHandler = () => {
        recipeService.filter(type, values.criteria)
                    .then(res => filter(res))

    }

    const {values, changeHandler, onSubmit} = useForm(initialFormValues, onSubmitHandler)



    return(
        <div className="filterContent">
            <form className="filterForm" onSubmit={onSubmit}>
            <div className="wrapp">
                <label htmlFor="criteria">Filter by criteria</label>
                <select className='inputField' name="criteria" id="criteria" value={values.criteria} onChange={changeHandler}>
                    <option value="--">----</option>
                    <option value="Foods with the least amount of calories">Foods with the least amount of calories</option>
                    <option value="Foods with the highest calorie content">Foods with the highest calorie content</option>
                    <option value="The fastest cooking foods">The fastest cooking foods</option>
                    <option value="Foods that require more time to prepare">Foods that require more time to prepare</option>
                </select>
            </div>
                <p className="filterBtn"><Link onClick={onSubmit}>Filter</Link></p>
            </form>
        </div>
    )
}