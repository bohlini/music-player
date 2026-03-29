// import "ChildPerformance" from "../SchoolNotes/ChildPerformance"
import { useState, useMemo, useCallback, memo } from "react"
import ChildPerformance from "./ChildPerformance"
import { List } from "./List"

//Child importet is always rendered when Parent is rendered - expensive. 

//useMemo, useCallback, memo to handle this. 
//useMemo - values
//useCallbacks - callbacks/functions
//memo - components - when parent going to a lot of re-renders and dont want the child to do it
    //if child takes prop (user) the child keeps re-render even if wrapped in memo

export default function Performance() {
    const [ count, setCount] = useState(0)
    console.log('Parent Rendered')

        //for props to not re-render we ned useMemo 
    //and send const name as a prop into the child
const user = useMemo(() => {
    return {username : 'useMemo John'}
}, [])

//You can wrap all the values that you export  in the provider in useMemo()
 const values = useMemo(() => {
//    characters, 
//    setCharacters
 })

//Another use case for useMemo - not overusing
//They can also slow down the app bc of comparisons - unnecessary checks
// Normal in contexts

//How to check for unnecessary re-renders 
//console logs in child components to see when they render

//useCallback - 
const calculateValue = useCallback(() => {
    return count * 2
}, [count]) 

    return (
        <>
        <h1>{count}</h1>
        <h2>{calculateValue()}</h2>
        <p>Parent Component</p>
        <button onClick={() => setCount(count + 1)}>Increment</button>
        <ChildPerformance user={user} /> 

{/* //Large lists example */}
        <List/>
        </>
    )
}