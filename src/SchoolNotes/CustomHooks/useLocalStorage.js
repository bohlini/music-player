//seesion vs local
//session gone on refresh
//local persists over multiple sessions
//localStorage when want to remeber something 

//difference between cookies and localStorage - browser handles cookies, you do not have to handle it 
//localStorage have to be cleared, cookies can have an expiration date
import { useState, useEffect } from "react";

export function useLocalStorage(key, initialValue) {
    const [storedValue, setStoredValue] = useState(() => {
        const stored = localStorage.getItem(key) //if this item exist in the localstorage - get it 
        return stored ? JSON.parse(stored) : initialValue //if it exist return else return initialValue
    })

    useEffect(() => {
        localStorage.setItem(key, JSON.stringify(storedValue))
    }, [key, initialValue])

    return [storedValue, setStoredValue] //whenever we want to use localStore somewhere, we can read it, and/or we can set the value
}
