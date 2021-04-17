import {useState} from "react";


export const UseStateComponent = () => {
    console.log('UseState Component')
const [counter,setCounter] = useState(0)

    return (
        <>
            <h4>UseState Component (updated )</h4>
            <button onClick={() => setCounter(counter + 1)}> + </button>
            {counter}
        </>
    )
}