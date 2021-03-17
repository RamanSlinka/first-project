import React, {ChangeEvent, useRef, useState} from "react";


export function UncontrolledInput() {
    const [value, setValue] = useState('')
    const onChange = (event: ChangeEvent<HTMLInputElement>) => {
        const actualValue = event.currentTarget.value;
        setValue(actualValue)
    }
    return (
        <div>
            <p>Uncontrolled Input:</p>
            <input onChange={onChange}/> - {value}
        </div>
    )
}

export function UncontrolledInputWithButton() {
    const [value, setValue] = useState('')
    const inputRef = useRef<HTMLInputElement>(null)
    const save = () => {
        const el = inputRef.current as HTMLInputElement;
        setValue(el.value)
    }
    return (
        <div>
            <p>Uncontrolled input + button:</p>
            <input ref={inputRef}/>
            <button onClick={save}>save</button>
            - actual value {value}
        </div>
    )
}