import { useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router-dom"
import * as userService from '../../services/userService'
import UserFormModal from "./UserFormModal"
import calorienCalculation from "../../utils/caloriеCalculation"



export default function UserInfoComponent(){
    const [showEditUser, setShowEditUser] = useState(false)
    const [calculatedData, setCalculatedData] = useState({})
    const [userDetails, setUserDetails] = useState({})
    const navigate = useNavigate()
    const {id} = useParams()


    useEffect(() => {
        userService.getDetails(id)
            .then(result => {
                console.log(result)
            if(result == '[]' || result.length == 0){
            navigate(`/user/${id}/createDetails`)
            }else{
                setUserDetails(result)
                setCalculatedData(calorienCalculation(result[0]))
            }
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
                            <p><strong>Username:</strong> {userDetails[0]?.username}</p>
                            <p><strong>Gender:</strong> {userDetails[0]?.man ? 'Man' : 'Women'}</p>
                            <p><strong>Hight in centimeter:</strong> {userDetails[0]?.hight}</p>
                            <p><strong>Age:</strong> {userDetails[0]?.age}</p>
                            <p><strong>Kilograms:</strong> {userDetails[0]?.kilograms}</p>
                            <p><strong>Activeness:</strong> {userDetails[0]?.activeness}</p>
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
                                        <th>Total calories for the day </th>
                                    </tr>
                                    <tr>
                                        <td>{calculatedData?.proteins} grams</td>
                                        <td>{calculatedData?.fat} grams</td>
                                        <td>{calculatedData?.carbs} grams</td>
                                        <td>{calculatedData?.totalCalorien} calories</td>
                                    </tr>
                                </table>
                                <img src="/images/macro.png" alt="macro" />
                            </div>
                        </div>
                    </div>
                        {showEditUser && <UserFormModal {...userDetails} />}

                    </div>
        </>
    )
}