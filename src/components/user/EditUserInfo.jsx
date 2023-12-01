import { Link, useNavigate, useParams } from "react-router-dom"
import * as userService from '../../services/userService'
import { valueInput } from "../../utils/valueInput"
import { useState, useEffect} from "react"


const initialFormValues = {
    username: '',
    man: '',
    women: '',
    hight: '',
    activeness: '',
    kilograms: '',
    age: '',
}

export default function EditUserInfo(){
    const [values, setValues] = useState(initialFormValues)
    const {userId} = useParams()
    const navigate = useNavigate()
    const [id, setId] = useState()

    useEffect(() => {
        userService.getDetails(userId)
                .then(data => {
                    setId(data[0].id)
                    setValues(data[0])
                })
    }, [userId])


    const onSubmitHandler = (e) => {
        e.preventDefault()
        userService.patch(id, values)
                .then(() => navigate(`/user/info/${userId}`))
                .catch((err) => console.log(err))
    }

    const changeHandler = (e) => {
        const inputValues = valueInput(e)
        setValues(state => ({
            ...state,
           [e.target.name]: inputValues,
        }))
    }


    return(
        <div className="userInfo">
        <div className="textCreateUserDetails">
            <h2>Edit your information here</h2>
            <p>The more accurate the information, the more accurate your caloric expenditure calculations will be</p>
        </div>
        <form className="userCreateDetailsForm" onSubmit={onSubmitHandler}>
        <div className="wrapp">
             <label htmlFor="username">Username</label>
             <input className='inputField' type="text" name="username" onChange={changeHandler}  value={values.username}/>
        </div>
        <div className="wrapGen">
            <label htmlFor="gender">Gender</label>
            <div className="chekbox">
                <div>
                     <label htmlFor="man">Man</label>
                    <input type="checkbox" name="man" id="man"  onChange={changeHandler} checked={values.man}/>
                </div>
                <div>
                    <label htmlFor="shopping">Women</label>
                    <input type="checkbox" name="women" id="women"  onChange={changeHandler} checked={values.women} />
                </div>
            </div>
        </div>
        <div className="wrapp">
            <label htmlFor="age">Age</label>
            <input type="number" className='inputField' name="age" id="age"  onChange={changeHandler} value={values.age}/>
        </div>
        <div className="wrapp">
            <label htmlFor="hight">Height in centimeter</label>
            <input type="number"className='inputField' name="hight" id="hight"  onChange={changeHandler} value={values.hight}/>
        </div>

        <div className="wrapp">
            <label htmlFor="kilos">Kilograms</label>
            <input type="number" className='inputField' name="kilograms" id="kilograms" onChange={changeHandler} value={values.kilograms}/>
        </div>

        <div className="wrapp">
            <label htmlFor="activeness">Activeness</label>
            <select className='inputField' name="activeness" id="activeness"  onChange={changeHandler} value={values.activeness}>
                <option value="Basal Metabolic Rate">Basal Metabolic Rate</option>
                <option value="Little or no physical activity">Little or no physical activity</option>
                <option value="Light exercise (1-3 days a week)">Light exercise (1-3 days a week)</option>
                <option value="Moderate exercise (3-5 days a week)">Moderate exercise (3-5 days a week)</option>
                <option value="Heavy exercise (6-7 days a week)">Heavy exercise (6-7 days a week)</option>
                <option value="Very heavy exercise (twice a day)">Very heavy exercise (twice a day)</option>
            </select>
        </div>
        <button type="submit">Edit</button>
        <button><Link to={'/'}>Back</Link></button>
    </form>
    </div>
    )
}