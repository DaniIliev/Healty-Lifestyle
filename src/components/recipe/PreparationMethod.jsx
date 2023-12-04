import { useEffect } from "react"
import useClickOutside from "../../hooks/useClickOutside"

export default function PreparationMethod({metod, hide}){
    useEffect(() => {

        let blur =  document.querySelector('#blur')
         blur.classList.add('active')
         return () => {
         blur.classList.remove('active')
         }
     },[])

     const domNode = useClickOutside(hide)
    return(
        <div className="preparationMethod" ref={domNode}>
            <h1>Metod of preparation!</h1>
            <p>{metod}</p>
        </div>
    )
}