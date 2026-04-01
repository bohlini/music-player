import { useState, useEffect } from "react";

function useLocalStorage(key, initialValue) {
    const [storedValue, setStoredValue] = useState(() => {
        const stored = localStorage.getItem(key)
        if (stored === 'undefined') return initialValue
        return stored ? JSON.parse(stored) : initialValue
    })

    useEffect(() => {
        localStorage.setItem(key, JSON.stringify(storedValue))
    }, [key, storedValue])

    return [storedValue, setStoredValue]
}

export { useLocalStorage }