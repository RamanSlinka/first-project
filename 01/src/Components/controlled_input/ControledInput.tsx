import React, {ChangeEvent, useState} from "react";
import {Checkbox, TextField} from "@material-ui/core";

export function ControlledInput() {
const [parentValue, setParentValue] = useState('');
const onChange =  (e: ChangeEvent<HTMLInputElement>) => {setParentValue(e.currentTarget.value)}
    return (
        <div>
            {/*<input value={parentValue}
                   onChange={onChange}/>*/}
            <TextField id="outlined-basic"
                       label="Value"
                       variant="outlined"
                       size="small"

                       value={parentValue}
                       onChange={onChange}/>
        </div>
    )
}
export function ControlledCheckbox() {
const [checked, setChecked] = useState(true)
    const onChange = (e: ChangeEvent<HTMLInputElement> ) => {setChecked(e.currentTarget.checked)}
    return (
        <div>
            <Checkbox color="primary"
                      checked={checked}
                      onChange={onChange}/>
        </div>
    )
}

export function ControlledSelect () {
    const [selected, setSelected] = useState<string | undefined>(undefined)
    const onChange = (e: ChangeEvent<HTMLSelectElement>) => {setSelected(e.currentTarget.value)}
    return (
        <div>
            <select value={selected} onChange={onChange}>
            <option >none</option>
            <option value={'1'}>Hrodna</option>
            <option value={'2'}>Kossovo</option>
            <option value={'3'}>Minsk</option>
            </select>
        </div>
    )
}