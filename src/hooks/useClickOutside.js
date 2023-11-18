import { useRef, useEffect } from "react"
export default function useClickOutside(handler){
    let domNode = useRef()

    useEffect(() => {
        let maybeHandler = (event) => {
            console.log(event)
            console.log(domNode.current.contains(event.target))
            if(!domNode.current.contains(event.target)){
                handler()
            }
        }

        document.addEventListener('mousedown', maybeHandler);
        return () => {
            document.removeEventListener("mousedown", maybeHandler)
        }
    })

    return domNode
}