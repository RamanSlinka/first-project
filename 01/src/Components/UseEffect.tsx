import {useEffect, useState} from "react";


export const  UseEffectComponent = () => {
const [counter, setCounter] = useState(1)
    console.log('useEffect component')

    useEffect(() => {
        console.log('useEffect start')
        document.title = counter.toString()


    })
    return (
        <>
        <h4>UseEffect component</h4>

            <button onClick={() => setCounter(counter + 1)}></button>
        </>
    )
}