import React, {useState} from "react";


export function UncontrolledInput() {
    const [value, setValue] = useState('')
    return (
        <div>
            <p>UncontrolledInput:</p>
            <input onChange={(event) => {
                const actualValue = event.currentTarget.value;
                setValue(actualValue)
            }  }/> - {value}
        </div>
    )
}