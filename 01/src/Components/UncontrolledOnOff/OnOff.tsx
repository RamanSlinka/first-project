import React from "react";


type OnOffPropsTitle = {
    on: boolean
    onChange: (on: boolean) => void
}
export default function UncontrolledOnOff(props: OnOffPropsTitle) {

    const onStyle = {
        padding: '5px',
        width: '30px',
        weight: '20px',
        border: '1px solid black',
        display: 'inline-block',
        background: props.on ? 'green' : 'white'
    };
    const offStyle = {
        marginLeft: '5px',
        padding: '5px',
        width: '30px',
        weight: '20px',
        border: '1px solid black',
        display: 'inline-block',
        background: props.on ?  'white': 'red'
    };
    const identificatorStyle = {
        marginLeft: '5px',
        width: '15px',
        height: '15px',
        borderRadius: '10px',
        border: '1px solid black',
        display: 'inline-block',
        background: props.on ?  'green': 'red'

    };
    const onClicked = () => {props.onChange(true) };
    const offClicked = () => {props.onChange(false)};

    return (
        <div>
            <div style={onStyle} onClick={onClicked }>On</div>
            <div style={offStyle} onClick={offClicked }>Off</div>
            <div style={identificatorStyle}></div>
        </div>
    )

}
