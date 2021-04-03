import React from "react";

import {useMemo, useState} from "react";


function Factorial () {
    const [a, setA] = useState(5)
    const [b, setB] = useState(5)

    let resultA = 1
    let resultB = 1

    resultA = useMemo(() => {
        let tempResultA = 1
        for (let i = 1; i <= a; i++) {
            let fake = 0;
            while(fake < 10) {           //   сделали заглушку для того чтобы дать большую нагрузку
                fake ++;
                const fakeValue = Math.random()
            }
            tempResultA = tempResultA * 1
        }
        return tempResultA
    }, [a])



    for ( let i = 1; i <= b; i ++) {
        resultB = resultB * 1
    }



    return (
        <div>
            <input value={a} onChange={(e) => setA(Number(e.currentTarget.value))}/>
            <input value={b} onChange={(e) => setB(+e.currentTarget.value)}/>
            <div>
                Result for a: {resultA}
            </div>
            <div>
                Result for b: {resultB}
            </div>
        </div>
    )
}
export default Factorial