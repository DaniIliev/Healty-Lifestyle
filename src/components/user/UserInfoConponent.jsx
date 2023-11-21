import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import * as userService from '../../services/userService'
import UserFormModal from "./UserFormModal"



export default function UserInfoComponent(){
    const [userDetails, setUserDetails] = useState([])

    const {id} = useParams()
    const [showEditUser, setShowEditUser] = useState(false)

    let bmrMan;
    let bmrWomen;
    useEffect(() => {
        userService.getDetails(id)
            .then(result => {
                setUserDetails(result)
                bmrMan = 66.473 + (13.7516 * result[0].kilograms) + (5.0033 * result[0].hight) - (6.7550 * result[0].age);
                bmrWomen = 655.095 + (9.5634 * result[0].kilograms) + (1.8496 * result[0].hight) - (4.330 * result[0].age);
                console.log(bmrMan, bmrWomen)
            })
    },[id])




    const showEditUserForm = () => {
        setShowEditUser(state => !state)
    }
    return(
        <>
        <div className="userDetailsPage">
        <h1>Your detailed Information</h1>
        <p className="attention">Attention! Calculated calories are those calories that a person needs to maintain their weight. If a person aims to increase his weight in a healthy way, he increases his calories by 500, and if he wants to lose weight, he decreases them by 500. The graphs should be taken into account</p>
        <div className="userdetails">
            <div className='userDetsails-card'>
                <p><strong>Username:</strong> Daniel</p>
                <p><strong>Gender:</strong> Man</p>
                <p><strong>Height in centimeter:</strong> 187</p>
                <p><strong>Kilograms:</strong> 80</p>
                <p><strong>Activeness:</strong> 7-days</p>
                <button onClick={showEditUserForm}>Edit</button>
            </div>

            <div>
                {/* <h3>calculator</h3> */}
                <div className='resultdata'>
                    <table>
                        <tr>
                            <th>Protein</th>
                            <th>Fat</th>
                            <th>Carbs</th>
                            <th>Sugar</th>
                            <th>Total calories for the day </th>
                        </tr>
                        <tr>
                            <td>360 grams</td>
                            <td>100 grams</td>
                            <td>180 grams</td>
                            <td>200 grams</td>
                            <td>2700 calories</td>
                        </tr>
                    </table>
                    <img src="/images/macro.png" alt="macro" />
                </div>
            </div>
        </div>
        </div>

        {showEditUser && <UserFormModal />}
        </>
    )
}