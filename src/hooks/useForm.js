import { useState } from "react";


export default function useForm(initialValue, onSubmitHahdler){
    const [values, setValues] = useState(initialValue)
    const [errors, setErrors] = useState([])

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
        if(e.target.name == 'man' && valueInputs == true){

           return setValues(state => ({
                ...state,
                women: false,
                man: true,
            }))
        }else if(e.target.name == 'women' && valueInputs == true){
            return setValues(state => ({
                ...state,
                man: false,
                women: true
            }))
        }

        setValues(state => ({
            ...state,
            [e.target.name]: valueInputs,
        }))
    }


    const onSubmit = async (e) => {
        e.preventDefault() 
        const result = await onSubmitHahdler(values)
        if(result?.errors){
            return setValues(state => ({
                ...state,
                errors: {...result.errors}
            }))
        }
        if(result.name){
            setValues(initialValue)
        }
    }
    
    return {
        values,
        errors,
        changeHandler,
        onSubmit
    }
}