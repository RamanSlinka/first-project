import {useEffect, useState} from "react";


export const  UseEffectComponent = () => {
const [counter, setCounter] = useState(1)
    console.log('useEffect component')

    useEffect(() => {
        console.log('useEffect render')
       // document.title = counter.toString()

       /* setTimeout(() => {
            console.log('setTimeout')
           // document.title = counter.toString()
        }, 1000)*/
        setInterval(() => {
            console.log('setInterval')
             setCounter((state)=> state + 1)
        }, 10000)

    }, [])




    return (
        <>
        <h4>UseEffect component</h4>
            {counter}
            <button onClick={() => setCounter(counter + 1)}>click</button>
        </>
    )
}