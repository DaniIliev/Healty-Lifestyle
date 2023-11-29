import { useState } from "react"

                                    // '{}'
export const useLocalStorage = (key, initialValue) => {
    const [state, setState] = useState(() => {
        const persistedStateSerialized = localStorage.getItem(key)
        if(persistedStateSerialized){
        // saving the data when the browser is refreshed//
            const persistedState = JSON.parse(persistedStateSerialized);
            return persistedState
        }
        return initialValue;
    })

    const setLocalStorageState = (value) => {
        setState(value);
        localStorage.setItem(key, JSON.stringify(value))
    }

    return [state, setLocalStorageState]
}

