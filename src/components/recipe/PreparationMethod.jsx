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
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Odit molestias dicta maiores ut, minima deleniti quibusdam sequi recusandae iste vel pariatur necessitatibus ad delectus autem quis, aliquam, quam suscipit facere iure a eos. Ab cum labore corrupti consectetur suscipit nam, aliquid sapiente blanditiis nulla qui quasi vitae aut vero nostrum quidem fugiat. Eius a amet quam eligendi velit natus, culpa laudantium quae temporibus, totam vel sunt deleniti nemo eveniet, repellat eum? Doloribus doloremque temporibus maiores? Accusantium quasi qui veniam ipsam architecto quod saepe itaque amet quo impedit laborum illum earum suscipit reprehenderit obcaecati fugiat debitis repudiandae dicta eaque, expedita exercitationem.</p>
        </div>
    )
}