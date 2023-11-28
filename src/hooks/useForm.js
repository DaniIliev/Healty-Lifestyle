import { useState } from "react";


export default function useForm(initialValue, onSubmitHahdler){
    const [values, setValues] = useState(initialValue)


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

        setValues(state => ({
            ...state,
            [e.target.name]: valueInputs,
        }))
    }


    const onSubmit = (e) => {
        e.preventDefault()  
        onSubmitHahdler(values)
        setValues(initialValue)
    }
    
    return {
        values,
        changeHandler,
        onSubmit
    }
}