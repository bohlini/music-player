import { useCallback, useMemo, useState } from "react"

export function List() {
    const [selectedItems, setSelectedItems] = useState()
    
    //Create a array called items
    // const items = useMemo(() => {
    //     return Array.from({length: 100}, (_,i) => ({
    //         id: i,
    //         name: `Item ${i + 1}`)
    // })
    // }, [])

    //when item is clicked, take the ID and set it in the state
    const handleItemSelect = useCallback((id) => {
        setSelectedItems(id)
    }, [])

    return( 
        <>
        {/* <h1>list component</h1>
        {items.map( => (
            <li></li>
        ))
        } */}
        </>
    )
}