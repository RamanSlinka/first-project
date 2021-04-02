import React, {useState} from "react";


type OnOffPropsTitle = {
   // on: boolean
}
export default function OnOff(props: OnOffPropsTitle) {

    let [ on, setOn] = useState(false)

    const onStyle = {
        padding: '5px',
        width: '30px',
        weight: '20px',
        border: '1px solid black',
        borderRadius: '5px',
        display: 'inline-block',
        background: on ? 'green' : 'white'
    };
    const offStyle = {
        marginLeft: '5px',
        padding: '5px',
        width: '30px',
        weight: '20px',
        border: '1px solid black',
        borderRadius: '5px',
        display: 'inline-block',
        background: on ?  'white': 'red'
    };
    const identificatorStyle = {
        marginLeft: '5px',
        width: '15px',
        height: '15px',
        borderRadius: '10px',
        border: '1px solid black',
        display: 'inline-block',
        background: on ?  'green': 'red'

    };


    return (
        <div>
            <div style={onStyle} onClick={ () => {setOn(true) }}>On</div>
            <div style={offStyle} onClick={ () => {setOn(false)}}>Off</div>
            <div style={identificatorStyle}></div>
        </div>
    )

}
