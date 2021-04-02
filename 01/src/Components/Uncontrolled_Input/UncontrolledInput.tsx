import React, {ChangeEvent, useRef, useState} from "react";
import {Button, TextField} from "@material-ui/core";


export function UncontrolledInput() {
    const [value, setValue] = useState('')
    const onChange = (event: ChangeEvent<HTMLInputElement>) => {
        const actualValue = event.currentTarget.value;
        setValue(actualValue)
    }
    return (
        <div>
            <p>Uncontrolled Input:</p>
            {/*<input onChange={onChange}/>*/}
            <TextField id="outlined-basic"
                       label="Value"
                       variant="outlined"
                       size="small"
                       onChange={onChange}/>- {value}
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
            <TextField id="outlined-basic"
                       label="Value"
                       variant="outlined" size="small"
                       ref={inputRef}/>
            {/*<input ref={inputRef}/>*/}
            <Button variant="contained" color="primary" size="medium"
                    onClick={save}>
                Save
            </Button>
           {/* <button onClick={save}>save</button>*/}
            - actual value {value}
        </div>
    )
}