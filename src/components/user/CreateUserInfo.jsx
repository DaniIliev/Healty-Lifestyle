import { useNavigate, useParams } from "react-router-dom"
import useForm from "../../hooks/useForm"
import * as userService from '../../services/userService'
const initialFormValues = {
    username: '',
    man: '',
    women: '',
    hight: '',
    activeness: '',
    kilograms: '',
    age: '',
}

export default function CreateUserInfo(){

    const {id} = useParams()
    const navigate = useNavigate()

    const onSubmitHandler = () => {
        userService.postDetails({...values, ownerId: id})
                .then(() => navigate(`/user/info/${id}`))
                .catch((err) => console.log(err))
    } 

    const {values, changeHandler, onSubmit} = useForm(initialFormValues, onSubmitHandler)


    return(
        <div className="userInfo">
            <div className="text">
                <h2>Enter your information here</h2>
                <p>After entering the information, our calculator will calculate the calorie expenditure</p>
            </div>
            <form className="userDetailsForm" onSubmit={onSubmit}>
            <div className="wrapp">
                 <label htmlFor="username">Username</label>
                 <input type="text" name="username" onChange={changeHandler} value={values.username}/>
            </div>
            <div className="wrapp">
                <label htmlFor="gender">Gender</label>
                <div className="chekbox">
                    <div>
                         <label htmlFor="man">Man</label>
                        <input type="checkbox" name="man" id="man" onChange={changeHandler} value={values.man}/>
                    </div>
                    <div>
                        <label htmlFor="shopping">Women</label>
                        <input type="checkbox" name="women" id="women" onChange={changeHandler} value={values.women}/>
                    </div>
                </div>
            </div>
            <div className="wrapp">
                <label htmlFor="age">Age</label>
                <input type="number" name="age" id="age" onChange={changeHandler} value={values.age}/>
            </div>
            <div className="wrapp">
                <label htmlFor="hight">Height in centimeter</label>
                <input type="number" name="hight" id="hight" onChange={changeHandler} value={values.hight}/>
            </div>

            <div className="wrapp">
                <label htmlFor="kilos">Kilograms</label>
                <input type="number" name="kilograms" id="kilograms" onChange={changeHandler} value={values.kilograms}/>
            </div>

            <div className="wrapp">
                <label htmlFor="activeness">Activeness</label>
                <select name="activeness" id="activeness" onChange={changeHandler} value={values.activeness}>
                    <option value="Basal Metabolic Rate">Basal Metabolic Rate</option>
                    <option value="Little or no physical activity">Little or no physical activity</option>
                    <option value="Light exercise (1-3 days a week)">Light exercise (1-3 days a week)</option>
                    <option value="Moderate exercise (3-5 days a week)">Moderate exercise (3-5 days a week)</option>
                    <option value="Heavy exercise (6-7 days a week)">Heavy exercise (6-7 days a week)</option>
                    <option value="Very heavy exercise (twice a day)">Very heavy exercise (twice a day)</option>
                </select>
            </div>
            <button type="submit">Submit</button>
        </form>
        </div>
    )
}