import {useState} from "react";


function generationData () {
    console.log('generationData')
    // very-very difficult counting, very very !
    let result =  80000000001
    return result
}

//let result = generationData()

export const UseStateComponent = () => {
    console.log('UseState Component')
const [counter,setCounter] = useState(generationData) // вместо инициализ. значения
                                                    //используем результат функции


    const changer = (state: number) => {    // создаём ф-ю, которую используем вместо
        return state + 1                    // значения counter  в обработчике события
            }

    return (
        <>
            <h4>UseState Component (updated )</h4>
           <button onClick={() => setCounter(changer)}> + </button>
           {/* <button onClick={() =>setCounter(counter + 1)}> + </button>*/}
            {counter}
        </>
    )
}