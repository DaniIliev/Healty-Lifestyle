import { useNavigate } from 'react-router-dom'
import UseForm from '../../hooks/useForm'
import * as userService from '../../services/userService'
import { useContext } from 'react'
import { AuthContext } from '../../contexts/authContext'

const initialFormValues = {
    username: '',
    man: '',
    women: '',
    hight: '',
    activeness: '',
    kilograms: '',
}


export default function UserFormModal(){
    const navigate = useNavigate()
    const {userId} = useContext(AuthContext)


    const onSubmitHandler = () => {
        console.log(values)
        userService.postDetails({...values, ownerId: userId})
                .then(() => navigate('/'))
                .catch((err) => console.log(err))
    }
    const {values, changeHandler, onSubmit} = UseForm(initialFormValues, onSubmitHandler)

    return(
        <>
        <h1>Your detailed Information</h1>
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
                    <option value="BMR">Basal Metabolic Rate</option>
                    <option value="noPhysicalactivity">Little or no physical activity</option>
                    <option value="1-3days">Light exercise (1-3 days a week)</option>
                    <option value="3-5days">Moderate exercise (3-5 days a week)</option>
                    <option value="6-7days">Heavy exercise (6-7 days a week)</option>
                    <option value="twiceAday">Very heavy exercise (twice a day)</option>
                </select>
            </div>
            <button type="submit">Submit</button>
        </form>
        </>
    )
}