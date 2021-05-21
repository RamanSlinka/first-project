import React, {useEffect, useState} from 'react'

export const ResetUseEffect = () => {
    const [counter,setCounter] = useState(1)

    console.log('set time out example')
    useEffect(() => {
        console.log('effect occurred')
    } ,[])
    const increase = () => {
        setCounter(counter + 1)
    }
    return <>
    Hello, counter: {counter}
        <button onClick= { increase }
        > + </button>
    </>
}
